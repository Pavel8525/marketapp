import apiUrls from "constants/apiUrl";
import { ReturnedPoll } from "types/models";
import fetchReq from "utils/fetch";

const getPollByUrl = (url: string): Promise<ReturnedPoll> => {
  return fetchReq.get(
    `${apiUrls.Poll.getByUrl}?${new URLSearchParams({ url })}`
  );
};

export default {
  getPollByUrl,
};
