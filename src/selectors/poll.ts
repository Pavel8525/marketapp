import { RootState } from "types/general";

const getPoll = (state: RootState) => state.poll;

export default {
  getPoll,
};
