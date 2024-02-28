import { useMutation } from "@apollo/client";
import { Container } from "@mui/material";
import { useCallback, useState } from "react";
import { Mutations } from "src/apollo";
import { Person } from "src/apollo/__generated__/graphql";
import { PersonFormAdmin, PersonFormAdminModel } from "src/components/PersonFormAdmin";
import { useMapper } from "src/hooks/Mapper";

export function AddPersonOwnAdminPage() {
  const mapper = useMapper();
  const [add, addState] = useMutation(Mutations.ADD_PERSON);
  const [key, setKey] = useState(0);
  const handleAdd = useCallback((formModel: PersonFormAdminModel) => {
    add({
      variables: {
        addPersonInput: mapper.personToAddInput(formModel as Person),
      }
    }).then(() => setKey((prev) => prev + 1));
  }, [add]);

  return <Container style={{ display: "flex", overflow: "auto", justifyContent: "center", alignItems: "center" }}>
    <PersonFormAdmin key={key} title="Добавить сотрудника" model={{}} onSubmit={handleAdd} ></PersonFormAdmin>
  </Container>
}