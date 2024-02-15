// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,v=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,d,"e-0$1"),r.alternate&&(t=p.call(t,g,"$1."),t=p.call(t,v,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function N(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var _=String.fromCharCode,E=isNaN,U=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,a,o,f,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(t=r[l]))f+=t;else{if(e=void 0!==t.precision,!(t=I(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,E(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=N(t.arg,t.width,t.padRight)),f+=t.arg||"",s+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=x.exec(r);t;)(e=r.slice(i,x.lastIndex-t[0].length)).length&&n.push(e),n.push(k(t)),i=x.lastIndex,t=x.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[F(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return S.apply(null,e)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__,C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r){return r!=r}var R=Number.POSITIVE_INFINITY,Z=Number.NEGATIVE_INFINITY;function M(r){return r===R||r===Z}var X,Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),z=Object.prototype.toString,q=Object.prototype.hasOwnProperty,B="function"==typeof Symbol?Symbol:void 0,D="function"==typeof B?B.toStringTag:"",J=Y&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return z.call(r);n=r[D],a=D,e=null!=(i=r)&&q.call(i,a);try{r[D]=void 0}catch(e){return z.call(r)}return t=z.call(r),e?r[D]=n:delete r[D],t}:function(r){return z.call(r)},K="function"==typeof Uint32Array,Q="function"==typeof Uint32Array?Uint32Array:null,rr="function"==typeof Uint32Array?Uint32Array:void 0;X=function(){var r,e,n;if("function"!=typeof Q)return!1;try{e=new Q(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(K&&n instanceof Uint32Array||"[object Uint32Array]"===J(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var er,nr=X,tr="function"==typeof Float64Array,ir="function"==typeof Float64Array?Float64Array:null,ar="function"==typeof Float64Array?Float64Array:void 0;er=function(){var r,e,n;if("function"!=typeof ir)return!1;try{e=new ir([1,3.14,-3.14,NaN]),n=e,r=(tr&&n instanceof Float64Array||"[object Float64Array]"===J(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or,ur=er,cr="function"==typeof Uint8Array,fr="function"==typeof Uint8Array?Uint8Array:null,sr="function"==typeof Uint8Array?Uint8Array:void 0;or=function(){var r,e,n;if("function"!=typeof fr)return!1;try{e=new fr(e=[1,3.14,-3.14,256,257]),n=e,r=(cr&&n instanceof Uint8Array||"[object Uint8Array]"===J(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr,pr=or,yr="function"==typeof Uint16Array,dr="function"==typeof Uint16Array?Uint16Array:null,gr="function"==typeof Uint16Array?Uint16Array:void 0;lr=function(){var r,e,n;if("function"!=typeof dr)return!1;try{e=new dr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(yr&&n instanceof Uint16Array||"[object Uint16Array]"===J(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var vr,hr={uint16:lr,uint8:pr};(vr=new hr.uint16(1))[0]=4660;var wr=52===new hr.uint8(vr.buffer)[0],br=!0===wr?1:0,mr=new ur(1),Ar=new nr(mr.buffer);function Nr(r){return mr[0]=r,Ar[br]}function _r(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var Er=-.16666666666666632;function Ur(r,e){var n,t,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===e?r+t*(Er+i*n):r-(i*(.5*e-t*n)-e-t*Er)}var Ir,Sr,xr=2147483647,kr=2146435072,Fr=!0===wr?0:1,jr=new ur(1),Tr=new nr(jr.buffer);!0===wr?(Ir=1,Sr=0):(Ir=0,Sr=1);var Or={HIGH:Ir,LOW:Sr},Vr=new ur(1),$r=new nr(Vr.buffer),Gr=Or.HIGH,Hr=Or.LOW;function Wr(r,e){return $r[Gr]=r,$r[Hr]=e,Vr[0]}var Cr,Lr,Pr=Math.floor,Rr=1023;!0===wr?(Cr=1,Lr=0):(Cr=0,Lr=1);var Zr={HIGH:Cr,LOW:Lr},Mr=new ur(1),Xr=new nr(Mr.buffer),Yr=Zr.HIGH,zr=Zr.LOW;function qr(r,e,n,t){return Mr[0]=r,e[t]=Xr[Yr],e[t+n]=Xr[zr],e}function Br(r){return qr(r,[0,0],1,0)}L(Br,"assign",qr);var Dr=[0,0];function Jr(r,e){var n,t;return Br.assign(r,Dr,1,0),n=Dr[0],n&=xr,t=Nr(e),Wr(n|=t&=2147483648,Dr[1])}function Kr(r){return Math.abs(r)}function Qr(r,e,n,t){return P(r)||M(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Kr(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return Qr(r,[0,0],1,0)}),"assign",Qr);var re=[0,0],ee=[0,0];function ne(r,e){var n,t;return 0===e||0===r||P(r)||M(r)?r:(Qr(r,re,1,0),e+=re[1],e+=function(r){var e=Nr(r);return(e=(e&kr)>>>20)-Rr|0}(r=re[0]),e<-1074?Jr(0,r):e>1023?r<0?Z:R:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Br.assign(r,ee,1,0),n=ee[0],n&=2148532223,t*Wr(n|=e+Rr<<20,ee[1])))}function te(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var ie=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ae=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],oe=16777216,ue=5.960464477539063e-8,ce=te(20),fe=te(20),se=te(20),le=te(20);function pe(r,e,n,t,i,a,o,u,c){var f,s,l,p,y,d,g,v,h;for(p=a,h=t[n],v=n,y=0;v>0;y++)s=ue*h|0,le[y]=h-oe*s|0,h=t[v-1]+s,v-=1;if(h=ne(h,i),h-=8*Pr(.125*h),h-=g=0|h,l=0,i>0?(g+=y=le[n-1]>>24-i,le[n-1]-=y<<24-i,l=le[n-1]>>23-i):0===i?l=le[n-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,f=0,y=0;y<n;y++)v=le[y],0===f?0!==v&&(f=1,le[y]=16777216-v):le[y]=16777215-v;if(i>0)switch(i){case 1:le[n-1]&=8388607;break;case 2:le[n-1]&=4194303}2===l&&(h=1-h,0!==f&&(h-=ne(1,i)))}if(0===h){for(v=0,y=n-1;y>=a;y--)v|=le[y];if(0===v){for(d=1;0===le[a-d];d++);for(y=n+1;y<=n+d;y++){for(c[u+y]=ie[o+y],s=0,v=0;v<=u;v++)s+=r[v]*c[u+(y-v)];t[y]=s}return pe(r,e,n+=d,t,i,a,o,u,c)}}if(0===h)for(n-=1,i-=24;0===le[n];)n-=1,i-=24;else(h=ne(h,-i))>=oe?(s=ue*h|0,le[n]=h-oe*s|0,i+=24,le[n+=1]=s):le[n]=0|h;for(s=ne(1,i),y=n;y>=0;y--)t[y]=s*le[y],s*=ue;for(y=n;y>=0;y--){for(s=0,d=0;d<=p&&d<=n-y;d++)s+=ae[d]*t[y+d];se[n-y]=s}for(s=0,y=n;y>=0;y--)s+=se[y];for(e[0]=0===l?s:-s,s=se[0]-s,y=1;y<=n;y++)s+=se[y];return e[1]=0===l?s:-s,7&g}function ye(r,e,n,t){var i,a,o,u,c,f,s;for((a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),f=a-(o=t-1),s=o+4,c=0;c<=s;c++)ce[c]=f<0?0:ie[f],f+=1;for(c=0;c<=4;c++){for(i=0,f=0;f<=o;f++)i+=r[f]*ce[o+(c-f)];fe[c]=i}return pe(r,e,4,fe,u,4,a,o,ce)}var de=Math.round;function ge(r,e,n){var t,i,a,o,u;return a=r-1.5707963267341256*(t=de(.6366197723675814*r)),o=6077100506506192e-26*t,u=e>>20|0,n[0]=a-o,u-(Nr(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,u-(Nr(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var ve=1.5707963267341256,he=6077100506506192e-26,we=2*he,be=3*he,me=4*he,Ae=[0,0,0],Ne=[0,0];function _e(r,e){var n,t,i,a,o,u,c;if((i=Nr(r)&xr|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?ge(r,i,e):i<=1073928572?r>0?(c=r-ve,e[0]=c-he,e[1]=c-e[0]-he,1):(c=r+ve,e[0]=c+he,e[1]=c-e[0]+he,-1):r>0?(c=r-2*ve,e[0]=c-we,e[1]=c-e[0]-we,2):(c=r+2*ve,e[0]=c+we,e[1]=c-e[0]+we,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?ge(r,i,e):r>0?(c=r-3*ve,e[0]=c-be,e[1]=c-e[0]-be,3):(c=r+3*ve,e[0]=c+be,e[1]=c-e[0]+be,-3):1075388923===i?ge(r,i,e):r>0?(c=r-4*ve,e[0]=c-me,e[1]=c-e[0]-me,4):(c=r+4*ve,e[0]=c+me,e[1]=c-e[0]+me,-4);if(i<1094263291)return ge(r,i,e);if(i>=kr)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return jr[0]=r,Tr[Fr]}(r),c=Wr(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)Ae[o]=0|c,c=16777216*(c-Ae[o]);for(Ae[2]=c,a=3;0===Ae[a-1];)a-=1;return u=ye(Ae,Ne,t,a),r<0?(e[0]=-Ne[0],e[1]=-Ne[1],-u):(e[0]=Ne[0],e[1]=Ne[1],u)}var Ee=[0,0];function Ue(r){var e;if(e=Nr(r),(e&=2147483647)<=1072243195)return e<1044381696?1:_r(r,0);if(e>=2146435072)return NaN;switch(3&_e(r,Ee)){case 0:return _r(Ee[0],Ee[1]);case 1:return-Ur(Ee[0],Ee[1]);case 2:return-_r(Ee[0],Ee[1]);default:return Ur(Ee[0],Ee[1])}}var Ie=[0,0];function Se(r){var e;if(e=Nr(r),(e&=xr)<=1072243195)return e<1045430272?r:Ur(r,0);if(e>=kr)return NaN;switch(3&_e(r,Ie)){case 0:return Ur(Ie[0],Ie[1]);case 1:return _r(Ie[0],Ie[1]);case 2:return-Ur(Ie[0],Ie[1]);default:return-_r(Ie[0],Ie[1])}}var xe=3.141592653589793;function ke(r){var e,n;return P(r)||M(r)?NaN:0===(e=Kr(n=r%2))||1===e?Jr(0,n):e<.25?Se(xe*n):e<.75?Jr(Ue(xe*(e=.5-e)),n):e<1.25?(n=Jr(1,n)-n,Se(xe*n)):e<1.75?-Jr(Ue(xe*(e-=1.5)),n):(n-=Jr(2,n),Se(xe*n))}var Fe=!0===wr?1:0,je=new ur(1),Te=new nr(je.buffer),Oe=.6931471803691238,Ve=1.9082149292705877e-10,$e=1048575;function Ge(r){var e,n,t,i,a,o,u,c,f,s,l,p;return 0===r?Z:P(r)||r<0?NaN:(a=0,(n=Nr(r))<1048576&&(a-=54,n=Nr(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-Rr|0,a+=(c=614244+(n&=$e)&1048576|0)>>20|0,u=(r=function(r,e){return je[0]=r,Te[Fe]=e>>>0,je[0]}(r,n|1072693248^c))-1,($e&2+n)<3?0===u?0===a?0:a*Oe+a*Ve:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*Oe-(o-a*Ve-u)):(c=n-398458|0,f=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(c|=f)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*Oe-(e-(s*(e+o)+a*Ve)-u)):0===a?u-s*(u-o):a*Oe-(s*(u-o)-a*Ve-u))))}function He(r,e,n){var t;return P(r)||P(e)||P(n)||n<0?NaN:0===n?r<e?Z:0:r<e-n?Z:r>e+n?0:Ge((1+(t=(r-e)/n)+ke(t)/xe)/2)}function We(r){return function(){return r}}function Ce(r){return P(r)?We(NaN):function(e){return P(e)?NaN:e<r?Z:0}}return L((function(r,e){return P(r)||P(e)?NaN:r<e?Z:0}),"factory",Ce),L(He,"factory",(function(r,e){return P(r)||P(e)||e<0?We(NaN):0===e?Ce(r):function(n){var t;return P(n)?NaN:n<r-e?Z:n>r+e?0:Ge((1+(t=(n-r)/e)+ke(t)/xe)/2)}})),He},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).logcdf=e();
//# sourceMappingURL=index.js.map
