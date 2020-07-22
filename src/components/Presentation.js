import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Image, Card, Row, Col } from 'react-bootstrap';
import getPresentation from '../stores/presentation/actions/getPresentation'

function Presentation() {
  const dispatch = useDispatch()
  const listPresentation = useSelector(state => state.presentation)

  useEffect(() => {
    const fetchData = async () => dispatch(await getPresentation())

    fetchData()
  }, [dispatch]);

  return (
    <Card>
      <Card.Body>
        <Row>
          {
            listPresentation.length === 0
              ? "Loading..."
              : listPresentation.map((it, index) => (
                <Col key={index}>
                  <Row className="justify-content-xl-center">
                    <Image src={it.imageUrl} width="56" height="56" roundedCircle />
                  </Row>

                  <Row className="justify-content-xl-center">
                    <h6><small>{it.name}</small></h6>
                  </Row>
                </Col>
              ))
          }
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Presentation;