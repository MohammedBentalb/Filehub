import z from 'zod';

export const AuthUserSchema = z.object({
  firstName: z.string(),
  photoName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  id: z.string(),
});
