import { AppBar, Container, Tab, Tabs } from "@mui/material";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { EducationAdminPage } from "./EducationAdminPage";
import { useTabsAdapter } from "src/hooks/TabsAdapter";

export enum PageName {
  EducationAdmin = "EducationAdmin",
}

export function MainPage() {
  const navigate = useNavigate();
  const activePage = useTabsAdapter(PageName);

  function handleTabClick(event: React.SyntheticEvent, route: string) {
    navigate(route);
  }

  return <>
    <div style={{ display: "grid", gridAutoRows: "min-content auto", maxHeight: "100vh", height: "100vh" }}>
      <AppBar color={"transparent"} position="relative">
        <Container>
          <Tabs value={activePage} onChange={handleTabClick} >
            <Tab value={PageName.EducationAdmin} label={"Обучение админ"} />
          </Tabs>
        </Container>
      </AppBar>

      <Routes>
        <Route path={PageName.EducationAdmin + "/*"} Component={EducationAdminPage} />
        <Route path="*" element={<Navigate to={PageName.EducationAdmin} />} />
      </Routes>
    </div>
  </>
}