const heroes = {
    capi :{
        nombre: "capitan America",
        poder: " poder aguanta inyecciones"
    },
    iron :{
         nombre : "ironman",
         poder :"poder del dinero"
    },
    spider:{
        nombre: "spiderman",
        poder :"Los Cracks"
    }
}

export const buscarHeroe = (id , callback )=>{
    const heore = heroes[id];
    if(heore){
    callback(null,heore);
    }else {
        callback("el eroe no existe");
    }
}