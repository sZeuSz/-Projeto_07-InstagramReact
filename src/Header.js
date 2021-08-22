const icones = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];

export default function Topo () {
    
    return (
        <div class="navbar">
            <div class="container">
                <RetornaLogo/>
                <RetornaLogoMobile/>
                <RetornaImgInstagramMobile/>
                <RetornaBarraPesquisa/>
                <RetornaIcones/>
                <RetornaIconesMobile/>
            </div>
        </div>
    )

}

function RetornaLogo () {

    return (
        <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="separador"></div>
            <img src="assets/img/logo.png" alt="logo-insta"/>
        </div>
    )
}

function RetornaLogoMobile () {

    return (
        <div class="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
        </div>
    )
}

function RetornaImgInstagramMobile () {

    return (
        <div class="instagram-mobile">
            <img src="assets/img/logo.png"  alt="logo-instagram-mobile"/>
        </div>
    )
}

function RetornaBarraPesquisa () {

    return (
        <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>
    )
}

function RetornaIcones () {

    return (
        <div class="icones">
            {icones.map((icone) => <ion-icon name={icone}></ion-icon>)}
        </div>
    );
}

function RetornaIconesMobile () {

    return (
        <div class="icones-mobile">
            <ion-icon name={icones[0]}></ion-icon>
        </div>
    );

}