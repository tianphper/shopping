(function(e){function t(t){for(var a,o,i=t[0],u=t[1],p=t[2],l=0,h=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(h.length)h.shift()();return c.push.apply(c,p||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},o={app:0},r={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-187bfb32":"0f3e64f1","chunk-25012fd8":"4da1402b","chunk-543bb100":"79e93be2","chunk-57bb44dd":"a11e4c35","chunk-6b47458c":"c1f5c009","chunk-6bc86bb3":"032cc143","chunk-77129df4":"e76730f7","chunk-8c97a570":"c7f343f1","chunk-a0cef62e":"84c7117e","chunk-49743fb1":"285df6d8","chunk-f5bf7248":"574fb468","chunk-ad229812":"f95c8262"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-187bfb32":1,"chunk-25012fd8":1,"chunk-543bb100":1,"chunk-57bb44dd":1,"chunk-6b47458c":1,"chunk-6bc86bb3":1,"chunk-77129df4":1,"chunk-8c97a570":1,"chunk-a0cef62e":1,"chunk-49743fb1":1,"chunk-f5bf7248":1,"chunk-ad229812":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-187bfb32":"f1149392","chunk-25012fd8":"64c0cabe","chunk-543bb100":"287f5c39","chunk-57bb44dd":"cb111bfc","chunk-6b47458c":"10d1964f","chunk-6bc86bb3":"60353b9f","chunk-77129df4":"71daa404","chunk-8c97a570":"c9338b29","chunk-a0cef62e":"b37875f3","chunk-49743fb1":"cf2b54a1","chunk-f5bf7248":"34d75976","chunk-ad229812":"0674398c"}[e]+".css",r=u.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var p=c[i],l=p.getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(l===a||l===r))return t()}var h=document.getElementsByTagName("style");for(i=0;i<h.length;i++){p=h[i],l=p.getAttribute("data-href");if(l===a||l===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=r;var s=document.getElementsByTagName("head")[0];s.appendChild(d)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=c);var p,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var h=new Error;p=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",h.name="ChunkLoadError",h.type=a,h.request=o,n[1](h)}r[e]=void 0}};var d=setTimeout((function(){p({type:"timeout",target:l})}),12e4);l.onerror=l.onload=p,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var p=window["webpackJsonp"]=window["webpackJsonp"]||[],l=p.push.bind(p);p.push=t,p=p.slice();for(var h=0;h<p.length;h++)t(p[h]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],c={name:"App"},i=c,u=(n("7c55"),n("2877")),p=Object(u["a"])(i,o,r,!1,null,null,null),l=p.exports,h=n("8c4f"),d=n("a78e"),s=n.n(d),f=n("bc3a"),m=n.n(f),b=n("5c96"),g=n.n(b),v=n("4328"),k=n.n(v);function y(e,t){return new Promise((n,a)=>{m.a.get(e,{params:t}).then(e=>{n(e.data)}).catch(e=>{a(e.data)})})}function S(e,t){return new Promise((n,a)=>{m.a.post(e,k.a.stringify(t)).then(e=>{n(e.data)}).catch(e=>{a(e.data)})})}function w(){var e=navigator.userAgent;return e.indexOf("Android")>-1||e.indexOf("iPhone")>-1||e.indexOf("iPad")>-1||e.indexOf("iPod")>-1||e.indexOf("Symbian")>-1}m.a.defaults.baseURL="/api/ABS/mobile/",m.a.interceptors.request.use((function(e){let t=s.a.get("token");return t&&(e.headers["Authorization"]=t),e}),(function(e){return Promise.reject(e)})),m.a.interceptors.response.use(e=>{return"USER_KEY_EXPIRE"==e.data.statusCode&&(b["Notification"].error({message:e.data.message,title:"失败"}),window.location.href="/login"),"FAIL"==e.data.statusCode&&b["Notification"].error({message:e.data.message,title:"失败"}),e},e=>{return Promise.reject(e)}),a["default"].use(h["a"]);const P=new h["a"]({mode:"history",routes:[{path:"/login",name:"Login",component:e=>void n.e("chunk-543bb100").then(function(){var t=[n("f4bb")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/",component:e=>void n.e("chunk-ad229812").then(function(){var t=[n("be9a")];e.apply(null,t)}.bind(this)).catch(n.oe),children:[{path:"/",name:"Index",meta:{title:"Home",pagename:"Home"},component:e=>void n.e("chunk-25012fd8").then(function(){var t=[n("68b3")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/shop",name:"Shop",meta:{title:"Shop",pagename:"Shop"},component:e=>void n.e("chunk-6b47458c").then(function(){var t=[n("0d62")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/shop/detail",name:"Shopdetail",meta:{title:"Shop",pagename:"Shop"},component:e=>void Promise.all([n.e("chunk-a0cef62e"),n.e("chunk-49743fb1")]).then(function(){var t=[n("d875")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/cart",name:"Cart",meta:{title:"Cart",pagename:"Cart"},component:e=>void n.e("chunk-77129df4").then(function(){var t=[n("05fc")];e.apply(null,t)}.bind(this)).catch(n.oe)}]},{path:"/m",component:e=>void n.e("chunk-6bc86bb3").then(function(){var t=[n("bf06")];e.apply(null,t)}.bind(this)).catch(n.oe),children:[{path:"/m",name:"wapIndex",meta:{title:"Home",pagename:"Home"},component:e=>void n.e("chunk-187bfb32").then(function(){var t=[n("e23f")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/m/shop",name:"wapShop",meta:{title:"Shop",pagename:"Shop"},component:e=>void n.e("chunk-8c97a570").then(function(){var t=[n("f7de")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/m/shop/detail",name:"wapShopdetail",meta:{title:"Shop",pagename:"Shop"},component:e=>void Promise.all([n.e("chunk-a0cef62e"),n.e("chunk-f5bf7248")]).then(function(){var t=[n("5870")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/m/cart",name:"wapCart",meta:{title:"Cart",pagename:"Cart"},component:e=>void n.e("chunk-57bb44dd").then(function(){var t=[n("3859")];e.apply(null,t)}.bind(this)).catch(n.oe)}]}]});P.beforeEach((e,t,n)=>{e.meta.title&&(document.title=e.meta.title),w()&&"wap"!=localStorage.getItem("site_type")?(localStorage.setItem("site_type","wap"),console.log("wap..."),n({path:"/m"})):0==w()&&"pc"!=localStorage.getItem("site_type")?(localStorage.setItem("site_type","pc"),n({path:"/"})):n()});var O=P,x=n("2f62");a["default"].use(x["a"]);const L=e=>{let t=0;return e.length>0&&e.forEach(e=>{let n=parseFloat(e.price);t+=n*e.count}),t.toFixed(2)};var C=new x["a"].Store({state:{active:"",cartStatus:!1,cartList:[],totalPrices:0},mutations:{changePage(e,t){e.active=t},changeCartStatus(e,t){e.cartStatus=t},getCartList(e){let t=localStorage.getItem("cartList");t=t?JSON.parse(t):[],e.cartList=t,e.totalPrices=L(t)},saveCartList(e,t){let{cartList:n}=e;if(0!=n.length){let e=n.findIndex(e=>e.id==t.id);e>-1?n[e].count+=t.count:n=[...n,t]}else n=[],n.push(t);e.cartList=n,e.totalPrices=L(n),localStorage.setItem("cartList",JSON.stringify(n))},deleteCartShop(e,t){let n=e.cartList.filter(e=>e.id!=t);e.cartList=n,e.totalPrices=L(n),localStorage.setItem("cartList",JSON.stringify(n))}}}),A=(n("0fae"),n("e05f"),{goodsList:[{id:1,name:"iphone1",price:32},{id:2,name:"iphone2",price:110.1},{id:3,name:"iphone3",price:153},{id:4,name:"iphone4",price:89},{id:5,name:"iphone5",price:43},{id:6,name:"iphone6",price:178},{id:7,name:"iphone7",price:230},{id:8,name:"iphone8",price:26.19},{id:9,name:"iphone9",price:67.05},{id:10,name:"iphone10",price:12.66}]}),E=n("d996"),_=n.n(E),j={siteName:"Element UI Admin模板",minSiteMame:"EUI",tokenKey:"Authorization",postStatus:{draft:"草稿",published:"发布",recycled:"垃圾"},postType:{AR:"AR资讯",HEALTH:"健康资讯"},sex:{male:"男",female:"女",unknown:"未知"}};const I=Object.assign(A,_.a,j);var N=I,T={isMobile:function(){var e=navigator.userAgent;return e.indexOf("Android")>-1||e.indexOf("iPhone")>-1||e.indexOf("iPad")>-1||e.indexOf("iPod")>-1||e.indexOf("Symbian")>-1}},$=n("313e"),H=n.n($);a["default"].prototype.$echarts=H.a,a["default"].config.productionTip=!1,a["default"].use(g.a),a["default"].prototype.$baseUrl="http://47.96.181.7:8080/",a["default"].prototype.$Config=N,a["default"].prototype.$Func=T,a["default"].prototype.$cookies=s.a,a["default"].prototype.$get=y,a["default"].prototype.$post=S,new a["default"]({router:O,store:C,render:function(e){return e(l)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";var a=n("2395"),o=n.n(a);o.a},d996:function(e,t){}});
//# sourceMappingURL=app.396cdf2b.js.map