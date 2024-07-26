import React, { useEffect, useReducer, lazy, Suspense, useState } from "react";
import { CallLogsProvider } from "./contexts/CallLogsContext";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./assets/theme";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import Layout from "./Layout";
import { apiAxios } from "./utilities/axios";
import { formatDate } from "./utilities/formatDate";
import { initialState, appReducer } from "./reducer";
import {
  REQUEST_CALL_DATA,
  SET_CALL_DATA,
  SET_CALL_DATA_FAILED,
} from "./const";

const CallActivityLog = lazy(() => import("./Pages/CallActivityLog"));

const App = () => {
  const [appState, dispatch] = useReducer(appReducer, initialState);
  const [isUpdate, setUpdate] = useState(false);

  useEffect(() => {
    (async () => {
      const api = "/activities";
      dispatch({ type: REQUEST_CALL_DATA });
      try {
        const resp = await apiAxios.get(api);
        const allCallsResp = resp;
        const allCalls = {};
        const archivedCalls = {};
        const unArchivedCalls = {};
        const archivedCallsIdData = {};
        const unArchivedCallsIdData = {};

        allCallsResp.forEach((call) => {
          const date = formatDate(call.created_at);
          if (!allCalls[date]) {
            allCalls[date] = {};
          }
          if (!allCalls[date][call.from]) {
            allCalls[date][call.from] = [];
          }
          allCalls[date][call.from].push(call);
          if (call.is_archived) {
            archivedCallsIdData[call.id] = call;
            if (!archivedCalls[date]) {
              archivedCalls[date] = {};
            }
            if (!archivedCalls[date][call.from]) {
              archivedCalls[date][call.from] = [];
            }
            archivedCalls[date][call.from].push(call);
          } else {
            unArchivedCallsIdData[call.id] = call;

            if (!unArchivedCalls[date]) {
              unArchivedCalls[date] = {};
            }
            if (!unArchivedCalls[date][call.from]) {
              unArchivedCalls[date][call.from] = [];
            }
            unArchivedCalls[date][call.from].push(call);
          }
        });
        dispatch({
          type: SET_CALL_DATA,
          payload: {
            allCalls,
            archivedCalls,
            unArchivedCalls,
            archivedCallsIdData,
            unArchivedCallsIdData,
            isLoading: false,
          },
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        dispatch({ type: SET_CALL_DATA_FAILED });
      }
    })();
  }, [isUpdate]);

  return (
    <CallLogsProvider value={{ callLogsState: appState, setUpdate }}>
      <ThemeProvider theme={theme}>
        <Container
          disableGutters
          sx={{
            width: "376px",
            height: "666px",
            zIndex: 100,
            background: "white",
            borderRadius: "3px",
            boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.9)",
          }}
        >
          <Layout>
            <Suspense
              fallback={
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <CircularProgress />
                </Box>
              }
            >
              <CallActivityLog />
            </Suspense>
          </Layout>
        </Container>
      </ThemeProvider>
    </CallLogsProvider>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export default App;
