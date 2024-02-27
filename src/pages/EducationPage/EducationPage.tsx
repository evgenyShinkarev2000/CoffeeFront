import { Box, Container, Tab, Tabs } from "@mui/material";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useTabsAdapter } from "src/hooks/TabsAdapter";
import { EducationVideoLecturePage } from "./EducationVideoLecturePage";

enum PageName {
  VideoLecture = "VideoLecture",
}

export function EducationPage() {
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
        </Tabs>
      </Container>
    </Box>

    <Routes>
      <Route path={PageName.VideoLecture} Component={EducationVideoLecturePage} />
      <Route path="*" element={<Navigate to={PageName.VideoLecture} />} />
    </Routes>
  </div>
}