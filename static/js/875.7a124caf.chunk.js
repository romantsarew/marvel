"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[875],{875:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var r=a(43),s=a(216),n=a(475),c=a(65),i=a(897),l=a(924),o=a(286),h=a(579);const d=e=>{let{data:t,type:a}=e;if("comic"===a){const{title:e,description:a,language:r,pageCount:s,thumbnail:c,price:i}=t;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("img",{src:c,alt:e}),(0,h.jsxs)("div",{className:"data__text",children:[(0,h.jsx)("h1",{children:e}),(0,h.jsx)("p",{children:a}),(0,h.jsx)("p",{children:s}),(0,h.jsxs)("p",{children:["Language: ",r]}),(0,h.jsxs)("span",{children:["Price: ",i]})]}),(0,h.jsx)(n.k2,{to:"/comics",children:"Back to all"})]})}if("hero"===a){const{name:e,description:a,thumbnail:r,homepage:s,wiki:c,comics:i}=t;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("img",{src:r,alt:e}),(0,h.jsxs)("div",{className:"data__text",children:[(0,h.jsx)("h1",{children:e}),(0,h.jsx)("p",{children:a}),(0,h.jsxs)("div",{className:"data__links",children:[(0,h.jsx)("a",{href:s,className:"btn btn-red",target:"_blank",rel:"noreferrer",children:"Homepage"}),(0,h.jsx)("a",{href:c,className:"btn btn--grey",target:"_blank",rel:"noreferrer",children:"Wiki"})]}),(0,h.jsx)("h3",{children:"Comics:"}),(0,h.jsx)("ul",{children:0===i.length?(0,h.jsx)("li",{children:"No available comics for this hero"}):i.map(((e,t)=>(0,h.jsx)(n.k2,{to:`/comics/${e.resourceURI.match(/\d+$/)[0]}`,children:e.name},t)))})]}),(0,h.jsx)(n.k2,{to:"/",children:"Back"})]})}return null},u=e=>{let{type:t}=e;const{id:a}=(0,s.g)(),[n,u]=(0,r.useState)(null),{loading:m,error:p,getComicsId:g,getCharacter:x,clearError:b}=(0,i.A)();(0,r.useEffect)((()=>{a&&f()}),[a]);const j=e=>{u(e)},f=()=>{b(),a?"comic"===t?g(a).then(j).catch((e=>{console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u043e\u043c\u0438\u043a\u0441\u0430:",e)})):"hero"===t&&x(a).then(j).catch((e=>{console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0433\u0435\u0440\u043e\u044f:",e)})):console.error("ID \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e URL \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d.")},$=p?(0,h.jsx)(l.A,{}):null,k=m?(0,h.jsx)(o.A,{}):null,v=m||p||!n?null:(0,h.jsx)(d,{data:n,type:t});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("img",{src:c,alt:"banner."}),(0,h.jsxs)("div",{className:"data",children:[$,k,v]})]})}},897:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(43);const s=()=>{const{loading:e,error:t,request:a,clearError:s}=(()=>{const[e,t]=(0,r.useState)(!1),[a,s]=(0,r.useState)(null);return{loading:e,request:(0,r.useCallback)((async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};t(!0);try{const s=await fetch(e,{method:a,headers:n,body:r});if(!s.ok)throw new Error(`couldnt fetch ${e}, status ${s.status}`);const c=s.json();return t(!1),c}catch(c){throw t(!1),s(c.message),c}}),[]),error:a,clearError:(0,r.useCallback)((()=>s(null)),[])}})(),n="https://gateway.marvel.com:443/v1/public/",c="apikey=ff64a0784b5d6e42a6564ae4ba4b8975",i=e=>({id:e.id,name:e.name,description:e.description||"unfortunatly, this hero still hasnt his own description...",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension||"",homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items.slice(0,10)}),l=e=>({id:e.id,title:e.title,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,price:e.prices.price?`${e.prices[0].price}$`:"not available",language:e.textObjects.language||"en-us",pageCount:e.pageCount?`${e.pageCount} p.`:"No info",description:e.description||"No info"});return{loading:e,error:t,getCharacter:async e=>{const t=await a(`${n}characters/${e}?${c}`);return i(t.data.results[0])},getAllCharacters:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await a(`${n}characters?limit=9&offset=${e}&${c}`)).data.results.map(i)},clearError:s,getAllComics:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;return(await a(`${n}comics?&limit=8&offset=${e}&${c}`)).data.results.map(l)},getComicsId:async e=>{const t=await a(`${n}comics/${e}?${c}`);return l(t.data.results[0])},getCharacterByName:async e=>{const t=await a(`${n}characters?name=${e}&${c}`);return i(t.data.results[0])}}}},65:(e,t,a)=>{e.exports=a.p+"static/media/banner.cf3bbfbcc6eea4c7badd.jpg"}}]);
//# sourceMappingURL=875.7a124caf.chunk.js.map