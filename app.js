// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let names = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const name = input.value.trim();

  if (name === "") {
    alert("El nombre no puede estar vacío.");
    return;
  }

  if (names.includes(name)) {
    alert("Ese nombre ya fue agregado.");
    return;
  }

  names.push(name);
  input.value = "";
  mostrarNombres();
}

function mostrarNombres() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  names.forEach(nombre => {
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (names.length < 2) {
    alert("Agrega al menos dos personas.");
    return;
  }

  const asignaciones = generarAsignacionesValidas();
  if (!asignaciones) {
    alert("No se pudo realizar el sorteo. Intenta de nuevo.");
    return;
  }

  const indice = Math.floor(Math.random() * names.length);
  const quien = names[indice];
  const suAmigo = asignaciones[quien];

  mostrarResultadoPersonal(quien, suAmigo);
}

function generarAsignacionesValidas() {
  let intentos = 100;

  while (intentos-- > 0) {
    const copia = [...names];
    const resultado = {};

    shuffleArray(copia);

    let valido = true;
    for (let i = 0; i < names.length; i++) {
      if (names[i] === copia[i]) {
        valido = false;
        break;
      }
      resultado[names[i]] = copia[i];
    }

    if (valido) return resultado;
  }

  return null;
}

function mostrarResultadoPersonal(nombre, amigoSecreto) {
  const lista = document.getElementById("resultado");
  lista.innerHTML = "";

  const li = document.createElement("li");
  li.textContent = `tu amigo secreto es: ${amigoSecreto}`;
  lista.appendChild(li);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
