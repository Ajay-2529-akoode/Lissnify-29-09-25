// SEO Types and Interfaces

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: string;
  canonical_url?: string;
  robots?: string;
  author?: string;
  published_time?: string;
  modified_time?: string;
  section?: string;
  tags?: string[];
}

export interface BlogSEOData extends SEOData {
  type: 'article';
  article_author?: string;
  article_published_time?: string;
  article_modified_time?: string;
  article_section?: string;
  article_tag?: string[];
}

export interface ListenerSEOData extends SEOData {
  type: 'profile';
  profile_first_name?: string;
  profile_last_name?: string;
  profile_username?: string;
}

export interface PageSEOData extends SEOData {
  type: 'website';
}

// API Response for SEO data
export interface SEOResponse {
  success: boolean;
  data?: SEOData;
  error?: string;
}
