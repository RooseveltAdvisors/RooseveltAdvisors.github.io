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
  formattedDate?: string;
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
    const pluginData = usePluginData(
      "recent-blog-posts-plugin",
    ) as RecentPostsPluginData;

    if (!pluginData?.recentPosts || pluginData.recentPosts.length === 0) {
      return [];
    }

    const recentPosts = pluginData.recentPosts.slice(0, count);

    return recentPosts.map((post) => {
      const slug = post.permalink.split("/").filter(Boolean).pop() || "";

      return {
        id: slug,
        title: post.title,
        description: post.description || "",
        date: post.date,
        // Use build-time formatted date to avoid SSR/client hydration mismatch
        formattedDate: post.formattedDate || post.date,
        permalink: post.permalink,
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
