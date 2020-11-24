import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { Container } from 'components/Container'
import { getAllFaqsIds, getFaqData } from 'lib/faqs'

import { ArrowBack, ContentCopy, Done } from '@styled-icons/material-outlined'
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

const Faq = ({ postData }: PostDataProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(location.href)
      setCopied(true)
      /** After 10 seconds, allow to copy again */
      setTimeout(() => setCopied(false), 10000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }
  return (
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
            <S.Header>
              <Link href="/">
                <S.BackLink>
                  <ArrowBack size={25} aria-label="voltar" />
                  Voltar
                </S.BackLink>
              </Link>
              <S.CopyWrapper onClick={handleCopyUrl} role="button">
                {copied ? (
                  <Done size={25} title="Link Copiado!" />
                ) : (
                  <ContentCopy size={25} aria-label="Copiar Link" />
                )}
              </S.CopyWrapper>
            </S.Header>

            <S.Title>{postData.title}</S.Title>
            <S.Content
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </S.ArticleWrapper>
        </motion.div>
      </Container>
    </S.Wrapper>
  )
}

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
