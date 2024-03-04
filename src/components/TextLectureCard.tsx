import { Accordion, AccordionDetails, AccordionSummary, FormControlLabel, Icon, Stack, Switch, TextField, TextareaAutosize, Typography } from "@mui/material";
import { TextLectureWithIsRead } from "src/apollo/__generated__/graphql";
import { DeepPartial } from "src/helpers/DeepPartial";
import { useCurrentUser } from "src/hooks/CurrentUser";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type TextLectureCardProps = {
  model: DeepPartial<TextLectureWithIsRead>,
  onSetRead: () => any,
}

export function TextLectureCard(props: TextLectureCardProps) {
  const currentUser = useCurrentUser();

  return <Accordion sx={{ flexGrow: 1 }}>
    <AccordionSummary expandIcon={<Icon><ExpandMoreIcon /></Icon>}>
      <Typography variant="h6">
        {props.model.name}
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <TextField value={props.model.content} multiline rows={10} fullWidth/>
      <Stack direction="row" justifyContent="space-between" alignItems="center" flexGrow={1}>
        {
          currentUser.isAdmin && <Typography>id: {props.model.id}</Typography>
        }
        <FormControlLabel
          label="просмотрено"
          labelPlacement="start"
          control={<Switch checked={props.model.isRead!} onChange={props.onSetRead} />} />
      </Stack>
    </AccordionDetails>
  </Accordion>

}