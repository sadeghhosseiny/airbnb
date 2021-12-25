import { BASE_URL } from "../../constants/baseUrl";
import { api } from "../api";

export const getHomePageData = {
  getExploreData(data) {
    return api("GET", `${BASE_URL}/pyp`, data);
  },
  getLiveAnywhereData(data) {
    return api("GET", `${BASE_URL}/zp1`, data);
  },
};
