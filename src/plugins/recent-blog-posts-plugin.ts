import type { LoadContext, Plugin } from "@docusaurus/types";

interface BlogListItem {
  title: string;
  permalink: string;
  date: string;
  formattedDate: string;
  image?: string;
  description?: string;
  tags?: string[];
  readingTime?: number;
  unlisted?: boolean;
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatDate(dateString: string): string {
  const d = new Date(dateString);
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}

export default async function recentBlogPostsPlugin(
  context: LoadContext,
): Promise<Plugin<void>> {
  return {
    name: "recent-blog-posts-plugin",
    async allContentLoaded({ allContent, actions }) {
      const { setGlobalData } = actions;

      try {
        const blogContent = allContent["docusaurus-plugin-content-blog"]?.[
          "default"
        ] as any;

        if (blogContent?.blogPosts && Array.isArray(blogContent.blogPosts)) {
          const recentPosts: BlogListItem[] = blogContent.blogPosts
            .slice(0, 5)
            .map((post: any) => ({
              title: post.metadata?.title || "",
              permalink: post.metadata?.permalink || "",
              date: post.metadata?.date || "",
              formattedDate:
                post.metadata?.formattedDate ||
                formatDate(post.metadata?.date || ""),
              image: post.metadata?.frontMatter?.image || "",
              description: post.metadata?.description || "",
              tags:
                post.metadata?.tags
                  ?.map((t: any) =>
                    typeof t === "string" ? t : t?.label || "",
                  )
                  .filter(Boolean) || [],
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
