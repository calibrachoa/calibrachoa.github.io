import{u as m}from"./asyncData.69825aea.js";import{M as c,I as p,d as i,ae as u,r as l,N as n,l as d}from"./entry.60b7c2d6.js";import f from"./Ellipsis.ed81d211.js";import _ from"./ComponentPlaygroundData.16cfede9.js";import"./TabsHeader.7f2bdf26.js";import"./ComponentPlaygroundProps.d9156bd7.js";import"./ProseH4.d604f5c9.js";import"./ProseCodeInline.ea697e91.js";import"./Badge.5a7b6ddc.js";import"./MDCSlot.9291b145.js";import"./slot.aa46f8ba.js";import"./ProseP.2d7b9286.js";import"./index.acd21d35.js";import"./ComponentPlaygroundSlots.vue.079897ec.js";import"./ComponentPlaygroundTokens.vue.07944696.js";async function y(o){const t=c(o);{const{data:e}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=l({...o.props}),r=await y(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const V=d(g,[["__scopeId","data-v-9ca9b996"]]);export{V as default};
