import { Box, Container, Tab, Tabs } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useTabsAdapter } from "src/hooks/TabsAdapter";
import { EducationVideoLecturePage } from "./EducationVideoLecturePage";
import { EducationTextLecturePage } from "./EducationTextLecturePage";

enum PageName {
  VideoLecture = "VideoLecture",
  TextLecture = "TextLecture",
}

export function EducationPage() {
  const [activePage, setActivePage] = useTabsAdapter(PageName);

  return <div style={{ display: "grid", gridAutoRows: "min-content auto" }}>
    <Box sx={{ borderBottom: 1, borderColor: "divider", height: "min-content" }}>
      <Container>
        <Tabs value={activePage} onChange={setActivePage}>
          <Tab value={PageName.VideoLecture} label="Видео" />
          <Tab value={PageName.TextLecture} label="Конспекты" />
        </Tabs>
      </Container>
    </Box>

    <Routes>
      <Route path={PageName.VideoLecture} Component={EducationVideoLecturePage} />
      <Route path={PageName.TextLecture} Component={EducationTextLecturePage} />
      <Route path="*" element={<Navigate to={PageName.VideoLecture} />} />
    </Routes>
  </div>
}