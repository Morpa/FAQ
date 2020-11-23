import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { SearchProps } from '.'

type IconPositionProps = Pick<SearchProps, 'iconPosition'>

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
      border-color: ${theme.colors.primary};
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
export const ListItem = styled.li``

export const ListItemNotFound = styled.li`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-style: italic;
    font-weight: ${theme.font.light};
    color: ${theme.colors.lightGray};
    text-align: left;

    span {
      color: ${theme.colors.secondary};
      font-weight: ${theme.font.bold};
    }
  `}
`

type AnchorProps = {
  highlighted?: boolean
}

const anchorModifiers = {
  highlighted: (theme: DefaultTheme) => css`
    background: ${darken(0.15, theme.colors.primary)};
    padding-left: ${theme.spacings.small};
    border-left: 0.4rem solid ${darken(0.1, theme.colors.secondary)};
  `
}

export const Anchor = styled.a<AnchorProps>`
  ${({ theme, highlighted }) => css`
    display: block;
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    margin-bottom: 0.3rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    transition: ${theme.transition.fast};
    text-decoration: none;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${highlighted && anchorModifiers.highlighted(theme)}
  `}
`
