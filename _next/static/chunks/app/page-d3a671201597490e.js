(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5619:function(e,t,n){Promise.resolve().then(n.bind(n,5562)),Promise.resolve().then(n.bind(n,8397)),Promise.resolve().then(n.bind(n,3591))},5562:function(e,t,n){"use strict";n.r(t),n.d(t,{Cursor:function(){return l}});var i=n(7437),r=n(5790),a=n.n(r);function l(){return(0,i.jsx)(a(),{innerSize:8,outerSize:24,outerStyle:{border:"2px solid rgb(254, 111, 94)",backgroundColor:"black"},innerStyle:{backgroundColor:"rgb(254, 111, 94)"},outerAlpha:.5,innerScale:.7,outerScale:5,clickables:["a",'input[type="text"]','input[type="email"]','input[type="number"]','input[type="submit"]','input[type="image"]',"label[for]","select","textarea","button",".link"]})}},8397:function(e,t,n){"use strict";n.r(t),n.d(t,{PortfolioInformation:function(){return k}});var i=n(9483),r=n(7437),a=n(4623),l=n(6648),s=n(6463),o=n(1827),u=n(2265);let c=a.Z.span({color:"rgb(254, 111, 94)",marginLeft:"10px"});function p(e){let{text:t}=e,[n,i]=(0,u.useState)("");return(0,u.useEffect)(()=>{let e=t.split(""),n=0,r=!0,a=setInterval(()=>{r?++n>e.length&&(r=!1,n=e.length):--n<0&&(r=!0,n=0),i(e.slice(0,n).join(""))},300);return()=>clearInterval(a)},[t]),(0,r.jsx)(c,{children:n.split("").map((e,t)=>(0,r.jsx)(o.E.span,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},children:e},t))})}function d(){let e=(0,i._)(["\n  width: 100px; \n  display: inline-block;\n  text-align: left; \n  margin-right: 10px; \n"]);return d=function(){return e},e}function h(){let e=(0,i._)(["\n  display: inline-block;\n  margin-left: 5px; // Space between the colon and the value\n"]);return h=function(){return e},e}function f(){let e=(0,i._)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px; // Add some space between rows\n"]);return f=function(){return e},e}let x=a.Z.div({display:"grid",gridTemplateColumns:"repeat(1, 1fr)",gap:30,"@media (min-width: 480px)":{gridTemplateColumns:"repeat(2, 1fr)"},zIndex:1e3,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",justifyContent:"center",alignItems:"center"}),m=(0,a.Z)(l.default)({backgroundColor:"white",borderRadius:"16px",display:"block",marginLeft:"auto"}),g=a.Z.div({display:"flex",flexDirection:"column",gap:16,marginBottom:32}),j=a.Z.div({fontSize:32}),b=a.Z.div({fontSize:20,gap:8}),y=a.Z.div({display:"flex",flexDirection:"column",borderRadius:8,height:"100%",width:"400px","@media (max-width: 480px)":{width:"300px"}}),v=a.Z.div({display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",gap:16}),w=a.Z.div({fontSize:16,gap:8,display:"flex",alignItems:"center","@media (max-width: 480px)":{fontSize:12}});function k(){let e=(0,s.useRouter)();return(0,r.jsxs)(x,{children:[(0,r.jsx)(m,{src:"/avatar.png",alt:"avatar",width:300,height:300}),(0,r.jsxs)(y,{style:{color:"white"},children:[(0,r.jsxs)(g,{children:[(0,r.jsx)(j,{children:"정해준"}),(0,r.jsxs)(b,{children:[(0,r.jsx)("span",{children:"Developer"}),(0,r.jsx)(p,{text:"FrontEnd & DevOps"})]})]}),(0,r.jsxs)(v,{children:[(0,r.jsxs)(w,{children:[(0,r.jsx)("span",{children:"\uD83D\uDCBB Github"}),(0,r.jsx)("span",{onClick:()=>{e.push("https://github.com/haejunejung/")},children:"https://github.com/haejunejung"})]}),(0,r.jsxs)(w,{children:[(0,r.jsx)("span",{children:"\uD83C\uDF31 Instagram"}),(0,r.jsx)("span",{onClick:()=>{e.push("https://www.instagram.com/hae._.june/")},children:"@hae._.june"})]}),(0,r.jsxs)(w,{children:[(0,r.jsx)("span",{children:"\uD83D\uDCDA Portfolio"}),(0,r.jsx)("span",{onClick:()=>{e.push("https://www.notion.so/93bac40910264b53bd50675865bb151f")},children:"https://haejunejung.notion.site"})]}),(0,r.jsxs)(w,{children:[(0,r.jsx)("span",{children:"\uD83D\uDCDE Email"}),(0,r.jsx)("span",{children:"jhj9422@unist.ac.kr"})]})]})]})]})}a.Z.span(d()),a.Z.span(h()),a.Z.div(f())},3591:function(e,t,n){"use strict";n.r(t),n.d(t,{RippleBackground:function(){return c}});var i=n(7437),r=n(2265),a=n(3149),l=n(7776),s=n(2839),o=()=>{let e=(0,s.F)(l.TextureLoader,"/_next/static/media/circle.e070b792.png"),t=(0,r.useRef)(null),n=0,a=(0,r.useCallback)((e,t)=>3*Math.sin(.002*(e**2+t**2+n)),[n,.002,3]),o=(0,r.useMemo)(()=>{let e=[0,0,0];for(let t=0;t<40;t++)for(let n=0;n<40;n++){let i=2*t,r=2*n,l=a(i,r);e.push(i,l,r)}return new Float32Array(e)},[40,2,a]);return(0,s.C)(()=>{var e;n+=15;let i=null===(e=t.current)||void 0===e?void 0:e.array;if(i){let e=0;for(let t=0;t<40;t++)for(let n=0;n<40;n++){let r=2*(t-20),l=2*(n-20);i[e+1]=a(r,l),e+=3}null!==t.current&&(t.current.needsUpdate=!0)}}),(0,i.jsxs)("points",{children:[(0,i.jsx)("bufferGeometry",{attach:"geometry",children:(0,i.jsx)("bufferAttribute",{ref:t,attach:"attributes-position",array:o,count:o.length/3,itemSize:3})}),(0,i.jsx)("pointsMaterial",{attach:"material",map:e,color:16777215,size:1,sizeAttenuation:!0,transparent:!1,alphaTest:.5,opacity:1})]})};let u=n(4623).Z.div({width:"100vw",height:"100vh",zIndex:0,marginTop:"250px"});function c(){return(0,i.jsx)(u,{children:(0,i.jsx)(a.Xz,{legacy:!1,camera:{position:[200,5,200],fov:20},children:(0,i.jsx)(r.Suspense,{fallback:null,children:(0,i.jsx)(o,{})})})})}}},function(e){e.O(0,[689,426,971,23,744],function(){return e(e.s=5619)}),_N_E=e.O()}]);