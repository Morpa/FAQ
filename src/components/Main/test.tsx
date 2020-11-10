import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
