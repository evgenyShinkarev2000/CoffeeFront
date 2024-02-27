import { Button, Card, CardContent, Stack, TextField, Typography } from "@mui/material";
import { useCallback } from "react";
import { DeepPartial, useForm } from "react-hook-form";
import { TextLecture } from "src/apollo/__generated__/graphql";

export type TextLectureFormModel = DeepPartial<TextLecture>;

type TextLectureFormAdminProps = {
  model: TextLectureFormModel,
  onSubmit: (model: TextLectureFormModel) => any,
  title: string,
  onRemove?: (model: TextLectureFormModel) => any,
  onCancel?: (model: TextLectureFormModel) => any,
}

export function TextLectureFormAdmin(props: TextLectureFormAdminProps) {
  const { register, formState, getValues, trigger } = useForm({ defaultValues: props.model });

	const handleRemoveClick = useCallback(() => {
		if (!props.onRemove) {
			return;
		}
		const model = getValues();
		props.onRemove(model);
	}, [props.onRemove, getValues]);

	const handleSubmitClick = useCallback(() => {
		trigger().then(isValid => {
			if (isValid) {
				const model = getValues();
				props.onSubmit(model);
			}
		});
	}, [props.onSubmit, getValues]);

	const handleCancelClick = useCallback(() => {
		if (!props.onCancel) {
			return;
		}
		const model = getValues();
		props.onCancel(model);
	}, [props.onCancel, getValues]);
  
  return <Card sx={{ width: "600px", overflowY: "auto", scrollbarWidth: "none" }}>
  <CardContent>
    <Typography sx={{ mb: 2 }} variant="h6" noWrap textAlign="center">{props.title}</Typography>
    <Stack gap={1}>
      <TextField {...register("name", { required: true })}
        label="имя"
        size="small"
        required
        helperText={formState.errors.name?.message}
        error={formState.errors.name != null} />
      <TextField {...register("content", { required: true })}
        label="содержание"
        size="small"
        required
        multiline
        rows={15}
        helperText={formState.errors.content?.message}
        error={formState.errors.content != null} />
      <Stack gap={1} direction={"row"}>
        <Button fullWidth color="primary" variant="contained" onClick={handleSubmitClick}>Сохранить</Button>
        {
          props.onCancel && <Button fullWidth color="info" variant="outlined" onClick={handleCancelClick}>Отмена</Button>
        }
        {
          props.onRemove && <Button fullWidth color="error" variant="contained" onClick={handleRemoveClick}>Удалить</Button>
        }
      </Stack>
    </Stack>
  </CardContent>
</Card>
}

