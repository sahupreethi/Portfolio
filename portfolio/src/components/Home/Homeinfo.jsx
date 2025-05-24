import Typewriter from "typewriter-effect";
import './home.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Data } from '../Data';

function Homeinfo() {
  return (
    <div>
      <div className="homeinfo container">
        <div className="row">
          <div className="col-12 col-md-6 order-md-1 order-2 d-flex align-items-center">
            <div>
              <h1 className='display-4 fw-bold'>
                Hi, I am <span style={{ color: '#000000' }}>{Data.name}</span>
              </h1>
              <div className="d-flex align-items-center">
                <h1 className="display-5 fw-bold mb-0">I am a</h1>
                <span style={{ color: '#000000' }} className="ms-2 fs-1 fw-bold">
                  <Typewriter
                    options={{
                      strings: [Data.role],
                      autoStart: true,
                      loop: true,
                      wrapperClassName: 'typewriter-text',
                    }}
                  />
                </span>
              </div>

              <p className='fs-5 mb-4 pt-4'>{Data.about}</p>

              {/* Social Links + Resume aligned evenly with less spacing */}
              <div className="d-flex justify-content-evenly align-items-center mt-4">
                <a href={Data.Linkedin}><FaLinkedin style={{ color: 'blue', fontSize: '2rem' }} /></a>
                <a href={Data.Github}><FaGithub style={{ color: 'black', fontSize: '2rem' }} /></a>
                <a href={Data.resume} download={Data.resume} className="btn btn-dark">
                  Resume<i className="bi bi-arrow-down-circle fs-5 px-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 order-md-2 order-1 align-items-center">
            <img
              src={Data.image}
              alt="Profile"
              className='img-fluid border border-dark images ms-sm-5'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homeinfo;
