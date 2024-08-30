import { collection, addDoc } from "firebase/firestore"; 

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

// Add a second document with a generated ID.
import { addDoc, collection } from "firebase/firestore"; 

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}


import { collection, getDocs } from "firebase/firestore"; 

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});


const botones=document.querySelectorAll(".btn-vacante");

const show=document.querySelectorAll(".ocultar");

let btnoferta=document.getElementById("btn-ofertas");

let masofertas=document.querySelector(".mas-ofertas");

botones.forEach((elemento,clave)=>{
  elemento.addEventListener("click",()=>{
    show[clave].classList.toggle("mostrar");
    if(show[clave].classList.contains("mostrar")){
      elemento.innerHTML="atras";
    }else{
      elemento.innerHTML="leer mas"
    }
  })
})

btnoferta.addEventListener("click",()=>{
  mostrar()
});

function mostrar(){
masofertas.classList.toggle("show");
if(masofertas.classList.contains("show")){
  btnoferta.innerHTML="atras"
}else{
btnoferta.innerHTML="Descubre mas ofertas"
}

}



    











    



        

          
           
        
    
        
        
  









         
        

    
    
    
        //enviarwasab.classList.add("enlace")
        //enviarwasab.href=" https://api.whatsapp.com/send?phone=${}&text=hola he visto tu anuncio en bolonius.web.app  y quiero obtener mas informacion";
        
   
    

    
    
        


    
   
       
       

        
  



 



// esta es  la funcion que borra todod los datos de bolonius en firestore

/*function borrardatos(){
    
const collectionRef=firebase.firestore().collection("oferta");

collectionRef.get().then((querySnapshot)=>{{
    querySnapshot.forEach((doc)=>{
        doc.ref.delete;

        alert("datos borrados correctamente");

    });
}});

}
*/
