import { createContext, useContext, useReducer } from "react";
import { JSON_API_TRIPS } from "../helpers/consts";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export const tripContext = createContext();
export const useTrip = () => useContext(tripContext);
const INIT_STATE = {
  trips: [],
  tripDetails: {},
  commentsState: {},
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_TRIP":
      return { ...state, trips: action.payload };
    case "GET_PRODUCT_DETAILS":
      return { ...state, tripDetails: action.payload };
    case "ADD_COMMENTS":
      return { ...state, commentsState: action.payload };
    default:
      return state;
  }
};
const TripContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getTrips = async () => {
    const { data } = await axios.get(
      `${JSON_API_TRIPS}${window.location.search}`
    );
    console.log(data);
    dispatch({ type: "GET_TRIP", payload: data });
  };

  // console.log(state.trips);

  const addTrip = async (newTrip) => {
    await axios.post(JSON_API_TRIPS, newTrip);
  };

  const deleteTrip = async (id) => {
    await axios.delete(`${JSON_API_TRIPS}/${id}`);
    getTrips();
  };

  const getTripDetails = async (id) => {
    const { data } = await axios.get(`${JSON_API_TRIPS}/${id}`);
    dispatch({
      type: "GET_PRODUCT_DETAILS",
      payload: data,
    });
  };

  const saveEditedTrip = async (newProduct) => {
    await axios.patch(`${JSON_API_TRIPS}/${newProduct.id}`, newProduct);
    getTrips();
    navigate("/card");
  };

  const location = useLocation();
  console.log(location.pathname);

  const fetchByType = async (query, value) => {
    const search = new URLSearchParams(window.location.search);

    if (value === "Все") {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
  };

  async function setComments(obj) {
    state.tripDetails.comments.push(obj);
    const newObj = {
      ...state.tripDetails,
      comments: state.tripDetails.comments,
    };
    await axios.patch(`${JSON_API_TRIPS}/${state.tripDetails.id}`, newObj);
  }

  function setCommentsState(a) {
    dispatch({
      type: "ADD_COMMENTS",
      payload: a,
    });
  }

  const values = {
    addTrip,
    getTrips,
    trips: state.trips,
    deleteTrip,
    tripDetails: state.tripDetails,
    getTripDetails,
    saveEditedTrip,
    fetchByType,
    setComments,
    commentsState: state.commentsState,
  };
  return <tripContext.Provider value={values}>{children}</tripContext.Provider>;
};

export default TripContextProvider;
