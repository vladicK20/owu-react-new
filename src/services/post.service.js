import axiosService from "./axios.service";
import {urls} from "../constants";

const postService = {
    getPostById: (id) => axiosService.get(urls.users + '/' + id + urls.posts)
}

export {postService}