const comprarCasco = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            nombre: "casco",
            costo: 300
        });
    }, 1000);
});

const comprarGuantes = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            nombre: "guantes",
            costo: 150
        });
    }, 2000);
});

const irPaseo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            nombre: "paseo",
            objeto: "bicicleta"
        });
    }, 8000);
});

const bicicleteando = () => {
    comprarCasco
        .then(infoCasco => {
            console.log(infoCasco);
            return comprarGuantes;
        })
        .then(infoGuantes => {
            console.log(infoGuantes);
            return irPaseo;
        })
        .then(infoPaseo => {
            console.log(infoPaseo);
            return;
        })
        .catch(error => {
            console.error(error);
        })
        .finally(() => {
            console.log("Proceso finalizado");
        })
};


bicicleteando();