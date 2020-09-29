// import React, { useState, useEffect } from 'react';
// import { Link, Redirect  } from 'react-router-dom'
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardGroup,
//   CCol,
//   CContainer,
//   CForm,
//   CInput,
//   CInputGroup,
//   CInputGroupPrepend,
//   CInputGroupText,
//   CRow
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'

// const [user,setUser]= useState("");
// const [password,setPassword] = useState("");
// const [isLogin,setLogin] = useState(false)

// const handleSubmit = (e)=>{
//   e.preventDefault();
//   // setUser("");
//   // setPassword("");
//   if(user === "demo@datacakra.com" && password==="abcd1234"){
//     // this.setState({
//     //   loggedIn:true
//     // })
//     setLogin(true)
//   }
//   setUser("");
//   setPassword("");
// }

// const Login = () => {
//   if(setLogin(true)){
//     return <Redirect  to="/dashboard" />
//   }
  
//   return (
//     <div className="c-app c-default-layout flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md="8">
//             <CCardGroup>
//               <CCard className="p-4">
//                 <CCardBody>
//                   <CForm onSubmit={handleSubmit}>
//                     <h1>Login</h1>
//                     <p className="text-muted">Sign In to your account</p>
//                     <CInputGroup className="mb-3">
//                       <CInputGroupPrepend>
//                         <CInputGroupText>
//                           <CIcon name="cil-user" />
//                         </CInputGroupText>
//                       </CInputGroupPrepend>
//                       <CInput 
//                         type="text" 
//                         placeholder="Username" 
//                         autoComplete="username" 
//                         value={user}
//                         onChange={(e)=>setUser(e.target.value)}
//                         />
//                     </CInputGroup>
//                     <CInputGroup className="mb-4">
//                       <CInputGroupPrepend>
//                         <CInputGroupText>
//                           <CIcon name="cil-lock-locked" />
//                         </CInputGroupText>
//                       </CInputGroupPrepend>
//                       <CInput 
//                         type="password" 
//                         placeholder="Password" 
//                         autoComplete="current-password" 
//                         value={password}
//                         onChange={(e)=>setPassword(e.target.value)}
//                         />
//                     </CInputGroup>
//                     <CRow>
//                       <CCol xs="6">
//                         <CButton color="primary" className="px-4">Login</CButton>
//                       </CCol>
//                       <CCol xs="6" className="text-right">
//                         <CButton color="link" className="px-0">Forgot password?</CButton>
//                       </CCol>
//                     </CRow>
//                   </CForm>
//                 </CCardBody>
//               </CCard>
//               <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
//                 <CCardBody className="text-center">
//                   <div>
//                     <h2>Sign up</h2>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
//                       labore et dolore magna aliqua.</p>
//                     <Link to="/register">
//                       <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
//                     </Link>
//                   </div>
//                 </CCardBody>
//               </CCard>
//             </CCardGroup>
//           </CCol>
//         </CRow>
//       </CContainer>
//     </div>
//   )
// }

// export default Login

import React, { useState, useEffect } from 'react';
import {Redirect, Link } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  // CInputGroupPrepend,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react';
import CIcon from '@coreui/icons-react'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

const Login = (props)=>{
  const [user,setUser]= useState("");
  const [password,setPassword] = useState("");
  const [isLogin,setLogin] = useState(false)

  const [showPassword, setShowPassword] = useState(false);

  // const history = useHistory();

  useEffect(() => {
    document.title= `Provisense Asset`;
  }, []);

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(user === "demo@datacakra.com" && password==="abcd1234"){
      // this.setState({
      //   loggedIn:true
      // })
      setLogin(true)
    }
    setUser("");
    setPassword("");
  }
  if(isLogin){
    return <Redirect  to="/dashboard" />
  }
    return (
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm onSubmit={handleSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend addonType="prepend">
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput 
                        type="text" name="username"  placeholder="Username"
                          value={user} onChange={(e)=>setUser(e.target.value)}/>
                        {/* <Input type="text" name="username" autoComplete="username" value={this.state.username} placeholder="Username" /> */}
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend addonType="prepend">
                           <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" name="password" value={password}  
                        onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </CCol>
                        <CCol xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CCardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    );
  }


export default Login;
