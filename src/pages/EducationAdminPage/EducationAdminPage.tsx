import { Box, Container, Tab, Tabs } from "@mui/material";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { VideoLectureAdminPage } from "./VideoLectureAdminPage";
import { AddVideoLectureAdminPage } from "./AddVideoLectureAdminPage";
import { useTabsAdapter } from "src/hooks/TabsAdapter";
import { TextLectureAdminPage } from "./TextLectureAdminPage";
import { AddTextLectureAdminPage } from "./AddTextLectureAdminPage";

enum PageName {
  VideoLecture = "VideoLecture",
  AddVideoLecture = "AddVideoLecture",
  TextLecture = "TextLecture",
  AddTextLecture = "AddTextLecture",
}

export function EducationAdminPage() {
  const navigate = useNavigate();
  const activePage = useTabsAdapter(PageName);
  function handleTabClick(event: React.SyntheticEvent, route: string) {
    navigate(route);
  }
  return <div style={{ display: "grid", gridAutoRows: "min-content auto" }}>
    <Box sx={{ borderBottom: 1, borderColor: "divider", height: "min-content" }}>
      <Container>
        <Tabs value={activePage} onChange={handleTabClick}>
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