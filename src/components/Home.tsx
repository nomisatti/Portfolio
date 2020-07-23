import React from 'react';
import developer from './images/developer.svg'
import useWebAnimations from "@wellyshen/use-web-animations";
import { NavLink } from 'react-router-dom';


function Home() {
  const refInTypeScript = React.useRef<HTMLDivElement>(null);
  const { ref = refInTypeScript} = useWebAnimations({
    keyframes: {
      transform: "translateY(-20px)", 

    },
    timing: {
      duration: 1500, 
      iterations: Infinity, 
      direction: "alternate-reverse",
      easing: "ease-in-out", 
    },

  });

  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className='row'>
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <div className="mh-promo wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" >
                  <span>Hello I'm</span>
                </div>
                <h1 >

                  <strong className="brand-name">Nouman Atiq</strong>
                </h1>
                <h2>Software Developer</h2>
                <ul className="social">
                  <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s" ><i className="fa fa-envelope"></i><a href="mailto: noumanatiqsatti.92@gmail.com">noumanatiqsatti.92@gmail.com</a></li>
                  <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s" ><i className="fa fa-phone"></i><a href="callto:+92 312 564 6074">+92 312 564 6074</a></li>
                  <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s" ><i className="fa fa-github" aria-hidden="true"></i><a href="https://github.com/nomisatti">Git Hub : nomisatti</a></li>
                </ul>
                <div className="mt-3 ">
                  <NavLink to="/Project" className="btn btn-my-work mt-2">
                    My Work
                        </NavLink>
                 
                  <NavLink to="/About" className=" btn btn-my-about mt-2">
                    About Me
                        </NavLink>
                        <NavLink to="/Contact" className=" btn btn-my-skills mt-2">
                    Contact Me
                        </NavLink>
                </div>
              </div>
              <div ref={ref} className="col-md-6 order-1 pt-0 pt-lg-5 order-lg-2 header-img">
                <img src={developer} className="img-fluid animated" alt='developer' />

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>

  );
}

export default Home;