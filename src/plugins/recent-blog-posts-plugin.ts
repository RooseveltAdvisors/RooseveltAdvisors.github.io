import type { LoadContext, Plugin } from "@docusaurus/types";

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

export default async function recentBlogPostsPlugin(
  context: LoadContext,
): Promise<Plugin<void>> {
  return {
    name: "recent-blog-posts-plugin",
    async allContentLoaded({ allContent, actions }) {
      const { setGlobalData } = actions;

      try {
        // Get blog content from allContent (populated by blog plugin)
        const blogContent = allContent["docusaurus-plugin-content-blog"]?.[
          "default"
        ] as any;

        if (blogContent?.blogPosts && Array.isArray(blogContent.blogPosts)) {
          // Extract recent posts data (top 5)
          const recentPosts: BlogListItem[] = blogContent.blogPosts
            .slice(0, 5)
            .map((post: any) => ({
              title: post.metadata?.title || "",
              permalink: post.metadata?.permalink || "",
              date: post.metadata?.date || "",
              image: post.metadata?.frontMatter?.image || "",
              description: post.metadata?.description || "",
              tags:
                post.metadata?.tags?.map((t: any) => t.label || t) || [],
              readingTime: Math.round(post.metadata?.readingTime || 0),
              unlisted: post.metadata?.unlisted || false,
            }));

          setGlobalData({ recentPosts });
        } else {
          setGlobalData({ recentPosts: [] });
        }
      } catch (error) {
        console.error("Error loading blog posts:", error);
        setGlobalData({ recentPosts: [] });
      }
    },
  };
}
