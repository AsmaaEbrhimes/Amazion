import { Button, Col } from 'react-bootstrap';
import React from 'react';
import "./Buttons.css"


const Buttons = ({ categories, setSelectedCategory }) => {

    const ShowCtegores = async (cat) => {
        setSelectedCategory(cat);
    }
    const GetAllProduct = () => {
        setSelectedCategory("");
    };

    return (
        <>
            <Col sm="12" className='Buttons'>
                <Button onClick={GetAllProduct} variant="outline-warning">All product</Button>
                {categories.map((cat) => (
                    <Button onClick={() => ShowCtegores(cat)} variant="outline-warning">{cat}</Button>
                ))}
            </Col>
        </>
    )
}

export default Buttons;