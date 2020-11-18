import React from 'react';
import WithHeader from '../../Header/with-header';
import Footer from '../../Footer/index';
import './styles.css';
import Webcam from "react-webcam";


class CameraPage extends React.Component {
  enableWebcam = () => this.setState({ webcamEnabled: true });
  disenableWebcam = () => this.setState({ webcamEnabled: false });

  constructor(props) {
    super(props);
    this.state = { webcamEnabled: false };
  }
  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };
    return (
      <div>
        <WithHeader/>
        <div className="page-title">
          <div className="text">
            <div>
                {(() => {
                        if (this.state.webcamEnabled){
                          
                          return(
                          <React.Fragment>
                            <button onClick={this.disenableWebcam}>Disenable webcam</button>
                            <Webcam 
                            audio={false}
                            height={350}
                            ref={this.setRef}
                            screenshotFormat="image/jpeg"
                            width={350}
                            videoConstraints={videoConstraints}
                            />
                          </React.Fragment>
                          );
                        }else{
                          return(
                            <React.Fragment>
                              <button onClick={this.enableWebcam}>Enable webcam</button>
                            </React.Fragment>
                          );
                        } 
                    })()
                }
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default CameraPage;