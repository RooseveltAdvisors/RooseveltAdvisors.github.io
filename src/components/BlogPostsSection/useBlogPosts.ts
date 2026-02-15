import { usePluginData } from "@docusaurus/useGlobalData";

export type FeaturedBlogPost = {
  id: string;
  title: string;
  description: string;
  date: string;
  formattedDate: string;
  permalink: string;
  imageUrl?: string;
  tags: string[];
  readingTime?: number;
};

interface BlogListItem {
  title: string;
  permalink: string;
  date: string;
  image?: string;
  description?: string;
  tags?: string[];
  readingTime?: number;
  unlisted?: boolean;
}

interface RecentPostsPluginData {
  recentPosts: BlogListItem[];
}

export function useRecentBlogPosts(count: number = 3): FeaturedBlogPost[] {
  try {
    // Get blog posts from our custom plugin that injects them into global data
    const pluginData = usePluginData(
      "recent-blog-posts-plugin",
    ) as RecentPostsPluginData;

    if (!pluginData?.recentPosts || pluginData.recentPosts.length === 0) {
      console.error("No blog posts found from recent-blog-posts-plugin");
      return [];
    }

    // Get the most recent posts (already sorted by date in descending order)
    const recentPosts = pluginData.recentPosts.slice(0, count);

    // Transform to FeaturedBlogPost format
    return recentPosts.map((post) => {
      // Extract slug from permalink
      const slug = post.permalink.split("/").filter(Boolean).pop() || "";

      return {
        id: slug,
        title: post.title,
        description: post.description || "",
        date: post.date,
        formattedDate: formatDate(post.date),
        permalink: post.permalink,
        // Only set imageUrl if the post actually declared an image in frontmatter
        imageUrl: post.image || undefined,
        tags: post.tags || [],
        readingTime: post.readingTime || 5,
      };
    });
  } catch (error) {
    console.error("Error loading blog posts:", error);
    return [];
  }
}

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
}
