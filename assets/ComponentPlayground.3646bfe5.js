import{u as m}from"./asyncData.7f948a3a.js";import{M as c,I as p,d as i,a2 as u,r as l,N as e,l as d}from"./entry.6ba4ea85.js";import f from"./Ellipsis.312a29de.js";import _ from"./ComponentPlaygroundData.056ec7cd.js";import"./TabsHeader.8abb1ccc.js";import"./ComponentPlaygroundProps.7344b969.js";import"./ProseH4.44d07507.js";import"./ProseCodeInline.e8063356.js";import"./Badge.2386b446.js";import"./MDCSlot.fb737b4e.js";import"./slot.6852f364.js";import"./ProseP.89d62d40.js";import"./index.815e0ea6.js";import"./ComponentPlaygroundSlots.vue.ecee7f6b.js";import"./ComponentPlaygroundTokens.vue.32ff5ff0.js";async function y(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const V=d(g,[["__scopeId","data-v-9ca9b996"]]);export{V as default};