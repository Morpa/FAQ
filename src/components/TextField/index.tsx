import { InputHTMLAttributes, useState } from 'react'
import Link from 'next/link'

import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  icon,
  iconPosition = 'left',
  label,
  labelFor = '',
  initialValue = '',
  onInput,
  ...props
}: TextFieldProps) => {
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
          {results.map(({ id, title }) => (
            <S.ListItem key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
            </S.ListItem>
          ))}
        </S.ListWrapper>
      )}
    </>
  )
}

export default TextField
