
if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration =>{
        console.log("sw registrado")
        console.log(registration)
    }).catch(error=>{
        console.log("registro fallido")
        console.log(error);
    })
}