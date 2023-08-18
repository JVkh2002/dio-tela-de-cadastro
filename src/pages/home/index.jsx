import { useNavigate } from 'react-router-dom'
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import ImagemPrincipal from "../../assets/image_1.svg"

import { Container, TextContent, Title, TitleHighLight} from './styles'

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighLight>
                    Implemente
                    <br />
                    </TitleHighLight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                        desafio profissional, evoluindo em comunidade coms os melhores experts.
                </TextContent>
                <Button title="Começa agora" variant='secondary' onClick={handleClickSignIn} type="button"/> 
            </div>
            <div>
                <img src={ImagemPrincipal} alt="Imagem principal" />
            </div>
        </Container>
    </>)
}

export { Home }