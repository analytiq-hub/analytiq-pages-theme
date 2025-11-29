# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "analytiq-pages-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Andrei Radulescu-Banu"]
  spec.email         = ["andrei@analytiqhub.com"]

  spec.summary       = "A modern Jekyll theme with Tailwind CSS for Analytiq sites"
  spec.description   = "A clean, responsive Jekyll theme featuring Tailwind CSS, syntax highlighting, blog layouts, and Excalidraw integration. Designed for technical content and business websites."
  spec.homepage      = "https://github.com/analytiq-hub/analytiq-pages-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i)
  end

  spec.required_ruby_version = ">= 2.7.0"

  spec.add_runtime_dependency "jekyll", "~> 3.9"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.12"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.6"
  spec.add_runtime_dependency "jekyll-pdf-embed", "~> 1.1"

  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "rake", "~> 13.0"
end
