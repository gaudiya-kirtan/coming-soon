# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev      # Start development server at localhost:3000
yarn build    # Production build
yarn lint     # Run ESLint
yarn start    # Start production server (requires build first)
```

## Architecture

This is a minimal Next.js 14 (App Router) "coming soon" landing page for the **Gaudiya Kirtan** app. There is a single route with no additional pages or API routes.

- `app/layout.tsx` — root layout with Inter font and page metadata
- `app/page.tsx` — the entire landing page (logo, Mailchimp signup form, app store links, quote)
- `app/globals.css` — Tailwind base imports and CSS custom properties

Styling is done exclusively with Tailwind utility classes. The color palette uses dark backgrounds (`#181819`, `#282829`) with muted gray (`#858585`) and light blue (`#89b1f4`) text.

The Mailchimp form posts directly to an external URL (`gaudiyakirtan.us9.list-manage.com`) — no server-side form handling exists. The honeypot field (hidden `b_` input) is required by Mailchimp's anti-spam system and must not be removed.

Static assets (logo, app store badges) live in `public/`.
