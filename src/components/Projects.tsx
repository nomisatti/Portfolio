import React from 'react';
import { ProjectData } from './projectData/ProjectData'
import useWebAnimations from "@wellyshen/use-web-animations";

function Projects() {

  const refInTypeScript = React.useRef<HTMLDivElement>(null);
    const { ref = refInTypeScript} = useWebAnimations({
      keyframes: {
        transform: "translateX(100%) ", 
  
      },
      timing: {
        duration: 2000, 
        iterations: 1, 
        direction: "alternate-reverse",
        easing: "ease-in", 
      },
  
    });
  return (
    < div ref={ref}>
      <div className="my-5">
        <h1 className="text-center"> My Projects </h1>
      </div>
      <div   className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div  className='row gy-15'>
              {
                ProjectData.map((data, index) => {
                  return (
                    <div  key={index} className="col-md-4 col-12 mx-auto my-5">
                      <div className="card" >
                        <img className="card-img-top" src={data.imgsrc} alt={data.title} />
                        <div className="card-body">
                          <h5 className="card-title">{data.title}</h5>
                          
                          <a href={data.projectlink} className="btn btn-danger">Visit Website</a>
                          <a href={data.gitlink} className="btn btn-success float-right">View GitHub Repos</a>
                        </div>
                      </div>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Projects;