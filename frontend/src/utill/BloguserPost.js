import { request as https } from "./Request";
export const GetPost = ({ limit }) => {
    return https.get(`https://dummyapi.io/data/v1/post?limit=${limit}`)
}

// export const UserPost = () => {
//     return https.get(`https://dummyapi.io/data/api/user?limit=${limit}`)
// }