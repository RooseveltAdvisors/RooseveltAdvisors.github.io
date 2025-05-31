import useGlobalData from '@docusaurus/useGlobalData';
import type {FeaturedBlogPost} from '@site/src/data/featuredBlogPosts';

interface BlogPost {
  id?: string;
  metadata?: {
    title?: string;
    description?: string;
    date?: string;
    formattedDate?: string;
    permalink?: string;
    image?: string;
    frontMatter?: {
      image?: string;
    };
    source?: string;
    tags?: string[];
    readingTime?: number;
  };
}

interface BlogPluginData {
  blogPosts?: BlogPost[];
}

export function useRecentBlogPosts(count: number = 3): FeaturedBlogPost[] {
  try {
    // Get global data which includes blog posts
    const globalData = useGlobalData();
    const blogPluginData = globalData?.['docusaurus-plugin-content-blog']?.['default'] as BlogPluginData;
    
    if (!blogPluginData?.blogPosts || blogPluginData.blogPosts.length === 0) {
      return getFallbackPosts();
    }
    
    // Sort by date and get the most recent posts
    const sortedPosts = [...blogPluginData.blogPosts]
      .sort((a, b) => {
        const dateA = new Date(a.metadata?.date || 0);
        const dateB = new Date(b.metadata?.date || 0);
        return dateB.getTime() - dateA.getTime();
      })
      .slice(0, count);
    
    // Transform to FeaturedBlogPost format
    return sortedPosts.map(post => {
      const metadata = post.metadata || {};
      const frontMatter = metadata.frontMatter || {};
      
      // Extract image URL - newer posts have image: ./img/hero-banner.png in frontmatter
      let imageUrl = frontMatter.image || metadata.image || '';
      
      // Convert relative path to absolute path
      if (imageUrl && imageUrl.startsWith('./')) {
        // Try to get the actual blog folder path from source
        const sourcePath = metadata.source || '';
        const blogFolderMatch = sourcePath.match(/blog\/([^\/]+)\//);
        
        if (blogFolderMatch) {
          // Use the actual folder name (with date prefix)
          imageUrl = `/blog/${blogFolderMatch[1]}${imageUrl.substring(1)}`;
        } else {
          // Fallback to permalink-based path
          const permalink = metadata.permalink || '';
          const blogPath = permalink.endsWith('/') ? permalink.slice(0, -1) : permalink;
          imageUrl = blogPath + imageUrl.substring(1);
        }
      } else if (!imageUrl) {
        // Fallback: assume hero-banner.png exists in img folder
        // Try to get the actual blog folder path from source
        const sourcePath = metadata.source || '';
        const blogFolderMatch = sourcePath.match(/blog\/([^\/]+)\//);
        
        if (blogFolderMatch) {
          imageUrl = `/blog/${blogFolderMatch[1]}/img/hero-banner.png`;
        } else {
          // Last resort: use permalink
          const permalink = metadata.permalink || '';
          const blogPath = permalink.endsWith('/') ? permalink.slice(0, -1) : permalink;
          imageUrl = `${blogPath}/img/hero-banner.png`;
        }
      }
      
      return {
        id: post.id || metadata.permalink?.split('/').pop() || '',
        title: metadata.title || '',
        description: metadata.description || '',
        date: metadata.date || '',
        formattedDate: metadata.formattedDate || formatDate(metadata.date),
        permalink: metadata.permalink || '',
        imageUrl,
        tags: metadata.tags || [],
        readingTime: metadata.readingTime || 5
      };
    });
  } catch (error) {
    console.warn('Error loading blog posts:', error);
    return getFallbackPosts();
  }
}

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return dateString;
  }
}

function getFallbackPosts(): FeaturedBlogPost[] {
  return [
    {
      id: "building-aoa-agent-lovable-n8n",
      title: "Building AoA Agent with Lovable and n8n",
      description:
        "Learn how to build an AoA (Agent of Agents) using Lovable for the UI and n8n for workflow automation",
      date: "2025-05-31",
      formattedDate: "May 31, 2025",
      permalink: "/blog/building-aoa-agent-lovable-n8n",
      imageUrl: "/blog/2025-05-31-building-aoa-agent-lovable-n8n/img/hero-banner.png",
      tags: ["no-code", "lovable", "n8n"],
      readingTime: 5,
    },
    {
      id: "fastapi-mcp-client",
      title: "FastAPI MCP Client",
      description: "Building a FastAPI client for Model Context Protocol (MCP)",
      date: "2025-04-14",
      formattedDate: "April 14, 2025",
      permalink: "/blog/fastapi-mcp-client",
      imageUrl: "/blog/2025-04-14-fastapi-mcp-client/img/hero-banner.png",
      tags: ["fastapi", "mcp", "python"],
      readingTime: 8,
    },
    {
      id: "modular-ai-agents",
      title: "Modular AI Agents",
      description:
        "Design patterns and best practices for building modular AI agent systems",
      date: "2025-04-05",
      formattedDate: "April 5, 2025",
      permalink: "/blog/architecting-modular-ai-agents",
      imageUrl: "/blog/2025-04-05-modular-ai-agents/img/hero-banner.png",
      tags: ["ai", "agents", "architecture"],
      readingTime: 10,
    },
  ];
} 