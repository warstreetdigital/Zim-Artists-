# Project Constraints: Zim Artists Portfolio

**STATUS: LOCKED**

This project is a PURE STATIC HTML application. Any deviation from this structure is a violation of the core architectural mandate.

## Strict Rules
1. **No Frameworks:** ABSOLUTELY NO React, Vue, Svelte, or framework-specific code.
2. **No Build Tools:** No Vite, Webpack, Babel, or complex build pipelines. 
3. **No Framework Structure:** No `src` folder, no `App.tsx`, no `main.tsx`. 
4. **File Architecture:**
   - All pages are standalone `.html` files in the root (e.g., `rayblack.html`, `index.html`).
   - Shared logic belongs in `system.js`.
   - Shared styles belong in `identity.css`.
5. **Technology Stack:**
   - HTML5
   - Vanilla JavaScript
   - Tailwind CSS (Utility classes)
6. **Modification Rule:** All UI and logic changes must be applied directly to the corresponding `.html` or `.js` files.

**DO NOT INTRODUCE FRAMEWORKS. DO NOT DRIFT.**
