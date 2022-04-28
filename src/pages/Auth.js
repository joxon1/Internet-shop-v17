import React from "react";
import {
  Button,
  Card,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { REGISTRATION_ROUTE } from "../utilts/consts";

const Auth = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 680 }} className="p-5">
        <h2 className="m-auto">Авторизация</h2>
        <Form className="d-flex flex-column">
          <FormControl className="mt-3" placeholder="Введите ваш email..." />
          <FormControl className="mt-3" placeholder="Введите ваш парол..." />
          <Row>
            <div>
              Нет аккаунта ?{" "}
              <NavLink to={REGISTRATION_ROUTE}>Зарегитрируйте</NavLink>
            </div>
            <Button className="mt-3 align-self-end" variant={"outline-success"}>
              Войти
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
