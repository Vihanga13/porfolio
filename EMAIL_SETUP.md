# Email Setup Guide for Portfolio Contact Form

This guide will help you set up EmailJS to receive emails from your portfolio contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message - {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** in the API Keys section

## Step 5: Configure Environment Variables

1. Create a `.env` file in your project root
2. Add the following variables:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

3. Replace the placeholder values with your actual EmailJS credentials

## Step 6: Test the Setup

1. Start your development server: `npm run dev`
2. Go to your portfolio contact form
3. Fill out and submit the form
4. Check your email for the message

## Important Notes

- Keep your EmailJS credentials secure
- The free EmailJS plan allows up to 200 emails per month
- Make sure to add your domain to EmailJS allowed origins in production
- Never commit your `.env` file to version control

## Troubleshooting

- If emails aren't being sent, check the browser console for error messages
- Verify your EmailJS service is properly configured
- Make sure your email template variables match the ones used in the code
- Check your email spam folder

That's it! Your contact form should now send emails directly to your inbox.
