let baseURL = ""

if(process.env.NODE_ENV == "production") {
    baseURL = ""
} else {
    baseURL = "http://127.0.0.1:8000"
}


export default baseURL