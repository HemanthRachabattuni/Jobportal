import React, { Component } from 'react'
import Header from './Header';
import { Layout, Icon } from 'antd';
import './Toolbar.css'
import Button from './Button'
import PostJobs from './PostJobs';



const { Content } = Layout;

export default class Dashboard extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#eceff1', height: "100%" ,fontFamily:'Quicksand'}}>
        <div>
          <Header />
          <div>
          <Layout >
              <Content style={{ backgroundColor: '#eceff1', }}>
                <div style={{ background:'#cfd8dc',borderRadius:25, height: 175, width: 1200,marginLeft:33,marginTop:25, top: 400, paddingBottom: 50, paddingTop: 50, paddingRight: 150, display: 'flex', flexDirection: "row", alignItems: 'space-around' }}>
                

                
                 <button  style={{ background: '#ffab40', height: 90, width: 200, marginLeft: 100, cursor:'pointer', boxShadow:10 }} >
                   <div className='myjobs' >
                    <Icon type="user" style={{ fontSize: 25, color: 'black', marginTop:19 }} />
                    <text style={{ color: 'black', fontSize: 25, marginTop: 0, }}>My Jobs</text>
                    </div>
                  </button>
              
                  <button style={{ background: '#00e676',height: 90, width: 200, marginLeft: 100, cursor:'pointer' }} >
                   <div className='applicants' >
                    <Icon type='usergroup-add' style={{ fontSize: 25, color: 'black', marginTop:19 }} />
                    <text style={{ color: 'black', fontSize: 25, marginTop: 0, }}>Applicants</text>
                    </div>
                  </button>

                  <button style={{ background: '#ff5252', height: 90, width: 200, marginLeft: 100, cursor:'pointer' }} >
                   <div className='myprofile' >
                    <Icon type="bar-chart" style={{ fontSize: 25, color: 'black', marginTop:19 }} />
                    <text style={{ color: 'black', fontSize: 25, marginTop: 0, }}>My profile</text>
                    </div>
                  </button>

                  <button style={{ background: '#536dfe',height: 90, width: 200, marginLeft: 100, cursor:'pointer' }} >
                   <div className='postajob' >
                    <Icon type="folder-add" style={{ fontSize: 25, color: 'black', marginTop:19 }} />
                    <text style={{ color: 'black', fontSize: 25, marginTop: 0, }}>post a job</text>
                    </div>
                  </button>

                </div>
                <div style={{height:500, width:600}}>
                  <Layout style={{height:450, width:1200, background:'#ffffff', marginLeft:30, borderRadius:25, marginTop:50}}>

                  </Layout>

                </div>
              </Content>
            </Layout>
          </div>
        </div>
        <div></div>
      </div>
    )
  }
}
