import { AppBar, Container, Tab, Tabs } from "@mui/material";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useTabsAdapter } from "src/hooks/TabsAdapter";
import { EducationAdminPage } from "./EducationAdminPage/EducationAdminPage";
import { EducationPage } from "./EducationPage/EducationPage";
import { PersonAdminPage } from "./PersonAdminPage/PersonAdminPage";
import { ProfilePage } from "./ProfilePage/ProfilePage";

export enum PageName {
  EducationAdmin = "EducationAdmin",
  Education = "Education",
  PersonAdmin = "PersonAdmin",
  Profile = "Profile",
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
            <Tab value={PageName.Education} label={"Обучение"} />
            <Tab value={PageName.PersonAdmin} label="Персонал админ" />
            <Tab value={PageName.Profile} label="Профиль" />
          </Tabs>
        </Container>
      </AppBar>

      <Routes>
        <Route path={PageName.EducationAdmin + "/*"} Component={EducationAdminPage} />
        <Route path={PageName.Education + "/*"} Component={EducationPage} />
        <Route path={PageName.PersonAdmin + "/*"} Component={PersonAdminPage} />
        <Route path={PageName.Profile + "/*"} Component={ProfilePage} />
        <Route path="*" element={<Navigate to={PageName.EducationAdmin} />} />
      </Routes>
    </div>
  </>
}