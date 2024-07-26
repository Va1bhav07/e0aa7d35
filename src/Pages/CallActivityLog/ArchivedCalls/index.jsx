import React, { useContext, useState } from "react";
import Stack from "@mui/material/Stack";

import { ArchiveCallBtn } from "../ArchiveCallBtn";
import { CallIList } from "../CallIList";
import { CallDetails } from "../../CallDetails";

import { CallLogsContext } from "../../../contexts/CallLogsContext";

export const ArchivedCalls = () => {
  const { callLogsState: callLogs } = useContext(CallLogsContext);
  const totalCalls = callLogs.archivedCalls;
  const isLoading = callLogs.isLoading;
  const archivedCallsData = Object.keys(callLogs.archivedCallsIdData);

  const [callIdState, setCallId] = useState("");
  const callDetailsHandler = (callId) => {
    setCallId(callId);
  };

  const backBtnHandler = () => {
    setCallId("");
  };

  if (callIdState) {
    return <CallDetails callId={callIdState} onBackBtn={backBtnHandler} />;
  }

  return (
    <Stack>
      <ArchiveCallBtn isArchive={true} callIds={archivedCallsData} />
      <CallIList
        callsData={totalCalls}
        callDetailsHandler={callDetailsHandler}
        isLoading={isLoading}
      />
    </Stack>
  );
};
