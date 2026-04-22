# InnovateHealth Typography Style Guide

This document defines the exact typographic scales, weights, and spacing rules for the InnovateHealth platform. It is strictly reverse-engineered from the official Heidi Health brand guide image to ensure a 1:1 match with their premium editorial aesthetic.

## 1. Brand Typefaces

We utilize a dual-font typographic system to separate editorial authority (headings) from clinical clarity (body data).

| Role | Font Family | Fallbacks | Notes |
| :--- | :--- | :--- | :--- |
| **Headings** | `Playfair Display` | `Georgia, serif` | Takes the place of Heidi's custom `Exposure` font. Provides high-contrast editorial elegance. |
| **Body & UI** | `Inter` | `-apple-system, sans-serif` | An exact match to Heidi's body font. Used for all paragraphs, links, and grid data. |

---

## 2. Heading Scale (Playfair Display)

All headings utilize a slightly tightened tracking (letter spacing) and a standard `110%` line-height for a tight, high-end bounding box.

*Note: In the Heidi guide, weight is marked as `-10`. In standard web fonts, this maps to the `400 (Regular)` baseline weight, relying entirely on the high-contrast thick/thin strokes native to the font's design.*

| Hierarchy | Pixel Size | CSS Size value | Weight | Tracking (Letter Spacing) | Leading (Line Height) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Title (Hero)** | 48px | `3rem` | 400 (Regular) | `-0.01em` (-1%) | `110%` (1.1) |
| **Heading 1** | 36px | `2.25rem` | 400 (Regular) | `-0.01em` (-1%) | `110%` (1.1) |
| **Heading 2** | 28px | `1.75rem` | 400 (Regular) | `-0.01em` (-1%) | `110%` (1.1) |
| **Heading 3** | 24px | `1.5rem` | 400 (Regular) | `-0.01em` (-1%) | `110%` (1.1) |

### Italic Emphasization
When `<em>` tags or `.accent-text` are used within Headings, CSS switches the font strictly to `400 Italic`. In Didone-style fonts like Playfair Display and Exposure, the italic glyphs are drawn drastically thinner than the standard Roman glyphs, creating the signature bold/light typographic tension native to the system. No color change is applied; the text remains the exact same dark color as the regular text.

---

## 3. Body Scale (Inter)

Body text requires strict baseline control for legibility at clinic pacing. The standard leading is forced to `150%` to ensure scanning clarity.

| Hierarchy | Pixel Size (Est.) | Weight | Tracking (Letter Spacing) | Leading (Line Height) |
| :--- | :--- | :--- | :--- | :--- |
| **Sub heading** | 18px-20px | 600 (Semi-bold) | `0em` | `120%` (1.2) |
| **Body text** | 16px-18px | 400 (Regular) | `-0.02em` (-2%) | `150%` (1.5) |
| **Bold text** | Inherits | 600 (Semi-bold) | `0em` | `150%` (1.5) |
| **Link** | Inherits | 400 (Regular) | `0em` | `150%` (1.5) |

---

## 4. CSS Implementation Variables

The root variables established in `styles.css` map to these guide tokens:

```css
:root {
  /* Typography Assignments */
  --font-serif: 'Playfair Display', Georgia, serif; /* Headings */
  --font-sans: 'Inter', -apple-system, sans-serif;  /* Body */
  
  /* Text Colors */
  --pk-text-main: #28030F;  /* Exact Heidi Inspector Value */
  --pk-text-muted: #4A635B;
}
```

By enforcing these exact spacing ratios and structural hierarchies, the site will permanently retain the premium, trusted aesthetic seen across the competitor's high-tier clinical surfaces.
