import { Typography } from "@mui/material";
import { useCurrentUser } from "src/hooks/CurrentUser";

export function CurrentUser(){
  const {currentUser} = useCurrentUser();
  return currentUser && <Typography>{`${currentUser.surname} ${currentUser.name[0]}. ${currentUser.patronymic[0]}.`}</Typography>
  
}