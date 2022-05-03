import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
  const [brandVisible, setBrandVisibli] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
      <Button variant={"outline-dark"} className="mt-4 p-2">
        Добавить тип
      </Button>
      <Button variant={"outline-dark"} className="mt-4 p-2">
        Добавить бренд
      </Button>
      <Button variant={"outline-dark"} className="mt-4 p-2">
        Добавить устройство
      </Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisibli(false)} />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)ff} />
    </Container>
  );
};

export default Admin;
