import { useState } from 'react';
import { Col , Row} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import img from "../images/cute-girl-with-shopping-bags-shoulder_23-2148333155.jpg"
import "./Supscripe.css"
const Supscripe = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
  
    return (
      <>
        
        <Modal show={show} onHide={handleClose}id="custom-modal">
        <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                   <Row>
                       <Col sm="6">
                           <img className='imag_supscripe' src={img} alt=""/>
                       </Col>
                       <Col sm="6">
                           <h2 className='title_supscripe'>NEWSLETTERS</h2>
                           <p className='desc_supscripe'>Sign up to our newsletter and get exclusive deals you won find any where else straight to your inbox!</p>
                           <input className='input_supscripe' placeholder='Enter Email Address Here' type="rext"/>
                           <div>
                               <button className='btn_supscripe'>SUBSCRIBE</button>
                           </div>
                           <div className='input_supscripe_second'>
                           <input placeholder='Enter Email Address Here' type="checkbox"/>
                           <span className='desc2_supscripe'>Don't show this popup again</span>
                           </div>
                       </Col>
                   </Row>
                     
                    
                </Modal.Body>
            </Modal>
      </>
    );
   
}



export default Supscripe;