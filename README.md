# Google Ads + Shopify Conversion Tracking

> Upwork portfolio demo / sanitized technical case study.

## Client problem

An ecommerce measurement blueprint for reliable purchase, add-to-cart and checkout tracking with transaction value, currency and deduplication checks.

## What this repository demonstrates

- Add-to-cart / checkout / purchase events
- Transaction ID/value/currency validation
- Google Ads conversion mapping
- Duplicate/missing-event diagnostics
- QA checklist across Ads, GA4 and storefront orders

## Tech stack

Google Ads, GA4, GTM, Shopify, dataLayer

## Architecture

This repository is intentionally structured as a public portfolio implementation rather than a copy of private client code. Production credentials, customer data, private URLs and proprietary business logic are excluded.

```text
Input / Store / Platform Event
        ↓
Validation & Normalization
        ↓
Business / Tracking / Integration Logic
        ↓
External API or Storefront
        ↓
QA, Logs, Reconciliation
```

## What an Upwork client can verify here

- Clear separation between configuration, business logic and external API calls
- Error handling and production-readiness thinking
- Practical ecommerce use cases rather than toy examples
- Documentation that explains both implementation and validation
- Security-conscious handling of credentials and customer data

## Suggested demo contents

- `src/` — sanitized implementation examples
- `examples/` — sample payloads using synthetic data
- `tests/` — validation / QA examples
- `docs/architecture.md` — architecture and flow
- `docs/qa-checklist.md` — production verification steps
- `screenshots/` — portfolio diagrams and UI/results images

## Source portfolio reference

Internal source project: **20 - Google Ads + Shopify Conversion Tracking**

Only reusable patterns and sanitized demo material should be published publicly.

## Hiring fit

Good match for Upwork projects involving **Google Ads + Shopify Conversion Tracking**, Shopify troubleshooting, ecommerce integrations, tracking reliability, API automation, or production-readiness reviews.