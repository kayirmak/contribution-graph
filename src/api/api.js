import axios from "axios";

export const getAllData = async () => {
  const res = await axios.get("https://dpg.gg/test/calendar.json");
  return res.data;
};
