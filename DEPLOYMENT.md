# Deploying to Cloudflare Pages

This guide will walk you through deploying your Astro project to Cloudflare Pages.

## Prerequisites

1. A Cloudflare account
2. Your project code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Step 1: Build Configuration

The project is already configured with:

- `@astrojs/cloudflare` adapter
- `wrangler.toml` configuration
- Updated build scripts

## Step 2: Deploy via Cloudflare Dashboard

### Option A: Connect Git Repository (Recommended)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** → **Create a project**
3. Choose **Connect to Git**
4. Select your repository
5. Configure build settings:
   - **Framework preset**: None
   - **Build command**: `pnpm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (or leave empty)
6. Click **Save and Deploy**

### Option B: Deploy via Wrangler CLI

1. Install Wrangler CLI:

   ```bash
   npm install -g wrangler
   ```

2. Login to Cloudflare:

   ```bash
   wrangler login
   ```

3. Deploy:
   ```bash
   wrangler pages deploy dist
   ```

## Step 3: Environment Variables (if needed)

If your project uses environment variables:

1. Go to your Pages project settings
2. Navigate to **Environment variables**
3. Add any required variables (e.g., `ENV_NAME`)

## Step 4: Custom Domain (Optional)

1. In your Pages project, go to **Custom domains**
2. Add your domain
3. Update DNS records as instructed

## Build Output

The build will create a `dist` directory with:

- Static assets
- Cloudflare Workers functions (if using SSR)
- `_worker.js` for edge functions

## Troubleshooting

### Common Issues:

1. **Build fails**: Check that all dependencies are installed
2. **404 errors**: Ensure `trailingSlash: "never"` is set in `astro.config.mjs`
3. **Environment variables**: Verify they're set in Cloudflare Pages settings

### Build Commands:

- **Development**: `pnpm run dev`
- **Build**: `pnpm run build`
- **Preview**: `pnpm run preview`

## Performance

Cloudflare Pages provides:

- Global CDN
- Edge computing capabilities
- Automatic HTTPS
- DDoS protection

Your site will be automatically deployed on every push to your main branch.
