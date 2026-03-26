import { z } from 'zod';

export const FlagLayoutSchema = z.enum(['tricolor-horizontal', 'tricolor-vertical']);

export type FlagLayout = z.infer<typeof FlagLayoutSchema>;
