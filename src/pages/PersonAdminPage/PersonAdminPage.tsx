import { Box, Container, Tab, Tabs } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useTabsAdapter } from "src/hooks/TabsAdapter";
import { AddPersonOwnAdminPage } from "./AddPersonOwnAdminPage";
import { PersonOwnAdminPage } from "./PersonOwnAdminPage";

enum PageName {
  People = "People",
  AddPerson = "AddPerson",
}

export function PersonAdminPage() {
  const [activePage, setActivePage] = useTabsAdapter(PageName);


  return <div style={{ display: "grid", gridAutoRows: "min-content auto" }}>
    <Box sx={{ borderBottom: 1, borderColor: "divider", height: "min-content" }}>
      <Container>
        <Tabs value={activePage} onChange={setActivePage}>
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