import { Button, Card, CardContent, Dialog, FormControlLabel, Stack, Switch, Typography } from "@mui/material";
import { useState } from "react";
import { VideoLectureWithIsWatched } from "src/apollo/__generated__/graphql";
import { DeepPartial } from "src/helpers/DeepPartial";
import { VideoLectureFullCard } from "./VideoLectureFullCard";

export type VideoLectureShortCardModel = DeepPartial<VideoLectureWithIsWatched>;

type VideoLectureShortCardProps = {
  model: VideoLectureShortCardModel,
  onSetWatched: () => any
}

export function VideoLectureShortCard(props: VideoLectureShortCardProps) {
  const [isDialogShow, setIsDialogShow] = useState(false);

  return <Card>
    <CardContent>
      <Stack gap={1}>
        <Typography align="center">{props.model.name}</Typography>
        <Button sx={{margin: 0, padding: 0}} variant="text" onClick={() => setIsDialogShow(true)}>
          <img src={`http://i3.ytimg.com/vi/${props.model.source}/hqdefault.jpg`} width={340} height={250} />
        </Button>
        <Stack direction="row" justifyContent="flex-end">
          <FormControlLabel
            label="просмотрено"
            labelPlacement="start"
            control={<Switch checked={props.model.isWatched!} onChange={props.onSetWatched} />} />
        </Stack>
      </Stack>
    </CardContent>
    <Dialog open={isDialogShow} onClose={() => setIsDialogShow(false)}>
      <VideoLectureFullCard model={props.model} onSetWatched={props.onSetWatched} />
    </Dialog>
  </Card>
}