import{r as i,j as e}from"./index-CYt4u57O.js";import{G as m,P as x}from"./Project-B7lCo4pK.js";const c="/assets/instagram-DFv_s641.png",p="/assets/linkedin-xrf8siGe.png",u="/assets/twitter-CyPeYCx5.png",g="/assets/whatsapp-DXL2nKDW.png",d="/assets/email-BtlM4gVF.png";function h({url:s,displayName:t,hoverName:o}){const[l,a]=i.useState("");function r(n){switch(n){case"Instagram":return c;case"LinkedIn":return p;case"Twitter":return u;case"GitHub":return m;case"Whatsapp":return g;case"Email":return d}}return e.jsxs("a",{href:s,target:"_blank",className:"rounded-full flex justify-center mobile:w-6 laptop:w-8 aspect-square border shadow-neutral-100 shadow-md relative bg-neutral-300 z-5",children:[e.jsx("img",{className:"object-cover rounded-full",onMouseEnter:n=>a(n.target.alt),onMouseLeave:()=>a(""),src:r(t),alt:t+" Logo"}),(l==null?void 0:l.indexOf(t))!==-1&&e.jsx("span",{onMouseEnter:()=>a(t),onMouseLeave:()=>a(""),className:"absolute rounded -left-3/5 top-12 px-2 py-1 w-max bg-neutral-200 text-neutral-900 font-bold text-sm z-10",children:o})]})}function f(){const s=[{displayName:"Instagram",hoverName:"@_.i.m_fine_",url:"https://www.instagram.com/_.i.m_fine_/"},{displayName:"LinkedIn",hoverName:"@Joyal George K J",url:"https://www.linkedin.com/in/joyalgeorgekj/"},{displayName:"GitHub",hoverName:"@Joyal-George-KJ",url:"https://github.com/Joyal-George-KJ"},{displayName:"Twitter",hoverName:"@JoyalGeorgeKJ",url:"https://x.com/JoyalGeorgeKJ"},{displayName:"Whatsapp",hoverName:"+918921223436",url:"https://api.whatsapp.com/send?phone=918921223436&text=Hey"},{displayName:"Email",hoverName:"joyalgeorgekj@gmail.com",url:"mailto:joyalgeorgekj@gmail.com"}];return e.jsx("div",{className:"flex justify-center gap-4 pt-6 relative z-5",children:s.map((t,o)=>e.jsx(h,{...t},o))})}function b(){return e.jsx("div",{className:"relative z-10",children:e.jsxs("div",{className:"flex justify-center items-center flex-col mobile:min-h-[50svh] tablet:min-h-[88vh] px-32",children:[e.jsx("h1",{className:"mobile:text-xl w-max tablet:text-3xl laptop:text-4xl desktop:text-5xl tv:text-6xl font-mono font-semibold text-neutral-200",children:"Joyal George K J"}),e.jsx("h2",{className:"mobile:text-base tablet:text-xl laptop:text-2xl desktop:text-3xl tv:text-4xl font-mono font-medium text-neutral-200 pt-4 w-max",children:"- React JS Developer -"}),e.jsx(f,{})]})})}function j(){return e.jsxs("div",{className:"bg-neutral-100 mobile:p-8 tablet:p-24 grid place-items-start mobile:gap-1 tablet:gap-2",children:[e.jsx("h3",{className:"font-bold mobile:text-xs tablet:text-3xl",children:"Hey!"}),e.jsx("p",{className:"font-light mobile:text-xs tablet:text-3xl",children:"I am Joyal George K J from Kochi, Kerala, India."}),e.jsx("p",{className:"font-light mobile:text-xs tablet:text-3xl",children:"I love Solving Problems and creating softwares for it."})]})}function N(){return e.jsxs("div",{children:[e.jsx(b,{}),e.jsx(j,{}),e.jsx(x,{})]})}export{N as default};
