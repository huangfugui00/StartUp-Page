import React from 'react'
import Header from './Header'
import Footer from './Footer'
import StickyTop from './StickyTop'
type layoutProp = {
    children: React.ReactNode
}

const Layout = ({ children }:layoutProp) => {
    return (
        <div >
           
            {children}
            <div className="py-8">
            <Footer/>
            </div>
        </div>
    )
}

export default Layout
