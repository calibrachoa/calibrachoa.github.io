import{d as u,I as m,a0 as h,b as i,c as f,e as c,g as o,w as s,X as p,f as r,t as v,M as x,a1 as g,E as k,l as w}from"./entry.6ba4ea85.js";const y=["data-content-id"],b={class:"image"},N={class:"content"},B=u({__name:"ArticleResponsivePreview",props:{article:{type:Object,required:!0,validator:t=>!!(t!=null&&t._path&&t.title)}},setup(t){const l=t,d=m(()=>{var e,a;return(e=h())!=null&&e.isEnabled()?(a=l.article)==null?void 0:a._id:void 0});return(e,a)=>{const _=g,n=k;return t.article._path&&t.article.title?(i(),f("article",{key:0,"data-content-id":x(d)},[c("div",b,[o(n,{to:t.article._path},{default:s(()=>[t.article.cover?(i(),p(_,{key:0,src:t.article.cover,alt:t.article.title,width:"16",height:"9"},null,8,["src","alt"])):r("",!0)]),_:1},8,["to"])]),c("div",N,[o(n,{to:t.article._path,class:"headline"},{default:s(()=>[c("h1",null,v(t.article.title),1)]),_:1},8,["to"])])],8,y)):r("",!0)}}});const E=w(B,[["__scopeId","data-v-056a1dcb"]]);export{E as default};