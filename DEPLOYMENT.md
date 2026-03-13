# Deployment Guide

To host your Georgetown Raiders application on your own domain, follow these steps:

### 1. Build the Application
You need to generate the production-ready files. This process bundles your code into a `dist` folder. In a local environment, you would typically run `npm run build`.

### 2. Choose a Hosting Provider
For a React application like this, the easiest and most popular options are:
- **Vercel** (Recommended, as there is already a `vercel.json` in your project)
- **Netlify**
- **Cloudflare Pages**

### 3. Connect Your Domain
Once you've connected your project to a hosting provider:
1. Go to the **Domains** section of your hosting provider's dashboard.
2. Add your custom domain (e.g., `www.georgetownraiders.com`).
3. The provider will give you specific **DNS records** (usually an `A` record or a `CNAME` record).

### 4. Update DNS Settings
Log in to your domain registrar (where you bought the domain, like GoDaddy or Namecheap) and update your DNS settings with the records provided by your host.

### 5. Set Environment Variables
This is a critical step. You must add your Supabase credentials to your hosting provider's **Environment Variables** settings so the live site can connect to your database:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

### 6. SSL (HTTPS)
Most modern hosts will automatically generate a free SSL certificate for you once your domain is correctly pointed to their servers.