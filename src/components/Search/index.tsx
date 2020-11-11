import { InputHTMLAttributes, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import * as S from './styles'

export type SearchProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
} & InputHTMLAttributes<HTMLInputElement>

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', delay: 0.5 }
  },
  exit: {
    x: '-100vh',
    transition: { ease: 'easeInOut' }
  }
}

const Search = ({
  icon,
  iconPosition = 'left',
  label,
  labelFor = '',
  initialValue = '',
  onInput,
  ...props
}: SearchProps) => {
  const [value, setValue] = useState(initialValue)
  const [results, setResults] = useState([])

  const searchEndpoint = (value: string) => `/api/search?q=${value}`

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value

    setValue(newValue)

    !!onInput && onInput(newValue)

    if (value.length > 1) {
      fetch(searchEndpoint(value))
        .then((res) => res.json())
        .then((res) => {
          setResults(res.results)
        })
    } else {
      setResults([])
    }
  }

  return (
    <>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          {...props}
        />
      </S.InputWrapper>
      {results && (
        <S.ListWrapper>
          {results.map(({ slug, title }) => (
            <motion.div
              key={slug}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <S.ListItem>
                <Link href="/faqs/[slug]" as={`/faqs/${slug}`}>
                  <a>{title}</a>
                </Link>
              </S.ListItem>
            </motion.div>
          ))}
        </S.ListWrapper>
      )}
    </>
  )
}

export default Search
