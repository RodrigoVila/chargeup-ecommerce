import axios from "axios";

export const postNewOrder = async (order: OrderItemType): Promise<void> => {
  await axios.post("/api/order", order);
};
