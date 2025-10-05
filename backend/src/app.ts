import colors from 'colors';
import server from "./routers/server";

// Port
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(colors.blue.bold(` :: Server is running on port :: ${PORT}`));
});

// let productName = "DevTree API";
// let isAuthenticated = true;
// let price = 30

// // types
// type Product = {
//     id: number;
//     price: number;
//     name: string;
// }
// //interfaces extend types
// interface FullProduct extends Product {
//     id: number;

// }

// // Heredar desde un type a type
// type NewProduct = Product & {
//     description: string;
// }

// //heredar solo el id del/el interface/type
// interface NewProduct1{
//   id : Product['id']
// }

// let product: Product = {id:1, price:300, name:'Product 1'}
// let product2: FullProduct = {id:2, price:200, name:'Product 2'}
// let product3: NewProduct = {id:3, price:100, name:'Product 3', description:'This is product 3'}

// const numbers = [1,2,3,4,5]

