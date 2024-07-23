import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WordTitle } from "../word/WordTitle";

export const CardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="prompt" multiline source="prompt" />
        <TextInput label="blank" source="blank" />
        <ReferenceInput source="word.id" reference="Word" label="word">
          <SelectInput optionText={WordTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
