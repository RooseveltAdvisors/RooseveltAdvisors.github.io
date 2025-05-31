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

// This will be populated at build time by the BlogPostsSection component
// which will use Docusaurus's blog plugin to fetch the most recent posts
const featuredBlogPosts: FeaturedBlogPost[] = [];

export default featuredBlogPosts;
