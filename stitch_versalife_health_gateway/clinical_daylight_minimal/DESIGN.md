---
name: Clinical Daylight Minimal
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#414750'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#727781'
  outline-variant: '#c1c7d1'
  surface-tint: '#1c619e'
  primary: '#003d6b'
  on-primary: '#ffffff'
  primary-container: '#015591'
  on-primary-container: '#9fcaff'
  inverse-primary: '#9fcaff'
  secondary: '#006c4c'
  on-secondary: '#ffffff'
  secondary-container: '#83f9c5'
  on-secondary-container: '#007351'
  tertiary: '#333c4c'
  on-tertiary: '#ffffff'
  tertiary-container: '#4a5364'
  on-tertiary-container: '#bec7db'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#9fcaff'
  on-primary-fixed: '#001d36'
  on-primary-fixed-variant: '#00497e'
  secondary-fixed: '#83f9c5'
  secondary-fixed-dim: '#65dcaa'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#005138'
  tertiary-fixed: '#dae3f7'
  tertiary-fixed-dim: '#bec7db'
  on-tertiary-fixed: '#131c2a'
  on-tertiary-fixed-variant: '#3e4758'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display:
    fontFamily: Newsreader
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Newsreader
    fontSize: 38px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 30px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '600'
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
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies a calm, precise healthcare hub gateway. The aesthetic merges Apple-adjacent product refinement with clinical transparency and daylight warmth. The experience conveys supreme diagnostic competence, personal wellness agency, and effortless clarity without appearing sterile or institutional.

Target users include patients managing complex care, high-performance wellness seekers, and enterprise healthcare providers seeking a trustworthy, frictionless portal. The emotional response is one of decompression, scientific assurance, and quiet luxury.

Visual execution relies on vast atmospheric whitespace, hyper-disciplined typographic hierarchy, ultra-subtle translucent glass navigation overlays, and soft volumetric elevation that lifts interactive surfaces gently off a bright, pristine canvas.

## Colors

The palette establishes an immediate sense of clinical authority and holistic vitality.

- **Primary (`#015591`)**: Deep Mediterranean Navy. Anchors key interactive waypoints, primary actions, and navigational markers with authoritative presence and full WCAG AAA contrast against light backgrounds.
- **Secondary (`#50C898`)**: Therapeutic Mint. Denotes positive health indicators, confirmation states, progress markers, and vital balance without visual agitation.
- **Tertiary / Ink (`#1a2332`)**: Deep Slate Ink. The primary text color, replacing harsh pure black to reduce eye strain while retaining sharp, surgical legibility.
- **Neutral / Canvas (`#FAFBFC`)**: Luminous Off-White. Mimics filtered daylight on architectural surfaces, establishing a glare-free, pristine baseline.
- **Subtle Surface Border (`#E8ECF0`)**: Low-contrast architectural rule used sparingly to delineate floating surfaces and data grids without enclosing elements aggressively.

Color must never shout; it must guide attention with surgical intent. Accent states leverage soft tint washes (e.g., 8–12% Mint or Navy) behind interactive chips and badges.

## Typography

The typography strategy leverages a calculated tension between humanistic editorial prestige and razor-sharp modern computing:

- **Editorial Headings (`Newsreader`)**: Reserved for primary hero statements, narrative gateway headers, and empathetic touchpoints. Use italic variations sparingly for clinical distinction (e.g., *precision health*).
- **Interface & Data Engine (`Geist`)**: Deployed across functional headers, diagnostic readouts, interactive inputs, navigation labels, and dense medical record details. It guarantees optical clarity even at compact sizes.
- **Tabular Numerics**: Metric readouts, biometrics, and dosage figures must explicitly utilize tabular digits (`font-variant-numeric: tabular-nums`) to maintain alignment during real-time updates.

## Layout & Spacing

The layout philosophy relies on a balanced 12-column responsive fluid grid anchored by ample breathing room:

- **Desktop (1200px+)**: 12 columns with `margin: 3rem` (expanding up to max-width `1440px` centered) and `gutter: 1.5rem`. Macro sections are separated by expansive vertical strides of `4rem` to `6rem` to enforce emotional calm and reduce cognitive load.
- **Tablet (768px – 1199px)**: 8 columns with `margin: 2rem` and `gutter: 1.25rem`. Complex diagnostic grids condense into paired modules.
- **Mobile (< 768px)**: 4 columns with `margin-mobile: 1.25rem` and `gutter-mobile: 1rem`. Multi-column health metrics stack sequentially into focused vertical flow units.

