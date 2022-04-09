import { request as https } from "./Request";
export const GetPost = ({ limit }) => {
    return https.get(`https://dummyapi.io/data/v1/post?limit=${limit}`)
}

export const GetUser = ({limit}) => {
    return https.get(`https://dummyapi.io/data/v1/user?limit=${limit}`)
}