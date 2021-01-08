import React, { Component } from 'react'

class Work extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <div className="blogPost mt-3 mb-3">
                <div className="container" id="postContainer">
                    <div className="row p-4 ms-0" id="postRow">
                        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            <h5 id="blogTitle" className="p-1">Recent Posts</h5>
                            {
                                resumeData.cardOne.map(item =>{
                                    return(
                                        <div className="card" id="postCard">
                                            <div className="card-body">
                                                <h4 className="card-title fw-bold">{item.cardTitle}</h4><br></br>
                                                <div className="recentTitle d-flex">
                                                    <p>{item.cardDate}</p>
                                                    <h6 className="mx-3">|</h6>
                                                    <h6>{item.cardRole}</h6>
                                                </div>
                                                <p className="card-text">{item.cardInfo}</p><br></br>
                                            </div>
                                        </div>
                        
                                    )
                                })
                            }
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            <a id="postView" className="p-2 d-flex justify-content-end" href="/">View All</a>
                            {
                               resumeData.cardTwo.map(item=>{
                                   return(
                                        <div className="card" id="postCardTwo">
                                            <div className="card-body">
                                                <h4 className="card-title fw-bold">{item.cardTitle}</h4><br></br>
                                                <div className="recentTitle d-flex">
                                                    <p>{item.cardDate}</p>
                                                    <h6 className="mx-3">|</h6>
                                                    <h6>{item.cardRole}</h6>
                                                </div>
                                                <p className="card-text">{item.cardInfo}</p><br></br>
                                            </div>
                                        </div>
                                   )
                               })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Work;
