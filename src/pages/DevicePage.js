import React from "react";
import { Card, Col, Container, Image, Row, Button } from "react-bootstrap";
import bigStar from "../accets/star.png";
const DevicePage = () => {
  const device = {
    id: 1,
    name: "Iphone 13 pro Max",
    price: 25000,
    rating: 5,
    img: "https://texnomart.uz/frontend/web/thumb.php?src=/frontend/web/images/gallery/product/96494/27081/detail.jpg&w=560&h=850&a=t&zc=3"
  };
  const description = [
    { id: 1, title: "Оперативная память", description: "5 гб" },
    { id: 2, title: "Камера", description: "12 мп" },
    { id: 3, title: "Процессор", description: "Пентиум 3 " },
    { id: 4, title: "Кол-во ядер", description: "2" },
    { id: 5, title: "Аккумулятор", description: "4000" }
  ];

  return (
    <Container className={"mt-3"}>
      <Row key={device.id}>
        <Col md={4}>
          <Image height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fonstSize: 32,
              border: "5px solid lightgray"
            }}
          >
            <h3>{device.price}</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристика</h1>
        {description.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding:10
            }}
          >
            {info.title}:{info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
