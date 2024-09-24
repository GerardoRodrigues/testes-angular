import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const id = service.generatedUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should not generete duplicade ids when called multiple time`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generatedUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return number of generetedIds when called`, () => {
    service.generatedUniqueIdWithPrefix('app');
    service.generatedUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should throw when called with empty`, () => {
    const emptyValues = [null, undefined, '', '0', '125'];
    emptyValues.forEach(emptyValues => {
      expect(() => service.generatedUniqueIdWithPrefix(emptyValues)).withContext(`Empty value: ${emptyValues}`).toThrow();
    })
  });
});