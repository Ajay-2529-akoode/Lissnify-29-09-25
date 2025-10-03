# Meta Data Management System

This system provides a centralized way to manage meta titles, descriptions, and SEO data for all pages in the Lissnify application.

## Files Structure

- `src/config/meta.json` - Central configuration file with all page meta data
- `src/utils/meta.ts` - Utility functions for retrieving and processing meta data
- `src/Components/MetaHead.tsx` - Reusable Head component for rendering meta tags

## Usage

### Basic Usage

For static pages, simply import the utilities and use them:

```tsx
import MetaHead from "@/Components/MetaHead";
import { getMetaData } from "@/utils/meta";

export default function MyPage() {
  const metaData = getMetaData('page-key');
  
  return (
    <div>
      <MetaHead meta={metaData} />
      {/* Your page content */}
    </div>
  );
}
```

### Dynamic Pages

For pages with dynamic content (like blog posts, user profiles), use the specialized functions:

```tsx
import { getBlogPostMeta, getListenerProfileMeta } from "@/utils/meta";

// For blog posts
const metaData = getBlogPostMeta(
  blogTitle,
  blogDescription,
  category
);

// For listener profiles
const metaData = getListenerProfileMeta(
  listenerName,
  categoryName
);
```

### Advanced Usage

You can also pass additional props to MetaHead for enhanced SEO:

```tsx
<MetaHead 
  meta={metaData}
  canonicalUrl="https://lissnify.com/page-url"
  ogImage="/custom-image.jpg"
  ogType="article"
  twitterCard="summary_large_image"
  noIndex={false}
/>
```

## Available Page Keys

The following page keys are available in the meta configuration:

- `home` - Homepage
- `blog` - Blog listing page
- `blog-slug` - Individual blog post (use getBlogPostMeta)
- `login` - Login page
- `signup` - Signup page
- `listener` - Become a listener page
- `listeners` - Find listeners page
- `listener-category` - Listener category page (use getListenerCategoryMeta)
- `listener-profile` - Individual listener profile (use getListenerProfileMeta)
- `seeker` - Seeker dashboard
- `community` - Community page
- `community-topic` - Community topic page (use getCommunityTopicMeta)
- `help` - Help center
- `crisis` - Crisis support
- `about` - About page
- `privacy` - Privacy policy
- `terms` - Terms of service
- `dashboard-seeker` - Seeker dashboard
- `dashboard-listener` - Listener dashboard
- `chats` - Chats page
- `notifications` - Notifications page
- `demo` - Demo page
- `support-category` - Support category page (use getSupportCategoryMeta)

## Variable Replacement

The system supports variable replacement in meta data using `{{variableName}}` syntax:

```json
{
  "blog-slug": {
    "title": "{{title}} | Lissnify Blog",
    "description": "{{description}}",
    "keywords": "mental health, wellness, {{category}}, emotional support"
  }
}
```

## Adding New Pages

To add meta data for a new page:

1. Add the page configuration to `src/config/meta.json`:
```json
{
  "pages": {
    "new-page": {
      "title": "New Page Title | Lissnify",
      "description": "Description for the new page",
      "keywords": "relevant, keywords, here"
    }
  }
}
```

2. Use it in your page component:
```tsx
const metaData = getMetaData('new-page');
```

## Specialized Functions

### getBlogPostMeta(title, description, category)
Generates meta data for individual blog posts with proper title formatting and category-specific keywords.

### getListenerProfileMeta(listenerName, categoryName)
Creates meta data for listener profile pages with personalized titles and descriptions.

### getCommunityTopicMeta(topicName)
Generates meta data for community topic discussions.

### getSupportCategoryMeta(categoryName)
Creates meta data for support category pages.

### getListenerCategoryMeta(categoryName)
Generates meta data for listener category pages.

## MetaHead Component Props

- `meta` (required): MetaData object with title, description, and keywords
- `canonicalUrl` (optional): Canonical URL for the page
- `ogImage` (optional): Open Graph image URL (defaults to "/logo.png")
- `ogType` (optional): Open Graph type (defaults to "website")
- `twitterCard` (optional): Twitter card type (defaults to "summary_large_image")
- `noIndex` (optional): Whether to prevent search engine indexing (defaults to false)

## Benefits

1. **Centralized Management**: All meta data in one place
2. **Consistency**: Ensures consistent meta data across pages
3. **SEO Optimization**: Includes Open Graph, Twitter cards, and structured data
4. **Dynamic Content**: Support for variable replacement
5. **Type Safety**: TypeScript interfaces for better development experience
6. **Reusability**: Easy to use across all pages

## Example Implementation

Here's a complete example of how to implement this in a page:

```tsx
"use client";
import React from "react";
import MetaHead from "@/Components/MetaHead";
import { getMetaData } from "@/utils/meta";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function ExamplePage() {
  const metaData = getMetaData('example-page');
  
  return (
    <div className="min-h-screen">
      <MetaHead 
        meta={metaData}
        canonicalUrl="https://lissnify.com/example"
      />
      <Navbar />
      
      <main>
        <h1>Example Page</h1>
        <p>Your page content here...</p>
      </main>
      
      <Footer />
    </div>
  );
}
```

This system makes it easy to maintain consistent, SEO-optimized meta data across your entire application while providing flexibility for dynamic content.
