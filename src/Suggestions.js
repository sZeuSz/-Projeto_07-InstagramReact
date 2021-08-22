import Sugestao from  "./Suggestion";

export default function Sugestoes () {

    const sugestoesInformacoes = [
        {
            imgSugestao:"assets/img/bad.vibes.memes.svg",
            nome: "bad.vibes.memes",
            informacao: "Segue você" 
        },
        {
            imgSugestao:"assets/img/chibirdart.svg",
            nome: "chibirdart",
            informacao: "Segue você" 
        },
        {
            imgSugestao:"assets/img/razoesparaacreditar.svg",
            nome: "razoesparaacreditar",
            informacao: "Novo no Instagram" 
        },
        {
            imgSugestao:"assets/img/adorable_animals.svg",
            nome: "adorable_animals",
            informacao: "Segue você" 
        },
        {
            imgSugestao:"assets/img/smallcutecats.svg",
            nome: "smallcutecats",
            informacao: "Segue você" 
        }
    ]

    return (
        <div class="sugestoes">
            <Titulo/>
            {sugestoesInformacoes.map((sugestaoInformacao) => <Sugestao imgSugestao={sugestaoInformacao.imgSugestao} nome={sugestaoInformacao.nome} informacao={sugestaoInformacao.informacao}/> )}
        </div>
    )
}

function Titulo () {

    return (
        <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
    )
}