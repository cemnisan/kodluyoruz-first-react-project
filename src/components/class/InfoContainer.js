import React, {Component} from 'react'

class InfoContainer extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <div className="container">
                <div className="row ms-5 mb-5" id="about">
                    <div className="col-sm-11 col-md-8 order-2 order-md-1" id="aboutCol">
                        <h1>{resumeData.name}<br></br>{resumeData.role}</h1>
                        <p><br></br>{resumeData.info}<br></br>{resumeData.infoTwo}</p><br></br>
                        <button className="btn btn-danger" style={{backgroundColor:"#FF6464"}}>Download Resume</button>
                    </div>
                    <div className="col-md-4 order-1 mb-4 px-0" id="aboutImg">
                        <img className="rounded-circle" src={resumeData.image} alt="hello"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoContainer;
