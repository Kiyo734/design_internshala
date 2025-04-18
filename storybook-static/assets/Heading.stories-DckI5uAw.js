import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{t as u}from"./bundle-mjs-BJOqOzcM.js";const H={h1:"text-4xl font-bold",h2:"text-3xl font-bold",h3:"text-2xl font-semibold",h4:"text-xl font-semibold",h5:"text-lg font-medium",h6:"text-base font-medium"},a=({as:t="h1",className:c="",children:m,...g})=>{const p=t;return e.jsx(p,{className:u(H[t],c),...g,children:m})};a.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{as:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:"",defaultValue:{value:"'h1'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const v={title:"Typography/Heading",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{as:{control:"select",options:["h1","h2","h3","h4","h5","h6"],description:"Heading level (h1-h6)"},className:{control:"text",description:"Additional Tailwind classes"}}},n={args:{children:"Default Heading"}},s={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{as:"h1",children:"Heading 1"}),e.jsx(a,{as:"h2",children:"Heading 2"}),e.jsx(a,{as:"h3",children:"Heading 3"}),e.jsx(a,{as:"h4",children:"Heading 4"}),e.jsx(a,{as:"h5",children:"Heading 5"}),e.jsx(a,{as:"h6",children:"Heading 6"})]})};var r,i,d;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    children: 'Default Heading'
  }
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,o,h;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Heading as="h1">Heading 1</Heading>\r
      <Heading as="h2">Heading 2</Heading>\r
      <Heading as="h3">Heading 3</Heading>\r
      <Heading as="h4">Heading 4</Heading>\r
      <Heading as="h5">Heading 5</Heading>\r
      <Heading as="h6">Heading 6</Heading>\r
    </div>
}`,...(h=(o=s.parameters)==null?void 0:o.docs)==null?void 0:h.source}}};const j=["Default","AllLevels"];export{s as AllLevels,n as Default,j as __namedExportsOrder,v as default};
