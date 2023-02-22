import React, { useState } from 'react';

import Footer from '../../modules/Footer/Footer';
import NavBar from '../../modules/NavBar/NavBar';

import useWindowDimensions from "../../../hooks/useWindowDimensions";

export default function DefaultLayout({ children }) {

    const { height, width } = useWindowDimensions();


    const [loading, setLoading] = useState(true);

    return (

        <>
            <NavBar />
            <main className="main-container">{children}</main>
            <Footer />
        </>

    )
}