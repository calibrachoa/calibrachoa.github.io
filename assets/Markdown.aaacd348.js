import s from"./ContentSlot.2df8abef.js";import{d as o,ae as u,I as f,ad as m}from"./entry.6ba4ea85.js";import"./MDCSlot.fb737b4e.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=m(),{between:n,default:a}=u(),r=f(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{d as default};