Maintain a strict 8pt base unit rhythm for component heights, interior padding, and adjacent gap distributions to sustain visual order throughout the portal.

## Elevation & Depth

Visual hierarchy uses daylight ambient illumination rather than harsh artificial shadows. Depth is communicated through clean layering, frosted glass refraction, and tinted micro-diffusions:

- **Surface Level 0 (Canvas)**: `#FAFBFC` matte backdrop.
- **Surface Level 1 (Resting Cards & Panels)**: Pure White `#FFFFFF` with a structural micro-border `1px solid #E8ECF0` and an ultra-subtle ambient shadow: `0 2px 8px -2px rgba(26, 35, 50, 0.04), 0 8px 24px -4px rgba(26, 35, 50, 0.03)`.
- **Surface Level 2 (Floating Dropdowns & Hovering Cards)**: `#FFFFFF` paired with an elevated ambient diffusion: `0 12px 32px -6px rgba(1, 85, 145, 0.08), 0 4px 12px -2px rgba(26, 35, 50, 0.04)`.
- **Surface Level 3 (Modals & Overlays)**: `#FFFFFF` backed by `rgba(26, 35, 50, 0.25)` daylight backdrop blur (`12px`).
- **Frosted Glass (Navigation & Floating Controls)**: Semi-translucent white `rgba(255, 255, 255, 0.82)` with `backdrop-filter: blur(20px) saturate(180%)` and a crisp bottom separation rule `1px solid rgba(232, 236, 240, 0.7)`.

## Shapes

The shape system achieves an approachable yet disciplined feel via generous curvature:

- **Primary Cards & Modals**: Calibrated to `1rem` – `1.25rem` (16px to 20px) to deliver an ergonomic, tactile physical surface.
- **Interactive Controls (Inputs, Buttons, Dropdowns)**: Sized with `0.5rem` to `0.75rem` (8px to 12px) radiuses to maintain clean visual structure within the softer card framing.
- **Pills & Status Indicators**: Fully rounded `rounded-full` (9999px) for metrics, badges, and contextual tags.

## Components

### Buttons
- **Primary**: Solid Deep Navy (`#015591`), text `#FFFFFF`, height `48px` (desktop) / `44px` (mobile), padding `0 1.5rem`, font weight `500`. On hover: subtle scale elevation with background shift to `#014677`.
- **Secondary**: Clear White surface with border `1px solid #E8ECF0`, text `#1a2332`. Hover initiates background tint `#F4F7F9` and border `#D1D8DE`.
- **Tertiary / Ghost**: Transparent container, text `#015591`, hover background `rgba(1, 85, 145, 0.06)`.

### Cards & Telehealth Gateway Tiles
Constructed with crisp white `#FFFFFF` fills, `16px` to `20px` corner radii, and perimeter stroke `1px solid #E8ECF0`. Internal padding follows `space-lg` (`1.5rem`) on desktop and `space-md` (`1rem`) on mobile. Hover states gracefully elevate the Y-axis by `-2px` with a Mint or Navy tinted shadow bloom.

### Badges & Health Chips
Status tags utilize `rounded-full` styling, height `26px`, padding `0 0.75rem`, and label typography (`label-md`). 
- **Healthy / Optimal**: Background `rgba(80, 200, 152, 0.14)`, text `#1B7A54`.
- **Active / Primary**: Background `rgba(1, 85, 145, 0.10)`, text `#015591`.
- **Neutral / Informational**: Background `#EDF1F5`, text `#475467`.

### Input Fields & Controls
- **Inputs**: Min-height `48px`, border `1px solid #E8ECF0`, background `#FFFFFF`, text `#1a2332`, placeholder `#8D9AA8`. Focused state: border `#015591` with an outer focus-ring `0 0 0 3px rgba(1, 85, 145, 0.12)`.
- **Selection Controls (Checkboxes & Radios)**: Size `20px`. Unchecked border `1.5px solid #D1D8DE`. Checked state activates `#015591` with pure white iconography.

### Data Metric Cards & Vital Displays
Specialized containers featuring small-caps category tracking (`label-sm`), high-contrast numerical metrics (`Geist`, `32px`, semi-bold), alongside secondary trend sparks using Secondary Mint (`#50C898`) for positive trajectories.