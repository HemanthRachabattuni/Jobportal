import React, { Component } from 'react';
import 'react-bootstrap';
import '../App.css';
export default class Register extends Component {
    render() {
        return (
            <div>
               <section
                className= "search-sec" style={{paddingTop:60,    fontFamily:'Quicksand'
            }}
                >
                    <div>
                    <text style={{fontSize:20, fontWeight:700, color:'black',fontFamily:'Quicksand', position:'absolute', top:10, left:650}}><u>Register for Job Alerts</u></text>
                
                    </div>
                    <div  style={{marginLeft:350}}>
                        <form action="#" method="post" novalidate="novalidate">
                            <div className="row">
                                <div className= "col-lg-12">
                                    <div className= "row">
                                        <div className= "col-lg-3 col-md-3 col-sm-12 p-0" style={{marginRight:25}}>
                                            <input type= "text" className="form-control search-slt" placeholder="Keyskills" />
                                        </div>
                                        <div className=  "col-lg-3 col-md-3 col-sm-12 p-0">
                                            <input type= "text" className="form-control search-slt" placeholder='Email' />
                                        </div>
                                       
                                        <div className= "col-lg-3 col-md-3 col-sm-12 p-0">
                                            <button type= "button" style={{backgroundColor:"#f48628",color:"white", height:50, width:250}}>Register</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}
