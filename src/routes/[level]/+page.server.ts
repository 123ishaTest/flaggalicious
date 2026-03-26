import type { EntryGenerator, PageServerLoad } from './$types';
import { ContentManager, Louter, LouterValidator, LouterYamlParser } from '@123ishatest/louter';
import { schemas } from '$lib/content/schemas.ts';
import { LouterFileLoader } from '@123ishatest/louter/node';

export const load: PageServerLoad = async ({ parent, params }) => {
  const data = await parent();

  const contentManager = new ContentManager(schemas);
  contentManager.load(data.content);
  const levelId = params.level;
  const pack = contentManager.get('/pack/global', 'pack');
  const puzzleId = pack.levels[levelId];

  const flag = contentManager.get(puzzleId, 'flag');

  return {
    flag: flag,
  };
};

export const entries: EntryGenerator = () => {
  const result = new Louter([new LouterFileLoader('content'), new LouterYamlParser(), new LouterValidator()]).run(
    schemas,
  );
  return Object.keys(result.content.pack['/pack/global'].levels).map((level) => {
    return { level: level };
  });
};
