import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CardListRelationFilter } from "../card/CardListRelationFilter";

export type WordWhereInput = {
  id?: StringFilter;
  word?: StringNullableFilter;
  definition?: StringNullableFilter;
  cards?: CardListRelationFilter;
};
