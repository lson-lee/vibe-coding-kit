import { z } from 'zod'

// 通用模式
export const idSchema = z.string().uuid()
export const slugSchema = z.string().regex(/^[a-z0-9-]+$/)

// 组件配置模式
export const componentConfigSchema = z.object({
  className: z.string().optional(),
  children: z.any().optional(),
})

// API响应模式
export const apiResponseSchema = z.object({
  success: z.boolean(),
  data: z.any().optional(),
  error: z.string().optional(),
  message: z.string().optional(),
})

// 分页模式
export const paginationSchema = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(10),
  total: z.number().min(0),
  totalPages: z.number().min(1),
})