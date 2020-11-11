import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    display: flex;
    flex-direction: column;
    padding: 3rem;
    align-items: center;
    justify-content: center;

    a {
      color: ${theme.colors.primary};
      margin-bottom: 1rem;
      text-decoration: none;
    }

    svg {
      color: ${theme.colors.primary};
      size: 1rem;
    }
  `}
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 5rem;
`
export const ArticleWrapper = styled.article`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightBg};
    color: ${theme.colors.black};
    line-height: 2.8rem;
    display: flex;
    flex-direction: column;
    padding: 13rem;
    align-items: flex-start;
  `}
`
export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xxlarge};
    margin-bottom: ${theme.spacings.medium};
  `}
`
