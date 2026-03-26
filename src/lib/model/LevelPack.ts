import { z } from 'zod';

export const LevelPackSchema = z.strictObject({
  id: z.string(),
  title: z.string(),
  levels: z.record(z.string(), z.string()),
});

export type LevelPack = z.infer<typeof LevelPackSchema>;
