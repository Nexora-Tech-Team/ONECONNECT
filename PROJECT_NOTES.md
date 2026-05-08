# OneConnect Project Notes

## Project Location

Main folder:

`/Users/cbqaglobal/Documents/OneConnect`

Primary files:

- `oneconnect.html` - main landing page / index.
- `oneconnect.css` - landing page styling.
- `login.html`, `login.css`, `login.js` - login page.
- `forgot-password.html`, `forgot-password.js` - forgot password page using shared login styling.
- `module-detail.html`, `module-detail.css`, `module-detail.js` - reusable module detail page.
- `selfasesment_iso27001.html` - ISO 27001:2022 self assessment page.
- `assets/oneconnect/cbqa-logo.png` - CBQA logo asset.
- `assets/oneconnect/hero-background.png` - main hero background.

## Current Main Flow

1. User opens `oneconnect.html`.
2. Landing page shows OneConnect Platform hero, stats cards, and right-side navigation.
3. `Get Started` and `Login` both link to `login.html`.
4. Navigation modules show flyout submodule panels:
   - Audit Platform
   - GRC Platform
   - Academy
5. Clicking a submodule opens `module-detail.html?module=<module-id>`.
6. For ISO 27001:2022, clicking **Self Assessment** opens `selfasesment_iso27001.html`.

## Landing Page Details

File: `oneconnect.html`

Current nav menu:

- Login
- Audit Platform
- GRC Platform
- Academy

Removed:

- Search bar
- Validation & Verification menu

Stats values:

- Satisfied Clients: `1.000+`
- Projects Completed: `5.000+`
- Client Satisfaction: `98%`
- Countries Served: `5+`

Stats cards have hover motion:

- Slight upward movement
- Brighter border
- Stronger glass background
- Shadow effect

Logo:

- Top-left CBQA logo is displayed white using CSS filter.
- Slightly enlarged for visibility.

## Module Flyout

Implemented in `oneconnect.html` and styled in `oneconnect.css`.

Flyout behavior:

- Appears on hover/focus.
- Has pointer/arrow toward main module.
- Has transparent hover bridge so submenu does not disappear when moving cursor from module to panel.

Audit Platform submodule:

- Integration Audit Tools

GRC Platform submodules:

- TVRA
- ISO 27001:2022
- KKS
- INS
- ISO 14064
- SMK3
- SOC 1
- SOC 2
- PCI-DSS
- HIPAA
- DORA
- SWIFT

Academy submodule:

- Training system

## Module Detail Page

Files:

- `module-detail.html`
- `module-detail.css`
- `module-detail.js`

This is a reusable detail page driven by query string:

Example:

`module-detail.html?module=iso-27001`

Page includes:

- Platform label
- Module title
- Subtitle
- Description
- Services card: Self Assessment
- Contact Sales CTA
- Sign in to portal CTA

Special behavior:

- If module is `iso-27001`, the **Self Assessment** card links to `selfasesment_iso27001.html`.
- Other modules currently keep service card as `#`.

## Login Page

Files:

- `login.html`
- `login.css`
- `login.js`

Features:

- OneConnect themed background.
- Username field must be valid email ending with `.com`.
- Username field is `type="text"` with `inputmode="email"` and `autocomplete="off"` to reduce password-manager icon.
- Password field has eye toggle for visible/unvisible password.
- Captcha is simple frontend math captcha.
- Forgot password link goes to `forgot-password.html`.
- OneConnect Platform pill links back to `oneconnect.html`.

## Forgot Password Page

Files:

- `forgot-password.html`
- `forgot-password.js`
- Uses `login.css`.

Features:

- Same visual theme as login.
- Email field.
- Simple frontend math captcha.
- Back to login link.

## ISO 27001 Self Assessment

File:

`selfasesment_iso27001.html`

Original file was renamed from:

`iso27001_oneconnect_selfassessment_v2.html`

Current state:

- Inline CSS and JavaScript remain in one large HTML file.
- Visual style was overridden to better match OneConnect teal/glass theme.
- Top-left logo now uses `assets/oneconnect/cbqa-logo.png`, filtered white.
- Top-right button says **Back to OneConnect Platform** and links to `oneconnect.html`.

Assessment flow:

- User answers ISO 27001:2022 readiness checklist.
- Summary page shows:
  - Overall score
  - Evidence completion
  - Items ready
  - Open gaps
  - Section breakdown
  - Missing documents summary
  - Need document templates commercial card
  - Recommendations & Action Items

## Summary Commercial Flow

The old **Print / Export PDF** button was replaced with:

**Request Full Report**

Clicking it opens a lead modal.

Lead modal fields:

- Company Name
- Contact Person
- Work Email
- Phone / WhatsApp
- Company Size
- Assessment Objective
- Message

Success message after submit:

`Thank you. Your request has been captured for the CBQA Global sales team. Our team will contact you within 1 hour. Thank you.`

After submit, a button appears:

**Back to OneConnect Platform**

This links to `oneconnect.html`.

Important:

- This is static frontend only.
- No backend, CRM, email, or database integration is implemented yet.
- Later, the lead form should be connected to backend/API/CRM/email.

## Template Commercial Flow

In **Missing Documents Summary**:

- Each missing document row has:
  - Badge: `Missing document`
  - Button: `Request Template`

Hover/focus on `Missing document` shows tooltip:

`Need this document? CBQA can provide ready-to-use ISO 27001 templates and assist your team in tailoring them.`

Clicking **Request Template** opens the same lead modal, but with template context.

The message field is auto-filled:

`I need the ISO 27001 document template for: <selected document>`

There is also a separate summary commercial card:

**Need document templates?**

CTA:

**Request Template Package**

This opens the lead modal with package context.

## Recommendation Sorting

In **Recommendations & Action Items**, items are now sorted by priority:

1. High
2. Medium
3. Low, if added later

Current logic:

- High = both document and implementation missing.
- Medium = either document or implementation missing.

## Pending / Possible Next Improvements

- Make lead modal dynamic:
  - Full report flow shows `Assessment Objective`.
  - Template flow hides `Assessment Objective` and shows a `Required Template` field.
- Add actual backend/API integration for leads.
- Add email or CRM submission.
- Add WhatsApp contact CTA.
- Add dedicated pages or real destinations for other module self assessments.
- Add actual template purchase/pricing flow if CBQA wants e-commerce behavior.
- Review `selfasesment_iso27001.html` long inline structure later and split into CSS/JS files if desired.

## Deployment Notes

Deployment planning is documented in:

`/Users/cbqaglobal/Documents/OneConnect/DEPLOYMENT_PLAN.md`

Known target:

- GitHub repo: `https://github.com/Nexora-Tech-Team/ONECONNECT`
- VPS IP: `72.61.209.201`
- VPS OS: `Ubuntu 24.04 LTS`
- Subdomain: `oneconnect.nexoratech.co`
- Existing VPS app root: `/root/nexora-node/apps`
- Planned app folder: `/root/nexora-node/apps/oneconnect`
- Existing reverse proxy: Traefik
- Future stack: Next.js frontend, Go backend, PostgreSQL database, Docker deployment

Security reminder:

- Do not store GitHub passwords, VPS passwords, SSH keys, tokens, `.env`, or production secrets in this repository.
- Use GitHub Actions secrets and SSH deploy keys.
- Rotate any credentials that were shared in chat before production deployment.

## How To Continue In A New Chat

Tell Codex:

`Please read /Users/cbqaglobal/Documents/OneConnect/PROJECT_NOTES.md first, then continue the OneConnect project from there.`
