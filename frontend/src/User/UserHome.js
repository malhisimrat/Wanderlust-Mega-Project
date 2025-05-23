
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ApiServices from '../Admin/ApiServices';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Moment from 'react-moment';
import { Toast } from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';
export default function UserHome() {

  
  const [dashboardData, setDashboardData] = useState([]);
  const [load,setload]=useState(false);
  let obj = {
    margin:"0 auto",
    display:"block"
  }
  useEffect(() => {
    let emptoken = sessionStorage.getItem('Emptoken');
    let id = sessionStorage.getItem('employeeId');
    let data = {_id:id}
    ApiServices.EmpDashboard(data,{headers:{authorization:emptoken}})
      .then((res) => {
        console.log(res.data);
        if(res.data.success){
          setDashboardData(res.data)
        }
        // else{
        //   toast.error(res.data.message)
        // } 
        
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (

    <>
      <ClipLoader loading={load}  size={100} cssOverride={obj}/>
      <div className={load && "display-screen"}>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
        <section className="section dashboard">
          <div className="row">
            {/* Left side columns */}
            <div className="col-lg-8">
              <div className="row"> {/* Customers Card */}
                <div className="col-xxl-4 col-xl-12">
                  <div className="card info-card customers-card">
                   
                    <div className="card-body">
                      <h5 className="card-title">
                        Total Pending Tasks<span></span>
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-clock" />
                        </div>
                        <div className="ps-3">
                          <h6>{dashboardData?.totalpendingtasks}</h6>
                          {/* <span className="text-danger small pt-1 fw-bold">
                            12%
                          </span>{" "}
                          <span className="text-muted small pt-2 ps-1">
                            decrease
                          </span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Customers Card */}{/* Revenue Card */}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card revenue-card">
              
                    <div className="card-body">
                      <h5 className="card-title">
                        Total Working Tasks<span></span>
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-graph-up" />
                        </div>
                        <div className="ps-3">
                          <h6>{dashboardData?.totalworkingtasks}</h6>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Revenue Card */}
                {/* Sales Card */}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card sales-card">
                
                    <div className="card-body">
                      <h5 className="card-title">
                        Total Complete Projects <span></span>
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-check"  />
                        </div>
                        <div className="ps-3">
                          <h6>{dashboardData?.totalcompletetasks}</h6>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Sales Card */}
                
               
                {/* Reports */}
                <div className="col-12">
                  <div className="card">
                    
                 
                  </div>
                </div>
                {/* End Reports */}
                {/* Recent Tasks */}
       
                {/* End Recent Sales */}
                {/* Top Selling */}
          
                {/* End Top Selling */}
              </div>
            </div>
            {/* End Left side columns */}
            {/* Right side columns */}
      
            {/* End Right side columns */}
          </div>
        </section>
      </main>
      </div>

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
        <section className="section dashboard">
          <div className="row">
            {/* Left side columns */}
            <div className="col-lg-8">
              <div className="row"> {/* Customers Card */}

                {/* End Customers Card */}{/* Revenue Card */}

                {/* End Revenue Card */}
                {/* Sales Card */}
                <div className="col-xxl-4 col-md-6">
                
                </div>
                {/* End Sales Card */}


                {/* Reports */}
                {/* <div className="col-12">
                  <div className="card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>
                   </div>
                </div> */}
                {/* End Reports */}
                {/* Recent Tasks */}

                {/* End Recent Sales */}
                {/* Top Selling */}
                <div className="col-12">
                  <div className="card top-selling overflow-auto">

                    <div className="card-body pb-0">
                      <h5 className="card-title">
                        Information <span>| Incompete Tasks</span>
                      </h5>
                      <table className="table table-borderless">
                        
                        <tbody>
                          <tr>
                            <th>Total Projects</th>
                            <th>{dashboardData?.totalprojects}</th>
                          </tr>
                          <tr>
                            <th>My Teams</th>
                            <th>{dashboardData?.totalprojectteams}</th>
                          </tr>
                          <tr>
                            <th>My Pending Tasks </th>
                            <th>{dashboardData?.totalpendingtasks}</th>
                          </tr>
                          <tr>
                            <th>My Working Tasks </th>
                            <th>{dashboardData?.totalworkingtasks}</th>
                          </tr>
                          <tr>
                            <th>My Complete Tasks </th>
                            <th>{dashboardData?.totalcompletetasks}</th>
                          </tr>
                          <tr>
                            <th>My Coins </th>
                            <th>{dashboardData?.coins}</th>
                          </tr>
                        </tbody>





                      </table>
                    </div>
                  </div>
                </div>
                {/* End Top Selling */}
              </div>
            </div>
            {/* End Left side columns */}
            {/* Right side columns */}
            <div className="col-lg-4">
              {/* Recent Activity */}
              <div className="card">


              </div>
              {/* End Recent Activity */}



            </div>
            {/* End Right side columns */}
          </div>
        </section>
      </main>
      {/* End #main */}


    </>
  )
}