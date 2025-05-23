
import React ,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import AddTask from '../Admin/AddTask';

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const addSidebar=()=>{
    document.getElementById("body").classList.toggle('toggle-sidebar')
  }
  
  return (
   

<>
{/* ======= Header ======= */}
<header id="header" className="header fixed-top d-flex align-items-center">
<div className="d-flex align-items-center justify-content-between">
  <Link to="/Home" className="logo d-flex align-items-center">
    <img src="/assets/img/logo1.png" alt="" />
    <span className="d-none d-lg-block">Pro Manager</span>
  </Link>
  <i className="bi bi-list toggle-sidebar-btn" onClick={addSidebar} />

</div>
{/* End Logo */}
<div className="search-bar">
  <form
    className="search-form d-flex align-items-center"
    method="POST"
    action="#"
  >
    {/* <input
      type="text"
      name="query"
      placeholder="Search"
      title="Enter search keyword"
    />
    <button type="submit" title="Search">
      <i className="bi bi-search" />
    </button> */}
  </form>
</div>
{/* End Search Bar */}
<nav className="header-nav ms-auto">
  <ul className="d-flex align-items-center">
    <li className="nav-item d-block d-lg-none">
      <a className="nav-link nav-icon search-bar-toggle " href="#">
        <i className="bi bi-search" />
      </a>
    </li>
    {/* End Search Icon*/}
    

    <Link to="/AddTask"><Button variant="success" onClick={handleShowModal}>Add Task</Button></Link>

    <li className="nav-item dropdown">
      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        {/* <i className="bi bi-bell" /> */}
        {/* <span className="badge bg-primary badge-number">4</span> */}
      </a>



      {/* End Notification Icon */}
      {/* <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
          You have 4 new notifications
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View all
            </span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="notification-item">
          <i className="bi bi-exclamation-circle text-warning" />
          <div>
            <h4>Lorem Ipsum</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>30 min. ago</p>
          </div>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="notification-item">
          <i className="bi bi-x-circle text-danger" />
          <div>
            <h4>Atque rerum nesciunt</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>1 hr. ago</p>
          </div>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="notification-item">
          <i className="bi bi-check-circle text-success" />
          <div>
            <h4>Sit rerum fuga</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>2 hrs. ago</p>
          </div>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="notification-item">
          <i className="bi bi-info-circle text-primary" />
          <div>
            <h4>Dicta reprehenderit</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>4 hrs. ago</p>
          </div>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="dropdown-footer">
          <a href="#">Show all notifications</a>
        </li>
      </ul> */}
      {/* End Notification Dropdown Items */}
    </li>
    {/* End Notification Nav */}
    <li className="nav-item dropdown">
      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        {/* <i className="bi bi-chat-left-text" /> */}
        {/* <span className="badge bg-success badge-number">3</span> */}
      </a>
      {/* End Messages Icon */}
      {/* <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li className="dropdown-header">
          You have 3 new messages
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View all
            </span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="message-item">
          <a href="#">
            <img
              src="/assets/img/messages-1.jpg"
              alt=""
              className="rounded-circle"
            />
            <div>
              <h4>Maria Hudson</h4>
              <p>
                Velit asperiores et ducimus soluta repudiandae labore
                officia est ut...
              </p>
              <p>4 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="message-item">
          <a href="#">
            <img
              src="/assets/img/messages-2.jpg"
              alt=""
              className="rounded-circle"
            />
            <div>
              <h4>Anna Nelson</h4>
              <p>
                Velit asperiores et ducimus soluta repudiandae labore
                officia est ut...
              </p>
              <p>6 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="message-item">
          <a href="#">
            <img
              src="/assets/img/messages-3.jpg"
              alt=""
              className="rounded-circle"
            />
            <div>
              <h4>David Muldon</h4>
              <p>
                Velit asperiores et ducimus soluta repudiandae labore
                officia est ut...
              </p>
              <p>8 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="dropdown-footer">
          <a href="#">Show all messages</a>
        </li>
      </ul> */}
      {/* End Messages Dropdown Items */}
    </li>
    {/* End Messages Nav */}
    {/* <li className="nav-item dropdown pe-3">
      <a
        className="nav-link nav-profile d-flex align-items-center pe-0"
        href="#"
        data-bs-toggle="dropdown"
      >
        <img
          src="/assets/img/profilee.jpg"
          alt="Profile"
          className="rounded-circle"
        />
        <span className="d-none d-md-block dropdown-toggle ps-2">
         S . Mahajan
        </span>
      </a>
     
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>Shreya Mahajan</h6>
          <span>Web Developer</span>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link
            className="dropdown-item d-flex align-items-center"
            to="/UserProfile"
          >
            <i className="bi bi-person" />
            <span>My Profile</span>
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link
            className="dropdown-item d-flex align-items-center"
           to="/UserProfile"
          >
            <i className="bi bi-gear" />
            <span>Account Settings</span>
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link className="dropdown-item d-flex align-items-center"to="/Signout">
            <i className="bi bi-box-arrow-right" />
            <span>Sign Out</span>
          </Link>
        </li>
      </ul>
    </li> */}
      {/* End Profile Dropdown Items */}
    {/* End Profile Nav */}
  </ul>
</nav>
{/* End Icons Navigation */}
</header>
{/* End Header */}
{/* <AddTask showModal={showModal} setShowModal={setShowModal} handleCloseModal={handleCloseModal} /> */}
</>
  );
}