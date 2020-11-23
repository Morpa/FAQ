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
`
export const ArticleWrapper = styled.article`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightBg};
    color: ${theme.colors.black};
    line-height: 2.8rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3rem;
    margin-top: 5rem;
  `}
`
export const Title = styled.h1`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xxlarge};
    margin-top: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.medium};
    word-wrap: break-word;
    overflow-wrap: break-word;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    word-wrap: break-word;
    overflow-wrap: break-word;
    h3 {
      font-size: ${theme.font.sizes.xlarge};
      margin: ${theme.spacings.xsmall} 0;
    }
    code {
      font-size: ${theme.font.sizes.xlarge};
      font-family: monospace;
      font-weight: ${theme.font.bold};
      padding: 0 0.4rem;
      margin: 0 0.2rem;
      background-color: #d1d5db;
    }

    pre {
      background-color: ${theme.colors.black};
      border-radius: ${theme.border.radius};
      padding: ${theme.spacings.small};
      margin: ${theme.spacings.xxsmall} 0;
      white-space: pre-wrap;
      word-wrap: break-word;
      overflow-wrap: break-word;

      & > code {
        font-size: ${theme.font.sizes.medium};
        font-weight: ${theme.font.light};
        font-family: monospace;
        color: ${theme.colors.white};
        background-color: transparent;
      }
    }

    ul {
      list-style: none;
      margin: ${theme.spacings.xxsmall} 0;

      & > li::before {
        content: '\u2714';
        font-size: ${theme.font.sizes.xlarge};
        color: ${theme.colors.primary};
        margin-right: ${theme.spacings.xxsmall};
      }
    }

    ol {
      margin: ${theme.spacings.xxsmall} 0;
      position: relative;
      left: ${theme.spacings.xsmall};

      & > li::marker {
        color: ${theme.colors.primary};
        font-weight: ${theme.font.bold};
      }
    }
  `}
`

export const BackLink = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    cursor: pointer;
  `}
`
