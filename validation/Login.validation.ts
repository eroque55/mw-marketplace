import { z } from './zod';

export type LoginForm = z.infer<typeof LoginSchema>;

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  rememberMe: z.boolean().optional(),
});

export type ForgotPasswordForm = z.infer<typeof ForgotPasswordSchema>;

export const ForgotPasswordSchema = z.object({
  email: z.string().email(),
});
