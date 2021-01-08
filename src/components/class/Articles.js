import React, { Component } from 'react'

class Articles extends Component {
    render() {
        let resumeData= this.props.resumeData;
        return (
            <div className="container p-4">
                <div className="row ms-5 px-5 py-5 my-4">
                    <h1 className="fw-bolder p-4 px-5">Blog</h1>
                    {
                        resumeData.articles && resumeData.articles.map(item=>{
                            return (
                                <div className="col-md-10 px-5 p-1">
                                    <h3 className="fw-bolder mb-3">{item.title}</h3>
                                    <div className="recentTitle d-flex">
                                        <p>{item.date}</p>
                                        <h6 className="mx-3">|</h6>
                                        <h6 style={{color: "#8695A4"}}>{item.role}</h6>
                                    </div>
                                    <p className="text-md-start">{item.content}</p>
                                    <hr></hr>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Articles;