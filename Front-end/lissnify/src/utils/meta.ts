import metaConfig from '@/config/meta.json';

export interface MetaData {
  title: string;
  description: string;
  keywords?: string;
}

export interface MetaConfig {
  pages: {
    [key: string]: MetaData;
  };
  default: MetaData;
}

/**
 * Get meta data for a specific page
 * @param pageKey - The key for the page in the meta config
 * @param variables - Optional variables to replace in the meta data (e.g., {{title}}, {{category}})
 * @returns MetaData object with title, description, and keywords
 */
export function getMetaData(pageKey: string, variables: Record<string, string> = {}): MetaData {
  const config = metaConfig as MetaConfig;
  const pageMeta = config.pages[pageKey] || config.default;
  
  // Replace variables in the meta data
  const processedMeta: MetaData = {
    title: replaceVariables(pageMeta.title, variables),
    description: replaceVariables(pageMeta.description, variables),
    keywords: pageMeta.keywords ? replaceVariables(pageMeta.keywords, variables) : undefined
  };
  
  return processedMeta;
}

/**
 * Replace variables in a string with actual values
 * @param template - String template with {{variable}} placeholders
 * @param variables - Object with variable values
 * @returns String with variables replaced
 */
function replaceVariables(template: string, variables: Record<string, string>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return variables[key] || match;
  });
}

/**
 * Generate page title with site name
 * @param title - Page title
 * @param siteName - Site name (default: "Lissnify")
 * @returns Formatted page title
 */
export function generatePageTitle(title: string, siteName: string = "Lissnify"): string {
  // If title already contains site name, return as is
  if (title.toLowerCase().includes(siteName.toLowerCase())) {
    return title;
  }
  
  return `${title} | ${siteName}`;
}

/**
 * Get meta data for blog post
 * @param blogTitle - Blog post title
 * @param blogDescription - Blog post description
 * @param category - Blog post category
 * @returns MetaData for blog post
 */
export function getBlogPostMeta(blogTitle: string, blogDescription: string, category?: string): MetaData {
  return getMetaData('blog-slug', {
    title: blogTitle,
    description: blogDescription,
    category: category || 'mental health'
  });
}

/**
 * Get meta data for listener profile
 * @param listenerName - Listener's name
 * @param categoryName - Category name
 * @returns MetaData for listener profile
 */
export function getListenerProfileMeta(listenerName: string, categoryName: string): MetaData {
  return getMetaData('listener-profile', {
    listenerName,
    categoryName
  });
}

/**
 * Get meta data for community topic
 * @param topicName - Topic name
 * @returns MetaData for community topic
 */
export function getCommunityTopicMeta(topicName: string): MetaData {
  return getMetaData('community-topic', {
    topicName
  });
}

/**
 * Get meta data for support category
 * @param categoryName - Support category name
 * @returns MetaData for support category
 */
export function getSupportCategoryMeta(categoryName: string): MetaData {
  return getMetaData('support-category', {
    categoryName
  });
}

/**
 * Get meta data for listener category
 * @param categoryName - Listener category name
 * @returns MetaData for listener category
 */
export function getListenerCategoryMeta(categoryName: string): MetaData {
  return getMetaData('listener-category', {
    categoryName
  });
}
