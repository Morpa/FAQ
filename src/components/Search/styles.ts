import styled, { css } from 'styled-components'

import { SearchProps } from '.'

type IconPositionProps = Pick<SearchProps, 'iconPosition'>

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray};
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 100%;
    }
  `}
`
export const ListWrapper = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    overflow: hidden;
    top: 100%;
    margin: ${theme.spacings.xxsmall} 0 0;
    padding: 0;
    left: 0;
    right: 0;
  `}
`

export const ListItem = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.2rem;
    background: ${theme.colors.primary};
    margin: 0 0 ${theme.spacings.xxsmall};
    padding: ${theme.spacings.xxsmall};

    a {
      text-decoration: none;
      color: ${theme.colors.white};
      width: fit-content;
      height: fit-content;
    }
  `}
`
