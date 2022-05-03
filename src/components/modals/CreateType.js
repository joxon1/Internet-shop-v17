import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  ModalTitle,
  Form,
  FormControl,
} from "react-bootstrap";

const CreateType = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <ModalHeader closeButton>
        <ModalTitle id="contained-modal-title-vcenter">Добавить тип</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormControl placeholder="Введите название типа" />
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

export default CreateType;
