import styled, { css } from 'styled-components'

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

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`

export const InputWrapper = styled.div`
  width: 60%;
  margin-top: 3rem;
`
