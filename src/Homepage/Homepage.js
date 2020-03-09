import React, { Component } from 'react';
import { Layout, Menu, Divider, Icon } from 'antd';
import Searchbar from '../pages/Searchbar';
import './dashboard.css'
import Register from './Register'
import Typical from 'react-typical';
import Recruter from '../pages/Recruter';
import Slider from '../pages/Slider/Slider';


// background image
// import Background from '../assets/1.jpg';


const { Header, Content, Footer } = Layout;
export default class Homepage extends Component {
    render() {
        return (
            <div >
                <Layout className="layout">
                    <Header

                        style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row',fontFamily:'Quicksand' }}>
                        <div className="logo" />
                        <text style={{ color: '#fc3909', fontWeight: 600, fontSize: 25 }}>Macropace Technologies</text>

                        <Recruter />

                    </Header>
                    <Content className="App"
                    //  style={{ backgroundImage: `url(${Background})`, backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat", height:"100%"}}
                    >
                        
                        <div style={{
                            marginTop: 113, width: '100%',
                        }}>
                            <Searchbar />
                            
                        </div>
                        <div style={{position:"absolute",top:200,left:100 , fontFamily:'Quicksand'}}>
    <span className="h1"> Trending Jobs in{' '} 
            <Typical className="typical"
            loop={Infinity}
            wrapper='b'
            steps={[
              'Arugumented reality',
              1000,
              'Data Analytics',
              1000,
              'Android Developer',
              1000,
              'Blockchain Engineer',
              1000,
              'Java Developer',
              1000

            ]}

            />
            !
            
              </span>
              </div>
                        <div>
                            <Layout 
                             style={{ backgroundColor: "#cfd8dc", height: 325, width: '90%', marginLeft: 75,marginTop:0, borderRadius: 25, paddingRight:50,  }}>
                                    <Slider/>
                            </Layout>
                        </div>
                        <br/>
                        <div style={{marginTop:154}}>

                          <Register/>
                        </div>

                    </Content>
                    <Footer style={{background:'#cfd8dc', height:200 , fontFamily:'Quicksand'}}>
                        <div style={{display:'flex', flexDirection:'row' , marginTop:50, marginLeft:450}}>
                            <div>
                        <text style={{color:'black' , fontSize:27, marginRight:30, fontWeight:600}}> Hire your Job</text>
                        <Divider type="vertical"  style={{background:'black' , height:100, width:.75}}/>

                        </div>


                        <div  style={{display:'flex', flexDirection:'column' , marginLeft:30}}>
                            <text style={{fontSize:27, color:'black', marginTop:3}}>info@hireyourJob.com</text>
                            <div style={{marginTop:15, marginLeft:30}} >
                        <a 
                        href="https://www.facebook.com/"
                        className='social'>
                           <i class="fa fa-facebook-official" aria-hidden="true" style={{fontSize:32, background:''}}></i>

                        </a> 
                        <a 
                        href="http://www.twitter.com/"
                        className='social'>
                            <Icon type="twitter"  style={{fontSize:32, color:'#00acee', }} />
                        </a>
                        <a href="http://www.linkedin.com"
                        className='social'>
                            <i class="fa fa-linkedin-square" aria-hidden="true"  style={{fontSize:32, background:''}}></i>
                        </a>
                        </div>
                        </div>
                        </div>
                </Footer>
                </Layout>
            </div>
        )
    }
}
