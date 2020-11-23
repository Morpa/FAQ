import { screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Email } from '@styled-icons/material-outlined'

import { renderWithTheme } from 'utils/tests/helpers'

import Search from '.'

import faqs from './mock'

describe('<Search />', () => {
  it('Renders with Label', () => {
    renderWithTheme(<Search label="label" />)

    expect(screen.getByRole('textbox', { name: 'label' })).toBeInTheDocument()
  })

  it('Renders without Label', () => {
    renderWithTheme(<Search />)

    expect(
      screen.queryByRole('textbox', { name: 'label' })
    ).not.toBeInTheDocument()
  })

  it('Renders with placeholder', () => {
    renderWithTheme(<Search placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Renders with Icon', () => {
    renderWithTheme(<Search icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('Renders with Icon on the right side', () => {
    renderWithTheme(
      <Search icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('should be focused by default', () => {
    renderWithTheme(<Search label="Search" id="Search" />)

    const input = screen.getByRole('textbox', { name: /search/i })
    expect(input).toHaveFocus()
  })

  it('should render all results by default', () => {
    renderWithTheme(<Search faqs={faqs} />)

    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })

  it('should highlight first element on ArrowDown', async () => {
    renderWithTheme(<Search faqs={faqs} />)

    const firstElement = screen.getByText('Primeiro')

    expect(firstElement).toHaveStyle({
      paddingLeft: '1.6rem',
      background: '#F231A5'
    })

    const input = screen.getByRole('textbox')

    fireEvent.keyDown(input, { key: 'ArrowDown', which: 40, keyCode: 40 })

    expect(firstElement).toHaveStyle({
      paddingLeft: '2.4rem',
      background: '#CA0D7E'
    })
  })

  it('should show a message when results not found', async () => {
    renderWithTheme(<Search faqs={faqs} />)

    const input = screen.getByRole('textbox')

    const text = 'test'

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(
        screen.getByText(/nenhum resultado encontrado para/i)
      ).toBeInTheDocument()
      expect(screen.getByText(/test/i)).toBeInTheDocument()
    })
  })
})
