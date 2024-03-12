
import { Container } from "react-bootstrap";
import "./Loding.css"
const Loding = () => {
    return (
        <>
            <Container>

                <div className="lodings">
                    <div className="rang1 rang"></div>
                    <div className="rang2 rang"></div>
                    <div className="rang3 rang"></div>
                    <span>Loding ...</span>
                </div>
            </Container>
        </>
    )
}



export default Loding;