'use client'
import {
  BrAvatar,
  BrButton,
  BrCard,
  BrDateTimePicker,
  BrInput,
  Container
} from '@govbr-ds/react-components'
import StyledButton from '@/components/StyledButton'

const LoginPage = () => {
  return (
    <>
      <Container>
        <BrCard
          title="Login Title"
          subtitle="Login Subtitle"
          avatar={<BrAvatar title="fulano" />}
          footer={
            <>
              <BrButton primary type="submit">
                Login
              </BrButton>
              <BrButton secondary>Registrar</BrButton>
            </>
          }
        >
          <BrInput label="Usuário" type="text" />
          <BrInput label="Senha" />
        </BrCard>
      </Container>
      <Container>
        <BrCard title="Teste">
          <BrDateTimePicker onClose={() => console.log('fechou')} />
          <StyledButton>Hello Styled</StyledButton>
        </BrCard>
      </Container>
    </>
  )
}
export default LoginPage
