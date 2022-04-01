// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,a=e.__defineSetter__,f=e.__lookupGetter__,i=e.__lookupSetter__;var c=t,v=function(r,n,t){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((v="value"in t)&&(f.call(r,n)||i.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),l="get"in t,y="set"in t,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(r,n,t.get),y&&a&&a.call(r,n,t.set),r},l=n()?c:v;var y=function(r,n,t){l(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r){return r!=r},b=Number.POSITIVE_INFINITY,w=Number.NEGATIVE_INFINITY,s=b,N=w;var A=function(r){return r===s||r===N};var _=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var d=function(){return _&&"symbol"==typeof Symbol.toStringTag},m=Object.prototype.toString,h=m;var U=function(r){return h.call(r)},j=Object.prototype.hasOwnProperty;var g=function(r,n){return null!=r&&j.call(r,n)},I="function"==typeof Symbol?Symbol.toStringTag:"",O=g,S=I,E=m;var F=U,H=function(r){var n,t,e;if(null==r)return E.call(r);t=r[S],n=O(r,S);try{r[S]=void 0}catch(n){return E.call(r)}return e=E.call(r),n?r[S]=t:delete r[S],e},T=d()?H:F,G=T,P="function"==typeof Uint32Array;var L="function"==typeof Uint32Array?Uint32Array:null,V=function(r){return P&&r instanceof Uint32Array||"[object Uint32Array]"===G(r)},W=L;var k=function(){var r,n;if("function"!=typeof W)return!1;try{n=new W(n=[1,3.14,-3.14,4294967296,4294967297]),r=V(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var x="function"==typeof Uint32Array?Uint32Array:void 0,M=function(){throw new Error("not implemented")},Y=k()?x:M,C=T,q="function"==typeof Float64Array;var z="function"==typeof Float64Array?Float64Array:null,B=function(r){return q&&r instanceof Float64Array||"[object Float64Array]"===C(r)},D=z;var J=function(){var r,n;if("function"!=typeof D)return!1;try{n=new D([1,3.14,-3.14,NaN]),r=B(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var K="function"==typeof Float64Array?Float64Array:void 0,Q=function(){throw new Error("not implemented")},R=J()?K:Q,X=T,Z="function"==typeof Uint8Array;var $="function"==typeof Uint8Array?Uint8Array:null,rr=function(r){return Z&&r instanceof Uint8Array||"[object Uint8Array]"===X(r)},nr=$;var tr=function(){var r,n;if("function"!=typeof nr)return!1;try{n=new nr(n=[1,3.14,-3.14,256,257]),r=rr(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var er="function"==typeof Uint8Array?Uint8Array:void 0,or=function(){throw new Error("not implemented")},ur=tr()?er:or,ar=T,fr="function"==typeof Uint16Array;var ir="function"==typeof Uint16Array?Uint16Array:null,cr=function(r){return fr&&r instanceof Uint16Array||"[object Uint16Array]"===ar(r)},vr=ir;var lr=function(){var r,n;if("function"!=typeof vr)return!1;try{n=new vr(n=[1,3.14,-3.14,65536,65537]),r=cr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var yr,pr="function"==typeof Uint16Array?Uint16Array:void 0,br=function(){throw new Error("not implemented")},wr={uint16:lr()?pr:br,uint8:ur};(yr=new wr.uint16(1))[0]=4660;var sr=52===new wr.uint8(yr.buffer)[0],Nr=Y,Ar=!0===sr?1:0,_r=new R(1),dr=new Nr(_r.buffer);var mr=function(r){return _r[0]=r,dr[Ar]};var hr=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},Ur=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var jr=function(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*hr(u),e+=o*o*Ur(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))},gr=-.16666666666666632;var Ir=function(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(gr+o*t):r-(o*(.5*n-e*t)-n-e*gr)},Or=Y,Sr=!0===sr?0:1,Er=new R(1),Fr=new Or(Er.buffer);var Hr,Tr,Gr=function(r){return Er[0]=r,Fr[Sr]};!0===sr?(Hr=1,Tr=0):(Hr=0,Tr=1);var Pr=Y,Lr={HIGH:Hr,LOW:Tr},Vr=new R(1),Wr=new Pr(Vr.buffer),kr=Lr.HIGH,xr=Lr.LOW;var Mr,Yr,Cr=function(r,n){return Wr[kr]=r,Wr[xr]=n,Vr[0]},qr=Cr,zr=Math.floor;!0===sr?(Mr=1,Yr=0):(Mr=0,Yr=1);var Br=Y,Dr={HIGH:Mr,LOW:Yr},Jr=new R(1),Kr=new Br(Jr.buffer),Qr=Dr.HIGH,Rr=Dr.LOW;var Xr=function(r,n){return Jr[0]=n,r[0]=Kr[Qr],r[1]=Kr[Rr],r};var Zr=function(r,n){return 1===arguments.length?Xr([0,0],r):Xr(r,n)},$r=Zr,rn=mr,nn=qr,tn=[0,0];var en=function(r,n){var t,e;return $r(tn,r),t=tn[0],t&=2147483647,e=rn(n),nn(t|=e&=2147483648,tn[1])};var on=function(r){return Math.abs(r)},un=A,an=p,fn=on;var cn=function(r,n){return an(n)||un(n)?(r[0]=n,r[1]=0,r):0!==n&&fn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var vn=mr;var ln=function(r){var n=vn(r);return(n=(2146435072&n)>>>20)-1023|0},yn=b,pn=w,bn=p,wn=A,sn=en,Nn=function(r,n){return 1===arguments.length?cn([0,0],r):cn(r,n)},An=ln,_n=Zr,dn=qr,mn=[0,0],hn=[0,0];var Un=function(r,n){var t,e;return 0===n||0===r||bn(r)||wn(r)?r:(Nn(mn,r),n+=mn[1],(n+=An(r=mn[0]))<-1074?sn(0,r):n>1023?r<0?pn:yn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,_n(hn,r),t=hn[0],t&=2148532223,e*dn(t|=n+1023<<20,hn[1])))};var jn=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t};var gn=zr,In=Un,On=function(r){return jn(0,r)},Sn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],En=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Fn=5.960464477539063e-8,Hn=On(20),Tn=On(20),Gn=On(20),Pn=On(20);function Ln(r,n,t,e,o,u,a,f,i){var c,v,l,y,p,b,w,s,N;for(y=u,N=e[t],s=t,p=0;s>0;p++)v=Fn*N|0,Pn[p]=N-16777216*v|0,N=e[s-1]+v,s-=1;if(N=In(N,o),N-=8*gn(.125*N),N-=w=0|N,l=0,o>0?(w+=p=Pn[t-1]>>24-o,Pn[t-1]-=p<<24-o,l=Pn[t-1]>>23-o):0===o?l=Pn[t-1]>>23:N>=.5&&(l=2),l>0){for(w+=1,c=0,p=0;p<t;p++)s=Pn[p],0===c?0!==s&&(c=1,Pn[p]=16777216-s):Pn[p]=16777215-s;if(o>0)switch(o){case 1:Pn[t-1]&=8388607;break;case 2:Pn[t-1]&=4194303}2===l&&(N=1-N,0!==c&&(N-=In(1,o)))}if(0===N){for(s=0,p=t-1;p>=u;p--)s|=Pn[p];if(0===s){for(b=1;0===Pn[u-b];b++);for(p=t+1;p<=t+b;p++){for(i[f+p]=Sn[a+p],v=0,s=0;s<=f;s++)v+=r[s]*i[f+(p-s)];e[p]=v}return Ln(r,n,t+=b,e,o,u,a,f,i)}}if(0===N)for(t-=1,o-=24;0===Pn[t];)t-=1,o-=24;else(N=In(N,-o))>=16777216?(v=Fn*N|0,Pn[t]=N-16777216*v|0,o+=24,Pn[t+=1]=v):Pn[t]=0|N;for(v=In(1,o),p=t;p>=0;p--)e[p]=v*Pn[p],v*=Fn;for(p=t;p>=0;p--){for(v=0,b=0;b<=y&&b<=t-p;b++)v+=En[b]*e[p+b];Gn[t-p]=v}for(v=0,p=t;p>=0;p--)v+=Gn[p];for(n[0]=0===l?v:-v,v=Gn[0]-v,p=1;p<=t;p++)v+=Gn[p];return n[1]=0===l?v:-v,7&w}var Vn=function(r,n,t,e){var o,u,a,f,i,c,v;for(4,(u=(t-3)/24|0)<0&&(u=0),f=t-24*(u+1),c=u-(a=e-1),v=a+4,i=0;i<=v;i++)Hn[i]=c<0?0:Sn[c],c+=1;for(i=0;i<=4;i++){for(o=0,c=0;c<=a;c++)o+=r[c]*Hn[a+(i-c)];Tn[i]=o}return 4,Ln(r,n,4,Tn,f,4,u,a,Hn)},Wn=Math.round,kn=mr;var xn=mr,Mn=Gr,Yn=qr,Cn=Vn,qn=function(r,n,t){var e,o,u,a,f;return u=r-1.5707963267341256*(e=Wn(.6366197723675814*r)),a=6077100506506192e-26*e,f=n>>20|0,t[0]=u-a,f-(kn(t[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((o=u)-(u=o-(a=6077100506303966e-26*e))-a),t[0]=u-a,f-(kn(t[0])>>20&2047)>49&&(a=84784276603689e-45*e-((o=u)-(u=o-(a=20222662487111665e-37*e))-a),t[0]=u-a)),t[1]=u-t[0]-a,e},zn=1.5707963267341256,Bn=6077100506506192e-26,Dn=2*Bn,Jn=4*Bn,Kn=[0,0,0],Qn=[0,0];var Rn=function(r,n){var t,e,o,u,a,f,i;if((o=2147483647&xn(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?qn(r,o,n):o<=1073928572?r>0?(i=r-zn,n[0]=i-Bn,n[1]=i-n[0]-Bn,1):(i=r+zn,n[0]=i+Bn,n[1]=i-n[0]+Bn,-1):r>0?(i=r-2*zn,n[0]=i-Dn,n[1]=i-n[0]-Dn,2):(i=r+2*zn,n[0]=i+Dn,n[1]=i-n[0]+Dn,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?qn(r,o,n):r>0?(i=r-3*zn,n[0]=i-1.8231301519518578e-10,n[1]=i-n[0]-1.8231301519518578e-10,3):(i=r+3*zn,n[0]=i+1.8231301519518578e-10,n[1]=i-n[0]+1.8231301519518578e-10,-3):1075388923===o?qn(r,o,n):r>0?(i=r-4*zn,n[0]=i-Jn,n[1]=i-n[0]-Jn,4):(i=r+4*zn,n[0]=i+Jn,n[1]=i-n[0]+Jn,-4);if(o<1094263291)return qn(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=Mn(r),i=Yn(o-((e=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)Kn[a]=0|i,i=16777216*(i-Kn[a]);for(Kn[2]=i,u=3;0===Kn[u-1];)u-=1;return f=Cn(Kn,Qn,e,u),r<0?(n[0]=-Qn[0],n[1]=-Qn[1],-f):(n[0]=Qn[0],n[1]=Qn[1],f)},Xn=mr,Zn=jr,$n=Ir,rt=Rn,nt=[0,0];var tt=mr,et=jr,ot=Ir,ut=Rn,at=[0,0];var ft=3.141592653589793,it=p,ct=A,vt=function(r){var n;if(n=Xn(r),(n&=2147483647)<=1072243195)return n<1044381696?1:Zn(r,0);if(n>=2146435072)return NaN;switch(3&rt(r,nt)){case 0:return Zn(nt[0],nt[1]);case 1:return-$n(nt[0],nt[1]);case 2:return-Zn(nt[0],nt[1]);default:return $n(nt[0],nt[1])}},lt=function(r){var n;if(n=tt(r),(n&=2147483647)<=1072243195)return n<1045430272?r:ot(r,0);if(n>=2146435072)return NaN;switch(3&ut(r,at)){case 0:return ot(at[0],at[1]);case 1:return et(at[0],at[1]);case 2:return-ot(at[0],at[1]);default:return-et(at[0],at[1])}},yt=on,pt=en,bt=ft;var wt=function(r){var n,t;return it(r)||ct(r)?NaN:0===(n=yt(t=r%2))||1===n?pt(0,t):n<.25?lt(bt*t):n<.75?pt(vt(bt*(n=.5-n)),t):n<1.25?(t=pt(1,t)-t,lt(bt*t)):n<1.75?-pt(vt(bt*(n-=1.5)),t):(t-=pt(2,t),lt(bt*t))},st=Y,Nt=!0===sr?1:0,At=new R(1),_t=new st(At.buffer);var dt=function(r,n){return At[0]=r,_t[Nt]=n>>>0,At[0]};var mt=mr,ht=dt,Ut=p,jt=w,gt=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},It=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},Ot=.6931471803691238,St=1.9082149292705877e-10;var Et=function(r){var n,t,e,o,u,a,f,i,c,v,l;return 0===r?jt:Ut(r)||r<0?NaN:(o=0,(t=mt(r))<1048576&&(o-=54,t=mt(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-1023|0,o+=(f=(t&=1048575)+614244&1048576|0)>>20|0,a=(r=ht(r,t|1072693248^f))-1,(1048575&2+t)<3?0===a?0===o?0:o*Ot+o*St:(u=a*a*(.5-.3333333333333333*a),0===o?a-u:o*Ot-(u-o*St-a)):(f=t-398458|0,i=440401-t|0,e=(v=(l=(c=a/(2+a))*c)*l)*gt(v),u=l*It(v)+e,(f|=i)>0?(n=.5*a*a,0===o?a-(n-c*(n+u)):o*Ot-(n-(c*(n+u)+o*St)-a)):0===o?a-c*(a-u):o*Ot-(c*(a-u)-o*St-a))))},Ft=p,Ht=wt,Tt=Et,Gt=w;var Pt=function(r,n,t){var e;return Ft(r)||Ft(n)||Ft(t)||t<0?NaN:0===t?r<n?Gt:0:r<n-t?Gt:r>n+t?0:Tt((1+(e=(r-n)/t)+Ht(e)/3.141592653589793)/2)};var Lt=function(r){return function(){return r}},Vt=p,Wt=w;var kt=Lt,xt=p,Mt=w;var Yt=function(r,n){return Vt(r)||Vt(n)?NaN:r<n?Wt:0};y(Yt,"factory",(function(r){return xt(r)?kt(NaN):function(n){if(xt(n))return NaN;return n<r?Mt:0}}));var Ct=Lt,qt=Yt.factory,zt=p,Bt=wt,Dt=Et,Jt=w;var Kt=Pt,Qt=function(r,n){return zt(r)||zt(n)||n<0?Ct(NaN):0===n?qt(r):function(t){var e;if(zt(t))return NaN;if(t<r-n)return Jt;if(t>r+n)return 0;return Dt((1+(e=(t-r)/n)+Bt(e)/3.141592653589793)/2)}};y(Kt,"factory",Qt);var Rt=Kt;export{Rt as default,Qt as factory};
//# sourceMappingURL=mod.js.map
