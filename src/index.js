// import { buscarHeroe } from "./js/promesa";
// import "./styles.css";
// // import {buscarHeroe} from'./js/callback.js';

// const heroId = "iron";
// const heroeId2 = "spider";
// //Varias funciones en un solo argumento
// Promise.all([buscarHeroe(heroId), buscarHeroe(heroeId2)]).then(
//   ([res, res2]) => {
//     console.log(res);

//     console.log("Enviando a la mision a ", res.nombre, "y", res2.nombre);
//   }
// );
// // //Promesas
// // buscarHeroe(heroId).then(heroes => {
// //     console.log(heroes);
// //     console.log("enviando a la mision a ",heroes.nombre);
// // });
// //callback
// // buscarHeroe( heroId, (heroe)=>{

// //     if(!heroe){
// //         console.log(err)
// //     }else{
// //     console.log(heroe);
// //     }
// // });

// class Person {
//   constructor(nombre, instagram) {
//     this.nombre = nombre;
//     this.instagram = instagram;
//   }
// }

// const data = [
//   ["mia", "@miawlfs"],
//   ["dalto", "@dalto"],
//   ["cofla", "@cofla"],
// ];

// const personas = [];
// for (let i = 0; i < data.length; i++) {
//   personas[i] = new Person(data[i][0], data[i][1]);
// }

// const obtenerPersonas = (id)=>{
//     return new Promise((resolve, reject)=>{
//         if(personas[id] == undefined){
//             reject("la persona no existe ");
//         }else{
//             resolve(personas[id].nombre);
//         }
//     });
// }

// const ObtenerInstagram=(id)=>{
//     return new Promise((resolve, reject)=>{
//         if(personas[id].instagram === undefined){
//             reject("El instagram no existe")
//         }else{
//             resolve(personas[id].instagram);
//         }
//     })
// }
// let idPerson = 0;
// obtenerPersonas(idPerson).then((persona)=>{
//  console.log("Nombre de la persona seleccionada es: ", persona);
// })
// ObtenerInstagram(idPerson).then((Instagram) => {
//     console.log("el sintagrama es :",Instagram);
// });

// let nombre = "pedros";
// const promesa = new Promise((resolve, reject) => {
//   if (nombre === "pedro") {
//     resolve(nombre);
//   } else {
//     reject("Su Nombre no es pedro");
//   }
// });

// promesa.then((nombre) => {
//     console.log(nombre);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// fetch("https://reqres.in/api/users?page=2")
//   // .then(res=> res.json())
//   // .then(res=> console.log(res.data))
//   .then((res) => {
//     res.json().then((res) => {
//       console.log(res);
//     });
//   });

bod = {
  cuenta: "646180xxxx0000000D",
  empresa: "XXXX",
  estado: "A",
  observaciones: "Cuenta validada",
};

fetch("http://localhost:8080/RespuestaEstadoCuenta", {
  method: "PUT",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(bod),
}).then((res) => {
  res.json().then((res) => {
    console.log(res);
  });
});
