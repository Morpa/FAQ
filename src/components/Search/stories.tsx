import { Story, Meta } from '@storybook/react/types-6-0'
import { Email } from '@styled-icons/material-outlined'

import Search, { SearchProps } from '.'

export default {
  title: 'Form/Search',
  component: Search,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    icon: <Email />,
    id: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com'
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' }
  }
} as Meta

export const Default: Story<SearchProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <Search {...args} />
  </div>
)
