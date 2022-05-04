import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  FormControl,
  Row
} from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { login, registration } from "../http/userAPI";
import { lOGIN_ROUTE, REGISTRATION_ROUTE } from "../utilts/consts";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === lOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    if (isLogin) {
      const response = await login(email, password);

    } else {
      const response = await registration(email, password);
      console.log(response);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 680 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <FormControl
            className="mt-3"
            placeholder="Введите ваш email..."
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl
            className="mt-3"
            placeholder="Введите ваш парол..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 ">
            {isLogin ? (
              <div>
                Нет аккаунта ?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Зарегитрируйте!</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунта ? <NavLink to={lOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            )}
            <Button variant={"outline-success"} onClick={() => click()}>
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
