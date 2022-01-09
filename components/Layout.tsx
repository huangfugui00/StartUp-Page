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
            <StickyTop>
                <div className="pb-4 border-b">
                <div className="my-container ">
                    <Header/>
                </div>
                </div>
            </StickyTop>
            {children}
            <div className="py-8">
            <Footer/>
            </div>
        </div>
    )
}

export default Layout
