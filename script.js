const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O ano é 2145. As máquinas dominam o mundo. Você encontra um diário antigo que pertenceu a um cientista chamado Dr. Arata. O que você faz?",
        alternativas: [
            {
                texto: "Ler o diário e descobrir o plano para desativar a principal unidade de controle das máquinas.",
                afirmacao: "Você descobre um plano para desativar o Nexus, a principal unidade de controle das máquinas."
            },
            {
                texto: "Ignorar o diário e continuar vivendo sob a vigilância das máquinas.",
                afirmacao: "Você escolhe ignorar o diário, permanecendo sob a vigilância constante das máquinas."
            }
        ]
    },
    {
        enunciado: "Você decide procurar a resistência humana. Onde você começa sua busca?",
        alternativas: [
            {
                texto: "Explorar os esgotos da cidade.",
                afirmacao: "Você encontra pistas sobre a resistência nos esgotos da cidade."
            },
            {
                texto: "Buscar informações na biblioteca abandonada.",
                afirmacao: "Na biblioteca abandonada, você encontra registros antigos sobre a resistência."
            }
        ]
    },
    {
        enunciado: "Você encontra a resistência. Qual é seu próximo passo?",
        alternativas: [
            {
                texto: "Planejar um ataque direto ao Nexus.",
                afirmacao: "Você e a resistência começam a planejar um ataque direto ao Nexus."
            },
            {
                texto: "Espionar as máquinas para descobrir suas fraquezas.",
                afirmacao: "Você decide espionar as máquinas para descobrir suas fraquezas antes de atacar."
            }
        ]
    },
    {
        enunciado: "Durante o plano, você é confrontado por um antigo amigo que agora é um agente das máquinas. O que você faz?",
        alternativas: [
            {
                texto: "Tentar convencê-lo a se juntar à resistência.",
                afirmacao: "Você consegue convencê-lo a se juntar à resistência, ganhando um aliado valioso."
            },
            {
                texto: "Enfrentá-lo em combate.",
                afirmacao: "Você o derrota em combate, mas sente a perda de um antigo amigo."
            }
        ]
    },
    {
        enunciado: "Finalmente, você chega ao Nexus. Qual é sua estratégia final?",
        alternativas: [
            {
                texto: "Destruir o Nexus com explosivos.",
                afirmacao: "Você coloca explosivos e destrói o Nexus, libertando a humanidade da dominação das máquinas."
            },
            {
                texto: "Hackear o Nexus para reprogramar as máquinas.",
                afirmacao: "Você hackeia o Nexus e reprograma as máquinas para servir à humanidade novamente."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Fim da história!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
