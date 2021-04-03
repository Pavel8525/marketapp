import { createAction } from "@reduxjs/toolkit";
import { ReturnedPoll } from "types/models";

const setPollIdActionType = "poll/setPollId";

const setPollId = createAction<ReturnedPoll>(setPollIdActionType);

export default { setPollId };
