import { Button, Card, CardContent, Stack, TextField, Typography } from "@mui/material";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { VideoLecture } from "src/apollo/__generated__/graphql";
import { DeepPartial } from "src/helpers/DeepPartial";

export type VideoLectureFormModel = DeepPartial<VideoLecture>;

type VideoLectureFormAdminProps = {
	model: VideoLectureFormModel,
	onSubmit: (model: VideoLectureFormModel) => any,
	title: string,
	onRemove?: (model: VideoLectureFormModel) => any,
	onCancel?: (model: VideoLectureFormModel) => any,
}

export function VideoLectureFormAdmin(props: VideoLectureFormAdminProps) {
	const { register, formState, getValues, watch, trigger } = useForm({ defaultValues: props.model });

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

	return <Card sx={{ width: "min-content", overflowY: "auto", scrollbarWidth: "none" }}>
		<CardContent>
			<Typography sx={{ mb: 2 }} variant="h6" noWrap textAlign="center">{props.title}</Typography>
			<Stack gap={1}>
				<TextField {...register("name", { required: true })}
					label="имя"
					size="small"
					required
					helperText={formState.errors.name?.message}
					error={formState.errors.name != null} />
				<TextField {...register("source", { required: true })}
					label="источник"
					size="small"
					required
					helperText={formState.errors.source?.message}
					error={formState.errors.source != null} />
				<iframe width="560" height="315" src={"https://www.youtube.com/embed/" + watch("source")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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