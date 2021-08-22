import Topo from './Topo';
import Stories from './Stories'
import Posts from './Posts';

export default function App () {
    return (
        <div>
            <Topo/>
            <div class="corpo">
                <div class="esquerda">
                    <Stories/>
                    <Posts/>
                </div>
            </div>
        </div>
    )
}