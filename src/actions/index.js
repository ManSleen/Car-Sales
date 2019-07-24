export const REMOVE_ITEM = "REMOVE_ITEM";
export const BUY_ITEM = "BUY_ITEM";

export const removeFeature = id => {
  //   console.log(item);
  return {
    type: REMOVE_ITEM,
    payload: id
  };
};

export const buyItem = item => {
  console.log(item);
  return {
    type: BUY_ITEM,
    payload: item
  };
};
