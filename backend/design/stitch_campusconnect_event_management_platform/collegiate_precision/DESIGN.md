---
name: Collegiate Precision
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45474c'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#75777d'
  outline-variant: '#c5c6cc'
  surface-tint: '#565f70'
  primary: '#0b1423'
  on-primary: '#ffffff'
  primary-container: '#202938'
  on-primary-container: '#8790a3'
  inverse-primary: '#bec7da'
  secondary: '#595f65'
  on-secondary: '#ffffff'
  secondary-container: '#dee3ea'
  on-secondary-container: '#5f656b'
  tertiary: '#001234'
  on-tertiary: '#ffffff'
  tertiary-container: '#00265c'
  on-tertiary-container: '#608ee9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae3f7'
  primary-fixed-dim: '#bec7da'
  on-primary-fixed: '#131c2a'
  on-primary-fixed-variant: '#3e4757'
  secondary-fixed: '#dee3ea'
  secondary-fixed-dim: '#c2c7ce'
  on-secondary-fixed: '#171c21'
  on-secondary-fixed-variant: '#42474d'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#aec6ff'
  on-tertiary-fixed: '#001a43'
  on-tertiary-fixed-variant: '#004397'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '800'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.005em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system serves a forward-thinking higher education ecosystem. The aesthetic balances institutional credibility with the dynamic, approachable clarity of modern digital SaaS products. It avoids bureaucratic stiffness while steering clear of noisy, ephemeral social trends.

### Visual Aesthetic & Movement
- **Modern Institutional SaaS:** A synthesis of clean utility, architectural whitespace, and high-readability interfaces.
- **Tone:** Authoritative, energetic, transparent, and effortlessly organized.
- **Emotional Resonance:** Instills confidence and academic pride among campus administrators while providing an effortless, frictionless discovery experience for students and faculty.

## Colors

The palette establishes clarity and hierarchy through deep foundational anchors, luminous tint layers, and crisp functional accents.

### Color Roles & Implementation
- **Primary (`#202938`):** Deep Navy. Anchors structural navigation, high-emphasis text headers, primary interactive surfaces, and brand badges.
- **Secondary / Surface Tint (`#EEF3FA`):** Soft Blue. Serves as active-state background fills, table highlights, calendar time-block highlights, and secondary button backgrounds.
- **Accent / Interactive (`#4776D0`):** Vibrant Royal Blue. Guides intentional attention: focused interactive states, primary action highlights, date pickers, links, and high-priority callouts.
- **Neutral Core (`#64748B`):** Muted Slate. Used for secondary body text, helper captions, inactive iconography, and dividers.
- **Canvas Neutrals:**
  - Base Background: `#FFFFFF` for primary cards, sheets, and active viewports.
  - Sub-Canvas: `#F8FAFC` and `#F1F5F9` for outer page wrappers, subtle sidebars, and nested data panels.
- **Functional State:**
  - Success / Confirmed: `#22A06B` (Emerald Green) for RSVP registrations, room booking confirmations, and active event indicators.
  - Border Neutral: `#E2E8F0` (Slate 200) for structural bounding lines.

## Typography

Typography relies entirely on Plus Jakarta Sans to deliver crisp geometric clarity with subtle humanist warmth.

### Type Hierarchy & Scaling Rules
- **Headings:** Bold and Extra-Bold weights are reserved for event titles, calendar section headlines, and metrics dashboards. Character tracking is tightened slightly on sizes above 20px to maintain density.
- **Data Labels & Badges:** `label-caps` operates in all-caps format for status indicators (e.g., "LIVE", "RSVP CLOSED", "LECTURE HALL").
- **Paragraphs:** Standardized on `body-md` (14px) with high line-height to maintain scan efficiency across dense event agendas and multi-column forms.

## Layout & Spacing

A structured 12-column responsive fluid grid aligns high-density admin dashboards alongside spacious student discovery feeds.

### Grid & Breakpoints
- **Desktop (≥ 1280px):** 12-column grid, max canvas width 1440px centered, 24px (`1.5rem`) gutters, 32px (`2rem`) page margin. Collapsible 280px left navigation rail.
- **Tablet (768px – 1279px):** 8-column grid, 20px gutters, 24px margins. Navigation shifts to a compact icon dock or top bar.
- **Mobile (< 768px):** 4-column grid, 16px (`1rem`) gutters, 16px (`1rem`) horizontal canvas margins. Navigation moves to a persistent bottom tab bar.

### Spacing Principles
- Internal component spacing uses strict 4px/8px multiples.
- Form controls adhere to vertical rhythmic steps: `space-xs` between label and field, `space-md` between input controls, and `space-xl` dividing form clusters.

