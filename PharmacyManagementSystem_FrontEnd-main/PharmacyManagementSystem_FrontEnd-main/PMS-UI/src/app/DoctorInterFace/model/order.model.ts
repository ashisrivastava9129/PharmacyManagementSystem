export interface Order{
    id?:string,
    name:string,
    quantity:number,
    address:string,
    city:string,
    mobileno:string,
    pinCode:string,
    drugName?:string,
    totalPrice?:number,
    userId?:string
}
