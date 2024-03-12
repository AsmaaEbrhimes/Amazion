import { Container , Col, Row  } from "react-bootstrap";
import { useAuth } from "../../Context/Glopalcontext"
import img from "../images/hand-drawn-thrift-store-banner-design_23-2150052953.avif"
import { REMOVE_FROM_BASKET } from "../../Types/types"
import Swal from 'sweetalert2'


import "./Shopping.css"
import { Link } from "react-router-dom";

const Shopping = () => {
    const { basket, dispatch } = useAuth();
    const RemoveItem = (id) => {
        Swal.fire({
            title: "Are you sure Delete Product",
            showCancelButton: true
        }).then((data) => {
            if (data.isConfirmed) {
                dispatch({
                    type: REMOVE_FROM_BASKET,
                    id: id
                })
            }
        })
    }

    const getSupTotal = () => {
        const total = basket?.reduce((acc, item) => {
            return acc + item.price;
        }, 0);
        const formattedTotal = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(total);
        return {
            total,
            formattedTotal
        };
    };

    return (
        <>
            <Container>
                <div className="left">
                    <Row className="mt-5">
                        <Col xs="12" sm="8" l="8" xl="8">
                            <img className="img" src={img} alt="" />
                        </Col>
                        <Col xs="12" sm="4" l="4" xl="4">
                            <div className="check_product">
                                <p>suptotal(<span> {basket?.length} </span>items )<span className="price">{getSupTotal().formattedTotal}</span></p>
                                <input type="checkbox" />
                                <label>This order contains agift</label>
                                <button className="btn_check">procced to checkout</button>
                            </div>
                        </Col>
                    </Row>
                </div>


                
                <Row>
                    <Col sm="12">
                        <h2>welcome🖐asmaa@gmail.com</h2>
                    </Col>
                    <Link to="/creat">
                    <Col><button className="creat_product">Creat Prodict</button></Col>
                    </Link>
                </Row>

                <Row className="mt-5">
                    {basket?.length > 0 ? (
                        basket.map((ele) => (
                            <Col xs="12" sm="12" l="12" xl="12" key={ele.id}>
                                <div className="parent">
                                    <img className="shopping_img" src={ele.image} alt="" />
                                    <div>
                                        <p>{ele.title}</p>
                                        <p>{ele.price}</p>
                                        <button onClick={() => RemoveItem(ele.id)}>RemoveProduct</button>
                                    </div>
                                </div>
                            </Col>
                        ))
                    ) : (
                        <Col xs="12" sm="12" l="12" xl="12">
                            <h2>No items in the basket</h2>
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    );
};

export default Shopping;
