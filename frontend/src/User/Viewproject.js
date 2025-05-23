import React, { useState, useEffect } from 'react';
import ApiServices, { BASE_URL } from '../Admin/ApiServices';

const ViewProject = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  useEffect(() => {
    const fetchProjects = () => {
      setTimeout(() => {
        let emptoken = sessionStorage.getItem("Emptoken");
        ApiServices.GetProjectTeamforEmp({headers:{authorization:emptoken}})
        .then(res =>{
          // console.log(res.data.data);
          // setProjects(res.data.data);
          let data = res.data.data;
          const filteredData = data.filter(item => item.employees.some(emp => emp._id === sessionStorage.getItem("employeeId")));
          // console.log("filterdata",filteredData);
          setProjects(filteredData);
        })
        setLoading(false);
      }, 1000);
    };

    fetchProjects();
  }, []);

  const toggleExpand = (projectId) => {
    setExpandedProjectId((prevId) => (prevId === projectId ? null : projectId));
  };

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Project View</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">View project</li>
          </ol>
        </nav>
      </div>
      <div className="project-view">
        <h2>Project View</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
          <div className="row">
            {projects.map((project) => (
            <div className='col-md-4'>
              <div className="card mb-3" key={project.id}>
                <div className="card-body d-flex justify-content-between">
                  <div>
                    <img src={BASE_URL+project.projectId.attachment} className='img-fluid h-50 w-100 mt-4'></img>
                    <h5 className="card-title">Project Name : {project.projectId.name}</h5>
                    <p className="card-text">Description: {project.projectId.description}</p>
                    <b><p className="card-text">Technology : {project.projectId.technology}</p></b>
                    {expandedProjectId === project.id && (
                      <>
                       <b><p className="card-text">Created by: {project.createdBy}</p></b>
                        <h6>Tasks:</h6>
                        <ul className="list-group list-group-flush">
                          {project.tasks.map((task) => (
                            <li className="list-group-item d-flex justify-content-between align-items-center" key={task.id}>
                              <span>{task.name}</span>
                              <span className={`badge bg-${task.status === 'Completed' ? 'success' : task.status === 'Pending' ? 'warning' : 'primary'}`}>{task.status}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                  {/* <button
                    className="btn btn-link"
                    onClick={() => toggleExpand(project.id)}
                  >
                    <i className={`bi bi-chevron-${expandedProjectId === project.id ? 'up' : 'down'}`}></i>
                  </button> */}
                </div>
              </div>
            </div>
            ))}
          </div>
            
          </>
        )}
      </div>
    </main>
  );
};

export default ViewProject;
