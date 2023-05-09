import {
  GET_IMAGES,
  IMAGES_ERROR,
  ImagesDispatchTypes,
  Images,
} from "../actions/types";

interface DefaultStateI {
  loading: boolean;
  images?: Images[];
  totalCount?: number;
}

const initialState: DefaultStateI = {
  loading: true,
};

const imagesReducer = (
  state: DefaultStateI = initialState,
  action: ImagesDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
        images: action.payload.value,
        totalCount: action.payload.totalCount,
        loading: false,
      };
    case IMAGES_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default imagesReducer;
