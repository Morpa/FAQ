import { InferGetStaticPropsType } from 'next'
import Main from 'components/Main'
import { getAllFaqsData, FaqProps } from 'lib/faqs'

export default function Home({
  faqs
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <Main faqs={faqs} />
}

export const getStaticProps = async () => {
  const faqs: FaqProps[] = getAllFaqsData()

  return {
    props: {
      faqs
    }
  }
}