## Elevation & Depth

Visual hierarchy uses clean atmospheric layering and low-contrast borders instead of heavy, dramatic drop shadows.

### Elevation Levels
- **Layer 0 (Canvas Base):** `#F8FAFC` flat surface.
- **Layer 1 (Card & Content Surface):** `#FFFFFF` paired with a 1px boundary (`#E2E8F0`) and subtle ambient dispersion: `0 1px 2px 0 rgba(15, 23, 42, 0.04)`.
- **Layer 2 (Elevated / Hover Cards):** Used when hovering event items or displaying segmented controls: `0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 2px 4px -2px rgba(15, 23, 42, 0.04)`.
- **Layer 3 (Modals, Slide-overs & Flyouts):** Used for RSVP confirmation dialogs, filter drawers, and multi-select menus: `0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)` over a 40% opacity Navy backdrop overlay (`rgba(15, 23, 42, 0.40)` with `backdrop-filter: blur(4px)`).

## Shapes

The geometric identity is defined by refined, approachable radii that soften campus institutionalism.

### Curvature Specifications
- **Controls & Form Elements:** 8px (`0.5rem`, level 2) corner radius for buttons, input text fields, select dropdowns, and search bars.
- **Cards & Data Modules:** 16px (`1rem`) outer radius (`rounded-lg` token variant) for event list items, attendance counters, and department directories.
- **Hero Containers & Modals:** 24px (`1.5rem`) outer radius (`rounded-xl` token variant) for featured event banners, onboarding sheets, and venue map viewports.
- **Pills / Badges:** Full circular radius (`9999px`) exclusively for category tags, status badges, and user avatar wrappers.

## Components

### Buttons
- **Primary:** Background `#202938`, text `#FFFFFF`, font `label-lg`. Padding: 10px 18px. Hover shifts to `#334155`. Active scales to 0.98.
- **Accent (Action Primary):** Background `#4776D0`, text `#FFFFFF`. Hover state: `#3B63B3`. Used for key conversion moments (e.g., "Register for Event", "Confirm Booking").
- **Secondary:** Background `#EEF3FA`, text `#202938`, border `1px solid transparent`. Hover: `#E2EAF4`.
- **Ghost / Tertiary:** Background transparent, text `#64748B`, border `1px solid #E2E8F0`. Hover: background `#F8FAFC`, text `#0F172A`.

### Chips & Badges
- **Status Badge:** Pill-shaped (`rounded-full`), padding 4px 10px, typography `label-caps`.
  - *Confirmed/Open:* `#ECFDF5` background, `#22A06B` text, border `1px solid rgba(34, 160, 107, 0.2)`.
  - *Department/Academic:* `#EEF3FA` background, `#4776D0` text, border `1px solid rgba(71, 118, 208, 0.2)`.
  - *Capacity Warning:* `#FEF2F2` background, `#DC2626` text, border `1px solid rgba(220, 38, 38, 0.2)`.
- **Filter Chips:** 8px rounded rect, toggleable between `#FFFFFF` with `#E2E8F0` border and `#EEF3FA` with `#4776D0` border when selected.

### Input Fields & Selects
- Height: 42px. Background: `#FFFFFF`. Border: `1px solid #E2E8F0`. Corner radius: 8px.
- Text: `#0F172A` with `#94A3B8` placeholder.
- Focus: Border color `#4776D0`, accompanied by an outer halo ring `box-shadow: 0 0 0 3px rgba(71, 118, 208, 0.15)`.

### Checkboxes & Radio Buttons
- 18px × 18px footprint with 4px corner radius (checkbox) or circular (radio).
- Checked: `#4776D0` fill with white checkmark glyph. Unchecked: `#FFFFFF` fill with `1.5px solid #CBD5E1`.

### Event Cards
- Base: White background, 1px border (`#E2E8F0`), 16px radius, internal padding of 20px (`space-lg`).
- Structure: Split-date block on the left (navy month header with large bold day number), event title and location in center, capacity meter and action chevron on right. Hover elevates with `Layer 2` shadow and border tinting toward `#CBD5E1`.

### Specialized Domain Components
- **Date Stamp Block:** Compact square unit (52px × 52px, 8px radius) featuring a top colored bar (`#EEF3FA`) for the month text in `label-caps` and a `#FFFFFF` lower half highlighting the day integer in `headline-sm`.
- **Capacity Indicator:** Linear progress bar (height 6px, radius 9999px) with `#E2E8F0` track and dynamic fill: transitions from `#22A06B` (available) to `#EAB308` (filling up) to `#EF4444` (full).