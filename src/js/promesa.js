

const heroes = {
    capi:{
        nombre: "capitan America",
        poder:"poder Aguantar inyecciones"
    },
    iron:{
        nombre:"Ironman",
        poder:"Poder tener mucho Dinero"
    },
    spider:{
        nombre:"Spiderman",
        poder:"Tener poder de las fotos"
    }
}
    export const buscarHeroe = (id) => {
        const heroe = heroes[id];
        return new Promise((resolve, reject) =>{
            if(heroe) {
                resolve(heroe);
            }else{
                reject("No existe el el heroe ",id)
            }
        });
}

