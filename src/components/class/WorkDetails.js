import React, { Component } from 'react'
class WorkDetails extends Component {
    
    render() {
        let resumeData = this.props.resumeData;
        return (
            <div className="container mb-5 p-4">
                <div className="row ms-2 mb-2">
                    <h3 className="fw-normal">Featured works</h3>
                    {
                        resumeData.portfolio && resumeData.portfolio.map(item => {
                            return (
                                <div className="col-xxl-12 col-md-6 p-2">
                                    <img src={item.image} className="rounded float-start py-2" alt="..."/>
                                    <h4 id="featuredTitle" class="fw-bolder mb-3">{item.title}</h4>
                                    <div className="featuredYear d-flex">
                                        <p className="btn btn-secondary rounded-pill text-center py-0 mb-3">{item.date}</p>
                                        <h6 className="fs-5 mx-2">{item.infoContent}</h6>
                                    </div>
                                    <p className="text-md-start" id="featuredParagph">{item.content}</p>
                                </div>
                            )
                        })
                    }
                </div>
                
            </div>
            
        )
    }
}
export default WorkDetails;