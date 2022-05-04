import React, { useContext, useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  ModalTitle,
  Form,
  FormControl,
  Dropdown,
  Row,
  Col
} from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { Context } from "../..";

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <ModalHeader closeButton>
        <ModalTitle id="contained-modal-title-vcenter">
          Добавить устройство
        </ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Form>
          <Dropdown className="mt-3">
            <DropdownToggle>Выберите тип</DropdownToggle>
            <DropdownMenu>
              {device.types.map((type) => (
                <DropdownItem key={type.id}>{type.name}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Dropdown className="mt-3">
            <DropdownToggle>Выберите бренд</DropdownToggle>
            <DropdownMenu>
              {device.brands.map((brand) => (
                <DropdownItem key={brand.id}>{brand.name}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <FormControl
            className="mt-3"
            placeholder="Введите название устройтво"
            type=""
          />
          <FormControl
            className="mt-3"
            placeholder="Введите стоимост устройтво"
            type="number"
          />
          <FormControl className="mt-3" type="file" />
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Добавить новую свойство
          </Button>
          {info.map((i) => (
            <Row className="mt-3" key={i.number}>
              <Col md={4}>
                <FormControl placeholder="Введите название свойства" />
              </Col>
              <Col md={4}>
                <FormControl placeholder="Введите описание свойства " />
              </Col>
              <Col md={4}>
                <Button
                  onClick={() => removeInfo(i.number)}
                  variant="outline-danger"
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Добавить
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateDevice;
