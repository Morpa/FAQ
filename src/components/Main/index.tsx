import Link from 'next/link'
import {
  Search as IconSearch,
  QuestionAnswer
} from '@styled-icons/material-outlined'
import GithubCorner from 'react-github-corner'

import { FaqProps } from 'lib/faqs'

import Search from 'components/Search'
import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

type MainProps = {
  faqs?: FaqProps[]
}

const Main = ({ faqs = [] }: MainProps) => {
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <S.Logo
          src="/img/logo.svg"
          alt="Imagem de um átomo e React Avançado escrito ao lado."
        />
        <S.Faq>FAQ</S.Faq>
      </S.LogoWrapper>
      <S.Hero>
        <S.Description>
          <Heading>
            <MediaMatch greaterThan="large">
              <QuestionAnswer size={60} />
            </MediaMatch>
            Dúvidas e erros frequentes do curso de {` `}
            <Link href="https://reactavancado.com.br/">
              <a>React Avançado</a>
            </Link>
            {` `} e coisas relacionadas também.
          </Heading>
        </S.Description>
        <S.Illustration
          src="/img/faq.svg"
          alt="Duas pessoas com um ponto interrogação."
        />
      </S.Hero>
      <S.InputWrapper>
        <Search
          aria-label="Procure entre perguntas mais frequentes"
          placeholder="Pesquisar"
          icon={<IconSearch />}
          faqs={faqs}
        />
      </S.InputWrapper>
      <GithubCorner bannerColor="#F231A5" href="https://github.com/morpa/FAQ" />
    </S.Wrapper>
  )
}

export default Main
