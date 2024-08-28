// Manipulacion del DOM Proyecto Alura, encriptador de texto
// clayza 2024
// Seleccion de elementos

const btnEncriptar = document.querySelector(
  ".encrypt__side__command__encripta"
);
const textoEncriptar = document.querySelector(".encript__side__text");
const aviso = document.querySelector(".encript__side__aviso__message");
const response = document.querySelector(".card__side__evaluation");
const contenido = document.querySelector(".card__side__container");
const btnCopiar = document.querySelector(".card__side__copy");
const btnDesencriptar = document.querySelector(
  ".encrypt__side__command__desencripta"
);

btnEncriptar.addEventListener("click", (e) => {
  e.preventDefault();
  let texto = textoEncriptar.value;
  let txt = texto
    .normalize("NFD")
    .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

  console.log(txt);

  function temporizador() {
    setTimeout(() => {
      aviso.removeAttribute("style");
    }, 2000);
  }

  function estilosError() {
    aviso.style.background = "#f92e00";
    aviso.style.color = "#FFFF";
    aviso.style.fontWeight = "800";
  }
  console.log(aviso);
  if (texto == "") {
    estilosError();
    aviso.textContent = "El campo de texto no debe estar vacio";
    temporizador();
  } else if (texto !== txt) {
    estilosError();
    aviso.textContent =
      "El campo de texto no debe contener acentos y caracteres especiales";
    temporizador();
  } else if (texto !== texto.toLowerCase()) {
    estilosError();
    aviso.textContent = "El texto no debe contener mayusculas";
    temporizador();
  } else {
    texto = texto.replace(/e/gm, "enter");
    texto = texto.replace(/i/gm, "imes");
    texto = texto.replace(/a/gm, "ai");
    texto = texto.replace(/o/gm, "ober");
    texto = texto.replace(/u/gm, "ufat");

    console.log(texto);

    response.innerHTML = texto;
    textoEncriptar.value = "";
    btnCopiar.style.visibility = "inherit";
    contenido.remove();
  }
});

btnDesencriptar.addEventListener("click", (e) => {
  e.preventDefault();
  let texto = textoEncriptar.value;
  let txt = texto
    .normalize("NFD")
    .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

  console.log(txt);

  function temporizador() {
    setTimeout(() => {
      aviso.removeAttribute("style");
    }, 2000);
  }

  function estilosError() {
    aviso.style.background = "#f92e00";
    aviso.style.color = "#FFFF";
    aviso.style.fontWeight = "800";
  }
  console.log(aviso);
  if (texto == "") {
    estilosError();
    aviso.textContent = "El campo de texto no debe estar vacio";
    temporizador();
  } else if (texto !== txt) {
    estilosError();
    aviso.textContent =
      "El campo de texto no debe contener acentos y caracteres especiales";
    temporizador();
  } else if (texto !== texto.toLowerCase()) {
    estilosError();
    aviso.textContent = "El texto no debe contener mayusculas";
    temporizador();
  } else {
    texto = texto.replace(/enter/gm, "e");
    texto = texto.replace(/imes/gm, "i");
    texto = texto.replace(/ai/gm, "a");
    texto = texto.replace(/ober/gm, "o");
    texto = texto.replace(/ufat/gm, "u");

    console.log(texto);

    response.innerHTML = texto;
    textoEncriptar.value = "";
    btnCopiar.style.visibility = "inherit";
    contenido.remove();
  }
});

btnCopiar.addEventListener("click", (e) => {
  e.preventDefault();
  let copiar = response;
  copiar.select();
  document.execCommand("copy");
});
