import axios from 'axios'
axios.interceptors.request.use((config)=>{
    config.headers["app-id"]="6251305afe9bd3927eb44e11"
    return config
})

//get request 6251305afe9bd3927eb44e11
export const request={
    get:axios.get
}