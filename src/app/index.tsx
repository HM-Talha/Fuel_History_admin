/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { AuthPage } from "./containers/Auth";
import { userRepoSaga } from "./containers/Auth/saga";
import { reducer, sliceKey } from "./containers/Auth/slice";
import React, { useEffect, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors";

import CreatePassword from "./containers/Auth/CreatePassword";
// import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
// import AlignHorizontalRightIcon from '@mui/icons-material/AlignHorizontalRight';
// import { IconButton } from '@mui/material';
import ForgotPassword from "./containers/Auth/ForgotPassword/ForgotPassword";
import LoginForm from "./containers/Auth/LoginPage/form";
import ResetPassword from "./containers/Auth/ResetPassword";
import PrivateRoute from "../utils/PrivateRoute";
import Notifications from "./containers/Notifications";
import NotificationDetails from "./containers/Notifications/components/NotificationDetails";
import OrganizationsManagement from "./containers/OrganizationsManagement";
import { selectDirection, themeActions } from "../styles/theme/slice";
import OrganizationDetails from "./containers/OrganizationsManagement/components/OrganizationDetails";
import GroupTreatment from "./containers/OrganizationsManagement/components/GroupTreatment";
import { UnsupportedScreen } from "./containers/UnsupportedScreen";
import useWindowDimensions from "utils/hooks/useWindowDimensions";
import ScrollToTop from "app/components/ScrollToTop";
import MobileUserAdd from "./containers/OrganizationsManagement/components/MobileUserAdd";

export function App() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: userRepoSaga });

  const { width } = useWindowDimensions();
  const direction = useSelector(selectDirection);
  const dispatch = useDispatch();

  const selectedLanguage = useMemo(() => {
    return {
      language: localStorage.getItem("i18nextLng"),
      direction,
    };
  }, [direction]);

  const toggleDirection = () => {
    dispatch(themeActions.toggleDirection());
  };

  useEffect(() => {
    if (selectedLanguage) {
      if (
        selectedLanguage.language === "hw" &&
        selectedLanguage.direction !== "rtl"
      ) {
        toggleDirection();
      }
      if (
        selectedLanguage.language === "en" &&
        selectedLanguage.direction !== "ltr"
      ) {
        toggleDirection();
      }
    }
    // eslint-disable-next-line
  }, [selectedLanguage]);
  {
    /*
width && width >= 1280 ?
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
              : <UnsupportedScreen />
            */
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Helmet titleTemplate="%s - Orpak" defaultTitle="Orpak">
        <meta name="description" content="A Orpak application" />
      </Helmet>
      <div dir={direction}>
        {width && width >= 1440 ? (
          <Routes>
            <Route path="/login/*" element={<AuthPage />}>
              <Route index element={<LoginForm className="" />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="reset-password" element={<ResetPassword />} />
              <Route path="create-password" element={<CreatePassword />} />
            </Route>
            <Route path="mobile-users" element={<OrganizationsManagement />} />
            <Route
              path="mobile-users/mobile-users-details"
              element={<OrganizationDetails />}
            />
            <Route
              path="mobile-users/mobile-users-add"
              element={<MobileUserAdd />}
            />
            <Route
              path="mobile-users/mobile-details/add-group-treatment"
              element={<GroupTreatment />}
            />
            <Route path="push-notification" element={<Notifications />} />
            <Route
              path="notifications/notification-details"
              element={<NotificationDetails />}
            />
            <Route
              path="dashboard"
              element={<PrivateRoute>{/* Private route  */}</PrivateRoute>}
            >
              {/* Setting */}
            </Route>
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        ) : (
          <UnsupportedScreen />
        )}
      </div>
    </BrowserRouter>
  );
}
