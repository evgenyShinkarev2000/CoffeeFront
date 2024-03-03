import { useQuery } from "@apollo/client";
import { Autocomplete, Button, Card, CardContent, Container, Stack, TextField, Typography } from "@mui/material";
import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { Queries } from "src/apollo";
import { Person } from "src/apollo/__generated__/graphql";
import { CurrentUser, useCurrentUser } from "src/hooks/CurrentUser";

type DevProfileFormModel = {
  person: Omit<CurrentUser, "role"> | null,
  role: string,
}

export function ProfilePage() {
  const { data } = useQuery(Queries.GET_PEOPLE_AND_KNOWN_ROLES, { fetchPolicy: "cache-and-network" });
  const { currentUser, setCurrentUser } = useCurrentUser();
  const { getValues, control, trigger} = useForm({
    defaultValues: {
      person: currentUser == null ? null : {
        id: currentUser.id,
        name: currentUser.name,
        surname: currentUser.surname,
        patronymic: currentUser.patronymic,
      },
      role: currentUser == null ? null : currentUser.role,
    } as DevProfileFormModel,
  });

  const handleSubmitClick = useCallback(() => {
    trigger().then(isValid => {
      if (isValid) {
        const profile = getValues();
        setCurrentUser({
          id: profile.person!.id,
          name: profile.person!.name,
          surname: profile.person!.surname,
          patronymic: profile.person!.patronymic,
          role: profile.role,
        });
      }
    });
  }, [trigger, getValues]);

  return <Container style={{ display: "flex", overflow: "auto", justifyContent: "center", alignItems: "center" }}>
    <Card sx={{ width: "600px", overflowY: "auto", scrollbarWidth: "none" }}>
      <CardContent>
        <Typography sx={{ mb: 2 }} variant="h6" noWrap textAlign="center">dev only</Typography>
        <Stack gap={1}>
          <Controller
            name="person"
            control={control}
            rules={{ required: true }}
            render={(controllerParams) =>
              <Autocomplete
                value={controllerParams.field.value as Person ?? null}
                onChange={(_event, value) => controllerParams.field.onChange(value)}
                options={data?.people ?? []}
                getOptionLabel={p => `${p?.id} ${p?.surname} ${p?.name} ${p?.patronymic}`}
                isOptionEqualToValue={(option, value) => option?.id == value?.id}
                renderInput={(params) =>
                  <TextField
                    {...params}
                    label="Person"
                    size="small"
                    required
                    helperText={controllerParams.fieldState.error?.message}
                    error={controllerParams.fieldState.error != null}
                  />}
              />}
          />
          <Controller
            name="role"
            control={control}
            rules={{ required: true }}
            render={(controllerParams) =>
              <Autocomplete
                value={controllerParams.field.value as string ?? null}
                onChange={(_event, value) => controllerParams.field.onChange(value)}
                options={data?.knownRoles ?? []}
                disableClearable
                renderInput={(params) =>
                  <TextField
                    {...params}
                    label="Role"
                    size="small"
                    required
                    helperText={controllerParams.fieldState.error?.message}
                    error={controllerParams.fieldState.error != null}
                  />}
              />}
          />

          <Button onClick={handleSubmitClick} fullWidth variant="outlined">
            set
          </Button>
        </Stack>
      </CardContent>
    </Card>
  </Container>
}