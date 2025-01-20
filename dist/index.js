"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=f(function(k,q){
var a=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-sinpi/dist'),s=require('@stdlib/math-base-special-ln/dist'),v=require('@stdlib/constants-float64-ninf/dist'),y=require('@stdlib/constants-float64-pi/dist');function d(e,r,i){var n;return a(e)||a(r)||a(i)||i<0?NaN:i===0?e<r?v:0:e<r-i?v:e>r+i?0:(n=(e-r)/i,s((1+n+p(n)/y)/2))}q.exports=d
});var N=f(function(w,o){
var I=require('@stdlib/utils-constant-function/dist'),g=require('@stdlib/stats-base-dists-degenerate-logcdf/dist').factory,u=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/math-base-special-sinpi/dist'),z=require('@stdlib/math-base-special-ln/dist'),P=require('@stdlib/constants-float64-ninf/dist'),O=require('@stdlib/constants-float64-pi/dist');function R(e,r){if(u(e)||u(r)||r<0)return I(NaN);if(r===0)return g(e);return i;function i(n){var t;return u(n)?NaN:n<e-r?P:n>e+r?0:(t=(n-e)/r,z((1+t+F(t)/O)/2))}}o.exports=R
});var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=c(),h=N();b(l,"factory",h);module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
