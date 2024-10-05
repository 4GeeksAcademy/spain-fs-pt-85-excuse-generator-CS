window.onload = function() {
    let sujeto = ["Mi padre ", "Mi amigo ", "Mi perro "];
    let accion = ["se comió ", "rompió ", "tiró "];
    let objeto = ["mis deberes ", "mi coche ", "mi comida "];
    let lugar = ["en casa", "en la calle", "en el colegio"];
  
    let parte1 = Math.floor(Math.random() * sujeto.length);
    let parte2 = Math.floor(Math.random() * accion.length);
    let parte3 = Math.floor(Math.random() * objeto.length);
    let parte4 = Math.floor(Math.random() * lugar.length);

    document.querySelector("#excusa").innerHTML = sujeto[parte1] + accion[parte2] + objeto[parte3] + lugar[parte4];
    
  }