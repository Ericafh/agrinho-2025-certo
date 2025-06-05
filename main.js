const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que você acha sobre o uso de agrotóxicos na agricultura?",
        alternativas: [
            {
                texto: "Eu acredito que o uso de agrotóxicos é essencial para garantir a produção em grande escala e evitar perdas de alimentos. Eles são necessários para controlar pragas e doenças nas plantações.",
                afirmacao: "Você se destaca por sua <b>eficiência</b>, Essa resposta indica uma visão mais pragmática e focada na eficiência. A pessoa provavelmente valoriza resultados práticos e pode ter uma abordagem mais técnica sobre as questões ambientais, priorizando a produtividade e a segurança alimentar."
            },
            {
                texto: "Eu sou contra o uso de agrotóxicos, pois acredito que eles podem causar danos à saúde humana e ao meio ambiente. Prefiro práticas agrícolas mais sustentáveis, como a agricultura orgânica.",
                afirmacao: "Você se destaca por sua <b>preocupação</b>, A pessoa que escolhe essa resposta tende a ser mais preocupada com o bem-estar coletivo e com o impacto ambiental. Ela valoriza a saúde, a sustentabilidade e provavelmente tem uma visão mais crítica sobre os métodos tradicionais de produção agrícola, buscando alternativas que sejam mais harmônicas com a natureza."
            }
        ]
    },
    {
        enunciado: "O que você pensa sobre a castração de animais de rua?",
        alternativas: [
            {
                texto: "Eu acho que a castração é essencial para controlar a população de animais de rua e evitar o sofrimento de muitos deles. Além disso, é uma medida que ajuda a prevenir doenças e melhora a qualidade de vida dos animais.",
                afirmacao: "Essa resposta demonstra uma pessoa com um senso prático e empático, que entende a importância da castração como uma solução para o problema da superpopulação de animais abandonados. Ela provavelmente se preocupa com a saúde pública e o bem-estar dos animais, adotando uma visão mais racional sobre o controle da população animal. Você é uma pessoa <b>empática</b>.</b>."
            },
            {
                texto: "Sou contra a castração de animais de rua porque acredito que isso vai contra a natureza e que devemos buscar outras formas de proteger esses animais sem interferir em seu ciclo reprodutivo",
                afirmacao: "Quem escolhe essa resposta pode ser uma pessoa mais idealista, com um forte apego à ideia de que os animais devem viver de acordo com seus instintos naturais. Essa pessoa pode valorizar mais soluções alternativas, como a criação de abrigos ou programas de adoção, e tende a ser mais desconfiada de intervenções que envolvem a modificação do comportamento natural dos animais. Você é uma pessoa <b>idealista</b>"
            }
        ]
    },
    {
        enunciado: "Por que há tanta escassez de recursos na saúde pública?",
        alternativas: [
            {
                texto: "Acredito que Falta de investimento governamental",
                afirmacao: "<b>Pragmatismo</b> A falta de investimento governamental na saúde pública decorre de orçamentos restritos e outras prioridades de gastos, levando a infraestrutura precária e serviços de saúde insuficientes."
            },
            {
                texto: "desigualdades na distribuição de recursos",
                afirmacao: "<b>Detalhista</b>,Desigualdades na distribuição de recursos na saúde pública ocorrem quando os recursos são alocados de maneira desigual entre diferentes regiões ou populações. Isso pode resultar em acesso desigual a serviços de saúde, com áreas mais pobres ou rurais recebendo menos apoio e, portanto, enfrentando maiores desafios em termos de qualidade e acesso a cuidados médicos."
            }
        ]
    },
    {
        enunciado: "Por que a violência obstétrica está cada vez mais banalizada? ",
        alternativas: [
            {
                texto: "Negligência médica",
                afirmacao: "<b>Foco</b> Apesar do uso de algumas técnicas serem restringidas apenas para casos específicos, ainda são utilizadas diariamente por profissionais da saúde."
            },
            {
                texto: "Desinformação da população.",
                afirmacao: "<b>Curiosidade</b> Mesmo com fácil acesso a informação, o assunto é pouco comentado e dado certa  importância. "
            }
        ]
    },
    {
        enunciado: "Como evitar que ocorra a extinção de animais nativos?",
        alternativas: [
            {
                texto: "Criação de mais áreas de proteção ambiental, com grande biodiversidade ajudaria a melhorar esse cenário?",
                afirmacao: "Sim, pois preservando nosso meio ambiente, protegemos nossos animais e facilitamos sua reprodução "
            },
            {
                texto: "Evitar intervenções de espécies não nativas neste ambiente pode ser uma alternativa?",
                afirmacao: "Sim, animais de um determinado local não estão preparados para lidar com predadores de outras áreas, levando a um extermínio da espécie local"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.innerHTML = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta(); 