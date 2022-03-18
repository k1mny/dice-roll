var E=Object.defineProperty,G=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var P=(a,t,r)=>t in a?E(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,h=(a,t)=>{for(var r in t||(t={}))S.call(t,r)&&P(a,r,t[r]);if(M)for(var r of M(t))B.call(t,r)&&P(a,r,t[r]);return a},T=(a,t)=>G(a,q(t));var x=(a,t)=>{var r={};for(var i in a)S.call(a,i)&&t.indexOf(i)<0&&(r[i]=a[i]);if(a!=null&&M)for(var i of M(a))t.indexOf(i)<0&&B.call(a,i)&&(r[i]=a[i]);return r};import{R as H,u as V,a as L,b as v,c as K,r as f,C as _,d as U,j as l,e,F as N,f as X,B as C,G as u,g as Y,S as Z,h as $,i as J,k as Q,P as W,l as t0,m as e0,n as a0}from"./vendor.9c5eac06.js";const i0=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}};i0();const O=H({key:"useDiceTop",default:[0]}),F=H({key:"useDiceRoll",default:!1});function r0(a,t){let r=0;const i=a[0]/Math.PI*180%180,o=a[1]/Math.PI*180%180,n=a[2]/Math.PI*180%180;return Math.abs(i)<t&&Math.abs(n)<t||Math.abs(Math.abs(i)-180)<t&&Math.abs(Math.abs(n)-180)<t?r=1:Math.abs(i+90)<t&&Math.abs(o)<t?r=2:Math.abs(i)<t&&Math.abs(n-90)<t||Math.abs(Math.abs(i)-180)<t&&Math.abs(n+90)<t?r=3:Math.abs(Math.abs(i)-180)<t&&Math.abs(n-90)<t||Math.abs(i)<t&&Math.abs(n+90)<t?r=4:Math.abs(i-90)<t&&Math.abs(o)<t?r=5:(Math.abs(i)<t&&Math.abs(Math.abs(n)-180)<t||Math.abs(Math.abs(i)-180)<t&&Math.abs(n)<t)&&(r=6),r}function n0({index:a}){const{nodes:t,materials:r}=V("../../model/dice.gltf"),{viewport:i}=L(),[o,n]=v(O),[s,D]=v(F),[j,g]=K(()=>({mass:10,position:[4-Math.random()*8,i.height/2*Math.random(),0],rotation:[Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI],args:[2,2,2],friction:0})),I=f.exports.useRef(),R=f.exports.useRef();f.exports.useEffect(()=>{s&&(g.position.set(0,0,0),D(!1))},[s,D]),f.exports.useEffect(()=>{I.current.color=new _("white"),R.current.color=new _("black")},[]);const y=f.exports.useRef([0,0,0]),w=f.exports.useRef([0,0,0]);return f.exports.useLayoutEffect(()=>{const b=g.velocity.subscribe(c=>w.current=c),A=g.rotation.subscribe(c=>y.current=c);return()=>{b(),A()}},[g]),U(({clock:b})=>{if(w&&y){const A=Math.abs(w.current.reduce((c,d)=>c+d*d));if(b.oldTime%20===0)if(Math.sqrt(A)<10){const c=r0(y.current,30);n(d=>d.map((z,p,k)=>p===a?c:k[p]))}else o[a]!==0&&n(c=>c.map((d,z,p)=>z===a?0:p[z]))}}),l("group",{ref:j,dispose:null,children:[e("mesh",{geometry:t.Cube001_2.geometry,children:e("meshStandardMaterial",{ref:R,attach:"material"})}),e("mesh",{geometry:t.Cube001_1.geometry,children:e("meshStandardMaterial",{ref:I,attach:"material"})})]})}function o0(){const{viewport:a}=L();return l(N,{children:[e(m,{position:[0,-a.height/2,0],rotation:[-Math.PI/2,0,0]}),e(m,{position:[-a.width/2-1,0,0],rotation:[0,Math.PI/2,0]}),e(m,{position:[a.width/2+1,0,0],rotation:[0,-Math.PI/2,0]}),e(m,{position:[0,0,0],rotation:[0,0,0]}),e(m,{position:[0,0,12],rotation:[0,-Math.PI,0]})]})}function m(r){var i=r,{color:a}=i,t=x(i,["color"]);return X(()=>T(h({},t),{friction:.1})),null}function s0(r){var i=r,{index:a}=i,t=x(i,["index"]);switch(a){case 1:return e(l0,h({},t));case 2:return e(c0,h({},t));case 3:return e(h0,h({},t));case 4:return e(f0,h({},t));case 5:return e(d0,h({},t));case 6:return e(u0,h({},t));default:return e(m0,h({},t))}}const l0=({height:a,width:t})=>l("svg",{style:{height:a,width:t},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[e("path",{d:"M0 0h512v512H0z",fill:"#000",fillOpacity:"1"}),e("g",{transform:"translate(0,0)",children:e("path",{d:"M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100z",fill:"#fff",fillOpacity:"1"})})]}),c0=({height:a,width:t})=>l("svg",{style:{height:a,width:t},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[e("path",{d:"M0 0h512v512H0z",fill:"#000",fillOpacity:"1"}),e("g",{transform:"translate(1,0)",children:e("path",{d:"M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z",fill:"#fff",fillOpacity:"1"})})]}),h0=({height:a,width:t})=>l("svg",{style:{height:a,width:t},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[e("path",{d:"M0 0h512v512H0z",fill:"#000",fillOpacity:"1"}),e("g",{transform:"translate(1,0)",children:e("path",{d:"M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z",fill:"#fff",fillOpacity:"1"})})]}),f0=({height:a,width:t})=>l("svg",{style:{height:a,width:t},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[e("path",{d:"M0 0h512v512H0z",fill:"#000",fillOpacity:"1"}),e("g",{transform:"translate(1,0)",children:e("path",{d:"M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z",fill:"#fff",fillOpacity:"1"})})]}),d0=({height:a,width:t})=>l("svg",{style:{height:a,width:t},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[e("path",{d:"M0 0h512v512H0z",fill:"#000",fillOpacity:"1"}),e("g",{transform:"translate(1,0)",children:e("path",{d:"M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z",fill:"#fff",fillOpacity:"1"})})]}),u0=({height:a,width:t})=>l("svg",{style:{height:a,width:t},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[e("path",{d:"M0 0h512v512H0z",fill:"#000",fillOpacity:"1"}),e("g",{transform:"translate(1,0)",children:e("path",{d:"M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM122 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zm268 0a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z",fill:"#fff",fillOpacity:"1"})})]}),m0=({height:a,width:t})=>l("svg",{style:{height:a,width:t},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[e("path",{d:"M0 0h512v512H0z",fill:"#000",fillOpacity:"1"}),e("g",{transform:"translate(1,0)",children:e("path",{d:"M23.05 23.05V488.9H488.9V23.05zm17.9 17.9H471.1V471.1H40.95z",fill:"#fff",fillOpacity:"1"})})]});function g0(){const[a,t]=v(F),[r,i]=v(O),o=(n,s)=>{s>=r.length?i([...r,...Array(s-r.length).fill(0)]):i(r.slice(0,s-r.length))};return e(C,{style:{position:"fixed",right:0,width:400,height:200,color:"white",zIndex:10,margin:10},children:l(u,{container:!0,spacing:3,direction:"column",alignItems:"center",justifyContent:"center",width:"100%",m:0,children:[e(u,{p:1,children:e(Y,{variant:"contained",onClick:()=>{t(!a),i([...Array(r.length).fill(0)])},children:"Roll!"})}),e(u,{width:"70%",p:1,children:e(Z,{defaultValue:1,valueLabelDisplay:"auto",step:1,value:r.length,onChange:o,min:1,max:10})}),e(u,{container:!0,direction:"row",alignItems:"center",justifyContent:"center",p:1,width:"80%",children:[...r].map(n=>n===0?10:n).sort((n,s)=>n-s).map(n=>n===10?0:n).map((n,s)=>e(u,{item:!0,container:!0,direction:"row",alignItems:"center",justifyContent:"center",xs:2.4,children:e(C,{p:1,children:e(s0,{index:n,height:30,width:30})})},s))})]})})}function p0(){const a=$(O),t=J();return l(N,{children:[e(g0,{}),e(Q,{shadows:!0,gl:{depth:!0,alpha:!1,antialias:!1},camera:{position:[0,0,20],fov:50,near:1,far:100},children:l(t,{children:[e("color",{attach:"background",args:["#333333"]}),e("ambientLight",{intensity:2}),e("directionalLight",{position:[-10,-10,-5],intensity:.5}),e(W,{gravity:[0,-50,0],defaultContactMaterial:{restitution:.5,friction:.05},size:16,children:l("group",{position:[0,0,-10],children:[e(o0,{}),a.map((r,i)=>e(n0,{index:i},i))]})})]})})]})}function M0(){return e("div",{className:"App",children:e(p0,{})})}t0.render(e(e0.StrictMode,{children:e(a0,{children:e(M0,{})})}),document.getElementById("root"));
