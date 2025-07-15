// 通用类型
export interface BaseEntity {
  id: string
  createdAt: Date
  updatedAt: Date
}

export interface ComponentProps {
  className?: string
  children?: React.ReactNode
}

// API类型
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// 组件分类类型
export type ComponentLevel = 'atom' | 'molecule' | 'organism' | 'template'

// 主题类型
export type Theme = 'light' | 'dark' | 'system'

// 响应式断点
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'