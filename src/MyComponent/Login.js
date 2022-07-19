import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import log from "./img/log.svg";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export default function  Login() {
  return (
    <div > 
    <Container fluid="md" className="fw-bolder">
      <Row>
        <Col>
        <Card.Img src={log} width="500" heigth="500" alt="this is nont" className="my-5"/>
        </Col>
        <Col>
        <Form className="my-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Here!!" />
        <Form.Text className="text-muted">
          We'll never share your UserName with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="*******************" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Forget Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


        </Col>
      </Row>
    </Container>
    </div>

  )
}
