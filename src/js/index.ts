import axios,{
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"
import { ICar } from "./ICar";


let ContentElement: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
let GetAllCarsbtn: HTMLButtonElement = <HTMLButtonElement> document.getElementById("GetAllbtn")

GetAllCarsbtn.addEventListener("click", ShowAllCars)

let AddCarButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("AddCarBtn")

AddCarButton.addEventListener("click", addCar);

function addCar():void{
    let addModelElement: HTMLInputElement = <HTMLInputElement> document.getElementById("addModel");
    let addVendorElement: HTMLInputElement = <HTMLInputElement> document.getElementById("addVendor");
    let addPriceElement: HTMLInputElement = <HTMLInputElement> document.getElementById("addPrice");

    let myModel : string = addModelElement.value;
    let myVendor : string = addVendorElement.value;
    let myPrice : number = +addPriceElement.value;

    axios.post<ICar>("https://webapicar20190326034339.azurewebsites.net/api/cars", 
                    {model:myModel, vendor:myVendor, price:myPrice})
                    .then(function(response: AxiosResponse): void{
                        console.log("Atatuskoden er: " + response.status);
                    })
                    .catch(function(error: AxiosError): void{
                            console.log(error);
                        })
}

function ShowAllCars():void{
    axios.get<ICar[]>("https://webapicar20190326034339.azurewebsites.net/api/cars")
    .then(function (response: AxiosResponse<ICar[]>): void
    {
        console.log("Er i Then");
        console.log(response);

        let result: string = "<ol>"

        response.data.forEach((car: ICar) => {
            result += "<li>" + car.model + " " + car.vendor + " koster " + car.price + "kr." +"</li>"
        });

        result += "</ol>"

        ContentElement.innerHTML = result;

    })
    .catch(
        function(error: AxiosError): void{
            console.log("Error i min kode");
            console.log(error);
        }
    )

    console.log("Er i slutningen af ShowAllCars function");


}

//ShowAllCars();