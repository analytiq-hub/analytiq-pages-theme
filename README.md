# Analytiq Pages Theme

A modern, responsive Jekyll theme featuring Tailwind CSS, syntax highlighting, blog layouts, and Excalidraw integration. Designed for technical content and business websites.

## Features

- **Modern Design**: Built with Tailwind CSS for responsive, customizable layouts
- **Syntax Highlighting**: Integrated highlight.js with enhanced code blocks
- **Blog System**: Post layouts with pagination, sidebar, and category support
- **Excalidraw Integration**: Interactive diagram editing and embedding
- **SEO Ready**: Jekyll SEO Tag integration
- **Customizable**: Override hooks for site-specific customizations
- **Responsive Navigation**: Dropdown menus with mobile hamburger menu
- **Dark Mode**: Pre-configured dark theme (Minima skin)

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "analytiq-pages-theme", git: "https://github.com/analytiq-hub/analytiq-pages-theme"
```

Or for a specific version:

```ruby
gem "analytiq-pages-theme", git: "https://github.com/analytiq-hub/analytiq-pages-theme", tag: "v0.1.0"
```

And add this line to your site's `_config.yml`:

```yaml
theme: analytiq-pages-theme
```

Then execute:

```bash
bundle install
```

## Usage

### Basic Configuration

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

### Layouts

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

### Customization Hooks

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

- Jekyll ~> 3.9
- jekyll-feed ~> 0.12
- jekyll-seo-tag ~> 2.6
- jekyll-pdf-embed ~> 1.1
- jekyll-paginate-v2 ~> 3.0 (optional)

## Browser Support

- Modern browsers with ES6 module support
- Import map support required for Excalidraw features

## Contributing

Bug reports and pull requests are welcome at https://github.com/analytiq-hub/analytiq-pages-theme

## License

The theme is available as open source under the terms of the [MIT License](LICENSE).

## Sites Using This Theme

- [Bitdribble](https://bitdribble.github.io)
- [SigAgent.AI](https://sigagent.ai)
- [Analytiq Hub](https://analytiqhub.com)
- [DocRouter.AI](https://docrouter.ai)
