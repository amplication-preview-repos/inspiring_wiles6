import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CardTitle } from "../card/CardTitle";

export const WordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="word" source="word" />
        <TextInput label="definition" multiline source="definition" />
        <ReferenceArrayInput
          source="cards"
          reference="Card"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CardTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
