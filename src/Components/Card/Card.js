
import { Col, Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useAuth } from "../../Context/Glopalcontext"
import { ADD_TO_BASKET, ADD_WISHLIST } from "../../Types/types"
import { useState, useEffect } from 'react';
import axios from 'axios';
import PopUp from "../PopUp/PopUp"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Card.css"


const Card = ({ products, selectedCategory, }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])

  const [showModal, setShowModal] = useState(false);
  const [SelectedProductId, setSelectedProductId] = useState()

  const { t } = useTranslation();
  const handleShow = (id) => {
    setShowModal(true);
    setSelectedProductId(id)
  }

  const handleClose = () => setShowModal(false)
  const [data, setData] = useState([]);
  const { dispatch } = useAuth()
  const renderTooltip1 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Add Wishlist
    </Tooltip>
  );
  const renderTooltip2 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Add Compare
    </Tooltip>
  );

  const renderTooltip3 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Quic view
    </Tooltip>
  );
  const AddToBasket = (id, image, title, price) => {
    dispatch({
      type: ADD_TO_BASKET,
      items: {
        id,
        image,
        title,
        price
      }
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      if (selectedCategory) {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${selectedCategory}`);
        setData(response.data);
      } else {
        setData(products?.data || []);
      }
    };

    fetchData();
  }, [selectedCategory, products]);

 

  const AddWishList = (e,id, image, title, price) => {
    e.currentTarget.classList.add('red')
    dispatch({
      type: ADD_WISHLIST,
      item: {
        id,
        image,
        title,
        price
      }
    })
  }

  return (
    <>
      <PopUp handleClose={handleClose} show={showModal} SelectedProductId={SelectedProductId} />
      <Container>
        <Row className='mt-5'>
          {data?.length > 0 && (
            <>
              {data.map((ele, index) => (
                <Col key={ele.id} xs="12" sm="6" lg="3" xl="3">
                  <div className='inf_product mt-4' data-aos="zoom-in-up">
                    <p>{t(`title${index + 1}`)}</p>
                    <p>{ele.price}$</p>
                    <div className='product_rating'>
                      {Array(Math.trunc(ele.rating.rate)).fill().map((_, i) => (
                        <span key={i} style={{ display: 'inline-block', fontSize: '24px', color: '#f0e80f', background: 'transparent' }}>★</span>
                      ))}
                    </div>

                    <img onClick={() => handleShow(ele.id)} src={ele.image} alt="" />

                    <div className='overlay'>
                      <OverlayTrigger
                        placement="left"
                        delay={{ show: 50, hide: 50 }}
                        overlay={renderTooltip1}
                      >
                        <i onClick={(e) => AddWishList(e,ele.id, ele.image, ele.title, ele.price)} class="fa-solid fa-heart heart"></i>
                      </OverlayTrigger>

                      <OverlayTrigger
                        placement="left"
                        delay={{ show: 50, hide: 50 }}
                        overlay={renderTooltip2}
                      >
                        <i class="fa-solid fa-minimize minimize"></i>
                      </OverlayTrigger>

                      <OverlayTrigger
                        placement="left"
                        delay={{ show: 50, hide: 50 }}
                        overlay={renderTooltip3}
                      >
                        <i class="fa-solid fa-magnifying-glass glass"></i>
                      </OverlayTrigger>
                    </div>
                    <div><button onClick={() => AddToBasket(ele.id, ele.image, ele.title, ele.price)} className='btns'>Add to Basket</button></div>
                  </div>
                </Col>
              ))}
            </>
          )}
        </Row>
      </Container>
    </>
  );
}
export default Card


