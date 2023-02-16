$(document).ready(function () {
    //Función del botón agregar representante
    $("#btnRegistrar").click(function () {
        $("#modalRegistrarLiga").modal("show");
    });

});



//-------------------------------------------FUNCIONES ESTADO DE SITUACION---------------------------------
    function muestra_ActCir(id) {
        if (document.getElementById) { //se obtiene el id
            var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
            el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
        }
    }
    window.onload = function () {/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
        muestra_ActCir('contenidoAC');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
}

function cerrarac() {
    document.getElementById("contenidoAC").style.display = "none";
}


    function muestra_PasCir(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
            el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
    window.onload = function () {
        muestra_PasCir('contenidoPC');
}

function cerrarpc() {
    document.getElementById("contenidoPC").style.display = "none";
}



    function muestra_ActNoCir(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
            el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
    window.onload = function () {
        muestra_ActNoCir('contenidoANC');
    }

function cerraranc() {
    document.getElementById("contenidoANC").style.display = "none";
}




    function muestra_PasNoCir(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
            el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
    window.onload = function () {
        muestra_PasNoCir('contenidoPNC');
}


function cerrarpnc() {
    document.getElementById("contenidoPNC").style.display = "none";
}


    function muestra_oActNoCir(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
            el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
    window.onload = function () {
        muestra_oActNoCir('contenidoOANC');
}


function cerraroanc() {
    document.getElementById("contenidoOANC").style.display = "none";
}


        function muestra_P(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_P('contenidoP');
}

function cerrarp() {
    document.getElementById("contenidoP").style.display = "none";
}
//----------------------------------------------------FIN ESTADO DE SITUACION------------------------------









 //---------------------------------------------FUNCIONES ESTADO DE RESULTADOS----------------------------
function muestra_TIB(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_TIB('contenidoTIB');
}

function cerrarTIB() {
    document.getElementById("contenidoTIB").style.display = "none";
}


function muestra_TGP(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_TGP('contenidoTGP');
}

function cerrarTGP() {
    document.getElementById("contenidoTGP").style.display = "none";
}



function muestra_GP(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_GP('contenidoGP');
}

function cerrarGP() {
    document.getElementById("contenidoGP").style.display = "none";
}

 //-----------------------------------------FIN FUNCIONES ESTADO DE RESULTADOS----------------------------









 //------------------------------------------FUNCIONES ESTADO DE FLUJO------------------------------------
function muestra_AO(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_AO('contenidoAO');
}

function cerrarAO() {
    document.getElementById("contenidoAO").style.display = "none";
}


function muestra_AI(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_AI('contenidoAO');
}

function cerrarAI() {
    document.getElementById("contenidoAI").style.display = "none";
}


function muestra_AF(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_AF('contenidoAF');
}

function cerrarAF() {
    document.getElementById("contenidoAF").style.display = "none";
}
 //---------------------------------------FIN FUNCIONES FLUJO----------------------------------------










//---------------------------------------------CONCILIACION-----------------------------------------

function muestra_CB(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_CB('contenidoCB');
}

function cerrarCB() {
    document.getElementById("contenidoCB").style.display = "none";
}
//----------------------------------------FIN CONCILIACION-----------------------------------------












//-----------------------------------------------INVERSION----------------------------------------

function muestra_CBB1(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_CBB1('contenidoCBB1');
}

function cerrarCBB1() {
    document.getElementById("contenidoCBB1").style.display = "none";
}


function muestra_CBB2(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_CBB2('contenidoCBB2');
}

function cerrarCBB2() {
    document.getElementById("contenidoCBB2").style.display = "none";
}
 //---------------------------------------FIN INVERSION----------------------------------------------------










/***************************************************COMPARATIVO*********************************************/

function muestra_CA(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_CA('contenidoCA');
}

function cerrarCA() {
    document.getElementById("contenidoCA").style.display = "none";
}



function muestra_CASub(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_CASub('contenidoCASub');
}

function cerrarCASub() {
    document.getElementById("contenidoCASub").style.display = "none";
}


function muestra_TI(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_TI('contenidoTI');
}

function cerrarTI() {
    document.getElementById("contenidoTI").style.display = "none";
}

function muestra_CASP(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_CASP('contenidoCASP');
}

function cerrarCASP() {
    document.getElementById("contenidoCASP").style.display = "none";
}

function muestra_CAT(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_CAT('contenidoCAT');
}

function cerrarCAT() {
    document.getElementById("contenidoCAT").style.display = "none";
}


//--------------------------------------------CASUB CONTENIDOS--------------------------------------
function muestra_GA(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_GA('contenidoGA');
}

function cerrarGA() {
    document.getElementById("contenidoGA").style.display = "none";
}

function muestra_GM(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_GM('contenidoGM');
}

function cerrarGM() {
    document.getElementById("contenidoGM").style.display = "none";
}

function muestra_ME(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_ME('contenidoME');
}

function cerrarME() {
    document.getElementById("contenidoME").style.display = "none";
}


function muestra_A(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_A('contenidoA');
}

function cerrarA() {
    document.getElementById("contenidoA").style.display = "none";
}

function muestra_J(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_J('contenidoJ');
}

function cerrarJ() {
    document.getElementById("contenidoJ").style.display = "none";
}



function muestra_S(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_S('contenidoS');
}

function cerrarS() {
    document.getElementById("contenidoS").style.display = "none";
}

function muestra_BM(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_BM('contenidoBM');
}

function cerrarBM() {
    document.getElementById("contenidoBM").style.display = "none";
}
//---------------------------------------------FIN CASUB CONTENIDOS-----------------------------------------
/***********************************************FIN COMPARATIVO*********************************************/