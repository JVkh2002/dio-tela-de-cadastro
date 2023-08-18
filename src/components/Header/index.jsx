import React from 'react'
import { Button } from '../Button';
import logo from '../../assets/logo-full.svg'
import { useNavigate } from 'react-router-dom'



import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'

const Header = ({autenticado}) => {

    const navigate = useNavigate();

    const handleClickCad = () => {
        navigate('/cadastro')
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da dio"></img>
                    {autenticado ? (
                        <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                        </>
                    ) : null}
                    
                </Row>

                <Row>
                    {autenticado ? (
                        <UserPicture src='https://avatars.githubusercontent.com/u/129570244?v=4'/>
                    ) : (
                        <>
                        <MenuRight href="#">
                            Home
                        </MenuRight>
                        <Button title="Entrar"></Button>
                        <Button title="Cadastrar" onClick={handleClickCad} ></Button>
                        </>
                    )}
                    
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }