import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import '../themes/classic.css';
import { BsFillEnvelopeFill, BsFillTelephoneFill, BsGlobe2 } from 'react-icons/bs'

const Resume = ({resume}, ...props) => {
    return(
        <Container fluid>
            <Row className="justify-content-center" xs={3} md={4} lg={6}>
                <Col className="text-center name">
                    {resume.basics.name}
                </Col>
            </Row>
            <Row className="justify-content-center mb-2">
                <Col className="text-center label">
                    {resume.basics.label}                
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col className="text-center" lg="auto">
                    <BsFillEnvelopeFill className="mr-1"/>
                    {resume.basics.email}
                </Col>
                <Col className="text-center" lg="auto">
                    <BsFillTelephoneFill className="mr-1"/>
                    {resume.basics.phone}
                </Col>
                <Col className="text-center" lg="auto">
                    <BsGlobe2 className="mr-1"/>
                    {resume.basics.url}
                </Col>
            </Row>
        </Container>
    );
}

export default Resume;