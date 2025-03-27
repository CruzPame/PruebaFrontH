import{a as g,b as f,c as N}from"/build/_shared/chunk-5AHWU6HX.js";import{a as x,d as h,n as u}from"/build/_shared/chunk-CSFFMNUI.js";import{c,d as D,f as p,n as b}from"/build/_shared/chunk-7CBRR5GS.js";var a=c(D(),1);var e=c(b(),1);function v(){let r=p(),[o,y]=(0,a.useState)(!0),[s,w]=(0,a.useState)(""),[l,C]=(0,a.useState)(!0),k="Dashboard",[S,P]=(0,a.useState)([{id:1,problema:"No prende",cliente:"Densua",asset:"Refrigerador",tecnico:"Alexis Perez",status:"Abierto",tipo:"Correctivo",fecha:"2021-12-08"},{id:2,problema:"Pantalla rota",cliente:"Margarita",asset:"Laptop",tecnico:"Juan L\xF3pez",status:"En Proceso",tipo:"Preventivo",fecha:"2022-01-12"},{id:3,problema:"No carga",cliente:"Carlos",asset:"Tel\xE9fono",tecnico:"Ana S\xE1nchez",status:"Cerrado",tipo:"Correctivo",fecha:"2021-02-15"}]);(0,a.useEffect)(()=>{localStorage.getItem("token")||(g(),r("/login"))},[]);let T=[...S.filter(t=>t.problema.toLowerCase().includes(s.toLowerCase())||t.cliente.toLowerCase().includes(s.toLowerCase())||t.asset.toLowerCase().includes(s.toLowerCase())||t.tecnico.toLowerCase().includes(s.toLowerCase()))].sort((t,A)=>{let n=new Date(t.fecha).getTime(),m=new Date(A.fecha).getTime();return l?n-m:m-n}),L=()=>{C(!l)},d=()=>{y(!o)};return(0,e.jsxs)("div",{className:"w-screen h-screen flex bg-sky-50 relative",children:[(0,e.jsx)(f,{sidebarVisible:o,toggleSidebar:d}),(0,e.jsxs)("div",{className:"flex-1 flex flex-col",children:[(0,e.jsx)(N,{toggleSidebar:d,title:k}),(0,e.jsxs)("main",{className:"flex-1 p-4 md:p-6 overflow-auto",children:[(0,e.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[(0,e.jsx)(i,{title:"Tickets",value:12}),(0,e.jsx)(i,{title:"Clientes",value:128}),(0,e.jsx)(i,{title:"T\xE9cnicos Disponibles",value:10})]}),(0,e.jsxs)("div",{className:"bg-white shadow-md rounded-3xl p-6 mt-6",children:[(0,e.jsx)("h2",{className:"text-xl font-semibold text-black mb-4",children:"Tickets Recientes"}),(0,e.jsxs)("div",{className:"flex items-center mb-4 space-x-6",children:[(0,e.jsxs)("div",{className:"flex items-center border border-gray-300 rounded-md p-2 bg-white",children:[(0,e.jsx)(u,{className:"w-5 h-5 text-black"}),(0,e.jsx)("input",{type:"text",placeholder:"Buscar...",className:"ml-2 outline-none text-black bg-white",value:s,onChange:t=>w(t.target.value)})]}),(0,e.jsxs)("button",{className:"flex items-center bg-gray-300 text-black p-2 rounded-md space-x-2",onClick:L,children:[l?(0,e.jsx)(x,{className:"w-5 h-5"}):(0,e.jsx)(h,{className:"w-5 h-5"}),(0,e.jsx)("span",{children:l?"Ascendente":"Descendente"})]})]}),(0,e.jsxs)("table",{className:"w-full text-left border-collapse",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{className:"bg-gray-100 text-black uppercase text-sm leading-normal",children:[(0,e.jsx)("th",{className:"py-3 px-6",children:"ID"}),(0,e.jsx)("th",{className:"py-3 px-6",children:"Problema"}),(0,e.jsx)("th",{className:"py-3 px-6",children:"Cliente"}),(0,e.jsx)("th",{className:"py-3 px-6",children:"Nombre Assets"}),(0,e.jsx)("th",{className:"py-3 px-6",children:"Nombre T\xE9cnico"}),(0,e.jsx)("th",{className:"py-3 px-6",children:"Status"}),(0,e.jsx)("th",{className:"py-3 px-6",children:"Tipo"}),(0,e.jsx)("th",{className:"py-3 px-6",children:"Fecha de Alta"})]})}),(0,e.jsx)("tbody",{children:T.map(t=>(0,e.jsxs)("tr",{className:"border-b border-gray-200 hover:bg-gray-100",children:[(0,e.jsx)("td",{className:"py-3 px-6 text-blue-500",children:t.id}),(0,e.jsx)("td",{className:"py-3 px-6 text-black",children:t.problema}),(0,e.jsx)("td",{className:"py-3 px-6 text-black",children:t.cliente}),(0,e.jsx)("td",{className:"py-3 px-6 text-black",children:t.asset}),(0,e.jsx)("td",{className:"py-3 px-6 text-black",children:t.tecnico}),(0,e.jsx)("td",{className:"py-3 px-6 text-black",children:(0,e.jsx)("button",{className:"px-2 py-1 rounded-md bg-green-500 text-white",children:t.status})}),(0,e.jsx)("td",{className:"py-3 px-6 text-black",children:t.tipo}),(0,e.jsx)("td",{className:"py-3 px-6 text-black",children:t.fecha})]},t.id))})]})]})]})]})]})}function i({title:r,value:o}){return(0,e.jsx)("div",{className:"bg-white shadow-md rounded-3xl p-6 flex items-center justify-between space-x-4",children:(0,e.jsxs)("div",{className:"flex flex-col",children:[(0,e.jsx)("h3",{className:"text-lg font-semibold text-gray-800",children:r}),(0,e.jsx)("p",{className:"text-2xl font-bold text-blue-500",children:o})]})})}export{v as default};
