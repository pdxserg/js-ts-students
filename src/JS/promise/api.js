
import axios from "axios";


export const  api ={
    getItKamasutra(){
       return axios.post("https://it-kamasutra.com/students-need")
    } ,
    getGoogle(){
        return axios.get("https://google.com")
    },
    getItMicrosoft(){
       return axios.get("https://microsoft.com")
    }
}