import React from 'react'


import Header from '../components/header/header'
import Footer from '../components/footer/footer'

const DefaultLayout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default DefaultLayout
