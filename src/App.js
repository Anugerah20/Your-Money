import React from 'react';
import './App.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Container>
          {/* TITLE APPS */}
          <Row className="py-5">
            <Col md={12}>
              <div className="text-center">
                <h1 className="">Your Money</h1>
                <hr className="w-50 mx-auto" />
                <h2 className="fw-bold">Rp 1.500.000,-</h2>
                <p>Sisa uang kamu tersisa 75% lagi</p>
              </div>
            </Col>
          </Row>

          {/* CARD 1 */}
          <Row>
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <i class="bi bi-wallet2"></i>
                  </Card.Title>
                  <Card.Text>
                    <p>Pemasukkan</p>
                  </Card.Text>
                  <h3>Rp 3000.000,-</h3>
                  <p>
                    <span>20</span> Transaksi
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* CARD 2 */}
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <i class="bi bi-cash"></i>
                  </Card.Title>
                  <Card.Text>
                    <p>Pengeluaran</p>
                  </Card.Text>
                  <h3>Rp 1200.000,-</h3>
                  <p>
                    <span>10</span> Transaksi
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* TRANSACTION PROCESSS */}
          <Row>
            <Col lg={8}>
              <div className="mt-4">
                <h4>Ringkasan Transaksi</h4>
              </div>
            </Col>

            <Col lg={4}>
              <div className="mt-4">
                <button>Pemasukan +</button>
                <button className="ms-2">Pengeluaran -</button>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
