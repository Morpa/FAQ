import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { Container } from 'components/Container'
import { getAllFaqsIds, getFaqData } from 'lib/faqs'

import { ArrowBack } from '@styled-icons/material-outlined'
import * as S from 'styles/faq-styles'

type PostDataProps = {
  postData: {
    title: string
    contentHtml: string
  }
}

type ParamsProps = {
  params: {
    slug: string
  }
}

const Faq = ({ postData }: PostDataProps) => (
  <S.Wrapper>
    <Link href="/">
      <a>
        <S.Logo
          src="/img/logo.svg"
          alt="Imagem de um átomo e React Avançado escrito ao lado."
        />
      </a>
    </Link>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <Container>
      <motion.div
        initial={{ transform: 'translateY(100%)' }}
        animate={{ transform: 'translateY(0px)' }}
        exit={{ transform: 'translateY(100%)' }}
      >
        <S.ArticleWrapper>
          <Link href="/">
            <S.BackLink>
              <ArrowBack size={25} />
              Voltar
            </S.BackLink>
          </Link>

          <S.Title>{postData.title}</S.Title>
          <S.Content
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </S.ArticleWrapper>
      </motion.div>
    </Container>
  </S.Wrapper>
)

export async function getStaticPaths() {
  const paths = getAllFaqsIds()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: ParamsProps) {
  const postData = await getFaqData(params.slug)

  return {
    props: {
      postData
    }
  }
}

export default Faq
