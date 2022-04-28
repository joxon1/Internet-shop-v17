import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Смартфоны" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
    ];
    this._device = [
      {
        id: 1,
        name: "Iphone 13 pro Max",
        price: 25000,
        rating: 5,
        img: "https://texnomart.uz/frontend/web/thumb.php?src=/frontend/web/images/gallery/product/96494/27081/detail.jpg&w=560&h=850&a=t&zc=3",
      },
      {
        id: 2,
        name: "Iphone 13 pro Max",
        price: 25000,
        rating: 5,
        img: "https://texnomart.uz/frontend/web/thumb.php?src=/frontend/web/images/gallery/product/96494/27081/detail.jpg&w=560&h=850&a=t&zc=3",
      },
      {
        id: 3,
        name: "Iphone 13 pro Max",
        price: 25000,
        rating: 5,
        img: "https://texnomart.uz/frontend/web/thumb.php?src=/frontend/web/images/gallery/product/96494/27081/detail.jpg&w=560&h=850&a=t&zc=3",
      },
      {
        id: 4,
        name: "Iphone 13 pro Max",
        price: 25000,
        rating: 5,
        img: "https://texnomart.uz/frontend/web/thumb.php?src=/frontend/web/images/gallery/product/96494/27081/detail.jpg&w=560&h=850&a=t&zc=3",
      },
    ];
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrends(brends) {
    this._brends = brends;
  }
  setDevices(devices) {
    this._device = devices;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
}
