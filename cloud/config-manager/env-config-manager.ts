import { ConfigManager } from './config-manager';
import * as dotenv from 'dotenv';
import path from 'path';

/**
 * A config manager that uses the root .env file stored in the repository.
 */
export class EnvConfigManager implements ConfigManager {
  constructor(envPath = `${path.dirname(path.dirname(__dirname))}/.env`) {
    // Root directory .env file
    dotenv.config({ path: envPath });
  }

  async get(key: string) {
    return process.env[key];
  }

  async put(key: string, value: string) {
    process.env[key] = value;
    return true;
  }

  async del(key: string) {
    if (process.env[key] === undefined) return false;
    delete process.env[key];
    return true;
  }
}