import{u as m}from"./asyncData.bc52de92.js";import{M as c,I as p,d as i,a2 as u,r as l,N as e,l as d}from"./entry.39a830c5.js";import f from"./Ellipsis.d740ea40.js";import _ from"./ComponentPlaygroundData.ac7907a7.js";import"./TabsHeader.53296bc4.js";import"./ComponentPlaygroundProps.c45272a7.js";import"./ProseH4.fc36e467.js";import"./ProseCodeInline.f635d472.js";import"./Badge.9f2bac67.js";import"./MDCSlot.986cc7e1.js";import"./slot.5fca324a.js";import"./ProseP.00af7401.js";import"./index.e83e8d93.js";import"./ComponentPlaygroundSlots.vue.c5ebcd9e.js";import"./ComponentPlaygroundTokens.vue.ecfe463e.js";async function y(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const V=d(g,[["__scopeId","data-v-9ca9b996"]]);export{V as default};