let amigos = [];

function adicionar() {
  let amigo = document.getElementById('nome-amigo');
  let nomeAmigo = amigo.value.toUpperCase(); // Converter o nome para maiúsculo

  if (nomeAmigo == '') {
    alert("Digite um nome válido!!");
    return;
  }

  if(amigos.includes(nomeAmigo)) {
    alert("O nome já foi adicionado!");
    return;
  }

  let lista = document.getElementById("lista-amigos");
  amigos.push(nomeAmigo); // Adicionar o nome em maiúsculo ao array
  if (lista.textContent == "") {
    lista.textContent = nomeAmigo;
  } else {
    lista.textContent += ", " + nomeAmigo;
  }
  amigo.value = "";
}

function sortear() {
    if(amigos.length < 4) {
      alert('Adicione pelo menos 4 amigos!');
      return;
    }

  embaralha(amigos);
  let sorteio = document.getElementById("lista-sorteio");

  for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
      sorteio.innerHTML =
        sorteio.innerHTML + amigos[i] + " -> " + amigos[0] + "<br>";
    } else {
      sorteio.innerHTML =
        sorteio.innerHTML + amigos[i] + " -> " + amigos[i + 1] + "<br>";
    }
  }
}

function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);
    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}

function reiniciar() {
    amigos = [];
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
}
