import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 3rem;
    flex-flow: column wrap;
    align-items: baseline;
    justify-content: flex-start;
    align-self: auto;

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
    display: block;
    flex-direction: column;
    align-items: flex-start;
    padding: 3rem;

    p {
      word-break: break-word;
    }
  `}
`
export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xxlarge};
    margin-bottom: ${theme.spacings.medium};
  `}
`
