function estado_botones_1(){

    btn_home.setAttribute("href", "#");

    btn_fotografias.setAttribute("class", "nav-link");
    btn_fotografias.setAttribute("href", "/imagenes");
    btn_fotografias.setAttribute("aria-current", "");

    btn_editar.setAttribute("class", "nav-link");
    btn_editar.setAttribute("href", "/editar");
    btn_editar.setAttribute("aria-current", "");

    btn_info.setAttribute("class", "nav-link");
    btn_info.setAttribute("href", "/info");
    btn_info.setAttribute("aria-current", "");

    btn_album.setAttribute("class", "nav-link");
    btn_album.setAttribute("href", "/album");
    btn_album.setAttribute("aria-current", "");

    info.setAttribute("class", "EstiloTexto2");
    editar.setAttribute("class", "EstiloTexto2");
    agregar.setAttribute("class", "EstiloTexto2");
    album.setAttribute("class", "EstiloTexto2");
    

    
}

function estado_botones_2(){

    btn_home.setAttribute("href", "/");

    btn_fotografias.setAttribute("class", "nav-link active");
    btn_fotografias.setAttribute("href", "#");
    btn_fotografias.setAttribute("aria-current", "page");

    btn_editar.setAttribute("class", "nav-link");
    btn_editar.setAttribute("href", "/editar");
    btn_editar.setAttribute("aria-current", "");

    btn_info.setAttribute("class", "nav-link");
    btn_info.setAttribute("href", "/info");
    btn_info.setAttribute("aria-current", "");

    btn_album.setAttribute("class", "nav-link");
    btn_album.setAttribute("href", "/album");
    btn_album.setAttribute("aria-current", "");

    info.setAttribute("class", "EstiloTexto2");
    editar.setAttribute("class", "EstiloTexto2");
    agregar.setAttribute("class", "EstiloTexto1");
    album.setAttribute("class", "EstiloTexto2");

   
}

function estado_botones_3(){

    btn_home.setAttribute("href", "/");

    btn_fotografias.setAttribute("class", "nav-link");
    btn_fotografias.setAttribute("href", "/imagenes");
    btn_fotografias.setAttribute("aria-current", "");

    btn_editar.setAttribute("class", "nav-link active");
    btn_editar.setAttribute("href", "#");
    btn_editar.setAttribute("aria-current", "page");

    btn_info.setAttribute("class", "nav-link");
    btn_info.setAttribute("href", "/info");
    btn_info.setAttribute("aria-current", "");

    btn_album.setAttribute("class", "nav-link");
    btn_album.setAttribute("href", "/album");
    btn_album.setAttribute("aria-current", "");

    info.setAttribute("class", "EstiloTexto2");
    editar.setAttribute("class", "EstiloTexto1");
    agregar.setAttribute("class", "EstiloTexto2");
    album.setAttribute("class", "EstiloTexto2");
}

function estado_botones_4(){

    btn_home.setAttribute("href", "/");

    btn_fotografias.setAttribute("class", "nav-link");
    btn_fotografias.setAttribute("href", "/imagenes");
    btn_fotografias.setAttribute("aria-current", "");

    btn_editar.setAttribute("class", "nav-link");
    btn_editar.setAttribute("href", "/editar");
    btn_editar.setAttribute("aria-current", "");

    btn_info.setAttribute("class", "nav-link active");
    btn_info.setAttribute("href", "#");
    btn_info.setAttribute("aria-current", "page");

    btn_album.setAttribute("class", "nav-link");
    btn_album.setAttribute("href", "/album");
    btn_album.setAttribute("aria-current", "");

    info.setAttribute("class", "EstiloTexto1");
    editar.setAttribute("class", "EstiloTexto2");
    agregar.setAttribute("class", "EstiloTexto2");
    album.setAttribute("class", "EstiloTexto2");
   
}
function estado_botones_5(){

    btn_home.setAttribute("href", "/");

    btn_fotografias.setAttribute("class", "nav-link");
    btn_fotografias.setAttribute("href", "/imagenes");
    btn_fotografias.setAttribute("aria-current", "");

    btn_editar.setAttribute("class", "nav-link");
    btn_editar.setAttribute("href", "/editar");
    btn_editar.setAttribute("aria-current", "");

    btn_info.setAttribute("class", "nav-link");
    btn_info.setAttribute("href", "/info");
    btn_info.setAttribute("aria-current", "");

    btn_album.setAttribute("class", "nav-link");
    btn_album.setAttribute("href", "#");
    btn_album.setAttribute("aria-current", "page");

    info.setAttribute("class", "EstiloTexto2");
    editar.setAttribute("class", "EstiloTexto2");
    agregar.setAttribute("class", "EstiloTexto2");
    album.setAttribute("class", "EstiloTexto1");
    

    
}

function actualizar(){
    var imagen = document.getElementById("url").value;
    
    if (imagen === '') {
      alert("Debe llenar el campo URL para validar")
      
      }
      else{
        console.log(imagen)
        imagen_modal.setAttribute("src", imagen);

        
      }
    
}

