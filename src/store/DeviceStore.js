import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Iphone" },
      { id: 2, name: "Samsung" },
      { id: 3, name: "Xiomi" },
      { id: 4, name: "Vertu" },
      { id: 5, name: "Nokia" },
    ];
    this._brands = [
      { id: 1, name: "Apple" },
      { id: 2, name: "Samsung" },
      { id: 3, name: "Xiomi" },
      { id: 4, name: "Vertu" },
      { id: 5, name: "Nokia" },
      
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
      this._selectedType = {},
      this._selectedBrand = {},
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
  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
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
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
