function desplegarreseña(){
    document.getElementById('cuadroinicial').style.display="block";
    document.getElementById('informacionpersonal').style.display="none";
    document.getElementById('anteacademicos').style.display="none";
    document.getElementById('experiencia').style.display="none";
    document.getElementById('contacto').style.display="none";
    document.getElementById('redsoc').style.display="none";
    document.getElementById('listadicional').style.display="none";
    document.getElementById('listadicional2').style.display="none";
    document.getElementById('botonmasinfo').value="Más Información";
    document.getElementById('icono').style.color="white";
}

function desplegarinfopersonal(){
    document.getElementById('cuadroinicial').style.display="none";
    document.getElementById('informacionpersonal').style.display="flex";
    document.getElementById('informacionpersonal').style.flexDirection="row-reverse";
    document.getElementById('informacionpersonal').style.justifyContent="space-evenly";
    document.getElementById('anteacademicos').style.display="none";
    document.getElementById('experiencia').style.display="none";
    document.getElementById('contacto').style.display="none";
    document.getElementById('redsoc').style.display="none";
    document.getElementById('listadicional').style.display="none";
    document.getElementById('listadicional2').style.display="none";
    document.getElementById('botonmasinfo').value="Más Información";
    document.getElementById('icono').style.color="white";
}

function desplegarantedecentes(){
    document.getElementById('cuadroinicial').style.display="none";
    document.getElementById('informacionpersonal').style.display="none";
    document.getElementById('anteacademicos').style.display= "block";
    document.getElementById('experiencia').style.display="none";
    document.getElementById('contacto').style.display="none";
    document.getElementById('redsoc').style.display="none";
    document.getElementById('listadicional2').style.display="none";
    document.getElementById('icono').style.color="white";
    
}

function desplegarlaboral(){
    document.getElementById('cuadroinicial').style.display="none";
    document.getElementById('informacionpersonal').style.display="none";
    document.getElementById('anteacademicos').style.display="none";
    document.getElementById('experiencia').style.display="block";
    document.getElementById('contacto').style.display="none";
    document.getElementById('redsoc').style.display="none";
    document.getElementById('listadicional').style.display="none";
    document.getElementById('botonmasinfo').value="Más Información";

}

function desplegarcontacto(){
    document.getElementById('cuadroinicial').style.display="none";
    document.getElementById('informacionpersonal').style.display="none";
    document.getElementById('anteacademicos').style.display="none";
    document.getElementById('experiencia').style.display="none";
    document.getElementById('contacto').style.display="block";
    document.getElementById('redsoc').style.display="none";
    document.getElementById('listadicional').style.display="none";
    document.getElementById('listadicional2').style.display="none";
    document.getElementById('botonmasinfo').value="Más Información";
    document.getElementById('icono').style.color="white";
}

function desplegarredes(){
    document.getElementById('cuadroinicial').style.display="none";
    document.getElementById('informacionpersonal').style.display="none";
    document.getElementById('anteacademicos').style.display="none";
    document.getElementById('experiencia').style.display="none";
    document.getElementById('contacto').style.display="none";
    document.getElementById('redsoc').style.display="block";
    document.getElementById('listadicional').style.display="none";
    document.getElementById('listadicional2').style.display="none";
    document.getElementById('botonmasinfo').value="Más Información";
    document.getElementById('icono').style.color="white";
}

function masinfo(){
    const infor= document.getElementById('listadicional');
    const botinfo= document.getElementById('botonmasinfo');
   
    if (infor.style.display === "none"){
        infor.style.display="block";
        botinfo.value="Ocultar información";
    } else {
        infor.style.display="none";
        botinfo.value="Más Información";
    }
}

function masinfo2(){
    var infor2= document.getElementById('listadicional2');
    var icono= document.getElementById('icono');
    

    if (infor2.style.display==="none") {
        infor2.style.display="block";
        
    } else {
        infor2.style.display="none";
    }
    if (icono.style.color==="red"){
        icono.style.color="white";
    } else{
        icono.style.color="red";
    }
}
