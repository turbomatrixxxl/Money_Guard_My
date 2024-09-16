import React, { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SharedLayout from "./components/layouts/SharedLayout/SharedLayout";
import { refreshUser } from "./redux/auth/operationsAuth";
import { getCurrencyRate } from "./redux/currency/operationsCurrencySlice";
// import {
//   getTransactionItems,
//   getTransactions,
// } from "./redux/statistics/operationsStatistics";

import NotFoundPage from "./pages/NotFoundPage";

import Loader from "./components/commonComponents/Loader/Loader";

import "./App.css";

const LazyLoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));

const DashboardPage = lazy(() => import("./pages/DashboardPage/DashboardPage"));

const LazyHomeTabPage = lazy(() => import("./pages/HomeTab/HomeTab"));

const LazyCurrencyPage = lazy(() =>
  import("./pages/CurrencyPage/CurrencyPage")
);

const LazyStatisticsTabPage = lazy(() =>
  import("./pages/StatisticsTab/StatisticsTab")
);

const LazyRegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);

// const year = new Date().getFullYear();
// console.log(year);

// const month = new Date().getMonth() + 1;
// console.log(month);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(getCurrencyRate());
    // dispatch(getTransactions({ month: month, year: year }));
    // dispatch(getTransactionItems());
  }, [dispatch]);

  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/" component={<LazyLoginPage />} />
            }
          />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/"
                component={<LazyRegistrationPage />}
              />
            }
          />

          <Route
            path="/"
            element={
              <PrivateRoute redirectTo="/login" component={<DashboardPage />} />
            }
          >
            <Route path="" element={<LazyHomeTabPage />} />

            <Route
              path="/home"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<LazyHomeTabPage />}
                />
              }
            />

            <Route
              path="/statistics"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<LazyStatisticsTabPage />}
                />
              }
            />

            <Route
              path="/currency"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<LazyCurrencyPage />}
                />
              }
            />
          </Route>

          <Route path="*" element={<NotFoundPage initPage="/" />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
