import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.white};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 3rem;
    align-items: center;
    justify-content: center;
  `}
`
export const Description = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};

    a {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        transition: ${theme.transition.default};
      }
    }

    svg {
      color: ${theme.colors.secondary};
    }
    ${media.greaterThan('medium')`
      text-align: left;
    `}
  `}
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`

export const InputWrapper = styled.div`
  width: 100%;
  margin-top: 3rem;

  ${media.greaterThan('medium')`
    width: 70%;
  `}
`
export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${media.greaterThan('medium')`
    display: flex;
    flex-direction: row;
    width: 70%;
  `}
`
export const Logo = styled.img`
  width: 25rem;
  margin-right: 1rem;
`

export const Faq = styled.div`
  ${({ theme }) => css`
    background-image: linear-gradient(45deg, #8a2387, #f23131);
    font-family: '${theme.font.family}';
    font-size: ${theme.font.sizes.huge};
    font-weight: 900;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    padding-right: ${theme.spacings.xxsmall};
    letter-spacing: -5px;
  `}
`

export const Hero = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
    ${media.greaterThan('medium')`
      width: 70%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      align-items: center;
    `};
  `}
`
