// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sinpi@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-logcdf@esm/index.mjs";var a=s,o=e,l=n,j=r,f=i;var p=function(t,s,e){var n;return a(t)||a(s)||a(e)||e<0?NaN:0===e?t<s?j:0:t<s-e?j:t>s+e?0:l((1+(n=(t-s)/e)+o(n)/f)/2)},c=d,h=m.factory,u=s,v=e,b=n,g=r,x=i;var N=p,y=function(t,s){return u(t)||u(s)||s<0?c(NaN):0===s?h(t):function(e){var n;if(u(e))return NaN;if(e<t-s)return g;if(e>t+s)return 0;return b((1+(n=(e-t)/s)+v(n)/x)/2)}};t(N,"factory",y);var k=N;export{k as default,y as factory};
//# sourceMappingURL=index.mjs.map
