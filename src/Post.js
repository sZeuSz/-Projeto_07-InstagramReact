export default function Post () {

    return (
        <div class="post">
            <Topo/>
            <Conteudo/>
            <Fundo/>
        </div>
    )
}

function Topo () {

    return (
        <div class="topo">
            <div class="usuario">
                  <img src="assets/img/barked.svg" alt=""/>
                  barked
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}
function Conteudo () { 

    return (
        <div class="conteudo">
            <img src="assets/img/dog.svg"  alt=""/>
        </div>
    )
}

function Fundo () {

    return (
        <div class="fundo">
            <Acoes/>
            <Curtidas/>
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

function Curtidas () {

    return (
        <div class="curtidas">
            <img src="assets/img/adorable_animals.svg" alt=""/>
            <div class="texto">
                Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
            </div>
        </div>
    )
}