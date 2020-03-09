import React from "react";
import { Modal, Button, Layout  } from 'antd';
import Login from "./Login";
import JobLogin from "./JobLogin";
import { BrowserRouter as Router, Route, Link, Redirect, NavLink } from "react-router-dom";
import { Component } from "react";
import '../App.css'
import Login2 from "./Login2";

const {Header}=Layout;
class Recruter extends React.Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
      <div>
        <Button type="default" style={{color:"orange", backgroundColor:"white", position:"absolute", top:26, left:1330,fontWeight:600,fontFamily:'Quicksand'}} onClick={this.showModal}>
          JobSeeker
        </Button>
        <Modal
          visible={visible}
          // title="Jobseeker's can Register here"
         
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
           <text></text>
          ]}
        >
                
          
         <Login2/>
         
        </Modal>
      </div>

      <div>
        <Button type="Primary" style={{color:"white", backgroundColor:"orange", position:"absolute", top:26, left:1235, fontWeight:600,fontFamily:'Quicksand'}} onClick={this.showModal}>
          Recruiter
        </Button>
        <Modal
          visible={visible}
          title={[  <text style={{color:'#f50057',fontSize:24, marginLeft:155, fontWeight:600}}>Please Register!! </text>]}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
           <text></text>
          ]}
        >
         <Login/>
        </Modal>
      </div>

      </div>
    );
  }
}





export default Recruter;