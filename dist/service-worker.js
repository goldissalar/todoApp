if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,o)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(n[l])return;let r={};const f=e=>s(e,l),t={module:{uri:l},exports:r,require:f};n[l]=Promise.all(i.map((e=>t[e]||f(e)))).then((e=>(o(...e),r)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"todo-app"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.cf880bf7.css",revision:null},{url:"/css/chunk-vendors.98a47937.css",revision:null},{url:"/fonts/fa-brands-400.8bf6ccf0.ttf",revision:null},{url:"/fonts/fa-brands-400.e465758e.woff2",revision:null},{url:"/fonts/fa-regular-400.a937b755.ttf",revision:null},{url:"/fonts/fa-regular-400.f386b6b7.woff2",revision:null},{url:"/fonts/fa-solid-900.081655f2.ttf",revision:null},{url:"/fonts/fa-solid-900.ce4938a3.woff2",revision:null},{url:"/fonts/fa-v4compatibility.f8c4829c.ttf",revision:null},{url:"/fonts/materialdesignicons-webfont.21f691f0.ttf",revision:null},{url:"/fonts/materialdesignicons-webfont.54b0f60d.woff2",revision:null},{url:"/fonts/materialdesignicons-webfont.5d875350.eot",revision:null},{url:"/fonts/materialdesignicons-webfont.d671cbf6.woff",revision:null},{url:"/index.html",revision:"2a477c507a2a5083e332c1c5a4940149"},{url:"/js/app.beefbacb.js",revision:null},{url:"/js/chunk-vendors.fee82dec.js",revision:null},{url:"/manifest.json",revision:"2d942268bc6bae44aee0a333fc37afb6"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
