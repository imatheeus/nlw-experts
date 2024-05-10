const perguntas = [
    {
        pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
        respostas: [
            "variavel",
            "let",
            "var",
        ],
        correta: 2
    },
    {
        pergunta: "Como você escreve um comentário de linha única em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "' Este é um comentário",
            "# Este é um comentário",
        ],
        correta: 0
    },
    {
        pergunta: "Qual dos seguintes não é um tipo de dados em JavaScript?",
        respostas: [
            "Number",
            "Boolean",
            "Character",
        ],
        correta: 2
    },
    {
        pergunta: "Qual operador é usado para atribuição de valor em JavaScript?",
        respostas: [
            "=",
            "*",
            "+",
        ],
        correta: 0
    },
    {
        pergunta: "Como você escreve 'Olá, Mundo!' em um alerta em JavaScript?",
        respostas: [
            "alertBox('Olá, Mundo!');",
            "msgBox('Olá, Mundo!');",
            "alert('Olá, Mundo!');",
        ],
        correta: 2
    },
    {
        pergunta: "Como você chama uma função chamada 'minhaFuncao'?",
        respostas: [
            "call minhaFuncao();",
            "start minhaFuncao();",
            "minhaFuncao();",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
        respostas: [
            "for (i = 0; i <= 5)",
            "for (i <= 5; i++)",
            "for (i = 0; i <= 5; i++)",
        ],
        correta: 2
    },
    {
        pergunta: "Qual método JavaScript é usado para selecionar um elemento HTML pelo ID?",
        respostas: [
            "document.getElementByName()",
            "document.querySelector()",
            "document.getElementById()",
        ],
        correta: 2
    },
    {
        pergunta: "Qual evento JavaScript é acionado quando o usuário clica em um elemento HTML?",
        respostas: [
            "onchange",
            "onmouseclick",
            "onclick",
        ],
        correta: 2
    },
    {
        pergunta: "Qual método JavaScript é usado para remover espaços em branco do início e do final de uma string?",
        respostas: [
            "trim()",
            "strip()",
            "clean()",
        ],
        correta: 0
    },
];

//selecionar elemento
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


// loop ou laço de repetição
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        
        quizItem.querySelector('dl').appendChild(dt)
    }
    
    //remover elemento
    quizItem.querySelector('dl dt').remove()

    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
}
