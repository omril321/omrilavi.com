// Shared SEO-related types
export interface BaseSEOData {
  title: string;
  description: string;
  image?: `/blog-assets/${string}`;
  publishDate?: string;
}

export interface SEOProps extends BaseSEOData {
  type?: "website" | "article";
  url?: string;
}

// For post metadata (simplified - no duplication)
export interface PostMetadata extends BaseSEOData {
  url: string;
  publishDate: string; // Required for posts
}
