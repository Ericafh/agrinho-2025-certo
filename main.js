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
        enunciado: "Qual a sua opinião sobre a agricultura familiar?",
        alternativas: [
            {
                texto: "Acredito que a agricultura familiar é fundamental para a produção de alimentos de qualidade e para a preservação das tradições agrícolas. Ela também fortalece a economia local e promove a sustentabilidade.",
                afirmacao: "Você é uma pessoa <b>sustentável</b>, Quem escolhe essa resposta tende a ser alguém que valoriza a autenticidade e a sustentabilidade. Ela provavelmente se preocupa com a preservação da cultura local e da biodiversidade, dando mais atenção ao impacto social e ambiental das práticas agrícolas. Além disso, é alguém que apoia a economia de pequeno porte e reconhece a importância da agricultura familiar na manutenção de comunidades mais equilibradas."
            },
            {
                texto: "Eu vejo a agricultura familiar com um certo ceticismo, pois acredito que, para atender à crescente demanda por alimentos, é necessário ter mais eficiência e escala. A agricultura em grande escala, muitas vezes, oferece mais segurança alimentar.",
                afirmacao: "Você é uma pessoa <b>produtiva</b>, Essa resposta reflete uma postura mais pragmática e voltada para a produtividade. A pessoa provavelmente valoriza a eficiência e a capacidade de atender a grandes demandas, possivelmente com foco na inovação e no uso de tecnologias para aumentar a produção. Ela pode ter uma visão mais voltada para a economia global e as soluções industriais, com menos ênfase na preservação de pequenas práticas agrícolas."
            }
        ]
    },
    {
        enunciado: "Qual a sua opinião sobre a medicina veterinária?",
        alternativas: [
            {
                texto: "A medicina veterinária é essencial, pois não só cuida da saúde dos animais, mas também desempenha um papel importante na saúde pública, prevenindo doenças transmissíveis entre animais e humanos. Eu a vejo como uma profissão que exige dedicação e empatia.",
                afirmacao: "Você é uma pessoa <b>responsável</b>, Essa pessoa é empática, responsável e possui um grande respeito pelo cuidado com os animais e sua relação com os seres humanos. Ela valoriza as profissões que contribuem para o bem-estar coletivo e demonstra um interesse genuíno pela saúde pública e o meio ambiente. Tende a ser atenta aos impactos das ações humanas na vida animal e na sociedade."
            },
            {
                texto: "Vejo a medicina veterinária principalmente como uma profissão de negócios, voltada para o lucro das clínicas e dos tratamentos. Embora eu entenda sua importância, acho que, em alguns casos, pode haver um foco excessivo em lucrar em vez de priorizar o bem-estar animal.",
                afirmacao: "Você é uma pessoa <b>crítica</b>, Quem escolhe essa resposta provavelmente é mais crítica e cética em relação a práticas que envolvem grande envolvimento financeiro. Essa pessoa pode ser mais pragmática, com uma visão voltada para as questões econômicas e o potencial de exploração de certas áreas da profissão. Ela pode ter um forte senso de justiça e estar atenta à ética nas profissões, especialmente no que diz respeito ao cuidado com os animais."
            }
        ]
    },
    {
        enunciado: "O que você acha sobre a agropecuária e seu impacto na sociedade atual?",
        alternativas: [
            {
                texto: "A agropecuária é fundamental para a economia do país, pois gera empregos, alimenta a população e é responsável por uma grande parte das exportações. No entanto, é preciso investir em práticas mais sustentáveis para que não haja prejuízos ao meio ambiente e às futuras gerações.",
                afirmacao: "A pessoa que escolhe essa resposta tende a ser equilibrada e realista. Ela reconhece a importância da agropecuária, mas se preocupa com os impactos ambientais e busca soluções sustentáveis. É alguém que valoriza tanto o progresso econômico quanto a responsabilidade social e ambiental."
            },
            {
                texto: "A agropecuária é um setor essencial e, apesar de algumas críticas sobre seus impactos ambientais, acredito que a tecnologia e o uso racional de recursos podem minimizar esses problemas. O foco deve ser o crescimento do setor e o aumento da produtividade.",
                afirmacao: "A pessoa que escolhe essa resposta tem uma visão pragmática e otimista, com foco no progresso e no uso de tecnologia para solucionar problemas. É alguém que acredita que a inovação pode superar desafios e tem uma abordagem mais orientada para o crescimento econômico, às vezes dando menos atenção aos aspectos negativos em comparação com a primeira resposta."
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