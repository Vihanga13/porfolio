# GitHub Pages Deployment Guide

## Quick Setup Instructions

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and create a new repository
2. Name it something like `portfolio-website` (or any name you prefer)
3. Make it **public** (required for free GitHub Pages)
4. Don't initialize with README since you already have files

### Step 2: Update Repository Name in Config
1. Open `vite.config.ts`
2. Update the base URL to match your repository name:
   ```typescript
   base: '/your-repository-name/',
   ```

### Step 3: Push to GitHub
```bash
# Add GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Deploy to GitHub Pages
```bash
# Build and deploy to GitHub Pages
npm run deploy
```

### Step 5: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under "Source", select **Deploy from a branch**
5. Select branch: **gh-pages**
6. Select folder: **/ (root)**
7. Click **Save**

### Step 6: Access Your Live Site
Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

## Alternative: Custom Domain (Optional)
If you have a custom domain:
1. Add a `CNAME` file to your `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use custom domain

## Important Notes

✅ **Free Hosting**: GitHub Pages is completely free for public repositories
✅ **Automatic Deployment**: After initial setup, just run `npm run deploy` to update
✅ **HTTPS**: Automatically provides HTTPS security
✅ **Fast CDN**: Global content delivery network

⚠️ **Repository Name**: Make sure the `base` in `vite.config.ts` matches your repository name exactly
⚠️ **Public Repository**: Must be public for free GitHub Pages
⚠️ **Build Time**: May take a few minutes for changes to appear live

## Quick Commands Reference
```bash
# Deploy new changes
npm run deploy

# Update repository
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

## Troubleshooting
- If site doesn't load: Check that base URL in vite.config.ts matches repository name
- If images don't show: Make sure all image paths are relative
- If deployment fails: Check that you have push permissions to the repository
- **If you get 404 "Page Not Found"**: This has been fixed with a 404.html redirect file that handles React Router routing on GitHub Pages

## ✅ FIXED: React Router + GitHub Pages Issue
Your portfolio now includes:
- `public/404.html` - Redirects all routes to your React app
- Updated `index.html` - Handles the redirected URLs properly
- Correct base URL configuration for your repository name

Your portfolio should now work at: **https://Vihanga13.github.io/porfolio/**

Note: It may take 5-10 minutes for GitHub Pages to update after deployment.

That's it! Your portfolio will be live and accessible worldwide! 🚀
