import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const T1=()=>{
  return(
    <>
    <center>
     <h1>BOOTSTRAP PRACTICE -1</h1>
    <Container>
      <Row>
        <Col  className="bg-primary  border-dark pt-20">1 of 2</Col>
        <Col className="bg-success  border-dark pt-20">2 of 2</Col>
      </Row>
      <Row>
        <Col className="bg-success  border-dark pt-30">1 of 3</Col>
        <Col className="bg-warning  border-dark pt-30">2 of 3</Col>
        <Col className="bg-danger  border-dark pt-30">3 of 3</Col>
      </Row>

      <Row>
        <Col className="bg-danger  border-dark ">1</Col>
        <Col className="bg-warning  border-dark">2</Col>
        <Col className="bg-success  border-dark">3</Col>
        <Col className="bg-lite  border-dark"> 4</Col>
      </Row>

      <Row>
      <Col md={6} className="bg-success  border-dark p-20">1</Col>
      <Col md={2} className="bg-warning  border-dark p-20">2</Col>
      <Col md={2} className="bg-danger  border-dark p-20">3</Col>
      <Col md={1} className="bg-warning  border-dark p-20">4</Col>
      <Col md={1} className="bg-success  border-dark p-20">5</Col>
     
      </Row>
    </Container>
    </center>

    <center>
      <h1>BOOTSTRAP PRACTICE -2</h1>
      <Container>
         <Row>
          <Col className='bg-success' >1</Col>
          <Col className='bg-success'>2</Col>
          <Col className='bg-success'>3</Col>
         </Row>


      <Row>
        <Col  className="bg-primary  border-dark pt-20">1 of 2</Col>
        <Col className="bg-success  border-dark pt-20">2 of 2</Col>
      </Row>

      </Container>
    </center>


    </>
  )
}
export default T1;