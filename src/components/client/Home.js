import React from 'react'
import Header from '../layouts/Header';
import Banner from '../layouts/Banner';
import Banner2 from '../layouts/Banner2';
import Features from '../layouts/Features';
import Services from '../layouts/Services';
import Footer from '../layouts/Footer';
export default function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <Services />
            <Banner2 />
            <Features />
            <Footer />
        </div>
    )
}
