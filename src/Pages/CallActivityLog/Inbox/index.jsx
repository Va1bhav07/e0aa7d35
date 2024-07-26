import React, { useContext, useState } from "react";
import Stack from "@mui/material/Stack";

import { ArchiveCallBtn } from "../ArchiveCallBtn";
import { CallIList } from "../CallIList";

import { CallLogsContext } from "../../../contexts/CallLogsContext";
import { CallDetails } from "../../CallDetails";

export const Inbox = () => {
  const { callLogsState: callLogs, setUpdate } = useContext(CallLogsContext);
  const totalCalls = callLogs.unArchivedCalls;
  const isLoading = callLogs.isLoading;
  const unArchivedCallsData = Object.keys(callLogs.unArchivedCallsIdData);

  const [callIdState, setCallId] = useState("");
  const callDetailsHandler = (callId) => {
    setCallId(callId);
  };

  const backBtnHandler = () => {
    setCallId("");
    setUpdate((prev) => !prev);
  };

  if (callIdState) {
    return <CallDetails callId={callIdState} onBackBtn={backBtnHandler} />;
  }

  return (
    <Stack>
      <ArchiveCallBtn isArchive={false} callIds={unArchivedCallsData} />
      <CallIList
        callsData={totalCalls}
        callDetailsHandler={callDetailsHandler}
        isLoading={isLoading}
      />
    </Stack>
  );
};
