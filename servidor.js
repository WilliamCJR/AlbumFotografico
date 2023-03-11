const express = require("express")
const app = express()
const puerto = 4000
const bodyParser = require("body-parser")
app.use (bodyParser.urlencoded({extended: false}))

app.set("view engine", "ejs")
app.set("views",__dirname+"/views")

app.use(express.static(__dirname+"/public"))

app.get("/",(req,res)=>{
    const fotos = ver_fotos()

    var arr = [    ]
      
    var cont = 0 
    var primera_foto 
    for (var item in fotos){
        if (cont == 0) {
            primera_foto = fotos["1"];
            cont = cont +1;
        }
        else{
            arr.push(fotos[item]);
        }
        
    }

    
      res.render('index',{arr,primera_foto});
    
})

app.get("/album",(req,res)=>{
    const fotos = ver_fotos()

    var arr = [    ]
      
   
    for (var item in fotos){
        
            arr.push(fotos[item]);
        
        
    }

    
      res.render('album',{arr,cont:1});
    
})

app.get("/imagenes",(req,res)=>{
    res.render("imagenes")
})

app.post("/imagenes",(req,res)=>{
    nombre = req.body.nombre
    url = req.body.url
    descripcion = req.body.descripcion
    agregar_foto(nombre ,url,descripcion)
 
    res.render("imagenes")
});

app.get("/info",(req,res)=>{
    b =info_sitio()
    res.render("info", b)
})

app.get("/editar",(req,res)=>{
    res.render("editar")
})
app.post("/editar",(req,res)=>{
    nombre1 = req.body.nombre
    propietario1 = req.body.propietario
    descripcion1 = req.body.descripcion
    editar_sitio(nombre1,propietario1,descripcion1)
    res.render("editar")
    
});

app.listen(puerto,()=>{
    console.log("Ejecutando servidor de Album")
})

function ver_fotos(){
    var { readFileSync } = require('fs');
    var data = readFileSync('./imagenes.json');
    var a = JSON.parse(data)
    return a
}

function editar_sitio(nombre ,propietario,descripcion){
    var { readFileSync } = require('fs');
    var data = readFileSync('./config.json');
    var a = JSON.parse(data)
    
    const { writeFile } = require('fs');

    var path = './config.json';
    
    a.nombre_album=nombre
    a.propíetario=propietario
    a.descripcion= descripcion
    var config = a;

    
    writeFile(path, JSON.stringify(config, null, 2), (error) => {
    if (error) {
        console.log('Error ', error);
        return;
    }
    console.log('Configuracion cargada');
    }); 
}
//console.log(Object.keys(a).length)
function info_sitio(){
    var { readFileSync } = require('fs');
    var data = readFileSync('./config.json');
    var a = JSON.parse(data)
    return a
}
function agregar_foto(nombre ,url,descripcion){
    var { readFileSync } = require('fs');
    var data = readFileSync('./imagenes.json');
    var a = JSON.parse(data)
    
    const { writeFile } = require('fs');

    var path = './imagenes.json';
    var  cont = Object.keys(a).length + 1
    a[cont] = {"nombre" : nombre,
            "url" : url,
            "descripcion" : descripcion
            
        }

    
    var config = a;

    
    writeFile(path, JSON.stringify(config, null, 2), (error) => {
    if (error) {
        console.log('Error ', error);
        return;
    }
    console.log('Configuracion cargada');
    }); 
}