/**
 * A config manager is a vendor-specific manager which supports key-value
 * data stores, which is useful for maintaining strings in a cloud environment
 * without having to store production data locally. A ConfigManager should
 * ideally pass authentication upon construction and be ready to use when
 * possible.
 */
export interface ConfigManager {
  /**
   * Returns the value at the index key, undefined if no key was found.
   * @param key The index key
   */
  get(key: string): Promise<string | undefined>;

  /**
   * Store a key value pair in the config manager. True if set, false otherwise.
   * @param key The key used to index the value
   * @param value The string value to store in the manager.
   */
  put(key: string, value: string): Promise<boolean>;

  /**
   * Clear the key from the config manager. Returns true if successfully deleted,
   * false otherwise.
   * @param key the key indexing the key value pair to be deleted.
   */
  del(key: string): Promise<boolean>;
}