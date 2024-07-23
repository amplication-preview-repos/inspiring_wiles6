import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WordWhereUniqueInput } from "../word/WordWhereUniqueInput";

export type CardWhereInput = {
  id?: StringFilter;
  prompt?: StringNullableFilter;
  blank?: StringNullableFilter;
  word?: WordWhereUniqueInput;
};
