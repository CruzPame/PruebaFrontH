import{c as a,d as p,f as s,n as l}from"/build/_shared/chunk-TLAMDKH4.js";var i=a(p(),1);var t=a(l(),1);function c(){let f=s(),[x,d]=(0,i.useState)([]),n=(0,i.useRef)([]);(0,i.useEffect)(()=>{n.current=Array.from({length:50},()=>({x:Math.random()*100,y:Math.random()*100,size:Math.random()*8+2,opacity:Math.random()*.5+.3,dx:Math.random()*.2-.1,dy:Math.random()*.2-.1})),d([...n.current]);let e=()=>{n.current.forEach(o=>{o.x=(o.x+o.dx+100)%100,o.y=(o.y+o.dy+100)%100}),d([...n.current]),requestAnimationFrame(e)},r=requestAnimationFrame(e);return()=>cancelAnimationFrame(r)},[]);let m=()=>{f("/landingPage")};return(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",backgroundColor:"#F8F9FC",fontFamily:"Arial, sans-serif",position:"relative",overflow:"hidden"},children:[x.map((e,r)=>(0,t.jsx)("div",{style:{position:"absolute",top:`${e.y}%`,left:`${e.x}%`,width:`${e.size}px`,height:`${e.size}px`,backgroundColor:`rgba(37, 99, 235, ${e.opacity})`,borderRadius:"50%",transform:"translate(-50%, -50%)"}},r)),(0,t.jsxs)("div",{style:{backgroundColor:"#FFFFFF",padding:"50px",borderRadius:"16px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)",textAlign:"center",zIndex:1,position:"relative",width:"100%",maxWidth:"400px"},children:[(0,t.jsx)("div",{style:{backgroundColor:"#1947BA",width:"80px",height:"80px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 30px"},children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"#ffffff",style:{width:"40px",height:"40px"},children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})})}),(0,t.jsx)("h1",{style:{fontSize:"24px",fontWeight:"bold",color:"#111827",marginBottom:"20px"},children:"N\xFAmero de tel\xE9fono verificado"}),(0,t.jsx)("p",{style:{fontSize:"16px",color:"#6B7280",marginBottom:"30px",lineHeight:"1.5"},children:"Felicitaciones, su n\xFAmero de tel\xE9fono ha sido verificado. Puedes empezar a usar la aplicaci\xF3n."}),(0,t.jsx)("button",{onClick:m,style:{width:"100%",maxWidth:"300px",backgroundColor:"#1947BA",color:"#ffffff",fontSize:"16px",fontWeight:"bold",padding:"14px",borderRadius:"24px",border:"none",cursor:"pointer",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)"},children:"Continuar"})]})]})}export{c as default};
