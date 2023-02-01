import ImagemCapaSobre from 'assets/capa-sobre.png'
import Postagem from 'componentes/postagem'
import Estilos from './sobre.module.css'
import fotoPessoal from 'assets/sobre.jpeg'

export default function Sobre() {
  return (
    <Postagem fotoCapa={ImagemCapaSobre} titulo='Sobre'>
      <h3 className={Estilos.subtitulo}>Ah não tem muito o que falar</h3>
      <img className={Estilos.fotoSobreMim} alt="Fotenha minha para publicar" src={fotoPessoal}/>
      <p>Poderia ir no gerador de lero lero ou encher isso aqui de imagens, mas não seria tão legal assim.</p>
      <p>Mas de verdade preciso escrever um pouco mais que isso, onde ja se viu uma apresentação com um único paragrafo, é bom escrever um pouco mais, ou de repente apelar pro loren ipsum.</p>
      <p>É vamos de lorem ipsum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper tincidunt eleifend. Phasellus luctus velit id porttitor fringilla. Nunc sit amet risus eget nulla dictum convallis. Quisque arcu velit, porta nec nunc et, cursus luctus tellus. Suspendisse tempor, ipsum vitae condimentum ornare, mauris diam blandit elit, at consequat purus diam sollicitudin mauris. Praesent ut hendrerit metus. Nam a tristique diam, vel dignissim mauris.</p>
      <p>Sed euismod ante quis velit interdum, a pellentesque lorem convallis. Maecenas varius odio eu vehicula blandit. Donec luctus neque nec fringilla posuere. In efficitur pellentesque ultricies. Nulla facilisi. Nullam dapibus ex at euismod mollis. Curabitur vitae libero et ex tristique blandit. Ut sed ex porta, vestibulum tortor sit amet, vestibulum arcu. Nullam eget erat vehicula, ultricies odio sed, consectetur odio. Nunc eros augue, finibus nec metus vel, venenatis aliquam augue. Morbi at laoreet lacus. Curabitur laoreet, neque ac dapibus semper, risus dolor ultricies quam, non accumsan ligula lorem ut nisi. Suspendisse malesuada elementum rhoncus. Duis nulla tortor, rhoncus quis placerat sed, fermentum id lectus. Donec a enim in sapien tempor maximus nec vitae turpis.</p>
      <p>Praesent volutpat auctor elit. Aliquam sit amet ante mi. Donec vestibulum sem nec porta tempus. Pellentesque ut fermentum magna, molestie aliquet turpis. Aliquam porta erat vitae tellus porttitor, ut cursus tellus venenatis. Etiam congue scelerisque quam. Morbi nec placerat nisl. Curabitur vel urna mi. Morbi commodo diam id hendrerit suscipit.</p>
      <p>Aliquam porttitor cursus nisi egestas mollis. Quisque non vulputate risus. In sit amet diam risus. Duis orci libero, ullamcorper posuere risus quis, porttitor ultrices tortor. Proin ullamcorper neque in quam molestie sagittis. Cras quis placerat est. In quis tellus aliquet, gravida risus tincidunt, vestibulum leo.</p>
      <p>Nullam volutpat interdum est vitae vestibulum. Nullam aliquet mi et leo auctor, non dictum nibh hendrerit. Integer metus quam, congue sit amet nisi congue, facilisis eleifend purus. Aenean non purus risus. Praesent et efficitur erat. Nulla cursus libero velit, ut ultrices elit feugiat non. Duis risus felis, tincidunt volutpat magna quis, egestas sollicitudin lorem. Cras ut odio enim. Maecenas tortor orci, dignissim eu ligula sed, hendrerit imperdiet dui. Ut vulputate arcu vitae auctor congue. Donec malesuada est nunc, vel lacinia turpis lacinia et. Mauris fermentum pharetra enim ut fermentum. Pellentesque nisl dui, auctor quis rhoncus et, sagittis nec lorem. Aliquam sit amet pulvinar dolor. Integer auctor, nulla sed eleifend fringilla, dui neque ultricies tortor, sed elementum nibh mi in nibh.</p>
    </Postagem>
  )
}
