import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { SHOP_ROUTE } from "../utilts/consts";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link style={{ color: "white" }} to={SHOP_ROUTE}>-Telshop- </Link>
        {user.isAuth ? <Nav className="d-flex justify-content-evenly" style={{ color: "white" }} >
          <Button variant={"outline-light"} className="me-2">Админ панель</Button>
          <Button variant={"outline-light"} >Выйти</Button>
        </Nav>
        : <Nav className="d-flex justify-content-evenly" style={{ color: "white" }} >
        <Button variant={"outline-light"}onClick={()=>user.setIsAuth(true)}>Авторизация</Button>
      </Nav>
      }
      </Container>
    </Navbar>
  );
});

export default NavBar;
