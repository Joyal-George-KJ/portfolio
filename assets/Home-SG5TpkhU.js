import{r as i,j as e}from"./index-CKv84L_K.js";const m="/assets/instagram-DFv_s641.png",c="/assets/linkedin-xrf8siGe.png",x="/assets/twitter-CyPeYCx5.png",u="/assets/github-Dq47QU1E.png",p="/assets/whatsapp-DXL2nKDW.png",g="/assets/email-BtlM4gVF.png";function h({url:s,displayName:t,hoverName:o}){const[n,a]=i.useState("");function r(l){switch(l){case"Instagram":return m;case"LinkedIn":return c;case"Twitter":return x;case"GitHub":return u;case"Whatsapp":return p;case"Email":return g}}return e.jsxs("a",{href:s,className:"rounded-full flex justify-center mobile:w-6 laptop:w-8 aspect-square  shadow-neutral-100 shadow-md relative bg-neutral-300",children:[e.jsx("img",{className:"object-cover rounded-full",onMouseEnter:l=>a(l.target.alt),onMouseLeave:()=>a(""),src:r(t),alt:t+" Logo"}),(n==null?void 0:n.indexOf(t))!==-1&&e.jsx("span",{onMouseEnter:()=>a(t),onMouseLeave:()=>a(""),className:"absolute rounded -left-3/5 z-30 top-12 px-2 py-1 w-max bg-neutral-200 text-neutral-900 font-bold text-sm",children:o})]})}function d(){const s=[{displayName:"Instagram",hoverName:"@_.i.m_fine_",url:"https://www.instagram.com/_.i.m_fine_/"},{displayName:"LinkedIn",hoverName:"@Joyal George K J",url:"https://www.linkedin.com/in/joyalgeorgekj/"},{displayName:"GitHub",hoverName:"@Joyal-George-KJ",url:"https://github.com/Joyal-George-KJ"},{displayName:"Twitter",hoverName:"@JoyalGeorgeKJ",url:"https://x.com/JoyalGeorgeKJ"},{displayName:"Whatsapp",hoverName:"+918921223436",url:"https://api.whatsapp.com/send?phone=918921223436&text=Hey"},{displayName:"Email",hoverName:"joyalgeorgekj@gmail.com",url:"mailto:joyalgeorgekj@gmail.com"}];return e.jsx("div",{className:"flex justify-center gap-4 pt-6",children:s.map((t,o)=>e.jsx(h,{...t},o))})}function f(){return e.jsxs("div",{className:"flex justify-center items-center flex-col mobile:min-h-[50svh] tablet:min-h-[88vh] px-32",children:[e.jsx("h1",{className:"mobile:text-xl w-max tablet:text-3xl laptop:text-4xl desktop:text-5xl tv:text-6xl font-mono font-semibold text-neutral-200",children:"Joyal George K J"}),e.jsx("h2",{className:"mobile:text-base tablet:text-xl laptop:text-2xl desktop:text-3xl tv:text-4xl font-mono font-medium text-neutral-200 pt-4 w-max",children:"- React JS Developer -"}),e.jsx(d,{})]})}function w(){return e.jsx("div",{children:e.jsx(f,{})})}export{w as default};
