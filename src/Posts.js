import Post from "./Post";

const postsInfo = [
    {nome: "meowed", imgUsuario: "assets/img/meowed.svg", conteudo: "assets/img/gato-telefone.svg"}, 
    {nome: "barked", imgUsuario: "assets/img/barked.svg", conteudo: "assets/img/dog.svg"}
]

export default function Posts () {

    return (
        <div class="posts">
            <Post/>
        </div>
    )
}
