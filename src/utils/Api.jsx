import Axios from "axios";
// require('dotenv').config()


export default Axios.create({
    baseURL: "https://api.pexels.com/v1/",
    headers: {
        Authorization:"563492ad6f91700001000001e46fc5ddafb74244aab8032480552c92",
    }

})