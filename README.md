# Sovereign AI V3 — Live AI app

## Run locally
1. Install Node.js 20+.
2. Run `npm install`
3. Copy `.env.example` to `.env.local`
4. Put your server-side model API key in `.env.local`
5. Run `npm run dev`
6. Open http://localhost:3000

## Deploy
Deploy this Next.js project to a host that supports server-side environment variables. Add `OPENAI_API_KEY` and optionally `OPENAI_MODEL` in the host's environment settings.

## Important
The API key is used only by `/api/analyze` on the server. Never put it in client-side code.

## What V3 includes
- Real server-side AI analysis
- Six modes
- Structured Sovereign response
- Local browser archive
- Responsive app UI
- Proprietary system prompt embedded in the server route

## Production additions before paid launch
- Authentication
- Database-backed encrypted user history
- Explicit memory consent/settings
- Stripe subscriptions
- Rate limits / abuse protection
- Privacy policy + terms
- Analytics
- Admin dashboard
- 50–100 proprietary principles and case studies
- Model/evaluation test suite
