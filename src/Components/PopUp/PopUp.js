
import { Row, Col } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import {useFeatchProductId} from "../../Custom/Customhook";
import "./Poup.css"
const PopUp = ({ handleClose, show, SelectedProductId }) => {
   const id=useFeatchProductId(`https://fakestoreapi.com/products/${SelectedProductId}`)
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    {SelectedProductId && id &&  (
                        <>
                            <Row>
                                <Col sm="6"> <img className="img_model" src={id.image} alt="" /></Col>
                                <Col sm="6">
                                    <h5 style={{ color: 'black' }}>{id.title}</h5>
                                    <p style={{ color: 'black' }}>{id.description}</p>
                                    {Array(Math.trunc(id.rating.rate)).fill().map((_, i) => (
                                        <span key={i} style={{ display: 'inline-block', fontSize: '24px', color: '#f0e80f', background: 'transparent' }}>★</span>
                                    ))}
                                    <p style={{ color: 'red' }}>${id.price}</p>
                                    <div className='action_btn'>
                                        <button>+</button>
                                        <button>items 1</button>
                                        <button>-</button>
                                    </div>
                                    <div className='Action_basket'><button>Add To Basket</button> </div>
                                 
                                </Col>
                            </Row>
                        </>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default PopUp;
