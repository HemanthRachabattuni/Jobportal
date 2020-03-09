import React, {Component}from "react";
import { BrowserRouter as Router, Route, Link, Redirect, NavLink } from "react-router-dom";
import Dashboard from "./Dashboard";
import Resume from "./Resume";
import "./Toolbar.css"
import "../App.css"
import PostJobs from "./PostJobs";
import Settings from "./Settings";
import Managejobs from "./Managejobs";
import { Layout, Menu, Icon } from 'antd';


import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';




class Admin extends Component{
    render(){
        return(
            <Router>
                <div className="App">
            <Route render={({ location, history }) => (
                <React.Fragment>
                    <SideNav className="toolbar" style={{color:"black", background:"#78909c" ,fontFamily:'Quicksand'  }}
                        onSelect={(selected) => {
                            const to = '/' + selected;
                            if (location.pathname !== to) {
                                history.push(to);
                            }
                        }}
                    >
                        
                        <SideNav.Nav defaultSelected="Dashboard" style={{ paddingTop:55}}>
                            <NavItem eventKey="Dashboard">
                               
                                <NavText> 
                                <Icon type="user" className="icon" />
                                    Dashboard
                                </NavText>
                            </NavItem>
                           
                            <NavItem eventKey="PostJobs">
                               
                                <NavText>
                                <Icon type="upload" className="icon" />
                                    PostJobs
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="Settings">
                               
                                <NavText>
                                <Icon type="appstore-o" className="icon" />

                                    Settings
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="Managejobs">
                               
                                <NavText>
                                <Icon type="laptop"  className="icon" />

                                    Managejobs
                                </NavText>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>
                    <main>
                        <Route path="/Dashboard" exact component={props => <Dashboard />} />
                        <Route path="/PostJobs" component={props => <PostJobs />} />
                        <Route path="/Resume" component={props => < Resume/>} />
                        <Route path="/Managejobs" component={props => <Managejobs />} />
                        <Route path="/Settings" component={props => <Settings />} />

                    </main>
                </React.Fragment>
            )}
            />
            </div>
            

        </Router>
        
    
        )
    }
}
export default Admin;