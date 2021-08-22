import Usuario from "./User";
import Sugestoes from "./Suggestions";
export default function Sidebar () { 
    
    return (
        <div class="sidebar">
            <Usuario imgPerfil="assets/img/catanacomics.svg" nomeUsuario = "catanacomics" apelidoUsuario = "Catana"/>
            <Sugestoes/>
            <Links/>
            <Copyright/>
        </div>
    )
}


function Links () {

    return (
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
    )
}

function Copyright () {

    return (
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    )
}