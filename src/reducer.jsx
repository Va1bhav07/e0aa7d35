import {
  REQUEST_CALL_DATA,
  SET_CALL_DATA,
  SET_CALL_DATA_FAILED,
} from "./const";
export const initialState = {
  allCalls: {},
  archivedCalls: {},
  unArchivedCalls: {},
  archivedCallsIdData: {},
  unArchivedCallsIdData: {},
  isLoading: false,
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_CALL_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case SET_CALL_DATA:
      return {
        ...state,
        ...payload,
        isLoading: false,
      };
    case SET_CALL_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return {
        ...initialState,
      };
  }
};
