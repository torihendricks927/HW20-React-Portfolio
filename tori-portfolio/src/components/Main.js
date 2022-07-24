import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Navigation from './Navbar'
import Project from './Project'

export default function Main () {
    return (
        <div>
            <Navigation/>
            <Header/>
            <Project/>
            <Footer/>
        </div>
    )
}