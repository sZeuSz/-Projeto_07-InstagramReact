import Post from "./Post";

const postsInfo = [
    {nome: "meowed", imgUsuario: "assets/img/meowed.svg", imgConteudo: "assets/img/gato-telefone.svg", imgCurtidas: "assets/img/respondeai.svg", nomeCurtidaReferencia: "respondeai", qtdPessoasCurtiram: "101.523"}, 
    {nome: "barked", imgUsuario: "assets/img/barked.svg", imgConteudo: "assets/img/dog.svg", imgCurtidas: "assets/img/adorable_animals.svg", nomeCurtidaReferencia: "adorable_animals", qtdPessoasCurtiram: "99.159"}
]

export default function Posts () {

    return (
        <div class="posts">
            {postsInfo.map((postInfo) => <Post nome = {postInfo.nome} imgUsuario = {postInfo.imgUsuario} imgConteudo = {postInfo.imgConteudo} imgCurtidas ={postInfo.imgCurtidas} nomeCurtidaReferencia = {postInfo.nomeCurtidaReferencia} qtdPessoasCurtiram = {postInfo.qtdPessoasCurtiram}/>)}
        </div>
    )
}
