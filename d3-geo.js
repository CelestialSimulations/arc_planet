// https://d3js.org/d3-geo/ Version 1.1.0. Copyright 2016 Mike Bostock.
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("d3-array")):"function"==typeof define&&define.amd?define(["exports","d3-array"],t):t(n.d3=n.d3||{},n.d3)}(this,function(n,t){"use strict";function r(){return new i}function i(){this.reset()}function e(n,t,r){var i=n.s=t+r,e=i-t,o=i-e;n.t=t-o+(r-e)}function o(n){return n>1?0:-1>n?hr:Math.acos(n)}function u(n){return n>1?dr:-1>n?-dr:Math.asin(n)}function a(n){return(n=Cr(n/2))*n}function c(){}function l(n,t){n&&Or.hasOwnProperty(n.type)&&Or[n.type](n,t)}function f(n,t,r){var i,e=-1,o=n.length-r;for(t.lineStart();++e<o;)i=n[e],t.point(i[0],i[1],i[2]);t.lineEnd()}function p(n,t){var r=-1,i=n.length;for(t.polygonStart();++r<i;)f(n[r],t,1);t.polygonEnd()}function s(n,t){n&&Lr.hasOwnProperty(n.type)?Lr[n.type](n,t):l(n,t)}function g(){Tr.point=h}function v(){d(Ot,Tt)}function h(n,t){Tr.point=d,Ot=n,Tt=t,n*=mr,t*=mr,Gt=n,Ft=wr(t=t/2+Er),It=Cr(t)}function d(n,t){n*=mr,t*=mr,t=t/2+Er;var r=n-Gt,i=r>=0?1:-1,e=i*r,o=wr(t),u=Cr(t),a=It*u,c=Ft*o+a*wr(e),l=a*i*Cr(e);bt.add(Nr(l,c)),Gt=n,Ft=o,It=u}function E(n){return Lt?Lt.reset():(Lt=r(),bt=r()),s(n,Tr),2*Lt}function S(n){return[Nr(n[1],n[0]),u(n[2])]}function y(n){var t=n[0],r=n[1],i=wr(r);return[i*wr(t),i*Cr(t),Cr(r)]}function m(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function M(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function x(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function N(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function w(n){var t=zr(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function R(n,t){Qt.push(Vt=[_t=n,Dt=n]),Bt>t&&(Bt=t),t>Ut&&(Ut=t)}function A(n,t){var r=y([n*mr,t*mr]);if(Jt){var i=M(Jt,r),e=[i[1],-i[0],0],o=M(e,i);w(o),o=S(o);var u,a=n-Zt,c=a>0?1:-1,l=o[0]*yr*c,f=Mr(a)>180;f^(l>c*Zt&&c*n>l)?(u=o[1]*yr,u>Ut&&(Ut=u)):(l=(l+360)%360-180,f^(l>c*Zt&&c*n>l)?(u=-o[1]*yr,Bt>u&&(Bt=u)):(Bt>t&&(Bt=t),t>Ut&&(Ut=t))),f?Zt>n?b(_t,n)>b(_t,Dt)&&(Dt=n):b(n,Dt)>b(_t,Dt)&&(_t=n):Dt>=_t?(_t>n&&(_t=n),n>Dt&&(Dt=n)):n>Zt?b(_t,n)>b(_t,Dt)&&(Dt=n):b(n,Dt)>b(_t,Dt)&&(_t=n)}else R(n,t);Jt=r,Zt=n}function j(){Gr.point=A}function P(){Vt[0]=_t,Vt[1]=Dt,Gr.point=R,Jt=null}function C(n,t){if(Jt){var r=n-Zt;Kt.add(Mr(r)>180?r+(r>0?360:-360):r)}else kt=n,Ht=t;Tr.point(n,t),A(n,t)}function q(){Tr.lineStart()}function z(){C(kt,Ht),Tr.lineEnd(),Mr(Kt)>gr&&(_t=-(Dt=180)),Vt[0]=_t,Vt[1]=Dt,Jt=null}function b(n,t){return(t-=n)<0?t+360:t}function L(n,t){return n[0]-t[0]}function O(n,t){return n[0]<=n[1]?n[0]<=t&&t<=n[1]:t<n[0]||n[1]<t}function T(n){var t,i,e,o,u,a,c;if(Kt?Kt.reset():Kt=r(),Ut=Dt=-(_t=Bt=1/0),Qt=[],s(n,Gr),i=Qt.length){for(Qt.sort(L),t=1,e=Qt[0],u=[e];i>t;++t)o=Qt[t],O(e,o[0])||O(e,o[1])?(b(e[0],o[1])>b(e[0],e[1])&&(e[1]=o[1]),b(o[0],e[1])>b(e[0],e[1])&&(e[0]=o[0])):u.push(e=o);for(a=-(1/0),i=u.length-1,t=0,e=u[i];i>=t;e=o,++t)o=u[t],(c=b(e[1],o[0]))>a&&(a=c,_t=o[0],Dt=e[1])}return Qt=Vt=null,_t===1/0||Bt===1/0?[[NaN,NaN],[NaN,NaN]]:[[_t,Bt],[Dt,Ut]]}function G(n,t){n*=mr,t*=mr;var r=wr(t);F(r*wr(n),r*Cr(n),Cr(t))}function F(n,t,r){++Wt,Yt+=(n-Yt)/Wt,$t+=(t-$t)/Wt,nr+=(r-nr)/Wt}function I(){Fr.point=_}function _(n,t){n*=mr,t*=mr;var r=wr(t);lr=r*wr(n),fr=r*Cr(n),pr=Cr(t),Fr.point=B,F(lr,fr,pr)}function B(n,t){n*=mr,t*=mr;var r=wr(t),i=r*wr(n),e=r*Cr(n),o=Cr(t),u=Nr(zr((u=fr*o-pr*e)*u+(u=pr*i-lr*o)*u+(u=lr*e-fr*i)*u),lr*i+fr*e+pr*o);Xt+=u,tr+=u*(lr+(lr=i)),rr+=u*(fr+(fr=e)),ir+=u*(pr+(pr=o)),F(lr,fr,pr)}function D(){Fr.point=G}function U(){Fr.point=k}function Z(){H(ar,cr),Fr.point=G}function k(n,t){ar=n,cr=t,n*=mr,t*=mr,Fr.point=H;var r=wr(t);lr=r*wr(n),fr=r*Cr(n),pr=Cr(t),F(lr,fr,pr)}function H(n,t){n*=mr,t*=mr;var r=wr(t),i=r*wr(n),e=r*Cr(n),u=Cr(t),a=fr*u-pr*e,c=pr*i-lr*u,l=lr*e-fr*i,f=zr(a*a+c*c+l*l),p=lr*i+fr*e+pr*u,s=f&&-o(p)/f,g=Nr(f,p);er+=s*a,or+=s*c,ur+=s*l,Xt+=g,tr+=g*(lr+(lr=i)),rr+=g*(fr+(fr=e)),ir+=g*(pr+(pr=u)),F(lr,fr,pr)}function J(n){Wt=Xt=Yt=$t=nr=tr=rr=ir=er=or=ur=0,s(n,Fr);var t=er,r=or,i=ur,e=t*t+r*r+i*i;return vr>e&&(t=tr,r=rr,i=ir,gr>Xt&&(t=Yt,r=$t,i=nr),e=t*t+r*r+i*i,vr>e)?[NaN,NaN]:[Nr(r,t)*yr,u(i/zr(e))*yr]}function K(n){return function(){return n}}function Q(n,t){function r(r,i){return r=n(r,i),t(r[0],r[1])}return n.invert&&t.invert&&(r.invert=function(r,i){return r=t.invert(r,i),r&&n.invert(r[0],r[1])}),r}function V(n,t){return[n>hr?n-Sr:-hr>n?n+Sr:n,t]}function W(n,t,r){return(n%=Sr)?t||r?Q(Y(n),$(t,r)):Y(n):t||r?$(t,r):V}function X(n){return function(t,r){return t+=n,[t>hr?t-Sr:-hr>t?t+Sr:t,r]}}function Y(n){var t=X(n);return t.invert=X(-n),t}function $(n,t){function r(n,t){var r=wr(t),c=wr(n)*r,l=Cr(n)*r,f=Cr(t),p=f*i+c*e;return[Nr(l*o-p*a,c*i-f*e),u(p*o+l*a)]}var i=wr(n),e=Cr(n),o=wr(t),a=Cr(t);return r.invert=function(n,t){var r=wr(t),c=wr(n)*r,l=Cr(n)*r,f=Cr(t),p=f*o-l*a;return[Nr(l*o+f*a,c*i+p*e),u(p*i-c*e)]},r}function nn(n){function t(t){return t=n(t[0]*mr,t[1]*mr),t[0]*=yr,t[1]*=yr,t}return n=W(n[0]*mr,n[1]*mr,n.length>2?n[2]*mr:0),t.invert=function(t){return t=n.invert(t[0]*mr,t[1]*mr),t[0]*=yr,t[1]*=yr,t},t}function tn(n,t,r,i,e,o){if(r){var u=wr(t),a=Cr(t),c=i*r;null==e?(e=t+i*Sr,o=t-c/2):(e=rn(u,e),o=rn(u,o),(i>0?o>e:e>o)&&(e+=i*Sr));for(var l,f=e;i>0?f>o:o>f;f-=c)l=S([u,-a*wr(f),-a*Cr(f)]),n.point(l[0],l[1])}}function rn(n,t){t=y(t),t[0]-=n,w(t);var r=o(-t[1]);return((-t[2]<0?-r:r)+Sr-gr)%Sr}function en(){function n(n,t){r.push(n=i(n,t)),n[0]*=yr,n[1]*=yr}function t(){var n=e.apply(this,arguments),t=o.apply(this,arguments)*mr,c=u.apply(this,arguments)*mr;return r=[],i=W(-n[0]*mr,-n[1]*mr,0).invert,tn(a,t,c,1),n={type:"Polygon",coordinates:[r]},r=i=null,n}var r,i,e=K([0,0]),o=K(90),u=K(6),a={point:n};return t.center=function(n){return arguments.length?(e="function"==typeof n?n:K([+n[0],+n[1]]),t):e},t.radius=function(n){return arguments.length?(o="function"==typeof n?n:K(+n),t):o},t.precision=function(n){return arguments.length?(u="function"==typeof n?n:K(+n),t):u},t}function on(){var n,t=[];return{point:function(t,r){n.push([t,r])},lineStart:function(){t.push(n=[])},lineEnd:c,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var r=t;return t=[],n=null,r}}}function un(n,t,r,i,e,o){var u,a=n[0],c=n[1],l=t[0],f=t[1],p=0,s=1,g=l-a,v=f-c;if(u=r-a,g||!(u>0)){if(u/=g,0>g){if(p>u)return;s>u&&(s=u)}else if(g>0){if(u>s)return;u>p&&(p=u)}if(u=e-a,g||!(0>u)){if(u/=g,0>g){if(u>s)return;u>p&&(p=u)}else if(g>0){if(p>u)return;s>u&&(s=u)}if(u=i-c,v||!(u>0)){if(u/=v,0>v){if(p>u)return;s>u&&(s=u)}else if(v>0){if(u>s)return;u>p&&(p=u)}if(u=o-c,v||!(0>u)){if(u/=v,0>v){if(u>s)return;u>p&&(p=u)}else if(v>0){if(p>u)return;s>u&&(s=u)}return p>0&&(n[0]=a+p*g,n[1]=c+p*v),1>s&&(t[0]=a+s*g,t[1]=c+s*v),!0}}}}}function an(n,t){return Mr(n[0]-t[0])<gr&&Mr(n[1]-t[1])<gr}function cn(n,t,r,i){this.x=n,this.z=t,this.o=r,this.e=i,this.v=!1,this.n=this.p=null}function ln(n,t,r,i,e){var o,u,a=[],c=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,r,i=n[0],u=n[t];if(an(i,u)){for(e.lineStart(),o=0;t>o;++o)e.point((i=n[o])[0],i[1]);return void e.lineEnd()}a.push(r=new cn(i,n,null,!0)),c.push(r.o=new cn(i,null,r,!1)),a.push(r=new cn(u,n,null,!1)),c.push(r.o=new cn(u,null,r,!0))}}),a.length){for(c.sort(t),fn(a),fn(c),o=0,u=c.length;u>o;++o)c[o].e=r=!r;for(var l,f,p=a[0];;){for(var s=p,g=!0;s.v;)if((s=s.n)===p)return;l=s.z,e.lineStart();do{if(s.v=s.o.v=!0,s.e){if(g)for(o=0,u=l.length;u>o;++o)e.point((f=l[o])[0],f[1]);else i(s.x,s.n.x,1,e);s=s.n}else{if(g)for(l=s.p.z,o=l.length-1;o>=0;--o)e.point((f=l[o])[0],f[1]);else i(s.x,s.p.x,-1,e);s=s.p}s=s.o,l=s.z,g=!g}while(!s.v);e.lineEnd()}}}function fn(n){if(t=n.length){for(var t,r,i=0,e=n[0];++i<t;)e.n=r=n[i],r.p=e,e=r;e.n=r=n[0],r.p=e}}function pn(n,r,i,e){function o(t,o){return t>=n&&i>=t&&o>=r&&e>=o}function u(t,o,u,c){var f=0,p=0;if(null==t||(f=a(t,u))!==(p=a(o,u))||l(t,o)<0^u>0){do c.point(0===f||3===f?n:i,f>1?e:r);while((f=(f+u+4)%4)!==p)}else c.point(o[0],o[1])}function a(t,e){return Mr(t[0]-n)<gr?e>0?0:3:Mr(t[0]-i)<gr?e>0?2:1:Mr(t[1]-r)<gr?e>0?1:0:e>0?3:2}function c(n,t){return l(n.x,t.x)}function l(n,t){var r=a(n,1),i=a(t,1);return r!==i?r-i:0===r?t[1]-n[1]:1===r?n[0]-t[0]:2===r?n[1]-t[1]:t[0]-n[0]}return function(a){function l(n,t){o(n,t)&&j.point(n,t)}function f(){for(var t=0,r=0,i=E.length;i>r;++r)for(var o,u,a=E[r],c=1,l=a.length,f=a[0],p=f[0],s=f[1];l>c;++c)o=p,u=s,f=a[c],p=f[0],s=f[1],e>=u?s>e&&(p-o)*(e-u)>(s-u)*(n-o)&&++t:e>=s&&(s-u)*(n-o)>(p-o)*(e-u)&&--t;return t}function p(){j=P,d=[],E=[],A=!0}function s(){var n=f(),r=A&&n,i=(d=t.merge(d)).length;(r||i)&&(a.polygonStart(),r&&(a.lineStart(),u(null,null,1,a),a.lineEnd()),i&&ln(d,c,n,u,a),a.polygonEnd()),j=a,d=E=S=null}function g(){C.point=h,E&&E.push(S=[]),R=!0,w=!1,x=N=NaN}function v(){d&&(h(y,m),M&&w&&P.rejoin(),d.push(P.result())),C.point=l,w&&j.lineEnd()}function h(t,u){var a=o(t,u);if(E&&S.push([t,u]),R)y=t,m=u,M=a,R=!1,a&&(j.lineStart(),j.point(t,u));else if(a&&w)j.point(t,u);else{var c=[x=Math.max(Xr,Math.min(Wr,x)),N=Math.max(Xr,Math.min(Wr,N))],l=[t=Math.max(Xr,Math.min(Wr,t)),u=Math.max(Xr,Math.min(Wr,u))];un(c,l,n,r,i,e)?(w||(j.lineStart(),j.point(c[0],c[1])),j.point(l[0],l[1]),a||j.lineEnd(),A=!1):a&&(j.lineStart(),j.point(t,u),A=!1)}x=t,N=u,w=a}var d,E,S,y,m,M,x,N,w,R,A,j=a,P=on(),C={point:l,lineStart:g,lineEnd:v,polygonStart:p,polygonEnd:s};return C}}function sn(){var n,t,r,i=0,e=0,o=960,u=500;return r={stream:function(r){return n&&t===r?n:n=pn(i,e,o,u)(t=r)},extent:function(a){return arguments.length?(i=+a[0][0],e=+a[0][1],o=+a[1][0],u=+a[1][1],n=t=null,r):[[i,e],[o,u]]}}}function gn(){Yr.point=hn,Yr.lineEnd=vn}function vn(){Yr.point=Yr.lineEnd=c}function hn(n,t){n*=mr,t*=mr,_r=n,Br=Cr(t),Dr=wr(t),Yr.point=dn}function dn(n,t){n*=mr,t*=mr;var r=Cr(t),i=wr(t),e=Mr(n-_r),o=wr(e),u=Cr(e),a=i*u,c=Dr*r-Br*i*o,l=Br*r+Dr*i*o;Ir.add(Nr(zr(a*a+c*c),l)),_r=n,Br=r,Dr=i}function En(n){return Ir?Ir.reset():Ir=r(),s(n,Yr),+Ir}function Sn(n,t){return $r[0]=n,$r[1]=t,En(ni)}function yn(n,r,i){var e=t.range(n,r-gr,i).concat(r);return function(n){return e.map(function(t){return[n,t]})}}function mn(n,r,i){var e=t.range(n,r-gr,i).concat(r);return function(n){return e.map(function(t){return[t,n]})}}function Mn(){function n(){return{type:"MultiLineString",coordinates:r()}}function r(){return t.range(Rr(u/E)*E,o,E).map(g).concat(t.range(Rr(f/S)*S,l,S).map(v)).concat(t.range(Rr(e/h)*h,i,h).filter(function(n){return Mr(n%E)>gr}).map(p)).concat(t.range(Rr(c/d)*d,a,d).filter(function(n){return Mr(n%S)>gr}).map(s))}var i,e,o,u,a,c,l,f,p,s,g,v,h=10,d=h,E=90,S=360,y=2.5;return n.lines=function(){return r().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[g(u).concat(v(l).slice(1),g(o).reverse().slice(1),v(f).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.extentMajor(t).extentMinor(t):n.extentMinor()},n.extentMajor=function(t){return arguments.length?(u=+t[0][0],o=+t[1][0],f=+t[0][1],l=+t[1][1],u>o&&(t=u,u=o,o=t),f>l&&(t=f,f=l,l=t),n.precision(y)):[[u,f],[o,l]]},n.extentMinor=function(t){return arguments.length?(e=+t[0][0],i=+t[1][0],c=+t[0][1],a=+t[1][1],e>i&&(t=e,e=i,i=t),c>a&&(t=c,c=a,a=t),n.precision(y)):[[e,c],[i,a]]},n.step=function(t){return arguments.length?n.stepMajor(t).stepMinor(t):n.stepMinor()},n.stepMajor=function(t){return arguments.length?(E=+t[0],S=+t[1],n):[E,S]},n.stepMinor=function(t){return arguments.length?(h=+t[0],d=+t[1],n):[h,d]},n.precision=function(t){return arguments.length?(y=+t,p=yn(c,a,90),s=mn(e,i,y),g=yn(f,l,90),v=mn(u,o,y),n):y},n.extentMajor([[-180,-90+gr],[180,90-gr]]).extentMinor([[-180,-80-gr],[180,80+gr]])}function xn(n,t){var r=n[0]*mr,i=n[1]*mr,e=t[0]*mr,o=t[1]*mr,c=wr(i),l=Cr(i),f=wr(o),p=Cr(o),s=c*wr(r),g=c*Cr(r),v=f*wr(e),h=f*Cr(e),d=2*u(zr(a(o-i)+c*f*a(e-r))),E=Cr(d),S=d?function(n){var t=Cr(n*=d)/E,r=Cr(d-n)/E,i=r*s+t*v,e=r*g+t*h,o=r*l+t*p;return[Nr(e,i)*yr,Nr(o,zr(i*i+e*e))*yr]}:function(){return[r*yr,i*yr]};return S.distance=d,S}function Nn(n){return n}function wn(){ii.point=Rn}function Rn(n,t){ii.point=An,Ur=kr=n,Zr=Hr=t}function An(n,t){ri.add(Hr*n-kr*t),kr=n,Hr=t}function jn(){An(Ur,Zr)}function Pn(n,t){ei>n&&(ei=n),n>ui&&(ui=n),oi>t&&(oi=t),t>ai&&(ai=t)}function Cn(n,t){li+=n,fi+=t,++pi}function qn(){Si.point=zn}function zn(n,t){Si.point=bn,Cn(Qr=n,Vr=t)}function bn(n,t){var r=n-Qr,i=t-Vr,e=zr(r*r+i*i);si+=e*(Qr+n)/2,gi+=e*(Vr+t)/2,vi+=e,Cn(Qr=n,Vr=t)}function Ln(){Si.point=Cn}function On(){Si.point=Gn}function Tn(){Fn(Jr,Kr)}function Gn(n,t){Si.point=Fn,Cn(Jr=Qr=n,Kr=Vr=t)}function Fn(n,t){var r=n-Qr,i=t-Vr,e=zr(r*r+i*i);si+=e*(Qr+n)/2,gi+=e*(Vr+t)/2,vi+=e,e=Vr*n-Qr*t,hi+=e*(Qr+n),di+=e*(Vr+t),Ei+=3*e,Cn(Qr=n,Vr=t)}function In(n){function t(t,r){n.moveTo(t+u,r),n.arc(t,r,u,0,Sr)}function r(t,r){n.moveTo(t,r),a.point=i}function i(t,r){n.lineTo(t,r)}function e(){a.point=t}function o(){n.closePath()}var u=4.5,a={point:t,lineStart:function(){a.point=r},lineEnd:e,polygonStart:function(){a.lineEnd=o},polygonEnd:function(){a.lineEnd=e,a.point=t},pointRadius:function(n){return u=n,a},result:c};return a}function _n(){function n(n,t){a.push("M",n,",",t,u)}function t(n,t){a.push("M",n,",",t),c.point=r}function r(n,t){a.push("L",n,",",t)}function i(){c.point=t}function e(){c.point=n}function o(){a.push("Z")}var u=Bn(4.5),a=[],c={point:n,lineStart:i,lineEnd:e,polygonStart:function(){c.lineEnd=o},polygonEnd:function(){c.lineEnd=e,c.point=n},pointRadius:function(n){return u=Bn(n),c},result:function(){if(a.length){var n=a.join("");return a=[],n}}};return c}function Bn(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Dn(){function n(n){return n&&("function"==typeof o&&e.pointRadius(+o.apply(this,arguments)),s(n,r(e))),e.result()}var t,r,i,e,o=4.5;return n.area=function(n){return s(n,r(ii)),ii.result()},n.bounds=function(n){return s(n,r(ci)),ci.result()},n.centroid=function(n){return s(n,r(Si)),Si.result()},n.projection=function(i){return arguments.length?(r=null==(t=i)?Nn:i.stream,n):t},n.context=function(t){return arguments.length?(e=null==(i=t)?new _n:new In(t),"function"!=typeof o&&e.pointRadius(o),n):i},n.pointRadius=function(t){return arguments.length?(o="function"==typeof t?t:(e.pointRadius(+t),+t),n):o},n.projection(null).context(null)}function Un(n,t){for(var r=t[0],i=t[1],e=[Cr(r),-wr(r),0],o=0,a=0,c=0,l=n.length;l>c;++c)if(p=(f=n[c]).length)for(var f,p,s=f[p-1],g=s[0],v=s[1]/2+Er,h=Cr(v),d=wr(v),E=0;p>E;++E,g=m,h=N,d=R,s=S){var S=f[E],m=S[0],x=S[1]/2+Er,N=Cr(x),R=wr(x),A=m-g,j=A>=0?1:-1,P=j*A,C=P>hr,q=h*N;if(yi.add(Nr(q*j*Cr(P),d*R+q*wr(P))),o+=C?A+j*Sr:A,C^g>=r^m>=r){var z=M(y(s),y(S));w(z);var b=M(e,z);w(b);var L=(C^A>=0?-1:1)*u(b[2]);(i>L||i===L&&(z[0]||z[1]))&&(a+=C^A>=0?1:-1)}}var O=(-gr>o||gr>o&&-gr>yi)^1&a;return yi.reset(),O}function Zn(n,r,i,e){return function(o,u){function a(t,r){var i=o(t,r);n(t=i[0],r=i[1])&&u.point(t,r)}function c(n,t){var r=o(n,t);E.point(r[0],r[1])}function l(){x.point=c,E.lineStart()}function f(){x.point=a,E.lineEnd()}function p(n,t){d.push([n,t]);var r=o(n,t);m.point(r[0],r[1])}function s(){m.lineStart(),d=[]}function g(){p(d[0][0],d[0][1]),m.lineEnd();var n,t,r,i,e=m.clean(),o=y.result(),a=o.length;if(d.pop(),v.push(d),d=null,a)if(1&e){if(r=o[0],(t=r.length-1)>0){for(M||(u.polygonStart(),M=!0),u.lineStart(),n=0;t>n;++n)u.point((i=r[n])[0],i[1]);u.lineEnd()}}else a>1&&2&e&&o.push(o.pop().concat(o.shift())),h.push(o.filter(kn))}var v,h,d,E=r(u),S=o.invert(e[0],e[1]),y=on(),m=r(y),M=!1,x={point:a,lineStart:l,lineEnd:f,polygonStart:function(){x.point=p,x.lineStart=s,x.lineEnd=g,h=[],v=[]},polygonEnd:function(){x.point=a,x.lineStart=l,x.lineEnd=f,h=t.merge(h);var n=Un(v,S);h.length?(M||(u.polygonStart(),M=!0),ln(h,Hn,n,i,u)):n&&(M||(u.polygonStart(),M=!0),u.lineStart(),i(null,null,1,u),u.lineEnd()),M&&(u.polygonEnd(),M=!1),h=v=null},sphere:function(){u.polygonStart(),u.lineStart(),i(null,null,1,u),u.lineEnd(),u.polygonEnd()}};return x}}function kn(n){return n.length>1}function Hn(n,t){return((n=n.x)[0]<0?n[1]-dr-gr:dr-n[1])-((t=t.x)[0]<0?t[1]-dr-gr:dr-t[1])}function Jn(n){var t,r=NaN,i=NaN,e=NaN;return{lineStart:function(){n.lineStart(),t=1},point:function(o,u){var a=o>0?hr:-hr,c=Mr(o-r);Mr(c-hr)<gr?(n.point(r,i=(i+u)/2>0?dr:-dr),n.point(e,i),n.lineEnd(),n.lineStart(),n.point(a,i),n.point(o,i),t=0):e!==a&&c>=hr&&(Mr(r-e)<gr&&(r-=e*gr),Mr(o-a)<gr&&(o-=a*gr),i=Kn(r,i,o,u),n.point(e,i),n.lineEnd(),n.lineStart(),n.point(a,i),t=0),n.point(r=o,i=u),e=a},lineEnd:function(){n.lineEnd(),r=i=NaN},clean:function(){return 2-t}}}function Kn(n,t,r,i){var e,o,u=Cr(n-r);return Mr(u)>gr?xr((Cr(t)*(o=wr(i))*Cr(r)-Cr(i)*(e=wr(t))*Cr(n))/(e*o*u)):(t+i)/2}function Qn(n,t,r,i){var e;if(null==n)e=r*dr,i.point(-hr,e),i.point(0,e),i.point(hr,e),i.point(hr,0),i.point(hr,-e),i.point(0,-e),i.point(-hr,-e),i.point(-hr,0),i.point(-hr,e);else if(Mr(n[0]-t[0])>gr){var o=n[0]<t[0]?hr:-hr;e=r*o/2,i.point(-o,e),i.point(0,e),i.point(o,e)}else i.point(t[0],t[1])}function Vn(n,t){function r(r,i,e,o){tn(o,n,t,e,r,i)}function i(n,t){return wr(n)*wr(t)>a}function e(n){var t,r,e,a,f;return{lineStart:function(){a=e=!1,f=1},point:function(p,s){var g,v=[p,s],h=i(p,s),d=c?h?0:u(p,s):h?u(p+(0>p?hr:-hr),s):0;if(!t&&(a=e=h)&&n.lineStart(),h!==e&&(g=o(t,v),(an(t,g)||an(v,g))&&(v[0]+=gr,v[1]+=gr,h=i(v[0],v[1]))),h!==e)f=0,h?(n.lineStart(),g=o(v,t),n.point(g[0],g[1])):(g=o(t,v),n.point(g[0],g[1]),n.lineEnd()),t=g;else if(l&&t&&c^h){var E;d&r||!(E=o(v,t,!0))||(f=0,c?(n.lineStart(),n.point(E[0][0],E[0][1]),n.point(E[1][0],E[1][1]),n.lineEnd()):(n.point(E[1][0],E[1][1]),n.lineEnd(),n.lineStart(),n.point(E[0][0],E[0][1])))}!h||t&&an(t,v)||n.point(v[0],v[1]),t=v,e=h,r=d},lineEnd:function(){e&&n.lineEnd(),t=null},clean:function(){return f|(a&&e)<<1}}}function o(n,t,r){var i=y(n),e=y(t),o=[1,0,0],u=M(i,e),c=m(u,u),l=u[0],f=c-l*l;if(!f)return!r&&n;var p=a*c/f,s=-a*l/f,g=M(o,u),v=N(o,p),h=N(u,s);x(v,h);var d=g,E=m(v,d),w=m(d,d),R=E*E-w*(m(v,v)-1);if(!(0>R)){var A=zr(R),j=N(d,(-E-A)/w);if(x(j,v),j=S(j),!r)return j;var P,C=n[0],q=t[0],z=n[1],b=t[1];C>q&&(P=C,C=q,q=P);var L=q-C,O=Mr(L-hr)<gr,T=O||gr>L;if(!O&&z>b&&(P=z,z=b,b=P),T?O?z+b>0^j[1]<(Mr(j[0]-C)<gr?z:b):z<=j[1]&&j[1]<=b:L>hr^(C<=j[0]&&j[0]<=q)){var G=N(d,(-E+A)/w);return x(G,v),[j,S(G)]}}}function u(t,r){var i=c?n:hr-n,e=0;return-i>t?e|=1:t>i&&(e|=2),-i>r?e|=4:r>i&&(e|=8),e}var a=wr(n),c=a>0,l=Mr(a)>gr;return Zn(i,e,r,c?[0,-n]:[-hr,n-hr])}function Wn(n){return{stream:Xn(n)}}function Xn(n){function t(){}var r=t.prototype=Object.create(Yn.prototype);for(var i in n)r[i]=n[i];return function(n){var r=new t;return r.stream=n,r}}function Yn(){}function $n(n,t){return+t?tt(n,t):nt(n)}function nt(n){return Xn({point:function(t,r){t=n(t,r),this.stream.point(t[0],t[1])}})}function tt(n,t){function r(i,e,o,a,c,l,f,p,s,g,v,h,d,E){var S=f-i,y=p-e,m=S*S+y*y;if(m>4*t&&d--){var M=a+g,x=c+v,N=l+h,w=zr(M*M+x*x+N*N),R=u(N/=w),A=Mr(Mr(N)-1)<gr||Mr(o-s)<gr?(o+s)/2:Nr(x,M),j=n(A,R),P=j[0],C=j[1],q=P-i,z=C-e,b=y*q-S*z;(b*b/m>t||Mr((S*q+y*z)/m-.5)>.3||xi>a*g+c*v+l*h)&&(r(i,e,o,a,c,l,P,C,A,M/=w,x/=w,N,d,E),E.point(P,C),r(P,C,A,M,x,N,f,p,s,g,v,h,d,E))}}return function(t){function i(r,i){r=n(r,i),t.point(r[0],r[1])}function e(){E=NaN,N.point=o,t.lineStart()}function o(i,e){var o=y([i,e]),u=n(i,e);r(E,S,d,m,M,x,E=u[0],S=u[1],d=i,m=o[0],M=o[1],x=o[2],Mi,t),t.point(E,S)}function u(){N.point=i,t.lineEnd()}function a(){e(),N.point=c,N.lineEnd=l}function c(n,t){o(f=n,t),p=E,s=S,g=m,v=M,h=x,N.point=o}function l(){r(E,S,d,m,M,x,p,s,f,g,v,h,Mi,t),N.lineEnd=u,u()}var f,p,s,g,v,h,d,E,S,m,M,x,N={point:i,lineStart:e,lineEnd:u,polygonStart:function(){t.polygonStart(),N.lineStart=a},polygonEnd:function(){t.polygonEnd(),N.lineStart=e}};return N}}function rt(n){return it(function(){return n})()}function it(n){function t(n){return n=f(n[0]*mr,n[1]*mr),[n[0]*d+a,c-n[1]*d]}function r(n){return n=f.invert((n[0]-a)/d,(c-n[1])/d),n&&[n[0]*yr,n[1]*yr]}function i(n,t){return n=u(n,t),[n[0]*d+a,c-n[1]*d]}function e(){f=Q(l=W(M,x,N),u);var n=u(y,m);return a=E-n[0]*d,c=S+n[1]*d,o()}function o(){return v=h=null,t}var u,a,c,l,f,p,s,g,v,h,d=150,E=480,S=250,y=0,m=0,M=0,x=0,N=0,w=null,R=mi,A=null,j=Nn,P=.5,C=$n(i,P);return t.stream=function(n){return v&&h===n?v:v=Ni(R(l,C(j(h=n))))},t.clipAngle=function(n){return arguments.length?(R=+n?Vn(w=n*mr,6*mr):(w=null,mi),o()):w*yr},t.clipExtent=function(n){return arguments.length?(j=null==n?(A=p=s=g=null,Nn):pn(A=+n[0][0],p=+n[0][1],s=+n[1][0],g=+n[1][1]),o()):null==A?null:[[A,p],[s,g]]},t.scale=function(n){return arguments.length?(d=+n,e()):d},t.translate=function(n){return arguments.length?(E=+n[0],S=+n[1],e()):[E,S]},t.center=function(n){return arguments.length?(y=n[0]%360*mr,m=n[1]%360*mr,e()):[y*yr,m*yr]},t.rotate=function(n){return arguments.length?(M=n[0]%360*mr,x=n[1]%360*mr,N=n.length>2?n[2]%360*mr:0,e()):[M*yr,x*yr,N*yr]},t.precision=function(n){return arguments.length?(C=$n(i,P=n*n),o()):zr(P)},function(){return u=n.apply(this,arguments),t.invert=u.invert&&r,e()}}function et(n){var t=0,r=hr/3,i=it(n),e=i(t,r);return e.parallels=function(n){return arguments.length?i(t=n[0]*mr,r=n[1]*mr):[t*yr,r*yr]},e}function ot(n,t){function r(n,t){var r=zr(o-2*e*Cr(t))/e;return[r*Cr(n*=e),a-r*wr(n)]}var i=Cr(n),e=(i+Cr(t))/2,o=1+i*(2*e-i),a=zr(o)/e;return r.invert=function(n,t){var r=a-t;return[Nr(n,r)/e,u((o-(n*n+r*r)*e*e)/(2*e))]},r}function ut(){return et(ot).scale(151).translate([480,347])}function at(){return ut().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function ct(n){var t=n.length;return{point:function(r,i){for(var e=-1;++e<t;)n[e].point(r,i)},sphere:function(){for(var r=-1;++r<t;)n[r].sphere()},lineStart:function(){for(var r=-1;++r<t;)n[r].lineStart()},lineEnd:function(){for(var r=-1;++r<t;)n[r].lineEnd()},polygonStart:function(){for(var r=-1;++r<t;)n[r].polygonStart()},polygonEnd:function(){for(var r=-1;++r<t;)n[r].polygonEnd()}}}function lt(){function n(n){var t=n[0],r=n[1];return u=null,i.point(t,r),u||(e.point(t,r),u)||(o.point(t,r),u)}var t,r,i,e,o,u,a=at(),c=ut().rotate([154,0]).center([-2,58.5]).parallels([55,65]),l=ut().rotate([157,0]).center([-3,19.9]).parallels([8,18]),f={point:function(n,t){u=[n,t]}};return n.invert=function(n){var t=a.scale(),r=a.translate(),i=(n[0]-r[0])/t,e=(n[1]-r[1])/t;return(e>=.12&&.234>e&&i>=-.425&&-.214>i?c:e>=.166&&.234>e&&i>=-.214&&-.115>i?l:a).invert(n)},n.stream=function(n){return t&&r===n?t:t=ct([a.stream(r=n),c.stream(n),l.stream(n)])},n.precision=function(t){return arguments.length?(a.precision(t),c.precision(t),l.precision(t),n):a.precision()},n.scale=function(t){return arguments.length?(a.scale(t),c.scale(.35*t),l.scale(t),n.translate(a.translate())):a.scale()},n.translate=function(t){if(!arguments.length)return a.translate();var r=a.scale(),u=+t[0],p=+t[1];return i=a.translate(t).clipExtent([[u-.455*r,p-.238*r],[u+.455*r,p+.238*r]]).stream(f),e=c.translate([u-.307*r,p+.201*r]).clipExtent([[u-.425*r+gr,p+.12*r+gr],[u-.214*r-gr,p+.234*r-gr]]).stream(f),o=l.translate([u-.205*r,p+.212*r]).clipExtent([[u-.214*r+gr,p+.166*r+gr],[u-.115*r-gr,p+.234*r-gr]]).stream(f),n},n.scale(1070)}function ft(n){return function(t,r){var i=wr(t),e=wr(r),o=n(i*e);return[o*e*Cr(t),o*Cr(r)]}}function pt(n){return function(t,r){var i=zr(t*t+r*r),e=n(i),o=Cr(e),a=wr(e);return[Nr(t*o,i*a),u(i&&r*o/i)]}}function st(){return rt(wi).scale(120).clipAngle(179.999)}function gt(){return rt(Ri).scale(480/Sr).clipAngle(179.999)}function vt(n,t){return[n,jr(br((dr+t)/2))]}function ht(){return dt(vt)}function dt(n){var t,r=rt(n),i=r.scale,e=r.translate,o=r.clipExtent;return r.scale=function(n){return arguments.length?(i(n),t&&r.clipExtent(null),r):i()},r.translate=function(n){return arguments.length?(e(n),t&&r.clipExtent(null),r):e()},r.clipExtent=function(n){if(!arguments.length)return t?null:o();if(t=null==n){var u=hr*i(),a=e();n=[[a[0]-u,a[1]-u],[a[0]+u,a[1]+u]]}return o(n),r},r.clipExtent(null).scale(961/Sr)}function Et(n){return br((dr+n)/2)}function St(n,t){function r(n,t){o>0?-dr+gr>t&&(t=-dr+gr):t>dr-gr&&(t=dr-gr);var r=o/Pr(Et(t),e);return[r*Cr(e*n),o-r*wr(e*n)]}var i=wr(n),e=n===t?Cr(n):jr(i/wr(t))/jr(Et(t)/Et(n)),o=i*Pr(Et(n),e)/e;return e?(r.invert=function(n,t){var r=o-t,i=qr(e)*zr(n*n+r*r);return[Nr(n,r)/e,2*xr(Pr(o/i,1/e))-dr]},r):vt}function yt(){return et(St)}function mt(n,t){return[n,t]}function Mt(){return rt(mt).scale(480/hr)}function xt(n,t){function r(n,t){var r=o-t,i=e*n;return[r*Cr(i),o-r*wr(i)]}var i=wr(n),e=n===t?Cr(n):(i-wr(t))/(t-n),o=i/e+n;return Mr(e)<gr?mt:(r.invert=function(n,t){var r=o-t;return[Nr(n,r)/e,o-qr(e)*zr(n*n+r*r)]},r)}function Nt(){return et(xt).scale(128).translate([480,280])}function wt(n,t){var r=wr(t),i=wr(n)*r;return[r*Cr(n)/i,Cr(t)/i]}function Rt(){return rt(wt).scale(139).clipAngle(60)}function At(n,t){return[wr(t)*Cr(n),Cr(t)]}function jt(){return rt(At).scale(240).clipAngle(90+gr)}function Pt(n,t){var r=wr(t),i=1+wr(n)*r;return[r*Cr(n)/i,Cr(t)/i]}function Ct(){return rt(Pt).scale(240).clipAngle(142)}function qt(n,t){return[jr(br((dr+t)/2)),-n]}function zt(){var n=dt(qt),t=n.center,r=n.rotate;return n.center=function(n){return arguments.length?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return arguments.length?r([n[0],n[1],n.length>2?n[2]+90:90]):(n=r(),[n[0],n[1],n[2]-90])},r([0,0,90])}i.prototype={constructor:i,reset:function(){this.s=this.t=0},add:function(n){e(sr,n,this.t),e(this,sr.s,this.s),this.s?this.t+=sr.t:this.s=sr.t},valueOf:function(){return this.s}};var bt,Lt,Ot,Tt,Gt,Ft,It,_t,Bt,Dt,Ut,Zt,kt,Ht,Jt,Kt,Qt,Vt,Wt,Xt,Yt,$t,nr,tr,rr,ir,er,or,ur,ar,cr,lr,fr,pr,sr=new i,gr=1e-6,vr=1e-12,hr=Math.PI,dr=hr/2,Er=hr/4,Sr=2*hr,yr=180/hr,mr=hr/180,Mr=Math.abs,xr=Math.atan,Nr=Math.atan2,wr=Math.cos,Rr=Math.ceil,Ar=Math.exp,jr=Math.log,Pr=Math.pow,Cr=Math.sin,qr=Math.sign||function(n){return n>0?1:0>n?-1:0},zr=Math.sqrt,br=Math.tan,Lr={Feature:function(n,t){l(n.geometry,t)},FeatureCollection:function(n,t){for(var r=n.features,i=-1,e=r.length;++i<e;)l(r[i].geometry,t)}},Or={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var r=n.coordinates,i=-1,e=r.length;++i<e;)n=r[i],t.point(n[0],n[1],n[2])},LineString:function(n,t){f(n.coordinates,t,0)},MultiLineString:function(n,t){for(var r=n.coordinates,i=-1,e=r.length;++i<e;)f(r[i],t,0)},Polygon:function(n,t){p(n.coordinates,t)},MultiPolygon:function(n,t){for(var r=n.coordinates,i=-1,e=r.length;++i<e;)p(r[i],t)},GeometryCollection:function(n,t){for(var r=n.geometries,i=-1,e=r.length;++i<e;)l(r[i],t)}},Tr={point:c,lineStart:c,lineEnd:c,polygonStart:function(){bt.reset(),Tr.lineStart=g,Tr.lineEnd=v},polygonEnd:function(){var n=+bt;Lt.add(0>n?Sr+n:n),this.lineStart=this.lineEnd=this.point=c},sphere:function(){Lt.add(Sr)}},Gr={point:R,lineStart:j,lineEnd:P,polygonStart:function(){Gr.point=C,Gr.lineStart=q,Gr.lineEnd=z,Kt.reset(),Tr.polygonStart()},polygonEnd:function(){Tr.polygonEnd(),Gr.point=R,Gr.lineStart=j,Gr.lineEnd=P,0>bt?(_t=-(Dt=180),Bt=-(Ut=90)):Kt>gr?Ut=90:-gr>Kt&&(Bt=-90),Vt[0]=_t,Vt[1]=Dt}},Fr={sphere:c,point:G,lineStart:I,lineEnd:D,polygonStart:function(){Fr.lineStart=U,Fr.lineEnd=Z},polygonEnd:function(){Fr.lineStart=I,Fr.lineEnd=D}};V.invert=V;var Ir,_r,Br,Dr,Ur,Zr,kr,Hr,Jr,Kr,Qr,Vr,Wr=1e9,Xr=-Wr,Yr={sphere:c,point:c,lineStart:gn,lineEnd:c,polygonStart:c,polygonEnd:c},$r=[null,null],ni={type:"LineString",coordinates:$r},ti=r(),ri=r(),ii={point:c,lineStart:c,lineEnd:c,polygonStart:function(){ii.lineStart=wn,ii.lineEnd=jn},polygonEnd:function(){ii.lineStart=ii.lineEnd=ii.point=c,ti.add(Mr(ri)),ri.reset()},result:function(){var n=ti/2;return ti.reset(),n}},ei=1/0,oi=ei,ui=-ei,ai=ui,ci={point:Pn,lineStart:c,lineEnd:c,polygonStart:c,polygonEnd:c,result:function(){var n=[[ei,oi],[ui,ai]];return ui=ai=-(oi=ei=1/0),n}},li=0,fi=0,pi=0,si=0,gi=0,vi=0,hi=0,di=0,Ei=0,Si={point:Cn,lineStart:qn,lineEnd:Ln,polygonStart:function(){Si.lineStart=On,Si.lineEnd=Tn},polygonEnd:function(){Si.point=Cn,Si.lineStart=qn,Si.lineEnd=Ln},result:function(){var n=Ei?[hi/Ei,di/Ei]:vi?[si/vi,gi/vi]:pi?[li/pi,fi/pi]:[NaN,NaN];return li=fi=pi=si=gi=vi=hi=di=Ei=0,n}},yi=r(),mi=Zn(function(){return!0},Jn,Qn,[-hr,-dr]);Yn.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var Mi=16,xi=wr(30*mr),Ni=Xn({point:function(n,t){this.stream.point(n*mr,t*mr)}}),wi=ft(function(n){return zr(2/(1+n))});wi.invert=pt(function(n){return 2*u(n/2)});var Ri=ft(function(n){return(n=o(n))&&n/Cr(n)});Ri.invert=pt(function(n){return n}),vt.invert=function(n,t){return[n,2*xr(Ar(t))-dr]},mt.invert=mt,wt.invert=pt(xr),At.invert=pt(u),Pt.invert=pt(function(n){return 2+xr(n)}),qt.invert=function(n,t){return[-t,2*xr(Ar(n))-dr]},n.geoArea=E,n.geoBounds=T,n.geoCentroid=J,n.geoCircle=en,n.geoClipExtent=sn,n.geoDistance=Sn,n.geoGraticule=Mn,n.geoInterpolate=xn,n.geoLength=En,n.geoPath=Dn,n.geoAlbers=at,n.geoAlbersUsa=lt,n.geoAzimuthalEqualArea=st,n.geoAzimuthalEqualAreaRaw=wi,n.geoAzimuthalEquidistant=gt,n.geoAzimuthalEquidistantRaw=Ri,n.geoConicConformal=yt,n.geoConicConformalRaw=St,n.geoConicEqualArea=ut,n.geoConicEqualAreaRaw=ot,n.geoConicEquidistant=Nt,n.geoConicEquidistantRaw=xt,n.geoEquirectangular=Mt,n.geoEquirectangularRaw=mt,n.geoGnomonic=Rt,n.geoGnomonicRaw=wt,n.geoProjection=rt,n.geoProjectionMutator=it,n.geoMercator=ht,n.geoMercatorRaw=vt,n.geoOrthographic=jt,n.geoOrthographicRaw=At,n.geoStereographic=Ct,n.geoStereographicRaw=Pt,n.geoTransverseMercator=zt,n.geoTransverseMercatorRaw=qt,n.geoRotation=nn,n.geoStream=s,n.geoTransform=Wn,Object.defineProperty(n,"__esModule",{value:!0})});
