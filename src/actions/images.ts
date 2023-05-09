import axios from "axios";
import { Dispatch } from "redux";
import { GET_IMAGES, IMAGES_ERROR, ImagesDispatchTypes } from "./types";

//Get all cars
export const search =
  (param: string) => async (dispatch: Dispatch<ImagesDispatchTypes>) => {
    console.log("entrei");

    try {
      const res = await axios.get(
        `https://serpapi.com/search.json?q=${param}&engine=google_images&ijn=0`
      );

      dispatch({
        type: GET_IMAGES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: IMAGES_ERROR,
      });
    }
  };
