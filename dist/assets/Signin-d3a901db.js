import{w as A,r as i,j as e,x as j,l as y,m as b,L as d,y as L,Q as v}from"./index-f5628c54.js";import{c as q,d as N,F as S,a as E,b as m,E as k}from"./index.esm-389e3566.js";import{P as $}from"./Progress-3b628373.js";import{B as F}from"./index.esm-e7f5240b.js";const I=q().shape({username:N().email("** Invalid email address").required("** Email is Required"),password:N().min(6).required("** Password is Required")}),H=()=>{let P=A();const c={username:"",password:""},[o,C]=i.useState(!1),[x,n]=i.useState(!1),u=()=>{C(r=>!r)},h=async(r,{setSubmitting:l,setErrors:a})=>{n(!0),L.signin(r).then(s=>{var t,p,g,w,f;n(!1),localStorage.setItem("token",`${s.data.token}`),localStorage.setItem("role",`${(t=s.data)==null?void 0:t.role}`),localStorage.setItem("email",`${(p=s.data)==null?void 0:p.email}`),localStorage.setItem("userid",`${(g=s.data)==null?void 0:g.userid}`),localStorage.setItem("username",`${(w=s.data)==null?void 0:w.username}`),localStorage.setItem("profile",`${(f=s.data)==null?void 0:f.profile}`),v.success("Successfully login"),l(!1),n(!1),P("/")}).catch(s=>{n(!1),v.error("Something went Wrong!"),console.log("Err => ",s)})};return e.jsx(i.Fragment,{children:e.jsxs("div",{className:"lg:h-[100vh] md:h-[80vh] lg:bg-indigo-50 flex flex-col justify-center items-center ",children:[e.jsxs("div",{className:"  flex-row hidden lg:flex",children:[e.jsx("div",{className:`\r
        bg-gradient-to-r from-emerald-400 via-emerald-500 to-yellow-300 hover:from-yellow-300\r
        hover:via-emerald-400 hover:to-emerald-600 \r
        \r
        py-8 lg:min-h-[350px]  lg:w-[400px] px-4  sm:rounded-l-lg sm:px-10 shadow-md hover:shadow-lg`,children:e.jsxs("div",{className:"mb-6 sm:mx-auto sm:w-full sm:max-w-md flex items-center justify-center",children:[e.jsx("div",{className:"mb-6 sm:mx-auto sm:w-full sm:max-w-md flex items-center justify-center",children:e.jsx("div",{className:"flex flex-col items-center  text-center justify-between p-8",children:e.jsx("img",{alt:"",src:j,width:"180px",height:"100px",className:"items-center mt-5"})})})," "]})}),e.jsxs("div",{className:"bg-white py-8 lg:min-h-[350px]  lg:w-[400px] px-4 shadow-md sm:rounded-r-lg sm:px-10 hover:shadow-lg",children:[e.jsx("div",{className:"mb-6 sm:mx-auto sm:w-full sm:max-w-md",children:e.jsx("h2",{className:"text-center text-3xl font-extrabold text-gray-900",children:"Sign In"})}),e.jsxs("div",{children:[e.jsx(S,{initialValues:c,validationSchema:I,onSubmit:h,children:({values:r,handleChange:l,errors:a,touched:s,isSubmitting:t})=>e.jsxs(E,{children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"username",className:"block text-sm font-medium text-gray-700",children:"Email Address"}),e.jsxs("div",{className:"mt-1",children:[e.jsx(m,{type:"email",name:"username",id:"username",autoComplete:"email",value:r.username,placeholder:"Enter your Email Address",onChange:l,error:s.username&&a.username,className:`appearance-none block w-full px-3 py-2 border border-gray-300 
                                    rounded-md shadow-sm placeholder-gray-400 
                                    focus:ring-green-500 focus:border-green-500 focus:ring-1 sm:text-sm ${s.username&&a.username?"border-red-500":""}`}),s.username&&a.username&&e.jsx("p",{className:"mt-2 text-sm text-red-600 ",children:a.username})]})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),e.jsxs("div",{className:"mt-1",children:[e.jsxs("div",{className:"relative",children:[e.jsx(m,{type:o?"text":"password",name:"password",id:"password",placeholder:"Enter your Password",autoComplete:"current-password",value:r.password,onChange:l,error:s.password&&a.password,className:`appearance-none block w-full px-3 py-2 border border-gray-300 
                        rounded-md shadow-sm placeholder-gray-400 
                        focus:ring-yellow-500 focus:border-yellow-500 focus:ring-1 sm:text-sm ${s.password&&a.password?"border-red-500":""}`}),e.jsx("button",{type:"button",className:"absolute inset-y-0 right-0 flex items-center px-2",onClick:u,children:o?e.jsx(y,{}):e.jsx(b,{})})]}),e.jsx(k,{name:"password",component:"p",className:"mt-2 text-sm text-red-600"}),e.jsx(d,{to:"/forgotpassword",children:e.jsx("p",{className:"pt-3 text-blue-400 hover:text-blue-700",children:"forgot password ?"})})]})]}),e.jsx("div",{className:"mt-4",children:e.jsxs("button",{type:"submit",disabled:t,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",children:[e.jsx("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:x?e.jsx($,{}):e.jsx(F,{className:"h-5 w-5 text-gray-600 group-hover:text-yellow-400","aria-hidden":"true"})}),"Sign in"]})})]})}),e.jsx("div",{className:" pt-5 ",children:e.jsx(d,{to:"/signup",children:e.jsx("span",{className:"font-medium text-yellow-600 hover:text-yellow-700",children:"Don't Have an account? please Signup here"})})})]})]})]}),e.jsxs("div",{className:" lg:hidden bg-white  px-6 py-8 mt-5 shadow-md rounded-lg  hover:shadow-lg",children:[e.jsx("div",{className:"  flex justify-center items-center w-full mb-5",children:e.jsx("div",{className:"w-20 h-20 rounded-md ",children:e.jsx("img",{src:j,alt:"",className:""})})}),e.jsx("div",{className:"mb-6 ",children:e.jsx("h2",{className:"text-center text-3xl font-extrabold text-gray-900",children:"Sign In"})}),e.jsxs("div",{children:[e.jsx(S,{initialValues:c,validationSchema:I,onSubmit:h,children:({values:r,handleChange:l,errors:a,touched:s,isSubmitting:t})=>e.jsxs(E,{children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"username",className:"block text-sm font-medium text-gray-700",children:"Email Address"}),e.jsxs("div",{className:"mt-1",children:[e.jsx(m,{type:"email",name:"username",id:"username",autoComplete:"email",value:r.username,placeholder:"Enter your Email Address",onChange:l,error:s.username&&a.username,className:`appearance-none block w-full px-3 py-2 border border-gray-300 
                                    rounded-md shadow-sm placeholder-gray-400 
                                    focus:ring-green-500 focus:border-green-500 focus:ring-1 sm:text-sm ${s.username&&a.username?"border-red-500":""}`}),s.username&&a.username&&e.jsx("p",{className:"mt-2 text-sm text-red-600 ",children:a.username})]})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),e.jsxs("div",{className:"mt-1",children:[e.jsxs("div",{className:"relative",children:[e.jsx(m,{type:o?"text":"password",name:"password",id:"password",placeholder:"Enter your Password",autoComplete:"current-password",value:r.password,onChange:l,error:s.password&&a.password,className:`appearance-none block w-full px-3 py-2 border border-gray-300 
                        rounded-md shadow-sm placeholder-gray-400 
                        focus:ring-yellow-500 focus:border-yellow-500 focus:ring-1 sm:text-sm ${s.password&&a.password?"border-red-500":""}`}),e.jsx("button",{type:"button",className:"absolute inset-y-0 right-0 flex items-center px-2",onClick:u,children:o?e.jsx(y,{}):e.jsx(b,{})})]}),e.jsx(k,{name:"password",component:"p",className:"mt-2 text-sm text-red-600"}),e.jsx(d,{to:"/forgotpassword",children:e.jsx("p",{className:"pt-3 text-blue-400 hover:text-blue-700",children:"forgot password ?"})})]})]}),e.jsx("div",{className:"mt-4",children:e.jsxs("button",{type:"submit",disabled:t,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",children:[e.jsx("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:x?e.jsx($,{}):e.jsx(F,{className:"h-5 w-5 text-gray-600 group-hover:text-yellow-400","aria-hidden":"true"})}),"Sign Login"]})})]})}),e.jsx("div",{className:"pt-5",children:e.jsx(d,{to:"/signup",children:e.jsx("span",{className:"font-medium text-yellow-600 hover:text-yellow-700",children:"Don't Have an account? please Signup here "})})})]})]})]})})};export{H as default};
