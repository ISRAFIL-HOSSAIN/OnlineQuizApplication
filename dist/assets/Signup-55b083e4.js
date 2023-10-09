import{w as F,r as i,j as e,x as h,l as u,m as b,L as g,y as C,Q as f}from"./index-f5628c54.js";import{B as y}from"./index.esm-e7f5240b.js";import{F as j,a as w,b as m,E as N}from"./index.esm-389e3566.js";import{P as v}from"./Progress-3b628373.js";import{s as k}from"./signupValidation-872c62f3.js";const M=()=>{let E=F();const d={name:"",email:"",mobile:"",password:"",usertype:"unpaid"},[t,S]=i.useState(!1),[c,o]=i.useState(!1),x=()=>{S(l=>!l)},p=async(l,{setSubmitting:r,setErrors:s})=>{o(!0),C.signup(l).then(a=>{o(!1),f.success("Successfully Signup !"),r(!1),o(!1),E("/")}).catch(a=>{o(!1),f.error("Something is Wrong,"),console.log("Err => ",a)})};return e.jsx(i.Fragment,{children:e.jsxs("div",{className:"lg:h-[100vh] md:h-[100vh] lg:bg-indigo-50 flex flex-col justify-center items-center ",children:[e.jsxs("div",{className:"  flex-row hidden lg:flex",children:[e.jsx("div",{className:`bg-gradient-to-r from-emerald-400 via-emerald-500 to-yellow-300 hover:from-yellow-300\r
        hover:via-emerald-400 hover:to-emerald-600 \r
         py-8 lg:min-h-[520px]  lg:w-[400px] px-4  sm:rounded-l-lg sm:px-10 shadow-md hover:shadow-lg`,children:e.jsxs("div",{className:"mb-6 sm:mx-auto sm:w-full sm:max-w-md flex items-center justify-center",children:[e.jsx("div",{className:"mb-6 sm:mx-auto sm:w-full sm:max-w-md flex items-center justify-center",children:e.jsx("div",{className:"flex flex-col items-center  text-center justify-between p-10 mt-16",children:e.jsx("img",{alt:"",src:h,width:250,height:200,className:"items-center mt-5"})})})," "]})}),e.jsxs("div",{className:"bg-white py-8 lg:min-h-[520px]  lg:w-[400px] px-4 shadow-md sm:rounded-r-lg sm:px-10 hover:shadow-lg",children:[e.jsx("div",{className:"mb-6 sm:mx-auto sm:w-full sm:max-w-md",children:e.jsx("h2",{className:"text-center text-3xl font-extrabold text-gray-900",children:"Sign Up"})}),e.jsx("div",{children:e.jsx(j,{initialValues:d,validationSchema:k,onSubmit:p,children:({values:l,handleChange:r,errors:s,touched:a,isSubmitting:n})=>e.jsxs(w,{children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"User Name"}),e.jsxs("div",{className:"mt-1",children:[e.jsx(m,{type:"text",name:"name",id:"name",autoComplete:"name",value:l.name,placeholder:"Enter your User name",onChange:r,error:a.name&&s.name,className:`appearance-none block w-full px-3 py-2 border border-gray-300 
                                    rounded-md shadow-sm placeholder-gray-400 
                                    focus:ring-green-500 focus:border-green-500 focus:ring-1 sm:text-sm ${a.name&&s.name?"border-red-500":""}`}),a.name&&s.name&&e.jsx("p",{className:"mt-2 text-sm text-red-600 ",children:s.name})]})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email Address"}),e.jsxs("div",{className:"mt-1",children:[e.jsx(m,{type:"email",name:"email",id:"email",autoComplete:"email",value:l.email,placeholder:"Enter your Email Address",onChange:r,error:a.username&&s.username,className:`appearance-none block w-full px-3 py-2 border border-gray-300 
                                    rounded-md shadow-sm placeholder-gray-400 
                                    focus:ring-green-500 focus:border-green-500 focus:ring-1 sm:text-sm ${a.email&&s.email?"border-red-500":""}`}),a.email&&s.email&&e.jsx("p",{className:"mt-2 text-sm text-red-600 ",children:s.email})]})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("label",{htmlFor:"mobile",className:"block text-sm font-medium text-gray-700",children:"Mobile"}),e.jsxs("div",{className:"mt-1",children:[e.jsx(m,{type:"mobile",name:"mobile",id:"mobile",autoComplete:"mobile",value:l.mobile,placeholder:"Enter your Mobile Number",onChange:r,error:a.mobile&&s.mobile,className:`appearance-none block w-full px-3 py-2 border border-gray-300 
                                    rounded-md shadow-sm placeholder-gray-400 
                                    focus:ring-green-500 focus:border-green-500 focus:ring-1 sm:text-sm ${a.mobile&&s.mobile?"border-red-500":""}`}),a.mobile&&s.mobile&&e.jsx("p",{className:"mt-2 text-sm text-red-600 ",children:s.mobile})]})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),e.jsxs("div",{className:"mt-1",children:[e.jsxs("div",{className:"relative",children:[e.jsx(m,{type:t?"text":"password",name:"password",id:"password",placeholder:"Enter your Password",autoComplete:"current-password",value:l.password,onChange:r,error:a.password&&s.password,className:`appearance-none block w-full px-3 py-2 border border-gray-300 
                        rounded-md shadow-sm placeholder-gray-400 
                        focus:ring-yellow-500 focus:border-yellow-500 focus:ring-1 sm:text-sm ${a.password&&s.password?"border-red-500":""}`}),e.jsx("button",{type:"button",className:"absolute inset-y-0 right-0 flex items-center px-2",onClick:x,children:t?e.jsx(u,{}):e.jsx(b,{})})]}),e.jsx(N,{name:"password",component:"p",className:"mt-2 text-sm text-red-600"})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("button",{type:"submit",disabled:n,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",children:[e.jsx("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:c?e.jsx(v,{}):e.jsx(y,{className:"h-5 w-5 text-gray-600 group-hover:text-yellow-400","aria-hidden":"true"})}),"Sign Up"]}),e.jsx("div",{className:"py-5 ",children:e.jsx("div",{className:"py-2",children:e.jsx(g,{to:"/login",children:e.jsx("span",{className:"font-medium text-yellow-600 hover:text-yellow-700",children:"Have an account? please login here !"})})})})]})]})})})]})]}),e.jsxs("div",{className:" lg:hidden bg-white  px-8 py-8 w-full  shadow-md rounded-lg  hover:shadow-lg",children:[e.jsx("div",{className:"  flex justify-center items-center w-full mb-5",children:e.jsx("div",{className:"w-20 h-20 rounded-md ",children:e.jsx("img",{src:h,alt:"",className:""})})}),e.jsx("div",{className:"mb-6 ",children:e.jsx("h2",{className:"text-center text-3xl font-extrabold text-gray-900",children:"Sign Up"})}),e.jsx("div",{children:e.jsx(j,{initialValues:d,validationSchema:k,onSubmit:p,children:({values:l,handleChange:r,errors:s,touched:a,isSubmitting:n})=>e.jsxs(w,{children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"User Name"}),e.jsxs("div",{className:"mt-1",children:[e.jsx(m,{type:"text",name:"name",id:"name",autoComplete:"name",value:l.name,placeholder:"Enter your User name",onChange:r,error:a.name&&s.name,className:`appearance-none block w-full px-3 py-2 border border-gray-300 
                               rounded-md shadow-sm placeholder-gray-400 
                               focus:ring-green-500 focus:border-green-500 focus:ring-1 sm:text-sm ${a.name&&s.name?"border-red-500":""}`}),a.name&&s.name&&e.jsx("p",{className:"mt-2 text-sm text-red-600 ",children:s.name})]})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email Address"}),e.jsxs("div",{className:"mt-1",children:[e.jsx(m,{type:"email",name:"email",id:"email",autoComplete:"email",value:l.email,placeholder:"Enter your Email Address",onChange:r,error:a.username&&s.username,className:`appearance-none block w-full px-3 py-2 border border-gray-300 
                               rounded-md shadow-sm placeholder-gray-400 
                               focus:ring-green-500 focus:border-green-500 focus:ring-1 sm:text-sm ${a.email&&s.email?"border-red-500":""}`}),a.email&&s.email&&e.jsx("p",{className:"mt-2 text-sm text-red-600 ",children:s.email})]})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("label",{htmlFor:"mobile",className:"block text-sm font-medium text-gray-700",children:"Mobile"}),e.jsxs("div",{className:"mt-1",children:[e.jsx(m,{type:"mobile",name:"mobile",id:"mobile",autoComplete:"mobile",value:l.mobile,placeholder:"Enter your Mobile Number",onChange:r,error:a.mobile&&s.mobile,className:`appearance-none block w-full px-3 py-2 border border-gray-300 
                               rounded-md shadow-sm placeholder-gray-400 
                               focus:ring-green-500 focus:border-green-500 focus:ring-1 sm:text-sm ${a.mobile&&s.mobile?"border-red-500":""}`}),a.mobile&&s.mobile&&e.jsx("p",{className:"mt-2 text-sm text-red-600 ",children:s.mobile})]})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),e.jsxs("div",{className:"mt-1",children:[e.jsxs("div",{className:"relative",children:[e.jsx(m,{type:t?"text":"password",name:"password",id:"password",placeholder:"Enter your Password",autoComplete:"current-password",value:l.password,onChange:r,error:a.password&&s.password,className:`appearance-none block w-full px-3 py-2 border border-gray-300 
                   rounded-md shadow-sm placeholder-gray-400 
                   focus:ring-yellow-500 focus:border-yellow-500 focus:ring-1 sm:text-sm ${a.password&&s.password?"border-red-500":""}`}),e.jsx("button",{type:"button",className:"absolute inset-y-0 right-0 flex items-center px-2",onClick:x,children:t?e.jsx(u,{}):e.jsx(b,{})})]}),e.jsx(N,{name:"password",component:"p",className:"mt-2 text-sm text-red-600"})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("button",{type:"submit",disabled:n,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",children:[e.jsx("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:c?e.jsx(v,{}):e.jsx(y,{className:"h-5 w-5 text-gray-600 group-hover:text-yellow-400","aria-hidden":"true"})}),"Sign Up"]}),e.jsx("div",{className:"py-5 ",children:e.jsx("div",{className:"py-2",children:e.jsx(g,{to:"/login",children:e.jsx("span",{className:"font-medium text-yellow-600 hover:text-yellow-700",children:"Have an account? please login here !"})})})})]})]})})})]})]})})};export{M as default};
