import { Button, Card, CardContent, Stack, TextField, Typography } from "@mui/material";
import { useCallback } from "react";
import { DeepPartial, useForm } from "react-hook-form";
import { Person } from "src/apollo/__generated__/graphql";

export type PersonFormAdminModel = DeepPartial<Person>;

type PersonFormAdminProps = {
  model: PersonFormAdminModel,
  onSubmit: (model: PersonFormAdminModel) => any,
  title: string,
  onRemove?: (model: PersonFormAdminModel) => any,
  onCancel?: (model: PersonFormAdminModel) => any,
}

export function PersonFormAdmin(props: PersonFormAdminProps) {
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
        <TextField {...register("surname", { required: true })}
          label="фамилия"
          size="small"
          required
          helperText={formState.errors.name?.message}
          error={formState.errors.name != null} />
        <TextField {...register("patronymic", { required: true })}
          label="отчество"
          size="small"
          required
          helperText={formState.errors.name?.message}
          error={formState.errors.name != null} />
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

