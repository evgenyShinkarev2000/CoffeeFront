import { Card, CardContent, Stack, Typography, FormControlLabel, Switch } from "@mui/material"
import { VideoLectureWithIsWatched } from "src/apollo/__generated__/graphql"
import { DeepPartial } from "src/helpers/DeepPartial";
import { useCurrentUser } from "src/hooks/CurrentUser"

type VideoLectureFullCardProps = {
  model: DeepPartial<VideoLectureWithIsWatched>,
  onSetWatched: () => any,
}

export function VideoLectureFullCard(props: VideoLectureFullCardProps) {
  const currentUser = useCurrentUser();

  return <Card>
    <CardContent>
      <Stack gap={1}>
        <Typography align="center">{props.model.name}</Typography>
        <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + props.model.source} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          {
            currentUser.isAdmin && <Typography>id: {props.model.id}</Typography>
          }
          <FormControlLabel
            label="просмотрено"
            labelPlacement="start"
            control={<Switch checked={props.model.isWatched!} onChange={props.onSetWatched} />} />
        </Stack>
      </Stack>
    </CardContent>
  </Card>
}