import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Form from "../components/Form";

function Contact() {
    return (
        <div>
            <Navbar />
            <HeroImg2
                heading="CONTACT."
                text="Please chat with me if you have any questions."
            />
            <Form />
            <Footer />
        </div>
    )
}
export default Contact;