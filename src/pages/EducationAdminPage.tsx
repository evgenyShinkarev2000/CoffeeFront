import { Box, Container, Tab, Tabs } from "@mui/material";

export function EducationAdminPage() {
  return <>
    <Box sx={{ borderBottom: 1, borderColor: "divider", height: "min-content" }}>
      <Container>
        <Tabs value="VideoLecture">
          <Tab value="VideoLecture" label="Видео"/>
          <Tab value="TextLecture" label="Конспекты"/>
        </Tabs>
      </Container>
    </Box>
  </>
}