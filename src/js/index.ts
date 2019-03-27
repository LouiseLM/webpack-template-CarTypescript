import axios,{
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"
import { ICar } from "./ICar";


let ContentElement: HTMLDivElement = <HTMLDivElement> document.getElementById("content");

function ShowAllCars():void{
    axios.get<ICar[]>("https://webapicar20190326034339.azurewebsites.net/api/cars")
    .then(function (response: AxiosResponse<ICar[]>): void
    {
        console.log("Er i Then");
        console.log(response);
    })
    .catch(
        function(error: AxiosError): void{
            console.log("Error i min kode");
            console.log(error);
        }
    )

    console.log("Er i slutningen af ShowAllCars function");


}

ShowAllCars();