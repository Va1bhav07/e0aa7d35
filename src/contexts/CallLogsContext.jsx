import React, { createContext } from "react";

export const CallLogsContext = createContext("");
export const CallLogsProvider = ({ children, value }) => {
  return (
    <CallLogsContext.Provider value={value}>
      {children}
    </CallLogsContext.Provider>
  );
};
