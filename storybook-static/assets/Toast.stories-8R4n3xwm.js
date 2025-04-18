import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{R as i}from"./index-D4lIrffr.js";import{t as j}from"./bundle-mjs-BJOqOzcM.js";const q={success:"bg-green-100 text-green-800",error:"bg-red-100 text-red-800",warning:"bg-yellow-100 text-yellow-800",info:"bg-blue-100 text-blue-800"},w=({message:b,variant:h="info",duration:o=3e3,onClose:e})=>{const[S,D]=i.useState(!0);return i.useEffect(()=>{const E=setTimeout(()=>{D(!1),e==null||e()},o);return()=>clearTimeout(E)},[o,e]),S?n.jsx("div",{role:"alert","aria-live":"polite",className:j("fixed bottom-4 right-4 p-4 rounded-lg shadow-lg max-w-xs",q[h]),children:n.jsx("p",{children:b})}):null};w.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{message:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'success' | 'error' | 'warning' | 'info'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const O={title:"components/Feedback/Toast",component:w,tags:["autodocs"],argTypes:{variant:{control:"select",options:["success","error","warning","info"],description:"Visual style variant"},message:{control:"text",description:"Toast content text"},duration:{control:{type:"number",min:1e3,max:1e4,step:500},description:"Auto-close duration in ms"},onClose:{action:"closed",description:"Callback when toast closes"}},parameters:{layout:"centered"}},s={args:{message:"Operation completed successfully!"}},a={args:{variant:"success",message:"Data saved successfully!"}},r={args:{variant:"error",message:"Failed to save data!"}},t={args:{duration:5e3,message:"This toast will stay for 5 seconds"}};var c,l,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    message: 'Operation completed successfully!'
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    message: 'Data saved successfully!'
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,f,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    message: 'Failed to save data!'
  }
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var T,y,x;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    duration: 5000,
    message: 'This toast will stay for 5 seconds'
  }
}`,...(x=(y=t.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const R=["Default","SuccessToast","ErrorToast","LongDurationToast"];export{s as Default,r as ErrorToast,t as LongDurationToast,a as SuccessToast,R as __namedExportsOrder,O as default};
