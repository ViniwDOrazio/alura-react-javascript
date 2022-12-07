import'./Footer.css';

function Footer({facebook, instagram, twitter}) {
    return(
        <footer className='footer'>
            <section className='social coluna1de3'>
                <a href={facebook} target="_blank"><img src="/imagens/footer/facebook.png" alt="facebook"/></a>
                <a href={instagram} target="_blank"><img src="/imagens/footer/instagram.png" alt="instagram"/></a>
                <a href={twitter} target="_blank"><img src="/imagens/footer/twitter.png" alt="twitter"/></a>
            </section>
            <section className='logo coluna1de3'>
                <img src="/imagens/footer/logo.png" alt="twitter"/>
            </section>
            <section className='criador coluna1de3'>
                <p>Desenvolvido por Viniw</p>
            </section>
        </footer>
    )
}
export default Footer