import React, { Component } from 'react'
import { Navbar, Button } from 'react-bootstrap';


export default class Header extends Component {
    render() {
        return (
            <div>
                <div style={{ width: 1280 }}>
                    <Navbar style={{ backgroundColor: '#78909c', fontFamily:'Quicksand' }} >
                        <Navbar.Brand style={{ color: 'white' }}>Recruiters Dashboard</Navbar.Brand>
                    </Navbar>
                </div>
                <div>
                    <Button variant="secondary" size="sm" style={{position:"absolute", top:20, right:100 , backgroundColor:'white', color:'black' , fontFamily:'Quicksand'}}>
                        Logout
                    </Button>
                </div>
            </div>
        )
    }
}
