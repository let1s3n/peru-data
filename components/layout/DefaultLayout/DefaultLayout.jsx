import React from 'react';

import Footer from '../../modules/Footer/Footer';
import NavBar from '../../modules/NavBar/NavBar';


export default function DefaultLayout({ children }) {

    return (

        <>
            <NavBar />
            <main className="main-container">{children}</main>
            <Footer />
        </>

    )
}