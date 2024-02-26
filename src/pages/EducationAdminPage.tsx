import { Box, Container, Tab, Tabs } from "@mui/material";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { VideoLectureAdminPage } from "./VideoLectureAdminPage";
import { AddVideoLectureAdminPage } from "./AddVideoLectureAdminPage";
import { useState } from "react";
import { getActivePageValue } from "src/helpers/getActivePageValue";

enum PageName {
  VideoLecture = "VideoLecture",
  AddVideoLecture = "AddVideoLecture",
  TextLecture = "TextLecture",
}

export function EducationAdminPage() {
  const navigate = useNavigate();
  const location = useLocation();
debugger;
  const [activePage, setActivePage] = useState(getActivePageValue(location.pathname, Object.values(PageName)));
  function handleTabClick(event: React.SyntheticEvent, route: string) {
    navigate(route);
    setActivePage(route);
  }
  debugger;
  return <div style={{ display: "grid", gridAutoRows: "min-content auto" }}>
    <Box sx={{ borderBottom: 1, borderColor: "divider", height: "min-content" }}>
      <Container>
        <Tabs value={activePage} onChange={handleTabClick}>
          <Tab value={PageName.VideoLecture} label="Видео" />
          <Tab value={PageName.AddVideoLecture} label="Добавить видео" />
          <Tab value={PageName.TextLecture} label="Конспекты" />
        </Tabs>
      </Container>
    </Box>

    <Routes>
      <Route path={PageName.VideoLecture} Component={VideoLectureAdminPage} />
      <Route path={PageName.AddVideoLecture} Component={AddVideoLectureAdminPage} />
    </Routes>
  </div>
}