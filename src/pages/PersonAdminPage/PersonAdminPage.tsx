import { Box, Container, Tab, Tabs } from "@mui/material";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useTabsAdapter } from "src/hooks/TabsAdapter";
import { PersonOwnAdminPage } from "./PersonOwnAdminPage";
import { AddPersonOwnAdminPage } from "./AddPersonOwnAdminPage";

enum PageName {
  People = "People",
  AddPerson = "AddPerson",
}

export function PersonAdminPage() {
  const navigate = useNavigate();
  const activePage = useTabsAdapter(PageName);
  function handleTabClick(event: React.SyntheticEvent, route: string) {
    navigate(route);
  }

  return <div style={{ display: "grid", gridAutoRows: "min-content auto" }}>
    <Box sx={{ borderBottom: 1, borderColor: "divider", height: "min-content" }}>
      <Container>
        <Tabs value={activePage} onChange={handleTabClick}>
          <Tab value={PageName.People} label="Сотрудники" />
          <Tab value={PageName.AddPerson} label="Добавить сотрудника" />
        </Tabs>
      </Container>
    </Box>

    <Routes>
      <Route path={PageName.People} Component={PersonOwnAdminPage} />
      <Route path={PageName.AddPerson} Component={AddPersonOwnAdminPage} />
      <Route path="*" element={<Navigate to={PageName.People} />} />
    </Routes>
  </div>
}