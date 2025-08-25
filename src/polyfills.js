// src/polyfills.js

// 1) requestIdleCallback (غير موجود بسفاري قديم)
if (!('requestIdleCallback' in window)) {
  window.requestIdleCallback = (cb) =>
    setTimeout(() => cb({ didTimeout: false, timeRemaining: () => 0 }), 1);
  window.cancelIdleCallback = (id) => clearTimeout(id);
}

// 2) IntersectionObserver (لـ lazy-loading للصور/القوائم)
if (!('IntersectionObserver' in window)) {
  // بديل بسيط جداً: نفترض أن كل العناصر "مرئية" فتتحمّل فوراً
  window.IntersectionObserver = class {
    constructor(cb) { this.cb = cb; }
    observe(el) { this.cb([{ isIntersecting: true, target: el }]); }
    unobserve() {}
    disconnect() {}
    takeRecords() { return []; }
  };
}

// 3) ResizeObserver (تستخدمه مكتبات UI كثيرة)
if (!('ResizeObserver' in window)) {
  window.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}

// 4) structuredClone و URL.canParse (اللي أضفناها سابقاً)
if (typeof window.structuredClone !== 'function') {
  window.structuredClone = (obj) => JSON.parse(JSON.stringify(obj));
}
if (!('canParse' in URL)) {
  URL.canParse = function (input, base) {
    try { new URL(input, base); return true; } catch { return false; }
  };
}
