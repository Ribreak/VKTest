import Button from "./Button";
import { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        styleType: {
          control: {
            type: 'radio',
            description: 'Комбинация цветовых токенов',
            defaultValue: 'primary',
            options: ['primary', 'secondary'],
          },
        },
        size: {
          control: {
            type: 'select',
            description: 'Размер компонента',
            defaultValue: 36,
            options: [28, 36, 56],
          },
        },
        state: {
          control: {
            type: 'select',
            description: 'Состояние компонента',
            options: ['enabled', 'loading', 'disabled'],
          },
        },
        counter: {
          control: 'boolean',
          description: 'Отображение счётчика'
        },
        focused: {
          control: 'boolean',
        },
        label: {
          control: 'text',
        },
      },
} satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof meta>;

export const Template: Story = {};