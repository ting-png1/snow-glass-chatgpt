# Snow Glass for ChatGPT

A soft snowy glassmorphism theme for ChatGPT.

> Public beta: the shared build contains no personal avatars and no custom names.

## Quick install

### Desktop — Edge / Chrome + Stylus

1. Install the Stylus extension.
2. Open the desktop beta file:
   https://raw.githubusercontent.com/ting-png1/snow-glass-chatgpt/main/snow-glass.user.css
3. Copy the full file into a new Stylus style.
4. Save and refresh https://chatgpt.com/

### iPhone / iPad Safari — Experimental

Safari does not use Stylus. The beta includes a userscript that injects the same theme CSS.

1. Install the open-source **Userscripts** Safari extension:
   https://github.com/quoid/userscripts
2. Enable its Safari extension and allow it on ChatGPT.
3. Open this raw userscript URL in Safari:
   https://raw.githubusercontent.com/ting-png1/snow-glass-chatgpt/main/snow-glass-safari.user.js
4. Install it from the Userscripts extension menu.
5. Refresh https://chatgpt.com/

## Support status

- Desktop Edge / Chrome + Stylus: beta
- Responsive mobile web CSS: beta
- iPhone / iPad Safari: experimental; real-device feedback wanted

## What is included

- Snow background
- Soft translucent assistant/user message bubbles
- Floating glass composer
- Responsive mobile layout
- iOS safe-area handling
- Reduced-motion support

## Privacy

The public build intentionally removes:
- personal avatars
- custom display names
- private/local development helpers

The Safari userscript embeds the CSS directly and does not fetch theme assets from third-party services at runtime.

## Feedback

If iPhone/iPad Safari looks wrong, a screenshot plus the iPhone model / iOS version is enough for us to tune the beta.
