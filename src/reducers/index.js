import { REMOVE_ITEM, BUY_ITEM } from "../actions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
    { id: 5, name: "Flame Sticker Pack", price: 1250 },
    { id: 6, name: "Smelly Green Tree Air Freshener", price: 650 },
    { id: 7, name: "5-Disc CD Changer", price: 10 }
  ]
};

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_ITEM:
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car,
          features: state.car.features.filter(feature => {
            if (feature.id !== action.payload.id) {
              return feature;
            }
          })
        }
      };
    case BUY_ITEM:
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload.price,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        }
      };
    default:
      return state;
  }
};
