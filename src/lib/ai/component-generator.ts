// AI辅助组件生成器

export interface ComponentTemplate {
  name: string
  type: 'atom' | 'molecule' | 'organism' | 'template'
  props: string[]
  styles: 'tailwind' | 'css-modules' | 'styled-components'
}

export function generateComponentTemplate(config: ComponentTemplate) {
  const { name, type, props = [], styles = 'tailwind' } = config
  
  const propsInterface = props.length > 0 
    ? `interface ${name}Props {\n  ${props.map(prop => `${prop}: string`).join('\n  ')}\n}`
    : `interface ${name}Props extends React.HTMLAttributes<HTMLDivElement> {}`

  return `import { cn } from '@/lib/utils'
import { ${name}Props } from '@/types/components'

export function ${name}({ ${props.join(', ')}, className, children }: ${name}Props) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  )
}`
}

export function generateStoryTemplate(name: string) {
  return `import type { Meta, StoryObj } from '@storybook/react'
import { ${name} } from './${name.toLowerCase()}'

const meta: Meta<typeof ${name}> = {
  title: 'Components/${name}',
  component: ${name},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}`
}