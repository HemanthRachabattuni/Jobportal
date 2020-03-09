import React from "react";
import { Layout, } from 'antd';

import ComponentSlider from "@kapost/react-component-slider";
import './Slider.css'

const renderLeftArrow = () => <i className="fa fa-caret-left"   style={{fontSize:50, color:'black'}}/>;
const renderRightArrow = () => <i className="fa fa-caret-right" style={{fontSize:50, color:'black'}} />;

class MenuBar extends React.Component {
  render() {
    return (
      <div className="menu-bar">
        <ComponentSlider
          renderLeftArrow={renderLeftArrow}
          renderRightArrow={renderRightArrow}
        >
          
          <div  style={{display:'flex', flexDirection:'row' ,    fontFamily:'Quicksand'}}>
            
                                    <Layout   style={{ backgroundColor: '#a7c0cd', height: 200, width: 200, borderRadius: 25, marginTop: 20, marginLeft: 50 }}>
                                       <div   className='menu-item' >
                                        <div   style={{ display: 'flex', flexDirection: 'column' }}>
                                            <text style={{ color: 'black', fontSize: 24, fontWeight: 600, marginLeft: 0 ,}}><u>UX/UI</u></text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 40,paddingBottom:65 }}>Angular/ReactJS</text>

                                        </div>
                                        </div>

                                    </Layout>

                                    <Layout     style={{ backgroundColor: '#a7c0cd', height: 200, width: 200, borderRadius: 25, marginTop: 20, marginLeft: 50 }}>
                                        <div    className='menu-item' style={{ display: 'flex', flexDirection: 'column' }}>
                                            <text style={{ color: 'black', fontSize: 24, fontWeight: 600, marginLeft: 0 }}><u>Semiconductor</u></text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 40 ,paddingBottom:65}}>VLSI</text>

                                        </div>
                                    </Layout>
                                    <Layout  style={{ backgroundColor: '#a7c0cd', height: 200, width: 200, borderRadius: 25, marginTop: 20, marginLeft: 50 }}>
                                        <div  className='menu-item' style={{ display: 'flex', flexDirection: 'column' }}>
                                            <text style={{ color: 'black', fontSize: 24, fontWeight: 600, marginLeft: 0 }}><u>Embedded</u></text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 40,paddingBottom:65 }}>Automotive</text>

                                        </div>
                                    </Layout>
                                    <Layout  style={{ backgroundColor: '#a7c0cd', height: 200, width: 200, borderRadius: 25, marginTop: 20, marginLeft: 50 }}>
                                        <div   className='menu-item' style={{ display: 'flex', flexDirection: 'column' }}>
                                            <text style={{ color: 'black', fontSize: 24, fontWeight: 600, marginLeft: 0,  }}><u>Java/J2EE</u></text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 0 }}>C# .Net</text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 0 }}>Oracle</text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 0 , paddingBottom:50}}>DBA</text>



                                        </div>
                                    </Layout>
                                    <Layout   style={{ backgroundColor: '#a7c0cd', height: 200, width: 200, borderRadius: 25, marginTop: 20, marginLeft: 50 }}>
                                        <div   className='menu-item' style={{ display: 'flex', flexDirection: 'column' }}>
                                            <text style={{ color: 'black', fontSize: 24, fontWeight: 600, marginLeft: 0 }}><u>Automation</u></text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 40,paddingBottom:65 }}>Python</text>

                                        </div>
                                    </Layout>
                                    <Layout    style={{ backgroundColor: '#a7c0cd', height: 200, width: 200, borderRadius: 25, marginTop: 20, marginLeft: 50 }}>
                                        <div   className='menu-item' style={{ display: 'flex', flexDirection: 'column' }}>
                                            <text style={{ color: 'black', fontSize: 24, fontWeight: 600, marginLeft: 0 }}><u>Embedded</u></text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 40 ,paddingBottom:65}}>Automotive</text>

                                        </div>
                                    </Layout>
                                    <Layout   style={{ backgroundColor: '#a7c0cd', height: 200, width: 200, borderRadius: 25, marginTop: 20, marginLeft: 50 }}>
                                        <div   className='menu-item' style={{ display: 'flex', flexDirection: 'column' }}>
                                            <text style={{ color: 'black', fontSize: 24, fontWeight: 600, marginLeft: 0,  }}><u>Java/J2EE</u></text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 0 }}>C# .Net</text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 0 }}>Oracle</text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 0 ,paddingBottom:50}}>DBA</text>



                                        </div>
                                    </Layout>
                                    <Layout  style={{ backgroundColor: '#a7c0cd', height: 200, width: 200, borderRadius: 25, marginTop: 20, marginLeft: 50 }}>
                                        <div   className='menu-item' style={{ display: 'flex', flexDirection: 'column' }}>
                                            <text style={{ color: 'black', fontSize: 24, fontWeight: 600, marginLeft: 0 }}><u>Embedded</u></text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 40 ,paddingBottom:65}}>Automotive</text>

                                        </div>
                                    </Layout>
                                    <Layout style={{ backgroundColor: '#a7c0cd', height: 200, width: 200, borderRadius: 25, marginTop: 20, marginLeft: 50 }}>
                                        <div   className='menu-item' style={{ display: 'flex', flexDirection: 'column' }}>
                                            <text style={{ color: 'black', fontSize: 24, fontWeight: 600, marginLeft: 0,  }}><u>Java/J2EE</u></text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 0 }}>C# .Net</text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 0 }}>Oracle</text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 0,paddingBottom:50 }}>DBA</text>



                                        </div>
                                    </Layout>
                                    <Layout  style={{ backgroundColor: '#a7c0cd', height: 200, width: 200, borderRadius: 25, marginTop: 20, marginLeft: 50 }}>
                                        <div   className='menu-item' style={{ display: 'flex', flexDirection: 'column' }}>
                                            <text style={{ color: 'black', fontSize: 24, fontWeight: 600, marginLeft: 0 }}><u>Embedded</u></text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 40,paddingBottom:65 }}>Automotive</text>

                                        </div>
                                    </Layout>
                                    <Layout  style={{ backgroundColor: '#a7c0cd', height: 200, width: 200, borderRadius: 25, marginTop: 20, marginLeft: 50 }}>
                                        <div   className='menu-item' style={{ display: 'flex', flexDirection: 'column' }}>
                                            <text style={{ color: 'black', fontSize: 24, fontWeight: 600, marginLeft: 0,  }}><u>Java/J2EE</u></text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 0 }}>C# .Net</text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 0 }}>Oracle</text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 0,paddingBottom:50 }}>DBA</text>



                                        </div>
                                    </Layout>
                                </div>
          
        </ComponentSlider>
      </div>
    );
  }
}

export default MenuBar;
