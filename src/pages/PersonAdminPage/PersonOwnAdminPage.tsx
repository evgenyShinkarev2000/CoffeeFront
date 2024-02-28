import { useMutation, useQuery } from "@apollo/client";
import { Container, Dialog, IconButton } from "@mui/material";
import { DataGrid, GridColDef, useGridApiRef } from "@mui/x-data-grid";
import { useCallback, useEffect, useRef, useState } from "react";
import { Mutations, Queries } from "src/apollo";
import { Person } from "src/apollo/__generated__/graphql";
import { PersonFormAdmin, PersonFormAdminModel } from "src/components/PersonFormAdmin";
import { nameof } from "src/helpers/nameof";
import { useMapper } from "src/hooks/Mapper";
import EditIcon from "@mui/icons-material/Edit";

const columns: GridColDef[] = [
  {
    field: nameof<Person>("id"),
    width: 80,
  },
  {
    field: nameof<Person>("name"),
    headerName: "имя",
    flex: 1,
  },
  {
    field: nameof<Person>("surname"),
    headerName: "фамилия",
    flex: 1,
  },
  {
    field: nameof<Person>("patronymic"),
    headerName: "отчество",
    flex: 1,
  },
  {
    field: "_1",
    headerName: "изменить",
    filterable: false,
    sortable: false,
    disableColumnMenu: true,
    hideable: false,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => {
      //@ts-ignore
      const clickHandler = () => params.api.publishEvent("editButtonClick", params.row);

      return <IconButton onClick={clickHandler}>
        <EditIcon />
      </IconButton>
    }
  },
];

export function PersonOwnAdminPage() {
  const apiRef = useGridApiRef();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const currentModel = useRef<any>({});

  const { data } = useQuery(Queries.GET_PEOPLE, { fetchPolicy: "cache-and-network" });
  const [update, updateState] = useMutation(Mutations.UPDATE_PERSON);
  const [remove, removeState] = useMutation(Mutations.REMOVE_PERSON);

  useEffect(() => {
    //@ts-ignore
    apiRef.current.subscribeEvent("editButtonClick", (model: PersonFormAdminModel) => {
      currentModel.current = model;
      setIsDialogOpen(true);
    });
  });

  const mapper = useMapper();

  const handleUpdate = useCallback((formModel: PersonFormAdminModel) => {
    update({
      variables: {
        updatePersonInput: mapper.personToUpdateInput(formModel as Person),
      }
    }).then(() => setIsDialogOpen(false));
  }, [update]);

  const handleRemove = useCallback((formModel: any) => {
    remove({
      variables: {
        removePersonInput: {
          id: formModel.id!
        }
      },
      update: (cache, result) => {
        cache.updateQuery({ query: Queries.GET_PEOPLE }, (data) => ({
          ...data,
          people: data?.people?.filter(vl => vl?.id != result.data?.removePerson?.id),
        }));
      }
    }).then(() => setIsDialogOpen(false));
  }, [remove]);

  const handleCancel = useCallback(() => {
    setIsDialogOpen(false);
  }, [setIsDialogOpen]);

  return <Container style={{ display: "flex", overflow: "auto" }}>
    <DataGrid
      columns={columns}
      rows={data?.people ?? []}
      autoPageSize={true}
      apiRef={apiRef}
      rowSelection={false} />
    <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
      <PersonFormAdmin
        model={currentModel.current}
        title="Изменить сотрудника"
        onSubmit={handleUpdate}
        onCancel={handleCancel}
        onRemove={handleRemove}
      />
    </Dialog>
  </Container>
}