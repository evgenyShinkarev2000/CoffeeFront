import { AppBar, Box, Container, Stack, Tab, Tabs } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { CurrentUser } from "src/components/CurrentUser";
import { useTabsAdapter } from "src/hooks/TabsAdapter";
import { EducationAdminPage } from "./EducationAdminPage/EducationAdminPage";
import { EducationPage } from "./EducationPage/EducationPage";
import { PersonAdminPage } from "./PersonAdminPage/PersonAdminPage";
import { ProfilePage } from "./ProfilePage/ProfilePage";
import { useCurrentUser } from "src/hooks/CurrentUser";

export enum PageName {
  EducationAdmin = "EducationAdmin",
  Education = "Education",
  PersonAdmin = "PersonAdmin",
  Profile = "Profile",
}

export function MainPage() {
  const [activePage, setActivePage] = useTabsAdapter(PageName);
  const currentUser = useCurrentUser();

  return <>
    <div style={{ display: "grid", gridAutoRows: "min-content auto", maxHeight: "100vh", height: "100vh" }}>
      <AppBar color={"transparent"} position="relative">
        <Container>
          <Stack justifyContent="space-between" direction="row" gap={1} alignItems="center">
            <Tabs value={activePage} onChange={setActivePage} >
              {
                currentUser.isAdmin && <Tab value={PageName.EducationAdmin} label={"Обучение админ"} />
              }
              {
                currentUser.isAdmin && <Tab value={PageName.PersonAdmin} label="Персонал админ" />
              }
              <Tab value={PageName.Education} label={"Обучение"} />
              <Tab value={PageName.Profile} label="Профиль" />
            </Tabs>
            <Box flex={1} />
            <CurrentUser />
          </Stack>
        </Container>
      </AppBar>

      <Routes>
        {
          currentUser.isAdmin && <Route path={PageName.EducationAdmin + "/*"} Component={EducationAdminPage} />
        }
        {
          currentUser.isAdmin && <Route path={PageName.PersonAdmin + "/*"} Component={PersonAdminPage} />
        }
        <Route path={PageName.Education + "/*"} Component={EducationPage} />
        <Route path={PageName.Profile + "/*"} Component={ProfilePage} />
        <Route path="*" element={<Navigate to={PageName.Education} />} />
      </Routes>
    </div>
  </>
}