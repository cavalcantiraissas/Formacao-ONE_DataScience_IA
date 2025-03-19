let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value.trim();
    let listaDeAmigos = document.getElementById("listaAmigos");
    
    if (!nomeAmigo) {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Remover caracteres especiais e números
    nomeAmigo = nomeAmigo.replace(/[^a-zA-ZáéíóúãõâêîôûàèìòùäëïöüçÇ ]/g, '');

    if (amigos.includes(nomeAmigo)) {
        alert("Este amigo já está na lista!");
        return;
    }

    amigos.push(nomeAmigo);

    let li = document.createElement("li");
    li.textContent = nomeAmigo;
    listaDeAmigos.appendChild(li);

    document.getElementById("amigo").value = "";
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Seu amigo secreto é <strong>${amigoSorteado}</strong>!</li>`;
}

function limparLista() {
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    amigos = [];
}
