import{d as I,V as B,i as V,x as D,r as N,C as S,I as j,b as s,c as n,g as c,w as T,M as e,e as i,t as p,f as _,a6 as A,ax as E,E as M,D as P,a7 as $,p as H,j as L,l as R}from"./entry.39a830c5.js";import q from"./ProseA.1842e0aa.js";import{f as z}from"./date.824a539b.js";const F=a=>(H("data-v-70549822"),a=a(),L(),a),G=F(()=>i("span",null," Back ",-1)),J={key:0,class:"title"},K=["datetime"],O={class:"prose"},Q={key:0,class:"back-to-top"},U=I({__name:"article",setup(a){const{page:o}=B(),b=V(),r=D().alpine,l=N(null);o.value&&o.value.cover&&S({meta:[{property:"og:image",content:o.value.cover}]});const y=j(()=>{const t=b.path.split("/");return t.pop(),t.join("/")}),w=()=>{var t;(t=l.value)==null||t.scrollIntoView({behavior:"smooth"})};return(t,W)=>{var u,m,f;const d=$,C=M,g=q;return s(),n("article",{ref_key:"article",ref:l},[c(C,{to:e(y),class:"back"},{default:T(()=>[c(d,{name:"ph:arrow-left"}),G]),_:1},8,["to"]),i("header",null,[(u=e(o))!=null&&u.title?(s(),n("h1",J,p(e(o).title),1)):_("",!0),(m=e(o))!=null&&m.date?(s(),n("time",{key:1,datetime:e(o).date},p(("formatDate"in t?t.formatDate:e(z))(e(o).date)),9,K)):_("",!0)]),i("div",O,[A(t.$slots,"default",{},void 0,!0),(f=e(r))!=null&&f.backToTop?(s(),n("div",Q,[c(g,{onClick:E(w,["prevent","stop"])},{default:T(()=>{var h,k,v,x;return[P(p(((k=(h=e(r))==null?void 0:h.backToTop)==null?void 0:k.text)||"Back to top")+" ",1),c(d,{name:((x=(v=e(r))==null?void 0:v.backToTop)==null?void 0:x.icon)||"material-symbols:arrow-upward"},null,8,["name"])]}),_:1},8,["onClick"])])):_("",!0)])],512)}}});const ee=R(U,[["__scopeId","data-v-70549822"]]);export{ee as default};