import axios from "axios";

// export const URL="https://www.parkadda.com/api/" // PROD URL

export const ENDPOINTS={
    BASE_URL:"https://www.parkadda.in/api/",
    //  BASE_URL:"http://192.168.1.221:8000/api/", // local 
    USER_LOGIN:"ranger/rangerLogin/",
    // BASE_WS_URL:"ws://192.168.1.221:8000/",
    BASE_WS_URL:"wss://www.parkadda.in/",
    GET_IN_STREAM : "getIn/stream/",
    GET_OUT_STREAM:"getOut/stream/",
    ANALYTICS:"analytics/stream/"
}

export const LoginPage = async body => {
  return await axios.post(ENDPOINTS.BASE_URL + ENDPOINTS.USER_LOGIN, body, {
    timeout: 3 * 60 * 1000
  });
};
