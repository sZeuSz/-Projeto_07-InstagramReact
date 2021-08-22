const imagens_e_usuarios = [
    {nome: "9gag", img: "assets/img/9gag.svg"}, 
    {nome: "meowed", img: "assets/img/meowed.svg"},
    {nome: "barked", img: "assets/img/barked.svg"},
    {nome: "nathanwpylestrangeplanet", img: "assets/img/nathanwpylestrangeplanet.svg"},
    {nome: "wawawicomics", img: "assets/img/wawawicomics.svg"},
    {nome: "respondeai", img: "assets/img/respondeai.svg"},
    {nome: "filomoderna", img: "assets/img/filomoderna.svg"},
    {nome: "memeriagourmet", img: "assets/img/memeriagourmet.svg"}
]
export default function Stories () {

    return (
        <div class="stories">
            {imagens_e_usuarios.map((imagem_e_usuario) => <div class="story">
                                                            <div class="imagem">
                                                            <img src={imagem_e_usuario.img} alt="imagem-story" />
                                                            </div>
                                                            <div class="usuario">
                                                                {imagem_e_usuario.nome}
                                                            </div>
                                                        </div>)}
            <RetornaSetinha />
        </div>
    );
}

function RetornaSetinha () {

    return (
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        );
}