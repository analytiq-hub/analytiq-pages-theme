# Analytiq Pages Theme

A modern, responsive Jekyll theme that combines the power of Tailwind CSS with advanced features like syntax highlighting, interactive diagrams, and comprehensive blog layouts. Perfect for technical documentation, business websites, and developer portfolios.

**👉 [View Live Demo](https://analytiqhub.com/analytiq-pages-starter/)**

**🚀 [Get Started with the Starter Template](https://github.com/analytiq-hub/analytiq-pages-starter)**

## Features

- **Modern Design**: Built with Tailwind CSS for responsive, customizable layouts
- **Syntax Highlighting**: Integrated highlight.js with enhanced code blocks
- **Blog System**: Post layouts with pagination, sidebar, and category support
- **Excalidraw Integration**: Interactive diagram editing and embedding
- **Documentation Layouts**: Specialized layouts for docs, case studies, and blog posts
- **Calendly Integration**: Configurable appointment scheduling
- **SEO Ready**: Jekyll SEO Tag integration
- **Customizable**: Override hooks for site-specific customizations
- **Responsive Navigation**: Dropdown menus with mobile hamburger menu
- **Dark Mode**: Pre-configured dark theme (Minima skin)

## Installation

You can use the Analytiq Pages Theme in two ways:

### Option 1: Use the Starter Template (Recommended)

The easiest way to get started is to use the [analytiq-pages-starter](https://github.com/analytiq-hub/analytiq-pages-starter) template, which includes everything pre-configured:

1. **Click "Use this template"** on the [starter repository](https://github.com/analytiq-hub/analytiq-pages-starter)
2. **Enable GitHub Pages** in Settings → Pages
3. Your site will be live automatically!

The starter includes sample content, blog posts, documentation pages, and all the configuration you need.

### Option 2: Embed the Theme in Your Existing Jekyll Site

If you already have a Jekyll site and want to add this theme:

1. **Add the theme to your `Gemfile`:**

```ruby
gem "analytiq-pages-theme", git: "https://github.com/analytiq-hub/analytiq-pages-theme"
```

Or for a specific version (recommended):

```ruby
gem "analytiq-pages-theme", git: "https://github.com/analytiq-hub/analytiq-pages-theme", tag: "v0.1.8"
```

2. **Add the theme to your `_config.yml`:**

```yaml
theme: analytiq-pages-theme
```

3. **Install dependencies:**

```bash
bundle install
```

## Quick Start

After installing the theme (see [Installation](#installation) above), customize your `_config.yml`:
   ```yaml
   title: "My Awesome Site"
   author:
     name: "Your Name"
     email: "you@example.com"
   description: "A brief description of your site"

   # Navigation
   header_pages:
     - title: "About"
       url: "/about"
     - title: "Blog"
       url: "/blog"
   ```

Visit `http://localhost:4000` to see your site!

## Configuration

### Basic Site Setup

Configure your site in `_config.yml`:

```yaml
title: Your Site Title
author:
  name: Your Name
  email: your-email@example.com
description: Your site description

# Navigation structure
header_pages:
  - title: "About"
    url: "/about"
  - title: "Blog"
    url: "/blog"
  - title: "Resources"
    url: "#"
    children:
      - title: "Documentation"
        url: "/docs"
      - title: "Tutorials"
        url: "/tutorials"

# Footer navigation
site_map:
  - title: "Company"
    links:
      - title: "About"
        url: "/about"
  - title: "Resources"
    links:
      - title: "Blog"
        url: "/blog"

# Social links (used in footer)
minima:
  social_links:
    twitter: username
    github: username
    linkedin: username
```

## Content & Layouts

### Available Layouts

The theme provides several layouts:

#### Default Layout
```yaml
---
layout: default
title: Page Title
---
Your content here
```

#### Home Layout
```yaml
---
layout: home
---
Homepage content with featured sections
```

#### Post Layout
```yaml
---
layout: post
title: Blog Post Title
date: 2025-11-28
categories: [category1, category2]
---
Post content with sidebar and metadata
```

#### Page Layout
```yaml
---
layout: page
title: Page Title
---
Simple page layout
```

#### Excalidraw Editor Layout
```yaml
---
layout: excalidraw-editor
permalink: /excalidraw-edit
title: Excalidraw Editor
---
```

### Excalidraw Integration

The theme includes full Excalidraw support for creating and embedding diagrams.

#### 1. Create the Editor Page

Create `excalidraw.html` in your site root:

```yaml
---
layout: excalidraw-editor
permalink: /excalidraw-edit
title: Excalidraw Editor
---
```

#### 2. Store Diagrams

Place your `.excalidraw` files in `assets/excalidraw/`:

```
your-site/
└── assets/
    └── excalidraw/
        ├── architecture.excalidraw
        └── workflow.excalidraw
```

#### 3. Embed Diagrams

**Static SVG (recommended for most cases):**
```liquid
{% include excalidraw-static.html file="/assets/excalidraw/architecture.excalidraw" %}
```

**Interactive iframe:**
```liquid
{% include excalidraw-embed.html
   file="/assets/excalidraw/architecture.excalidraw"
   height="800px"
%}
```

**Smart embed with mode selection:**
```liquid
<!-- Default: static -->
{% include excalidraw.html file="/assets/excalidraw/diagram.excalidraw" %}

<!-- Interactive -->
{% include excalidraw.html file="/assets/excalidraw/diagram.excalidraw" mode="interactive" height="800px" %}

<!-- Just a link -->
{% include excalidraw.html file="/assets/excalidraw/diagram.excalidraw" mode="link" %}
```

## Customization

The theme provides three customization hooks that you can override in your site:

#### Custom Head (`_includes/custom-head.html`)

Add site-specific items to `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>

<!-- Custom favicon -->
<link rel="icon" type="image/png" href="/assets/images/favicon.png">
```

#### Custom Header (`_includes/custom-header.html`)

Add announcements or additional navigation:

```html
<div class="announcement bg-blue-600 text-white py-2 text-center">
  <strong>New:</strong> Check out our latest features!
</div>
```

#### Custom Footer (`_includes/custom-footer.html`)

Add copyright, legal links, or additional content:

```html
<div class="text-center text-sm text-gray-500 mt-4">
  <p>&copy; 2025 Your Company. All rights reserved.</p>
  <p>
    <a href="/privacy">Privacy Policy</a> |
    <a href="/terms">Terms of Service</a>
  </p>
</div>
```

### Tailwind Components

The theme includes reusable Tailwind components:

#### Alert
```liquid
{% include alert.html
   type="info"
   message="This is an informational alert."
%}
```

Types: `info`, `warning`, `error`, `success`

#### Button
```liquid
{% include button.html
   text="Click Me"
   url="/page"
   style="primary"
%}
```

Styles: `primary`, `secondary`, `outline`

#### Card
```liquid
{% include card.html
   title="Card Title"
   content="Card content goes here."
   image="/assets/images/card-image.jpg"
%}
```

### Blog Sidebar

The blog sidebar appears on post pages and includes:
- Recent posts
- Categories
- Archive links

Configure in `_includes/blog-sidebar.html` (override in your site if needed)

## File Structure

```
analytiq-pages-theme/
├── _includes/
│   ├── head.html                 # Theme <head> with Tailwind, highlight.js
│   ├── header.html               # Responsive navigation
│   ├── footer.html               # Site map, social links
│   ├── custom-head.html          # Override hook for site-specific <head>
│   ├── custom-header.html        # Override hook for header customization
│   ├── custom-footer.html        # Override hook for footer customization
│   ├── blog-sidebar.html         # Blog post sidebar
│   ├── enhanced-code-blocks.html # Code block enhancements
│   ├── excalidraw.html           # Smart Excalidraw embed
│   ├── excalidraw-embed.html     # Interactive iframe embed
│   ├── excalidraw-static.html    # Static SVG rendering
│   ├── alert.html                # Alert component
│   ├── button.html               # Button component
│   ├── card.html                 # Card component
│   └── social.html               # Social media links
├── _layouts/
│   ├── default.html              # Base layout
│   ├── home.html                 # Homepage layout
│   ├── page.html                 # Simple page layout
│   ├── post.html                 # Blog post layout
│   └── excalidraw-editor.html    # Excalidraw editor
├── assets/
│   ├── css/
│   │   └── style.scss            # Custom styles
│   └── js/
│       ├── pagination.js         # Pagination handling
│       └── excalidraw/
│           └── render-excalidraw.js  # Static SVG renderer
├── _config.yml                   # Default theme configuration
├── analytiq-pages-theme.gemspec  # Gem specification
├── Gemfile                       # Dependencies
├── LICENSE                       # MIT License
└── README.md                     # This file
```

## Overriding Theme Files

To override any theme file, simply create the same file path in your site. For example:

- Override header: create `_includes/header.html` in your site
- Override post layout: create `_layouts/post.html` in your site
- Add custom styles: create `assets/css/custom.css` and reference in custom-head.html

## Dependencies

- **Jekyll ~> 3.9** - Static site generator (core dependency)
- **jekyll-feed ~> 0.12** - RSS feed generation for blog posts
- **jekyll-seo-tag ~> 2.6** - SEO meta tags and structured data
- **jekyll-pdf-embed ~> 1.1** - PDF embedding support
- **jekyll-paginate-v2 ~> 3.0** - Advanced pagination for blogs (optional)

## Browser Support

- Modern browsers with ES6 module support
- Import map support required for Excalidraw features

## Troubleshooting

### Common Issues

**Theme not loading after bundle install:**
- Clear Jekyll cache: `rm -rf _site .jekyll-cache`
- Rebuild: `bundle exec jekyll build`

**Excalidraw diagrams not rendering:**
- Ensure `.excalidraw` files are in `assets/excalidraw/`
- Check browser console for JavaScript errors
- Verify import map support in your browser

**Styles not applying:**
- Check that Tailwind CSS is loading in browser dev tools
- Ensure `_config.yml` is valid YAML
- Try rebuilding assets: `bundle exec jekyll build`

**Navigation not working:**
- Verify `header_pages` configuration in `_config.yml`
- Check that page files exist at specified URLs

## Contributing

Bug reports and pull requests are welcome at https://github.com/analytiq-hub/analytiq-pages-theme

## License

The theme is available as open source under the terms of the [MIT License](LICENSE).

## Sites Using This Theme

Here are some sites that showcase the Analytiq Pages Theme in action:

- **[Analytiq Hub](https://analytiqhub.com)** - ([GitHub](https://github.com/analytiq-hub/analytiq-hub.github.io)) - Consulting company websie
- **[DocRouter.AI](https://docrouter.ai)** - ([GitHub](https://github.com/analytiq-hub/docrouter.github.io/)) - AI-powered document processing solution
- **[SigAgent.AI](https://sigagent.ai)** - ([GitHub](https://github.com/analytiq-hub/sigagent.github.io)) - Claude Agent monitoring platform
- **[Bitdribble](https://bitdribble.github.io)** - ([GitHub](https://github.com/Bitdribble/bitdribble.github.io)) - Personal knowledge repository
