# Environment Variables Setup

This project uses environment variables to configure the Multipost API integration.

## Local Development

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Update the profile ID in `.env.local`:
   ```
   VITE_MULTIPOST_PROFILE_ID=your-actual-profile-id
   ```

## Vercel Production Setup

Add the environment variable in your Vercel dashboard:

1. Go to your project settings on Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variable:
   - **Name**: `VITE_MULTIPOST_PROFILE_ID`
   - **Value**: `d3a25fa0-a0fd-4854-bf4f-ad7b773101ba`
   - **Environment**: Production, Preview, Development (check all)

4. Redeploy your project for changes to take effect

## Why This Matters

The `VITE_MULTIPOST_PROFILE_ID` is used in:
- **Frontend** (`src/services/carsApi.ts`): To fetch vehicle inventory
- **Serverless API** (`api/preview.ts`): To generate WhatsApp/social media previews

Having it in one place ensures both the frontend and preview API always use the same inventory source.

## Fallback Behavior

Both files include a fallback value (`d3a25fa0-a0fd-4854-bf4f-ad7b773101ba`) so the app works even if the environment variable is not set, but it's recommended to always configure it properly.
