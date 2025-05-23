import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { toast } from "react-toastify";
import ApiServices from './ApiServices';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState(false);

  const nav = useNavigate();
  const handleForm = (e) => {
    e.preventDefault(); //to stop form from submission
    setLoad(true);
    let data = {
      email: email,
      password: password
    };

    ApiServices.getLogin(data)
      .then((res) => {
        console.log(res);
        if (res.data.success === true ) {
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("_id", res.data.data._id);
          // const tok = localStorage.getItem("token");
          // console.log(tok);
          sessionStorage.setItem("email", res.data.data.email);
         
          if(res.data.data.userType==1){
          setTimeout(() => {
            toast.success(res.data.message)
            nav("/Home");
          }, 500);
        }else{
          toast.error("You are not allowed to access this page")
          setTimeout(() => {
            setLoad(false);
          }, 1500);
        }
        } else {
          // console.log("no token found");
          toast.error(res.data.message);
          setTimeout(() => {
            setLoad(false);
          }, 1500);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.warning("something went wrong");
      });
  };

  const obj = {
    display: "block",
    margin: "0 auto"
  };

  return (
    <>
      <main>
        <div className="container">

          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
               
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    <a
                      href="index.html"
                      className="logo d-flex align-items-center w-auto"
                    >
                      <img src="assets/img/logo1.png" alt="" />
                      <span className="d-none d-lg-block">Pro Manager</span>
                    </a>
                   
                  </div>
                
                  <PacmanLoader color="blue" size={40} cssOverride={obj} loading={load} />
                  <section className={load === true ? "d-none" : "my-5"}>
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="pt-4 pb-2">
                          <h5 className="card-title text-center pb-0 fs-4">
                            Admin Login
                          </h5>
                          {/* <p className="text-center small">
                            Enter your username &amp; password to login
                          </p> */}
                        </div>
                        <form className="row g-3 needs-validation" noValidate="">
                          <div className="col-12">
                            <label htmlFor="yourUsername" className="form-label">
                              Email
                            </label>
                            <div className="input-group has-validation">
                              <span
                                className="input-group-text"
                                id="inputGroupPrepend"
                              >
                                @
                              </span>
                              <input
                                type="text"
                                name="username"
                                className="form-control"
                                id="yourUsername"
                                required=""
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }} 
                              />
                              <div className="invalid-feedback">
                                Please enter your username.
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <label htmlFor="yourPassword" className="form-label">
                              Password
                            </label>
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              id="yourPassword"
                              required=""
                              value={password}
                              onChange={(e) => { setPassword(e.target.value) }} 
                            />
                            <div className="invalid-feedback">
                              Please enter your password!
                            </div>
                          </div>
                          
                          <div className="col-12">
                            <button className="btn btn-primary w-100" type="submit" onClick={handleForm}>
                              Login
                            </button>
                            
                             If you are Employee? <h4 className='btn  p-2 mt-2'><Link to={"/user"}>Employee Login</Link></h4>
                          </div>
                       
                        </form>
                      </div>  
                    </div>
                   
                  </section>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* End #main */}
     
    </>
  );
}
