import Link from 'next/link'
import { Search as IconSearch } from '@styled-icons/material-outlined'
import GithubCorner from 'react-github-corner'

import { FaqProps } from 'lib/faqs'

import Search from 'components/Search'

import * as S from './styles'

type MainProps = {
  description?: string
  faqs?: FaqProps[]
}

const Main = ({
  description = 'Dúvidas e erros frequentes do curso de React Avançado e coisas relacionadas também.',
  faqs = []
}: MainProps) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.Description>
        <Link href="https://reactavancado.com.br/">
          <a>{description}</a>
        </Link>
      </S.Description>
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
          faqs={faqs}
        />
      </S.InputWrapper>
      <GithubCorner bannerColor="#F231A5" href="https://github.com/morpa/FAQ" />
    </S.Wrapper>
  )
}

export default Main
