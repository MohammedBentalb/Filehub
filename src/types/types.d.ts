import { AuthUserSchema } from '../lib/zod/AuthSchema';
import z from 'zod';

export type AuthUserType = z.infer<typeof AuthUserSchema>;
