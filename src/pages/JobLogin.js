import React, { Component } from 'react'
import { Modal, Button, Input, Icon, } from 'antd';
import '../App.css'

export default class JobLogin extends Component {
    render() {
        return (
           <div>
               <label style={{color:"#00000", fontWeight:500}}>Full Name</label>
               <br/>
                <Input placeholder="Enter your Name" />

        <br/>
        <br/>

                <label style={{color:"#00000", fontWeight:500}}>Password</label>

                <Input placeholder="Enter your Password" />

                <br/>
                <br/>

                <label style={{color:"#00000", fontWeight:500}}>Email</label>

                <Input placeholder="Enter your Email" />
                <br/>
                <br/>
                <Button type="primary" style={{marginleft:190}} >Sign Up</Button>

            


            
          </div>
        )
    }
}
