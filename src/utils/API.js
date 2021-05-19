import axios from "axios";
const BASEURL = `https://dog.ceo/api/breed/${query}/images/random`

const API = {
  search: function(query) {
    return axios.get(BASEURL);
  }
};

export default API;