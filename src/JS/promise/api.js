
import axios from "axios";


export const  api ={
    getItKamasutra(){
       return axios.post("https://it-kamasutra.com/students-need")
    } ,
    getGoogle(){
         axios.get("https://google.com")
             .then(res =>{
                 return res.data.vacancies
             })

    },
    getItMicrosoft(){
       return axios.get("https://microsoft.com")
    }
}