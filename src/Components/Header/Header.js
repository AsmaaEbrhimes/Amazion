import { React, useRef } from 'react';
import { Col, Container, Row, InputGroup, Form } from 'react-bootstrap';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/Glopalcontext';
import Wishlist from "../wishlist/Wishlist"
import sun from "../images/sunny-day-abstract-sun-isolated-background-weather-icon-page-symbol-your-web-site-design_769200-543.avif"
import moon from "../images/weather-icon-isolated_23-2151178585.jpg"
import "./Header.css";


const Header = ({ changeAr, changeEn }) => {
    const { basket } = useAuth()
    const [show, setShow] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const imageRef = useRef();
    const darkref=useRef()
    const wishlistref=useRef()
    const langref=useRef()

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
    }
    const toggleDarkMode = () => {
        imageRef.current.classList.toggle('anmateicon');
        setDarkMode(!darkMode);
        document.querySelector('body').classList.toggle('light')
    }
    const changeLanguageToAr = () => {
        changeAr()
    }

    const changeLanguageToEn = () => {
        changeEn()
    }
    const showActive=()=>{
        darkref.current.classList.toggle('active');
    wishlistref.current.classList.toggle('active');
    langref.current.classList.toggle('active');
    
    }
    return (
        <div className='header' style={{ background: 'rgba(240, 234, 234, 0.397)' }}>
            <Container>
                <Row style={{ padding: "0", margin: "0" }} className="mt-4 d-flex align-items-center">
                    <Col xs="2" md="1" xl="1" style={{ padding: "0px" }}> 
                    <span>Hello guss</span>
                        <i className="fa-solid fa-user icon user"></i>
                    </Col>

                    <Col xs="6"md="3" xl="6">
                        <InputGroup className="mb-3">
                            <InputGroup.Text><i className="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
                            <Form.Control />
                        </InputGroup>
                    </Col>

                    <Col xs="2"md="1" xl="1" style={{ padding: "0px" }} >
                        <Link to="/Shoping">
                            <div className='shopping_length'>
                                <i className="fa-solid fa-cart-shopping shopping"></i>
                                <span className='num_shopping'>{basket?.length}</span>
                            </div>
                        </Link>
                    </Col>

                    <Col>
                        <i onClick={showActive} class="fa-solid fa-bars bars"></i>
                    </Col>
                   
                        <Col xs="3" md="1" xl="1" className='wishlist' ref={wishlistref}><h4 onClick={handleShow}>WishList</h4></Col>
                    
                    <Col xs="1" md="1" xl="1" className='lang' ref={langref}>
                        <Form.Select
                            style={{ color: "black" }}
                            aria-label="Default select example"
                            onChange={(e) => {
                                const selectedLanguage = e.target.value;
                                if (selectedLanguage === 'ar') {
                                    changeLanguageToAr();
                                } else if (selectedLanguage === 'en') {
                                    changeLanguageToEn();
                                }
                            }}
                        >
                            <option value="ar">ar</option>
                            <option value="en">en</option>
                        </Form.Select>
                    </Col>
                    

                    <Col xs="4" md="2" xl="1" className='toggele' ref={darkref}>                    
                        <div onClick={toggleDarkMode} className='switch'>
                            <div className='parent_switch'>
                                <div className='icon_darklight'>
                                    <img ref={imageRef} src={darkMode ? sun : moon} alt="" />
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
                <Wishlist show={show} handleClose={handleClose} />
            </Container>
        </div>

    );
}

export default Header;


