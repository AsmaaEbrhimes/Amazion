
import { Card } from 'react-bootstrap';
import {useAuth} from "../../Context/Glopalcontext"
import {REMOVE_FROM_WISHLIST}from "../../Types/types"
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./wishlist.css"
const Wishlist = ({ show, handleClose }) => {
  const {favourite , dispatch}=useAuth()
  const RemoveItemFromWishlist=(id)=>{
dispatch({
  type:REMOVE_FROM_WISHLIST,
  id
})
  }
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {favourite?.length > 0 ?(
          favourite.map((ele)=>(
            <div key={ele.id} className='header_canvs d-flex justify-content-center justify-content-around'>
            <Card.Text>
              <span onClick={()=>RemoveItemFromWishlist(ele.id)} className='delete_wishlist'>x</span>
              <img className='canvs_img' src={ele.image} alt="Description" />
            </Card.Text>

            <Card.Title>
              <p className='wishlist_title'>{ele.title}</p>
              <p >size:Small</p>
            </Card.Title>
            <Card.Title>
              <p className='salary_wishlist'>{ele.price}</p>
            </Card.Title>
          </div>
          ))
          ) : (
            <p>NO PRODUCTS FROM WISHLIST</p>
          )}
         
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Wishlist;