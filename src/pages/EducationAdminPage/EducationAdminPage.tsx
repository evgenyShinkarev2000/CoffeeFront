import { Box, Container, Tab, Tabs } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useTabsAdapter } from "src/hooks/TabsAdapter";
import { AddTextLectureAdminPage } from "./AddTextLectureAdminPage";
import { AddVideoLectureAdminPage } from "./AddVideoLectureAdminPage";
import { TextLectureAdminPage } from "./TextLectureAdminPage";
import { VideoLectureAdminPage } from "./VideoLectureAdminPage";

enum PageName {
  VideoLecture = "VideoLecture",
  AddVideoLecture = "AddVideoLecture",
  TextLecture = "TextLecture",
  AddTextLecture = "AddTextLecture",
}

export function EducationAdminPage() {
  const [activePage, setActivePage] = useTabsAdapter(PageName);

  return <div style={{ display: "grid", gridAutoRows: "min-content auto" }}>
    <Box sx={{ borderBottom: 1, borderColor: "divider", height: "min-content" }}>
      <Container>
        <Tabs value={activePage} onChange={setActivePage}>
          <Tab value={PageName.VideoLecture} label="Видео" />
          <Tab value={PageName.AddVideoLecture} label="Добавить видео" />
          <Tab value={PageName.TextLecture} label="Конспекты" />
          <Tab value={PageName.AddTextLecture} label="Добавить конспект" />
        </Tabs>
      </Container>
    </Box>

    <Routes>
      <Route path={PageName.VideoLecture} Component={VideoLectureAdminPage} />
      <Route path={PageName.AddVideoLecture} Component={AddVideoLectureAdminPage} />
      <Route path={PageName.TextLecture} Component={TextLectureAdminPage} />
      <Route path={PageName.AddTextLecture} Component={AddTextLectureAdminPage} />
      <Route path="*" element={<Navigate to={PageName.VideoLecture} />} />
    </Routes>
  </div>
}