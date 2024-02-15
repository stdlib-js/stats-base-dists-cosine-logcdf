// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,v=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,v,"e+0$1"),t=p.call(t,y,"e-0$1"),r.alternate&&(t=p.call(t,g,"$1."),t=p.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function N(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var _=String.fromCharCode,E=isNaN,U=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,a,o,f,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(t=r[l]))f+=t;else{if(e=void 0!==t.precision,!(t=I(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,E(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=N(t.arg,t.width,t.padRight)),f+=t.arg||"",s+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=k.exec(r);t;)(e=r.slice(i,k.lastIndex-t[0].length)).length&&n.push(e),n.push(x(t)),i=k.lastIndex,t=k.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[F(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return S.apply(null,e)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__;var C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r){return r!=r}var R=Number.POSITIVE_INFINITY,Z=Number.NEGATIVE_INFINITY;function M(r){return r===R||r===Z}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var Y=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var q="function"==typeof Symbol?Symbol:void 0,B="function"==typeof q?q.toStringTag:"";var D=X&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return Y.call(r);n=r[B],a=B,e=null!=(i=r)&&z.call(i,a);try{r[B]=void 0}catch(e){return Y.call(r)}return t=Y.call(r),e?r[B]=n:delete r[B],t}:function(r){return Y.call(r)},J="function"==typeof Uint32Array;var K="function"==typeof Uint32Array?Uint32Array:null;var Q,rr="function"==typeof Uint32Array?Uint32Array:void 0;Q=function(){var r,e,n;if("function"!=typeof K)return!1;try{e=new K(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(J&&n instanceof Uint32Array||"[object Uint32Array]"===D(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var er=Q,nr="function"==typeof Float64Array;var tr="function"==typeof Float64Array?Float64Array:null;var ir,ar="function"==typeof Float64Array?Float64Array:void 0;ir=function(){var r,e,n;if("function"!=typeof tr)return!1;try{e=new tr([1,3.14,-3.14,NaN]),n=e,r=(nr&&n instanceof Float64Array||"[object Float64Array]"===D(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or=ir,ur="function"==typeof Uint8Array;var cr="function"==typeof Uint8Array?Uint8Array:null;var fr,sr="function"==typeof Uint8Array?Uint8Array:void 0;fr=function(){var r,e,n;if("function"!=typeof cr)return!1;try{e=new cr(e=[1,3.14,-3.14,256,257]),n=e,r=(ur&&n instanceof Uint8Array||"[object Uint8Array]"===D(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr=fr,pr="function"==typeof Uint16Array;var vr="function"==typeof Uint16Array?Uint16Array:null;var yr,gr="function"==typeof Uint16Array?Uint16Array:void 0;yr=function(){var r,e,n;if("function"!=typeof vr)return!1;try{e=new vr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(pr&&n instanceof Uint16Array||"[object Uint16Array]"===D(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var dr,hr={uint16:yr,uint8:lr};(dr=new hr.uint16(1))[0]=4660;var wr=52===new hr.uint8(dr.buffer)[0],br=!0===wr?1:0,mr=new or(1),Ar=new er(mr.buffer);function Nr(r){return mr[0]=r,Ar[br]}function _r(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var Er=-.16666666666666632;function Ur(r,e){var n,t,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===e?r+t*(Er+i*n):r-(i*(.5*e-t*n)-e-t*Er)}var Ir,Sr,kr=!0===wr?0:1,xr=new or(1),Fr=new er(xr.buffer);!0===wr?(Ir=1,Sr=0):(Ir=0,Sr=1);var jr={HIGH:Ir,LOW:Sr},Tr=new or(1),Or=new er(Tr.buffer),Vr=jr.HIGH,$r=jr.LOW;function Gr(r,e){return Or[Vr]=r,Or[$r]=e,Tr[0]}var Hr,Wr,Cr=Math.floor;!0===wr?(Hr=1,Wr=0):(Hr=0,Wr=1);var Lr={HIGH:Hr,LOW:Wr},Pr=new or(1),Rr=new er(Pr.buffer),Zr=Lr.HIGH,Mr=Lr.LOW;function Xr(r,e,n,t){return Pr[0]=r,e[t]=Rr[Zr],e[t+n]=Rr[Mr],e}function Yr(r){return Xr(r,[0,0],1,0)}L(Yr,"assign",Xr);var zr=[0,0];function qr(r,e){var n,t;return Yr.assign(r,zr,1,0),n=zr[0],n&=2147483647,t=Nr(e),Gr(n|=t&=2147483648,zr[1])}function Br(r){return Math.abs(r)}function Dr(r,e,n,t){return P(r)||M(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Br(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return Dr(r,[0,0],1,0)}),"assign",Dr);var Jr=[0,0],Kr=[0,0];function Qr(r,e){var n,t;return 0===e||0===r||P(r)||M(r)?r:(Dr(r,Jr,1,0),e+=Jr[1],e+=function(r){var e=Nr(r);return(e=(2146435072&e)>>>20)-1023|0}(r=Jr[0]),e<-1074?qr(0,r):e>1023?r<0?Z:R:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Yr.assign(r,Kr,1,0),n=Kr[0],n&=2148532223,t*Gr(n|=e+1023<<20,Kr[1])))}function re(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var ee=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ne=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],te=5.960464477539063e-8,ie=re(20),ae=re(20),oe=re(20),ue=re(20);function ce(r,e,n,t,i,a,o,u,c){var f,s,l,p,v,y,g,d,h;for(p=a,h=t[n],d=n,v=0;d>0;v++)s=te*h|0,ue[v]=h-16777216*s|0,h=t[d-1]+s,d-=1;if(h=Qr(h,i),h-=8*Cr(.125*h),h-=g=0|h,l=0,i>0?(g+=v=ue[n-1]>>24-i,ue[n-1]-=v<<24-i,l=ue[n-1]>>23-i):0===i?l=ue[n-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,f=0,v=0;v<n;v++)d=ue[v],0===f?0!==d&&(f=1,ue[v]=16777216-d):ue[v]=16777215-d;if(i>0)switch(i){case 1:ue[n-1]&=8388607;break;case 2:ue[n-1]&=4194303}2===l&&(h=1-h,0!==f&&(h-=Qr(1,i)))}if(0===h){for(d=0,v=n-1;v>=a;v--)d|=ue[v];if(0===d){for(y=1;0===ue[a-y];y++);for(v=n+1;v<=n+y;v++){for(c[u+v]=ee[o+v],s=0,d=0;d<=u;d++)s+=r[d]*c[u+(v-d)];t[v]=s}return ce(r,e,n+=y,t,i,a,o,u,c)}}if(0===h)for(n-=1,i-=24;0===ue[n];)n-=1,i-=24;else(h=Qr(h,-i))>=16777216?(s=te*h|0,ue[n]=h-16777216*s|0,i+=24,ue[n+=1]=s):ue[n]=0|h;for(s=Qr(1,i),v=n;v>=0;v--)t[v]=s*ue[v],s*=te;for(v=n;v>=0;v--){for(s=0,y=0;y<=p&&y<=n-v;y++)s+=ne[y]*t[v+y];oe[n-v]=s}for(s=0,v=n;v>=0;v--)s+=oe[v];for(e[0]=0===l?s:-s,s=oe[0]-s,v=1;v<=n;v++)s+=oe[v];return e[1]=0===l?s:-s,7&g}function fe(r,e,n,t){var i,a,o,u,c,f,s;for(4,(a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),f=a-(o=t-1),s=o+4,c=0;c<=s;c++)ie[c]=f<0?0:ee[f],f+=1;for(c=0;c<=4;c++){for(i=0,f=0;f<=o;f++)i+=r[f]*ie[o+(c-f)];ae[c]=i}return 4,ce(r,e,4,ae,u,4,a,o,ie)}var se=Math.round;function le(r,e,n){var t,i,a,o,u;return a=r-1.5707963267341256*(t=se(.6366197723675814*r)),o=6077100506506192e-26*t,u=e>>20|0,n[0]=a-o,u-(Nr(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,u-(Nr(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var pe=1.5707963267341256,ve=6077100506506192e-26,ye=2*ve,ge=4*ve,de=[0,0,0],he=[0,0];function we(r,e){var n,t,i,a,o,u,c;if((i=2147483647&Nr(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?le(r,i,e):i<=1073928572?r>0?(c=r-pe,e[0]=c-ve,e[1]=c-e[0]-ve,1):(c=r+pe,e[0]=c+ve,e[1]=c-e[0]+ve,-1):r>0?(c=r-2*pe,e[0]=c-ye,e[1]=c-e[0]-ye,2):(c=r+2*pe,e[0]=c+ye,e[1]=c-e[0]+ye,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?le(r,i,e):r>0?(c=r-3*pe,e[0]=c-1.8231301519518578e-10,e[1]=c-e[0]-1.8231301519518578e-10,3):(c=r+3*pe,e[0]=c+1.8231301519518578e-10,e[1]=c-e[0]+1.8231301519518578e-10,-3):1075388923===i?le(r,i,e):r>0?(c=r-4*pe,e[0]=c-ge,e[1]=c-e[0]-ge,4):(c=r+4*pe,e[0]=c+ge,e[1]=c-e[0]+ge,-4);if(i<1094263291)return le(r,i,e);if(i>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return xr[0]=r,Fr[kr]}(r),c=Gr(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)de[o]=0|c,c=16777216*(c-de[o]);for(de[2]=c,a=3;0===de[a-1];)a-=1;return u=fe(de,he,t,a),r<0?(e[0]=-he[0],e[1]=-he[1],-u):(e[0]=he[0],e[1]=he[1],u)}var be=[0,0];function me(r){var e;if(e=Nr(r),(e&=2147483647)<=1072243195)return e<1044381696?1:_r(r,0);if(e>=2146435072)return NaN;switch(3&we(r,be)){case 0:return _r(be[0],be[1]);case 1:return-Ur(be[0],be[1]);case 2:return-_r(be[0],be[1]);default:return Ur(be[0],be[1])}}var Ae=[0,0];function Ne(r){var e;if(e=Nr(r),(e&=2147483647)<=1072243195)return e<1045430272?r:Ur(r,0);if(e>=2146435072)return NaN;switch(3&we(r,Ae)){case 0:return Ur(Ae[0],Ae[1]);case 1:return _r(Ae[0],Ae[1]);case 2:return-Ur(Ae[0],Ae[1]);default:return-_r(Ae[0],Ae[1])}}var _e=3.141592653589793;function Ee(r){var e,n;return P(r)||M(r)?NaN:0===(e=Br(n=r%2))||1===e?qr(0,n):e<.25?Ne(_e*n):e<.75?qr(me(_e*(e=.5-e)),n):e<1.25?(n=qr(1,n)-n,Ne(_e*n)):e<1.75?-qr(me(_e*(e-=1.5)),n):(n-=qr(2,n),Ne(_e*n))}var Ue=!0===wr?1:0,Ie=new or(1),Se=new er(Ie.buffer);var ke=.6931471803691238,xe=1.9082149292705877e-10;function Fe(r){var e,n,t,i,a,o,u,c,f,s,l,p;return 0===r?Z:P(r)||r<0?NaN:(a=0,(n=Nr(r))<1048576&&(a-=54,n=Nr(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-1023|0,a+=(c=(n&=1048575)+614244&1048576|0)>>20|0,u=(r=function(r,e){return Ie[0]=r,Se[Ue]=e>>>0,Ie[0]}(r,n|1072693248^c))-1,(1048575&2+n)<3?0===u?0===a?0:a*ke+a*xe:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*ke-(o-a*xe-u)):(c=n-398458|0,f=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(c|=f)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*ke-(e-(s*(e+o)+a*xe)-u)):0===a?u-s*(u-o):a*ke-(s*(u-o)-a*xe-u))))}function je(r,e,n){var t;return P(r)||P(e)||P(n)||n<0?NaN:0===n?r<e?Z:0:r<e-n?Z:r>e+n?0:Fe((1+(t=(r-e)/n)+Ee(t)/_e)/2)}function Te(r){return function(){return r}}function Oe(r){return P(r)?Te(NaN):function(e){if(P(e))return NaN;return e<r?Z:0}}function Ve(r,e){return P(r)||P(e)||e<0?Te(NaN):0===e?Oe(r):function(n){var t;if(P(n))return NaN;if(n<r-e)return Z;if(n>r+e)return 0;return Fe((1+(t=(n-r)/e)+Ee(t)/_e)/2)}}L((function(r,e){return P(r)||P(e)?NaN:r<e?Z:0}),"factory",Oe),L(je,"factory",Ve);export{je as default,Ve as factory};
//# sourceMappingURL=mod.js.map
