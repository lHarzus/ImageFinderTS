import axios from "axios";
import { Dispatch } from "redux";
import { GET_IMAGES, IMAGES_ERROR, ImagesDispatchTypes } from "./types";

//Get all images
export const search =
  (param: string) => async (dispatch: Dispatch<ImagesDispatchTypes>) => {
    const options = {
      method: "GET",
      url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI",
      params: {
        q: param,
        pageNumber: "1",
        pageSize: "50",
        autoCorrect: "true",
      },
      headers: {
        "X-RapidAPI-Key": "a74fc9dbd8msh15924aaaf77e137p1e3047jsn220e0a898b7a",
        "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      },
    };

    try {
      const res = await axios.request(options);

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
