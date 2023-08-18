
import { Card } from "../../components/Card"
import { Header } from "../../components/Header"
import { UserInfo } from "../../components/UserInfo"

import { Container, Column, Title, TitleHighLight } from './styles'

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
                <UserInfo percentual={80} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/129570244?v=4"/>
                <UserInfo percentual={27} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/129570244?v=4"/>
                <UserInfo percentual={89} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/129570244?v=4"/>
                <UserInfo percentual={57} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/129570244?v=4"/>
                <UserInfo percentual={12} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/129570244?v=4"/>
            </Column>     
        </Container>
    </>)
}

export { Feed }