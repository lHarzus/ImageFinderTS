import {GET_IMAGES, IMAGES_ERROR, ImagesDispatchTypes,ImagesSearched, SuggestedSearch  } from "../actions/types";

interface DefaultStateI{
  loading: boolean,
  images?: ImagesSearched[],
  searches?: SuggestedSearch[]
}

const initialState : DefaultStateI = {
  loading: true,
};

const imagesReducer = (state : DefaultStateI= initialState , action : ImagesDispatchTypes ) : DefaultStateI => {

  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
        images: action.payload.images_results,
        searches: action.payload.suggested_searches,
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
}

export default imagesReducer;
