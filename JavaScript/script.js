function adicionarTarefa() {
    let campoTarefa = document.getElementById("tarefa");
    let lista = document.getElementById("lista-de-tarefas");

    let texto = campoTarefa.value.trim();

    // não permite vazio
    if (texto === "") return;

    // verifica repetido
    let tarefas = lista.getElementsByTagName("li");

    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].textContent.toLowerCase() === texto.toLowerCase()) {
            campoTarefa.value = "";
            campoTarefa.placeholder = "Tarefa já existe!";
            return;
        }
    }

    // adiciona se não existir
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = texto;
    lista.appendChild(novaTarefa);

    campoTarefa.value = "";
}
function limparLista() {
    let lista = document.getElementById("lista-de-tarefas");
    lista.innerHTML = "";
}

function apagarUltimaTarefa(){
    let lista = document.getElementById("lista-de-tarefas");

    if (lista.lastElementChild){
        lista.removeChild(lista.lastElementChild);
    }
}