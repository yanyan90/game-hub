import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key: "bf5f119facef4c03bbbc900e72551387"
    }
})