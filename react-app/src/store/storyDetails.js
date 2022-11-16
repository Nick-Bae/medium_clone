import { csrfFetch } from "./csrf";


const GET_DETAILS = "storyDetails/GET_DETAILS";
const DELETE_DETAILS = "storyDetails/DELETE_DETAILS"


const getStoryDetails = (story) => ({
  type: GET_DETAILS,
  payload: story,
});

export const deleteStoryDetails = () => ({
  type: DELETE_DETAILS
});

export const fetchStoryDetails = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/stories/${id}`);
  if (response.ok) {
    const story = await response.json();
    dispatch(getStoryDetails(story));
    return response;
  }
};

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_DETAILS:
      newState = action.payload;
      return newState;
    case DELETE_DETAILS:
        newState = {}
        return newState
    default:
      return state;
  }
}
