// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sinpi@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-logcdf@v0.1.0-esm/index.mjs";function o(t,d,m){var o;return s(t)||s(d)||s(m)||m<0?NaN:0===m?t<d?i:0:t<d-m?i:t>d+m?0:n((1+(o=(t-d)/m)+e(o)/r)/2)}function a(t,o){return s(t)||s(o)||o<0?d(NaN):0===o?m(t):function(d){var m;if(s(d))return NaN;if(d<t-o)return i;if(d>t+o)return 0;return n((1+(m=(d-t)/o)+e(m)/r)/2)}}t(o,"factory",a);export{o as default,a as factory};
//# sourceMappingURL=index.mjs.map
