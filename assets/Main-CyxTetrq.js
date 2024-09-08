import{d as c,o as a,c as i,a as t,u as m,r as w,b as e,w as r,e as l,_ as x,f,t as g}from"./index-BmwkY0PP.js";const k={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},v=t("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[t("path",{d:"M10 3.2A9 9 0 1 0 20.8 14a1 1 0 0 0-1-1H13a2 2 0 0 1-2-2V4a.9.9 0 0 0-1-.8"}),t("path",{d:"M15 3.5A9 9 0 0 1 20.5 9H16a1 1 0 0 1-1-1V3.5"})],-1),$=[v],C=c({name:"ChartPie",render:function(s,n){return a(),i("svg",k,$)}}),b={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},B=t("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[t("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065z"}),t("circle",{cx:"12",cy:"12",r:"3"})],-1),M=[B],H=c({name:"Settings",render:function(s,n){return a(),i("svg",b,M)}}),S={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},j=t("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[t("path",{d:"M19 8.71l-5.333-4.148a2.666 2.666 0 0 0-3.274 0L5.059 8.71a2.665 2.665 0 0 0-1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.2c0-.823-.38-1.6-1.03-2.105"}),t("path",{d:"M16 15c-2.21 1.333-5.792 1.333-8 0"})],-1),z=[j],P=c({name:"SmartHome",render:function(s,n){return a(),i("svg",S,z)}}),V={class:"flex flex-col item-footer gap-2"},y={class:"flex justify-between items-center grow"},A=c({__name:"FooterPage",setup(_){const s=m(),n=d=>{x.HapticFeedback.impactOccurred("medium"),s.push({name:d})};return(d,o)=>{const u=w("n-icon"),p=w("n-button");return a(),i("div",V,[t("div",y,[e(p,{text:"",onClick:o[0]||(o[0]=h=>n("charts"))},{default:r(()=>[e(u,{size:24,color:"#eeeeee"},{default:r(()=>[e(l(C))]),_:1})]),_:1}),e(p,{text:"",onClick:o[1]||(o[1]=h=>n("home"))},{default:r(()=>[e(u,{size:30,color:"#eeeeee"},{default:r(()=>[e(l(P))]),_:1})]),_:1}),e(p,{text:"",onClick:o[2]||(o[2]=h=>n("settings"))},{default:r(()=>[e(u,{size:24,color:"#eeeeee"},{default:r(()=>[e(l(H))]),_:1})]),_:1})])])}}}),F=f(A,[["__scopeId","data-v-7307f054"]]),N={class:"flex grow flex-col w-full main-container"},D={class:"fixed bottom-[80px] right-4"},I=c({__name:"Main",setup(_){const s="0.0.24";return(n,d)=>{const o=w("router-view");return a(),i("div",N,[e(o,{class:"h-[100vh]"}),e(F),t("span",D,g(l(s)),1)])}}});export{I as default};
