export default function Post (props) {

    return (
        <div class="post">
            <Topo nome = {props.nome} imgUsuario = {props.imgUsuario}/>
            <Conteudo imgConteudo = {props.imgConteudo}/>
            <Fundo imgCurtidas = {props.imgCurtidas} nomeCurtidaReferencia = {props.nomeCurtidaReferencia} qtdPessoasCurtiram = {props.qtdPessoasCurtiram}/>
        </div>
    )
}

function Topo (props) {

    return (
        <div class="topo">
            <div class="usuario">
                  <img src={props.imgUsuario} alt="img-usuario"/>
                  {props.nome}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}
function Conteudo (props) { 

    return (
        <div class="conteudo">
            <img src={props.imgConteudo} alt="img-conteudo"/>
        </div>
    )
}

function Fundo (props) {

    return (
        <div class="fundo">
            <Acoes/>
            <Curtidas imgCurtidas = {props.imgCurtidas} nomeCurtidaReferencia = {props.nomeCurtidaReferencia} qtdPessoasCurtiram = {props.qtdPessoasCurtiram}/>
        </div>
    )
}

function Acoes () {

    return (
        <div class="acoes">
            <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
    )
}

function Curtidas (props) {

    return (
        <div class="curtidas">
            <img src={props.imgCurtidas} alt="img-curtidas"/>
            <div class="texto">
                Curtido por <strong>{props.nomeCurtidaReferencia}</strong> e <strong>outras {props.qtdPessoasCurtiram} pessoas</strong>
            </div>
        </div>
    )
}