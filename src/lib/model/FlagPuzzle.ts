import { z } from 'zod';
import { FlagLayoutSchema } from '$lib/model/FlagLayout.ts';
import { FlagColourSchema } from '$lib/model/FlagColour.ts';

export const FlagPuzzleSchema = z
  .strictObject({
    id: z.string(),
    country: z.string(),
    hint: z.string(),
    layout: FlagLayoutSchema,

    options: z.array(FlagColourSchema),
    solution: z.record(z.string(), FlagColourSchema),
  })
  .refine(
    (flag) => {
      return Object.values(flag.solution).every((solution) => {
        return flag.options.includes(solution);
      });
    },
    { error: 'Options do not contain all solutions' },
  );

export type FlagPuzzle = z.infer<typeof FlagPuzzleSchema>;
