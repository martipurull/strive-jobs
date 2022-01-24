import React from 'react'
import './styles/index.css'
import { Facebook, Instagram, Whatsapp, Twitter, Youtube } from 'react-bootstrap-icons'

export default function SJFooter() {
    return (
        <div id="mp-footer" className="d-flex bg-dark text-light pt-4 pb-3 mt-3 fixed-bottom">
            <div>
                <Facebook size={20} className="me-3" />
                <Instagram size={20} className="me-3" />
                <Whatsapp size={20} className="me-3" />
                <Twitter size={20} className="me-3" />
                <Youtube size={20} className="me-3" />
            </div>
            <div>
                Strive Jobs &copy; {new Date().getFullYear()}
            </div>
            <div>
                <p>Privacy Policy</p>
                <p>Contact</p>
                <p>Partners</p>
                <p>Work with us</p>
            </div>
        </div>
    )
}
