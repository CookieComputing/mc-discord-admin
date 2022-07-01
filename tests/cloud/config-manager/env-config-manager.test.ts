import { EnvConfigManager } from '../../../cloud/config-manager/env-config-manager';

describe('env config manager should behave like a dictionary', () => {
  let envConfigManager: EnvConfigManager;
  beforeEach(() => {
    // Set to a blank env file
    envConfigManager = new EnvConfigManager(`${__dirname}/.env`);
  });

  afterEach(() => {
    delete process.env.hi;
    delete process.env.h;
  });

  test('getting should return the most recently putted value', () => {
    expect(envConfigManager.put('hi', '123')).resolves.toBe(true);
    expect(envConfigManager.get('hi')).resolves.toBe('123');
    expect(envConfigManager.put('hi', '321')).resolves.toBe(true);
    expect(envConfigManager.get('hi')).resolves.toBe('321');
  });

  test('setting different values on different keys should not interfere', () => {
    expect(envConfigManager.put('h', '1')).resolves.toBeTruthy();
    expect(envConfigManager.put('hi', '2')).resolves.toBeTruthy();
    expect(envConfigManager.get('h')).resolves.toBe('1');
    expect(envConfigManager.get('hi')).resolves.toBe('2');
  });

  test('env config manager should return undefined if returned string is undefined', () => {
    expect(envConfigManager.get('hi')).resolves.toBe(undefined);
  });

  test('deleting should remove the value if a value was set', () => {
    expect(envConfigManager.put('hi', '123')).resolves.toBeTruthy();
    expect(envConfigManager.get('hi')).resolves.not.toBeUndefined();
    expect(envConfigManager.del('hi')).resolves.toBeTruthy();
    expect(envConfigManager.get('hi')).resolves.toBeUndefined();
  });

  test('deleting should return false if no value was set', () => {
    expect(envConfigManager.del('nothing')).resolves.toBeFalsy();
  });

  test('deleting twice should return false', () => {
    expect(envConfigManager.put('hi', '123')).resolves.toBeTruthy();
    expect(envConfigManager.del('hi')).resolves.toBeTruthy();
    expect(envConfigManager.del('hi')).resolves.toBeFalsy();
  });
});
