import React from 'react';
import './Banner.css';
import swal from '@sweetalert/with-react';
import { Row, Col, Accordion, Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
   const after = () =>{
    swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "Aww yiss!",
      });
    }
    return (
        <>
        <Row className="custom-banner">
            <Col sm={5}>
            </Col>
            <Col sm={7} className=" banner-container d-flex align-items-center">
                <div>
                    <h4 className="banner-h4">Welcome to Medic House</h4>
                    <h1 className="banner-h1 my-3"><span className="custom-middle">Trust the specialist, </span> <br /> We are Medic House </h1>
                    <h4 className="mb-4"> You trust us and we take care of your body, <br />
                    Healthy body will bring you much more happiness </h4>
                    <button  className=" custom-btnn"> Documents</button>
                    {/* <Button className="custom-btn"variant="outline-success">Documents</Button> */}
                </div>
               
               
            </Col>
        </Row>
        <Row>
        <Col sm={6} >
                <img src="https://image.freepik.com/free-vector/medical-service-logos-vector-set_53876-62796.jpg" className="img-fluid" alt="" />

            </Col>
            <Col sm={6} className="d-flex align-items-center">
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Medical Myths: All about psoriasis</Accordion.Header>
                <Accordion.Body>Psoriasis is a relatively common immune-mediated skin condition. It causes crusty, flaky patches to appear on the skin, commonly on the knees, scalp, elbows, and back. These patches present as red on light skin and may appear violet or purple on dark skin.

                Globally, the exact prevalence of psoriasis is difficult to ascertain. However, a 2020 studyTrusted Source found that the prevalence varies from 0.14% of the population in East Asia to 1.99% in Australasia.

                Other studies have identified much higher rates, with one study measuring a prevalence rate of 11.4%Trusted Source in Norway.

                Aside from the physical aspects of psoriasis, the condition can affect people’s well-beingTrusted Source and quality of life.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Medical myths: All about skin</Accordion.Header>
                <Accordion.Body>
                Our skin plays multiple roles. For instance, it helps keep our insides inside and blocks the path of pathogens. It also helps us stay warm when it is cold and cool down when it is hot.

                Importantly, the skin provides a home for sensory neurons, which let us sense the world around us.

                Despite the wide range of physiological functions this organ plays, it is arguably most famous for being the largest organ of the body, although some scientists disagree. The skin is also our most visible organ.

                And because it is so visible, skin has also become the target organ for a wide range of products, many of which promise clearer, healthier, more youthful skin.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Medical Myths: All about hepatitis</Accordion.Header>
                <Accordion.Body>
                Hepatitis refers to inflammation of the liver. Most commonly, it develops due to a viral infection or alcohol consumption, but it can also result from toxins, drugs, and certain conditions, including autoimmune conditions.

                There are five main typesTrusted Source of hepatitis: A, B, C, D, and E. Hepatitis B and C are the most common.

                In this article, we address and dispel 11 myths that are commonly associated with hepatitis. To help us unravel some of these misunderstandings, we enlisted the help of two experts.

                One is Shelley Facente, Ph.D., who is a research associate in the Division of Epidemiology and Biostatistics at the University of California, Berkeley. The other is Dr. Lauren Nephew, who is a gastroenterologist at Indiana University Health in Indianapolis.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            </Col>
            
        </Row>
        </>
    );
};

export default Banner;