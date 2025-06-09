import { z } from './zod';

export type AddressForm = z.infer<typeof AddressSchema>;

export const AddressSchema = z.object({
  city: z.string(),
  cep: z.string().min(8, 'CEP deve ter 8 caracteres'),
  address: z.string(),
  number: z.string(),
  complement: z.string().optional(),
});

export type PersonalDataForm = z.infer<typeof PersonalDataSchema>;

export const PersonalDataSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  celphone: z.string().min(15, 'Celular deve ter 11 caracteres'),
  phone: z
    .string()
    .optional()
    .refine(value => !value || value?.length === 0 || value!.length >= 14, {
      message: 'Telefone deve ter no minímo 10 caracteres',
    }),
});

export type PhotoForm = z.infer<typeof PhotoSchema>;

export const PhotoSchema = z.object({
  photo: z.string().min(1, 'Foto é obrigatória'),
});
