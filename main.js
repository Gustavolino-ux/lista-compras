let itens = [] 

const button = document.querySelector(".adicionar-item button")
button.addEventListener("click", adicionarNovoItem)

function addEventListener() {
   const descricao = document.querySelector("#item").value

   if (descricao === "") {
       alert("Digite um item valido!")
       return
   }

   const item = {
       descricao: descricao,
       marcado: false
   }

   itens.push(item)

   document.querySelector("#item").value = ""

   mostrarListaAtualizada()
}

function mostrarListaAtualizada() {
   const sectionLista = document.querySelector(".lista")

   for(let i = 0; i < itens.length; i++) {
       sectionLista.innerHTML = ´´
           <div class="item">
               <div>
                   <input type="checkbox" id="item-${i}">

                   <div class="checkbox-customizada">
                       <img src="./imagens/checked.svg" alt="checked icon">
                   </div>

                   <label for="item-${i}">${itens[i].descricao}</label>
               </div>

               <button>
                   <img src="./imagens/trash-icon.svg" alt="Imagem do lixo">
               </button>
           
               </div> 
   }
}