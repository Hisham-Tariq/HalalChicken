(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[827],{31010:function(e,l,a){Promise.resolve().then(a.bind(a,94578))},94578:function(e,l,a){"use strict";a.r(l),a.d(l,{default:function(){return K}});var s=a(9268),r=a(42974),t=a(3586),n=a(95560),i=a(9280),c=a(62339),d=a(4492),o=a(55483),m=a(92391),x=a(67830),h=a(74238),u=a(13543),g=a(99345),j=a(96785),p=a(98364),f=a(72950),y=a(19700),N=a(8794),b=a(25878),v=a(73746),I=a(26602),w=a(47777),C=a(86006);let k=["image/jpeg","image/jpg","image/png","image/webp"],S=h.t8.filter(e=>"Pizza"!=e),z={name:"",description:"",price:0,availableInMeal:!1,mealPrice:0,image:"",category:S[0],mainCategory:(0,h.BV)(S[0])},P=m.Ry({name:m.Z_().nonempty({message:"Name is required."}),description:m.Z_().nonempty({message:"Description is required."}),price:m.Rx().min(1,{message:"Must be greater than 1."}),image:m.Z_({required_error:"Image is required."}),category:m.Km(h.t8,{required_error:"Please select a category."}),mainCategory:m.Km(h.YW,{required_error:"Please select a category."})}),V=m.VK("availableInMeal",[m.Ry({availableInMeal:m.i0(!0),mealPrice:m.Rx().min(1,{message:"Meal Price must be at least 1."})}).merge(P),m.Ry({availableInMeal:m.i0(!1),mealPrice:m.Rx().min(0,{message:"Meal Price must be at least 0."})}).merge(P)]);function M(e){let{children:l,item:a}=e,[t,n]=(0,C.useState)(null),i=(e,l)=>{var a;let s;let r=null===(a=e.target.files)||void 0===a?void 0:a[0];r?r.size>5e5?s="Max file size is 5MB.":k.includes(r.type)||(s=".jpg, .jpeg, .png and .webp files are accepted."):s="Image is required",s?m.setError("image",{type:"value",message:s}):(n(r),m.clearErrors("image")),l(e)},m=(0,y.cI)({resolver:(0,x.F)(V),defaultValues:a?{...a,image:a.image.downloadURL}:z});return(0,s.jsxs)(u.Vq,{onOpenChange:e=>{if(e){let{image:e,...l}=null!=a?a:z;m.reset({...l,image:""})}},children:[(0,s.jsx)(u.hg,{asChild:!0,children:l}),(0,s.jsxs)(u.cZ,{className:"sm:max-w-[800px] sm:max-h-[550px] flex flex-col p-0",children:[(0,s.jsxs)(u.fK,{className:"pt-6 px-6",children:[(0,s.jsx)(u.$N,{children:"New Item"}),(0,s.jsx)(u.Be,{children:"Create a new item by filling out the form below."})]}),(0,s.jsx)(b.ScrollArea,{className:"h-[450px] px-6 pb-6",children:(0,s.jsx)(N.l0,{...m,children:(0,s.jsxs)("form",{onSubmit:m.handleSubmit(function(e){if(null==t&&null==a){(0,o.Am)({title:"Item Image",description:"Image is required"});return}if(null==a){let l={...e,image:t};d.k.instance.addFoodItem(l).then(()=>{(0,o.Am)({title:"Item Added",description:"Item has been added successfully"}),m.reset(z)})}else{let l;l=null!=t?{...a,...e,image:t}:{...a,...e,image:a.image},d.k.instance.updateFoodItem(a.id,l,a).then(()=>{(0,o.Am)({title:"Item Updated",description:"Item has been updated successfully"}),m.reset(z)})}}),className:"grid grid-cols-2 gap-2",children:[(0,s.jsxs)("div",{className:"col-span-full flex flex-row gap-2",children:[(0,s.jsx)(N.Wi,{control:m.control,name:"name",render:e=>{let{field:l}=e;return(0,s.jsxs)(N.xJ,{className:"flex-1",children:[(0,s.jsx)(N.lX,{children:"Name"}),(0,s.jsx)(N.NI,{children:(0,s.jsx)(g.I,{placeholder:"Chicken Biryani",...l})}),(0,s.jsx)(N.zG,{})]})}}),(0,s.jsx)(N.Wi,{control:m.control,name:"price",render:e=>{let{field:l}=e;return(0,s.jsxs)(N.xJ,{className:"flex-1",children:[(0,s.jsx)(N.lX,{children:"Price"}),(0,s.jsx)(N.NI,{children:(0,s.jsx)(g.I,{type:"number",placeholder:"10.99",...l,onChange:e=>{let l=(0,I.t)(e.target.value);m.setValue("price",l)}})}),(0,s.jsx)(N.zG,{})]})}}),(0,s.jsx)(N.Wi,{control:m.control,name:"category",render:e=>{let{field:l}=e;return(0,s.jsxs)(N.xJ,{className:"flex flex-col flex-1 space-y-0",children:[(0,s.jsx)(N.lX,{className:"my-2",children:"Language"}),(0,s.jsxs)(v.J2,{children:[(0,s.jsx)(v.xo,{asChild:!0,children:(0,s.jsx)(N.NI,{children:(0,s.jsxs)(c.z,{variant:"outline",role:"combobox",className:(0,I.cn)("w-full justify-between",!l.value&&"text-muted-foreground"),children:[l.value||"Select Category",(0,s.jsx)(j.Z,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})})}),(0,s.jsx)(v.yk,{className:"w-full p-0",children:(0,s.jsxs)(w.mY,{children:[(0,s.jsx)(w.sZ,{placeholder:"Search Category"}),(0,s.jsx)(w.rb,{children:"No category found."}),(0,s.jsx)(w.fu,{children:h.t8.map(e=>(0,s.jsxs)(w.di,{value:e,onSelect:e=>{let l=h.t8.find(l=>l.toLowerCase()===e);m.setValue("category",l),m.setValue("mainCategory",(0,h.BV)(l))},children:[(0,s.jsx)(p.Z,{className:(0,I.cn)("mr-2 h-4 w-4",e===l.value?"opacity-100":"opacity-0")}),e]},e))})]})})]}),(0,s.jsx)(N.zG,{})]})}})]}),(0,s.jsx)("div",{className:"col-span-2",children:(0,s.jsx)(N.Wi,{control:m.control,name:"description",render:e=>{let{field:l}=e;return(0,s.jsxs)(N.xJ,{children:[(0,s.jsx)(N.lX,{children:"Description"}),(0,s.jsx)(N.NI,{children:(0,s.jsx)(g.I,{placeholder:"Aromatic rice dish with chicken",...l})}),(0,s.jsx)(N.pf,{children:"Enter a description for the food item."}),(0,s.jsx)(N.zG,{})]})}})}),(0,s.jsx)(N.Wi,{control:m.control,name:"mealPrice",render:e=>{let{field:l}=e;return(0,s.jsxs)(N.xJ,{children:[(0,s.jsx)(N.lX,{children:"Meal Price"}),(0,s.jsxs)("div",{className:"flex flex-row justify-start",children:[(0,s.jsx)(N.Wi,{control:m.control,name:"availableInMeal",render:e=>{let{field:l}=e;return(0,s.jsx)(N.xJ,{className:"flex rounded-md rounded-e-none  border py-2  px-3 justify-center items-center",children:(0,s.jsx)(N.NI,{children:(0,s.jsx)(r.X,{checked:l.value,onCheckedChange:l.onChange})})})}}),(0,s.jsx)(N.NI,{className:"flex-1",children:(0,s.jsx)(g.I,{disabled:!m.getValues().availableInMeal,className:"rounded-s-none",type:"number",placeholder:"15.99",...l,onChange:e=>{let l=(0,I.t)(e.target.value);m.setValue("mealPrice",l)}})})]}),(0,s.jsx)(N.pf,{children:"Check and enter the meal price of the food item."}),(0,s.jsx)(N.zG,{})]})}}),(0,s.jsx)(N.Wi,{control:m.control,name:"image",render:e=>{let{field:l}=e;return(0,s.jsxs)(N.xJ,{children:[(0,s.jsx)(N.lX,{children:"Image"}),(0,s.jsx)(N.NI,{children:(0,s.jsx)(g.I,{type:"file",...l,onChange:e=>i(e,l.onChange)})}),(0,s.jsx)(N.pf,{children:"Enter the URL of the image for the food item."}),(0,s.jsx)(N.zG,{})]})}}),(0,s.jsx)(u.cN,{className:"col-span-2 flex justify-end",children:(0,s.jsxs)(c.z,{size:"lg",type:"submit",children:[(0,s.jsx)(f.Z,{className:"mr-2 h-4 w-4"}),a?"Update":"Save Changes"]})})]})})})]})]})}function F(e){let{row:l}=e;return(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)(M,{item:l.original,children:(0,s.jsxs)(c.z,{variant:"ghost",className:"flex h-8 w-8 p-0 bg-muted",children:[(0,s.jsx)(n.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Edit"})]})}),(0,s.jsx)(Z,{item:l.original})]})}let Z=e=>{let{item:l}=e,{toast:a}=(0,o.pm)(),[r,t]=(0,C.useState)(!1);return(0,s.jsx)(c.z,{variant:"ghost",onClick:async()=>{t(!0);try{await d.k.instance.delete(l),a({title:"Food Item Deleted",description:"Food Item has been deleted."})}catch(e){a({title:"Error",description:"Failed to delete food item.",variant:"destructive"})}finally{t(!1)}},className:"flex h-8 w-8 p-0 bg-muted",disabled:r,children:r?(0,s.jsx)(LoadingCircle,{size:4}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Delete"})]})})};var _=a(61750);let q=(0,_.Z)("CircleDollarSign",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);var A=a(87819);let R=[{id:"select",header:e=>{let{table:l}=e;return(0,s.jsx)(r.X,{checked:l.getIsAllPageRowsSelected(),onCheckedChange:e=>l.toggleAllPageRowsSelected(!!e),"aria-label":"Select all",className:"translate-y-[2px]"})},cell:e=>{let{row:l}=e;return(0,s.jsx)(r.X,{checked:l.getIsSelected(),onCheckedChange:e=>l.toggleSelected(!!e),"aria-label":"Select row",className:"translate-y-[2px]"})},enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:e=>{let{column:l}=e;return(0,s.jsx)(t.p,{column:l,title:"Name"})},cell:e=>{let{row:l}=e;return(0,s.jsxs)("div",{className:"flex gap-2 w-[120px]",children:[(0,s.jsxs)(A.Avatar,{children:[(0,s.jsx)(A.AvatarImage,{src:l.original.image.downloadURL,alt:"Food Item Image"}),(0,s.jsx)(A.AvatarFallback,{children:"IT"})]}),(0,s.jsx)("span",{children:l.getValue("name")})]})},enableSorting:!0,enableHiding:!1},{accessorKey:"description",header:e=>{let{column:l}=e;return(0,s.jsx)(t.p,{column:l,title:"Description"})},cell:e=>{let{row:l}=e;return(0,s.jsx)("div",{className:"w-[150px]",children:l.getValue("description")})},enableSorting:!1,enableHiding:!1},{accessorKey:"category",header:e=>{let{column:l}=e;return(0,s.jsx)(t.p,{column:l,title:"Category"})},cell:e=>{let{row:l}=e;return(0,s.jsx)("div",{className:"",children:l.getValue("category")})},filterFn:(e,l,a)=>a.includes(e.original.category),enableSorting:!0,enableHiding:!1},{accessorKey:"price",header:e=>{let{column:l}=e;return(0,s.jsx)(t.p,{column:l,title:"Price"})},cell:e=>{let{row:l}=e;return(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(q,{className:"mr-2 h-4 w-4 text-muted-foreground"}),(0,s.jsx)("span",{children:l.getValue("price")})]})},filterFn:(e,l,a)=>a.includes(e.getValue(l))},{id:"actions",cell:e=>{let{row:l}=e;return(0,s.jsx)(F,{row:l})}}];var E=a(74880),X=a(88589),J=a(6630);function K(){let e=d.k.instance.store(e=>e.data);return(0,s.jsxs)("div",{className:"flex-1 space-y-4 p-8 pt-6",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between space-y-2",children:[(0,s.jsx)("h2",{className:"text-3xl font-bold tracking-tight",children:"Food Items"}),(0,s.jsx)("div",{className:"flex items-center space-x-2",children:(0,s.jsx)(M,{children:(0,s.jsxs)(c.z,{size:"sm",children:[(0,s.jsx)(X.Z,{className:"mr-2 h-4 w-4"}),"New Item"]})})})]}),(0,s.jsx)(E.w,{data:e,columns:R,toolbar:e=>(0,s.jsx)(J.C,{table:e})})]})}}},function(e){e.O(0,[662,913,547,368,8,868,586,982,997,340,389,253,488,744],function(){return e(e.s=31010)}),_N_E=e.O()}]);