import React from 'react';
import developer from './images/about-image.png'
import useWebAnimations from "@wellyshen/use-web-animations";

function About() {

    const refInTypeScript = React.useRef<HTMLDivElement>(null);
    const { ref = refInTypeScript } = useWebAnimations({
      keyframes: {
        transform: "translateX(-100%)", 
  
      },
      timing: {
        duration: 1000, 
        iterations: 1, 
        direction: "alternate-reverse",
        easing: "ease-in-out", 
      },
  
    });
    return (
        <section ref={ref} id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className='row'>
                            <div className="col-md-6 order-1 pt-0 pt-lg-5  header-img">
                                <img src={developer} className="img-fluid animated" alt='developer' />

                            </div>
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column">



                                <div className="mh-promo wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" >
                                    <h1>About Me</h1>
                                </div>

                                <p>Hello, I’m a Nouman, web/software developer based in Pakistan. I have good experience in web site design & development . Also I am good at</p>
                                <div className="mh-about-tag wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s" >
                                    <ul>
                                        <li><span>html</span></li>
                                        <li><span>css</span></li>
                                        <li><span>bootstrap</span></li>
                                        <li><span>asp.net</span></li>
                                        <li><span>C#</span></li>

                                        <li><span>React</span></li>
                                        <li><span>Javascript</span></li>
                                        <li><span>wordpress</span></li>
                                    </ul>
                                </div>
                                <div className="mt-2  ">
                                    <a href="https://www.facebook.com/noumasatti39/" rel="noopener noreferrer" target="_blank" ><span className="fa fa-facebook  footersocial"></span></a>
                                    <a href="https://www.linkedin.com/in/noumanatiq/" rel="noopener noreferrer" target="_blank" ><span className="fa fa-linkedin  footersocial"></span></a>
                                    <a href="https://github.com/nomisatti" target="_blank" rel="noopener noreferrer" ><span className="fa fa-github  footersocial"></span></a>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
