import { MdEmail, MdLock } from 'react-icons/md'
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"

import { api } from '../../services/api'
import { Column,  ErrorText, Container, CriarText, JatenhoText, Row, SubTitleLogin, Title, TitleLogin, Wrapper, SubTitleCadastro} from './styles'

const schema = yup.object({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().email('email não é valido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),  
}).required();

const Cadastro = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    console.log(isValid, errors);

    const onSubmit = async formData => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1){
                navigate('/feed')
            }

            else {
                navigate('/feed')
            }
        }

        catch{
            navigate('/feed')
        }
    }

    const handleClickSignIn = () => {
        navigate('/login')
    }
  
    

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                        e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubTitleLogin>Crie sua conta e make the change.</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="name" errorMessage={errors?.email?.message} control={control} placeholder="Nome" />
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" />
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" />
                        <Button title="Criar minha conta" variant="secondary" type="submit" />
                        <SubTitleCadastro>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubTitleCadastro>
                    </form>
                    
                    <JatenhoText>Já tenho conta. <CriarText onClick={handleClickSignIn}> Fazer login</CriarText></JatenhoText>
                    
                    
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }