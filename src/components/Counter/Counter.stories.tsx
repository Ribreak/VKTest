import Counter from "./Counter";
import { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'Counter',
    component: Counter,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        styleType: {
            type: 'string',
            description: 'Комбинация цветовых токенов',
            defaultValue: 'primary',
            options: ['primary', 'secondary'],
            control: {
                type: 'radio',
            },
        },
        size: {
            type: 'number',
            description: 'Размер компонента',
            defaultValue: 8,
            options: [8, 12, 16, 20, 24],
            control: {
                type: 'select',
            },
        },
        stroke: {
            type: 'boolean',
            description: 'Наличие обводки',
            defaultValue: 'true',
            control: {
                type: 'boolean',
            },
        },
        valueType: {
            options: ['number', 'string'], 
            control: {
              type: 'radio', 
            },
        },
        value: {
            type: 'string',
            description: 'Значение в счётчике',
        },
        pulse: {
            type: 'boolean',
            description: 'Включение пульсирования',
            defaultValue: 'false',
            control: {
                type: 'boolean',
            },
        },
    },
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Template: Story = {};
