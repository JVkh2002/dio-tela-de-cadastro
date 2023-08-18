import React from 'react';
import { FiThumbsUp } from "react-icons/fi";

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture} from './styles'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src='https://hermes.dio.me/articles/cover/72697b11-4395-4d1f-865e-ecb8ceffd225.png'/>
            <Content>
                <UserInfo>
                    <UserPicture src='https://avatars.githubusercontent.com/u/129570244?v=4' />
                    <div>
                        <h4>Pablo Henrique</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito no curso de html e css no bootcamp dio de Global avanade... <strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }