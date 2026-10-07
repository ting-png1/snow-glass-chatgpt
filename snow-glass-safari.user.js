// ==UserScript==
// @name         Snow Glass for ChatGPT
// @namespace    snow-glass-chatgpt
// @version      0.1.0-beta.1
// @description  Snowy glassmorphism theme for ChatGPT on Safari/iOS.
// @match        https://chatgpt.com/*
// @match        https://chat.openai.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(() => {
  'use strict';
  const STYLE_ID = 'snow-glass-chatgpt-style';
  const CSS = String.raw`
  :root {
    --rv-content-width: min(900px, calc(100vw - 6rem));
    --rv-text: #262a31;
    --rv-muted: rgba(57, 63, 72, .58);
    --rv-assistant-bubble: rgba(248, 249, 250, .68);
    --rv-user-bubble: rgba(252, 252, 252, .74);
    --rv-composer: rgba(255,255,255,.82);
    --rv-line: rgba(97, 107, 120, .085);
    --rv-shadow: 0 9px 26px rgba(48, 55, 63, .055);
    --thread-content-max-width: var(--rv-content-width) !important;
  }

  html, body {
    min-height: 100% !important;
  }

  body {
    background-image:
      linear-gradient(rgba(248,249,250,.34), rgba(248,249,250,.34)),
      radial-gradient(circle at 18% 20%, rgba(255,255,255,.34), transparent 22%),
      radial-gradient(circle at 75% 16%, rgba(255,255,255,.24), transparent 20%),
      url("data:image/webp;base64,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") !important;
    background-position: center, center, center, center !important;
    background-size: cover, cover, cover, cover !important;
    background-attachment: fixed, fixed, fixed, fixed !important;
    background-repeat: no-repeat !important;
  }

  main,
  [data-app-shell-main-content-layout] > [data-app-shell-thread-edge-divider],
  [data-app-shell-focus-area="main"],
  [data-request-input-activity-root="true"],
  [data-app-action-timeline-scroll],
  [data-thread-user-message-navigation-content="true"],
  [data-chatgpt-conversation-selection-target="true"] {
    background: transparent !important;
  }

  main,
  main .prose,
  main [data-message-author-role],
  main [data-content-search-unit-key],
  [data-user-message-bubble="true"] {
    color: var(--rv-text) !important;
  }

  main .text-token-text-secondary,
  main [class*="text-token-text-secondary"] {
    color: var(--rv-muted) !important;
  }

  @media (min-width: 900px) {
    main article {
      max-width: var(--rv-content-width) !important;
    }
  }

  [data-content-search-unit-key$=":assistant"],
  [data-content-search-unit-key$=":user"],
  div[data-message-author-role="assistant"],
  div[data-message-author-role="user"] {
    position: relative !important;
    box-sizing: border-box !important;
  }

  [data-content-search-unit-key$=":assistant"] {
    width: fit-content !important;
    max-width: min(78%, 720px) !important;
    margin: 20px auto 22px 0 !important;
    padding: 22px 24px !important;
    border: 1px solid var(--rv-line) !important;
    border-radius: 22px !important;
    background: var(--rv-assistant-bubble) !important;
    box-shadow: var(--rv-shadow) !important;
    backdrop-filter: blur(10px) saturate(108%);
    -webkit-backdrop-filter: blur(10px) saturate(108%);
  }

[data-content-search-unit-key$=":assistant"] .prose {
    width: auto !important;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
    line-height: 1.78 !important;
  }

  [data-user-message-bubble="true"] {
    width: fit-content !important;
    max-width: min(70%, 580px) !important;
    margin-left: auto !important;
    margin-right: 0 !important;
    padding: 14px 19px !important;
    border: 1px solid var(--rv-line) !important;
    border-radius: 18px !important;
    background: var(--rv-user-bubble) !important;
    box-shadow: var(--rv-shadow) !important;
    backdrop-filter: blur(10px) saturate(108%);
    -webkit-backdrop-filter: blur(10px) saturate(108%);
    line-height: 1.72 !important;
  }

  [data-user-message-bubble="true"].bg-user-message,
  [data-user-message-bubble="true"][class*="bg-user-message"],
  .user-message-bubble-color {
    background-color: transparent !important;
    background-image: none !important;
  }

  [data-content-search-unit-key$=":user"] {
    padding-top: 0 !important;
  }

  [data-testid="composer"],
  [data-testid="composer-root"],
  main form:has(textarea),
  main form:has([contenteditable="true"]) {
    width: min(100%, var(--rv-content-width)) !important;
    max-width: calc(100% - 18px) !important;
    margin-left: auto !important;
    margin-right: auto !important;
    box-sizing: border-box !important;
    overflow: visible !important;
    border: 1px solid rgba(102,111,124,.10) !important;
    border-radius: 25px !important;
    background: var(--rv-composer) !important;
    box-shadow: 0 11px 28px rgba(48,55,63,.065) !important;
    backdrop-filter: blur(12px) saturate(108%);
    -webkit-backdrop-filter: blur(12px) saturate(108%);
  }

  @media (max-width: 899px) {
    :root {
      --rv-content-width: calc(100vw - 22px);
      --thread-content-max-width: var(--rv-content-width) !important;
    }

    [data-content-search-unit-key$=":assistant"] {
      max-width: 89% !important;
      padding: 18px !important;
    }

    [data-user-message-bubble="true"] {
      max-width: 84% !important;
      padding: 12px 16px !important;
    }

    [data-testid="composer"],
    [data-testid="composer-root"],
    main form:has(textarea),
    main form:has([contenteditable="true"]) {
      width: calc(100% - 14px) !important;
      max-width: calc(100% - 14px) !important;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      transition-duration: .01ms !important;
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
    }
  }

  /* Mobile Safari / iOS web compatibility */
  @media (max-width: 899px) {
    html, body {
      min-height: 100dvh !important;
      overflow-x: clip !important;
    }

    body {
      background-attachment: scroll, scroll, scroll, scroll !important;
      background-position: center top, center top, center top, center top !important;
    }

    main article {
      width: 100% !important;
      max-width: 100% !important;
    }

    [data-content-search-unit-key$=":assistant"] {
      width: auto !important;
      max-width: calc(100% - 14px) !important;
      margin-left: 7px !important;
      margin-right: 7px !important;
      border-radius: 19px !important;
    }

    [data-user-message-bubble="true"] {
      max-width: 88% !important;
      border-radius: 17px !important;
    }

    [data-testid="composer"],
    [data-testid="composer-root"],
    main form:has(textarea),
    main form:has([contenteditable="true"]) {
      width: calc(100% - 16px - env(safe-area-inset-left) - env(safe-area-inset-right)) !important;
      max-width: calc(100% - 16px - env(safe-area-inset-left) - env(safe-area-inset-right)) !important;
      margin-left: calc(8px + env(safe-area-inset-left)) !important;
      margin-right: calc(8px + env(safe-area-inset-right)) !important;
      border-radius: 22px !important;
    }
  }`;

  function mount() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = CSS;
    (document.head || document.documentElement).appendChild(style);
  }

  mount();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount, { once: true });
  }
})();
