import { Search as IconSearch } from '@styled-icons/material-outlined'

import Search from 'components/Search'

import * as S from './styles'

const Main = ({
  description = 'Dúvidas e erros frequentes do curso de React Avançado e coisas relacionadas também.'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
    <S.InputWrapper>
      <Search
        name="search"
        placeholder="Pesquisar"
        type="text"
        icon={<IconSearch />}
      />
    </S.InputWrapper>
  </S.Wrapper>
)

export default Main
