import { Button, Chip, Dialog } from "@mui/material";
import React, { useState } from "react";

type TagWithDialogProps = {
  label: string,
  render: () => React.ReactElement,
}

export function TagWithDialog(props: TagWithDialogProps) {
  const [isDialogShow, setIsDialogShow] = useState(false);

  return <> <Button variant="text" onClick={() => setIsDialogShow(true)} sx={{ margin: 0, padding: 0 }}>
    <Chip label={props.label} />
  </Button>
    <Dialog open={isDialogShow} onClose={() => setIsDialogShow(false)} fullWidth>
      {props.render()}
    </Dialog>
  </>
}