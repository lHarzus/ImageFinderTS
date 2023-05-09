export const GET_IMAGES = "GET_IMAGES";
export const IMAGES_ERROR = "IMAGES_ERROR";

export type SuggestedSearch = {
  suggested_searches: {
    name: string;
    serpapi_link: string;
    thumbnail: string;
  };
};

export type ImagesSearched = {
  images_results: {
    position: number;
    thumbnail: string;
    link: string;
    original: string;
  };
};

export interface GetImages {
  type: typeof GET_IMAGES;
  payload: {
    suggested_searches: SuggestedSearch[];
    images_results: ImagesSearched[];
  };
}

export interface ImagesError {
  type: typeof IMAGES_ERROR;
}

export type ImagesDispatchTypes = GetImages | ImagesError;
