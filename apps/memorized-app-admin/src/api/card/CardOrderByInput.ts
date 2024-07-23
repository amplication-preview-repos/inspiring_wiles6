import { SortOrder } from "../../util/SortOrder";

export type CardOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  prompt?: SortOrder;
  blank?: SortOrder;
  wordId?: SortOrder;
};
