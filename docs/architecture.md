# Architecture

```text
Shopify storefront
  -> dataLayer ecommerce event
  -> Google Tag Manager
  -> GA4 ecommerce event
  -> Google Ads conversion action
  -> QA/reconciliation against Shopify orders
```

## Design notes
- Use stable transaction IDs for purchase deduplication.
- Validate value and currency at the source event.
- Keep Add to Cart, Begin Checkout, and Purchase separate.
- Compare browser events, GA4 DebugView, Google Ads diagnostics, and Shopify order totals.
