# Al Hussain Attar Point

## Current State
Project exists with a React + Tailwind frontend. Previous version had product sections but needs a full rebuild with the specific product list, WhatsApp links, and bilingual content.

## Requested Changes (Diff)

### Add
- 5 specific products: Kashmiri Oudh Attar (₹800), Rose Noor Attar (₹500), Jasmine Floral Ittar (₹400), Musk Amber Attar (₹600), Combo Gift Pack (₹1200)
- Hindi descriptions for each product
- WhatsApp order buttons linking to wa.me/916398948080
- Generated product images for each item
- Hero section with hero image

### Modify
- Full rebuild of App.tsx with luxurious green and gold theme
- All WhatsApp links must point to wa.me/916398948080

### Remove
- Any placeholder or old product data

## Implementation Plan
- Rebuild App.tsx as single-page site: Navbar, Hero, Featured Products Grid (5 items), About, Why Choose Us, Contact/Footer
- Each product card: image, English name, Hindi description, price, WhatsApp order button
- Green (#1a4d2e, #2d6a4f) and gold (#c9a84c, #f0c040) color palette
- Bilingual content throughout
