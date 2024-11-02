import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Root = props => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto">
                <Navbar ></Navbar>
                <Outlet ></Outlet>
            </div>

            <Footer></Footer>
        </div>
    )
}



export default Root
