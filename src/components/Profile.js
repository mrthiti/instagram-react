import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

function Presentation() {
  return (
    <React.Fragment>
      <div className="d-inline">
        <Image src="https://cdn2.thecatapi.com/images/a79.jpg" width="56" height="56" roundedCircle />
      </div>
      <div className="d-inline">
        <h6><small><strong>thiti.y</strong></small></h6>
      </div>
      {/* <Row className="mt-3 ml-2">
        <Col xl={3}>
          <Image src="https://cdn2.thecatapi.com/images/a79.jpg" width="56" height="56" roundedCircle />
        </Col>
        <Col className="ml-4">
          <Row className="mt-1">
            <h6><small><strong>thiti.y</strong></small></h6>
          </Row>
          <Row>
            <h6 className="text-secondary"><small>THITI YAMSUNG</small></h6>
          </Row>
        </Col>
      </Row>

      <Row className="mt-3 ml-2">
        <Col xl={10}>
          <h6><small><strong>Suggestions For You</strong></small></h6>
        </Col>
        <Col xl={2} className="">
          <Row className="">
            <h6><small><strong>See All</strong></small></h6>
          </Row>
        </Col>
      </Row> */}
    </React.Fragment>
  );
}

export default Presentation;