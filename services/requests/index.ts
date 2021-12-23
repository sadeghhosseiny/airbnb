import { BASE_URL } from "../../constants/baseUrl";
import { api } from "../api";

export const getExploreData = {
  getData(data) {
    return api("GET", `${BASE_URL}/pyp`, data);
  },
};
