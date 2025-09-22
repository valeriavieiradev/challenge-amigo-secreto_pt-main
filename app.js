let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo.trim() == '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(amigo);
    
    exibirAmigosNaTela();

    document.getElementById('amigo').value = '';
}

function exibirAmigosNaTela() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 
    
   
    for (let i = 0; i < amigos.length; i++) {
        let itemLista = document.createElement('li');
        itemLista.textContent = amigos[i];
        lista.appendChild(itemLista);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para sortear!');
        return;
    }

    let numeroSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroSorteado];
    let resultado = document.getElementById('resultado');
    
    resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;

    let lista = document.getElementById('listaAmigos');
    lista.textContent = '';
    
    amigos = [];
}