import{d as c,o as a,c as i,a as t,r as u,b as e,w as s,u as d,_ as h,t as w}from"./index-9zLaafVJ.js";const m={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},x=t("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[t("path",{d:"M10 3.2A9 9 0 1 0 20.8 14a1 1 0 0 0-1-1H13a2 2 0 0 1-2-2V4a.9.9 0 0 0-1-.8"}),t("path",{d:"M15 3.5A9 9 0 0 1 20.5 9H16a1 1 0 0 1-1-1V3.5"})],-1),f=[x],g=c({name:"ChartPie",render:function(n,o){return a(),i("svg",m,f)}}),k={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},v=t("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[t("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065z"}),t("circle",{cx:"12",cy:"12",r:"3"})],-1),$=[v],C=c({name:"Settings",render:function(n,o){return a(),i("svg",k,$)}}),b={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},B=t("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[t("path",{d:"M19 8.71l-5.333-4.148a2.666 2.666 0 0 0-3.274 0L5.059 8.71a2.665 2.665 0 0 0-1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.2c0-.823-.38-1.6-1.03-2.105"}),t("path",{d:"M16 15c-2.21 1.333-5.792 1.333-8 0"})],-1),M=[B],S=c({name:"SmartHome",render:function(n,o){return a(),i("svg",b,M)}}),j={class:"flex flex-col item-footer gap-2"},z={class:"flex justify-between items-center grow"},H=c({__name:"FooterPage",setup(l){return(n,o)=>{const _=u("n-icon"),r=u("n-button");return a(),i("div",j,[t("div",z,[e(r,{text:"",onClick:o[0]||(o[0]=p=>n.$router.push({name:"charts"}))},{default:s(()=>[e(_,{size:24,color:"#eeeeee"},{default:s(()=>[e(d(g))]),_:1})]),_:1}),e(r,{text:"",onClick:o[1]||(o[1]=p=>n.$router.push({name:"home"}))},{default:s(()=>[e(_,{size:30,color:"#eeeeee"},{default:s(()=>[e(d(S))]),_:1})]),_:1}),e(r,{text:"",onClick:o[2]||(o[2]=p=>n.$router.push({name:"settings"}))},{default:s(()=>[e(_,{size:24,color:"#eeeeee"},{default:s(()=>[e(d(C))]),_:1})]),_:1})])])}}}),P=h(H,[["__scopeId","data-v-3c75a7bb"]]),V={class:"flex grow flex-col w-full main-container"},y={class:"fixed bottom-[80px] right-4"},F=c({__name:"Main",setup(l){const n="0.0.24";return(o,_)=>{const r=u("router-view");return a(),i("div",V,[e(r,{class:"h-[100vh]"}),e(P),t("span",y,w(d(n)),1)])}}});export{F as default};