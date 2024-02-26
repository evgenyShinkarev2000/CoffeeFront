import { useMutation, useQuery } from "@apollo/client";
import EditIcon from "@mui/icons-material/Edit";
import { Container, Dialog, IconButton } from "@mui/material";
import { DataGrid, GridColDef, useGridApiRef } from "@mui/x-data-grid";
import { useCallback, useEffect, useRef, useState } from "react";
import { Mutations, Queries } from "src/apollo";
import { VideoLecture } from "src/apollo/__generated__/graphql";
import { VideoLectureFormAdmin, VideoLectureFormModel } from "src/components/VideoLectureFormAdmin";
import { nameof } from "src/helpers/nameof";
import { useMapper } from "src/hooks/Mapper";

const columns: GridColDef[] = [
  {
    field: nameof<VideoLecture>("id"),
    width: 80,
  },
  {
    field: nameof<VideoLecture>("name"),
    headerName: "имя",
    flex: 1,
  },
  {
    field: nameof<VideoLecture>("source"),
    headerName: "источник",
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


export function VideoLectureAdminPage() {
  const { data } = useQuery(Queries.GET_VIDEO_LECTURES);
  const [update, updateState] = useMutation(Mutations.UPDATE_VIDEO_LECTURE);
  const [remove, removeState] = useMutation(Mutations.REMOVE_VIDEO_LECTURE);

  const apiRef = useGridApiRef();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const currentModel = useRef<VideoLectureFormModel>({});

  useEffect(() => {
    //@ts-ignore
    apiRef.current.subscribeEvent("editButtonClick", (model: VideoLectureFormModel) => {
      currentModel.current = model;
      setIsDialogOpen(true);
    });
  });

  const mapper = useMapper();

  const handleUpdate = useCallback((formModel: VideoLectureFormModel) => {
    update({
      variables: {
        updateVideoLectureInput: mapper.videoLectureToUpdateInput(formModel as VideoLecture),
      }
    }).then(() => setIsDialogOpen(false));
  }, [update]);

  const handleRemove = useCallback((formModel: VideoLectureFormModel) => {
    remove({
      variables: {
        removeVideoLectureInput: {
          id: formModel.id!
        }
      }
    }).then(() => setIsDialogOpen(false));
  }, [remove]);

  const handleCancel = useCallback(() => {
    setIsDialogOpen(false);
  }, [setIsDialogOpen]);

  return <Container style={{ display: "flex", overflow: "auto" }}>
    <DataGrid columns={columns}
      rows={data?.videoLectures ?? []}
      autoPageSize={true}
      apiRef={apiRef}
      rowSelection={false} />
    <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
      <VideoLectureFormAdmin
        model={currentModel.current}
        onSubmit={handleUpdate}
        onRemove={handleRemove}
        onCancel={handleCancel}
        title="Изменить видео" />
    </Dialog>
  </Container>
}