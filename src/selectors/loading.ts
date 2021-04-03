import { AsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "types/general";


// Возвращает boolean состояние экшена исходя из его типа
const isLoading = (state: RootState, action: AsyncThunk<any, any, any>) => {
  const actionType = action.typePrefix;

  return state.loading[actionType];
};

export default { isLoading };
