function adicionarTarefa() {
    let campoTarefa = document.getElementById("tarefa");
    let lista = document.getElementById("lista-de-tarefas");

    let texto = campoTarefa.value.trim();

    if (texto === "") return;

    let tarefas = lista.getElementsByTagName("li");

    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].textContent.toLowerCase() === texto.toLowerCase()) {

            campoTarefa.value = "";
            campoTarefa.placeholder = "Tarefa já existe!";

            // ⬇ limpa placeholder depois de 2 segundos
            setTimeout(() => {
                campoTarefa.placeholder = "Adicionar tarefa";
            }, 2000);

            return;
        }
    }

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