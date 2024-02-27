import { Container, Dialog, IconButton } from "@mui/material";
import { DataGrid, GridColDef, useGridApiRef } from "@mui/x-data-grid";
import { TextLecture } from "src/apollo/__generated__/graphql";
import { nameof } from "src/helpers/nameof";
import EditIcon from "@mui/icons-material/Edit";
import { useMutation, useQuery } from "@apollo/client";
import { Mutations, Queries } from "src/apollo";
import { TextLectureFormAdmin, TextLectureFormModel } from "src/components/TextLectureFormAdmin";
import { useCallback, useEffect, useRef, useState } from "react";
import { useMapper } from "src/hooks/Mapper";

const columns: GridColDef[] = [
  {
    field: nameof<TextLecture>("id"),
    width: 80,
  },
  {
    field: nameof<TextLecture>("name"),
    headerName: "имя",
    flex: 1,
  },
  {
    field: nameof<TextLecture>("content"),
    headerName: "содержание",
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

export function TextLectureAdminPage() {
  const apiRef = useGridApiRef();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const currentModel = useRef<TextLectureFormModel>({});

  const { data } = useQuery(Queries.GET_TEXT_LECTURES, { fetchPolicy: "cache-and-network" });
  const [update, updateState] = useMutation(Mutations.UPDATE_TEXT_LECTURE);
  const [remove, removeState] = useMutation(Mutations.REMOVE_TEXT_LECTURE);

  useEffect(() => {
    //@ts-ignore
    apiRef.current.subscribeEvent("editButtonClick", (model: TextLectureFormModel) => {
      currentModel.current = model;
      setIsDialogOpen(true);
    });
  });

  const mapper = useMapper();

  const handleUpdate = useCallback((formModel: TextLectureFormModel) => {
    update({
      variables: {
        updateTextLectureInput: mapper.textLectureToUpdateInput(formModel as TextLecture),
      }
    }).then(() => setIsDialogOpen(false));
  }, [update]);

  const handleRemove = useCallback((formModel: TextLectureFormModel) => {
    remove({
      variables: {
        removeTextLectureInput: {
          id: formModel.id!
        }
      },
      update: (cache, result) => {
        cache.updateQuery({ query: Queries.GET_VIDEO_LECTURES }, (data) => ({
          ...data,
          videoLectures: data?.videoLectures?.filter(vl => vl?.id != result.data?.removeTextLecture?.id),
        }));
      }
    }).then(() => setIsDialogOpen(false));
  }, [remove]);

  const handleCancel = useCallback(() => {
    setIsDialogOpen(false);
  }, [setIsDialogOpen]);

  return <Container style={{ display: "flex", overflow: "auto" }}>
    <DataGrid columns={columns}
      rows={data?.textLectures ?? []}
      autoPageSize={true}
      apiRef={apiRef}
      rowSelection={false} />
    <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
      <TextLectureFormAdmin
        model={currentModel.current}
        onSubmit={handleUpdate}
        onRemove={handleRemove}
        onCancel={handleCancel}
        title="Изменить конспект" />
    </Dialog>
  </Container>
}