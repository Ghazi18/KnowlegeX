// ملاحظة: استورد هذا الملف في أعلى main.tsx قبل أي شيء.

// Fetch لأجهزة أندرويد قديمة
import 'whatwg-fetch';

// IntersectionObserver لمراقبة الظهور (lazy lists/images)
import 'intersection-observer';

// ResizeObserver لبعض مكونات الواجهة
import 'resize-observer-polyfill/dist/ResizeObserver.global';

// URL/URLSearchParams في بيئات قديمة
import 'core-js/features/url';
import 'core-js/features/url-search-params';
