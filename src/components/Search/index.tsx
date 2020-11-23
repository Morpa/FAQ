import { InputHTMLAttributes, useState } from 'react'
import { motion } from 'framer-motion'
import { FaqProps } from 'lib/faqs'

import { useCombobox } from 'downshift'
import Link from 'next/link'
import { useRouter } from 'next/router'

import * as S from './styles'

export type SearchProps = {
  onInput?: (value: string) => void
  label?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  faqs?: FaqProps[]
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
  initialValue = '',
  faqs = [],
  onInput,
  ...props
}: SearchProps) => {
  const [value, setValue] = useState(initialValue)
  const [results, setResults] = useState<FaqProps[]>(faqs)
  const router = useRouter()

  function routeToFaq(faq: FaqProps) {
    router.push({
      pathname: '/faqs/[slug]',
      query: { slug: faq.slug }
    })
  }

  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
    openMenu
  } = useCombobox({
    id: 'faq-autosuggest',
    items: results,
    inputValue: value,
    stateReducer: (state, actionAndChanges) => {
      const { changes, type } = actionAndChanges
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true
          }
      }
      return changes
    },
    onStateChange: ({ inputValue, type, selectedItem }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          {
            if (inputValue !== undefined) {
              setValue(inputValue)
              setResults(
                faqs.filter((faq: FaqProps) =>
                  faq.slug.toLowerCase().includes(inputValue.toLowerCase())
                )
              )
              !!onInput && onInput(inputValue)
            }
          }
          break
        //case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.InputBlur:
          selectedItem && routeToFaq(selectedItem)
          break
        default:
          break
      }
    }
  })

  /** Open menu by default */
  !isOpen && openMenu()

  return (
    <>
      {label && <S.Label {...getLabelProps()}>{label}</S.Label>}
      <S.InputWrapper {...getComboboxProps()}>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          {...getInputProps()}
          value={value}
          iconPosition={iconPosition}
          {...props}
        />
      </S.InputWrapper>
      <S.ListWrapper {...getMenuProps()}>
        {isOpen &&
          results.map((faq, index) => (
            <motion.div
              key={faq.slug}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <S.ListItem>
                <Link
                  href="/faqs/[slug]"
                  as={`/faqs/${faq.slug}`}
                  scroll={false}
                  passHref
                >
                  <S.Anchor
                    highlighted={index === highlightedIndex}
                    {...getItemProps({
                      item: faq,
                      index
                    })}
                    title={faq.title}
                  >
                    {faq.title}
                  </S.Anchor>
                </Link>
              </S.ListItem>
            </motion.div>
          ))}
        {!results.length && (
          <S.ListItemNotFound>
            Nenhum resultado encontrado para {` `}
            <span>{value}</span>
          </S.ListItemNotFound>
        )}
      </S.ListWrapper>
    </>
  )
}

export default Search
