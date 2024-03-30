import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Contact() {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>This is the Contact Us page content. Replace this with your actual content.</p>

            {/* Contact Person 1 */}
            <div>
                <h2>Contact Person 1</h2>
                <p>Name: Aniket Kumar</p>
                <SocialIcon url="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" />

                {/* Phone number link */}
                <p>Phone: <a href="tel:+1234567890">+1234567890</a></p>

                {/* Address */}
                <p>Address: City1, State1, Country1</p> {/* Replace with your address */}
            </div>

            {/* Contact Person 2 */}
            <div>
                <h2>Contact Person 2</h2>
                <p>Name: Shivansh Guleria</p>
                <SocialIcon url="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" />

                {/* Phone number link */}
                <p>Phone: <a href="tel:+1234567890">+1234567890</a></p>

                {/* Address */}
                <p>Address: City2, State2, Country2</p> {/* Replace with your address */}
            </div>
        </div>
    );
}

export default Contact;
