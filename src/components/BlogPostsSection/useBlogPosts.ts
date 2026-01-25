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

      // Extract date in YYYY-MM-DD format
      const postDate = new Date(post.date);
      const dateStr = postDate.toISOString().split("T")[0];

      // Construct image path: /img/blog/[date]-[slug]/hero-banner.jpg
      const imageUrl = `/img/blog/${dateStr}-${slug}/hero-banner.jpg`;

      return {
        id: slug,
        title: post.title,
        description: "", // Not available in minimal post data
        date: post.date,
        formattedDate: formatDate(post.date),
        permalink: post.permalink,
        imageUrl,
        tags: [], // Not available in minimal post data
        readingTime: 5, // Default value
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
