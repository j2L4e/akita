import { PreAddEntity } from './types';

// @internal
export function toEntitiesObject<E>(entities: E[], getId: ((entity: E) => string | number), preAddEntity: PreAddEntity<E>) {
  const acc = {
    entities: {},
    ids: []
  };

  for (const entity of entities) {
    // evaluate the middleware first to support dynamic ids
    const current = preAddEntity(entity);
    const currentId = getId(current);
    acc.entities[currentId] = current;
    acc.ids.push(currentId);
  }

  return acc;
}
