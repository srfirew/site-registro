// >> SUBMIT

const submit = document.getElementById("submit")
const form = document.getElementById("form")
submit.addEventListener("click", function(event){
    event.preventDefault(); 

    //Comparar senhas
    let senha = document.getElementById("senha").value
    let consenha = document.getElementById("confirmarsenha").value

        if(senha !== consenha){
            alert("Senhas diferentes.")
            return
        }

    //Avisar campos inválidos
    const inputs = document.querySelectorAll("input:not([type='submit']):not([type='button']):not(#data)")

    let espacVazio = false

    inputs.forEach(input => {

        if(input.value.trim() === ""){
            espacVazio = true
            input.style.border = "1px solid red"
        }else{
            input.style.border = ""
            
        }
        
    })

    if(espacVazio){
        alert("Preencha os espaços vazios.")
        return
    }else{
        alert("Registrado com sucesso!")
        form.submit()
        form.reset()
    }
    

})

// >> IDADE BUTTON

//Mostrar data ao clicar no botão
const idadeBotao = document.getElementById("button")
const idadeB = document.getElementById("idade")
const data = document.getElementById("data")

idadeBotao.addEventListener("click", function(event){

    
    const idade = parseInt(document.getElementById("idade").value)

    if(!isNaN(idade) && idade > 0){
        const anoAtual = new Date().getFullYear()

        data.style.display = "inline-block"
        idadeBotao.style.display = "none"

        let dataFinal = anoAtual-idade

        data.value = "01/01/" + dataFinal

        idadeB.style.border = ""

        event.preventDefault()
    }else{
        idadeB.style.border = "1px solid red"
        event.preventDefault()
    }
})

//Resetar data toda vez que mudar idade
idade.addEventListener("input", function(){

    data.style.display = "none"
    idadeBotao.style.display = "inline-block"

})



