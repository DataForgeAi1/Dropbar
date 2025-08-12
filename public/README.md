# Public Assets Directory

## Video Files

To add the hero video for the homepage:

1. Place your video file named `Veo_Video_Prompt_Generation.mp4` in this directory
2. The video should be optimized for web (compressed, reasonable file size)
3. Recommended format: MP4 with H.264 codec
4. Recommended resolution: 1920x1080 or higher
5. Recommended file size: Under 10MB for better loading performance

## SPA Fallback (Apache)

If you're hosting on Apache, add an `.htaccess` file in this folder with the rules below so client-side routes resolve to `index.html` on refresh/deep links:

```
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## Fallback

If no video file is found, the page will display a gradient background as a fallback. 