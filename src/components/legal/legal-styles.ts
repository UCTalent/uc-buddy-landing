export const LEGAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Murecho:wght@100;300;400;500;600;700&display=swap');

  :root {
    --serif: 'Murecho', system-ui, sans-serif;
    --sans: 'Murecho', system-ui, sans-serif;
    --ink: #1c1917;
    --ink-muted: #57534e;
    --ink-faint: #a8a29e;
    --surface: #fafaf9;
    --surface-raised: #ffffff;
    --border: #e7e5e4;
    --border-strong: #d6d3d1;
    --accent: #1d4ed8;
    --accent-bg: #eff6ff;
    --accent-border: #bfdbfe;
  }

  * { box-sizing: border-box; }
  body { font-family: var(--sans); }
  .pp-serif { font-family: var(--serif); }

  .nav-link { 
    font-family: var(--sans);
    font-size: 13px;
    font-weight: 400;
    color: var(--ink-muted);
    border-left: 1.5px solid transparent;
    padding: 5px 12px;
    display: block;
    text-decoration: none;
    transition: color 0.15s, border-color 0.15s;
    line-height: 1.4;
  }
  .nav-link:hover { color: var(--ink); border-left-color: var(--border-strong); }
  .nav-link.active-nav { color: var(--accent); border-left-color: var(--accent); font-weight: 500; }

  .section-heading {
    font-family: var(--serif);
    font-size: 1.375rem;
    font-weight: 600;
    color: var(--ink);
    margin: 0;
    letter-spacing: -0.01em;
  }

  .section-num {
    font-family: var(--sans);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: var(--accent);
    background: var(--accent-bg);
    border: 1px solid var(--accent-border);
    border-radius: 4px;
    padding: 2px 7px;
    flex-shrink: 0;
  }

  .body-text {
    font-family: var(--sans);
    font-size: 15px;
    line-height: 1.75;
    color: var(--ink-muted);
  }

  .section-divider {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 14px;
    margin-bottom: 20px;
    border-bottom: 1px solid var(--border);
  }

  .callout {
    background: var(--accent-bg);
    border: 1px solid var(--accent-border);
    border-radius: 6px;
    padding: 14px 16px;
    font-family: var(--sans);
    font-size: 14px;
    line-height: 1.65;
    color: #1e3a8a;
    margin-top: 20px;
  }

  .callout-neutral {
    background: #f5f5f4;
    border: 1px solid var(--border-strong);
    border-radius: 6px;
    padding: 14px 16px;
    font-family: var(--sans);
    font-size: 14px;
    line-height: 1.65;
    color: var(--ink-muted);
    margin-top: 20px;
  }

  .data-card {
    background: var(--surface-raised);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 18px 20px;
  }

  .data-card-title {
    font-family: var(--sans);
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: var(--ink);
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  .pp-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .pp-list li {
    display: flex;
    gap: 10px;
    font-family: var(--sans);
    font-size: 14.5px;
    line-height: 1.65;
    color: var(--ink-muted);
    padding: 4px 0;
  }
  .pp-list li::before {
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--ink-faint);
    flex-shrink: 0;
    margin-top: 9px;
  }

  .basis-card {
    background: var(--surface-raised);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 18px 20px;
  }
  .basis-card-num {
    font-family: var(--sans);
    font-size: 11px;
    font-weight: 600;
    color: var(--ink-faint);
    letter-spacing: 0.06em;
    margin-bottom: 6px;
  }
  .basis-card-title {
    font-family: var(--sans);
    font-size: 14px;
    font-weight: 500;
    color: var(--ink);
    margin-bottom: 6px;
  }
  .basis-card-body {
    font-family: var(--sans);
    font-size: 13.5px;
    line-height: 1.6;
    color: var(--ink-muted);
  }

  .perm-row {
    display: grid;
    grid-template-columns: 160px 1fr;
    border-bottom: 1px solid var(--border);
  }
  .perm-row:last-child { border-bottom: none; }
  .perm-key {
    font-family: 'Courier New', monospace;
    font-size: 12px;
    font-weight: 600;
    color: #1e3a8a;
    background: var(--accent-bg);
    padding: 14px 16px;
    border-right: 1px solid var(--border);
    display: flex;
    align-items: center;
    word-break: break-all;
  }
  .perm-val {
    font-family: var(--sans);
    font-size: 14px;
    line-height: 1.6;
    color: var(--ink-muted);
    padding: 14px 16px;
  }

  .rights-item {
    display: flex;
    gap: 14px;
    padding: 14px 0;
    border-bottom: 1px solid var(--border);
  }
  .rights-item:last-child { border-bottom: none; }
  .rights-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent);
    flex-shrink: 0;
    margin-top: 7px;
  }
  .rights-title {
    font-family: var(--sans);
    font-size: 14px;
    font-weight: 500;
    color: var(--ink);
    margin-bottom: 3px;
  }
  .rights-desc {
    font-family: var(--sans);
    font-size: 13.5px;
    color: var(--ink-muted);
    line-height: 1.55;
  }

  .tp-item {
    display: flex;
    gap: 14px;
    align-items: flex-start;
    padding: 12px 0;
    border-bottom: 1px solid var(--border);
  }
  .tp-item:last-child { border-bottom: none; }

  .use-cat {
    padding: 16px 0;
    border-bottom: 1px solid var(--border);
  }
  .use-cat:last-child { border-bottom: none; }
  .use-cat-title {
    font-family: var(--sans);
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.03em;
    color: var(--ink);
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .share-cat {
    padding: 16px 0;
    border-bottom: 1px solid var(--border);
  }
  .share-cat:last-child { border-bottom: none; }
  .share-cat-title {
    font-family: var(--sans);
    font-size: 14px;
    font-weight: 500;
    color: var(--ink);
    margin-bottom: 6px;
  }

  @media (max-width: 1023px) {
    .perm-row { grid-template-columns: 1fr; }
    .perm-key { border-right: none; border-bottom: 1px solid var(--border); }
  }
`;