import type { PageServerLoad } from './$types';
import { Louter, LouterValidator, LouterYamlParser } from '@123ishatest/louter';
import { LouterFileLoader, LouterJsonSchemaWriter } from '@123ishatest/louter/node';
import { schemas } from '$lib/content/schemas.ts';

export const load: PageServerLoad = async () => {
  const louter = new Louter([
    new LouterFileLoader('content'),

    new LouterYamlParser(),

    new LouterValidator(),

    // Writes utility JSON Schemas to the specified folder
    new LouterJsonSchemaWriter('.louter'),
  ]);

  const result = louter.run(schemas);

  // Check for warnings
  result.warnings.forEach(console.warn);

  return {
    content: result.content,
    warnings: result.warnings,
  };
};
