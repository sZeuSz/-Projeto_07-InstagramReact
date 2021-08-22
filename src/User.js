export default function Usuario(props) {

    return (
        <div class="usuario">
            <img src={props.imgPerfil} alt="img-perfil-usuario"/>
            <div class="texto">
              <strong>{props.nomeUsuario}</strong>
              {props.apelidoUsuario}
            </div>
        </div>
    )
}