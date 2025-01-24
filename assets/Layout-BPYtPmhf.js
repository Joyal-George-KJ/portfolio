import{r as s,j as e,L as c,O as u}from"./index-L1gVFjyg.js";function p(){const[l,o]=s.useState(!1);return s.useState(window.innerWidth),e.jsx("div",{className:"relative z-30",children:e.jsxs("nav",{className:"flex justify-between items-center py-4 px-8 font-mono bg-transparent backdrop-blur-md text-neutral-200 mobile:text-base tablet:text-xl pl-8",children:[e.jsx("ul",{children:e.jsx("li",{className:"cursor-pointer list-none h-7 grid place-items-center",children:e.jsx(c,{to:"/",className:"mobile:text-base tablet:text-xl",children:"Joyal George K J"})})}),e.jsxs("ul",{className:`flex ${l?"flex-col absolute items-end right-0 p-4 pt-4 bg-neutral-800 py-12 top-0 h-screen mobile:w-3/4 laptop:w-full z-40":"justify-center"} gap-8 laptop:text-xl backdrop-blur-md text-neutral-200`,children:[e.jsx("li",{children:e.jsx("button",{onClick:()=>o(!l),className:`${l&&"px-4"} cursor-pointer text-xl z-50`,"aria-label":"Toggle Menu",children:e.jsx("i",{className:`bi bi-${l?"x-lg":"list"}`})})}),l&&e.jsxs(e.Fragment,{children:[e.jsx("li",{className:"cursor-pointer px-2 w-max",children:e.jsx(c,{onClick:()=>o(!l),to:"/blog",children:"Blog"})}),e.jsx("li",{className:"cursor-pointer px-2 w-max",children:e.jsx(c,{onClick:()=>o(!l),to:"/project",children:"Project"})}),e.jsx("li",{className:"cursor-pointer px-2 w-max",children:e.jsx(c,{onClick:()=>o(!l),to:"/about",children:"About"})}),e.jsx("li",{className:"cursor-pointer px-2 w-max",children:e.jsx("button",{children:"Login"})})]})]})]})})}function g(l){const o=s.useRef(),a=s.useRef([]),d=(i,n,r)=>{const t=[];for(let m=0;m<i;m++)t.push({x:Math.random()*n,y:Math.random()*r,radius:Math.random()*2+1,isShooting:!1,dx:0,dy:0});return t},x=()=>{a.current.forEach(n=>{n.isShooting=!1,n.dx=0,n.dy=0}),a.current.sort(()=>.5-Math.random()).slice(0,Math.floor(Math.random()*4)+2).forEach(n=>{n.isShooting=!0,n.dx=Math.random()*2+2,n.dy=Math.random()*2-1})},h=(i,n,r)=>{i.clearRect(0,0,n,r),a.current.forEach(t=>{t.isShooting&&(t.x+=t.dx-2,t.y+=t.dy-2,(t.x>n||t.y>r||t.y<0)&&(t.x=Math.random()*n,t.y=Math.random()*r,t.isShooting=!1)),t.radius=Math.random()*2>t.radius?t.radius+.1:t.radius-.1,i.beginPath(),i.fillStyle=t.isShooting?"rgba(255, 255, 255, 1)":"white",i.arc(t.x,t.y,t.radius,0,2*Math.PI),i.fill()}),requestAnimationFrame(()=>h(i,n,r))};return s.useEffect(()=>{const i=o.current,n=i.getContext("2d");i.width=window.innerWidth,i.height=window.innerHeight,a.current=d(100,i.width,i.height),x(),h(n,i.width,i.height);const r=setInterval(()=>{x()},2e3);return()=>{clearInterval(r),a.current=[]}},[]),e.jsx("canvas",{className:"fixed top-0 bottom-0 right-0 left-0 bg-neutral-800 -z-30",ref:o,...l})}function f(){return e.jsxs("div",{className:"laptop:px-24 mobile:px-8 bg-neutral-800 py-4 shadow shadow-white flex flex-col backdrop-blur",children:[e.jsx("p",{className:"font-medium text-neutral-100 mobile:text-base laptop:text-xl pb-4 mobile:pb-2",children:"Contact Me"}),e.jsxs("a",{className:"text-neutral-300 mobile:text-sm laptop:text-2xl",href:"mailto:joyalgeorgekj@gmail.com",children:[e.jsx("span",{className:"font-medium text-neutral-300 pr-2",children:"Email:"}),"joyalgeorgekj@gmail.com"]}),e.jsxs("a",{className:"text-neutral-300 mobile:text-2xl laptop:text-2xl",href:"https://www.linkedin.com/in/joyalgeorgekj",children:[e.jsx("span",{className:"font-medium text-neutral-300 pr-2",children:"Instagram:"}),"@_.i.m_fine_"]})]})}function b(){const[l,o]=s.useState(0),[a,d]=s.useState(0);return s.useEffect(()=>{o(window.innerHeight),d(window.scrollbars.visible?window.innerWidth-(window.innerWidth-document.body.clientWidth-1):window.innerWidth),console.log()},[]),e.jsxs("div",{children:[e.jsx(g,{height:l,width:a}),e.jsx(p,{}),e.jsx(u,{}),e.jsx(f,{})]})}export{b as default};
