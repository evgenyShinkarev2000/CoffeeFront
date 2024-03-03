import { Button, Card, CardContent, FormControlLabel, Stack, Switch, ToggleButton, Typography } from "@mui/material"
import { VideoLectureWithIsWatched } from "src/apollo/__generated__/graphql"
import { DeepPartial } from "src/helpers/DeepPartial";

export type VideoLectureShortCardModel = DeepPartial<VideoLectureWithIsWatched>;

type VideoLectureShortCardProps = {
  model: VideoLectureShortCardModel,
  onSetWatched: () => any,
  onOpen: () => any,
}

export function VideoLectureShortCard(props: VideoLectureShortCardProps) {
  return <Card>
    <CardContent>
      <Stack gap={1}>
        <Typography align="center">{props.model.name}</Typography>
        <img src={`http://i3.ytimg.com/vi/${props.model.source}/hqdefault.jpg`} onClick={props.onOpen} width={340} height={250} />
        <Stack direction="row" justifyContent="flex-end">
          <FormControlLabel
            label="просмотрено"
            labelPlacement="start"
            control={<Switch value={props.model.isWatched!} onChange={props.onSetWatched} />} />
        </Stack>
      </Stack>
    </CardContent>
  </Card>
}