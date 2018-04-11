/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.4.0
 */

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var r=n();for(var a in r)("object"==typeof exports?exports:t)[a]=r[a]}}(this,function(){return function(t){function n(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}var r={};return n.m=t,n.c=r,n.d=function(t,r,a){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:a})},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=4)}([function(t,n,r){"use strict";function a(t){n.ARRAY_TYPE=i=t}function e(t){return t*s}function u(t,n){return Math.abs(t-n)<=o*Math.max(1,Math.abs(t),Math.abs(n))}Object.defineProperty(n,"__esModule",{value:!0}),n.setMatrixArrayType=a,n.toRadian=e,n.equals=u;var o=n.EPSILON=1e-6,i=n.ARRAY_TYPE="undefined"!=typeof Float32Array?Float32Array:Array,s=(n.RANDOM=Math.random,Math.PI/180)},function(t,n,r){"use strict";function a(){var t=new g.ARRAY_TYPE(9);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function e(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],t}function u(t){var n=new g.ARRAY_TYPE(9);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n}function o(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t}function i(t,n,r,a,e,u,o,i,s){var c=new g.ARRAY_TYPE(9);return c[0]=t,c[1]=n,c[2]=r,c[3]=a,c[4]=e,c[5]=u,c[6]=o,c[7]=i,c[8]=s,c}function s(t,n,r,a,e,u,o,i,s,c){return t[0]=n,t[1]=r,t[2]=a,t[3]=e,t[4]=u,t[5]=o,t[6]=i,t[7]=s,t[8]=c,t}function c(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function f(t,n){if(t===n){var r=n[1],a=n[2],e=n[5];t[1]=n[3],t[2]=n[6],t[3]=r,t[5]=n[7],t[6]=a,t[7]=e}else t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8];return t}function M(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=n[4],i=n[5],s=n[6],c=n[7],f=n[8],M=f*o-i*c,h=-f*u+i*s,l=c*u-o*s,v=r*M+a*h+e*l;return v?(v=1/v,t[0]=M*v,t[1]=(-f*a+e*c)*v,t[2]=(i*a-e*o)*v,t[3]=h*v,t[4]=(f*r-e*s)*v,t[5]=(-i*r+e*u)*v,t[6]=l*v,t[7]=(-c*r+a*s)*v,t[8]=(o*r-a*u)*v,t):null}function h(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=n[4],i=n[5],s=n[6],c=n[7],f=n[8];return t[0]=o*f-i*c,t[1]=e*c-a*f,t[2]=a*i-e*o,t[3]=i*s-u*f,t[4]=r*f-e*s,t[5]=e*u-r*i,t[6]=u*c-o*s,t[7]=a*s-r*c,t[8]=r*o-a*u,t}function l(t){var n=t[0],r=t[1],a=t[2],e=t[3],u=t[4],o=t[5],i=t[6],s=t[7],c=t[8];return n*(c*u-o*s)+r*(-c*e+o*i)+a*(s*e-u*i)}function v(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=n[4],s=n[5],c=n[6],f=n[7],M=n[8],h=r[0],l=r[1],v=r[2],d=r[3],b=r[4],m=r[5],p=r[6],P=r[7],E=r[8];return t[0]=h*a+l*o+v*c,t[1]=h*e+l*i+v*f,t[2]=h*u+l*s+v*M,t[3]=d*a+b*o+m*c,t[4]=d*e+b*i+m*f,t[5]=d*u+b*s+m*M,t[6]=p*a+P*o+E*c,t[7]=p*e+P*i+E*f,t[8]=p*u+P*s+E*M,t}function d(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=n[4],s=n[5],c=n[6],f=n[7],M=n[8],h=r[0],l=r[1];return t[0]=a,t[1]=e,t[2]=u,t[3]=o,t[4]=i,t[5]=s,t[6]=h*a+l*o+c,t[7]=h*e+l*i+f,t[8]=h*u+l*s+M,t}function b(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=n[4],s=n[5],c=n[6],f=n[7],M=n[8],h=Math.sin(r),l=Math.cos(r);return t[0]=l*a+h*o,t[1]=l*e+h*i,t[2]=l*u+h*s,t[3]=l*o-h*a,t[4]=l*i-h*e,t[5]=l*s-h*u,t[6]=c,t[7]=f,t[8]=M,t}function m(t,n,r){var a=r[0],e=r[1];return t[0]=a*n[0],t[1]=a*n[1],t[2]=a*n[2],t[3]=e*n[3],t[4]=e*n[4],t[5]=e*n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t}function p(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=n[0],t[7]=n[1],t[8]=1,t}function P(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=a,t[1]=r,t[2]=0,t[3]=-r,t[4]=a,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function E(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=n[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function O(t,n){return t[0]=n[0],t[1]=n[1],t[2]=0,t[3]=n[2],t[4]=n[3],t[5]=0,t[6]=n[4],t[7]=n[5],t[8]=1,t}function x(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=r+r,i=a+a,s=e+e,c=r*o,f=a*o,M=a*i,h=e*o,l=e*i,v=e*s,d=u*o,b=u*i,m=u*s;return t[0]=1-M-v,t[3]=f-m,t[6]=h+b,t[1]=f+m,t[4]=1-c-v,t[7]=l-d,t[2]=h-b,t[5]=l+d,t[8]=1-c-M,t}function A(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=n[4],i=n[5],s=n[6],c=n[7],f=n[8],M=n[9],h=n[10],l=n[11],v=n[12],d=n[13],b=n[14],m=n[15],p=r*i-a*o,P=r*s-e*o,E=r*c-u*o,O=a*s-e*i,x=a*c-u*i,A=e*c-u*s,q=f*d-M*v,y=f*b-h*v,w=f*m-l*v,R=M*b-h*d,L=M*m-l*d,S=h*m-l*b,_=p*S-P*L+E*R+O*w-x*y+A*q;return _?(_=1/_,t[0]=(i*S-s*L+c*R)*_,t[1]=(s*w-o*S-c*y)*_,t[2]=(o*L-i*w+c*q)*_,t[3]=(e*L-a*S-u*R)*_,t[4]=(r*S-e*w+u*y)*_,t[5]=(a*w-r*L-u*q)*_,t[6]=(d*A-b*x+m*O)*_,t[7]=(b*E-v*A-m*P)*_,t[8]=(v*x-d*E+m*p)*_,t):null}function q(t,n,r){return t[0]=2/n,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/r,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t}function y(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"}function w(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2))}function R(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t[4]=n[4]+r[4],t[5]=n[5]+r[5],t[6]=n[6]+r[6],t[7]=n[7]+r[7],t[8]=n[8]+r[8],t}function L(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t[4]=n[4]-r[4],t[5]=n[5]-r[5],t[6]=n[6]-r[6],t[7]=n[7]-r[7],t[8]=n[8]-r[8],t}function S(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=n[7]*r,t[8]=n[8]*r,t}function _(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t[3]=n[3]+r[3]*a,t[4]=n[4]+r[4]*a,t[5]=n[5]+r[5]*a,t[6]=n[6]+r[6]*a,t[7]=n[7]+r[7]*a,t[8]=n[8]+r[8]*a,t}function I(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]}function N(t,n){var r=t[0],a=t[1],e=t[2],u=t[3],o=t[4],i=t[5],s=t[6],c=t[7],f=t[8],M=n[0],h=n[1],l=n[2],v=n[3],d=n[4],b=n[5],m=n[6],p=n[7],P=n[8];return Math.abs(r-M)<=g.EPSILON*Math.max(1,Math.abs(r),Math.abs(M))&&Math.abs(a-h)<=g.EPSILON*Math.max(1,Math.abs(a),Math.abs(h))&&Math.abs(e-l)<=g.EPSILON*Math.max(1,Math.abs(e),Math.abs(l))&&Math.abs(u-v)<=g.EPSILON*Math.max(1,Math.abs(u),Math.abs(v))&&Math.abs(o-d)<=g.EPSILON*Math.max(1,Math.abs(o),Math.abs(d))&&Math.abs(i-b)<=g.EPSILON*Math.max(1,Math.abs(i),Math.abs(b))&&Math.abs(s-m)<=g.EPSILON*Math.max(1,Math.abs(s),Math.abs(m))&&Math.abs(c-p)<=g.EPSILON*Math.max(1,Math.abs(c),Math.abs(p))&&Math.abs(f-P)<=g.EPSILON*Math.max(1,Math.abs(f),Math.abs(P))}Object.defineProperty(n,"__esModule",{value:!0}),n.sub=n.mul=void 0,n.create=a,n.fromMat4=e,n.clone=u,n.copy=o,n.fromValues=i,n.set=s,n.identity=c,n.transpose=f,n.invert=M,n.adjoint=h,n.determinant=l,n.multiply=v,n.translate=d,n.rotate=b,n.scale=m,n.fromTranslation=p,n.fromRotation=P,n.fromScaling=E,n.fromMat2d=O,n.fromQuat=x,n.normalFromMat4=A,n.projection=q,n.str=y,n.frob=w,n.add=R,n.subtract=L,n.multiplyScalar=S,n.multiplyScalarAndAdd=_,n.exactEquals=I,n.equals=N;var Y=r(0),g=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}(Y);n.mul=v,n.sub=L},function(t,n,r){"use strict";function a(){var t=new Z.ARRAY_TYPE(3);return t[0]=0,t[1]=0,t[2]=0,t}function e(t){var n=new Z.ARRAY_TYPE(3);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n}function u(t){var n=t[0],r=t[1],a=t[2];return Math.sqrt(n*n+r*r+a*a)}function o(t,n,r){var a=new Z.ARRAY_TYPE(3);return a[0]=t,a[1]=n,a[2]=r,a}function i(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function s(t,n,r,a){return t[0]=n,t[1]=r,t[2]=a,t}function c(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t}function f(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t}function M(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t[2]=n[2]*r[2],t}function h(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t[2]=n[2]/r[2],t}function l(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t}function v(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t}function d(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t[2]=Math.min(n[2],r[2]),t}function b(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t[2]=Math.max(n[2],r[2]),t}function m(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t}function p(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t}function P(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t}function E(t,n){var r=n[0]-t[0],a=n[1]-t[1],e=n[2]-t[2];return Math.sqrt(r*r+a*a+e*e)}function O(t,n){var r=n[0]-t[0],a=n[1]-t[1],e=n[2]-t[2];return r*r+a*a+e*e}function x(t){var n=t[0],r=t[1],a=t[2];return n*n+r*r+a*a}function A(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t}function q(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t}function y(t,n){var r=n[0],a=n[1],e=n[2],u=r*r+a*a+e*e;return u>0&&(u=1/Math.sqrt(u),t[0]=n[0]*u,t[1]=n[1]*u,t[2]=n[2]*u),t}function w(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function R(t,n,r){var a=n[0],e=n[1],u=n[2],o=r[0],i=r[1],s=r[2];return t[0]=e*s-u*i,t[1]=u*o-a*s,t[2]=a*i-e*o,t}function L(t,n,r,a){var e=n[0],u=n[1],o=n[2];return t[0]=e+a*(r[0]-e),t[1]=u+a*(r[1]-u),t[2]=o+a*(r[2]-o),t}function S(t,n,r,a,e,u){var o=u*u,i=o*(2*u-3)+1,s=o*(u-2)+u,c=o*(u-1),f=o*(3-2*u);return t[0]=n[0]*i+r[0]*s+a[0]*c+e[0]*f,t[1]=n[1]*i+r[1]*s+a[1]*c+e[1]*f,t[2]=n[2]*i+r[2]*s+a[2]*c+e[2]*f,t}function _(t,n,r,a,e,u){var o=1-u,i=o*o,s=u*u,c=i*o,f=3*u*i,M=3*s*o,h=s*u;return t[0]=n[0]*c+r[0]*f+a[0]*M+e[0]*h,t[1]=n[1]*c+r[1]*f+a[1]*M+e[1]*h,t[2]=n[2]*c+r[2]*f+a[2]*M+e[2]*h,t}function I(t,n){n=n||1;var r=2*Z.RANDOM()*Math.PI,a=2*Z.RANDOM()-1,e=Math.sqrt(1-a*a)*n;return t[0]=Math.cos(r)*e,t[1]=Math.sin(r)*e,t[2]=a*n,t}function N(t,n,r){var a=n[0],e=n[1],u=n[2],o=r[3]*a+r[7]*e+r[11]*u+r[15];return o=o||1,t[0]=(r[0]*a+r[4]*e+r[8]*u+r[12])/o,t[1]=(r[1]*a+r[5]*e+r[9]*u+r[13])/o,t[2]=(r[2]*a+r[6]*e+r[10]*u+r[14])/o,t}function Y(t,n,r){var a=n[0],e=n[1],u=n[2];return t[0]=a*r[0]+e*r[3]+u*r[6],t[1]=a*r[1]+e*r[4]+u*r[7],t[2]=a*r[2]+e*r[5]+u*r[8],t}function g(t,n,r){var a=n[0],e=n[1],u=n[2],o=r[0],i=r[1],s=r[2],c=r[3],f=c*a+i*u-s*e,M=c*e+s*a-o*u,h=c*u+o*e-i*a,l=-o*a-i*e-s*u;return t[0]=f*c+l*-o+M*-s-h*-i,t[1]=M*c+l*-i+h*-o-f*-s,t[2]=h*c+l*-s+f*-i-M*-o,t}function T(t,n,r,a){var e=[],u=[];return e[0]=n[0]-r[0],e[1]=n[1]-r[1],e[2]=n[2]-r[2],u[0]=e[0],u[1]=e[1]*Math.cos(a)-e[2]*Math.sin(a),u[2]=e[1]*Math.sin(a)+e[2]*Math.cos(a),t[0]=u[0]+r[0],t[1]=u[1]+r[1],t[2]=u[2]+r[2],t}function j(t,n,r,a){var e=[],u=[];return e[0]=n[0]-r[0],e[1]=n[1]-r[1],e[2]=n[2]-r[2],u[0]=e[2]*Math.sin(a)+e[0]*Math.cos(a),u[1]=e[1],u[2]=e[2]*Math.cos(a)-e[0]*Math.sin(a),t[0]=u[0]+r[0],t[1]=u[1]+r[1],t[2]=u[2]+r[2],t}function D(t,n,r,a){var e=[],u=[];return e[0]=n[0]-r[0],e[1]=n[1]-r[1],e[2]=n[2]-r[2],u[0]=e[0]*Math.cos(a)-e[1]*Math.sin(a),u[1]=e[0]*Math.sin(a)+e[1]*Math.cos(a),u[2]=e[2],t[0]=u[0]+r[0],t[1]=u[1]+r[1],t[2]=u[2]+r[2],t}function V(t,n){var r=o(t[0],t[1],t[2]),a=o(n[0],n[1],n[2]);y(r,r),y(a,a);var e=w(r,a);return e>1?0:e<-1?Math.PI:Math.acos(e)}function z(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function F(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function Q(t,n){var r=t[0],a=t[1],e=t[2],u=n[0],o=n[1],i=n[2];return Math.abs(r-u)<=Z.EPSILON*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(a-o)<=Z.EPSILON*Math.max(1,Math.abs(a),Math.abs(o))&&Math.abs(e-i)<=Z.EPSILON*Math.max(1,Math.abs(e),Math.abs(i))}Object.defineProperty(n,"__esModule",{value:!0}),n.forEach=n.sqrLen=n.len=n.sqrDist=n.dist=n.div=n.mul=n.sub=void 0,n.create=a,n.clone=e,n.length=u,n.fromValues=o,n.copy=i,n.set=s,n.add=c,n.subtract=f,n.multiply=M,n.divide=h,n.ceil=l,n.floor=v,n.min=d,n.max=b,n.round=m,n.scale=p,n.scaleAndAdd=P,n.distance=E,n.squaredDistance=O,n.squaredLength=x,n.negate=A,n.inverse=q,n.normalize=y,n.dot=w,n.cross=R,n.lerp=L,n.hermite=S,n.bezier=_,n.random=I,n.transformMat4=N,n.transformMat3=Y,n.transformQuat=g,n.rotateX=T,n.rotateY=j,n.rotateZ=D,n.angle=V,n.str=z,n.exactEquals=F,n.equals=Q;var X=r(0),Z=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}(X);n.sub=f,n.mul=M,n.div=h,n.dist=E,n.sqrDist=O,n.len=u,n.sqrLen=x,n.forEach=function(){var t=a();return function(n,r,a,e,u,o){var i=void 0,s=void 0;for(r||(r=3),a||(a=0),s=e?Math.min(e*r+a,n.length):n.length,i=a;i<s;i+=r)t[0]=n[i],t[1]=n[i+1],t[2]=n[i+2],u(t,t,o),n[i]=t[0],n[i+1]=t[1],n[i+2]=t[2];return n}}()},function(t,n,r){"use strict";function a(){var t=new T.ARRAY_TYPE(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t}function e(t){var n=new T.ARRAY_TYPE(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function u(t,n,r,a){var e=new T.ARRAY_TYPE(4);return e[0]=t,e[1]=n,e[2]=r,e[3]=a,e}function o(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function i(t,n,r,a,e){return t[0]=n,t[1]=r,t[2]=a,t[3]=e,t}function s(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t}function c(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t}function f(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t[2]=n[2]*r[2],t[3]=n[3]*r[3],t}function M(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t[2]=n[2]/r[2],t[3]=n[3]/r[3],t}function h(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t}function l(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t}function v(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t[2]=Math.min(n[2],r[2]),t[3]=Math.min(n[3],r[3]),t}function d(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t[2]=Math.max(n[2],r[2]),t[3]=Math.max(n[3],r[3]),t}function b(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t}function m(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t}function p(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t[3]=n[3]+r[3]*a,t}function P(t,n){var r=n[0]-t[0],a=n[1]-t[1],e=n[2]-t[2],u=n[3]-t[3];return Math.sqrt(r*r+a*a+e*e+u*u)}function E(t,n){var r=n[0]-t[0],a=n[1]-t[1],e=n[2]-t[2],u=n[3]-t[3];return r*r+a*a+e*e+u*u}function O(t){var n=t[0],r=t[1],a=t[2],e=t[3];return Math.sqrt(n*n+r*r+a*a+e*e)}function x(t){var n=t[0],r=t[1],a=t[2],e=t[3];return n*n+r*r+a*a+e*e}function A(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t}function q(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t}function y(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=r*r+a*a+e*e+u*u;return o>0&&(o=1/Math.sqrt(o),t[0]=r*o,t[1]=a*o,t[2]=e*o,t[3]=u*o),t}function w(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function R(t,n,r,a){var e=n[0],u=n[1],o=n[2],i=n[3];return t[0]=e+a*(r[0]-e),t[1]=u+a*(r[1]-u),t[2]=o+a*(r[2]-o),t[3]=i+a*(r[3]-i),t}function L(t,n){return n=n||1,t[0]=T.RANDOM(),t[1]=T.RANDOM(),t[2]=T.RANDOM(),t[3]=T.RANDOM(),y(t,t),m(t,t,n),t}function S(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3];return t[0]=r[0]*a+r[4]*e+r[8]*u+r[12]*o,t[1]=r[1]*a+r[5]*e+r[9]*u+r[13]*o,t[2]=r[2]*a+r[6]*e+r[10]*u+r[14]*o,t[3]=r[3]*a+r[7]*e+r[11]*u+r[15]*o,t}function _(t,n,r){var a=n[0],e=n[1],u=n[2],o=r[0],i=r[1],s=r[2],c=r[3],f=c*a+i*u-s*e,M=c*e+s*a-o*u,h=c*u+o*e-i*a,l=-o*a-i*e-s*u;return t[0]=f*c+l*-o+M*-s-h*-i,t[1]=M*c+l*-i+h*-o-f*-s,t[2]=h*c+l*-s+f*-i-M*-o,t[3]=n[3],t}function I(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function N(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function Y(t,n){var r=t[0],a=t[1],e=t[2],u=t[3],o=n[0],i=n[1],s=n[2],c=n[3];return Math.abs(r-o)<=T.EPSILON*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(a-i)<=T.EPSILON*Math.max(1,Math.abs(a),Math.abs(i))&&Math.abs(e-s)<=T.EPSILON*Math.max(1,Math.abs(e),Math.abs(s))&&Math.abs(u-c)<=T.EPSILON*Math.max(1,Math.abs(u),Math.abs(c))}Object.defineProperty(n,"__esModule",{value:!0}),n.forEach=n.sqrLen=n.len=n.sqrDist=n.dist=n.div=n.mul=n.sub=void 0,n.create=a,n.clone=e,n.fromValues=u,n.copy=o,n.set=i,n.add=s,n.subtract=c,n.multiply=f,n.divide=M,n.ceil=h,n.floor=l,n.min=v,n.max=d,n.round=b,n.scale=m,n.scaleAndAdd=p,n.distance=P,n.squaredDistance=E,n.length=O,n.squaredLength=x,n.negate=A,n.inverse=q,n.normalize=y,n.dot=w,n.lerp=R,n.random=L,n.transformMat4=S,n.transformQuat=_,n.str=I,n.exactEquals=N,n.equals=Y;var g=r(0),T=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}(g);n.sub=c,n.mul=f,n.div=M,n.dist=P,n.sqrDist=E,n.len=O,n.sqrLen=x,n.forEach=function(){var t=a();return function(n,r,a,e,u,o){var i=void 0,s=void 0;for(r||(r=4),a||(a=0),s=e?Math.min(e*r+a,n.length):n.length,i=a;i<s;i+=r)t[0]=n[i],t[1]=n[i+1],t[2]=n[i+2],t[3]=n[i+3],u(t,t,o),n[i]=t[0],n[i+1]=t[1],n[i+2]=t[2],n[i+3]=t[3];return n}}()},function(t,n,r){"use strict";function a(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}Object.defineProperty(n,"__esModule",{value:!0}),n.vec4=n.vec3=n.vec2=n.quat=n.mat4=n.mat3=n.mat2d=n.mat2=n.glMatrix=void 0;var e=r(0),u=a(e),o=r(5),i=a(o),s=r(6),c=a(s),f=r(1),M=a(f),h=r(7),l=a(h),v=r(8),d=a(v),b=r(9),m=a(b),p=r(2),P=a(p),E=r(3),O=a(E);n.glMatrix=u,n.mat2=i,n.mat2d=c,n.mat3=M,n.mat4=l,n.quat=d,n.vec2=m,n.vec3=P,n.vec4=O},function(t,n,r){"use strict";function a(){var t=new L.ARRAY_TYPE(4);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t}function e(t){var n=new L.ARRAY_TYPE(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function u(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function o(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t}function i(t,n,r,a){var e=new L.ARRAY_TYPE(4);return e[0]=t,e[1]=n,e[2]=r,e[3]=a,e}function s(t,n,r,a,e){return t[0]=n,t[1]=r,t[2]=a,t[3]=e,t}function c(t,n){if(t===n){var r=n[1];t[1]=n[2],t[2]=r}else t[0]=n[0],t[1]=n[2],t[2]=n[1],t[3]=n[3];return t}function f(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=r*u-e*a;return o?(o=1/o,t[0]=u*o,t[1]=-a*o,t[2]=-e*o,t[3]=r*o,t):null}function M(t,n){var r=n[0];return t[0]=n[3],t[1]=-n[1],t[2]=-n[2],t[3]=r,t}function h(t){return t[0]*t[3]-t[2]*t[1]}function l(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=r[0],s=r[1],c=r[2],f=r[3];return t[0]=a*i+u*s,t[1]=e*i+o*s,t[2]=a*c+u*f,t[3]=e*c+o*f,t}function v(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=Math.sin(r),s=Math.cos(r);return t[0]=a*s+u*i,t[1]=e*s+o*i,t[2]=a*-i+u*s,t[3]=e*-i+o*s,t}function d(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=r[0],s=r[1];return t[0]=a*i,t[1]=e*i,t[2]=u*s,t[3]=o*s,t}function b(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=a,t[1]=r,t[2]=-r,t[3]=a,t}function m(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t}function p(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function P(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2))}function E(t,n,r,a){return t[2]=a[2]/a[0],r[0]=a[0],r[1]=a[1],r[3]=a[3]-t[2]*r[1],[t,n,r]}function O(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t}function x(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t}function A(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function q(t,n){var r=t[0],a=t[1],e=t[2],u=t[3],o=n[0],i=n[1],s=n[2],c=n[3];return Math.abs(r-o)<=L.EPSILON*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(a-i)<=L.EPSILON*Math.max(1,Math.abs(a),Math.abs(i))&&Math.abs(e-s)<=L.EPSILON*Math.max(1,Math.abs(e),Math.abs(s))&&Math.abs(u-c)<=L.EPSILON*Math.max(1,Math.abs(u),Math.abs(c))}function y(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t}function w(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t[3]=n[3]+r[3]*a,t}Object.defineProperty(n,"__esModule",{value:!0}),n.sub=n.mul=void 0,n.create=a,n.clone=e,n.copy=u,n.identity=o,n.fromValues=i,n.set=s,n.transpose=c,n.invert=f,n.adjoint=M,n.determinant=h,n.multiply=l,n.rotate=v,n.scale=d,n.fromRotation=b,n.fromScaling=m,n.str=p,n.frob=P,n.LDU=E,n.add=O,n.subtract=x,n.exactEquals=A,n.equals=q,n.multiplyScalar=y,n.multiplyScalarAndAdd=w;var R=r(0),L=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}(R);n.mul=l,n.sub=x},function(t,n,r){"use strict";function a(){var t=new R.ARRAY_TYPE(6);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function e(t){var n=new R.ARRAY_TYPE(6);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}function u(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t}function o(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function i(t,n,r,a,e,u){var o=new R.ARRAY_TYPE(6);return o[0]=t,o[1]=n,o[2]=r,o[3]=a,o[4]=e,o[5]=u,o}function s(t,n,r,a,e,u,o){return t[0]=n,t[1]=r,t[2]=a,t[3]=e,t[4]=u,t[5]=o,t}function c(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=n[4],i=n[5],s=r*u-a*e;return s?(s=1/s,t[0]=u*s,t[1]=-a*s,t[2]=-e*s,t[3]=r*s,t[4]=(e*i-u*o)*s,t[5]=(a*o-r*i)*s,t):null}function f(t){return t[0]*t[3]-t[1]*t[2]}function M(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=n[4],s=n[5],c=r[0],f=r[1],M=r[2],h=r[3],l=r[4],v=r[5];return t[0]=a*c+u*f,t[1]=e*c+o*f,t[2]=a*M+u*h,t[3]=e*M+o*h,t[4]=a*l+u*v+i,t[5]=e*l+o*v+s,t}function h(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=n[4],s=n[5],c=Math.sin(r),f=Math.cos(r);return t[0]=a*f+u*c,t[1]=e*f+o*c,t[2]=a*-c+u*f,t[3]=e*-c+o*f,t[4]=i,t[5]=s,t}function l(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=n[4],s=n[5],c=r[0],f=r[1];return t[0]=a*c,t[1]=e*c,t[2]=u*f,t[3]=o*f,t[4]=i,t[5]=s,t}function v(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=n[4],s=n[5],c=r[0],f=r[1];return t[0]=a,t[1]=e,t[2]=u,t[3]=o,t[4]=a*c+u*f+i,t[5]=e*c+o*f+s,t}function d(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=a,t[1]=r,t[2]=-r,t[3]=a,t[4]=0,t[5]=0,t}function b(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t[4]=0,t[5]=0,t}function m(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=n[0],t[5]=n[1],t}function p(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"}function P(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+1)}function E(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t[4]=n[4]+r[4],t[5]=n[5]+r[5],t}function O(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t[4]=n[4]-r[4],t[5]=n[5]-r[5],t}function x(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*r,t[5]=n[5]*r,t}function A(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t[3]=n[3]+r[3]*a,t[4]=n[4]+r[4]*a,t[5]=n[5]+r[5]*a,t}function q(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]}function y(t,n){var r=t[0],a=t[1],e=t[2],u=t[3],o=t[4],i=t[5],s=n[0],c=n[1],f=n[2],M=n[3],h=n[4],l=n[5];return Math.abs(r-s)<=R.EPSILON*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(a-c)<=R.EPSILON*Math.max(1,Math.abs(a),Math.abs(c))&&Math.abs(e-f)<=R.EPSILON*Math.max(1,Math.abs(e),Math.abs(f))&&Math.abs(u-M)<=R.EPSILON*Math.max(1,Math.abs(u),Math.abs(M))&&Math.abs(o-h)<=R.EPSILON*Math.max(1,Math.abs(o),Math.abs(h))&&Math.abs(i-l)<=R.EPSILON*Math.max(1,Math.abs(i),Math.abs(l))}Object.defineProperty(n,"__esModule",{value:!0}),n.sub=n.mul=void 0,n.create=a,n.clone=e,n.copy=u,n.identity=o,n.fromValues=i,n.set=s,n.invert=c,n.determinant=f,n.multiply=M,n.rotate=h,n.scale=l,n.translate=v,n.fromRotation=d,n.fromScaling=b,n.fromTranslation=m,n.str=p,n.frob=P,n.add=E,n.subtract=O,n.multiplyScalar=x,n.multiplyScalarAndAdd=A,n.exactEquals=q,n.equals=y;var w=r(0),R=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}(w);n.mul=M,n.sub=O},function(t,n,r){"use strict";function a(){var t=new C.ARRAY_TYPE(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function e(t){var n=new C.ARRAY_TYPE(16);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function u(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function o(t,n,r,a,e,u,o,i,s,c,f,M,h,l,v,d){var b=new C.ARRAY_TYPE(16);return b[0]=t,b[1]=n,b[2]=r,b[3]=a,b[4]=e,b[5]=u,b[6]=o,b[7]=i,b[8]=s,b[9]=c,b[10]=f,b[11]=M,b[12]=h,b[13]=l,b[14]=v,b[15]=d,b}function i(t,n,r,a,e,u,o,i,s,c,f,M,h,l,v,d,b){return t[0]=n,t[1]=r,t[2]=a,t[3]=e,t[4]=u,t[5]=o,t[6]=i,t[7]=s,t[8]=c,t[9]=f,t[10]=M,t[11]=h,t[12]=l,t[13]=v,t[14]=d,t[15]=b,t}function s(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function c(t,n){if(t===n){var r=n[1],a=n[2],e=n[3],u=n[6],o=n[7],i=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=r,t[6]=n[9],t[7]=n[13],t[8]=a,t[9]=u,t[11]=n[14],t[12]=e,t[13]=o,t[14]=i}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15];return t}function f(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=n[4],i=n[5],s=n[6],c=n[7],f=n[8],M=n[9],h=n[10],l=n[11],v=n[12],d=n[13],b=n[14],m=n[15],p=r*i-a*o,P=r*s-e*o,E=r*c-u*o,O=a*s-e*i,x=a*c-u*i,A=e*c-u*s,q=f*d-M*v,y=f*b-h*v,w=f*m-l*v,R=M*b-h*d,L=M*m-l*d,S=h*m-l*b,_=p*S-P*L+E*R+O*w-x*y+A*q;return _?(_=1/_,t[0]=(i*S-s*L+c*R)*_,t[1]=(e*L-a*S-u*R)*_,t[2]=(d*A-b*x+m*O)*_,t[3]=(h*x-M*A-l*O)*_,t[4]=(s*w-o*S-c*y)*_,t[5]=(r*S-e*w+u*y)*_,t[6]=(b*E-v*A-m*P)*_,t[7]=(f*A-h*E+l*P)*_,t[8]=(o*L-i*w+c*q)*_,t[9]=(a*w-r*L-u*q)*_,t[10]=(v*x-d*E+m*p)*_,t[11]=(M*E-f*x-l*p)*_,t[12]=(i*y-o*R-s*q)*_,t[13]=(r*R-a*y+e*q)*_,t[14]=(d*P-v*O-b*p)*_,t[15]=(f*O-M*P+h*p)*_,t):null}function M(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=n[4],i=n[5],s=n[6],c=n[7],f=n[8],M=n[9],h=n[10],l=n[11],v=n[12],d=n[13],b=n[14],m=n[15];return t[0]=i*(h*m-l*b)-M*(s*m-c*b)+d*(s*l-c*h),t[1]=-(a*(h*m-l*b)-M*(e*m-u*b)+d*(e*l-u*h)),t[2]=a*(s*m-c*b)-i*(e*m-u*b)+d*(e*c-u*s),t[3]=-(a*(s*l-c*h)-i*(e*l-u*h)+M*(e*c-u*s)),t[4]=-(o*(h*m-l*b)-f*(s*m-c*b)+v*(s*l-c*h)),t[5]=r*(h*m-l*b)-f*(e*m-u*b)+v*(e*l-u*h),t[6]=-(r*(s*m-c*b)-o*(e*m-u*b)+v*(e*c-u*s)),t[7]=r*(s*l-c*h)-o*(e*l-u*h)+f*(e*c-u*s),t[8]=o*(M*m-l*d)-f*(i*m-c*d)+v*(i*l-c*M),t[9]=-(r*(M*m-l*d)-f*(a*m-u*d)+v*(a*l-u*M)),t[10]=r*(i*m-c*d)-o*(a*m-u*d)+v*(a*c-u*i),t[11]=-(r*(i*l-c*M)-o*(a*l-u*M)+f*(a*c-u*i)),t[12]=-(o*(M*b-h*d)-f*(i*b-s*d)+v*(i*h-s*M)),t[13]=r*(M*b-h*d)-f*(a*b-e*d)+v*(a*h-e*M),t[14]=-(r*(i*b-s*d)-o*(a*b-e*d)+v*(a*s-e*i)),t[15]=r*(i*h-s*M)-o*(a*h-e*M)+f*(a*s-e*i),t}function h(t){var n=t[0],r=t[1],a=t[2],e=t[3],u=t[4],o=t[5],i=t[6],s=t[7],c=t[8],f=t[9],M=t[10],h=t[11],l=t[12],v=t[13],d=t[14],b=t[15];return(n*o-r*u)*(M*b-h*d)-(n*i-a*u)*(f*b-h*v)+(n*s-e*u)*(f*d-M*v)+(r*i-a*o)*(c*b-h*l)-(r*s-e*o)*(c*d-M*l)+(a*s-e*i)*(c*v-f*l)}function l(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=n[4],s=n[5],c=n[6],f=n[7],M=n[8],h=n[9],l=n[10],v=n[11],d=n[12],b=n[13],m=n[14],p=n[15],P=r[0],E=r[1],O=r[2],x=r[3];return t[0]=P*a+E*i+O*M+x*d,t[1]=P*e+E*s+O*h+x*b,t[2]=P*u+E*c+O*l+x*m,t[3]=P*o+E*f+O*v+x*p,P=r[4],E=r[5],O=r[6],x=r[7],t[4]=P*a+E*i+O*M+x*d,t[5]=P*e+E*s+O*h+x*b,t[6]=P*u+E*c+O*l+x*m,t[7]=P*o+E*f+O*v+x*p,P=r[8],E=r[9],O=r[10],x=r[11],t[8]=P*a+E*i+O*M+x*d,t[9]=P*e+E*s+O*h+x*b,t[10]=P*u+E*c+O*l+x*m,t[11]=P*o+E*f+O*v+x*p,P=r[12],E=r[13],O=r[14],x=r[15],t[12]=P*a+E*i+O*M+x*d,t[13]=P*e+E*s+O*h+x*b,t[14]=P*u+E*c+O*l+x*m,t[15]=P*o+E*f+O*v+x*p,t}function v(t,n,r){var a=r[0],e=r[1],u=r[2],o=void 0,i=void 0,s=void 0,c=void 0,f=void 0,M=void 0,h=void 0,l=void 0,v=void 0,d=void 0,b=void 0,m=void 0;return n===t?(t[12]=n[0]*a+n[4]*e+n[8]*u+n[12],t[13]=n[1]*a+n[5]*e+n[9]*u+n[13],t[14]=n[2]*a+n[6]*e+n[10]*u+n[14],t[15]=n[3]*a+n[7]*e+n[11]*u+n[15]):(o=n[0],i=n[1],s=n[2],c=n[3],f=n[4],M=n[5],h=n[6],l=n[7],v=n[8],d=n[9],b=n[10],m=n[11],t[0]=o,t[1]=i,t[2]=s,t[3]=c,t[4]=f,t[5]=M,t[6]=h,t[7]=l,t[8]=v,t[9]=d,t[10]=b,t[11]=m,t[12]=o*a+f*e+v*u+n[12],t[13]=i*a+M*e+d*u+n[13],t[14]=s*a+h*e+b*u+n[14],t[15]=c*a+l*e+m*u+n[15]),t}function d(t,n,r){var a=r[0],e=r[1],u=r[2];return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*e,t[5]=n[5]*e,t[6]=n[6]*e,t[7]=n[7]*e,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=n[11]*u,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function b(t,n,r,a){var e=a[0],u=a[1],o=a[2],i=Math.sqrt(e*e+u*u+o*o),s=void 0,c=void 0,f=void 0,M=void 0,h=void 0,l=void 0,v=void 0,d=void 0,b=void 0,m=void 0,p=void 0,P=void 0,E=void 0,O=void 0,x=void 0,A=void 0,q=void 0,y=void 0,w=void 0,R=void 0,L=void 0,S=void 0,_=void 0,I=void 0;return Math.abs(i)<C.EPSILON?null:(i=1/i,e*=i,u*=i,o*=i,s=Math.sin(r),c=Math.cos(r),f=1-c,M=n[0],h=n[1],l=n[2],v=n[3],d=n[4],b=n[5],m=n[6],p=n[7],P=n[8],E=n[9],O=n[10],x=n[11],A=e*e*f+c,q=u*e*f+o*s,y=o*e*f-u*s,w=e*u*f-o*s,R=u*u*f+c,L=o*u*f+e*s,S=e*o*f+u*s,_=u*o*f-e*s,I=o*o*f+c,t[0]=M*A+d*q+P*y,t[1]=h*A+b*q+E*y,t[2]=l*A+m*q+O*y,t[3]=v*A+p*q+x*y,t[4]=M*w+d*R+P*L,t[5]=h*w+b*R+E*L,t[6]=l*w+m*R+O*L,t[7]=v*w+p*R+x*L,t[8]=M*S+d*_+P*I,t[9]=h*S+b*_+E*I,t[10]=l*S+m*_+O*I,t[11]=v*S+p*_+x*I,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t)}function m(t,n,r){var a=Math.sin(r),e=Math.cos(r),u=n[4],o=n[5],i=n[6],s=n[7],c=n[8],f=n[9],M=n[10],h=n[11];return n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[4]=u*e+c*a,t[5]=o*e+f*a,t[6]=i*e+M*a,t[7]=s*e+h*a,t[8]=c*e-u*a,t[9]=f*e-o*a,t[10]=M*e-i*a,t[11]=h*e-s*a,t}function p(t,n,r){var a=Math.sin(r),e=Math.cos(r),u=n[0],o=n[1],i=n[2],s=n[3],c=n[8],f=n[9],M=n[10],h=n[11];return n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=u*e-c*a,t[1]=o*e-f*a,t[2]=i*e-M*a,t[3]=s*e-h*a,t[8]=u*a+c*e,t[9]=o*a+f*e,t[10]=i*a+M*e,t[11]=s*a+h*e,t}function P(t,n,r){var a=Math.sin(r),e=Math.cos(r),u=n[0],o=n[1],i=n[2],s=n[3],c=n[4],f=n[5],M=n[6],h=n[7];return n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=u*e+c*a,t[1]=o*e+f*a,t[2]=i*e+M*a,t[3]=s*e+h*a,t[4]=c*e-u*a,t[5]=f*e-o*a,t[6]=M*e-i*a,t[7]=h*e-s*a,t}function E(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function O(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function x(t,n,r){var a=r[0],e=r[1],u=r[2],o=Math.sqrt(a*a+e*e+u*u),i=void 0,s=void 0,c=void 0;return Math.abs(o)<C.EPSILON?null:(o=1/o,a*=o,e*=o,u*=o,i=Math.sin(n),s=Math.cos(n),c=1-s,t[0]=a*a*c+s,t[1]=e*a*c+u*i,t[2]=u*a*c-e*i,t[3]=0,t[4]=a*e*c-u*i,t[5]=e*e*c+s,t[6]=u*e*c+a*i,t[7]=0,t[8]=a*u*c+e*i,t[9]=e*u*c-a*i,t[10]=u*u*c+s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function A(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=r,t[7]=0,t[8]=0,t[9]=-r,t[10]=a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function q(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=a,t[1]=0,t[2]=-r,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=r,t[9]=0,t[10]=a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function y(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=a,t[1]=r,t[2]=0,t[3]=0,t[4]=-r,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function w(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=a+a,s=e+e,c=u+u,f=a*i,M=a*s,h=a*c,l=e*s,v=e*c,d=u*c,b=o*i,m=o*s,p=o*c;return t[0]=1-(l+d),t[1]=M+p,t[2]=h-m,t[3]=0,t[4]=M-p,t[5]=1-(f+d),t[6]=v+b,t[7]=0,t[8]=h+m,t[9]=v-b,t[10]=1-(f+l),t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function R(t,n){return t[0]=n[12],t[1]=n[13],t[2]=n[14],t}function L(t,n){var r=n[0],a=n[1],e=n[2],u=n[4],o=n[5],i=n[6],s=n[8],c=n[9],f=n[10];return t[0]=Math.sqrt(r*r+a*a+e*e),t[1]=Math.sqrt(u*u+o*o+i*i),t[2]=Math.sqrt(s*s+c*c+f*f),t}function S(t,n){var r=n[0]+n[5]+n[10],a=0;return r>0?(a=2*Math.sqrt(r+1),t[3]=.25*a,t[0]=(n[6]-n[9])/a,t[1]=(n[8]-n[2])/a,t[2]=(n[1]-n[4])/a):n[0]>n[5]&n[0]>n[10]?(a=2*Math.sqrt(1+n[0]-n[5]-n[10]),t[3]=(n[6]-n[9])/a,t[0]=.25*a,t[1]=(n[1]+n[4])/a,t[2]=(n[8]+n[2])/a):n[5]>n[10]?(a=2*Math.sqrt(1+n[5]-n[0]-n[10]),t[3]=(n[8]-n[2])/a,t[0]=(n[1]+n[4])/a,t[1]=.25*a,t[2]=(n[6]+n[9])/a):(a=2*Math.sqrt(1+n[10]-n[0]-n[5]),t[3]=(n[1]-n[4])/a,t[0]=(n[8]+n[2])/a,t[1]=(n[6]+n[9])/a,t[2]=.25*a),t}function _(t,n,r,a){var e=n[0],u=n[1],o=n[2],i=n[3],s=e+e,c=u+u,f=o+o,M=e*s,h=e*c,l=e*f,v=u*c,d=u*f,b=o*f,m=i*s,p=i*c,P=i*f,E=a[0],O=a[1],x=a[2];return t[0]=(1-(v+b))*E,t[1]=(h+P)*E,t[2]=(l-p)*E,t[3]=0,t[4]=(h-P)*O,t[5]=(1-(M+b))*O,t[6]=(d+m)*O,t[7]=0,t[8]=(l+p)*x,t[9]=(d-m)*x,t[10]=(1-(M+v))*x,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function I(t,n,r,a,e){var u=n[0],o=n[1],i=n[2],s=n[3],c=u+u,f=o+o,M=i+i,h=u*c,l=u*f,v=u*M,d=o*f,b=o*M,m=i*M,p=s*c,P=s*f,E=s*M,O=a[0],x=a[1],A=a[2],q=e[0],y=e[1],w=e[2];return t[0]=(1-(d+m))*O,t[1]=(l+E)*O,t[2]=(v-P)*O,t[3]=0,t[4]=(l-E)*x,t[5]=(1-(h+m))*x,t[6]=(b+p)*x,t[7]=0,t[8]=(v+P)*A,t[9]=(b-p)*A,t[10]=(1-(h+d))*A,t[11]=0,t[12]=r[0]+q-(t[0]*q+t[4]*y+t[8]*w),t[13]=r[1]+y-(t[1]*q+t[5]*y+t[9]*w),t[14]=r[2]+w-(t[2]*q+t[6]*y+t[10]*w),t[15]=1,t}function N(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=r+r,i=a+a,s=e+e,c=r*o,f=a*o,M=a*i,h=e*o,l=e*i,v=e*s,d=u*o,b=u*i,m=u*s;return t[0]=1-M-v,t[1]=f+m,t[2]=h-b,t[3]=0,t[4]=f-m,t[5]=1-c-v,t[6]=l+d,t[7]=0,t[8]=h+b,t[9]=l-d,t[10]=1-c-M,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Y(t,n,r,a,e,u,o){var i=1/(r-n),s=1/(e-a),c=1/(u-o);return t[0]=2*u*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*u*s,t[6]=0,t[7]=0,t[8]=(r+n)*i,t[9]=(e+a)*s,t[10]=(o+u)*c,t[11]=-1,t[12]=0,t[13]=0,t[14]=o*u*2*c,t[15]=0,t}function g(t,n,r,a,e){var u=1/Math.tan(n/2),o=1/(a-e);return t[0]=u/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(e+a)*o,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*e*a*o,t[15]=0,t}function T(t,n,r,a){var e=Math.tan(n.upDegrees*Math.PI/180),u=Math.tan(n.downDegrees*Math.PI/180),o=Math.tan(n.leftDegrees*Math.PI/180),i=Math.tan(n.rightDegrees*Math.PI/180),s=2/(o+i),c=2/(e+u);return t[0]=s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=c,t[6]=0,t[7]=0,t[8]=-(o-i)*s*.5,t[9]=(e-u)*c*.5,t[10]=a/(r-a),t[11]=-1,t[12]=0,t[13]=0,t[14]=a*r/(r-a),t[15]=0,t}function j(t,n,r,a,e,u,o){var i=1/(n-r),s=1/(a-e),c=1/(u-o);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(n+r)*i,t[13]=(e+a)*s,t[14]=(o+u)*c,t[15]=1,t}function D(t,n,r,a){var e=void 0,u=void 0,o=void 0,i=void 0,s=void 0,c=void 0,f=void 0,M=void 0,h=void 0,l=void 0,v=n[0],d=n[1],b=n[2],m=a[0],p=a[1],P=a[2],E=r[0],O=r[1],x=r[2];return Math.abs(v-E)<C.EPSILON&&Math.abs(d-O)<C.EPSILON&&Math.abs(b-x)<C.EPSILON?mat4.identity(t):(f=v-E,M=d-O,h=b-x,l=1/Math.sqrt(f*f+M*M+h*h),f*=l,M*=l,h*=l,e=p*h-P*M,u=P*f-m*h,o=m*M-p*f,l=Math.sqrt(e*e+u*u+o*o),l?(l=1/l,e*=l,u*=l,o*=l):(e=0,u=0,o=0),i=M*o-h*u,s=h*e-f*o,c=f*u-M*e,l=Math.sqrt(i*i+s*s+c*c),l?(l=1/l,i*=l,s*=l,c*=l):(i=0,s=0,c=0),t[0]=e,t[1]=i,t[2]=f,t[3]=0,t[4]=u,t[5]=s,t[6]=M,t[7]=0,t[8]=o,t[9]=c,t[10]=h,t[11]=0,t[12]=-(e*v+u*d+o*b),t[13]=-(i*v+s*d+c*b),t[14]=-(f*v+M*d+h*b),t[15]=1,t)}function V(t,n,r,a){var e=n[0],u=n[1],o=n[2],i=a[0],s=a[1],c=a[2],f=e-r[0],M=u-r[1],h=o-r[2],l=f*f+M*M+h*h;l>0&&(l=1/Math.sqrt(l),f*=l,M*=l,h*=l);var v=s*h-c*M,d=c*f-i*h,b=i*M-s*f;return t[0]=v,t[1]=d,t[2]=b,t[3]=0,t[4]=M*b-h*d,t[5]=h*v-f*b,t[6]=f*d-M*v,t[7]=0,t[8]=f,t[9]=M,t[10]=h,t[11]=0,t[12]=e,t[13]=u,t[14]=o,t[15]=1,t}function z(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}function F(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2)+Math.pow(t[9],2)+Math.pow(t[10],2)+Math.pow(t[11],2)+Math.pow(t[12],2)+Math.pow(t[13],2)+Math.pow(t[14],2)+Math.pow(t[15],2))}function Q(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t[4]=n[4]+r[4],t[5]=n[5]+r[5],t[6]=n[6]+r[6],t[7]=n[7]+r[7],t[8]=n[8]+r[8],t[9]=n[9]+r[9],t[10]=n[10]+r[10],t[11]=n[11]+r[11],t[12]=n[12]+r[12],t[13]=n[13]+r[13],t[14]=n[14]+r[14],t[15]=n[15]+r[15],t}function X(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t[4]=n[4]-r[4],t[5]=n[5]-r[5],t[6]=n[6]-r[6],t[7]=n[7]-r[7],t[8]=n[8]-r[8],t[9]=n[9]-r[9],t[10]=n[10]-r[10],t[11]=n[11]-r[11],t[12]=n[12]-r[12],t[13]=n[13]-r[13],t[14]=n[14]-r[14],t[15]=n[15]-r[15],t}function Z(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=n[7]*r,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=n[11]*r,t[12]=n[12]*r,t[13]=n[13]*r,t[14]=n[14]*r,t[15]=n[15]*r,t}function k(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t[3]=n[3]+r[3]*a,t[4]=n[4]+r[4]*a,t[5]=n[5]+r[5]*a,t[6]=n[6]+r[6]*a,t[7]=n[7]+r[7]*a,t[8]=n[8]+r[8]*a,t[9]=n[9]+r[9]*a,t[10]=n[10]+r[10]*a,t[11]=n[11]+r[11]*a,t[12]=n[12]+r[12]*a,t[13]=n[13]+r[13]*a,t[14]=n[14]+r[14]*a,t[15]=n[15]+r[15]*a,t}function U(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]&&t[9]===n[9]&&t[10]===n[10]&&t[11]===n[11]&&t[12]===n[12]&&t[13]===n[13]&&t[14]===n[14]&&t[15]===n[15]}function W(t,n){var r=t[0],a=t[1],e=t[2],u=t[3],o=t[4],i=t[5],s=t[6],c=t[7],f=t[8],M=t[9],h=t[10],l=t[11],v=t[12],d=t[13],b=t[14],m=t[15],p=n[0],P=n[1],E=n[2],O=n[3],x=n[4],A=n[5],q=n[6],y=n[7],w=n[8],R=n[9],L=n[10],S=n[11],_=n[12],I=n[13],N=n[14],Y=n[15];return Math.abs(r-p)<=C.EPSILON*Math.max(1,Math.abs(r),Math.abs(p))&&Math.abs(a-P)<=C.EPSILON*Math.max(1,Math.abs(a),Math.abs(P))&&Math.abs(e-E)<=C.EPSILON*Math.max(1,Math.abs(e),Math.abs(E))&&Math.abs(u-O)<=C.EPSILON*Math.max(1,Math.abs(u),Math.abs(O))&&Math.abs(o-x)<=C.EPSILON*Math.max(1,Math.abs(o),Math.abs(x))&&Math.abs(i-A)<=C.EPSILON*Math.max(1,Math.abs(i),Math.abs(A))&&Math.abs(s-q)<=C.EPSILON*Math.max(1,Math.abs(s),Math.abs(q))&&Math.abs(c-y)<=C.EPSILON*Math.max(1,Math.abs(c),Math.abs(y))&&Math.abs(f-w)<=C.EPSILON*Math.max(1,Math.abs(f),Math.abs(w))&&Math.abs(M-R)<=C.EPSILON*Math.max(1,Math.abs(M),Math.abs(R))&&Math.abs(h-L)<=C.EPSILON*Math.max(1,Math.abs(h),Math.abs(L))&&Math.abs(l-S)<=C.EPSILON*Math.max(1,Math.abs(l),Math.abs(S))&&Math.abs(v-_)<=C.EPSILON*Math.max(1,Math.abs(v),Math.abs(_))&&Math.abs(d-I)<=C.EPSILON*Math.max(1,Math.abs(d),Math.abs(I))&&Math.abs(b-N)<=C.EPSILON*Math.max(1,Math.abs(b),Math.abs(N))&&Math.abs(m-Y)<=C.EPSILON*Math.max(1,Math.abs(m),Math.abs(Y))}Object.defineProperty(n,"__esModule",{value:!0}),n.sub=n.mul=void 0,n.create=a,n.clone=e,n.copy=u,n.fromValues=o,n.set=i,n.identity=s,n.transpose=c,n.invert=f,n.adjoint=M,n.determinant=h,n.multiply=l,n.translate=v,n.scale=d,n.rotate=b,n.rotateX=m,n.rotateY=p,n.rotateZ=P,n.fromTranslation=E,n.fromScaling=O,n.fromRotation=x,n.fromXRotation=A,n.fromYRotation=q,n.fromZRotation=y,n.fromRotationTranslation=w,n.getTranslation=R,n.getScaling=L,n.getRotation=S,n.fromRotationTranslationScale=_,n.fromRotationTranslationScaleOrigin=I,n.fromQuat=N,n.frustum=Y,n.perspective=g,n.perspectiveFromFieldOfView=T,n.ortho=j,n.lookAt=D,n.targetTo=V,n.str=z,n.frob=F,n.add=Q,n.subtract=X,n.multiplyScalar=Z,n.multiplyScalarAndAdd=k,n.exactEquals=U,n.equals=W;var B=r(0),C=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}(B);n.mul=l,n.sub=X},function(t,n,r){"use strict";function a(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}function e(){var t=new E.ARRAY_TYPE(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function u(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function o(t,n,r){r*=.5;var a=Math.sin(r);return t[0]=a*n[0],t[1]=a*n[1],t[2]=a*n[2],t[3]=Math.cos(r),t}function i(t,n){var r=2*Math.acos(n[3]),a=Math.sin(r/2);return 0!=a?(t[0]=n[0]/a,t[1]=n[1]/a,t[2]=n[2]/a):(t[0]=1,t[1]=0,t[2]=0),r}function s(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=r[0],s=r[1],c=r[2],f=r[3];return t[0]=a*f+o*i+e*c-u*s,t[1]=e*f+o*s+u*i-a*c,t[2]=u*f+o*c+a*s-e*i,t[3]=o*f-a*i-e*s-u*c,t}function c(t,n,r){r*=.5;var a=n[0],e=n[1],u=n[2],o=n[3],i=Math.sin(r),s=Math.cos(r);return t[0]=a*s+o*i,t[1]=e*s+u*i,t[2]=u*s-e*i,t[3]=o*s-a*i,t}function f(t,n,r){r*=.5;var a=n[0],e=n[1],u=n[2],o=n[3],i=Math.sin(r),s=Math.cos(r);return t[0]=a*s-u*i,t[1]=e*s+o*i,t[2]=u*s+a*i,t[3]=o*s-e*i,t}function M(t,n,r){r*=.5;var a=n[0],e=n[1],u=n[2],o=n[3],i=Math.sin(r),s=Math.cos(r);return t[0]=a*s+e*i,t[1]=e*s-a*i,t[2]=u*s+o*i,t[3]=o*s-u*i,t}function h(t,n){var r=n[0],a=n[1],e=n[2];return t[0]=r,t[1]=a,t[2]=e,t[3]=Math.sqrt(Math.abs(1-r*r-a*a-e*e)),t}function l(t,n,r,a){var e=n[0],u=n[1],o=n[2],i=n[3],s=r[0],c=r[1],f=r[2],M=r[3],h=void 0,l=void 0,v=void 0,d=void 0,b=void 0;return l=e*s+u*c+o*f+i*M,l<0&&(l=-l,s=-s,c=-c,f=-f,M=-M),1-l>1e-6?(h=Math.acos(l),v=Math.sin(h),d=Math.sin((1-a)*h)/v,b=Math.sin(a*h)/v):(d=1-a,b=a),t[0]=d*e+b*s,t[1]=d*u+b*c,t[2]=d*o+b*f,t[3]=d*i+b*M,t}function v(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=r*r+a*a+e*e+u*u,i=o?1/o:0;return t[0]=-r*i,t[1]=-a*i,t[2]=-e*i,t[3]=u*i,t}function d(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function b(t,n){var r=n[0]+n[4]+n[8],a=void 0;if(r>0)a=Math.sqrt(r+1),t[3]=.5*a,a=.5/a,t[0]=(n[5]-n[7])*a,t[1]=(n[6]-n[2])*a,t[2]=(n[1]-n[3])*a;else{var e=0;n[4]>n[0]&&(e=1),n[8]>n[3*e+e]&&(e=2);var u=(e+1)%3,o=(e+2)%3;a=Math.sqrt(n[3*e+e]-n[3*u+u]-n[3*o+o]+1),t[e]=.5*a,a=.5/a,t[3]=(n[3*u+o]-n[3*o+u])*a,t[u]=(n[3*u+e]+n[3*e+u])*a,t[o]=(n[3*o+e]+n[3*e+o])*a}return t}function m(t,n,r,a){var e=.5*Math.PI/180;n*=e,r*=e,a*=e;var u=Math.sin(n),o=Math.cos(n),i=Math.sin(r),s=Math.cos(r),c=Math.sin(a),f=Math.cos(a);return t[0]=u*s*f-o*i*c,t[1]=o*i*f+u*s*c,t[2]=o*s*c-u*i*f,t[3]=o*s*f+u*i*c,t}function p(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}Object.defineProperty(n,"__esModule",{value:!0}),n.setAxes=n.sqlerp=n.rotationTo=n.equals=n.exactEquals=n.normalize=n.sqrLen=n.squaredLength=n.len=n.length=n.lerp=n.dot=n.scale=n.mul=n.add=n.set=n.copy=n.fromValues=n.clone=void 0,n.create=e,n.identity=u,n.setAxisAngle=o,n.getAxisAngle=i,n.multiply=s,n.rotateX=c,n.rotateY=f,n.rotateZ=M,n.calculateW=h,n.slerp=l,n.invert=v,n.conjugate=d,n.fromMat3=b,n.fromEuler=m,n.str=p;var P=r(0),E=a(P),O=r(1),x=a(O),A=r(2),q=a(A),y=r(3),w=a(y),R=(n.clone=w.clone,n.fromValues=w.fromValues,n.copy=w.copy,n.set=w.set,n.add=w.add,n.mul=s,n.scale=w.scale,n.dot=w.dot,n.lerp=w.lerp,n.length=w.length),L=(n.len=R,n.squaredLength=w.squaredLength),S=(n.sqrLen=L,n.normalize=w.normalize);n.exactEquals=w.exactEquals,n.equals=w.equals,n.rotationTo=function(){var t=q.create(),n=q.fromValues(1,0,0),r=q.fromValues(0,1,0);return function(a,e,u){var i=q.dot(e,u);return i<-.999999?(q.cross(t,n,e),q.len(t)<1e-6&&q.cross(t,r,e),q.normalize(t,t),o(a,t,Math.PI),a):i>.999999?(a[0]=0,a[1]=0,a[2]=0,a[3]=1,a):(q.cross(t,e,u),a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=1+i,S(a,a))}}(),n.sqlerp=function(){var t=e(),n=e();return function(r,a,e,u,o,i){return l(t,a,o,i),l(n,e,u,i),l(r,t,n,2*i*(1-i)),r}}(),n.setAxes=function(){var t=x.create();return function(n,r,a,e){return t[0]=a[0],t[3]=a[1],t[6]=a[2],t[1]=e[0],t[4]=e[1],t[7]=e[2],t[2]=-r[0],t[5]=-r[1],t[8]=-r[2],S(n,b(n,t))}}()},function(t,n,r){"use strict";function a(){var t=new V.ARRAY_TYPE(2);return t[0]=0,t[1]=0,t}function e(t){var n=new V.ARRAY_TYPE(2);return n[0]=t[0],n[1]=t[1],n}function u(t,n){var r=new V.ARRAY_TYPE(2);return r[0]=t,r[1]=n,r}function o(t,n){return t[0]=n[0],t[1]=n[1],t}function i(t,n,r){return t[0]=n,t[1]=r,t}function s(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t}function c(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t}function f(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t}function M(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t}function h(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t}function l(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t}function v(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t}function d(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t}function b(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t}function m(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t}function p(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t}function P(t,n){var r=n[0]-t[0],a=n[1]-t[1];return Math.sqrt(r*r+a*a)}function E(t,n){var r=n[0]-t[0],a=n[1]-t[1];return r*r+a*a}function O(t){var n=t[0],r=t[1];return Math.sqrt(n*n+r*r)}function x(t){var n=t[0],r=t[1];return n*n+r*r}function A(t,n){return t[0]=-n[0],t[1]=-n[1],t}function q(t,n){return t[0]=1/n[0],t[1]=1/n[1],t}function y(t,n){var r=n[0],a=n[1],e=r*r+a*a;return e>0&&(e=1/Math.sqrt(e),t[0]=n[0]*e,t[1]=n[1]*e),t}function w(t,n){return t[0]*n[0]+t[1]*n[1]}function R(t,n,r){var a=n[0]*r[1]-n[1]*r[0];return t[0]=t[1]=0,t[2]=a,t}function L(t,n,r,a){var e=n[0],u=n[1];return t[0]=e+a*(r[0]-e),t[1]=u+a*(r[1]-u),t}function S(t,n){n=n||1;var r=2*V.RANDOM()*Math.PI;return t[0]=Math.cos(r)*n,t[1]=Math.sin(r)*n,t}function _(t,n,r){var a=n[0],e=n[1];return t[0]=r[0]*a+r[2]*e,t[1]=r[1]*a+r[3]*e,t}function I(t,n,r){var a=n[0],e=n[1];return t[0]=r[0]*a+r[2]*e+r[4],t[1]=r[1]*a+r[3]*e+r[5],t}function N(t,n,r){var a=n[0],e=n[1];return t[0]=r[0]*a+r[3]*e+r[6],t[1]=r[1]*a+r[4]*e+r[7],t}function Y(t,n,r){var a=n[0],e=n[1];return t[0]=r[0]*a+r[4]*e+r[12],t[1]=r[1]*a+r[5]*e+r[13],t}function g(t){return"vec2("+t[0]+", "+t[1]+")"}function T(t,n){return t[0]===n[0]&&t[1]===n[1]}function j(t,n){var r=t[0],a=t[1],e=n[0],u=n[1];return Math.abs(r-e)<=V.EPSILON*Math.max(1,Math.abs(r),Math.abs(e))&&Math.abs(a-u)<=V.EPSILON*Math.max(1,Math.abs(a),Math.abs(u))}Object.defineProperty(n,"__esModule",{value:!0}),n.forEach=n.sqrLen=n.sqrDist=n.dist=n.div=n.mul=n.sub=n.len=void 0,n.create=a,n.clone=e,n.fromValues=u,n.copy=o,n.set=i,n.add=s,n.subtract=c,n.multiply=f,n.divide=M,n.ceil=h,n.floor=l,n.min=v,n.max=d,n.round=b,n.scale=m,n.scaleAndAdd=p,n.distance=P,n.squaredDistance=E,n.length=O,n.squaredLength=x,n.negate=A,n.inverse=q,n.normalize=y,n.dot=w,n.cross=R,n.lerp=L,n.random=S,n.transformMat2=_,n.transformMat2d=I,n.transformMat3=N,n.transformMat4=Y,n.str=g,n.exactEquals=T,n.equals=j;var D=r(0),V=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}(D);n.len=O,n.sub=c,n.mul=f,n.div=M,n.dist=P,n.sqrDist=E,n.sqrLen=x,n.forEach=function(){var t=a();return function(n,r,a,e,u,o){var i=void 0,s=void 0;for(r||(r=2),a||(a=0),s=e?Math.min(e*r+a,n.length):n.length,i=a;i<s;i+=r)t[0]=n[i],t[1]=n[i+1],u(t,t,o),n[i]=t[0],n[i+1]=t[1];return n}}()}])});
"use strict";
var RedGLUtil;
(function () {
    /**DOC:
        {
            constructorYn : true,
            title :`RedGLUtil`,
            description : `
                이것저것모음
            `,
            return : 'void'
        }
    :DOC*/
    RedGLUtil = {
        /**DOC:
            {
                constructorYn : true,
                title :`RedGLUtil.throwFunc`,
                description : `
                    에러생성기
                `,
                return : 'void'
            }
        :DOC*/
        throwFunc: function () { throw Array.prototype.slice.call(arguments).join(' ') },
        /**DOC:
            {
                constructorYn : true,
                title :`RedGLUtil.extendsProto`,
                description : `
                    프로토타입 내용을 복사
                `,
                params : {
                    target : [
                        {type : 'Object'},
                        '확장할 대상'
                    ],
                    from : [
                        {type : 'Object'},
                        '가져올 대상'
                    ]
                },
                example : `
                    var a = function(){};
                    var b = function(){};
                    a.prototype.test = function(){
                        console.log('test')
                    };
                    RedGLUtil.extendsProto(b,a);
                    (new b()).test(); // test
                `,
                return : 'void'
            }
        :DOC*/
        extendsProto: function (target, from) {
            for (var k in from.prototype) target.prototype[k] = from.prototype[k]//,console.log(k)
        },
        /**DOC:
            {
                constructorYn : true,
                title :`RedGLUtil.hexToRGB`,
                description : `
                    hex값을 RGB로 변환
                `,
                params : {
                    hex : [
                        {type : 'hex'}
                    ]
                },
                example : `
                    RedGLUtil.hexToRGB('#fff') // [1,1,1]
                `,
                return : 'Array'
            }
        :DOC*/
        hexToRGB: function (hex) {
            var t0, t1;
            if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
                t1 = [];
                t0 = hex.substring(1).split('');
                if (t0.length == 3) t0 = [t0[0], t0[0], t0[1], t0[1], t0[2], t0[2]];
                t0 = '0x' + t0.join('');
                t1[0] = ((t0 >> 16) & 255) / 255;
                t1[1] = ((t0 >> 8) & 255) / 255;
                t1[2] = (t0 & 255) / 255;
                return t1
            } else RedGLUtil.throwFunc('RedGLUtil.hexToRGB : 잘못된 hex값입니다.', hex)
        },
        /**DOC:
            {
                constructorYn : true,
                title :`RedGLUtil.getStrFromComment`,
                description : `
                문자열중 멀티 라인 코멘트 사이값을 반환함.
                프로그램 생성기에서 사용
                `,
                params : {
                    source : [
                        {type : 'String'}
                    ]
                },
                return : 'String'
            }
        :DOC*/
        getStrFromComment: (function () {
            var t0;
            return function (source) {
                if (typeof source != 'string') RedGLUtil.throwFunc('getStrFromComment : 해석할 값은 문자열만 가능', source)
                t0 = source.toString().trim().match(/(\/\*)[\s\S]+(\*\/)/g)
                if (t0) return t0[0].replace(/\/\*|\*\//g, '').trim();
                else RedGLUtil.throwFunc('getStrFromComment : 해석할 불가능한 값', source)
            }
        })()
    };
    Object.freeze(RedGLUtil);
})();
"use strict";
var RedGL;
(function () {
    var getGL;
    var redGLDetect;
    /*
        webgl 관련 디텍팅
    */
    redGLDetect = (function () {
        var checkList, i, k;
        return function (gl) {
            if (!(this instanceof redGLDetect)) return new redGLDetect(gl)
            checkList = (
                'VENDOR,VERSION,SHADING_LANGUAGE_VERSION,RENDERER,MAX_VERTEX_ATTRIBS,MAX_VARYING_VECTORS,MAX_VERTEX_UNIFORM_VECTORS,' +
                'MAX_VERTEX_TEXTURE_IMAGE_UNITS,MAX_FRAGMENT_UNIFORM_VECTORS,MAX_TEXTURE_SIZE,MAX_CUBE_MAP_TEXTURE_SIZE,' +
                'MAX_COMBINED_TEXTURE_IMAGE_UNITS,MAX_TEXTURE_IMAGE_UNITS,MAX_RENDERBUFFER_SIZE,MAX_VIEWPORT_DIMS,' +
                'RED_BITS,GREEN_BITS,BLUE_BITS,ALPHA_BITS,DEPTH_BITS,STENCIL_BITS'
            ).split(',');
            i = checkList.length
            while (i--) this[k = checkList[i]] = gl.getParameter(gl[k]);
        }
    })();
    /*
        gl 컨텍스트 찾기
    */
    getGL = (function () {
        var checkList; // 체크할 리스트
        var OPTION; // 기본초기화 옵션 리스트
        var t0, t1, i;
        var initOption;
        OPTION = {
            alpha: false,
            depth: true,
            stencil: false,
            antialias: true,
            premultipliedAlpha: false,
            preserveDrawingBuffer: false,
            powerPreference: 'default', // default, high-performance, low-power
            failIfMajorPerformanceCaveat: false
        }
        // checkList = 'webkit-3d,moz-webgl,3d,experimental-webgl,webgl,webgl2'.split(',')
        checkList = 'webkit-3d,moz-webgl,3d,experimental-webgl,webgl'.split(',')
        return function (canvas, option) {
            initOption = JSON.parse(JSON.stringify(OPTION));
            i = checkList.length;
            if (option) for (i in option) initOption[i] = option[i];
            while (i--) if (t0 = canvas.getContext(t1 = checkList[i], initOption)) {
                var ext
                t0['OES_element_index_uint'] = t0.getExtension('OES_element_index_uint');
                t0['EXT_texture_filter_anisotropic'] = t0.getExtension('EXT_texture_filter_anisotropic');
                console.log('확장여부 OES_element_index_uint :', t0['OES_element_index_uint'])
                console.log('확장여부 EXT_texture_filter_anisotropic :', t0['EXT_texture_filter_anisotropic'])
                return t0['version'] = t1, t0;
            }
            return null;
        }
    })();
    /**DOC:
		{
			constructorYn : true,
			title :`RedGL`,
            description : `
                RedGL Instance 생성자.
                WebGL 초기화를 담당하며, 단일 월드를 소유한다.
			`,
			params : {
				canvas : [
					{type:'Canvas Element'}
				],
				callback :[
					{type:'function'},
                    `컨텍스트 초기화이후 실행될 콜백`,
                    `리턴인자로 true,false를 반환한다`
                ],
                option : [
                    {type:'Object'},
                    `초기화 옵션을 지정한다.`,
                    `
                    <code>
                    {
                        alpha: false,
                        depth: true,
                        stencil: false,
                        antialias: true,
                        premultipliedAlpha: false,
                        preserveDrawingBuffer: false,
                        powerPreference: 'default', // default, high-performance, low-power
                        failIfMajorPerformanceCaveat: false
                    }
                    </code>
                    `
				],
			},
			example : `
				// 기초 초기화
				RedGL(document.getElementById('test'), function(v){
                     // 콜백내용 
                     // 성공,실패에 따라 v값이 true or false.
                     if(v){
                         // 초기화 성공
                     }else{
                         // 초기화실패
                     }
                })
			`,
			return : 'RedGL Instance'
		}
	:DOC*/
    RedGL = function (canvas, callback, option) {
        var _tGL, _self;
        var _fullMode, _renderScale;
        if (!(this instanceof RedGL)) return new RedGL(canvas, callback);
        if (!(canvas instanceof Element) || (canvas['tagName'] != 'CANVAS')) RedGLUtil.throwFunc('RedGL : Canvas Element만 허용');

        _self = this;
        _fullMode = true;
        _renderScale = 1;

        /**DOC:
		{
            title :`renderScale`,
            code: `PROPERTY`,
            description : `
                기본값 : 1
                렌더링시 사용할 적용할 렌더링 스케일                
                size 1024*768, renderScale 0.5 일경우 512 * 389로 렌더링된다
			`,
            example : `
            RedGL(document.getElementById('test'), function (v) {
                this.renderScale = 0.5 // 기본값 1
            })
            `,
			return : 'Number'
		}
	    :DOC*/
        Object.defineProperty(this, 'renderScale', {
            get: function () { return _renderScale },
            set: function (v) {
                _renderScale = v
                this.setSize(this['_width'], this['_height'], true)
            }
        });
        /**DOC:
		{
            title :`fullMode`,
            code: `PROPERTY`,
            description : `
                기본값 : true
                캔버스크기를 화면 전체사이즈로 설정할지 여부
            `,
            example : `
            RedGL(document.getElementById('test'), function (v) {
                this.fullMode = false // 기본값 true
            })
            `,
			return : 'Boolean'
		}
	    :DOC*/
        Object.defineProperty(this, 'fullMode', {
            get: function () { return _fullMode },
            set: function (v) {
                if (typeof v != 'boolean') RedGLUtil.throwFunc('RedGL : Boolean만 가능.')
                _fullMode = v
                this.setSize(this['_width'], this['_height'])
            }
        });        
        this['_canvas'] = canvas;
        this['_width'] = 500;
        this['_height'] = 500;
        this['gl'] = _tGL = getGL(canvas);
        if (_tGL) this['_detect'] = redGLDetect(_tGL, option);
        this['_datas'] = {};
        this['_UUID'] = RedGL['makeUUID']();
        ////
        requestAnimationFrame(function (v) {
            window.addEventListener('resize', function () { _self.setSize(_self['_width'], _self['_height']) });
            _self.setSize(_self['_width'], _self['_height']);
            callback ? callback.call(_self, _tGL ? true : false) : 0;
            // 빈텍스쳐를 미리 체워둔다.
            var t0, t1;
            var i = _self['_detect']['MAX_COMBINED_TEXTURE_IMAGE_UNITS']
            var src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzMxRDhBQzRFNUZFMTFFN0IxMDVGNEEzQjQ0RjAwRDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzMxRDhBQzVFNUZFMTFFN0IxMDVGNEEzQjQ0RjAwRDIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MzFEOEFDMkU1RkUxMUU3QjEwNUY0QTNCNDRGMDBEMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3MzFEOEFDM0U1RkUxMUU3QjEwNUY0QTNCNDRGMDBEMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuojYFUAAAAQSURBVHjaYvj//z8DQIABAAj8Av7bok0WAAAAAElFTkSuQmCC'
            t0 = RedBitmapTexture(_self, src)
            t1 = RedBitmapCubeTexture(_self, [src, src, src, src, src, src])
            _self['_datas']['emptyTexture'] = {
                '2d': t0,
                '3d': t1
            }
            while (i--) {
                // 0번은 2D 공백텍스쳐로 사용할예정
                // 1번은 3D 공백텍스쳐로 사용할예정
                if (i != 1) {
                    _tGL.activeTexture(_tGL.TEXTURE0 + i)
                    _tGL.bindTexture(_tGL.TEXTURE_2D, t0['webglTexture'])
                } else {
                    _tGL.activeTexture(_tGL.TEXTURE0 + 1)
                    _tGL.bindTexture(_tGL.TEXTURE_CUBE_MAP, t1['webglTexture'])
                }
            }
        });
        console.log(this)
    };
    /**DOC:
        {
            code : 'STATIC',
            title :`RedGL.makeUUID`,
            description : `
                UUID 생성기
            `,
            example : `
                // 기초 초기화
                RedGL.makeUUID()
            `,
            return : 'int'
        }
    :DOC*/
    RedGL['makeUUID'] = (function () {
        var UUID = 0
        return function () { return UUID++ }
    })();
    RedGL.prototype = {
        /**DOC:
        {
            title :`setSize`,
            code: `METHOD`,
            description : `
                RedGL Instance의 Canvas 사이즈 설정
                fullMode 속성이 false일때만 적용.
                px 단위만 입력가능.
            `,
            example : `
                RedGL(document.getElementById('test'), function(v){
                     if(v){
                         // 초기화 성공
                         this.setSize(200,200)
                     }else{
                         // 초기화실패
                     }
                })
            `,
            return : 'void'
        }
        :DOC*/
        setSize: (function () {
            var W, H;
            var prevW, prevH
            var ratio;
            var tCanvas;
            prevW = 0, prevH = 0;
            return function (width, height, force) {
                if (this.fullMode) {
                    W = document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth;
                    H = window.innerHeight;
                } else {
                    if (width == undefined) RedGLUtil.throwFunc('RedGL setSize : width가 입력되지 않았습니다.')
                    if (height == undefined) RedGLUtil.throwFunc('RedGL setSize : height가 입력되지 않았습니다.')
                    if (typeof width == 'string' && width.indexOf('%') != -1) RedGLUtil.throwFunc('RedGL setSize : width는 %로 입력할수 없음.')
                    if (typeof height == 'string' && height.indexOf('%') != -1) RedGLUtil.throwFunc('RedGL setSize: height는 %로 입력할수 없음.')
                    this['_width'] = W = width;
                    this['_height'] = H = height;
                }

                ratio = window.devicePixelRatio || 1;
                tCanvas = this['_canvas'];
                if (prevW != W || prevH != H || force) {
                    tCanvas.width = W * ratio * this.renderScale;
                    tCanvas.height = H * ratio * this.renderScale;
                    tCanvas.style.width = W;
                    tCanvas.style.height = H;
                    console.log('RedGL canvas setSize : ', this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
                    prevW = W;
                    prevH = H;
                }
            }
        })()
    };
    Object.freeze(RedGL);
})();
"use strict";
var RedAtlas;
(function () {
    var Atlas;
    var MAX_TEXTURE_SIZE
    RedAtlas = function (redGL, srcList, callBack) {
        if (!(this instanceof RedAtlas)) return new RedAtlas(redGL, srcList, callBack);
        if (!(redGL instanceof RedGL)) RedGLUtil.throwFunc('RedBitmapMaterial : RedGL Instance만 허용됩니다.')

        if (!redGL['_datas']['RedAtlas']) redGL['_datas']['RedAtlas'] = {
            atlasInfoList: [new Atlas()],
            atlasMap: {}
        }
        MAX_TEXTURE_SIZE = redGL['_detect']['MAX_TEXTURE_SIZE']
        if (MAX_TEXTURE_SIZE > 2048) MAX_TEXTURE_SIZE = 2048
        this.loadList(redGL, srcList, callBack)


    }
    RedAtlas.prototype = {
        atlasPack: function (redGL, img) {
            var tAtlasInfoList, tAtlasMap;
            tAtlasInfoList = redGL['_datas']['RedAtlas']['atlasInfoList']
            tAtlasMap = redGL['_datas']['RedAtlas']['atlasMap']
            if (tAtlasMap[img.id]) return
            else {
                // console.log(tAtlasInfoList)
                // console.log(tAtlasMap)

                var i, len
                var tAtlas
                var node
                tAtlas = tAtlasInfoList[0]
                node = tAtlas.pack(img);
                if (node === false) {
                    // 아틀라스를 전체를 돌면서 찾아야하고..
                    i = 0, len = tAtlasInfoList.length
                    for (i; i < len; i++) {
                        // 기존있는놈중에 들어가면 종료시키고
                        tAtlas = tAtlasInfoList[i]
                        node = tAtlas.pack(img);

                        if (node) break
                    }
                    // 여기까지 흘러들어오면 아틀라스캔버스 자체를 추가한다.
                    if (node === false) {
                        tAtlasInfoList.push(tAtlas = new Atlas())
                        node = tAtlas.pack(img)
                    }
                    // console.log(node)
                }

                tAtlasMap[img.id] = {
                    atlas: tAtlas,
                    rect: tAtlas.uv()[img.id]

                }





                if (!tAtlas['texture']) tAtlas['texture'] = RedBitmapTexture(redGL, tAtlas['canvas'])
                console.log(tAtlasMap[img.id], tAtlasMap)
            }
        },
        loadList: function (redGL, srcList, callBack) {
            var i, len;
            var self;
            var loaded
            loaded = 0
            self = this
            i = 0;
            len = srcList.length
            for (i = 0; i < len; i++) {
                var img = new Image();
                img.id = img.src = srcList[i]
                img.onload = function () {
                    self.atlasPack(redGL, this)
                    loaded++
                    if (loaded == srcList.length && callBack) {

                        var t0;
                        t0 = redGL['_datas']['RedAtlas']['atlasInfoList']
                        t0.forEach(function (v) {
                            v['texture'] = RedBitmapTexture(redGL, v['canvas'])
                        })

                        callBack(redGL['_datas']['RedAtlas'])
                    }
                };
            }
        }
    }
    /////////////////////////////



    /*
     * atlaspack
     * https://github.com/shama/atlaspack
     *
     * Copyright (c) 2016 Kyle Robinson Young
     * Licensed under the MIT license.
     *
     * Based on Nick Welch's binpack: https://github.com/mackstann/binpack
     */

    function Rect(x, y, w, h) {
        this.x = x; this.y = y;
        this.w = w; this.h = h;
    }

    Rect.prototype.fitsIn = function (outer) {
        return outer.w >= this.w && outer.h >= this.h;
    };

    Rect.prototype.sameSizeAs = function (other) {
        return this.w === other.w && this.h === other.h;
    };

    Atlas = function (x, y, w, h) {
        if (x == undefined) {
            var canvas = document.createElement('canvas');
            document.body.appendChild(canvas);
            canvas.style.display = 'none'
            canvas.width = MAX_TEXTURE_SIZE;
            canvas.height = MAX_TEXTURE_SIZE;

            this.canvas = canvas;
            x = y = 0;
            w = this.canvas.width;
            h = this.canvas.height;
        }
        if (arguments.length === 2) {
            w = x; h = y; x = y = 0;
        }
        this['_UUID'] = RedGL.makeUUID()
        this.left = this.right = null;
        this.rect = new Rect(x, y, w, h);
        this.filled = false;
        this.tilepad = false;
        this._cache = [];
        this._uvcache = Object.create(null);
    }

    // pack image/rect to the atlas
    Atlas.prototype.pack = function (rect) {
        this._cache = [];
        this._uvcache = Object.create(null);
        rect = this._toRect(rect);

        if (this.img && this.tilepad) {
            rect = this._tilepad(rect);
        }

        if (this.left !== null) {
            return this._ontoCanvas(this.left.pack(rect) || this.right.pack(rect));
        }
        // if atlas filled or wont fit
        if (this.filled || !rect.fitsIn(this.rect)) {
            return false;
        }
        // if this atlas has been filled
        if (rect.sameSizeAs(this.rect)) {
            this.filled = true;
            return this._ontoCanvas(this);
        }
        if ((this.rect.w - rect.w) > (this.rect.h - rect.h)) {
            this.left = new Atlas(this.rect.x, this.rect.y, rect.w, this.rect.h);
            this.right = new Atlas(this.rect.x + rect.w, this.rect.y, this.rect.w - rect.w, this.rect.h);
        } else {
            this.left = new Atlas(this.rect.x, this.rect.y, this.rect.w, rect.h);
            this.right = new Atlas(this.rect.x, this.rect.y + rect.h, this.rect.w, this.rect.h - rect.h);
        }
        return this._ontoCanvas(this.left.pack(rect));
    };

    Atlas.prototype.expand = function (rect) {
        var self = this;
        rect = this._toRect(rect);

        if (this.img && this.tilepad) {
            rect = this._tilepad(rect);
        }

        var atlas;
        if (this.rect.w < this.rect.h) {
            atlas = new Atlas(0, 0, this.rect.w + rect.w, this.rect.h);
            atlas.right = new Atlas(this.rect.w, 0, rect.w, this.rect.h);
            atlas.left = this;
        } else {
            atlas = new Atlas(0, 0, this.rect.w, this.rect.h + rect.h);
            atlas.right = new Atlas(0, this.rect.h, this.rect.w, rect.h);
            atlas.left = this;
        }

        ['canvas', 'context', 'img'].forEach(function (p) {
            if (self[p]) {
                atlas[p] = self[p];
                self[p] = null;
            }
        });

        // resize canvas
        if (atlas.canvas) {
            if (!atlas.context) {
                atlas.context = atlas.canvas.getContext('2d');
            }
            var old = atlas.context.getImageData(0, 0, atlas.canvas.width, atlas.canvas.height);
            atlas.canvas.width = atlas.rect.w;
            atlas.canvas.height = atlas.rect.h;
            atlas.context.putImageData(old, 0, 0);
        }

        return (atlas.pack(rect) === false) ? atlas.expand(rect) : atlas;
    };

    Atlas.prototype.index = function () {
        var self = this;
        if (self._cache.length > 0) {
            return self._cache;
        }
        (function loop(atlas) {
            if (atlas.left !== null) {
                loop(atlas.left);
                loop(atlas.right);
            } else if (atlas.rect.name) {
                self._cache.push(atlas.rect);
            }
        }(self));
        return self._cache;
    };

    Atlas.prototype.uv = function (w, h) {
        var self = this;
        w = w || self.rect.w;
        h = h || self.rect.h;
        var isPad = this.tilepad;
        (function loop(atlas) {
            if (atlas.left !== null) {
                loop(atlas.left);
                loop(atlas.right);
            } else if (typeof atlas.rect.name !== 'undefined') {
                var p = (isPad) ? atlas.rect.w / 4 : 0;
                self._uvcache[atlas.rect.name] = [
                    [atlas.rect.x + p, atlas.rect.y + p],
                    [(atlas.rect.x + p) + (atlas.rect.w - (p * 2)), atlas.rect.y + p],
                    [(atlas.rect.x + p) + (atlas.rect.w - (p * 2)), (atlas.rect.y + p) + (atlas.rect.h - (p * 2))],
                    [(atlas.rect.x + p), (atlas.rect.y + p) + (atlas.rect.h - (p * 2))],
                ].map(function (uv) {
                    if (uv[0] !== 0) {
                        uv[0] = uv[0] / w;
                    }
                    if (uv[1] !== 0) {
                        uv[1] = uv[1] / h;
                    }
                    return uv;
                });
            }
        }(self));
        return self._uvcache;
    };

    Atlas.prototype.json = function (input) {
        var self = this;
        if (input) {
            if (typeof input === 'string') input = JSON.parse(input);
            return (function loop(obj) {
                if (!obj || !obj.rect) return;
                var atlas = new Atlas(obj.rect.x, obj.rect.y, obj.rect.w, obj.rect.h);
                if (obj.left) atlas.left = loop(obj.left);
                if (obj.right) atlas.right = loop(obj.right);
                return atlas;
            }(input));
        } else {
            return JSON.stringify(function loop(atlas) {
                var obj = {
                    left: null, right: null,
                    rect: atlas.rect, filled: atlas.filled
                };
                if (atlas.left !== null) {
                    obj.left = loop(atlas.left);
                    obj.right = loop(atlas.right);
                }
                return obj;
            }(self), null, 2);
        }
    };

    // Pads the image by tiling itself around itself
    Atlas.prototype._tilepad = function (rect) {
        var img = this.img;
        if (!img) return rect;

        var p = img.width / 2;

        var canvas = document.createElement('canvas');
        canvas.name = img.name || img.src;
        canvas.id = img.id || '';
        canvas.width = img.width + img.width;
        canvas.height = img.height + img.height;
        var ctx = canvas.getContext('2d');

        var pattern = ctx.createPattern(img, 'repeat');
        ctx.fillStyle = pattern;
        ctx.translate(p, p);
        ctx.fillRect(-p, -p, canvas.width + p, canvas.height + p);
        ctx.translate(-p, -p);

        this.img = canvas;

        return new Rect(rect.x, rect.y, this.img.width, this.img.height);
    };

    // if has an image and canvas, draw to the canvas as we go
    Atlas.prototype._ontoCanvas = function (node) {
        if (node && this.img && this.canvas) {
            if (!this.context) {
                this.context = this.canvas.getContext('2d');
            }
            this.context.clearRect(node.rect.x, node.rect.y, node.rect.w, node.rect.h);
            this.context.drawImage(this.img, node.rect.x, node.rect.y, node.rect.w, node.rect.h);
            node.rect.name = this.img.id || this.img.name || this.img.src || null;
        }
        return node;
    };

    // make sure we're always working with rects
    Atlas.prototype._toRect = function (rect) {
        // if rect is an image
        if (rect.nodeName && (rect.nodeName === 'IMG' || rect.nodeName === 'CANVAS')) {
            this.img = rect;
            rect = new Rect(rect.x, rect.y, rect.width, rect.height);
        }
        // if rect is an object
        if (!(rect instanceof Rect)) {
            rect = new Rect(rect.x || 0, rect.y || 0, rect.w || rect.width, rect.h || rect.height);
        }
        return rect;
    };

    Atlas.prototype._debug = function () {
        if (!this.canvas) { return; }
        var context = this.canvas.getContext('2d');
        this.index().forEach(function (rect) {
            context.lineWidth = 1;
            context.strokeStyle = 'red';
            context.strokeRect(rect.x, rect.y, rect.w, rect.h);
        });
    };


})()
"use strict";
var RedBaseContainer;
(function () {
    /**DOC:
        {
            constructorYn : true,
            title :`RedBaseContainer`,
            description : `
                DisplayContainer 기저층
                프로토타입 확장을 통해서만 사용가능(RedGLUtil.extendsProto 사용)
            `,
            return : 'void'
        }
    :DOC*/
    RedBaseContainer = function () {
        RedGLUtil.throwFunc('RedBaseContainer : 생성자/직접실행으로 사용 할 수 없습니다.')
    }
    RedBaseContainer.prototype = {
        /**DOC:
            {
                code : 'METHOD',
                title :`addChild`,
                description : `addChild`,
                params:{
                    child : [
                        {type:'RedMesh,RedSprite3D,RedLine,RedPointUnit'}
                    ]
                },
                example : `//TODO:`,
                return : 'void'
            }
        :DOC*/
        addChild: (function () {
            var t0;
            return function (child) {
                if (
                    !(child instanceof RedMesh)
                    && !(child instanceof RedSprite3D)
                    && !(child instanceof RedLine)
                    && !(child instanceof RedPointUnit)
                ) RedGLUtil.throwFunc('addChild', 'RedMesh,RedSprite3D,RedLine,RedPointUnit Instance만 가능');
                t0 = this['children'].indexOf(child);
                if (t0 != -1) child = this['children'].splice(t0, 1);
                this['children'].push(child);
            }
        })(),
        /**DOC:
            {
                code : 'METHOD',
                title :`addChildAt`,
                description : `addChildAt`,
                params:{
                    child : [
                        {type:'RedMesh,RedSprite3D,RedLine,RedPointUnit'}
                    ],
                    index : [
                        {type:'uint'}
                    ]
                },
                example : `//TODO:`,
                return : 'void'
            }
        :DOC*/
        addChildAt: (function () {
            var t0;
            return function (child, index) {
                if (
                    !(child instanceof RedMesh)
                    && !(child instanceof RedSprite3D)
                    && !(child instanceof RedLine)
                    && !(child instanceof RedPointUnit)
                ) RedGLUtil.throwFunc('addChildAt', 'RedMesh,RedSprite3D,RedLine,RedPointUnit Instance만 가능');
                t0 = this['children'].indexOf(child);
                this['children'].splice(t0, 0, child);
            }
        })(),
        /**DOC:
            {
                code : 'METHOD',
                title :`removeChild`,
                description : `removeChild`,
                params:{
                    child : [
                        {type:'RedMesh,RedSprite3D,RedLine,RedPointUnit'}
                    ]
                },
                example : `//TODO:`,
                return : 'void'
            }
        :DOC*/
        removeChild: (function () {
            var t0;
            return function (child) {
                t0 = this['children'].indexOf(child);
                if (t0 == -1) RedGLUtil.throwFunc('removeChild', '존재하지 않는 RedMesh를 삭제하려고 함');
                else this['children'].splice(t0, 1);
            }
        })(),
        /**DOC:
            {
                code : 'METHOD',
                title :`removeChildAt`,
                description : `removeChildAt`,
                params:{
                    index : [
                        {type:'uint'}
                    ]
                },
                example : `//TODO:`,
                return : 'void'
            }
        :DOC*/
        removeChildAt: (function () {
            var t0;
            return function (index) {
                if (typeof index != 'number') RedGLUtil.throwFunc('removeChildAt', 'index가 Number형이 아님 ');
                this['children'].splice(t0, 1);
            }
        }),
        /**DOC:
            {
                code : 'METHOD',
                title :`removeChildAll`,
                description : `removeChildAll`,
                example : `//TODO:`,
                return : 'void'
            }
        :DOC*/
        removeChildAll: function () {
            this['children'].length = 0
        },
        /**DOC:
            {
                code : 'METHOD',
                title :`getChildAt`,
                description : `getChildAt`,
                params:{
                    index : [
                        {type:'uint'}
                    ]
                },
                example : `//TODO:`,
                return : 'RedMesh,RedSprite3D,RedLine,RedPointUnit'
            }
        :DOC*/
        getChildAt: function (index) {
            if (typeof index != 'number') RedGLUtil.throwFunc('getChildAt', 'index가 Number형이 아님 ');
            return this['children'][index];
        },
        /**DOC:
            {
                code : 'METHOD',
                title :`getChildIndex`,
                description : `getChildIndex`,
                params:{
                    child : [
                        {type:'RedMesh,RedSprite3D,RedLine,RedPointUnit'}
                    ]
                },
                example : `//TODO:`,
                return : 'int'
            }
        :DOC*/
        getChildIndex: function (child) {
            return this['children'].indexOf(child);
        },
        // getChildByName: function () {
        //     //TODO: 
        // },
        // setChildIndex: function (v) {
        //     //TODO: 
        // },
        /**DOC:
            {
                code : 'METHOD',
                title :`numChildren`,
                description : `numChildren`,
                params:{
                    target : [
                        {type:'RedMesh,RedSprite3D,RedLine,RedPointUnit'}
                    ]
                },
                example : `//TODO:`,
                return : 'uint'
            }
        :DOC*/
        numChildren: function (target) {
            return this['children'].length;
        }
    };
    Object.freeze(RedBaseContainer);
})();

"use strict";
var RedBaseLight;
(function () {
    RedBaseLight =function () {
        RedGLUtil.throwFunc('RedBaseLight : 생성자/직접실행으로 사용 할 수 없습니다.')
    }
    RedBaseLight.prototype = {
        setColor: (function () {
            var t0;
            return function (hex, alpha) {
                hex = hex ? hex : '#fff';
                if (alpha == undefined) alpha = 1;
                if (alpha > 1) alpha = 1
                t0 = RedGLUtil.hexToRGB.call(this, hex);
                this['color'][0] = t0[0];
                this['color'][1] = t0[1];
                this['color'][2] = t0[2];
                this['color'][3] = alpha;
            }
        })()
    }
    Object.freeze(RedBaseLight)

})();
"use strict";
var RedBaseMaterial;
(function () {
    RedBaseMaterial = function () {
        RedGLUtil.throwFunc('RedBaseMaterial : 생성자/직접실행으로 사용 할 수 없습니다.')
    }
    RedBaseMaterial.prototype = {
        checkProperty: function () {
            var i2
            var tUniformGroup, tUniformLocationInfo, tWebGLUniformLocation
            tUniformGroup = this['program']['uniformLocation'];
            i2 = tUniformGroup.length
            while (i2--) {
                tUniformLocationInfo = tUniformGroup[i2];
                tWebGLUniformLocation = tUniformLocationInfo['location'];
                if (tWebGLUniformLocation) {
                    this.hasOwnProperty(tUniformLocationInfo['materialPropertyName']) ? 0 : RedGLUtil.throwFunc('Material에 ', tUniformLocationInfo['materialPropertyName'], '이 정의 되지않았습니다.');
                }
            }
        }
    }
    Object.freeze(RedBaseMaterial)

})();
"use strict";
var RedBaseObject3D;
(function () {
    /**DOC:
        {
            constructorYn : true,
            title :`RedBaseObject3D`,
            description : `
                RedBaseObject3D 기저층
                프로토타입 확장을 통해서만 사용가능(RedGLUtil.extendsProto 사용)
                
            `,
            return : 'void'
        }
    :DOC*/
    RedBaseObject3D = function () {
        RedGLUtil.throwFunc('RedBaseObject3D : 생성자/직접실행으로 사용 할 수 없습니다.')
    }
    /**DOC:
        {
            title :`RedBaseObject3D.build`,
            code : 'STATIC',
            description : `
               RedBaseObject3D가 가지고있는 속성을 해당 인스턴스에 복사하기위해사용
            `,
            params : {
                gl : [
                    {type : 'glContext' }
                ]
            },
            example : `
            var testMesh = function (redGL) {
                var tGL;
                tGL = redGL.gl;
                RedBaseObject3D['build'].call(this, tGL)
            }
            `,
            return : 'void'
        }
    :DOC*/
    RedBaseObject3D['build'] = function (gl) {
        /**DOC:
		{
            title :`useCullFace`,
            description : `
                컬링 사용여부
                기본값 : true
            `,
            return : 'Boolean'
		}
        :DOC*/
        this['useCullFace'] = true
        /**DOC:
		{
            title :`cullFace`,
            description : `
                컬링 페이스 설정
                기본값 : gl.BACK
            `,
            return : 'gl 상수'
		}
        :DOC*/
        this['cullFace'] = gl.BACK
        /**DOC:
		{
            title :`useDepthTest`,
            description : `
                뎁스 테스트 사용여부
                기본값 : true
            `,
            return : 'Boolean'
		}
        :DOC*/
        this['useDepthTest'] = true
        /**DOC:
		{
            title :`depthTestFunc`,
            description : `
                뎁스 테스트 함수 설정
                기본값 : gl.LEQUAL
            `,
            return : 'gl 상수'
		}
        :DOC*/
        this['depthTestFunc'] = gl.LEQUAL
        /**DOC:
		{
            title :`useBlendMode`,
            description : `
                블렌드 모드 사용여부
                기본값 : true
            `,
            return : 'Boolean'
		}
        :DOC*/
        this['useBlendMode'] = true
        /**DOC:
		{
            title :`blendSrc`,
            description : `
                블렌드 소스값 factor
                기본값 : gl.ONE
            `,
            return : 'gl 상수'
		}
        :DOC*/
        this['blendSrc'] = gl.ONE
        /**DOC:
		{
            title :`blendDst`,
            description : `
                블렌드 목표값 factor
                기본값 : gl.ONE_MINUS_SRC_ALPHA
            `,
            return : 'gl 상수'
		}
        :DOC*/
        this['blendDst'] = gl.ONE_MINUS_SRC_ALPHA
        /**DOC:
		{
            title :`drawMode`,
            description : `
                기본값 : gl.TRIANGLES
                drawCall시 적용한 드로잉 모드
            `,
            return : 'gl 상수'
		}
        :DOC*/
        this['drawMode'] = gl.TRIANGLES
        /**DOC:
		{
            title :`pointSize`,
            description : `
                기본값 : 1
                gl.POINTS로 그릴경우 반영될 포인트 사이즈.
            `,
            return : 'Number'
		}
        :DOC*/
        this['pointSize'] = 1
        /**DOC:
		{
            title :`x`,
            description : `x`,
            return : 'Number'
		}
        :DOC*/
        /**DOC:
		{
            title :`y`,
            description : `y`,
            return : 'Number'
		}
        :DOC*/
        /**DOC:
		{
            title :`z`,
            description : `z`,
            return : 'Number'
		}
	    :DOC*/
        this['x'] = this['y'] = this['z'] = 0;
        /**DOC:
		{
            title :`rotationX`,
            description : `rotationX`,
            return : 'Number'
		}
        :DOC*/
        /**DOC:
		{
            title :`rotationY`,
            description : `rotationY`,
            return : 'Number'
		}
        :DOC*/
        /**DOC:
		{
            title :`rotationZ`,
            description : `rotationZ`,
            return : 'Number'
		}
	    :DOC*/
        this['rotationX'] = this['rotationY'] = this['rotationZ'] = 0;
        /**DOC:
		{
            title :`scaleX`,
            description : `scaleX`,
            return : 'Number'
		}
        :DOC*/
        /**DOC:
		{
            title :`scaleY`,
            description : `scaleY`,
            return : 'Number'
		}
        :DOC*/
        /**DOC:
		{
            title :`scaleZ`,
            description : `scaleZ`,
            return : 'Number'
		}
	    :DOC*/
        this['scaleX'] = this['scaleY'] = this['scaleZ'] = 1;
        /**DOC:
        {
           title :`matrix`,
           description : `
           matrix 렌더링시 자동계산
           `,
           return : 'mat4'
        }
        :DOC*/
        this['matrix'] = mat4.create();
        /**DOC:
        {
           title :`normalMatrix`,
           description : `
           normalMatrix 렌더링시 자동계산
           `,
           return : 'mat4'
        }
        :DOC*/
        this['normalMatrix'] = mat4.create();
        /**DOC:
        {
            title :`children`,
            description : `children`,
            return : 'Array'
        }
        :DOC*/
        this['children'] = []
    }
    RedBaseObject3D.prototype = {
        /**DOC:
        {
            title :`localToWorld`,
            code : 'METHOD',
            description : `
                로컬좌표를 RedWorld 좌표로 변경
            `,
            return : 'Array'
        }
        :DOC*/
        localToWorld: (function () {
            var t0;
            t0 = mat4.create()
            return function (x, y, z) {
                x = x || 0
                y = y || 0
                z = z || 0
                mat4.identity(t0);
                mat4.translate(t0, t0, [x, y, z])
                mat4.multiply(t0, this['matrix'], t0)
                return [
                    t0[12],
                    t0[13],
                    t0[14]
                ]
            }
        })(),
        /**DOC:
        {
            title :`worldToLocal`,
            code : 'METHOD',
            description : `
                RedWorld좌료를 로컬좌료로 변환
            `,
            return : 'Array'
        }
        :DOC*/
        worldToLocal: (function () {
            var t0, t1;
            t0 = mat4.create() // 이동
            t1 = mat4.create()
            return function (x, y, z) {
                x = x || 0
                y = y || 0
                z = z || 0
                mat4.translate(t0, t0, [x, y, z])
                // mat4.invert(t1, this['matrix'])
                mat4.multiply(t1, t0, this['matrix'])
                return [
                    t1[0] * x + t1[1] * y + t1[2] * z + t1[3],
                    t1[4] * x + t1[5] * y + t1[6] * z + t1[7],
                    t1[8] * x + t1[9] * y + t1[10] * z + t1[11]
                ]
            }
        })()
    }
    Object.freeze(RedBaseObject3D);
})();

"use strict";
var RedBuffer;
(function () {
    var checkGlArrayType, checkBufferType, parseInterleaveDefineInfo;
    checkGlArrayType = function (gl, bufferType, v) {
        switch (bufferType) {
            case RedBuffer.ARRAY_BUFFER:
                if (v instanceof Float32Array || v instanceof Float64Array) {
                    if (v instanceof Float32Array) return gl.FLOAT;
                    if (v instanceof Float64Array) return gl.FLOAT;
                } else RedGLUtil.throwFunc('RedBuffer : 올바른 TypedArray(RedBuffer.ARRAY_BUFFER)형식을 사용해야합니다.')
                break
            case RedBuffer.ELEMENT_ARRAY_BUFFER:
                if (
                    v instanceof Uint8Array || v instanceof Uint16Array || v instanceof Uint32Array
                    || v instanceof Int8Array || v instanceof Int16Array || v instanceof Int32Array
                ) {
                    if (v instanceof Int8Array) return gl.BYTE
                    if (v instanceof Uint8Array) return gl.UNSIGNED_BYTE
                    if (v instanceof Uint16Array) return gl.UNSIGNED_SHORT
                    if (v instanceof Uint32Array) return gl.UNSIGNED_INT
                    if (v instanceof Int16Array) return gl.SHORT
                    if (v instanceof Int32Array) return gl.INT
                } else RedGLUtil.throwFunc('RedBuffer : 올바른 TypedArray(RedBuffer.ELEMENT_ARRAY_BUFFER)형식을 사용해야합니다.')
                break
            default:
                RedGLUtil.throwFunc('RedBuffer : bufferType - 지원하지 않는 버퍼타입입니다. ')
        }
    }
    checkBufferType = function (gl, bufferType) {
        switch (bufferType) {
            case RedBuffer.ARRAY_BUFFER:
                return gl.ARRAY_BUFFER
                break
            case RedBuffer.ELEMENT_ARRAY_BUFFER:
                return gl.ELEMENT_ARRAY_BUFFER
                break
            default:
                RedGLUtil.throwFunc('RedBuffer : bufferType - 지원하지 않는 버퍼타입입니다. ')
        }
    }
    parseInterleaveDefineInfo = (function () {
        var t0, k;
        return function (self, bufferType, data, interleaveDefineInfo) {
            // console.log(self,bufferType)
            t0 = 0;
            switch (bufferType) {
                case RedBuffer.ARRAY_BUFFER:
             
                    self['interleaveDefineInfo'] = interleaveDefineInfo;
                    if (interleaveDefineInfo) {
                        for (k in interleaveDefineInfo) {
                            interleaveDefineInfo[k]['offset'] = interleaveDefineInfo.length < 2 ? 0 : t0
                            t0 += interleaveDefineInfo[k]['size']
                            interleaveDefineInfo[k]['_UUID'] = RedGL['makeUUID']();
                        }
                        interleaveDefineInfo.forEach(function (v) {
                            interleaveDefineInfo[v['attributeKey']] = v
                        })
                        if (interleaveDefineInfo.length < 2) {
                            self['stride'] = 0;
                            self['pointNum'] = data.length / 3;
                        } else {
                            self['stride'] = t0;
                            self['pointNum'] = data.length / t0;
                        }


                    } else RedGLUtil.throwFunc('RedBuffer : interleaveDefineInfo는 반드시 정의 되어야합니다.')
                    break
                case RedBuffer.ELEMENT_ARRAY_BUFFER:
                    self['pointNum'] = data.length;
                    break
            }
        }
    })();
    /**DOC:
        {
            constructorYn : true,
            title :`RedBuffer`,
            description : `
                RedBuffer Instance 생성자
            `,
            params : {
                redGL : [
                    {type:'RedGL Instance'}
                ],
                key : [
                    {type:'String'},
                    `고유키`
                ],
                data : [
                    {type:'TypedArray'},
                    `버퍼 구성 데이터`
                ],
                bufferType : [
                    {type:'String'},
                    `RedBuffer.ARRAY_BUFFER or RedBuffer.ELEMENT_ARRAY_BUFFER`
                ],
                interleaveDefineInfo : [
                    {type:'Object'},
                    `
                    버퍼의 인터리브 구성 정보
                    RedBuffer.ARRAY_BUFFER 일때만 필요
                    `
                ],
            },
            example : `
                // TODO:
            `,
            return : 'RedBuffer Instance'
        }
    :DOC*/
    RedBuffer = function (redGL, key, data, bufferType, interleaveDefineInfo) {
        // console.log(redGL, key, data, bufferType, interleaveDefineInfo)
        if (!(this instanceof RedBuffer)) return new RedBuffer(redGL, key, data, bufferType, interleaveDefineInfo)
        if (!(redGL instanceof RedGL)) RedGLUtil.throwFunc('RedBuffer : RedGL Instance만 허용됩니다.')
        if (typeof bufferType != 'string') RedGLUtil.throwFunc('RedBuffer : bufferType - 문자열만 허용됩니다.')
        if (typeof key != 'string') RedGLUtil.throwFunc('RedBuffer : key - 문자열만 허용됩니다.')
        if (bufferType == RedBuffer.ARRAY_BUFFER && !interleaveDefineInfo) RedGLUtil.throwFunc('RedBuffer : interleaveDefineInfo를 반드시 정의해야합니다.')
        var tGL = redGL.gl;

        // TODO: 유일키 방어
        if (!redGL['_datas'][bufferType]) redGL['_datas'][bufferType] = {};
        if (redGL['_datas'][bufferType][key]) return redGL['_datas'][bufferType][key]
        else redGL['_datas'][bufferType][key] = this
        /**DOC:
           {
               code : 'PROPERTY',
               title :`key`,
               description : `고유키`,
               example : `
                   // TODO:
               `,
               return : 'String'
           }
       :DOC*/
        this['key'] = key
        /**DOC:
           {
               code : 'PROPERTY',
               title :`data`,
               description : `data`,
               example : `
                   // TODO:
               `,
               return : 'TypedArray'
           }
       :DOC*/
        this['data'] = data
        /**DOC:
           {
               code : 'PROPERTY',
               title :`bufferType`,
               description : `bufferType 상수`,
               example : `
                   // TODO:
               `,
               return : 'RedBuffer.ARRAY_BUFFER or RedBuffer.ELEMENT_ARRAY_BUFFER'
           }
       :DOC*/
        this['bufferType'] = bufferType;
        /**DOC:
           {
               code : 'PROPERTY',
               title :`glArrayType`,
               description : `
               data의 type의 gl.XXX 상수
               ex) gl.FLOAT, gl.BYTE
               `,
               example : `
                   // TODO:
               `,
               return : 'gl.XXX 상수'
           }
       :DOC*/
        this['glArrayType'] = checkGlArrayType(tGL, this['bufferType'], this['data']);
        /**DOC:
           {
               code : 'PROPERTY',
               title :`glBufferType`,
               description : `bufferType에 대응하는 gl.ARRAY_BUFFER or gl.ELEMENT_ARRAY_BUFFER 상수`,
               example : `
                   // TODO:
               `,
               return : 'gl.ARRAY_BUFFER or glELEMENT_ARRAY_BUFFER 상수'
           }
       :DOC*/
        this['glBufferType'] = checkBufferType(tGL, this['bufferType']);
        /**DOC:
           {
               code : 'PROPERTY',
               title :`drawMode`,
               description : `gl.STATIC_DRAW 상수`,
               example : `
                   // TODO:
               `,
               return : 'gl.STATIC_DRAW or gl.DYNAMIC_DRAW'
           }
       :DOC*/
        this['drawMode'] = tGL.STATIC_DRAW;
        parseInterleaveDefineInfo(this, this['bufferType'], this['data'], interleaveDefineInfo);
        /**DOC:
           {
               code : 'PROPERTY',
               title :`webglBuffer`,
               description : `WebGLBuffer`,
               example : `
                   // TODO:
               `,
               return : 'WebGLBuffer'
           }
       :DOC*/
        this['webglBuffer'] = tGL.createBuffer();
        this['_UUID'] = RedGL['makeUUID']();
        /**DOC:
           {
               code : 'PROPERTY',
               title :`upload`,
               description : `
                   버퍼 데이터 갱신
                   기존 버퍼의 타입과 다른 타입의 값이 들어올경우 에러. 
               `,
               params : {
                   data : [
                       {type:'TypedArray'},
                       `갱신 할 데이터`
                   ]
               },
               example : `
                   // TODO:
               `,
               return : 'RedBuffer Instance'
           }
       :DOC*/
        this.upload = function (data) {
            if (this['glArrayType'] == checkGlArrayType(tGL, bufferType, data)) {
                this['data'] = data
                tGL.bindBuffer(this['glBufferType'], this['webglBuffer']);
                tGL.bufferData(this['glBufferType'], this['data'], this['drawMode']);
            } else RedGLUtil.throwFunc('RedBuffer : upload - data형식이 기존 형식과 다름', data)

        }
        this.parseInterleaveDefineInfo = function () {
            parseInterleaveDefineInfo(this, this['bufferType'], this['data'], this['interleaveDefineInfo']);
        }
        this.upload(this['data']);
        // Object.seal(this);
        console.log(this);
    }
    /**DOC:
        {
            code: 'CONST',
            title :`RedBuffer.ARRAY_BUFFER`,
            description : `
                ARRAY_BUFFER 버퍼상수
            `,
            example : `
                // TODO:
            `,
            return : 'RedBuffer Instance'
        }
    :DOC*/
    RedBuffer.ARRAY_BUFFER = 'arrayBuffer';
    /**DOC:
        {
            code: 'CONST',
            title :`RedBuffer.ELEMENT_ARRAY_BUFFER`,
            description : `
                ELEMENT_ARRAY_BUFFER 버퍼상수
            `,
            example : `
                // TODO:
            `,
            return : 'RedBuffer Instance'
        }
    :DOC*/
    RedBuffer.ELEMENT_ARRAY_BUFFER = 'elementArrayBuffer';
    Object.freeze(RedBuffer);
})()
"use strict";
var RedGeometry;
(function () {
    /**DOC:
        {
            constructorYn : true,
            title :`RedGeometry`,
            description : `
                RedGeometry Instance 생성자
            `,
            params : {
                redGL : [
                    {type:'RedGL Instance'}
                ],
                interleaveBuffer : [
                    {type:'RedBuffer'},
                    `interleaveBuffer`
                ],
                indexBuffer : [
                    {type:'RedBuffer'},
                    `indexBuffer`
                ]
            },
            example : `
                // TODO:
            `,
            return : 'RedGeometry Instance'
        }
    :DOC*/
    RedGeometry = function (interleaveBuffer, indexBuffer) {
        if (!(this instanceof RedGeometry)) return new RedGeometry(interleaveBuffer, indexBuffer)
        if (!(interleaveBuffer instanceof RedBuffer)) RedGLUtil.throwFunc('RedGeometry : interleaveBuffer - RedBuffer Instance만 허용.', interleaveBuffer)
        else {
            if (!(interleaveBuffer['bufferType'] == RedBuffer.ARRAY_BUFFER)) {
                RedGLUtil.throwFunc('RedGeometry : interleaveBuffer - RedBuffer.ARRAY_BUFFER 타입만.', interleaveBuffer)
            }
        }
        if(indexBuffer){
            if (!(indexBuffer instanceof RedBuffer)) RedGLUtil.throwFunc('RedGeometry : indexBuffer - RedBuffer Instance만 허용.', indexBuffer)
            else {
                if (!(indexBuffer['bufferType'] == RedBuffer.ELEMENT_ARRAY_BUFFER)) {
                    RedGLUtil.throwFunc('RedGeometry : indexBuffer - RedBuffer.ELEMENT_ARRAY_BUFFER 타입만.', indexBuffer)
                }
            }
        }
      
        /**DOC:
            {
                code : 'PROPERTY',
                title :`interleaveBuffer`,
                description : `
                    interleaveBuffer 정보
                `,
                example : `
                    // TODO:
                `,
                return : 'RedBuffer Instance'
            }
        :DOC*/
        this['interleaveBuffer'] = interleaveBuffer
        /**DOC:
            {
                code : 'PROPERTY',
                title :`indexBuffer`,
                description : `
                    indexBuffer 정보
                `,
                example : `
                    // TODO:
                `,
                return : 'RedBuffer Instance'
            }
        :DOC*/
        this['indexBuffer'] = indexBuffer
        this['_UUID'] = RedGL['makeUUID']();
        Object.freeze(this)
    }
    Object.freeze(RedGeometry);
})()
"use strict";
var RedAmbientLight;
(function () {
    RedAmbientLight = function (redGL, hex, alpha) {
        if (!(this instanceof RedAmbientLight)) return new RedAmbientLight(redGL, hex, alpha);
        // 유니폼 프로퍼티
        this['color'] = new Float32Array(4)
        this['intensity'] = 1
        // 일반 프로퍼티
        this.setColor(hex ? hex : '#ff0000', alpha == undefined ? 0.1 : alpha)
        this['_UUID'] = RedGL['makeUUID']();
        Object.defineProperty(this, 'type', {
            configurable: false,
            writable: false,
            value: RedAmbientLight['type']
        })
        console.log(this)
    }
    RedAmbientLight['type'] = 'RedAmbientLight'
    RedGLUtil['extendsProto'](RedAmbientLight, RedBaseLight);
    Object.freeze(RedAmbientLight)

})();
"use strict";
var RedDirectionalLight;
(function () {
    RedDirectionalLight = function (redGL, hex, alpha) {
        if (!(this instanceof RedDirectionalLight)) return new RedDirectionalLight(redGL, hex, alpha);
        // 유니폼 프로퍼티
        this['color'] = new Float32Array(4)
        this['intensity'] = 1.0
        // 일반 프로퍼티
        this.setColor(hex ? hex : '#fff', alpha==undefined ? 1 : alpha)
        this['x'] = 0
        this['y'] = -1
        this['z'] = 0;
        this['_UUID'] = RedGL['makeUUID']();
        console.log(this.color)
        Object.defineProperty(this, 'type', {
            configurable: false,
            writable: false,
            value: RedDirectionalLight['type']
        })
        this['debugObject'] = RedMesh(redGL, RedBox(redGL,1,1,1), RedColorMaterial(redGL))
        this['debugObject']['drawMode'] = redGL.gl.LINE_STRIP
        console.log(this)
    }
    RedDirectionalLight['type'] = 'RedDirectionalLight'
    RedGLUtil['extendsProto'](RedDirectionalLight, RedBaseLight);
    Object.freeze(RedDirectionalLight)

})()
"use strict";
var RedPointLight;
(function () {
    RedPointLight = function (redGL, hex, alpha) {
        if (!(this instanceof RedPointLight)) return new RedPointLight(redGL, hex, alpha);
        // 유니폼 프로퍼티
        this['color'] = new Float32Array(4)
        this['intensity'] = 1.0
        // 일반 프로퍼티
        this.setColor(hex ? hex : '#fff', alpha==undefined ? 1 : alpha)
        this['x'] = this['y'] = this['z'] = 0;    
        this['radius'] = 1    
        this['_UUID'] = RedGL['makeUUID']();
        Object.defineProperty(this, 'type', {
            configurable: false,
            writable: false,
            value: RedPointLight['type']
        })
        this['debugObject'] = RedMesh(redGL, RedSphere(redGL,1,16,16,16), RedColorMaterial(redGL))
        this['debugObject']['drawMode'] = redGL.gl.LINE_STRIP
        console.log(this)
    }
    RedPointLight['type'] = 'RedPointLight'
    RedGLUtil['extendsProto'](RedPointLight, RedBaseLight);
    Object.freeze(RedPointLight)

})()
"use strict";
var JsonModelLoader;
(function () {
    //TODO:
    JsonModelLoader = function (redGL, key, src, callback) {
        if ((!(this instanceof JsonModelLoader))) return new JsonModelLoader(redGL, key, src, callback)
        console.log('~~~~~~~~~~~')
        var request = new XMLHttpRequest();
        request.open("GET", src);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
            request.onreadystatechange = function () {
                if (request.readyState == 4) {
                    var jsonData;
                    var interleaveData,indexData;
                    var i, len;
                    interleaveData = []
                    indexData = []
                    jsonData = JSON.parse(request.responseText)
                    i = 0, len = jsonData['position'].length / 3
                    for (i; i < len; i++) {
                        interleaveData.push(jsonData['position'][i * 3], jsonData['position'][i * 3 + 1], jsonData['position'][i * 3 + 2])
                        interleaveData.push(jsonData['normal'][i * 3], jsonData['normal'][i * 3 + 1], jsonData['normal'][i * 3 + 2])
                        if(jsonData['uvs'])interleaveData.push(jsonData['uvs'][i * 2], jsonData['uvs'][i * 2 + 1])
                        else interleaveData.push(0,0)

                    }
                    console.log(jsonData)
                    console.log(interleaveData)
                    if (callback) {
                        // TODO: 유일키 방어
                        callback(
                            RedBuffer(
                                redGL,
                                key,
                                new Float32Array(interleaveData),
                                RedBuffer.ARRAY_BUFFER,
                                [{
                                    attributeKey: 'aVertexPosition',
                                    size: 3,
                                    normalize: false
                                },
                                ,
                                {
                                    attributeKey: 'aVertexNormal',
                                    size: 3,
                                    normalize: false
                                },
                                {
                                    attributeKey: 'aTexcoord',
                                    size: 2,
                                    normalize: false
                                }
                                ]
                            ),
                            RedBuffer(
                                redGL,
                                key,
                                new Uint16Array(jsonData['index']),
                                RedBuffer.ELEMENT_ARRAY_BUFFER
                            )
                        )
                    }
                }
            }
        request.send();
    }
    Object.freeze(JsonModelLoader)
})()
"use strict";
var RedMaterial;
(function () {
    var makeProgram;
    RedMaterial = function (redGL) {
        if (!(this instanceof RedMaterial)) return new RedMaterial(redGL);
        this['program'] = makeProgram(redGL)
        // 유니폼 프로퍼티

        this['floatTest'] = 1
        this['floatTest2'] = [1, 2, 3, 4, 5]
        this['intTest'] = 1
        this['intTest2'] = [1, 2, 3, 4, 5]
        this['vec4Test'] = [0, 0, 0, 0]
        this['mat4Test'] = mat4.create()
        // 일반 프로퍼티
        this['_UUID'] = RedGL['makeUUID']();
        this.checkProperty()
        Object.seal(this)
        console.log(this)
    }
    makeProgram = function (redGL) {
        var vSource, fSource;
        vSource = function () {
            /*      
            varying vec4 vColor;
            uniform float uFloatTest;
            uniform float uFloatTest2[10];
            uniform int uIntTest;
            uniform int uIntTest2[10];
            uniform vec4 uVec4Test;
            uniform mat4 uMat4Test;
            void main(void) {
                vColor = aVertexColor;
                vColor.r= sin(uTime*0.01);
                uFloatTest;
                uFloatTest2;
                uIntTest;
                uIntTest2;
                uVec4Test;
                uMat4Test;
                uResolution;
                gl_PointSize = aPointSize;
                gl_Position = uPMatrix * uCameraMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
            }
            */
        }
        fSource = function () {
            /*
            precision mediump float;
            varying vec4 vColor;
            void main(void) {
                gl_FragColor = vColor;
            }
            */
        }
        vSource = RedGLUtil.getStrFromComment(vSource.toString());
        fSource = RedGLUtil.getStrFromComment(fSource.toString());
        return RedProgram(
            redGL,
            'testrProgram',
            RedShader(redGL, 'testVs', RedShader.VERTEX, vSource),
            RedShader(redGL, 'testFS', RedShader.FRAGMENT, fSource)
        )

    }

    RedMaterial.prototype = RedBaseMaterial.prototype
    Object.freeze(RedMaterial)
})();
"use strict";
var RedColorMaterial;
(function () {
    var makeProgram;
    /**DOC:
        {
            constructorYn : true,
            title :`RedColorMaterial`,
            description : `
                RedColorMaterial Instance 생성
            `,
            params : {
                redGL : [
                    {type:'RedGL Instance'}
                ],
                hex : [
                    {type:'hex'},
                    'hex'
                ],
                alpha : [
                    {type:'number'},
                    '알파값'
                ]
            },
            example : `
                RedColorMaterial(RedGL Instance, hex)
            `,
            return : 'RedColorMaterial Instance'
        }
    :DOC*/
    RedColorMaterial = function (redGL, hex, alpha) {
        if (!(this instanceof RedColorMaterial)) return new RedColorMaterial(redGL, hex, alpha);
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        /**DOC:
            {
                title :`color`,
                description : `
                    RedProgram Instance
                    직접설정하지 않도록 유의해야함!
                `,
                return : 'Float32Array'
            }
        :DOC*/
        this['color'] = new Float32Array(4);
        this.setColor(hex ? hex : '#ff0000', alpha == undefined ? 1 : alpha);
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['program'] = makeProgram(redGL);
        this['_UUID'] = RedGL['makeUUID']();
        this.checkProperty()
        // Object.seal(this);
        console.log(this);
    }
    makeProgram = function (redGL) {
        var vSource, fSource;
        vSource = function () {
            /*
            uniform vec4 uColor;
            varying vec4 vColor;
            void main(void) {
                vColor = uColor; 
                gl_PointSize = uPointSize;
                gl_Position = uPMatrix * uCameraMatrix* uMVMatrix * vec4(aVertexPosition, 1.0);
            }
            */
        }
        fSource = function () {
            /*
            precision mediump float;
            varying vec4 vColor;
            void main(void) {
                vec4 finalColor = vColor * vColor.a;
                gl_FragColor = finalColor;
            }
            */
        }
        vSource = RedGLUtil.getStrFromComment(vSource.toString());
        fSource = RedGLUtil.getStrFromComment(fSource.toString());
        // console.log(vSource, fSource)
        return RedProgram(
            redGL,
            'colorProgram',
            RedShader(redGL, 'colorVs', RedShader.VERTEX, vSource),
            RedShader(redGL, 'colorFS', RedShader.FRAGMENT, fSource)
        )
    }
    RedColorMaterial.prototype = RedBaseMaterial.prototype
    /**DOC:
        {
            code : 'METHOD',
            title :`setColor`,
            description : `
                컬러설정
            `,
            params : {
                hex : [
                    {type: 'hex'},
                    'ex) #fff, #ffffff'
                ]
            },
            example : `// TODO:`,
            return : 'RedProgram Instance'
        }
    :DOC*/
    RedColorMaterial.prototype['setColor'] = (function () {
        var t0;
        return function (hex, alpha) {
            hex = hex ? hex : '#ff2211';
            if (alpha == undefined) alpha = 1;
            if (alpha > 1) alpha = 1
            t0 = RedGLUtil.hexToRGB.call(this, hex);
            this['color'][0] = t0[0];
            this['color'][1] = t0[1];
            this['color'][2] = t0[2];
            this['color'][3] = alpha;
        }
    })();
    Object.freeze(RedColorMaterial)
})();
"use strict";
var RedColorPhongMaterial;
(function () {
    var makeProgram;
    /**DOC:
        {
            constructorYn : true,
            title :`RedColorPhongMaterial`,
            description : `
                RedColorPhongMaterial Instance 생성
            `,
            params : {
                redGL : [
                    {type:'RedGL Instance'}
                ],
                color : [
                    {type:'hex'},
                    'hex'
                ],
                alpha : [
                    {type:'number'},
                    '알파값'
                ]
            },
            example: `
            RedColorPhongMaterial(RedGL Instance, hex, alpha, normalTexture, specularTexture)
            `,
            return : 'RedColorPhongMaterial Instance'
        }
    :DOC*/
    RedColorPhongMaterial = function (redGL, hex, alpha, normalTexture, specularTexture) {
        if (!(this instanceof RedColorPhongMaterial)) return new RedColorPhongMaterial(redGL, hex, alpha, normalTexture, specularTexture);
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        /**DOC:
            {
                title :`color`,
                description : `
                    RedProgram Instance
                    직접설정하지 않도록 유의해야함!
                `,
                return : 'RedProgram Instance'
            }
        :DOC*/
        this['color'] = new Float32Array(4);
        /**DOC:
             {
                 title :`normalTexture`,
                 description : `normalTexture`,
                 return : 'RedBitmapTexture'
             }
         :DOC*/
        this['normalTexture'] = normalTexture;
        /**DOC:
            {
                title :`specularTexture`,
                description : `specularTexture`,
                return : 'RedBitmapTexture'
            }
        :DOC*/
        this['specularTexture'] = specularTexture;
        /**DOC:
            {
                title :`shininess`,
                description : `기본값 : 16`,
                return : 'uint'
            }
        :DOC*/
        this['shininess'] = 16
        /**DOC:
            {
                title :`specularPower`,
                description : `기본값 : 1`,
                return : 'uint'
            }
        :DOC*/
        this['specularPower'] = 1
        this.setColor(hex ? hex : '#ff0000', alpha == undefined ? 1 : alpha);
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['program'] = makeProgram(redGL);
        this['_UUID'] = RedGL['makeUUID']();
        this.checkProperty()
        // Object.seal(this);
        console.log(this);
    }
    makeProgram = function (redGL) {
        var vSource, fSource;
        vSource = function () {
            /*
            
            uniform vec4 uColor;
            varying vec4 vColor;
            varying vec4 vVertexPositionEye4;
            void main(void) {
                vColor = uColor; 
                vTexcoord = uAtlascoord.xy + aTexcoord * uAtlascoord.zw;
                vVertexNormal = vec3(uNMatrix * vec4(aVertexNormal,1.0)); 
                vVertexPositionEye4 = uMVMatrix * vec4(aVertexPosition, 1.0);      
                gl_PointSize = uPointSize;
                gl_Position = uPMatrix * uCameraMatrix* vVertexPositionEye4;
            }
            */
        }
        fSource = function () {
            /*
            precision mediump float;
            uniform sampler2D uNormalTexture;
            uniform sampler2D uSpecularTexture;

            uniform float uShininess;
            uniform float uSpecularPower;
            
            varying vec4 vVertexPositionEye4;
            varying vec4 vColor;
            void main(void) {
                vec4 la = uAmbientLightColor * uAmbientLightColor.a;
                vec4 ld = vec4(0.0, 0.0, 0.0, 1.0);
                vec4 ls = vec4(0.0, 0.0, 0.0, 1.0);

                vec4 texelColor = vColor;
                // texelColor.rgb *= texelColor.a;

                vec3 N = normalize(vVertexNormal);
                N = normalize(2.0 * (N + texture2D(uNormalTexture, vTexcoord).rgb  - 0.5));

                vec4 specularLightColor = vec4(1.0, 1.0, 1.0, 1.0);
                float specularTextureValue = 1.0;
                specularTextureValue = texture2D(uSpecularTexture, vTexcoord).r;
                float specular;             

                vec3 L;
                vec3 R;
                highp float lambertTerm;
                for(int i=0; i<DIRETIONAL_MAX; i++){
                    if(i == uDirectionalLightNum) break;
                    L = normalize(-uDirectionalLightPosition[i]);
                    lambertTerm = dot(N,-L);
                    if(lambertTerm > 0.0){
                        ld += uDirectionalLightColor[i] * texelColor * lambertTerm * uDirectionalLightIntensity[i];
                        R = reflect(L, N);
                        specular = pow( max(dot(R, -L), 0.0), uShininess);
                        ls +=  specularLightColor * specular * uSpecularPower * specularTextureValue * uDirectionalLightIntensity[i];
                    }
                }         
                vec3 pointDirection;  
                highp float distanceLength;
                highp float attenuation;
                for(int i=0;i<POINT_MAX;i++){
                    if(i== uPointLightNum) break;
                    pointDirection =  -uPointLightPosition[i] + vVertexPositionEye4.xyz;
                    distanceLength = length(pointDirection);
                    if(uPointLightRadius[i]> distanceLength){
                        attenuation = 1.0 / (0.01 + 0.02 * distanceLength + 0.03 * distanceLength * distanceLength); 
                        L = normalize(pointDirection);
                        lambertTerm = dot(N,-L);
                        if(lambertTerm > 0.0){
                            ld += uPointLightColor[i] * texelColor * lambertTerm * attenuation * uPointLightIntensity[i];
                            R = reflect(L, N);
                            specular = pow( max(dot(R, -L), 0.0), uShininess);
                            ls +=  specularLightColor * specular * uSpecularPower * specularTextureValue * uPointLightIntensity[i] ;
                        }
                    }                          
                }            
                
                vec4 finalColor = la * uAmbientIntensity + ld + ls; 
                finalColor.rgb *= texelColor.a;
                finalColor.a = texelColor.a;
                gl_FragColor = finalColor;
            }
            */
        }
        vSource = RedGLUtil.getStrFromComment(vSource.toString());
        fSource = RedGLUtil.getStrFromComment(fSource.toString());
        // console.log(vSource, fSource)
        return RedProgram(
            redGL,
            'colorPhongProgram',
            RedShader(redGL, 'colorPhongVs', RedShader.VERTEX, vSource),
            RedShader(redGL, 'colorPhongFS', RedShader.FRAGMENT, fSource)
        )
    }
    RedColorPhongMaterial.prototype = RedBaseMaterial.prototype
    /**DOC:
        {
            code : 'METHOD',
            title :`setColor`,
            description : `
                컬러설정
            `,
            params : {
                hex : [
                    {type: 'hex'},
                    'ex) #fff, #ffffff'
                ]
            },
            example : `// TODO:`,
            return : 'RedProgram Instance'
        }
    :DOC*/
    RedColorPhongMaterial.prototype['setColor'] = (function () {
        var t0;
        return function (hex, alpha) {
            hex = hex ? hex : '#ff2211';
            if (alpha == undefined) alpha = 1;
            if (alpha > 1) alpha = 1
            t0 = RedGLUtil.hexToRGB.call(this, hex);
            this['color'][0] = t0[0];
            this['color'][1] = t0[1];
            this['color'][2] = t0[2];
            this['color'][3] = alpha;
        }
    })();
    Object.freeze(RedColorPhongMaterial)
})();
"use strict";
var RedEnvironmentMaterial;
(function () {
    var makeProgram;

    RedEnvironmentMaterial = function (
        redGL,
        diffuseTexture,
        environmentTexture,
        normalTexture,
        specularTexture,
        displacementTexture
    ) {
        if (!(this instanceof RedEnvironmentMaterial)) return new RedEnvironmentMaterial(redGL, diffuseTexture, environmentTexture, normalTexture, specularTexture, displacementTexture);
        if (!(redGL instanceof RedGL)) RedGLUtil.throwFunc('RedEnvironmentMaterial : RedGL Instance만 허용됩니다.')
        if (!(diffuseTexture instanceof RedBitmapTexture)) RedGLUtil.throwFunc('RedEnvironmentMaterial : diffuseTexture - RedBitmapTexture Instance만 허용됩니다.')
        if (environmentTexture && !(environmentTexture instanceof RedBitmapCubeTexture)) RedGLUtil.throwFunc('RedEnvironmentMaterial : environmentTexture - RedBitmapCubeTexture Instance만 허용됩니다.')
        if (normalTexture && !(normalTexture instanceof RedBitmapTexture)) RedGLUtil.throwFunc('RedEnvironmentMaterial : normalTexture - RedBitmapTexture Instance만 허용됩니다.')
        if (specularTexture && !(specularTexture instanceof RedBitmapTexture)) RedGLUtil.throwFunc('RedEnvironmentMaterial : specularTexture - RedBitmapTexture Instance만 허용됩니다.')
        if (displacementTexture && !(displacementTexture instanceof RedBitmapTexture)) RedGLUtil.throwFunc('RedEnvironmentMaterial : displacementTexture - RedBitmapTexture Instance만 허용됩니다.')
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        /**DOC:
            {
                title :`diffuseTexture`,
                description : `diffuseTexture`,
                example : `// TODO:`,
                return : 'RedBitmapTexture'
            }
        :DOC*/
        this['diffuseTexture'] = diffuseTexture;
        /**DOC:
            {
                title :`environmentTexture`,
                description : `environmentTexture`,
                example : `// TODO:`,
                return : 'RedBitmapCubeTexture'
            }
        :DOC*/
        this['environmentTexture'] = environmentTexture;
        /**DOC:
            {
                title :`normalTexture`,
                description : `normalTexture`,
                example : `// TODO:`,
                return : 'RedBitmapTexture'
            }
        :DOC*/
        this['normalTexture'] = normalTexture;

        /**DOC:
            {
                title :`specularTexture`,
                description : `specularTexture`,
                example : `// TODO:`,
                return : 'RedBitmapTexture'
            }
        :DOC*/
        this['specularTexture'] = specularTexture;
        /**DOC:
            {
                title :`shininess`,
                description : `shininess`,
                example : `// TODO:`,
                return : 'RedBitmapTexture'
            }
        :DOC*/
        this['displacementTexture'] = displacementTexture;
        this['shininess'] = 16
        /**DOC:
            {
                title :`specularPower`,
                description : `specularPower`,
                example : `// TODO:`,
                return : 'RedBitmapTexture'
            }
        :DOC*/
        this['specularPower'] = 1
        this['reflectionPower'] = 1
        this['displacementPower'] = 0
        /////////////////////////////////////////
        // 일반 프로퍼티
        /**DOC:
            {
                title :`program`,
                description : `RedProgram Instance`,
                example : `// TODO:`,
                return : 'RedProgram Instance'
            }
        :DOC*/
        this['program'] = makeProgram(redGL);
   
        this['_UUID'] = RedGL['makeUUID']();
        this.checkProperty()
        console.log(this)
        // Object.seal(this)
    }
    makeProgram = function (redGL) {
        var vSource, fSource;
        vSource = function () {
            /*
            varying vec4 vVertexPositionEye4;
            varying vec3 vReflectionCubeCoord;
            uniform sampler2D uDisplacementTexture;
            uniform float uDisplacementPower;

            void main(void) {
                vTexcoord = uAtlascoord.xy + aTexcoord * uAtlascoord.zw;
                vVertexNormal = vec3(uNMatrix * vec4(aVertexNormal,1.0)); 
                vVertexPositionEye4 = vec4(aVertexPosition, 1.0);
                vReflectionCubeCoord = -(uMVMatrix *vec4(aVertexPosition, 0.0)).xyz;
                vVertexPositionEye4.xyz += normalize(vVertexNormal) * texture2D(uDisplacementTexture, vTexcoord).x * uDisplacementPower ;
                
                gl_PointSize = uPointSize;
                gl_Position = uPMatrix * uCameraMatrix * uMVMatrix * vVertexPositionEye4;                
                vVertexPositionEye4 = uMVMatrix * vVertexPositionEye4;
                
            }
            */
        }
        fSource = function () {
            /*
            precision mediump float;
            uniform sampler2D uDiffuseTexture;
            uniform sampler2D uNormalTexture;
            uniform sampler2D uSpecularTexture;
            uniform samplerCube uEnvironmentTexture;
            
            uniform float uShininess;
            uniform float uSpecularPower;
            uniform float uReflectionPower;            
            
            varying vec4 vVertexPositionEye4;
            varying vec3 vReflectionCubeCoord;

            void main(void) {
                
                vec4 la = uAmbientLightColor * uAmbientLightColor.a;
                vec4 ld = vec4(0.0, 0.0, 0.0, 1.0);
                vec4 ls = vec4(0.0, 0.0, 0.0, 1.0);

                vec4 texelColor = texture2D(uDiffuseTexture, vTexcoord);
                texelColor.rgb *= texelColor.a;
                if(texelColor.a ==0.0) discard;

                vec3 N = normalize(vVertexNormal);
                vec4 normalColor = texture2D(uNormalTexture, vTexcoord);
                N = normalize(2.0 * (N + normalColor.rgb - 0.5));

                vec4 reflectionColor = textureCube(uEnvironmentTexture, 2.0 * dot(vReflectionCubeCoord,vVertexNormal) * vVertexNormal - vReflectionCubeCoord);
                texelColor = texelColor * (1.0 - uReflectionPower) + reflectionColor * uReflectionPower;

                vec4 specularLightColor = vec4(1.0, 1.0, 1.0, 1.0);
                float specularTextureValue = 1.0;
                specularTextureValue = texture2D(uSpecularTexture, vTexcoord).r;
                float specular;             

                vec3 L;
                vec3 R;
                highp float lambertTerm;
                for(int i=0; i<DIRETIONAL_MAX; i++){
                    if(i == uDirectionalLightNum) break;
                    L = normalize(-uDirectionalLightPosition[i]);
                    lambertTerm = dot(N,-L);
                    if(lambertTerm > 0.0){
                        ld += uDirectionalLightColor[i] * texelColor * lambertTerm * uDirectionalLightIntensity[i];
                        R = reflect(L, N);
                        specular = pow( max(dot(R, -L), 0.0), uShininess);
                        ls +=  specularLightColor * specular * uSpecularPower * specularTextureValue * uDirectionalLightIntensity[i];
                    }
                }         
                vec3 pointDirection;  
                highp float distanceLength;
                highp float attenuation;
                for(int i=0;i<POINT_MAX;i++){
                    if(i== uPointLightNum) break;
                    pointDirection =  -uPointLightPosition[i] + vVertexPositionEye4.xyz;
                    distanceLength = length(pointDirection);
                    if(uPointLightRadius[i]> distanceLength){
                        attenuation = 1.0 / (0.01 + 0.02 * distanceLength + 0.03 * distanceLength * distanceLength); 
                        L = normalize(pointDirection);
                        lambertTerm = dot(N,-L);
                        if(lambertTerm > 0.0){
                            ld += uPointLightColor[i] * texelColor * lambertTerm * attenuation * uPointLightIntensity[i];
                            R = reflect(L, N);
                            specular = pow( max(dot(R, -L), 0.0), uShininess);
                            ls +=  specularLightColor * specular * uSpecularPower * specularTextureValue * uPointLightIntensity[i] ;
                        }
                    }                          
                }         
                    
                vec4 finalColor = la * uAmbientIntensity + ld + ls; 
                finalColor.rgb *= texelColor.a;
                finalColor.a = texelColor.a;
                gl_FragColor = finalColor;
            }
            */
        }
        vSource = RedGLUtil.getStrFromComment(vSource.toString());
        fSource = RedGLUtil.getStrFromComment(fSource.toString());
        // console.log(vSource, fSource)
        return RedProgram(
            redGL,
            'environmentProgram',
            RedShader(redGL, 'environmentProgramVs', RedShader.VERTEX, vSource),
            RedShader(redGL, 'environmentProgramFS', RedShader.FRAGMENT, fSource)
        )
    }
    RedEnvironmentMaterial.prototype = RedBaseMaterial.prototype
    Object.freeze(RedEnvironmentMaterial)
})();
"use strict";
var RedGridMaterial;
(function () {
    var makeProgram;
    RedGridMaterial = function (redGL) {
        if (!(this instanceof RedGridMaterial)) return new RedGridMaterial(redGL);
        this['program'] = makeProgram(redGL)
        // 유니폼 프로퍼티
        // 일반 프로퍼티
        this['_UUID'] = RedGL['makeUUID']();
        this.checkProperty()
        Object.seal(this)
        console.log(this)
    }
    makeProgram = function (redGL) {
        var vSource, fSource;
        vSource = function () {
            /*
            varying vec4 vColor;
            void main(void) {
                vColor = aVertexColor;
                gl_Position = uPMatrix * uCameraMatrix* uMVMatrix * vec4(aVertexPosition, 1.0);
            }
            */
        }
        fSource = function () {
            /*
            precision mediump float;
            varying vec4 vColor;
            void main(void) {
                gl_FragColor = vColor;
                gl_FragColor.rgb *= vColor.a;
            }
            */
        }
        vSource = RedGLUtil.getStrFromComment(vSource.toString());
        fSource = RedGLUtil.getStrFromComment(fSource.toString());
        return RedProgram(
            redGL,
            'gridMaterialProgram',
            RedShader(redGL, 'gridMaterialVs', RedShader.VERTEX, vSource),
            RedShader(redGL, 'gridMaterialFS', RedShader.FRAGMENT, fSource)
        )

    }

    RedGridMaterial.prototype = RedBaseMaterial.prototype
    Object.freeze(RedGridMaterial)
})();
"use strict";
var RedBitmapMaterial;
(function () {
    var makeProgram;
    /**DOC:
        {
            constructorYn : true,
            title :`RedBitmapMaterial`,
            description : `
                RedBitmapMaterial Instance 생성
            `,
            params : {
                redGL : [
                    {type:'RedGL Instance'}
                ],
                texture : [
                    {type:'RedBitmapMaterial'},
                    'RedBitmapMaterial'
                ]
            },
            return : 'RedBitmapMaterial Instance'
        }
    :DOC*/
    RedBitmapMaterial = function (redGL, diffuseTexture) {
        if (!(this instanceof RedBitmapMaterial)) return new RedBitmapMaterial(redGL, diffuseTexture);
        if (!(redGL instanceof RedGL)) RedGLUtil.throwFunc('RedBitmapMaterial : RedGL Instance만 허용됩니다.')
        if (!(diffuseTexture instanceof RedBitmapTexture) ) RedGLUtil.throwFunc('RedBitmapMaterial : RedBitmapTexture Instance만 허용됩니다.')
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        /**DOC:
            {
                title :`diffuseTexture`,
                description : `diffuseTexture`,
                example : `// TODO:`,
                return : 'RedBitmapMaterial'
            }
        :DOC*/
        this['diffuseTexture'] = diffuseTexture;
        /////////////////////////////////////////
        // 일반 프로퍼티
        /**DOC:
            {
                title :`program`,
                description : `RedProgram Instance`,
                example : `// TODO:`,
                return : 'RedProgram Instance'
            }
        :DOC*/
        this['program'] = makeProgram(redGL);
        
        this['_UUID'] = RedGL['makeUUID']();
        this.checkProperty()
        // Object.seal(this)
        console.log(this)
    }
    makeProgram = function (redGL) {
        var vSource, fSource;
        vSource = function () {
            /*
            void main(void) {
                vTexcoord = uAtlascoord.xy + aTexcoord * uAtlascoord.zw;
                gl_PointSize = uPointSize;
                gl_Position = uPMatrix * uCameraMatrix* uMVMatrix * vec4(aVertexPosition, 1.0);
            }
            */
        }
        fSource = function () {
            /*
            precision mediump float;
            uniform sampler2D uDiffuseTexture;
            void main(void) {
                vec4 texelColor = texture2D(uDiffuseTexture, vTexcoord);
                texelColor.rgb *= texelColor.a;
                if(texelColor.a ==0.0) discard;
                gl_FragColor = texelColor;
            }
            */
        }
        vSource = RedGLUtil.getStrFromComment(vSource.toString());
        fSource = RedGLUtil.getStrFromComment(fSource.toString());
        // console.log(vSource, fSource)
        return RedProgram(
            redGL,
            'bitmapProgram',
            RedShader(redGL, 'bitmapVs', RedShader.VERTEX, vSource),
            RedShader(redGL, 'bitmapFS', RedShader.FRAGMENT, fSource)
        )
    }
    RedBitmapMaterial.prototype = RedBaseMaterial.prototype
    Object.freeze(RedBitmapMaterial)
})();
"use strict";
var RedPointBitmapMaterial;
(function () {
    var makeProgram;
    /**DOC:
        {
            constructorYn : true,
            title :`RedPointBitmapMaterial`,
            description : `
                RedPointBitmapMaterial Instance 생성
            `,
            params : {
                redGL : [
                    {type:'RedGL Instance'}
                ],
                texture : [
                    {type:'RedPointBitmapMaterial'},
                    'RedPointBitmapMaterial'
                ]
            },
            return : 'RedPointBitmapMaterial Instance'
        }
    :DOC*/
    RedPointBitmapMaterial = function (redGL, diffuseTexture) {
        if (!(this instanceof RedPointBitmapMaterial)) return new RedPointBitmapMaterial(redGL, diffuseTexture);
        if (!(redGL instanceof RedGL)) RedGLUtil.throwFunc('RedPointBitmapMaterial : RedGL Instance만 허용됩니다.')
        if (!(diffuseTexture instanceof RedBitmapTexture)) RedGLUtil.throwFunc('RedPointBitmapMaterial : RedBitmapTexture Instance만 허용됩니다.')
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        /**DOC:
            {
                title :`diffuseTexture`,
                description : `diffuseTexture`,
                example : `// TODO:`,
                return : 'RedPointBitmapMaterial'
            }
        :DOC*/
        this['diffuseTexture'] = diffuseTexture;
        /////////////////////////////////////////
        // 일반 프로퍼티
        /**DOC:
            {
                title :`program`,
                description : `RedProgram Instance`,
                example : `// TODO:`,
                return : 'RedProgram Instance'
            }
        :DOC*/
        this['program'] = makeProgram(redGL);
        this['alphaTest'] = 0.00001
        this['_UUID'] = RedGL['makeUUID']();
        this.checkProperty()
        // Object.seal(this)
        console.log(this)
    }
    makeProgram = function (redGL) {
        var vSource, fSource;
        vSource = function () {
            /*
            void main(void) {
                gl_PointSize = aPointSize;
                gl_Position = uPMatrix * uCameraMatrix* uMVMatrix * vec4(aVertexPosition, 1.0);
            }
            */
        }
        fSource = function () {
            /*
            precision mediump float;
            uniform sampler2D uDiffuseTexture;
            uniform float uAlphaTest;
            void main(void) {
                vec4 texelColor = texture2D(uDiffuseTexture, vec2(gl_PointCoord.x, - gl_PointCoord.y));
                texelColor.rgb *= texelColor.a;
                if(texelColor.a < uAlphaTest) discard;
                gl_FragColor = texelColor;
            }
            */
        }
        vSource = RedGLUtil.getStrFromComment(vSource.toString());
        fSource = RedGLUtil.getStrFromComment(fSource.toString());
        // console.log(vSource, fSource)
        return RedProgram(
            redGL,
            'pointBitmapProgram',
            RedShader(redGL, 'pointBitmapVs', RedShader.VERTEX, vSource),
            RedShader(redGL, 'pointBitmapFS', RedShader.FRAGMENT, fSource)
        )
    }
    RedPointBitmapMaterial.prototype = RedBaseMaterial.prototype
    Object.freeze(RedPointBitmapMaterial)
})();
"use strict";
var RedPointColorMaterial;
(function () {
    var makeProgram;
    /**DOC:
        {
            constructorYn : true,
            title :`RedPointColorMaterial`,
            description : `
                RedPointColorMaterial Instance 생성
            `,
            params : {
                redGL : [
                    {type:'RedGL Instance'}
                ],
                texture : [
                    {type:'RedPointColorMaterial'},
                    'RedPointColorMaterial'
                ]
            },
            return : 'RedPointColorMaterial Instance'
        }
    :DOC*/
    RedPointColorMaterial = function (redGL) {
        if (!(this instanceof RedPointColorMaterial)) return new RedPointColorMaterial(redGL);
        if (!(redGL instanceof RedGL)) RedGLUtil.throwFunc('RedPointColorMaterial : RedGL Instance만 허용됩니다.')
        /////////////////////////////////////////
        // 유니폼 프로퍼티
    
        /////////////////////////////////////////
        // 일반 프로퍼티
        /**DOC:
            {
                title :`program`,
                description : `RedProgram Instance`,
                example : `// TODO:`,
                return : 'RedProgram Instance'
            }
        :DOC*/
        this['program'] = makeProgram(redGL);
        this['_UUID'] = RedGL['makeUUID']();
        this.checkProperty()
        // Object.seal(this)
        console.log(this)
    }
    makeProgram = function (redGL) {
        var vSource, fSource;
        vSource = function () {
            /*
            varying vec4 vColor;
            void main(void) {
                gl_PointSize = aPointSize;
                vColor = aVertexColor;
                gl_Position = uPMatrix * uCameraMatrix* uMVMatrix * vec4(aVertexPosition, 1.0);
            }
            */
        }
        fSource = function () {
            /*
            precision mediump float;
            varying vec4 vColor;
            void main(void) {
                gl_FragColor = vColor;
            }
            */
        }
        vSource = RedGLUtil.getStrFromComment(vSource.toString());
        fSource = RedGLUtil.getStrFromComment(fSource.toString());
        // console.log(vSource, fSource)
        return RedProgram(
            redGL,
            'pointColorProgram',
            RedShader(redGL, 'pointColorVs', RedShader.VERTEX, vSource),
            RedShader(redGL, 'pointColorFS', RedShader.FRAGMENT, fSource)
        )
    }
    RedPointColorMaterial.prototype = RedBaseMaterial.prototype
    Object.freeze(RedPointColorMaterial)
})();
"use strict";
var RedSkyBoxMaterial;
(function () {
    var makeProgram;

    RedSkyBoxMaterial = function (redGL, skyboxTexture) {
        if (!(this instanceof RedSkyBoxMaterial)) return new RedSkyBoxMaterial(redGL, skyboxTexture);
        if (!(redGL instanceof RedGL)) RedGLUtil.throwFunc('RedSkyBoxMaterial : RedGL Instance만 허용됩니다.')
        if (skyboxTexture && !(skyboxTexture instanceof RedBitmapCubeTexture)) RedGLUtil.throwFunc('RedSkyBoxMaterial : skyboxTexture - RedBitmapCubeTexture Instance만 허용됩니다.')
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        /**DOC:
            {
                title :`skyboxTexture`,
                description : `skyboxTexture`,
                example : `// TODO:`,
                return : 'RedBitmapCubeTexture'
            }
        :DOC*/
        this['skyboxTexture'] = skyboxTexture;
        /////////////////////////////////////////
        // 일반 프로퍼티
        /**DOC:
            {
                title :`program`,
                description : `RedProgram Instance`,
                example : `// TODO:`,
                return : 'RedProgram Instance'
            }
        :DOC*/
        this['program'] = makeProgram(redGL);
        this['_UUID'] = RedGL['makeUUID']();
        this.checkProperty()
        console.log(this)
        // Object.seal(this)
    }
    makeProgram = function (redGL) {
        var vSource, fSource;
        vSource = function () {
            /*
            varying vec3 vReflectionCubeCoord;
            void main(void) {
                vReflectionCubeCoord = (uMVMatrix *vec4(-aVertexPosition, 0.0)).xyz;
                gl_Position = uPMatrix * uCameraMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
            }
            */
        }
        fSource = function () {
            /*
            precision mediump float;
            uniform samplerCube uSkyboxTexture;
            
            varying vec3 vReflectionCubeCoord;
            void main(void) {
                vec4 texelColor = textureCube(uSkyboxTexture, vReflectionCubeCoord);
                gl_FragColor = texelColor;
            }
            */
        }
        vSource = RedGLUtil.getStrFromComment(vSource.toString());
        fSource = RedGLUtil.getStrFromComment(fSource.toString());
        // console.log(vSource, fSource)
        return RedProgram(
            redGL,
            'skyboxProgram',
            RedShader(redGL, 'skyboxProgramVs', RedShader.VERTEX, vSource),
            RedShader(redGL, 'skyboxProgramFS', RedShader.FRAGMENT, fSource)
        )
    }
    RedSkyBoxMaterial.prototype = RedBaseMaterial.prototype
    Object.freeze(RedSkyBoxMaterial)
})();
"use strict";
var RedStandardMaterial;
(function () {
    var makeProgram;

    RedStandardMaterial = function (redGL, diffuseTexture, normalTexture, specularTexture) {
        if (!(this instanceof RedStandardMaterial)) return new RedStandardMaterial(redGL, diffuseTexture, normalTexture, specularTexture);
        if (!(redGL instanceof RedGL)) RedGLUtil.throwFunc('RedStandardMaterial : RedGL Instance만 허용됩니다.')
        if (!(diffuseTexture instanceof RedBitmapTexture)) RedGLUtil.throwFunc('RedStandardMaterial : diffuseTexture - RedBitmapTexture Instance만 허용됩니다.')
        if (normalTexture && !(normalTexture instanceof RedBitmapTexture)) RedGLUtil.throwFunc('RedStandardMaterial : normalTexture - RedBitmapTexture Instance만 허용됩니다.')
        if (specularTexture && !(specularTexture instanceof RedBitmapTexture)) RedGLUtil.throwFunc('RedStandardMaterial : specularTexture - RedBitmapTexture Instance만 허용됩니다.')
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        /**DOC:
            {
                title :`diffuseTexture`,
                description : `diffuseTexture`,
                example : `// TODO:`,
                return : 'RedBitmapTexture'
            }
        :DOC*/
        this['diffuseTexture'] = diffuseTexture;
        /**DOC:
            {
                title :`normalTexture`,
                description : `normalTexture`,
                example : `// TODO:`,
                return : 'RedBitmapTexture'
            }
        :DOC*/
        this['normalTexture'] = normalTexture;
        /**DOC:
            {
                title :`specularTexture`,
                description : `specularTexture`,
                example : `// TODO:`,
                return : 'RedBitmapTexture'
            }
        :DOC*/
        this['specularTexture'] = specularTexture;
        /**DOC:
            {
                title :`shininess`,
                description : `shininess`,
                example : `// TODO:`,
                return : 'RedBitmapTexture'
            }
        :DOC*/
        this['shininess'] = 16
        /**DOC:
            {
                title :`specularPower`,
                description : `specularPower`,
                example : `// TODO:`,
                return : 'RedBitmapTexture'
            }
        :DOC*/
        this['specularPower'] = 1
        /////////////////////////////////////////
        // 일반 프로퍼티
        /**DOC:
            {
                title :`program`,
                description : `RedProgram Instance`,
                example : `// TODO:`,
                return : 'RedProgram Instance'
            }
        :DOC*/
        this['program'] = makeProgram(redGL);
     
        this['_UUID'] = RedGL['makeUUID']();
        this.checkProperty()
        console.log(this)
        // Object.seal(this)
    }
    makeProgram = function (redGL) {
        var vSource, fSource;
        vSource = function () {
            /*
            varying vec4 vVertexPositionEye4;
            void main(void) {
                vTexcoord = uAtlascoord.xy + aTexcoord * uAtlascoord.zw;
                vVertexNormal = vec3(uNMatrix * vec4(aVertexNormal,1.0)); 
                vVertexPositionEye4 = uMVMatrix * vec4(aVertexPosition, 1.0);         
          
                gl_PointSize = uPointSize;
                gl_Position = uPMatrix * uCameraMatrix * vVertexPositionEye4;
            }
            */
        }
        fSource = function () {
            /*
            precision mediump float;
            uniform sampler2D uDiffuseTexture;
            uniform sampler2D uNormalTexture;
            uniform sampler2D uSpecularTexture;

            uniform float uShininess;
            uniform float uSpecularPower;
            
            varying vec4 vVertexPositionEye4;
       
            void main(void) {
                vec4 la = uAmbientLightColor * uAmbientLightColor.a;
                vec4 ld = vec4(0.0, 0.0, 0.0, 1.0);
                vec4 ls = vec4(0.0, 0.0, 0.0, 1.0);

                vec4 texelColor = texture2D(uDiffuseTexture, vTexcoord);
                texelColor.rgb *= texelColor.a;
                if(texelColor.a ==0.0) discard;

                vec3 N = normalize(vVertexNormal);
                N = normalize(2.0 * (N + texture2D(uNormalTexture, vTexcoord).rgb  - 0.5));

                vec4 specularLightColor = vec4(1.0, 1.0, 1.0, 1.0);
                float specularTextureValue = 1.0;
                specularTextureValue = texture2D(uSpecularTexture, vTexcoord).r;
                float specular;             

                vec3 L;
                vec3 R;
                highp float lambertTerm;
                for(int i=0; i<DIRETIONAL_MAX; i++){
                    if(i == uDirectionalLightNum) break;
                    L = normalize(-uDirectionalLightPosition[i]);
                    lambertTerm = dot(N,-L);
                    if(lambertTerm > 0.0){
                        ld += uDirectionalLightColor[i] * texelColor * lambertTerm * uDirectionalLightIntensity[i];
                        R = reflect(L, N);
                        specular = pow( max(dot(R, -L), 0.0), uShininess);
                        ls +=  specularLightColor * specular * uSpecularPower * specularTextureValue * uDirectionalLightIntensity[i];
                    }
                }         
                vec3 pointDirection;  
                highp float distanceLength;
                highp float attenuation;
                for(int i=0;i<POINT_MAX;i++){
                    if(i== uPointLightNum) break;
                    pointDirection =  -uPointLightPosition[i] + vVertexPositionEye4.xyz;
                    distanceLength = length(pointDirection);
                    if(uPointLightRadius[i]> distanceLength){
                        attenuation = 1.0 / (0.01 + 0.02 * distanceLength + 0.03 * distanceLength * distanceLength); 
                        L = normalize(pointDirection);
                        lambertTerm = dot(N,-L);
                        if(lambertTerm > 0.0){
                            ld += uPointLightColor[i] * texelColor * lambertTerm * attenuation * uPointLightIntensity[i];
                            R = reflect(L, N);
                            specular = pow( max(dot(R, -L), 0.0), uShininess);
                            ls +=  specularLightColor * specular * uSpecularPower * specularTextureValue * uPointLightIntensity[i] ;
                        }
                    }                          
                }            
                
                vec4 finalColor = la * uAmbientIntensity + ld + ls; 
                finalColor.rgb *= texelColor.a;
                finalColor.a = texelColor.a;
                gl_FragColor = finalColor;
            }
            */
        }
        vSource = RedGLUtil.getStrFromComment(vSource.toString());
        fSource = RedGLUtil.getStrFromComment(fSource.toString());
        // console.log(vSource, fSource)
        return RedProgram(
            redGL,
            'standardProgram',
            RedShader(redGL, 'standardProgramVs', RedShader.VERTEX, vSource),
            RedShader(redGL, 'standardProgramFS', RedShader.FRAGMENT, fSource)
        )
    }
    RedStandardMaterial.prototype = RedBaseMaterial.prototype
    Object.freeze(RedStandardMaterial)
})();
"use strict";
var RedAxis;
(function () {
    /**DOC:
        {
            constructorYn : true,
            title :`RedAxis`,
            description : `
                RedAxis Instance 생성기
            `,
            params : {
                redGL : [
                    {type:'RedGL Instance'}
                ],
            },
            example : `
                var tScene;
                tScene = RedScene();
                tScene['axis'] = RedAxis(redGL Instance)
            `,
            return : 'RedAxis Instance'
        }
    :DOC*/
    RedAxis = function (redGL) {
        if (!(this instanceof RedAxis)) return new RedAxis(redGL);
        if (!(redGL instanceof RedGL)) RedGLUtil.throwFunc('RedAxis : RedGL Instance만 허용됩니다.')
        var root;
        var xAxis, yAxis, zAxis;
        RedBaseObject3D['build'].call(this, redGL.gl)
        //
        root = RedMesh(redGL, RedBox(redGL), RedColorMaterial(redGL, '#ff0000'))
        xAxis = RedMesh(redGL, RedBox(redGL), RedColorMaterial(redGL, '#ff0000'))
        xAxis.scaleX = xAxis.scaleY = xAxis.scaleZ = 0.5
        xAxis.scaleX = 10
        root.x = 5
        xAxis.x = -5
        root['children'].push(xAxis)
        this['children'].push(root)
        //
        root = RedMesh(redGL, RedBox(redGL), RedColorMaterial(redGL, '#00ff00'))
        yAxis = RedMesh(redGL, RedBox(redGL), RedColorMaterial(redGL, '#00ff00'))
        yAxis.scaleX = yAxis.scaleY = yAxis.scaleZ = 0.5
        yAxis.scaleY = 10
        root.y = 5
        yAxis.y = -5
        root['children'].push(yAxis)
        this['children'].push(root)
        //
        root = RedMesh(redGL, RedBox(redGL), RedColorMaterial(redGL, '#0000ff'))
        zAxis = RedMesh(redGL, RedBox(redGL), RedColorMaterial(redGL, '#0000ff'))
        zAxis.scaleX = zAxis.scaleY = zAxis.scaleZ = 0.5
        zAxis.scaleZ = 10
        root.z = 5
        zAxis.z = -5
        //
        root['children'].push(zAxis)
        this['children'].push(root)
        //
        this['_UUID'] = RedGL['makeUUID']();
        // Object.seal(this)
    }
    /**DOC:
        {
            extendDoc : 'RedBaseContainer'
        }
    :DOC*/
    RedGLUtil['extendsProto'](RedAxis, RedBaseContainer);
    /**DOC:
        {
            extendDoc : 'RedBaseObject3D'
        }
    :DOC*/
    RedGLUtil['extendsProto'](RedAxis, RedBaseObject3D);
    Object.freeze(RedAxis);
})();
"use strict";
var RedGrid;
(function () {
    /**DOC:
        {
            constructorYn : true,
            title :`RedGrid`,
            description : `
                RedGrid Instance 생성기
            `,
            params : {
                redGL : [
                    {type:'RedGL Instance'}
                ],
                size : [
                    {type:'uint'},
                    `격자 크기`
                ],
                divisions : [
                    {type:'uint'},
                    `격자 수`
                ]
            },
            example : `
                var tScene;
                tScene = RedScene();
                tScene['grid'] = RedGrid(redGL Instance)
            `,
            return : 'RedGrid Instance'
        }
    :DOC*/
    RedGrid = function (redGL, size, divisions, color1, color2) {
        if (!(this instanceof RedGrid)) return new RedGrid(redGL, size, divisions, color1, color2);
        if (!(redGL instanceof RedGL)) RedGLUtil.throwFunc('RedGrid : RedGL Instance만 허용됩니다.')

        var tGL;
        tGL = redGL.gl;
        RedBaseObject3D['build'].call(this, tGL)
        var interleaveData = []

        size = size || 100;
        divisions = divisions || 100;
        color1 = [0, 0, 0, 0.5];
        color2 = [1, 1, 1, 0.5]

        var center = divisions / 2;
        var step = size / divisions;
        var halfSize = size / 2;

        for (var i = 0, j = 0, k = - halfSize; i <= divisions; i++ , k += step) {

            var color = i === center ? color1 : color2;
            interleaveData.push(- halfSize, 0, k);
            interleaveData.push(color[0], color[1], color[2], color[3])
            interleaveData.push(halfSize, 0, k);
            interleaveData.push(color[0], color[1], color[2], color[3])
            interleaveData.push(k, 0, - halfSize);
            interleaveData.push(color[0], color[1], color[2], color[3])
            interleaveData.push(k, 0, halfSize)
            interleaveData.push(color[0], color[1], color[2], color[3])


        }
        var interleaveBuffer
        interleaveBuffer = RedBuffer(
            redGL,
            'gridInterleaveBuffer_' + divisions,
            new Float32Array(interleaveData),
            RedBuffer.ARRAY_BUFFER, [{
                attributeKey: 'aVertexPosition',
                size: 3,
                normalize: false
            },
            {
                attributeKey: 'aVertexColor',
                size: 4,
                normalize: false
            }
            ]
        )
        this['geometry'] = RedGeometry(interleaveBuffer);
        this['material'] = RedGridMaterial(redGL);
        /**DOC:
		{
            title :`drawMode`,
            description : `
                기본값 : gl.LINES
            `,
            return : 'gl 상수'
		}
	    :DOC*/
        this['drawMode'] = tGL.LINES
        this['_UUID'] = RedGL['makeUUID']();
        // Object.seal(this)
    }
    /**DOC:
        {
            extendDoc : 'RedBaseContainer'
        }
    :DOC*/
    RedGLUtil['extendsProto'](RedGrid, RedBaseContainer);
    /**DOC:
        {
            extendDoc : 'RedBaseObject3D'
        }
    :DOC*/
    RedGLUtil['extendsProto'](RedGrid, RedBaseObject3D);
    Object.freeze(RedGrid);
})();
"use strict";
var RedMesh;
(function () {
    /**DOC:
        {
            constructorYn : true,
            title :`RedMesh`,
            description : `
                RedMesh Instance 생성기
            `,
            params : {
                redGL : [
                    {type:'RedGL Instance'}
                ],
                geometry : [
                    {type:'RedGeometry'},
                    `geometry`
                ],
                material : [
                    {type:'RedBaseMaterial 확장 Instance'},
                    `material`
                ]
            },
            example : `
                var tScene;
                var tMesh;
                tScene = RedScene();
                tMesh = RedMesh(RedGL Instance, RedBox(RedGL Instance), RedColorMaterial(RedGL Instance, '#ff0000'));
                tScene.addChild(tMesh);
            `,
            return : 'RedMesh Instance'
        }
    :DOC*/
    RedMesh = function (redGL, geometry, material) {
        if (!(this instanceof RedMesh)) return new RedMesh(redGL, geometry, material);
        if (!(redGL instanceof RedGL)) RedGLUtil.throwFunc('RedMesh : RedGL Instance만 허용됩니다.')
        if (!(geometry instanceof RedGeometry)) RedGLUtil.throwFunc('RedMesh : RedGeometry Instance만 허용됩니다.')
        if (!(material instanceof RedBaseMaterial)) RedGLUtil.throwFunc('RedMesh : RedBaseMaterial 확장 Instance만 허용됩니다.')
        var tGL;
        tGL = redGL.gl;
        RedBaseObject3D['build'].call(this, tGL)
        /**DOC:
		{
            title :`geometry`,
            description : `geometry`,
			return : 'RedGeometry'
		}
	    :DOC*/
        this['geometry'] = geometry;
        /**DOC:
		{
            title :`material`,
            description : `material`,
            return : 'RedBaseMaterial 확장 Instance'
		}
	    :DOC*/
        this['material'] = material;

        this['_UUID'] = RedGL['makeUUID']();
        // Object.seal(this)
    }
    /**DOC:
        {
            extendDoc : 'RedBaseContainer'
        }
    :DOC*/
    RedGLUtil['extendsProto'](RedMesh, RedBaseContainer);
    /**DOC:
        {
            extendDoc : 'RedBaseObject3D'
        }
    :DOC*/
    RedGLUtil['extendsProto'](RedMesh, RedBaseObject3D);
    Object.freeze(RedMesh);
})();
"use strict";
var RedLine;
(function () {
    /**DOC:
        {
            constructorYn : true,
            title :`RedLine`,
            description : `
                RedLine Instance 생성기
            `,
            params : {
                redGL : [
                    {type:'RedGL Instance'}
                ],
                material : [
                    {type:'RedBaseMaterial 확장 Instance'},
                    `material`
                ]
            },
            example : `
            var tScene;
            var tLine;
            var tX, tY, tZ;
            var i;
            tScene = RedScene();
            i = 3 * 20;
            tLine = RedLine(redGL Instance, RedColorMaterial(redGL Instance))
            tX = tY = tZ = 0
            while (i--) {
                tX += Math.random() * 0.5
                tY += Math.random() * 0.5
                tZ += Math.random() * 0.5
                tLine.addPoint(tX, tY, tZ)
            }
            tLine.upload()
            tScene.addChild(tLine)
            `,
            return : 'RedLine Instance'
        }
    :DOC*/
    RedLine = function (redGL, material) {
        if (!(this instanceof RedLine)) return new RedLine(redGL, material);
        if (!(redGL instanceof RedGL)) RedGLUtil.throwFunc('RedLine : RedGL Instance만 허용됩니다.')
        if (!(material instanceof RedColorMaterial)) RedGLUtil.throwFunc('RedLine : RedColorMaterial Instance만 허용됩니다.')
        var tGL;
        var interleaveData, indexData
        var interleaveBuffer, indexBuffer
        interleaveData = [];
        indexData = [];
        this['_UUID'] = RedGL['makeUUID']();
        interleaveBuffer = RedBuffer(
            redGL,
            'RedLine_InterleaveBuffer_' + this['_UUID'],
            new Float32Array(interleaveData),
            RedBuffer.ARRAY_BUFFER, [
                {
                    attributeKey: 'aVertexPosition',
                    size: 3,
                    normalize: false
                }
            ]
        )
        indexBuffer = RedBuffer(
            redGL,
            'RedLine_indexBuffer_' + this['_UUID'],
            new Uint16Array(indexData),
            RedBuffer.ELEMENT_ARRAY_BUFFER
        )

        /**DOC:
		{
            title :`addPoint`,
            description : `
                라인포인트 추가
            `,
            parmas : {
                x : [{type:'Number'}],
                y : [{type:'Number'}],
                z : [{type:'Number'}]
            },
			return : 'void'
		}
	    :DOC*/
        this['addPoint'] = function (x, y, z) {
            var t = interleaveData.length / 3
            interleaveData.push(x, y, z)
            indexData.push(t)
        }
        /**DOC:
		{
            title :`upload`,
            description : `
                addPoint로 포인트 추가후 실제 버퍼 반영할떄 사용
            `,
			return : 'void'
		}
	    :DOC*/
        this['upload'] = function () {
            interleaveBuffer['upload'](new Float32Array(interleaveData));
            indexBuffer['upload'](new Uint16Array(indexData));
            interleaveBuffer.parseInterleaveDefineInfo();
            indexBuffer.parseInterleaveDefineInfo();
        }

        tGL = redGL.gl;
        RedBaseObject3D['build'].call(this, tGL)
        this['geometry'] = RedGeometry(interleaveBuffer, indexBuffer);
        /**DOC:
		{
            title :`material`,
            description : `material`,
            return : 'RedBaseMaterial 확장 Instance'
		}
	    :DOC*/
        this['material'] = material;
        /**DOC:
		{
            title :`drawMode`,
            description : `
                기본값 : gl.LINE_STRIP
            `,
            return : 'gl 상수'
		}
	    :DOC*/
        this['drawMode'] = tGL.LINE_STRIP

        // Object.seal(RedLine);
        // console.log(this);
    }
    /**DOC:
        {
            extendDoc : 'RedBaseContainer'
        }
    :DOC*/
    RedGLUtil['extendsProto'](RedLine, RedBaseContainer);
    /**DOC:
        {
            extendDoc : 'RedBaseObject3D'
        }
    :DOC*/
    RedGLUtil['extendsProto'](RedLine, RedBaseObject3D);
    Object.freeze(RedLine);
})();
"use strict";
var RedSkyBox;
(function () {
    /**DOC:
        {
            constructorYn : true,
            title :`RedSkyBox`,
            description : `
                RedSkyBox Instance 생성기
            `,
            params : {
                redGL : [
                    {type:'RedGL Instance'}
                ],
                srcList : [
                    {type:'Array'},
                    `스카이박스 이미지 리스트`
                ]
            },
            example : `
                var tScene3D;
                tScene3D = RedScene()
                tScene3D.skyBox = RedSkyBox(RedGL Instance, [
                    'asset/cubemap/posx.png',
                    'asset/cubemap/negx.png',
                    'asset/cubemap/posy.png',
                    'asset/cubemap/negy.png',
                    'asset/cubemap/posz.png',
                    'asset/cubemap/negz.png'
                ])
            `,
            return : 'RedSkyBox Instance'
        }
    :DOC*/
    RedSkyBox = function (redGL, srcList) {
        if (!(this instanceof RedSkyBox)) return new RedSkyBox(redGL, srcList);
        if (!(redGL instanceof RedGL)) RedGLUtil.throwFunc('RedSkyBox : RedGL Instance만 허용됩니다.')
        var tGL;
        tGL = redGL.gl;
        RedBaseObject3D['build'].call(this, tGL)
        this['geometry'] = RedBox(redGL);
        this['material'] = RedSkyBoxMaterial(redGL, RedBitmapCubeTexture(redGL, srcList));
        this['_UUID'] = RedGL['makeUUID']();
        // Object.seal(this)
    }
    /**DOC:
        {
            extendDoc : 'RedBaseObject3D'
        }
    :DOC*/
    RedGLUtil['extendsProto'](RedSkyBox, RedBaseObject3D);
    Object.freeze(RedSkyBox);
})();
"use strict";
var RedSprite3D;
(function () {
    /**DOC:
        {
            constructorYn : true,
            title :`RedSprite3D`,
            description : `
                RedSprite3D Instance 생성기
            `,
            params : {
                redGL : [
                    {type:'RedGL Instance'}
                ],
                material : [
                    {type:'RedBaseMaterial 확장 Instance'}
                ]
            },
            example : `
                var tScene;
                var tSprite3D;
                tScene = RedScene();
                tSprite3D = RedSprite3D(RedGL Instance, RedColorMaterial(RedGL Instance))
                tScene.addChild(tSprite3D)
            `,
            return : 'RedSprite3D Instance'
        }
    :DOC*/
    RedSprite3D = function (redGL, material) {
        if (!(this instanceof RedSprite3D)) return new RedSprite3D(redGL, material);
        if (!(redGL instanceof RedGL)) RedGLUtil.throwFunc('RedSprite3D : RedGL Instance만 허용됩니다.')
        if (!(material instanceof RedBaseMaterial)) RedGLUtil.throwFunc('RedSprite3D : RedBaseMaterial 확장 Instance만 허용됩니다.')
        var tGL;
        tGL = redGL.gl;
        RedBaseObject3D['build'].call(this, tGL)
        this['geometry'] = RedBox(redGL, 1, 1, 0);
        /**DOC:
		{
            title :`material`,
            description : `material`,
            return : 'RedBaseMaterial 확장 Instance'
		}
	    :DOC*/
        this['material'] = material;
        this['_UUID'] = RedGL['makeUUID']();
        // Object.seal(this)
    }
    /**DOC:
        {
            extendDoc : 'RedBaseContainer'
        }
    :DOC*/
    RedGLUtil['extendsProto'](RedSprite3D, RedBaseContainer);
    /**DOC:
        {
            extendDoc : 'RedBaseObject3D'
        }
    :DOC*/
    RedGLUtil['extendsProto'](RedSprite3D, RedBaseObject3D);
    Object.freeze(RedSprite3D);
})();
"use strict";
var RedPointUnit;
(function () {
    /**DOC:
        {
            constructorYn : true,
            title :`RedPointUnit`,
            description : `
                RedPointUnit Instance 생성기
            `,
            params : {
                geometry : [
                    {type:'RedGeometry'},
                    `geometry`
                ],
                material : [
                    {type:'RedBaseMaterial 확장 Instance'},
                    `material`
                ]
            },
            return : 'RedProgram Instance'
        }
    :DOC*/
    RedPointUnit = function (redGL, interleaveData, interleaveDefineInfo, material) {
        if (!(this instanceof RedPointUnit)) return new RedPointUnit(redGL, interleaveData, interleaveDefineInfo, material);
        var tGL;
        tGL = redGL.gl
        RedBaseObject3D['build'].call(this, tGL)
        this['_UUID'] = RedGL['makeUUID']();
        var interleaveBuffer
        interleaveBuffer = RedBuffer(
            redGL,
            'RedPointUnit_' + this['_UUID'],
            interleaveData,
            RedBuffer.ARRAY_BUFFER,
            interleaveDefineInfo
        )
        this['geometry'] = RedGeometry(interleaveBuffer)
        this['material'] = material
        this['drawMode'] = tGL.POINTS
        // Object.seal(this)
    }
    RedGLUtil['extendsProto'](RedPointUnit, RedBaseContainer);
    RedGLUtil['extendsProto'](RedPointUnit, RedBaseObject3D);
    Object.freeze(RedPointUnit);
})();
"use strict";
var RedBox;
(function () {
    var makeData;
    makeData = (function () {
        var numberOfVertices;
        var groupStart;
        var buildPlane;
        var tType;
        buildPlane = function (interleaveData, indexData, u, v, w, udir, vdir, width, height, depth, gridX, gridY) {
            var segmentWidth = width / gridX;
            var segmentHeight = height / gridY;
            var widthHalf = width / 2;
            var heightHalf = height / 2;
            var depthHalf = depth / 2;
            var gridX1 = gridX + 1;
            var gridY1 = gridY + 1;
            var vertexCounter = 0;
            var groupCount = 0;
            var ix, iy;
            var vector = []
            // generate vertices, normals and uvs
            for (iy = 0; iy < gridY1; iy++) {
                var y = iy * segmentHeight - heightHalf;
                for (ix = 0; ix < gridX1; ix++) {
                    var x = ix * segmentWidth - widthHalf;
                    // set values to correct vector component
                    vector[u] = x * udir;
                    vector[v] = y * vdir;
                    vector[w] = depthHalf;
                    // now apply vector to vertex buffer
                    interleaveData.push(vector.x, vector.y, vector.z);
                    // set values to correct vector component
                    vector[u] = 0;
                    vector[v] = 0;
                    vector[w] = depth > 0 ? 1 : - 1;
                    // now apply vector to normal buffer
                    interleaveData.push(vector.x, vector.y, vector.z);
                    // uvs
                    interleaveData.push(ix / gridX, 1 - (iy / gridY));
                    // counters
                    vertexCounter += 1;
                }
            }
            // indices
            // 1. you need three indices to draw a single face
            // 2. a single segment consists of two faces
            // 3. so we need to generate six (2*3) indices per segment
            for (iy = 0; iy < gridY; iy++) {
                for (ix = 0; ix < gridX; ix++) {
                    var a = numberOfVertices + ix + gridX1 * iy;
                    var b = numberOfVertices + ix + gridX1 * (iy + 1);
                    var c = numberOfVertices + (ix + 1) + gridX1 * (iy + 1);
                    var d = numberOfVertices + (ix + 1) + gridX1 * iy;
                    // faces
                    indexData.push(a, b, d, b, c, d);
                    // increase counter
                    groupCount += 6;
                }
            }
            // calculate new start value for groups
            groupStart += groupCount;
            // update total number of vertices
            numberOfVertices += vertexCounter;

        }
        return function (redGL, width, height, depth, widthSegments, heightSegments, depthSegments) {
            width = width || 1;
            height = height || 1;
            depth = depth || 1;
            // segments
            widthSegments = widthSegments || 1;
            heightSegments = heightSegments || 1;
            depthSegments = depthSegments || 1;

            // TODO: 중복방지
            // 기존에 생성된 녀석이면 생성된 프리미티브 정보를 넘긴다.
            tType = 'RedBox' + '_' + width + '_' + height + '_' + depth + '_' + widthSegments + '_' + heightSegments + '_' + depthSegments
            console.log(tType)

            ////////////////////////////////////////////////////////////////////////////
            // 데이터 생성!

            // buffers Data
            var interleaveData = [];
            var indexData = [];
            numberOfVertices = 0;
            groupStart = 0;
            buildPlane(interleaveData, indexData, 'z', 'y', 'x', - 1, - 1, depth, height, width, depthSegments, heightSegments, 0); // px
            buildPlane(interleaveData, indexData, 'z', 'y', 'x', 1, - 1, depth, height, - width, depthSegments, heightSegments, 1); // nx
            buildPlane(interleaveData, indexData, 'x', 'z', 'y', 1, 1, width, depth, height, widthSegments, depthSegments, 2); // py
            buildPlane(interleaveData, indexData, 'x', 'z', 'y', 1, - 1, width, depth, - height, widthSegments, depthSegments, 3); // ny
            buildPlane(interleaveData, indexData, 'x', 'y', 'z', 1, - 1, width, height, depth, widthSegments, heightSegments, 4); // pz
            buildPlane(interleaveData, indexData, 'x', 'y', 'z', - 1, - 1, width, height, - depth, widthSegments, heightSegments, 5); // nz
            ////////////////////////////////////////////////////////////////////////////
            // console.log(redGL['__datas']['RedPrimitive'])
            return {
                interleaveData: interleaveData,
                indexData: indexData,
                type: tType,
                interleaveBuffer: RedBuffer(
                    redGL,
                    tType + '_interleaveBuffer',
                    new Float32Array(interleaveData),
                    RedBuffer.ARRAY_BUFFER, [{
                        attributeKey: 'aVertexPosition',
                        size: 3,
                        normalize: false
                    },
                    {
                        attributeKey: 'aVertexNormal',
                        size: 3,
                        normalize: false
                    },
                    {
                        attributeKey: 'aTexcoord',
                        size: 2,
                        normalize: false
                    }
                    ]
                ),
                indexBuffer: RedBuffer(
                    redGL,
                    tType + '_indexBuffer',
                    new Uint16Array(indexData),
                    RedBuffer.ELEMENT_ARRAY_BUFFER
                )
            }
        }
    })();
    RedBox = function (redGL, width, height, depth, widthSegments, heightSegments, depthSegments) {
        if (!(this instanceof RedBox)) return new RedBox(redGL, width, height, depth, widthSegments, heightSegments, depthSegments)
        if (!(redGL instanceof RedGL)) throw 'RedPrimitive : RedGL 인스턴스만 허용됩니다.'
        /**DOC:
            {
                code : 'PROPERTY',
                title :`interleaveBuffer`,
                description : `
                    interleaveBuffer 정보
                `,
                example : `
                    // TODO:
                `,
                return : 'RedBuffer Instance'
            }
        :DOC*/
        var t0;
        t0 = makeData(redGL, width, height, depth, widthSegments, heightSegments, depthSegments);
        // TODO: 유일키 방어
        if (!redGL['_datas']['Primitives']) redGL['_datas']['Primitives'] = {};
        if (redGL['_datas']['Primitives'][t0['type']]) return redGL['_datas']['Primitives'][t0['type']]
        else redGL['_datas']['Primitives'][t0['type']] = this
        this['interleaveBuffer'] = t0['interleaveBuffer']
        /**DOC:
            {
                code : 'PROPERTY',
                title :`indexBuffer`,
                description : `
                    indexBuffer 정보
                `,
                example : `
                    // TODO:
                `,
                return : 'RedBuffer Instance'
            }
        :DOC*/
        this['indexBuffer'] = t0['indexBuffer']
        this['_UUID'] = RedGL['makeUUID']();
        // Object.freeze(this)
        // console.log(this)
    }
    RedBox.prototype = RedGeometry.prototype;
    Object.freeze(RedBox);
})()
"use strict";
var RedPlane;
(function () {
    var makeData;
    makeData = (function () {
        var width_half;
        var height_half;
        var gridX;
        var gridY;
        var gridX1;
        var gridY1;
        var segment_width;
        var segment_height;
        var ix, iy;
        var tX, tY;
        var a, b, c, d;
        var tType, tDatas
        return function (redGL, width, height, segmentW, segmentH) {
            width = width || 1, height = height || 1
            segmentW = segmentW || 1, segmentH = segmentH || 1
            width_half = width / 2, height_half = height / 2
            gridX = Math.floor(segmentW) || 1, gridY = Math.floor(segmentH) || 1
            gridX1 = gridX + 1, gridY1 = gridY + 1
            segment_width = width / gridX, segment_height = height / gridY

            // TODO: 중복방지

            // 기존에 생성된 녀석이면 생성된 프리미티브 정보를 넘긴다.
            tType = 'RedPlane' + '_' + width + '_' + height + '_' + segmentW + '_' + segmentH

            ////////////////////////////////////////////////////////////////////////////
            // 데이터 생성!
            // buffers Data
            var interleaveData = [];
            var indexData = []
            // generate vertices, normals and uvs
            for (iy = 0; iy < gridY1; iy++) {
                tY = iy * segment_height - height_half
                // position
                for (ix = 0; ix < gridX1; ix++) {
                    tX = ix * segment_width - width_half,
                        interleaveData.push(tX, - tY, 0) // position
                        interleaveData.push(0, 0, 1) // normal
                        interleaveData.push(ix / gridX, 1 - (iy / gridY)) // texcoord
                }
            }
            // indexData
            for (iy = 0; iy < gridY; iy++) {
                for (ix = 0; ix < gridX; ix++) {
                    a = ix + gridX1 * iy,
                        b = ix + gridX1 * (iy + 1),
                        c = (ix + 1) + gridX1 * (iy + 1),
                        d = (ix + 1) + gridX1 * iy,
                        // faces
                        indexData.push(a, b, d, b, c, d)
                }
            }
            ////////////////////////////////////////////////////////////////////////////
            // console.log(redGL['__datas']['RedPrimitive'])
            return {
                interleaveData: interleaveData,
                indexData: indexData,
                type: tType,
                interleaveBuffer: RedBuffer(
                    redGL,
                    tType + '_interleaveBuffer',
                    new Float32Array(interleaveData),
                    RedBuffer.ARRAY_BUFFER, [{
                        attributeKey: 'aVertexPosition',
                        size: 3,
                        normalize: false
                    },
                    {
                        attributeKey: 'aVertexNormal',
                        size: 3,
                        normalize: false
                    },
                    {
                        attributeKey: 'aTexcoord',
                        size: 2,
                        normalize: false
                    }
                    ]
                ),
                indexBuffer: RedBuffer(
                    redGL,
                    tType + '_indexBuffer',
                    new Uint16Array(indexData),
                    RedBuffer.ELEMENT_ARRAY_BUFFER
                )
            }
        }
    })();
    RedPlane = function (redGL, width, height, segmentW, segmentH) {
        if (!(this instanceof RedPlane)) return new RedPlane(redGL, width, height, segmentW, segmentH)
        if (!(redGL instanceof RedGL)) throw 'RedPrimitive : RedGL 인스턴스만 허용됩니다.'
        /**DOC:
            {
                code : 'PROPERTY',
                title :`interleaveBuffer`,
                description : `
                    interleaveBuffer 정보
                `,
                example : `
                    // TODO:
                `,
                return : 'RedBuffer Instance'
            }
        :DOC*/
        var t0;
        t0 = makeData(redGL, width, height, segmentW, segmentH);
        // TODO: 유일키 방어
        if (!redGL['_datas']['Primitives']) redGL['_datas']['Primitives'] = {};
        if (redGL['_datas']['Primitives'][t0['type']]) return redGL['_datas']['Primitives'][t0['type']]
        else redGL['_datas']['Primitives'][t0['type']] = this
        this['interleaveBuffer'] = t0['interleaveBuffer']
        /**DOC:
            {
                code : 'PROPERTY',
                title :`indexBuffer`,
                description : `
                    indexBuffer 정보
                `,
                example : `
                    // TODO:
                `,
                return : 'RedBuffer Instance'
            }
        :DOC*/
        this['indexBuffer'] = t0['indexBuffer']
        this['_UUID'] = RedGL['makeUUID']();
        // Object.freeze(this)
        // console.log(this)
    }
    RedPlane.prototype = RedGeometry.prototype;
    Object.freeze(RedPlane);
})()
"use strict";
var RedSphere;
(function () {
    var makeData;
    makeData = (function () {
        var thetaEnd;
        var ix, iy;
        var index
        var grid = [];
        var a, b, c, d;
        var tType;
        var vertex = new Float32Array([0, 0, 0])
        var normal = new Float32Array([0, 0, 0])
        return function (redGL, radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {

            radius = radius || 1;
            widthSegments = Math.max(3, Math.floor(widthSegments) || 8);
            heightSegments = Math.max(2, Math.floor(heightSegments) || 6);
            phiStart = phiStart !== undefined ? phiStart : 0;
            phiLength = phiLength !== undefined ? phiLength : Math.PI * 2;
            thetaStart = thetaStart !== undefined ? thetaStart : 0;
            thetaLength = thetaLength !== undefined ? thetaLength : Math.PI;

            thetaEnd = thetaStart + thetaLength;
            ix, iy;
            index = 0;
            grid.length = 0
            vertex[0] = 0, vertex[1] = 0, vertex[2] = 0
            normal[0] = 0, normal[1] = 0, normal[2] = 0

            // TODO: 중복방지
            // 기존에 생성된 녀석이면 생성된 프리미티브 정보를 넘긴다.
            tType = 'RedSphere' + '_' + radius + '_' + widthSegments + '_' + heightSegments + '_' + phiStart + '_' + phiLength + '_' + thetaStart + '_' + thetaLength
            console.log(tType)

            ////////////////////////////////////////////////////////////////////////////
            // 데이터 생성!

            // buffers Data
            var interleaveData = [];
            var indexData = [];
            // generate vertices, normals and uvs
            for (iy = 0; iy <= heightSegments; iy++) {
                var verticesRow = [];
                var v = iy / heightSegments;
                for (ix = 0; ix <= widthSegments; ix++) {
                    var u = ix / widthSegments;
                    // vertex
                    vertex.x = - radius * Math.cos(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);
                    vertex.y = radius * Math.cos(thetaStart + v * thetaLength);
                    vertex.z = radius * Math.sin(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);
                    interleaveData.push(vertex.x, vertex.y, vertex.z);
                    // normal
                    normal[0] = vertex.x
                    normal[1] = vertex.y
                    normal[2] = vertex.z
                    vec3.normalize(normal, normal)
                    interleaveData.push(normal[0], normal[1], normal[2]);
                    // uv
                    interleaveData.push(u, 1 - v);
                    verticesRow.push(index++);
                }
                grid.push(verticesRow);
            }
            // indices
            for (iy = 0; iy < heightSegments; iy++) {
                for (ix = 0; ix < widthSegments; ix++) {
                    a = grid[iy][ix + 1]
                    b = grid[iy][ix]
                    c = grid[iy + 1][ix]
                    d = grid[iy + 1][ix + 1]
                    if (iy !== 0 || thetaStart > 0) indexData.push(a, b, d)
                    if (iy !== heightSegments - 1 || thetaEnd < Math.PI) indexData.push(b, c, d)
                }
            }
            ////////////////////////////////////////////////////////////////////////////
            // console.log(redGL['__datas']['RedPrimitive'])
            return {
                interleaveData: interleaveData,
                indexData: indexData,
                type: tType,
                interleaveBuffer: RedBuffer(
                    redGL,
                    tType + '_interleaveBuffer',
                    new Float32Array(interleaveData),
                    RedBuffer.ARRAY_BUFFER, [{
                        attributeKey: 'aVertexPosition',
                        size: 3,
                        normalize: false
                    },
                    {
                        attributeKey: 'aVertexNormal',
                        size: 3,
                        normalize: false
                    },
                    {
                        attributeKey: 'aTexcoord',
                        size: 2,
                        normalize: false
                    }
                    ]
                ),
                indexBuffer: RedBuffer(
                    redGL,
                    tType + '_indexBuffer',
                    new Uint16Array(indexData),
                    RedBuffer.ELEMENT_ARRAY_BUFFER
                )
            }
        }
    })();
    RedSphere = function (redGL, radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {
        if (!(this instanceof RedSphere)) return new RedSphere(redGL, radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength)
        if (!(redGL instanceof RedGL)) throw 'RedPrimitive : RedGL 인스턴스만 허용됩니다.'
        /**DOC:
            {
                code : 'PROPERTY',
                title :`interleaveBuffer`,
                description : `
                    interleaveBuffer 정보
                `,
                example : `
                    // TODO:
                `,
                return : 'RedBuffer Instance'
            }
        :DOC*/
        var t0;
        t0 = makeData(redGL, radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
        // TODO: 유일키 방어
        if (!redGL['_datas']['Primitives']) redGL['_datas']['Primitives'] = {};
        if (redGL['_datas']['Primitives'][t0['type']]) return redGL['_datas']['Primitives'][t0['type']]
        else redGL['_datas']['Primitives'][t0['type']] = this
        this['interleaveBuffer'] = t0['interleaveBuffer']
        /**DOC:
            {
                code : 'PROPERTY',
                title :`indexBuffer`,
                description : `
                    indexBuffer 정보
                `,
                example : `
                    // TODO:
                `,
                return : 'RedBuffer Instance'
            }
        :DOC*/
        this['indexBuffer'] = t0['indexBuffer']
        this['_UUID'] = RedGL['makeUUID']();
        // Object.freeze(this)
        console.log(this)
    }
    RedSphere.prototype = RedGeometry.prototype;
    Object.freeze(RedSphere);
})()
"use strict";
var RedProgram;
(function () {
    var makeProgram, updateLocation;
    var samplerIndex //TODO: 같은 이름으로 된 인덱스가 있을경우 기존 인덱스를 쓰도록 유도
    makeProgram = (function () {
        var program;
        return function (gl, key, vs, fs) {
            program = gl.createProgram();
            gl.attachShader(program, vs['webglShader']);
            gl.attachShader(program, fs['webglShader']);
            gl.linkProgram(program);
            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) RedGLUtil.throwFunc("프로그램을 초기화 할 수 없습니다.");
            program['key'] = key;
            program['vShaderKey'] = vs['key'];
            program['fShaderKey'] = vs['key'];
            gl.useProgram(program);
            return program;
        }
    })();
    updateLocation = (function () {
        var AttributeLocationInfo;
        var UniformLocationInfo;
        AttributeLocationInfo = function () { }
        UniformLocationInfo = function () { }
        return function (self, gl, shader) {
            if (shader['parseData']['attribute']) {
                shader['parseData']['attribute']['list'].forEach(function (v) {
                    var t0 = new AttributeLocationInfo();
                    t0['_UUID'] = RedGL.makeUUID()
                    t0['location'] = gl.getAttribLocation(self['webglProgram'], v['name']);
                    if (t0['location'] == -1) {
                        t0['msg'] = '쉐이더 main 함수에서 사용되고 있지 않음';
                    } else {
                        t0['attributeType'] = v['attributeType'];
                        t0['name'] = v['name'];
                        t0['enabled'] = false;
                        self['attributeLocation'].push(t0);
                        self['attributeLocation'][v['name']] = t0;
                        // Object.seal(t0);
                    }
                })
            }
            if (shader['parseData']['uniform']) {
                shader['parseData']['uniform']['list'].forEach(function (v) {
                    var t0 = new UniformLocationInfo();
                    t0['_UUID'] = RedGL.makeUUID()
                    // console.log(v)
                    // console.log(v['name'],tGL.getUniformLocation(self['webglProgram'], v['name']))
                    t0['location'] = gl.getUniformLocation(self['webglProgram'], v['name']);
                    if (!t0['location']) t0['msg'] = '쉐이더 main 함수에서 사용되고 있지 않음';
                    t0['uniformType'] = v['uniformType'];
                    // renderType 조사
                    // TODO: 데이터 타입조사를 이놈이 하는게 맞는건가..
                    var arrayNum, tRenderType, tRenderMethod;
                    arrayNum = v['arrayNum']
                    switch (v['uniformType']) {
                        case 'sampler2D':
                            //TODO: 인덱스를 고유 번호로 인식하도록 변경
                            tRenderType = 'sampler2D';
                            tRenderMethod = 'uniform1f';
                            t0['samplerIndex'] = samplerIndex
                            samplerIndex++
                            if (samplerIndex == 8) samplerIndex = 2

                            break
                        case 'samplerCube':
                            tRenderType = 'samplerCube';
                            tRenderMethod = 'uniform1f';
                            t0['samplerIndex'] = samplerIndex
                            samplerIndex++
                            if (samplerIndex == 8) samplerIndex = 2
                            break
                        case 'float':
                            tRenderType = 'float';
                            tRenderMethod = 'uniform1f';
                            break
                        case 'int':
                            tRenderType = 'int';
                            tRenderMethod = 'uniform1i';
                            break
                        case 'mat4':
                            tRenderType = 'mat';
                            tRenderMethod = 'uniformMatrix4fv';
                            break
                        case 'mat3':
                            tRenderType = 'mat';
                            tRenderMethod = 'uniformMatrix3fv';
                            break
                        case 'mat2':
                            tRenderType = 'mat';
                            tRenderMethod = 'uniformMatrix2fv';
                            break
                        case 'vec4':
                            tRenderType = 'vec';
                            tRenderMethod = 'uniform4fv';
                            break
                        case 'vec3':
                            tRenderType = 'vec';
                            tRenderMethod = 'uniform3fv';
                            break
                        case 'vec2':
                            tRenderType = 'vec';
                            tRenderMethod = 'uniform2fv';
                            break

                    }
                    t0['renderType'] = tRenderType
                    t0['renderMethod'] = tRenderMethod

                    //
                    t0['name'] = v['name']
                    t0['materialPropertyName'] = v['name'].charAt(1).toLowerCase() + v['name'].substr(2)
                    t0['arrayNum'] = v['arrayNum']
                    if (v['systemUniformYn']) {
                        self['systemUniformLocation'].push(t0)
                        self['systemUniformLocation'][v['name']] = t0
                    } else {
                        self['uniformLocation'].push(t0)
                        self['uniformLocation'][v['name']] = t0
                    }
                    // Object.seal(t0)
                })

            }
        }
    })();
    /**DOC:
        {
            constructorYn : true,
            title :`RedProgram`,
            description : `
                RedProgram Instance 생성기
            `,
            params : {
                redGL : [
                    {type:'RedGL Instance'}
                ],
                key : [
                    {type:'String'},
                    `고유키`
                ],
                vs : [
                    {type:'RedShader Instance'},
                    `버텍스 쉐이더(RedShader.VERTEX 타입)`
                ],
                fs : [
                    {type:'RedShader Instance'},
                    `프레그먼트 쉐이더(RedShader.FRAGMENT 타입)`
                ]
            },
            return : 'RedProgram Instance'
        }
    :DOC*/
    RedProgram = function (redGL, key, vs, fs) {
        var tGL;
        if (!(this instanceof RedProgram)) return new RedProgram(redGL, key, vs, fs)
        if (!(redGL instanceof RedGL)) RedGLUtil.throwFunc('RedProgram : RedGL Instance만 허용됩니다.');
        if (typeof key != 'string') RedGLUtil.throwFunc('RedProgram : key - 문자열만 허용됩니다.');
        if (!vs instanceof RedShader) RedGLUtil.throwFunc('RedProgram : vShaderInfo - RedShader만 허용됩니다.');
        if (!fs instanceof RedShader) RedGLUtil.throwFunc('RedProgram : fShaderInfo - RedShader만 허용됩니다.');
        if (vs['type'] != RedShader.VERTEX) RedGLUtil.throwFunc('RedProgram : vShaderInfo - VERTEX 타입만 허용됩니다.');
        if (fs['type'] != RedShader.FRAGMENT) RedGLUtil.throwFunc('RedProgram : fShaderInfo - FRAGMENT 타입만 허용됩니다.');

        tGL = redGL.gl;
        // TODO: 유일키 방어
        if (!redGL['_datas']['RedProgram']) redGL['_datas']['RedProgram'] = {};
        if (redGL['_datas']['RedProgram'][key]) return redGL['_datas']['RedProgram'][key]
        else redGL['_datas']['RedProgram'][key] = this
        /**DOC:
            {
                title :`key`,
                description : `고유키`,
                example : `Instance.key`,
                return : 'String'
            }
        :DOC*/
        this['key'] = key;
        /**DOC:
            {
                title :`webglProgram`,
                description : `실제 프로그램(WebGLProgram Instance)`,
                example : `// TODO:`,
                return : 'WebGLShader'
            }
        :DOC*/
        this['webglProgram'] = makeProgram(tGL, key, vs, fs);
        /**DOC:
            {
                title :`attributeLocation`,
                description : `어리뷰트 로케이션 정보`,
                example : `// TODO:`,
                return : 'Array'
            }
        :DOC*/
        this['attributeLocation'] = [];
        /**DOC:
            {
                title :`uniformLocation`,
                description : `유니폼 로케이션 정보`,
                example : `// TODO:`,
                return : 'Array'
            }
        :DOC*/
        this['uniformLocation'] = [];
        /**DOC:
            {
                title :`systemUniformLocation`,
                description : `시스템 유니폼 로케이션 정보`,
                example : `// TODO:`,
                return : 'Array'
            }
        :DOC*/
        this['systemUniformLocation'] = [];

        // 쉐이더 로케이션 찾기
        tGL.useProgram(this['webglProgram'])
        samplerIndex = 2
        updateLocation(this, tGL, vs);
        updateLocation(this, tGL, fs);
        this['_UUID'] = RedGL['makeUUID']();
        Object.freeze(this)
        console.log(this)
    }
    RedProgram.prototype = {}
    Object.freeze(RedProgram)
})();
"use strict";
var RedSystemShaderCode;
(function () {
    /**DOC:
        {
            constructorYn : true,
            title :`RedSystemShaderCode`,
            description : `
                쉐이더 기본 정의 코드
                쉐이더 생성시 자동으로 추가되어 들어감.
            `,
            return : 'RedSystemShaderCode'
        }
    :DOC*/
    RedSystemShaderCode = {
        /**DOC:
            {
                code: 'CONST',
                title :`RedSystemShaderCode.vShareSource`,
                description : `
                    버텍스 쉐이더 기본 생성코드 리스트
                `,
                return : 'Array'
            }
        :DOC*/
        vShareSource: [
            'attribute vec3 aVertexPosition',
            'attribute vec3 aVertexNormal',
            'attribute vec4 aVertexColor',
            'varying vec3 vVertexNormal',

            'attribute float aPointSize',
            'uniform float uPointSize',

            'attribute vec2 aTexcoord',
            'varying vec2 vTexcoord',

            'uniform vec4 uAtlascoord',

            'uniform float uTime',
            'varying float vTime',

            'uniform vec2 uResolution',
            'varying vec2 vResolution',

            'uniform mat4 uMVMatrix',
            'uniform mat4 uNMatrix',
            'uniform mat4 uPMatrix',
            'uniform mat4 uCameraMatrix'
        ],
        /**DOC:
            {
                code: 'CONST',
                title :`RedSystemShaderCode.fShareSource`,
                description : `
                    프레그먼트 쉐이더 기본 생성코드 리스트
                `,
                return : 'Array'
            }
        :DOC*/
        fShareSource: [
            'varying vec3 vVertexNormal',
            'varying vec2 vTexcoord',

            'varying float vTime',
            'varying vec2 vResolution',

            'const int DIRETIONAL_MAX = 3',
            'uniform vec3 uDirectionalLightPosition[3]',
            'uniform vec4 uDirectionalLightColor[3]',
            'uniform float uDirectionalLightIntensity[3]',
            'uniform int uDirectionalLightNum',

            //포인트라이트
            'const int POINT_MAX = 5',
            'uniform vec3 uPointLightPosition[5]',
            'uniform vec4 uPointLightColor[5]',
            'uniform float uPointLightRadius[5]',
            'uniform float uPointLightIntensity[5]',
            'uniform int uPointLightNum',
            
            'uniform vec4 uAmbientLightColor',
            'uniform float uAmbientIntensity'

        ],
        systemUniform: {}
    };
    [RedSystemShaderCode.vShareSource, RedSystemShaderCode.fShareSource].forEach(function (data) {
        data.forEach(function (v) {
            v = v.split(' ')
            if (v[0] == 'uniform') {
                RedSystemShaderCode.systemUniform[v[2]] = 1
            }
        })
    });
    console.log(RedSystemShaderCode)
    Object.freeze(RedSystemShaderCode)
})();
"use strict";
var RedShader;
(function () {
    var makeWebGLShader, compile, parser, mergeSystemCode;
    makeWebGLShader = (function () {
        var t0;
        return function (gl, key, type) {
            switch (type) {
                case RedShader.VERTEX:
                    t0 = gl.createShader(gl.VERTEX_SHADER);
                    t0['key'] = key;
                    t0['type'] = type;
                    return t0
                case RedShader.FRAGMENT:
                    t0 = gl.createShader(gl.FRAGMENT_SHADER);
                    t0['key'] = key;
                    t0['type'] = type;
                    return t0
                default:
                    RedGLUtil.throwFunc('RedShader : 쉐이더 타입을 확인하세요!')
                    break
            }
        }
    })();
    compile = function (gl, type, shader, parseData) {
        gl.shaderSource(shader, parseData['lastSource']);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.log(parseData)
            RedGLUtil.throwFunc(gl.getShaderInfoLog(shader), '쉐이더 컴파일에 실패하였습니다.')
        }
    }
    mergeSystemCode = (function () {
        var t0;
        return function (type, sourceList) {
            switch (type) {
                case RedShader.VERTEX:
                    t0 = RedSystemShaderCode['vShareSource'].concat();
                    break;
                case RedShader.FRAGMENT:
                    t0 = RedSystemShaderCode['fShareSource'].concat();
                    break;
                default:
                    RedGLUtil.throwFunc('RedShader : 쉐이더 타입을 확인하세요!')
            }
            sourceList.forEach(function (v) {
                v = v.replace(';', '');
                if (t0.indexOf(v) == -1) t0.push(v);
                else {
                    console.log(RedSystemShaderCode)
                    RedGLUtil.throwFunc('RedShader : ', '\n1. 중복된 소스이거나', '\n2. RedSystemShaderCode에 정의된 소스\n', v);
                }
            })
            return t0;
        }
    })();
    parser = (function () {
        var parseData, checkList;
        var mergeStr;

        return function (type, source) {
            source = source.replace(/\s+$/, '')
            source = source.replace(/  /g, '').trim();

            // console.log(source)
            parseData = {
                etc: {
                    list: [],
                    map: {},
                    source: ''
                }
            }
            // 함수 제외 전부 검색
            checkList = source.match(/attribute[\s\S]+?\;|uniform[\s\S]+?\;|varying[\s\S]+?\;|precision[\s\S]+?\;/g);
            checkList = checkList ? checkList : [];
            checkList = mergeSystemCode(type, checkList);
            checkList.sort();
            // console.log(checkList)
            // console.log(checkList)
            checkList.forEach(function (v) {
                var tData;
                var tType, tName, tDataType, tArrayNum, tValue;
                var tInputData;
                v = v.trim()
                source = source.replace(v + ';', '')
                // console.log(source)

                tData = v.split(' ')
                // console.log(v,tData)
                if (tData[2]) {
                    // 정의인경우
                    tType = tData[0];
                    tDataType = tData[1];
                    tName = tData[2].replace(';', '').split('[');
                    tValue = v.split('=')
                    tValue = tValue[1] ? tValue[1].trim().replace(';', '') : null
                    tArrayNum = tName.length > 1 ? +tName[1].split(']')[0] : 0;
                    tName = tName[0]
                    switch (tType) {
                        case 'attribute':
                            if (tName.charAt(0) != 'a') RedGLUtil.throwFunc('attribute의 첫글자는 a로 시작해야합니다.', tName)
                            break
                        case 'uniform':
                            if (tName.charAt(0) != 'u') RedGLUtil.throwFunc('uniform의 첫글자는 u로 시작해야합니다.', tName)
                            break
                        case 'varying':
                            if (tName.charAt(0) != 'v') RedGLUtil.throwFunc('varying의 첫글자는 v로 시작해야합니다.', tName)
                            break
                    }
                } else {
                    // 변수인경우
                    tType = 'var';
                    tDataType = tData[0];
                    tName = tData[1].replace(';', '').split('[');
                    tArrayNum = tName.length > 1 ? +tName[1].split(']')[0] : 0;
                    tName = tName[0];

                }
                // console.log(tType, tDataType, tName, tArrayNum)
                if (!parseData[tType]) parseData[tType] = {}, parseData[tType]['list'] = [], parseData[tType]['map'] = {}, parseData[tType]['source'] = '';
                tInputData = {
                    name: tName,
                    arrayNum: tArrayNum,
                    value: tValue,
                    systemUniformYn: RedSystemShaderCode.systemUniform[tArrayNum ? tName + '[' + tArrayNum + ']' : tName] ? true : false
                };
                if (tType == 'uniform') tInputData['uniformType'] = tDataType

                if (tType == 'attribute') tInputData['attributeType'] = tDataType
                parseData[tType]['list'].push(tInputData);
                parseData[tType]['map'][tName] = v;
                parseData[tType]['source'] += v + ';\n';

            });
            // console.log('일단 걸러진상태는',source)
            // 함수부 찾는다.
            source += '\n';
            // source.match(/[A-Za-z0-9]+\s[\s\S]+?(\}\n)/g).forEach(function (v) {
            [source].forEach(function (v) {
                // console.log(v.split(' '))
                var data = v.split(' ');
                var tName = data[1].replace(/\([\s\S]+/g, '').trim()
                parseData['etc']['list'].push({
                    uniformType: data[0],
                    name: tName
                })
                parseData['etc']['map'][tName] = v;
                parseData['etc']['source'] += v + '\n';
            })

            mergeStr = '';
            if (parseData['precision']) mergeStr += parseData['precision']['source'] + '\n//attribute\n';
            if (parseData['const']) mergeStr += parseData['const']['source'] + '\n//const\n';
            if (parseData['attribute']) mergeStr += parseData['attribute']['source'] + '\n//uniform\n';
            if (parseData['uniform']) mergeStr += parseData['uniform']['source'] + '\n//varying\n';
            if (parseData['varying']) mergeStr += parseData['varying']['source'] + '\n//var\n';
            if (parseData['var']) mergeStr += parseData['var']['source'] + '\n//etc\n';
            if (parseData['etc']) mergeStr += parseData['etc']['source'];
            parseData.lastSource = mergeStr;
            // console.log(parseData)
            return parseData;
        }
    })()
    /**DOC:
        {
            constructorYn : true,
            title :`RedShader`,
            description : `
                RedShader Instance 생성기
                RedSystemShaderCode 소스와 머징된 RedShader Instance를 생성
            `,
            params : {
                redGL : [
                    {type:'RedGL Instance'}
                ],
                key : [
                    {type:'String'},
                    `고유키`
                ],
                type : [
                    {type:'RedShader.VERTEX or RedShader.FRAGMENT'},
                    `버퍼 타입`
                ],
                source : [
                    {type:'String'},
                    `쉐이더 문자열 소스`
                ],
            },
            return : 'RedShader Instance'
        }
    :DOC*/
    RedShader = function (redGL, key, type, source) {
        var tGL;
        if (!(this instanceof RedShader)) return new RedShader(redGL, key, type, source);
        if (!(redGL instanceof RedGL)) RedGLUtil.throwFunc('RedShader : RedGL Instance만 허용됩니다.');
        if (typeof key != 'string') RedGLUtil.throwFunc('RedShader : key - 문자열만 허용됩니다.');
        if (typeof type != 'string') RedGLUtil.throwFunc('RedShader : type - 문자열만 허용됩니다.');
        if (typeof source != 'string') RedGLUtil.throwFunc('RedShader : source - 문자열만 허용됩니다.');
        tGL = redGL.gl
        /**DOC:
            {
             title :`webglShader`,
             description : `실제 쉐이더(WebGLShader Instance)`,
             example : `Instance.webglShader`,
             return : 'WebGLShader'
            }
        :DOC*/
        this['webglShader'] = makeWebGLShader(tGL, key, type);
        this['parseData'] = parser(type, source);
        compile(tGL, type, this['webglShader'], this['parseData']);
        /**DOC:
        {
            title :`key`,
            description : `고유키`,
            example : `Instance.key`,
            return : 'String'
        }
        :DOC*/
        //TODO: 고유키 방어
        this['key'] = key
        /**DOC:
		{
            title :`type`,
			description : `RedShader.VERTEX or RedShader.FRAGMENT`,
			example : `Instance.type`,
			return : 'String'
		}
	    :DOC*/
        this['type'] = type
        this['_UUID'] = RedGL['makeUUID']();
        console.log(this);
        Object.freeze(this)
        // console.log(this)
    }
    /**DOC:
		{
            title :`RedShader.FRAGMENT`,
            code: 'CONST',
			description : `
				프레그먼트 쉐이더 상수.
			`,
			example : `
				RedShader.FRAGMENT
			`,
			return : 'String'
		}
	:DOC*/
    RedShader.FRAGMENT = 'fragmentShader'
    /**DOC:
		{
            title :`RedShader.VERTEX_SHADER`,
            code: 'CONST',
			description : `
				버텍스 쉐이더 상수.
			`,
			example : `
				RedShader.FRAGMENT_SHADER
			`,
			return : 'String'
		}
	:DOC*/
    RedShader.VERTEX = 'vertexShader'
    Object.freeze(RedShader)
})();
"use strict";
var RedRenderer;
(function () {
    /**DOC:
    {
        constructorYn : true,
        title :`RedRenderer`,
        description : `
            RedRenderer Instance 생성자.
        `,
        return : 'RedRenderer Instance'
    }
	:DOC*/
    RedRenderer = function () {
        if (!(this instanceof RedRenderer)) return new RedRenderer();
        this.world = null;
        this['_tickKey'] = null;
        this['_callback'] = null;
        this['_UUID'] = RedGL['makeUUID']();
        this['renderInfo'] = {}
        this['cacheUniformInfo'] = []
        this['cacheAttrInfo'] = []
        this['cacheSamplerIndex'] = []
        this['cacheState'] = []
        this['renderDebuger'] = RedRenderDebuger()
        Object.seal(this)
        console.log(this)
    };
    RedRenderer.prototype = {
        /**DOC:
        {
            code:`METHOD`,
            title :`start`,
            description : `
                렌더 시작
            `,
            params : {
                gl : [
                    {type : "webgl context"},
                    'webgl context'
                ]
            },
            return : 'void'
        }
        :DOC*/
        start: (function () {
            var tick;
            var self, tRedGL;
            tick = function (time) {
                self.worldRender(tRedGL, time);
                self['_callback'] ? self['_callback'](time) : 0
                self['_tickKey'] = requestAnimationFrame(tick);
            }
            return function (redGL, callback) {
                if (!(redGL instanceof RedGL)) RedGLUtil.throwFunc('RedGL Instance만 허용');
                if (!(redGL.world instanceof RedWorld)) RedGLUtil.throwFunc('RedWorld Instance만 허용');
                self = this;
                self.world = redGL.world;
                tRedGL = redGL
                self['_tickKey'] = requestAnimationFrame(tick);
                self['_callback'] = callback
            }
        })(),
        /**DOC:
        {
            code:`METHOD`,
            title :`stop`,
            description : `
                렌더 중지
            `,
            return : 'void'
        }
        :DOC*/
        stop: function () {
            cancelAnimationFrame(this['_tickKey'])
        }
    };
    /**DOC:
    {
        code:`METHOD`,
        title :`worldRender`,
        description : `
            등록된 RedView을 기반으로 렌더링을 실행함
        `,
        params : {
            gl : [
                {type : "webgl context"},
                'webgl context'
            ]
        },
        return : 'void'
    }
    :DOC*/
    // 캐시관련
    var prevProgram_UUID;
    var tCamera
    var tScene;
    RedRenderer.prototype.worldRender = (function () {
        var worldRect;

        var perspectiveMTX;
        var self;
        var valueParser;
        var updateSystemUniform;
        var glInitialize;
        var lightDebugRenderList
        lightDebugRenderList = []
        // 숫자면 숫자로 %면 월드대비 수치로 변경해줌
        valueParser = function (rect) {
            rect.forEach(function (v, index) {
                if (typeof rect[index] == 'number') rect[index] = v;
                else {
                    if (index < 2) rect[index] = worldRect[index + 2] * parseFloat(rect[index]) / 100
                    else rect[index] = worldRect[index] * parseFloat(rect[index]) / 100
                };
            })
            return rect;
        }
        updateSystemUniform = (function () {
            var tProgram;
            var tSystemUniformGroup;
            var gl;
            var tLocationInfo, tLocation, tUUID, tViewRect;
            var cacheSystemUniform;
            cacheSystemUniform = []
            return function (redGL, time, scene, perspectiveMTX, cameraMTX, viewRect) {
                gl = redGL.gl;
                lightDebugRenderList.length = 0
                for (var k in redGL['_datas']['RedProgram']) {
                    tProgram = redGL['_datas']['RedProgram'][k];
                    prevProgram_UUID == tProgram['_UUID'] ? 0 : gl.useProgram(tProgram['webglProgram']);
                    prevProgram_UUID = tProgram['_UUID'];
                    //
                    tSystemUniformGroup = tProgram['systemUniformLocation'];
                    //
                    tLocationInfo = tSystemUniformGroup['uTime'];
                    tLocation = tLocationInfo['location'];
                    tUUID = tLocationInfo['_UUID']
                    if (tLocation && cacheSystemUniform[tUUID] != time) {
                        gl.uniform1f(tLocation, time);
                        cacheSystemUniform[tUUID] = time;
                    }
                    //
                    tLocationInfo = tSystemUniformGroup['uResolution'];
                    tLocation = tLocationInfo['location'];
                    tUUID = tLocationInfo['_UUID'];
                    tViewRect = [viewRect[2], viewRect[3]]
                    if (tLocation && cacheSystemUniform[tUUID] != tViewRect.toString()) {
                        gl.uniform2fv(tLocation, tViewRect);
                        cacheSystemUniform[tUUID] = tViewRect.toString()
                    }
                    //
                    tLocationInfo = tSystemUniformGroup['uCameraMatrix'];
                    tLocation = tLocationInfo['location'];
                    tUUID = tLocationInfo['_UUID'];
                    if (tLocation && cacheSystemUniform[tUUID] != cameraMTX.toString()) {
                        gl.uniformMatrix4fv(tLocation, false, cameraMTX);
                        cacheSystemUniform[tUUID] = cameraMTX.toString()
                    }

                    //
                    tLocationInfo = tSystemUniformGroup['uPMatrix'];
                    tLocation = tLocationInfo['location'];
                    tUUID = tLocationInfo['_UUID'];
                    if (tLocation && cacheSystemUniform[tUUID] != perspectiveMTX.toString()) {
                        gl.uniformMatrix4fv(tLocation, false, perspectiveMTX);
                        cacheSystemUniform[tUUID] = perspectiveMTX.toString()
                    }

                    //
                    var i, tList;
                    var tLightData, tDebugObj;
                    var tValue
                    // 엠비언트 라이트 업데이트
                    if (tLightData = scene['_lightInfo'][RedAmbientLight['type']]) {
                        tLocationInfo = tSystemUniformGroup['uAmbientLightColor'];
                        tLocation = tLocationInfo['location'];
                        tUUID = tLocationInfo['_UUID'];
                        tValue = tLightData['color'];
                        if (tLocation && cacheSystemUniform[tUUID] != tValue.toString()) {
                            gl.uniform4fv(tLocation, tValue)
                            cacheSystemUniform[tUUID] = tValue.toString()
                        };
                        //
                        tLocationInfo = tSystemUniformGroup['uAmbientIntensity'];
                        tLocation = tLocationInfo['location'];
                        tUUID = tLocationInfo['_UUID'];
                        tValue = tLightData['intensity'];
                        if (tLocation && cacheSystemUniform[tUUID] != tValue) {
                            gl.uniform1f(tLocation, tValue)
                            cacheSystemUniform[tUUID] = tValue
                        };

                    }

                    // 디렉셔널 라이트 업데이트
                    var tDirectionnalPositionList, tColorList, tIntensityList;
                    var tVector;
                    tVector = vec3.create()
                    tDirectionnalPositionList = new Float32Array(3 * 3)
                    tColorList = new Float32Array(4 * 3)
                    tIntensityList = new Float32Array(3)
                    tList = scene['_lightInfo'][RedDirectionalLight['type']];
                    i = tList.length;
                    while (i--) {
                        tLightData = tList[i];
                        tDebugObj = tLightData['debugObject'];

                        vec3.set(tVector, tLightData['x'], tLightData['y'], tLightData['z'])
                        tDebugObj['x'] = tVector[0];
                        tDebugObj['y'] = tVector[1];
                        tDebugObj['z'] = tVector[2];

                        tDebugObj['material']['color'] = tLightData['color']

                        lightDebugRenderList.push(tDebugObj)
                        //
                        tLocationInfo = tSystemUniformGroup['uDirectionalLightPosition'];
                        tLocation = tLocationInfo['location'];
                        if (tLocation) {
                            vec3.normalize(tVector, tVector)
                            tDirectionnalPositionList[0 + 3 * i] = tVector[0];
                            tDirectionnalPositionList[1 + 3 * i] = tVector[1];
                            tDirectionnalPositionList[2 + 3 * i] = tVector[2];
                        }
                        //
                        tLocationInfo = tSystemUniformGroup['uDirectionalLightColor'];
                        tLocation = tLocationInfo['location'];
                        if (tLocation) {
                            tColorList[0 + 4 * i] = tLightData['color'][0];
                            tColorList[1 + 4 * i] = tLightData['color'][1];
                            tColorList[2 + 4 * i] = tLightData['color'][2];
                            tColorList[3 + 4 * i] = tLightData['color'][3];
                        }
                        //
                        tLocationInfo = tSystemUniformGroup['uDirectionalLightIntensity'];
                        tLocation = tLocationInfo['location'];
                        if (tLocation) tIntensityList[i] = tLightData['intensity']
                    }
                    //
                    tLocationInfo = tSystemUniformGroup['uDirectionalLightPosition'];
                    tLocation = tLocationInfo['location'];
                    tUUID = tLocationInfo['_UUID'];
                    tValue = tDirectionnalPositionList;
                    if (tLocation && cacheSystemUniform[tUUID] != tValue.toString()) {
                        gl.uniform3fv(tLocation, tValue);
                        cacheSystemUniform[tUUID] = tValue.toString()
                    }
                    //
                    tLocationInfo = tSystemUniformGroup['uDirectionalLightColor'];
                    tLocation = tLocationInfo['location'];
                    tUUID = tLocationInfo['_UUID'];
                    tValue = tColorList;
                    if (tLocation && cacheSystemUniform[tUUID] != tValue.toString()) {
                        gl.uniform4fv(tLocation, tValue);
                        cacheSystemUniform[tUUID] = tValue.toString()
                    }
                    //
                    tLocationInfo = tSystemUniformGroup['uDirectionalLightIntensity'];
                    tLocation = tLocationInfo['location'];
                    tUUID = tLocationInfo['_UUID'];
                    tValue = tIntensityList;
                    if (tLocation && cacheSystemUniform[tUUID] != tValue.toString()) {
                        gl.uniform1fv(tLocation, tValue)
                        cacheSystemUniform[tUUID] = tValue.toString()
                    }
                    //
                    tLocationInfo = tSystemUniformGroup['uDirectionalLightNum'];
                    tLocation = tLocationInfo['location'];
                    tUUID = tLocationInfo['_UUID'];
                    tValue = tList.length;
                    if (tLocation && cacheSystemUniform[tUUID] != tValue) {
                        gl.uniform1i(tLocation, tValue)
                        cacheSystemUniform[tUUID] = tValue
                    }

                    // 포인트 라이트 업데이트
                    var tPointPositionList, tColorList, tIntensityList, tRadiusList;
                    var tVector;
                    tVector = vec3.create()
                    tPointPositionList = new Float32Array(3 * 5)
                    tColorList = new Float32Array(4 * 5)
                    tIntensityList = new Float32Array(5)
                    tRadiusList = new Float32Array(5)
                    tList = scene['_lightInfo'][RedPointLight['type']];
                    i = tList.length;
                    while (i--) {
                        tLightData = tList[i];
                        tDebugObj = tLightData['debugObject'];

                        vec3.set(tVector, tLightData['x'], tLightData['y'], tLightData['z'])
                        tDebugObj['x'] = tVector[0];
                        tDebugObj['y'] = tVector[1];
                        tDebugObj['z'] = tVector[2];
                        tDebugObj['scaleX'] = tDebugObj['scaleY'] = tDebugObj['scaleZ'] = tLightData['radius']


                        tDebugObj['material']['color'] = tLightData['color']

                        lightDebugRenderList.push(tDebugObj)
                        //
                        tLocationInfo = tSystemUniformGroup['uPointLightPosition'];
                        tLocation = tLocationInfo['location'];
                        if (tLocation) {
                            tPointPositionList[0 + 3 * i] = tVector[0];
                            tPointPositionList[1 + 3 * i] = tVector[1];
                            tPointPositionList[2 + 3 * i] = tVector[2];
                        }
                        //
                        tLocationInfo = tSystemUniformGroup['uPointLightColor'];
                        tLocation = tLocationInfo['location'];
                        if (tLocation) {
                            tColorList[0 + 4 * i] = tLightData['color'][0];
                            tColorList[1 + 4 * i] = tLightData['color'][1];
                            tColorList[2 + 4 * i] = tLightData['color'][2];
                            tColorList[3 + 4 * i] = tLightData['color'][3];
                        }
                        //
                        tLocationInfo = tSystemUniformGroup['uPointLightIntensity'];
                        tLocation = tLocationInfo['location'];
                        if (tLocation) tIntensityList[i] = tLightData['intensity']
                        //
                        tLocationInfo = tSystemUniformGroup['uPointLightRadius'];
                        tLocation = tLocationInfo['location'];
                        if (tLocation) tRadiusList[i] = tLightData['radius']
                    }
                    //
                    tLocationInfo = tSystemUniformGroup['uPointLightPosition'];
                    tLocation = tLocationInfo['location'];
                    tUUID = tLocationInfo['_UUID'];
                    tValue = tPointPositionList;
                    if (tLocation && cacheSystemUniform[tUUID] != tValue.toString()) {
                        gl.uniform3fv(tLocation, tValue);
                        cacheSystemUniform[tUUID] = tValue.toString()
                    }
                    //
                    tLocationInfo = tSystemUniformGroup['uPointLightColor'];
                    tLocation = tLocationInfo['location'];
                    tUUID = tLocationInfo['_UUID'];
                    tValue = tColorList;
                    if (tLocation && cacheSystemUniform[tUUID] != tValue.toString()) {
                        gl.uniform4fv(tLocation, tValue);
                        cacheSystemUniform[tUUID] = tValue.toString()
                    }
                    //
                    tLocationInfo = tSystemUniformGroup['uPointLightIntensity'];
                    tLocation = tLocationInfo['location'];
                    tUUID = tLocationInfo['_UUID'];
                    tValue = tIntensityList;
                    if (tLocation && cacheSystemUniform[tUUID] != tValue.toString()) {
                        gl.uniform1fv(tLocation, tValue)
                        cacheSystemUniform[tUUID] = tValue.toString()
                    }
                    //
                    tLocationInfo = tSystemUniformGroup['uPointLightRadius'];
                    tLocation = tLocationInfo['location'];
                    tUUID = tLocationInfo['_UUID'];
                    tValue = tRadiusList;
                    if (tLocation && cacheSystemUniform[tUUID] != tValue.toString()) {
                        gl.uniform1fv(tLocation, tValue)
                        cacheSystemUniform[tUUID] = tValue.toString()
                    }
                    //
                    tLocationInfo = tSystemUniformGroup['uPointLightNum'];
                    tLocation = tLocationInfo['location'];
                    tUUID = tLocationInfo['_UUID'];
                    tValue = tList.length;
                    if (tLocation && cacheSystemUniform[tUUID] != tValue) {
                        gl.uniform1i(tLocation, tValue)
                        cacheSystemUniform[tUUID] = tValue
                    }

                }
                return lightDebugRenderList
            }
        })();
        glInitialize = function (gl) {
            // 뎁스데스티 설정

            gl.enable(gl.DEPTH_TEST);
            gl.depthFunc(gl.LEQUAL)
            // 컬링 페이스 설정
            gl.frontFace(gl.CCW)
            gl.enable(gl.CULL_FACE);
            gl.cullFace(gl.BACK)
            gl.enable(gl.SCISSOR_TEST);
            // 블렌드모드설정
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
            // gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
            // 픽셀 블렌딩 결정
            gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
            // 픽셀 플립 기본설정
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        };

        return function (redGL, time) {
            var gl;
            var tViewRect;
            gl = redGL.gl;
            self = this;
            // 캔버스 사이즈 적용
            worldRect = [0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight];
            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
            gl.scissor(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
            // glInitialize
            glInitialize(gl);

            // console.log("worldRender", v['key'], t0)
            self['renderInfo'] = {}
            this['cacheAttrInfo'].length = 0


            self['world']['_viewList'].forEach(function (tView) {
                ///////////////////////////////////
                // view의 위치/크기결정
                tViewRect = tView['_viewRect']
                tViewRect[0] = tView['_x'];
                tViewRect[1] = tView['_y'];
                tViewRect[2] = tView['_width'];
                tViewRect[3] = tView['_height'];
                tCamera = tView['camera'];
                tScene = tView['scene']
                // tCamera['updateMatrix']()
                // 위치/크기의 % 여부를 파싱
                valueParser(tViewRect);
                //
                self['renderInfo'][tView['key']] = {
                    orthographic: tCamera['orthographic'],
                    x: tView['_x'],
                    y: tView['_y'],
                    width: tView['_width'],
                    height: tView['_height'],
                    viewRectX: tViewRect[0],
                    viewRectY: tViewRect[1],
                    viewRectWidth: tViewRect[2],
                    viewRectHeight: tViewRect[3],
                    key: tView['key'],
                    call: 0
                }
                // viewport 설정
                gl.viewport(tViewRect[0], worldRect[3] - tViewRect[3] - tViewRect[1], tViewRect[2], tViewRect[3]);
                gl.scissor(tViewRect[0], worldRect[3] - tViewRect[3] - tViewRect[1], tViewRect[2], tViewRect[3]);
              
                if (tScene['useBackgroundColor']) {
                    gl.clearColor(tScene['r'], tScene['g'], tScene['b'], 1);
                    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
                }
                else {
                    gl.clearColor(0,0,0, 0);
                    gl.clear(gl.DEPTH_BUFFER_BIT);
                }
                perspectiveMTX = tCamera['perspectiveMTX']
                // view 에 적용할 카메라 퍼스펙티브를 계산
                mat4.identity(perspectiveMTX);
                if (tCamera['orthographic']) {
                    mat4.ortho(
                        perspectiveMTX,
                        -0.5, // left
                        0.5, // right
                        -0.5, // bottom
                        0.5, // top,
                        - tCamera['farClipping'],
                        tCamera['farClipping']
                    )
                    mat4.translate(perspectiveMTX, perspectiveMTX, [-0.5, 0.5, 0])
                    mat4.scale(perspectiveMTX, perspectiveMTX, [1 / tViewRect[2], -1 / tViewRect[3], 1]);
                    mat4.identity(tCamera['matrix'])
                    gl.disable(gl.CULL_FACE);
                } else {
                    mat4.perspective(
                        perspectiveMTX,
                        tCamera['fov'] * Math.PI / 180,
                        tViewRect[2] / tViewRect[3],
                        tCamera['nearClipping'],
                        tCamera['farClipping']
                    );
                    gl.enable(gl.CULL_FACE);
                };
                ///////////////////////////////
                // 실제렌더 계산
                updateSystemUniform(redGL, time, tScene, perspectiveMTX, tCamera['matrix'], tViewRect)
                if (tScene['skyBox']) {
                    gl.cullFace(gl.FRONT)
                    tScene['skyBox']['scaleX'] = tScene['skyBox']['scaleY'] = tScene['skyBox']['scaleZ'] = tCamera['farClipping']
                    self.sceneRender(redGL, gl, tCamera['orthographic'], [tScene['skyBox']], time, self['renderInfo'][tView['key']]);
                    gl.cullFace(gl.BACK)
                    gl.clear(gl.DEPTH_BUFFER_BIT);
                }
                // 디버깅 라이트 업데이트 
                self.sceneRender(redGL, gl, tCamera['orthographic'], lightDebugRenderList, time, self['renderInfo'][tView['key']]);
                // 씬렌더 호출
                self.sceneRender(redGL, gl, tCamera['orthographic'], tScene['children'], time, self['renderInfo'][tView['key']]);
                // 그리드가 있으면 그림
                if (tScene['grid']) self.sceneRender(redGL, gl, tCamera['orthographic'], [tScene['grid']], time, self['renderInfo'][tView['key']]);
                // asix가 있으면 그림
                if (tScene['axis']) self.sceneRender(redGL, gl, tCamera['orthographic'], tScene['axis']['children'], time, self['renderInfo'][tView['key']]);
            })
            if(this['renderDebuger']['visible']) this['renderDebuger'].update(redGL, self['renderInfo'])
        }
    })();

    RedRenderer.prototype.sceneRender = (function () {
        var draw;
        var tPrevIndexBuffer_UUID;
        var tPrevInterleaveBuffer_UUID;
        var tPrevSamplerIndex;

        draw = function (
            redGL,
            gl,
            children,
            orthographic,
            time,
            renderResultObj,
            tCacheInterleaveBuffer,
            tCacheUniformInfo,
            tCacheSamplerIndex,
            tCacheState,
            parentMTX

        ) {
            var tMesh;
            var k, i, i2;
            // 오쏘고날 스케일 비율
            var orthographicScale = orthographic ? -1 : 1
            //
            var BYTES_PER_ELEMENT;;
            var CONVERT_RADIAN
            // 
            var tMesh;
            var tGeometry;
            var tMaterial;
            var tInterleaveDefineInfo;
            var tAttrGroup, tUniformGroup, tSystemUniformGroup;
            var tInterleaveDefineUnit
            var tUniformLocationInfo, tAttributeLocationInfo, tWebGLUniformLocation, tWebGLAttributeLocation;
            var tInterleaveBuffer, tIndexBufferInfo;
            var tUniformValue
            var tRenderType;
            var tMVMatrix, tNMatrix
            var tUUID, noChangeUniform;
            var tSamplerIndex;
            // matix 관련
            var a,
                aSx, aSy, aSz, aCx, aCy, aCz, tRx, tRy, tRz,
                a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33,
                b0, b1, b2, b3,
                b00, b01, b02, b10, b11, b12, b20, b21, b22,
                aX, aY, aZ,
                inverse_c, inverse_d, inverse_e, inverse_g, inverse_f, inverse_h, inverse_i, inverse_j, inverse_k, inverse_l, inverse_n, inverse_o, inverse_A, inverse_m, inverse_p, inverse_r, inverse_s, inverse_B, inverse_t, inverse_u, inverse_v, inverse_w, inverse_x, inverse_y, inverse_z, inverse_C, inverse_D, inverse_E, inverse_q;
            var eyex, eyey, eyez, upx, upy, upz, z0, z1, z2, targetToLength, x0, x1, x2
            // sin,cos 관련
            var SIN, COS, tRadian, CPI, CPI2, C225, C127, C045, C157;
            //////////////// 변수값 할당 ////////////////
            BYTES_PER_ELEMENT = Float32Array.BYTES_PER_ELEMENT;
            CONVERT_RADIAN = Math.PI / 180
            CPI = 3.141592653589793,
                CPI2 = 6.283185307179586,
                C225 = 0.225,
                C127 = 1.27323954,
                C045 = 0.405284735,
                C157 = 1.5707963267948966;
            //////////////// 렌더시작 ////////////////
            i = children.length
            while (i--) {
                renderResultObj['call']++
                tMesh = children[i]
                tMVMatrix = tMesh['matrix']
                tNMatrix = tMesh['normalMatrix']
                tGeometry = tMesh['geometry']
                tMaterial = tMesh['material']
                prevProgram_UUID == tMaterial['program']['_UUID'] ? 0 : gl.useProgram(tMaterial['program']['webglProgram'])
                prevProgram_UUID = tMaterial['program']['_UUID']
                // 업데이트할 어트리뷰트와 유니폼 정보를 가져옴
                tAttrGroup = tMaterial['program']['attributeLocation'];
                tUniformGroup = tMaterial['program']['uniformLocation'];
                tSystemUniformGroup = tMaterial['program']['systemUniformLocation'];
                // 버퍼를 찾는다.
                tInterleaveBuffer = tGeometry['interleaveBuffer'] // 인터리브 버퍼
                tIndexBufferInfo = tGeometry['indexBuffer'] // 엘리먼트 버퍼

                /////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////
                // interleaveDefineInfo 정보를 가져온다. 
                tInterleaveDefineInfo = tInterleaveBuffer['interleaveDefineInfo']
                // 버퍼의 UUID
                tUUID = tInterleaveBuffer['_UUID']
                // 프로그램의 어트리뷰트를 순환한다. 
                i2 = tAttrGroup.length
                while (i2--) {
                    // 대상 어트리뷰트의 로케이션 정보를 구함
                    tAttributeLocationInfo = tAttrGroup[i2]
                    // 대상 어트리뷰트의 이름으로 interleaveDefineInfo에서 단위 인터리브 정보를 가져온다. 
                    tInterleaveDefineUnit = tInterleaveDefineInfo[tAttributeLocationInfo['name']]
                    // 실제 버퍼 바인딩하고 //TODO: 이놈은 검증해야함
                    tPrevInterleaveBuffer_UUID == tUUID ? 0 : gl.bindBuffer(gl.ARRAY_BUFFER, tInterleaveBuffer['webglBuffer'])
                    tPrevInterleaveBuffer_UUID = tUUID;
                    /*
                        어트리뷰트 정보매칭이 안되는 녀석은 무시한다 
                        이경우는 버퍼상에는 존재하지만 프로그램에서 사용하지 않는경우이다.
                    */
                    if (tAttributeLocationInfo && tInterleaveDefineUnit) {
                        // webgl location도 알아낸다.
                        tWebGLAttributeLocation = tAttributeLocationInfo['location']
                        if (tCacheInterleaveBuffer[tWebGLAttributeLocation] != tInterleaveDefineUnit['_UUID']) {
                            // 해당로케이션을 활성화된적이없으면 활성화 시킨다
                            tAttributeLocationInfo['enabled'] ? 0 : (gl.enableVertexAttribArray(tWebGLAttributeLocation), tAttributeLocationInfo['enabled'] = true)
                            gl.vertexAttribPointer(
                                tWebGLAttributeLocation,
                                tInterleaveDefineUnit['size'],
                                tInterleaveBuffer['glArrayType'],
                                tInterleaveDefineUnit['normalize'],
                                tInterleaveBuffer['stride'] * BYTES_PER_ELEMENT, //stride
                                tInterleaveDefineUnit['offset'] * BYTES_PER_ELEMENT //offset
                            )
                            // 상태 캐싱
                            tCacheInterleaveBuffer[tWebGLAttributeLocation] = tInterleaveDefineUnit['_UUID']
                        }
                    }
                }
                /////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////
                // 유니폼 업데이트
                i2 = tUniformGroup.length
                while (i2--) {
                    tUniformLocationInfo = tUniformGroup[i2];
                    tWebGLUniformLocation = tUniformLocationInfo['location'];
                    tUUID = tUniformLocationInfo['_UUID'];
                    if (tWebGLUniformLocation) {
                        tRenderType = tUniformLocationInfo['renderType'];
                        tUniformValue = tMaterial[tUniformLocationInfo['materialPropertyName']];
                        noChangeUniform = tCacheUniformInfo[tUUID] == tUniformValue;
                        // if (!noChange) console.log('변경되었다', tLocationInfo['name'], tCacheInfo[tUUID], tUniformValue)
                        // console.log(tCacheInfo)
                        if (tRenderType == 'sampler2D' || tRenderType == 'samplerCube') {
                            //TODO: 텍스쳐 인덱스는 내부적으로 먹어야하는 거였군...
                            tSamplerIndex = tUniformLocationInfo['samplerIndex']
                            // samplerIndex : 0,1 번은 생성용으로 쓴다.     
                            if (tUniformValue) {
                                // console.log(tUniformLocationInfo['materialPropertyName'],tUniformValue)  
                                // console.log(tUniformLocationInfo)

                                if (tCacheSamplerIndex[tSamplerIndex] == tUniformValue['_UUID']) {

                                    // console.log('온다',tUniformLocationInfo['materialPropertyName'],tSamplerIndex,tSamplerIndex)
                                } else {
                                    // console.log('온다2',tUniformLocationInfo['materialPropertyName'],tSamplerIndex,tSamplerIndex)
                                    gl.activeTexture(gl.TEXTURE0 + tSamplerIndex)
                                    gl.bindTexture(tRenderType == 'sampler2D' ? gl.TEXTURE_2D : gl.TEXTURE_CUBE_MAP, tUniformValue['webglTexture'])
                                    gl.uniform1i(tWebGLUniformLocation, tSamplerIndex)
                                }
                                // 아틀라스 UV검색
                                if (tUniformValue instanceof RedAtlasTexture && tSystemUniformGroup['uAtlascoord']['location']) {
                                    tUUID = tSystemUniformGroup['uAtlascoord']['_UUID']
                                    if (tCacheUniformInfo[tUUID] != tUniformValue['atlascoord']['data']['_UUID']) {
                                        gl.uniform4fv(tSystemUniformGroup['uAtlascoord']['location'], tUniformValue['atlascoord']['data'])
                                        tCacheUniformInfo[tUUID] = tUniformValue['atlascoord']['data']['_UUID']
                                    }
                                }

                                tCacheSamplerIndex[tSamplerIndex] = tUniformValue['_UUID']
                            } else {
                                // console.log('설마',tUniformLocationInfo['materialPropertyName'])
                                if (tRenderType == 'sampler2D') {

                                    if (tCacheSamplerIndex[tSamplerIndex] == 0) {
                                    } else {
                                        gl.activeTexture(gl.TEXTURE0)
                                        gl.bindTexture(gl.TEXTURE_2D, redGL['_datas']['emptyTexture']['2d']['webglTexture'])
                                        gl.uniform1i(tWebGLUniformLocation, 0)

                                    }
                                    tCacheSamplerIndex[tSamplerIndex] = 0
                                } else {
                                    if (tCacheSamplerIndex[tSamplerIndex] == 1) {
                                    } else {
                                        gl.activeTexture(gl.TEXTURE0 + 1)
                                        gl.bindTexture(gl.TEXTURE_CUBE_MAP, redGL['_datas']['emptyTexture']['3d']['webglTexture'])
                                        gl.uniform1i(tWebGLUniformLocation, 1)
                                    }
                                    tCacheSamplerIndex[tSamplerIndex] = 1
                                }


                            }
                        } else {
                            tUniformValue == undefined ? RedGLUtil.throwFunc('RedRenderer : Material에 ', tUniformLocationInfo['materialPropertyName'], '이 정의 되지않았습니다.') : 0;

                            tRenderType == 'float' ? noChangeUniform ? 0 : gl[tUniformLocationInfo['renderMethod']](tWebGLUniformLocation, tCacheUniformInfo[tUUID] = tUniformValue)
                                : tRenderType == 'int' ? noChangeUniform ? 0 : gl[tUniformLocationInfo['renderMethod']](tWebGLUniformLocation, tCacheUniformInfo[tUUID] = tUniformValue)
                                    // : tRenderType == 'vec' ? noChangeUniform ? 0 : gl[tUniformLocationInfo['renderMethod']](tWebGLUniformLocation, tCacheUniformInfo[tUUID] = tUniformValue)
                                    //TODO: 이걸해결해야하는군..
                                    : tRenderType == 'vec' ? gl[tUniformLocationInfo['renderMethod']](tWebGLUniformLocation, tCacheUniformInfo[tUUID] = tUniformValue)
                                        : tRenderType == 'mat' ? gl[tUniformLocationInfo['renderMethod']](tWebGLUniformLocation, false, tUniformValue)
                                            : RedGLUtil.throwFunc('RedRenderer : 처리할수없는 타입입니다.', 'tRenderType -', tRenderType)
                        }

                    }
                }

                /////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////
                // tMVMatrix
                // tMVMatrix 초기화
                tMVMatrix[0] = 1, tMVMatrix[1] = 0, tMVMatrix[2] = 0, tMVMatrix[3] = 0,
                    tMVMatrix[4] = 0, tMVMatrix[5] = 1, tMVMatrix[6] = 0, tMVMatrix[7] = 0,
                    tMVMatrix[8] = 0, tMVMatrix[9] = 0, tMVMatrix[10] = 1, tMVMatrix[11] = 0,
                    tMVMatrix[12] = 0, tMVMatrix[13] = 0, tMVMatrix[14] = 0, tMVMatrix[15] = 1,
                    a = tMVMatrix,
                    // tMVMatrix translate
                    aX = tMesh['x'], aY = tMesh['y'], aZ = tMesh['z'],
                    a[12] = a[0] * aX + a[4] * aY + a[8] * aZ + a[12],
                    a[13] = a[1] * aX + a[5] * aY + a[9] * aZ + a[13],
                    a[14] = a[2] * aX + a[6] * aY + a[10] * aZ + a[14],
                    a[15] = a[3] * aX + a[7] * aY + a[11] * aZ + a[15],
                    // tMVMatrix rotate
                    tRx = tMesh['rotationX'] * CONVERT_RADIAN, tRy = tMesh['rotationY'] * CONVERT_RADIAN, tRz = tMesh['rotationZ'] * CONVERT_RADIAN,
                    /////////////////////////
                    tRadian = tRx % CPI2,
                    tRadian < -CPI ? tRadian = tRadian + CPI2 : tRadian > CPI ? tRadian = tRadian - CPI2 : 0,
                    tRadian = tRadian < 0 ? C127 * tRadian + C045 * tRadian * tRadian : C127 * tRadian - C045 * tRadian * tRadian,
                    aSx = tRadian < 0 ? C225 * (tRadian * -tRadian - tRadian) + tRadian : C225 * (tRadian * tRadian - tRadian) + tRadian,

                    tRadian = (tRx + C157) % CPI2,
                    tRadian < -CPI ? tRadian = tRadian + CPI2 : tRadian > CPI ? tRadian = tRadian - CPI2 : 0,
                    tRadian = tRadian < 0 ? C127 * tRadian + C045 * tRadian * tRadian : C127 * tRadian - C045 * tRadian * tRadian,
                    aCx = tRadian < 0 ? C225 * (tRadian * -tRadian - tRadian) + tRadian : C225 * (tRadian * tRadian - tRadian) + tRadian,

                    tRadian = tRy % CPI2,
                    tRadian < -CPI ? tRadian = tRadian + CPI2 : tRadian > CPI ? tRadian = tRadian - CPI2 : 0,
                    tRadian = tRadian < 0 ? C127 * tRadian + C045 * tRadian * tRadian : C127 * tRadian - C045 * tRadian * tRadian,
                    aSy = tRadian < 0 ? C225 * (tRadian * -tRadian - tRadian) + tRadian : C225 * (tRadian * tRadian - tRadian) + tRadian,

                    tRadian = (tRy + C157) % CPI2,
                    tRadian < -CPI ? tRadian = tRadian + CPI2 : tRadian > CPI ? tRadian = tRadian - CPI2 : 0,
                    tRadian = tRadian < 0 ? C127 * tRadian + C045 * tRadian * tRadian : C127 * tRadian - C045 * tRadian * tRadian,
                    aCy = tRadian < 0 ? C225 * (tRadian * -tRadian - tRadian) + tRadian : C225 * (tRadian * tRadian - tRadian) + tRadian,

                    tRadian = tRz % CPI2,
                    tRadian < -CPI ? tRadian = tRadian + CPI2 : tRadian > CPI ? tRadian = tRadian - CPI2 : 0,
                    tRadian = tRadian < 0 ? C127 * tRadian + C045 * tRadian * tRadian : C127 * tRadian - C045 * tRadian * tRadian,
                    aSz = tRadian < 0 ? C225 * (tRadian * -tRadian - tRadian) + tRadian : C225 * (tRadian * tRadian - tRadian) + tRadian,

                    tRadian = (tRz + C157) % CPI2,
                    tRadian < -CPI ? tRadian = tRadian + CPI2 : tRadian > CPI ? tRadian = tRadian - CPI2 : 0,
                    tRadian = tRadian < 0 ? C127 * tRadian + C045 * tRadian * tRadian : C127 * tRadian - C045 * tRadian * tRadian,
                    aCz = tRadian < 0 ? C225 * (tRadian * -tRadian - tRadian) + tRadian : C225 * (tRadian * tRadian - tRadian) + tRadian,
                    /////////////////////////
                    a00 = a[0], a01 = a[1], a02 = a[2],
                    a10 = a[4], a11 = a[5], a12 = a[6],
                    a20 = a[8], a21 = a[9], a22 = a[10],
                    b00 = aCy * aCz, b01 = aSx * aSy * aCz - aCx * aSz, b02 = aCx * aSy * aCz + aSx * aSz,
                    b10 = aCy * aSz, b11 = aSx * aSy * aSz + aCx * aCz, b12 = aCx * aSy * aSz - aSx * aCz,
                    b20 = -aSy, b21 = aSx * aCy, b22 = aCx * aCy,
                    a[0] = a00 * b00 + a10 * b01 + a20 * b02, a[1] = a01 * b00 + a11 * b01 + a21 * b02, a[2] = a02 * b00 + a12 * b01 + a22 * b02,
                    a[4] = a00 * b10 + a10 * b11 + a20 * b12, a[5] = a01 * b10 + a11 * b11 + a21 * b12, a[6] = a02 * b10 + a12 * b11 + a22 * b12,
                    a[8] = a00 * b20 + a10 * b21 + a20 * b22, a[9] = a01 * b20 + a11 * b21 + a21 * b22, a[10] = a02 * b20 + a12 * b21 + a22 * b22,


                    // tMVMatrix scale
                    aX = tMesh['scaleX'], aY = tMesh['scaleY'] * orthographicScale, aZ = tMesh['scaleZ'],
                    a[0] = a[0] * aX, a[1] = a[1] * aX, a[2] = a[2] * aX, a[3] = a[3] * aX,
                    a[4] = a[4] * aY, a[5] = a[5] * aY, a[6] = a[6] * aY, a[7] = a[7] * aY,
                    a[8] = a[8] * aZ, a[9] = a[9] * aZ, a[10] = a[10] * aZ, a[11] = a[11] * aZ,
                    a[12] = a[12], a[13] = a[13], a[14] = a[14], a[15] = a[15],

                    // 부모가있으면 곱함
                    parentMTX ? (
                        // 부모매트릭스 복사
                        // 매트립스 곱
                        a00 = parentMTX[0], a01 = parentMTX[1], a02 = parentMTX[2], a03 = parentMTX[3],
                        a10 = parentMTX[4], a11 = parentMTX[5], a12 = parentMTX[6], a13 = parentMTX[7],
                        a20 = parentMTX[8], a21 = parentMTX[9], a22 = parentMTX[10], a23 = parentMTX[11],
                        a30 = parentMTX[12], a31 = parentMTX[13], a32 = parentMTX[14], a33 = parentMTX[15],
                        // Cache only the current line of the second matrix
                        b0 = tMVMatrix[0], b1 = tMVMatrix[1], b2 = tMVMatrix[2], b3 = tMVMatrix[3],
                        tMVMatrix[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30,
                        tMVMatrix[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31,
                        tMVMatrix[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32,
                        tMVMatrix[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33,
                        b0 = tMVMatrix[4], b1 = tMVMatrix[5], b2 = tMVMatrix[6], b3 = tMVMatrix[7],
                        tMVMatrix[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30,
                        tMVMatrix[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31,
                        tMVMatrix[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32,
                        tMVMatrix[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33,
                        b0 = tMVMatrix[8], b1 = tMVMatrix[9], b2 = tMVMatrix[10], b3 = tMVMatrix[11],
                        tMVMatrix[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30,
                        tMVMatrix[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31,
                        tMVMatrix[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32,
                        tMVMatrix[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33,
                        b0 = tMVMatrix[12], b1 = tMVMatrix[13], b2 = tMVMatrix[14], b3 = tMVMatrix[15],
                        tMVMatrix[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30,
                        tMVMatrix[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31,
                        tMVMatrix[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32,
                        tMVMatrix[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33

                    ) : 0

                // Sprite3D 처리
                tMesh instanceof RedSprite3D ? (
                    // mat4.targetTo(tMVMatrix, [tMVMatrix[12],tMVMatrix[13],tMVMatrix[14]], [tCamera.x, tCamera.y, tCamera.z], [0, 1, 0])
                    eyex = tMVMatrix[12], eyey = tMVMatrix[13], eyez = tMVMatrix[14],
                    upx = 0, upy = 1, upz = 0,

                    z0 = eyex - tCamera['x'], z1 = eyey - tCamera['y'], z2 = eyez - tCamera['z'],
                    targetToLength = z0 * z0 + z1 * z1 + z2 * z2,
                    targetToLength > 0 ? (
                        targetToLength = 1 / Math.sqrt(targetToLength),
                        z0 *= targetToLength, z1 *= targetToLength, z2 *= targetToLength
                    ) : 0,
                    x0 = upy * z2 - upz * z1,
                    x1 = upz * z0 - upx * z2,
                    x2 = upx * z1 - upy * z0,

                    // scale캐싱
                    aX = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]),
                    aY = Math.sqrt(a[4] * a[4] + a[5] * a[5] + a[6] * a[6]),
                    aZ = Math.sqrt(a[8] * a[8] + a[9] * a[9] + a[10] * a[10]),

                    // 카메라 바라보게 설정
                    tMVMatrix[0] = x0, tMVMatrix[1] = x1, tMVMatrix[2] = x2, tMVMatrix[3] = 0,
                    tMVMatrix[4] = z1 * x2 - z2 * x1, tMVMatrix[5] = z2 * x0 - z0 * x2, tMVMatrix[6] = z0 * x1 - z1 * x0, tMVMatrix[7] = 0,
                    tMVMatrix[8] = z0, tMVMatrix[9] = z1, tMVMatrix[10] = z2, tMVMatrix[11] = 0,
                    tMVMatrix[12] = eyex, tMVMatrix[13] = eyey, tMVMatrix[14] = eyez, tMVMatrix[15] = 1,

                    // 스케일적용
                    a[0] = a[0] * aX, a[1] = a[1] * aX, a[2] = a[2] * aX, a[3] = a[3] * aX,
                    a[4] = a[4] * aY, a[5] = a[5] * aY, a[6] = a[6] * aY, a[7] = a[7] * aY,
                    a[8] = a[8] * aZ, a[9] = a[9] * aZ, a[10] = a[10] * aZ, a[11] = a[11] * aZ,
                    a[12] = a[12], a[13] = a[13], a[14] = a[14], a[15] = a[15]


                ) : 0,
                    /////////////////////////////////////////////////////////////////////////
                    /////////////////////////////////////////////////////////////////////////



                    gl.uniformMatrix4fv(tSystemUniformGroup['uMVMatrix']['location'], false, tMVMatrix)

                /////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////
                // 노말매트릭스를 사용할경우
                if (tSystemUniformGroup['uNMatrix']['location']) {
                    //클론
                    // mat4Inverse
                    inverse_c = tMVMatrix[0], inverse_d = tMVMatrix[1], inverse_e = tMVMatrix[2], inverse_g = tMVMatrix[3],
                        inverse_f = tMVMatrix[4], inverse_h = tMVMatrix[5], inverse_i = tMVMatrix[6], inverse_j = tMVMatrix[7],
                        inverse_k = tMVMatrix[8], inverse_l = tMVMatrix[9], inverse_n = tMVMatrix[10], inverse_o = tMVMatrix[11],
                        inverse_m = tMVMatrix[12], inverse_p = tMVMatrix[13], inverse_r = tMVMatrix[14], inverse_s = tMVMatrix[15],
                        inverse_A = inverse_c * inverse_h - inverse_d * inverse_f,
                        inverse_B = inverse_c * inverse_i - inverse_e * inverse_f,
                        inverse_t = inverse_c * inverse_j - inverse_g * inverse_f,
                        inverse_u = inverse_d * inverse_i - inverse_e * inverse_h,
                        inverse_v = inverse_d * inverse_j - inverse_g * inverse_h,
                        inverse_w = inverse_e * inverse_j - inverse_g * inverse_i,
                        inverse_x = inverse_k * inverse_p - inverse_l * inverse_m,
                        inverse_y = inverse_k * inverse_r - inverse_n * inverse_m,
                        inverse_z = inverse_k * inverse_s - inverse_o * inverse_m,
                        inverse_C = inverse_l * inverse_r - inverse_n * inverse_p,
                        inverse_D = inverse_l * inverse_s - inverse_o * inverse_p,
                        inverse_E = inverse_n * inverse_s - inverse_o * inverse_r,
                        inverse_q = inverse_A * inverse_E - inverse_B * inverse_D + inverse_t * inverse_C + inverse_u * inverse_z - inverse_v * inverse_y + inverse_w * inverse_x,
                        inverse_q = 1 / inverse_q,
                        tNMatrix[0] = (inverse_h * inverse_E - inverse_i * inverse_D + inverse_j * inverse_C) * inverse_q,
                        tNMatrix[1] = (-inverse_d * inverse_E + inverse_e * inverse_D - inverse_g * inverse_C) * inverse_q,
                        tNMatrix[2] = (inverse_p * inverse_w - inverse_r * inverse_v + inverse_s * inverse_u) * inverse_q,
                        tNMatrix[3] = (-inverse_l * inverse_w + inverse_n * inverse_v - inverse_o * inverse_u) * inverse_q,
                        tNMatrix[4] = (-inverse_f * inverse_E + inverse_i * inverse_z - inverse_j * inverse_y) * inverse_q,
                        tNMatrix[5] = (inverse_c * inverse_E - inverse_e * inverse_z + inverse_g * inverse_y) * inverse_q,
                        tNMatrix[6] = (-inverse_m * inverse_w + inverse_r * inverse_t - inverse_s * inverse_B) * inverse_q,
                        tNMatrix[7] = (inverse_k * inverse_w - inverse_n * inverse_t + inverse_o * inverse_B) * inverse_q,
                        tNMatrix[8] = (inverse_f * inverse_D - inverse_h * inverse_z + inverse_j * inverse_x) * inverse_q,
                        tNMatrix[9] = (-inverse_c * inverse_D + inverse_d * inverse_z - inverse_g * inverse_x) * inverse_q,
                        tNMatrix[10] = (inverse_m * inverse_v - inverse_p * inverse_t + inverse_s * inverse_A) * inverse_q,
                        tNMatrix[11] = (-inverse_k * inverse_v + inverse_l * inverse_t - inverse_o * inverse_A) * inverse_q,
                        tNMatrix[12] = (-inverse_f * inverse_C + inverse_h * inverse_y - inverse_i * inverse_x) * inverse_q,
                        tNMatrix[13] = (inverse_c * inverse_C - inverse_d * inverse_y + inverse_e * inverse_x) * inverse_q,
                        tNMatrix[14] = (-inverse_m * inverse_u + inverse_p * inverse_B - inverse_r * inverse_A) * inverse_q,
                        tNMatrix[15] = (inverse_k * inverse_u - inverse_l * inverse_B + inverse_n * inverse_A) * inverse_q,
                        // transpose
                        a01 = tNMatrix[1], a02 = tNMatrix[2], a03 = tNMatrix[3],
                        a12 = tNMatrix[6], a13 = tNMatrix[7], a23 = tNMatrix[11],
                        tNMatrix[1] = tNMatrix[4], tNMatrix[2] = tNMatrix[8], tNMatrix[3] = tNMatrix[12], tNMatrix[4] = a01, tNMatrix[6] = tNMatrix[9],
                        tNMatrix[7] = tNMatrix[13], tNMatrix[8] = a02, tNMatrix[9] = a12, tNMatrix[11] = tNMatrix[14],
                        tNMatrix[12] = a03, tNMatrix[13] = a13, tNMatrix[14] = a23,
                        // uNMatrix 입력 
                        gl.uniformMatrix4fv(tSystemUniformGroup['uNMatrix']['location'], false, tNMatrix)
                }
                /////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////
                // 상태처리

                if (tSystemUniformGroup['uPointSize']['location']) {
                    tCacheState['pointSize'] != tMesh['pointSize'] ? gl.uniform1f(tSystemUniformGroup['uPointSize']['location'], tCacheState['pointSize'] = tMesh['pointSize']) : 0
                }

                // 컬페이스 사용여부 캐싱처리
                tCacheState['useCullFace'] != tMesh['useCullFace'] ? (tCacheState['useCullFace'] = tMesh['useCullFace']) ? gl.enable(gl.CULL_FACE) : gl.disable(gl.CULL_FACE) : 0;
                // 컬페이스 캐싱처리
                tCacheState['cullFace'] != tMesh['cullFace'] ? gl.cullFace(tCacheState['cullFace'] = tMesh['cullFace']) : 0;
                // 뎁스테스트 사용여부 캐싱처리
                tCacheState['useDepthTest'] != tMesh['useDepthTest'] ? (tCacheState['useDepthTest'] = tMesh['useDepthTest']) ? gl.enable(gl.DEPTH_TEST) : gl.disable(gl.DEPTH_TEST) : 0;
                // 뎁스테스팅 캐싱처리
                tCacheState['depthTestFunc'] != tMesh['depthTestFunc'] ? gl.depthFunc(tMesh['depthTestFunc']) : 0;
                // 블렌딩 사용여부 캐싱처리
                tCacheState['useBlendMode'] != tMesh['useBlendMode'] ? (tCacheState['useBlendMode'] = tMesh['useBlendMode']) ? gl.enable(gl.BLEND) : gl.disable(gl.BLEND) : 0;
                // 블렌딩팩터 캐싱처리
                if (tCacheState['blendSrc'] != tMesh['blendSrc'] || tCacheState['blendDst'] != tMesh['blendDst']) {
                    gl.blendFunc(tMesh['blendSrc'], tMesh['blendDst'])
                    tCacheState['blendSrc'] = tMesh['blendSrc']
                    tCacheState['blendDst'] = tMesh['blendDst']
                }

                /////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////
                // 드로우
                if (tIndexBufferInfo) {
                    tPrevIndexBuffer_UUID == tIndexBufferInfo['_UUID'] ? 0 : gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, tIndexBufferInfo['webglBuffer'])
                    //enum mode, long count, enum type, long offset

                    gl.drawElements(
                        tMesh['drawMode'],
                        tIndexBufferInfo['pointNum'],
                        tIndexBufferInfo['glArrayType'],
                        0
                    );
                    tPrevIndexBuffer_UUID = tIndexBufferInfo['_UUID'];
                } else gl.drawArrays(tMesh['drawMode'], 0, tInterleaveBuffer['pointNum'])
                /////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////
                if (tMesh['children'].length) {
                    draw(
                        redGL,
                        gl,
                        tMesh['children'],
                        orthographic,
                        time,
                        renderResultObj,
                        tCacheInterleaveBuffer,
                        tCacheUniformInfo,
                        tCacheSamplerIndex,
                        tCacheState,
                        tMVMatrix
                    )
                }
            }
        }
        return function (redGL, gl, orthographic, children, time, renderResultObj) {
            if (this['cacheState']['pointSize'] == undefined) this['cacheState']['pointSize'] = 1
            if (!this['cacheState']['useCullFace']) this['cacheState']['useCullFace'] = gl.getParameter(gl.CULL_FACE)
            if (!this['cacheState']['cullFace']) this['cacheState']['cullFace'] = gl.getParameter(gl.CULL_FACE_MODE)
            if (!this['cacheState']['useDepthTest']) this['cacheState']['useDepthTest'] = gl.getParameter(gl.DEPTH_TEST)
            if (!this['cacheState']['depthTestFunc']) this['cacheState']['depthTestFunc'] = gl.getParameter(gl.DEPTH_FUNC)
            if (!this['cacheState']['useBlendMode']) this['cacheState']['useBlendMode'] = gl.getParameter(gl.BLEND)
            if (!this['cacheState']['blendSrc']) this['cacheState']['blendSrc'] = gl.getParameter(gl.BLEND_SRC_RGB)
            if (!this['cacheState']['blendDst']) this['cacheState']['blendDst'] = gl.getParameter(gl.BLEND_DST_RGB)

            this['cacheSamplerIndex'] = []


            draw(
                redGL,
                gl,
                children,
                orthographic,
                time,
                renderResultObj,
                this['cacheAttrInfo'],
                this['cacheUniformInfo'],
                this['cacheSamplerIndex'],
                this['cacheState']
            )

        }
    })()
    Object.freeze(RedRenderer);
})();

"use strict";
var RedRenderDebuger;
(function () {

    RedRenderDebuger = function () {
        if (!(this instanceof RedRenderDebuger)) return new RedRenderDebuger();
        if (!this['renderResult']) {
            this['renderResult'] = document.createElement('div')
            this['renderResult'].style.cssText = 'position:absolute;bottom:0px;left:0px;color:#fff;font:11px Lucida Grande,sans-serif;font-size:11px;background:rgba(0,0,0,0.6);padding:3px;width:300px'
        }
        this['_visible'] = false
    }
    RedRenderDebuger.prototype = {
        update: function (redGL, renderInfo) {
            this['renderResult'].innerHTML = ''
            for (var k in renderInfo) {
                // console.log(tRenderer['renderInfo'][k])
                this['renderResult'].innerHTML +=
                    '<div style="padding:3px">' +
                    '<div><b>RedView : key - ' + renderInfo[k]['key'] + '</b></div>' +
                    ' orthographic - ' + renderInfo[k]['orthographic'] +
                    ' <br>call - ' + renderInfo[k]['call'] +
                    ' <br> width - ' + renderInfo[k]['width'] +
                    ' / height - ' + renderInfo[k]['height'] +
                    ' <br> viewRectWidth - ' + renderInfo[k]['viewRectWidth'] +
                    ' / viewRectHeight - ' + renderInfo[k]['viewRectHeight'] +
                    ' <br> x - ' + renderInfo[k]['x'] +
                    ' / y - ' + renderInfo[k]['y'] +
                    '</div><br>'
            }
            this['renderResult'].innerHTML += '<div style="padding:3px;background:#000">renderScale : ' + redGL['renderScale'] + '</div>'

        }
    }
    Object.defineProperty(RedRenderDebuger.prototype, 'visible', {
        get: function () {
            return this['_visible']
        },
        set: function (v) {
            this['_visible'] = v
            if (this['_visible']) document.body.appendChild(this['renderResult'])
            else {
                if (this['renderResult'].parentNode) document.body.removeChild(this['renderResult'])
            }
        }
    })
    Object.freeze(RedRenderDebuger);
})();

"use strict";
var RedAtlasUV;
(function () {
    var baseUV = new Float32Array([0, 0, 1, 1])
    var checkMap = {}
    var tKey
    var t0
    baseUV['_UUID'] = RedGL.makeUUID()
    RedAtlasUV = function (redGL, rect) {

        if (!(this instanceof RedAtlasUV)) return new RedAtlasUV(redGL, rect);
        if (!(redGL instanceof RedGL)) RedGLUtil.throwFunc('RedAtlasUV : RedGL Instance만 허용됩니다.');
        if (rect) {
            t0 = [
                rect[0][0],
                1.0 - rect[2][1],
                (rect[1][0] - rect[0][0]),
                (rect[2][1] - rect[0][1])
            ]
            tKey = t0.toString()
            if (checkMap[tKey]) this['data'] = checkMap[tKey]
            else this['data'] = checkMap[tKey] = t0, this['data']['_UUID'] = RedGL.makeUUID()
        } else this['data'] = baseUV

      
        // console.log(this)
    }
    RedAtlasUV.prototype = {};
    Object.freeze(RedAtlasUV);
})();

"use strict";
var RedBitmapTexture;
(function () {
    var setEmptyTexture;
    var loadTexture;
    var makeTexture
    setEmptyTexture = function (gl, texture) {
        gl.activeTexture(gl.TEXTURE0 + 0)
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1)
        gl.texImage2D(
            gl.TEXTURE_2D,
            0, //level
            gl.LUMINANCE, //internalFormat
            2, //width
            2, //height
            0, //border
            gl.LUMINANCE, //format
            gl.UNSIGNED_BYTE, //type
            new Uint8Array(
                [
                    128, 64,
                    0, 192
                ]
            )
        )
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.pixelStorei(gl.UNPACK_ALIGNMENT, 4);
        // gl.bindTexture(gl.TEXTURE_2D, null);
    }
    makeTexture = function (gl, texture, source, option) {
        gl.activeTexture(gl.TEXTURE0 + 0)
        gl.bindTexture(gl.TEXTURE_2D, texture);
        //level,internalFormat, format, type
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source)
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, option['min'] ? option['min'] : gl.LINEAR_MIPMAP_NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, option['max'] ? option['max'] : gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, option['wrap_s'] ? option['wrap_s'] : gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, option['wrap_t'] ? option['wrap_t'] : gl.REPEAT);
        if (gl['EXT_texture_filter_anisotropic'] && option['anisotropic']) {
            gl.texParameterf(gl.TEXTURE_2D, gl['EXT_texture_filter_anisotropic'].TEXTURE_MAX_ANISOTROPY_EXT, option['anisotropic']);
        }
        try {
            gl.generateMipmap(gl.TEXTURE_2D)
        } catch (error) {
            console.log('밉맵을 생성할수 없음', source)
        }
        gl.bindTexture(gl.TEXTURE_2D, null);
    }
    loadTexture = (function () {
        return function (gl, texture, src, option) {
            var onError, onLoad;
            var clearEvents;
            if (!option) option = {}
            clearEvents = function (img) {
                img.removeEventListener('error', onError);
                img.removeEventListener('load', onLoad);
            }
            onError = function () {
                var msg = "couldn't load image: " + src;
                RedGLUtil.throwFunc(msg);
                clearEvents(this);
            }
            onLoad = function () {
                clearEvents(this)
                makeTexture(gl, texture, this, option)
            }


            setEmptyTexture(gl, texture)
            if (src instanceof HTMLCanvasElement) {
                makeTexture(gl, texture, src, option)
            } else {
                var img;
                img = new Image();
                img.crossOrigin = 'anonymous'
                img.src = src;
                img.addEventListener('error', onError);
                img.addEventListener('load', onLoad);

            }


        }
    })()
    /**DOC:
        {
            constructorYn : true,
            title :`RedBitmapTexture`,
            description : `
                RedBitmapTexture Instance 생성
            `,
            params : {
                redGL : [
                    {type:'RedGL Instance'}
                ],
                src : [
                    {type:'string'},
                    '경로'
                ],
                option : [
                    {type:'Object'},
                    '텍스쳐 정의옵션'
                ]
            },
            return : 'RedBitmapTexture Instance'
        }
    :DOC*/
    RedBitmapTexture = function (redGL, src, option) {
        var gl;
        if (!(this instanceof RedBitmapTexture)) return new RedBitmapTexture(redGL, src, option);
        if (!(redGL instanceof RedGL)) RedGLUtil.throwFunc('RedBitmapTexture : RedGL Instance만 허용됩니다.');
        gl = redGL.gl;
        this['webglTexture'] = gl.createTexture();
        this['atlascoord'] = RedAtlasUV(redGL)
        this['_UUID'] = RedGL['makeUUID']();

        if (redGL['_datas']['emptyTexture']) {
            //TODO: 이거 렌더러쪽으로 옮겨야함
            gl.activeTexture(gl.TEXTURE0)
            gl.bindTexture(gl.TEXTURE_2D, redGL['_datas']['emptyTexture']['2d']['webglTexture'])
        }

        if (src) loadTexture(gl, this['webglTexture'], src, option);
        Object.seal(this);
        console.log(this)
    }
    RedBitmapTexture.prototype = {};
    Object.freeze(RedBitmapTexture);
})();

"use strict";
var RedAtlasTexture;
(function () {
    var gl;
    var t0;
    RedAtlasTexture = function (redGL, key) {
        if (!(this instanceof RedAtlasTexture)) return new RedAtlasTexture(redGL, key);
        if (!(redGL instanceof RedGL)) RedGLUtil.throwFunc('RedAtlasTexture : RedGL Instance만 허용됩니다.');
        gl = redGL.gl;
        t0 = redGL['_datas']['RedAtlas']['atlasMap'][key]
        this['webglTexture'] = t0['atlas']['texture']['webglTexture']
        this['atlascoord'] = RedAtlasUV(redGL, t0['rect'])
        this['_UUID'] = t0['atlas']['_UUID']

        if (redGL['_datas']['emptyTexture']) {
            gl.activeTexture(gl.TEXTURE0)
            gl.bindTexture(gl.TEXTURE_2D, redGL['_datas']['emptyTexture']['2d']['webglTexture'])
        }

        console.log(this)
    }
    RedAtlasTexture.prototype = RedBitmapTexture.prototype;
    Object.freeze(RedAtlasTexture);
})();

"use strict";
var RedBitmapCubeTexture;
(function () {
    var setEmptyTexture;
    var loadTexture;
    var nullImage;
    nullImage = new Image()
    nullImage.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzMxRDhBQzRFNUZFMTFFN0IxMDVGNEEzQjQ0RjAwRDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzMxRDhBQzVFNUZFMTFFN0IxMDVGNEEzQjQ0RjAwRDIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MzFEOEFDMkU1RkUxMUU3QjEwNUY0QTNCNDRGMDBEMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3MzFEOEFDM0U1RkUxMUU3QjEwNUY0QTNCNDRGMDBEMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuojYFUAAAAQSURBVHjaYvj//z8DQIABAAj8Av7bok0WAAAAAElFTkSuQmCC'
    setEmptyTexture = function (gl, texture) {
        gl.activeTexture(gl.TEXTURE0)
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
        [nullImage, nullImage, nullImage, nullImage, nullImage, nullImage].forEach(function (image, index) {
            gl.texImage2D(
                gl.TEXTURE_CUBE_MAP_POSITIVE_X + index,
                0,
                gl.RGBA,
                gl.RGBA,
                gl.UNSIGNED_BYTE,
                nullImage
            );
        })
        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
    }
    loadTexture = (function () {
        return function (gl, texture, srcList, option) {
            var onError, onLoad;
            var clearEvents;
            var imgList = []
            var i, loaded;
            if (!option) option = {}
            clearEvents = function (img) {
                img.removeEventListener('error', onError);
                img.removeEventListener('load', onLoad);
            }
            onError = function () {
                var msg = "couldn't load image: " + src;
                RedGLUtil.throwFunc(msg);
                clearEvents(this);
            }
            onLoad = function () {
                loaded++
                if (loaded == 6) {
                    clearEvents(this)
                    gl.activeTexture(gl.TEXTURE0)
                    gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
                    var i = imgList.length
                    while (i--) {
                        gl.texImage2D(
                            gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                            0,
                            gl.RGBA,
                            gl.RGBA,
                            gl.UNSIGNED_BYTE,
                            imgList[i]
                        );
                    }
                    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
                    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, option['min'] ? option['min'] : gl.LINEAR_MIPMAP_NEAREST);
                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, option['max'] ? option['max'] : gl.LINEAR);
                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, option['wrap_s'] ? option['wrap_s'] : gl.CLAMP_TO_EDGE);
                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, option['wrap_t'] ? option['wrap_t'] : gl.CLAMP_TO_EDGE);
                    try {
                        gl.generateMipmap(gl.TEXTURE_CUBE_MAP)
                    } catch (error) {
                        console.log('밉맵을 생성할수 없음',imgList)                    
                    }
                    gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
                } else clearEvents(this)

            }
            i = 6
            loaded = 0
            while (i--) {
                var img;
                setEmptyTexture(gl, texture)
                img = new Image();
                img.crossOrigin = 'anonymous'
                img.src = srcList[i];
                img.addEventListener('error', onError);
                img.addEventListener('load', onLoad);
                imgList[i] = img
            }
        }
    })()
    //TODO: 기본옵션 정의
    /**DOC:
        {
            constructorYn : true,
            title :`RedBitmapCubeTexture`,
            description : `
                RedBitmapCubeTexture Instance 생성
            `,
            params : {
                redGL : [
                    {type:'RedGL Instance'}
                ],
                src : [
                    {type:'string'},
                    '경로'
                ],
                option : [
                    {type:'Object'},
                    '텍스쳐 정의옵션'
                ]
            },
            return : 'RedBitmapCubeTexture Instance'
        }
    :DOC*/
    RedBitmapCubeTexture = function (redGL, srcList, option) {
        var gl;
        if (!(this instanceof RedBitmapCubeTexture)) return new RedBitmapCubeTexture(redGL, srcList, option);
        if (!(redGL instanceof RedGL)) RedGLUtil.throwFunc('RedBitmapCubeTexture : RedGL Instance만 허용됩니다.');
        gl = redGL.gl;
        this['webglTexture'] = gl.createTexture();
        this['atlascoord'] = RedAtlasUV(redGL)
        this['_UUID'] = RedGL['makeUUID']();

        if (redGL['_datas']['emptyTexture']) {
            //TODO: 이거 렌더러쪽으로 옮겨야함
            gl.activeTexture(gl.TEXTURE0 + 1)
            gl.bindTexture(gl.TEXTURE_CUBE_MAP, redGL['_datas']['emptyTexture']['3d']['webglTexture'])
        }

        loadTexture(gl, this['webglTexture'], srcList, option);
        Object.seal(this);
        console.log(this)
    }
    RedBitmapCubeTexture.prototype = {};
    Object.freeze(RedBitmapCubeTexture);
})();

"use strict";
var RedView;
(function () {
    var ViewMap;
    ViewMap = {};
    /**DOC:
    {
        constructorYn : true,
        title :`RedView`,
        description : `
            고유 키를 기반으로 <b>RedScene</b>과 <b>RedCamera를</b> 쌍으로 하는 정보를 소유.
            <b>RedWorld</b>에 등록되어지며 실제 렌더링시 필요한 그려질 크기와 위치를 결정한다.
        `,
        params : {
            key :[
                {type:'String'},
                '고유키',
                '기존에 존재하는 키일경우 <b>캐쉬된 Instance</b>를 반환'
            ],
            scene :[
                {type:'RedScene'},
                'RedScene'
            ],
            camera :[
                {type:'RedCamera'},
                'RedCamera'
            ]
        },
        example : `
            var tWorld, tScene, tCamera;
            tScene = RedScene(); // 씬생성
            tCamera = RedCamera(); // 카메라생성
            RedView('test', tScene, tCamera); // test라는 키값을 가진 RedView 생성
            RedView('test2', tScene, tCamera); // test2라는 키값을 가진 RedView 생성
        `,
        return : 'RedView Instance'
    }
	:DOC*/
    RedView = function (key, scene, camera) {
        if (ViewMap[key]) {
            if (scene || camera) RedGLUtil.throwFunc(key, '는 이미 생성된 RedView key입니다.')
            else return ViewMap[key]
        }
        if (!(this instanceof RedView)) return new RedView(key, scene, camera);
        if (!(typeof key == 'string')) RedGLUtil.throwFunc('key : 문자열만 허용')
        if (!scene && !camera) RedGLUtil.throwFunc('존재하지 않는 key입니다.')
        if (scene && !(scene instanceof RedScene)) RedGLUtil.throwFunc('RedScene Instance만 허용')
        if (camera && !(camera instanceof RedCamera)) RedGLUtil.throwFunc('RedCamera Instance만 허용')
        /**DOC:
           {
               title :`key`,
               description : `고유키`,
               return : 'String'
           }
        :DOC*/
        this['key'] = key;
        /**DOC:
           {
               title :`scene`,
               description : `scene`,
               return : 'RedScene'
           }
        :DOC*/
        this['scene'] = scene;
        /**DOC:
           {
               title :`camera`,
               description : `camera`,
               return : 'RedCamera'
           }
        :DOC*/
        this['camera'] = camera;

        this['_width'] = '100%';
        this['_height'] = '100%';
        this['_x'] = 0;
        this['_y'] = 0;
        this['_viewRect'] = [0, 0, 0, 0]
        ViewMap[key] = this;
        Object.seal(this)
    };
    RedView.prototype = {
        /**DOC:
           {
               code : 'METHOD',
               title :`setSize`,
               description : `
                    씬의 사이즈를 결정.
                    px, % 단위를 받음
               `,
               example : `
                    var tWorld, tScene, tCamera;
                    tScene = RedScene(); // 씬생성
                    tCamera = RedCamera(); // 카메라생성
                    RedView('test', tScene, tCamera); // test라는 키값을 가진 RedView 생성
                    RedView('test').setSize(100,100);
                    RedView('test').setSize('50%',100);
               `,
               return : 'void'
           }
       :DOC*/
        setSize: function (w, h) {
            this['_width'] = w != undefined ? w : '100%';
            this['_height'] = h != undefined ? h : '100%';
        },
        /**DOC:
           {
               code : 'METHOD',
               title :`setLocation`,
               description : `
                   씬의 위치를 결정.
                   px, % 단위를 받음
               `,
               example : `
                    var tWorld, tScene, tCamera;
                    tScene = RedScene(); // 씬생성
                    tCamera = RedCamera(); // 카메라생성
                    RedView('test', tScene, tCamera); // test라는 키값을 가진 RedView 생성
                    RedView('test').setLocation(100,100);
                    RedView('test').setLocation('50%',100);
               `,
               return : 'void'
           }
       :DOC*/
        setLocation: function (x, y) {
            this['_x'] = x != undefined ? x : 0;
            this['_y'] = y != undefined ? y : 0;
        }
    }
    Object.freeze(RedView);
})();

"use strict";
var RedWorld;
(function () {
    /**DOC:
    {
        constructorYn : true,
        title :`RedWorld`,
        description : `
            RedWorld Instance 생성자.
            RedWorld는 RedView를 소유하며 이는 렌더리스트로서 작동한다.. 
        `,
        example : `
            RedGL(document.getElementById('test'), function(v){
                // 성공,실패에 따라 v값이 true or false.
                if(v){
                    // 월드 생성
                    this['world'] = RedWorld();
                }else{
                    // 초기화실패
                }
            })
        `,
        return : 'RedWorld Instance'
    }
	:DOC*/
    RedWorld = function () {
        if (!(this instanceof RedWorld)) return new RedWorld();
        this['_viewList'] = [];
        this['_viewMap'] = {};
        this['_UUID'] = RedGL['makeUUID']();
        Object.seal(this)
    };
    RedWorld.prototype = {
        /**DOC:
            {
                code:`METHOD`,
                title :`addView`,
                description : `
                    렌더정보 추가.
                    정상처리된다면 내부적으로 <b>RedView</b>이 생성됨.
                `,
                params : {
                    View :[
                        {type:'RedView'},
                        '추가할 RedView Instance'
                    ]
                },
                example : `
                    var tWorld = RedWorld()
                    tWorld.addView(RedView('testView',RedScene(),RedCamera()))
               `,
                return : 'void'
            }
        :DOC*/
        addView: function (View) {
            if (!(View instanceof RedView)) RedGLUtil.throwFunc('RedView Instance만 허용함.')
            this['_viewMap'][View['key']] = View;
            this['_viewList'].push(View);
        },
        /**DOC:
            {
                code:`METHOD`,
                title :`getView`,
                description : `고유키 기반 렌더정보 검색`,
                params : {
                    key :[
                        {type:'String'},
                        '고유키'
                    ]
                },
                example : `
                    var tWorld = RedWorld();
                    tWorld.addView(RedView('testView',RedScene(),RedCamera()));
                    console.log(tWorld.getView('testView')) // testView 반환
                    tWorld.delView('testView');
                    console.log(tWorld.getView('testView')) // undefined
               `,
                return : 'RedView'
            }
        :DOC*/
        getView: function (key) {
            return this['_viewMap'][key]
        },
        /**DOC:
            {
                code:`METHOD`,
                title :`delView`,
                description : `렌더정보 삭제`,
                params : {
                    key :[
                        {type:'String'},
                        '고유키'
                    ]
                },
                example : `
                    var tWorld = RedWorld();
                    tWorld.addView(RedView('testView',RedScene(),RedCamera()));
                    console.log(tWorld.getView('testView')) // testView 반환
                    tWorld.delView('testView');
                    console.log(tWorld.getView('testView')) // undefined
               `,
                return : 'void'
            }
        :DOC*/
        delView: function (key) {
            var t0, t1
            if (t0 = this['_viewMap'][key]) {
                t1 = this['_viewList'].indexOf(t0);
                this['_viewList'].splice(t1, 1)
                delete this['_viewMap'][key]
            }
        },
        /**DOC:
            {
                code:`METHOD`,
                title :`hasView`,
                description : `고유키 기반 렌더정보 존재여부`,
                params : {
                    key :[
                        {type:'String'},
                        '고유키'
                    ]
                },
                example : `
                    var tWorld = RedWorld();
                    tWorld.addView(RedView('testView',RedScene(),RedCamera()));
                    console.log(tWorld.hasView('testView')) // true
                   
               `,
                return : 'Boolean'
            }
        :DOC*/
        hasView: function (key) {
            return this['_viewMap'][key] ? true : false
        },
        /**DOC:
            {
                code:`METHOD`,
                title :`getViewList`,
                description : `고유키 기반 렌더정보 검색`,
                params : {
                    key :[
                        {type:'String'},
                        '고유키'
                    ]
                },
                example : `
                   // TODO       
               `,
                return : 'Array'
            }
        :DOC*/
        getViewList: function () {
            return this['_viewList'].concat();
        }
    };
    Object.freeze(RedWorld);
})();

"use strict";
var RedScene;
(function () {
    /**DOC:
    {
        constructorYn : true,
        title :`RedScene`,
        description : `
            RedScene Instance 생성자.
        `,
        return : 'RedScene Instance'
    }
	:DOC*/
    RedScene = function (backgroundColor) {
        if (!(this instanceof RedScene)) return new RedScene(backgroundColor);
        var _skyBox, _grid, _axis;
        this['r'] = 0
        this['g'] = 0
        this['b'] = 0
        this.setBackgroundColor(backgroundColor ? backgroundColor : '#000')
        /**DOC:
            {
                title :`useBackgroundColor`,
                description : `
                    배경색 사용여부.
                    초기값 true
                `,
                return : 'Boolean'
            }
        :DOC*/
        this['useBackgroundColor'] = true
        /**DOC:
            {
                title :`children`,
                description : `
                    자식 리스트
                `,
                return : 'Array'
            }
        :DOC*/
        this['children'] = []

        /**DOC:
            {
                title :`skyBox`,
                description : `
                    skyBox get/set
                `,
                return : 'RedSkyBox'
            }
        :DOC*/
        Object.defineProperty(this, 'skyBox', {
            get: function () { return _skyBox },
            set: function (v) {
                if (!(v instanceof RedSkyBox) && v) RedGLUtil.throwFunc('RedScene : RedSkyBox Instance만 허용됩니다.')
                _skyBox = v;
                return _skyBox
            }
        });
        /**DOC:
            {
                title :`grid`,
                description : `
                    grid get/set
                `,
                return : 'RedGrid'
            }
        :DOC*/
        Object.defineProperty(this, 'grid', {
            get: function () { return _grid },
            set: function (v) {
                if (!(v instanceof RedGrid) && v) RedGLUtil.throwFunc('RedScene : RedGrid Instance만 허용됩니다.')
                _grid = v;
                return _grid
            }
        });
        /**DOC:
            {
                title :`axis`,
                description : `
                    axis get/set
                `,
                return : 'RedAxis'
            }
        :DOC*/
        Object.defineProperty(this, 'axis', {
            get: function () { return _axis },
            set: function (v) {
                if (!(v instanceof RedAxis) && v) RedGLUtil.throwFunc('RedScene : RedAxis Instance만 허용됩니다.')
                _axis = v;
                return _axis
            }
        })
        this['_lightInfo'] = {
            RedAmbientLight: null,
            RedDirectionalLight: [],
            RedPointLight: []
        };
        this['_UUID'] = RedGL['makeUUID']();
        // Object.seal(this)
    };
    RedScene.prototype = {
        /**DOC:
            {
                title :`addLight`,
                code : 'METHOD',
                description : `
                    라이트 추가 매서드.
                    RedBaseLight 확장객체만 등록가능.
                `,
                return : 'void'
            }
        :DOC*/
        addLight: function (v) {
            switch (v['type']) {
                case RedAmbientLight['type']:
                    this['_lightInfo'][v['type']] = v
                    break
                case RedDirectionalLight['type']:
                    this['_lightInfo'][v['type']].push(v)
                    break
                case RedPointLight['type']:
                    this['_lightInfo'][v['type']].push(v)
                    break
                default:
                    RedGLUtil.throwFunc('RedBaseLight 확장객체만 가능')
            }

        },
        removeLight: function () {

        }
    };
    /**DOC:
        {
            code : 'METHOD',
            title :`setBackgroundColor`,
            description : `
                배경 컬러설정.
                알파설정은 불가능
            `,
            params : {
                hex : [
                    {type: 'hex'},
                    'ex) #fff, #ffffff'
                ]
            },
            example : `// TODO:`,
            return : 'void'
        }
    :DOC*/
    RedScene.prototype['setBackgroundColor'] = (function () {
        var t0;
        return function (hex) {
            hex = hex ? hex : '#000';
            t0 = RedGLUtil.hexToRGB.call(this, hex);
            this['r'] = t0[0];
            this['g'] = t0[1];
            this['b'] = t0[2];
        }
    })();
    /**DOC:
        {
            extendDoc : 'RedBaseContainer'
        }
    :DOC*/
    RedGLUtil['extendsProto'](RedScene, RedBaseContainer)
    Object.freeze(RedScene);
})();

"use strict";
var RedCamera;
(function () {
    /**DOC:
    {
        constructorYn : true,
        title :`RedCamera`,
        description : `
            RedCamera Instance 생성자.
        `,
        example : `
            RedCamera()
        `,
        return : 'RedCamera Instance'
    }
	:DOC*/
    RedCamera = function () {
        if (!(this instanceof RedCamera)) return new RedCamera();
        /**DOC:
        {
            code:`PROPERTY`,
            title :`x`,
            description : `기본값 : 0`,
            return : 'Number'
        }
        :DOC*/
        /**DOC:
        {
            code:`PROPERTY`,
            title :`y`,
            description : `기본값 : 0`,
            return : 'Number'
        }
        :DOC*/
        /**DOC:
        {
            code:`PROPERTY`,
            title :`z`,
            description : `기본값 : 0`,
            return : 'Number'
        }
        :DOC*/
        this['x'] = this['y'] = this['z'] = 0;
        /**DOC:
        {
            code:`PROPERTY`,
            title :`fov`,
            description : `기본값 : 45degree`,
            return : 'Number'
        }
        :DOC*/
        this['fov'] = 45;
        /**DOC:
        {
            code:`PROPERTY`,
            title :`nearClipping`,
            description : `기본값 - 0.01`,
            return : 'Number'
        }
        :DOC*/
        this['nearClipping'] = 0.01;
        /**DOC:
        {
            code:`PROPERTY`,
            title :`farClipping`,
            description : `기본값 : 10000`,
            return : 'Number'
        }
        :DOC*/
        this['farClipping'] = 10000;
        /**DOC:
        {
            code:`PROPERTY`,
            title :`orthographic`,
            description : `orthographic - false`,
            return : 'Boolean'
        }
        :DOC*/
        this['orthographic'] = false;
        /**DOC:
        {
            code:`PROPERTY`,
            title :`matrix`,
            description : `
            카메라 매트릭스
            `,
            return : 'mat4'
        }
        :DOC*/
        this['matrix'] = mat4.create();
        /**DOC:
        {
            code:`PROPERTY`,
            title :`perspectiveMTX`,
            description : `
            orthographic값에따라 렌더링시 퍼스펙티브 or 오쏘고날 매트릭스로 자동 변경됨
            `,
            return : 'mat4'
        }
        :DOC*/
        this['perspectiveMTX'] = mat4.create();
        this['_UUID'] = RedGL['makeUUID']();
    };
    /**DOC:
    {
        code:`PROPERTY`,
        title :`lookAt`,
        description : `
            대상 위치를 바라보도록 matrix 설정
        `,
        params : {
            x : [{type : "Number"}],
            y : [{type : "Number"}],
            z : [{type : "Number"}]
        },
        return : 'mat4'
    }
    :DOC*/
    RedCamera.prototype['lookAt'] = (function () {
        var up = new Float32Array([0, 1, 0]);
        return function (x, y, z) {
            //out, eye, center, up
            mat4.lookAt(this['matrix'], [this.x, this.y, this.z], [x, y, z], up);
        }
    })();


    Object.freeze(RedCamera);
})();
