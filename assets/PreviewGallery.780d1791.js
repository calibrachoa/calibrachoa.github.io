import w from"./ArticleResponsivePreview.c8a7aa04.js";import x from"./ProseA.d38caff6.js";import g from"./ProseCodeInline.e8063356.js";import{u as k}from"./asyncData.7f948a3a.js";import{d as I,Y as P,I as S,M as l,b as a,c as o,e as n,F as C,Z as A,D as t,g as i,w as p,p as B,j as G,s as N,$ as V,X as b,l as j}from"./entry.6ba4ea85.js";const D=e=>(B("data-v-efe2e00c"),e=e(),G(),e),F={key:0,class:"articles-list"},T={class:"layout"},Y={key:1,class:"tour"},q=D(()=>n("p",null,"Seems like there are no articles yet.",-1)),E=I({__name:"PreviewGallery",props:{path:{type:String,default:"projects"}},async setup(e){let s,r;const d=e,{data:u}=([s,r]=P(async()=>k("articles",async()=>await N(V(d.path)).sort({date:-1}).find())),s=await s,r(),s),c=S(()=>u.value||[]);return(L,M)=>{var _;const m=w,f=x,h=g;return(_=l(c))!=null&&_.length?(a(),o("div",F,[n("div",T,[(a(!0),o(C,null,A(l(c),(y,v)=>(a(),b(m,{key:v,article:y},null,8,["article"]))),128))])])):(a(),o("div",Y,[q,n("p",null,[t(" You can start by "),i(f,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:p(()=>[t("creating")]),_:1}),t(" one in the "),i(h,null,{default:p(()=>[t("articles")]),_:1}),t(" folder. ")])]))}}});const H=j(E,[["__scopeId","data-v-efe2e00c"]]);export{H as default};
