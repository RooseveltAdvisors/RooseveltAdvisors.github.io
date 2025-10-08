import type { LoadContext, Plugin } from "@docusaurus/types";
import path from "path";
import fs from "fs";

interface BlogListItem {
  title: string;
  permalink: string;
  date: string;
  unlisted?: boolean;
}

interface BlogListData {
  title: string;
  items: BlogListItem[];
}

export default async function recentBlogPostsPlugin(
  context: LoadContext
): Promise<Plugin<void>> {
  return {
    name: "recent-blog-posts-plugin",
    async postBuild() {
      // This runs after blog plugin has built its data
    },
    async contentLoaded({ actions }) {
      const { setGlobalData } = actions;

      try {
        // Read the blog list directly from the generated file
        const blogListPath = path.join(
          context.generatedFilesDir,
          "docusaurus-plugin-content-blog",
          "default",
          "blog-post-list-prop-default.json"
        );

        if (fs.existsSync(blogListPath)) {
          const blogListContent = fs.readFileSync(blogListPath, "utf-8");
          const blogListData: BlogListData = JSON.parse(blogListContent);

          const recentPosts = blogListData.items.slice(0, 5);
          setGlobalData({ recentPosts });
        } else {
          console.warn(
            `Blog list file not found at: ${blogListPath}`
          );
          setGlobalData({ recentPosts: [] });
        }
      } catch (error) {
        console.error("Error reading blog list:", error);
        setGlobalData({ recentPosts: [] });
      }
    },
  };
}
