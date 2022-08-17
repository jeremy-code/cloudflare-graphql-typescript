import { KeyValueCache } from "@apollo/utils.keyvaluecache";
import type { KeyValueCacheSetOptions } from "@apollo/utils.keyvaluecache";

class KVCache<K extends string = string> implements KeyValueCache {
	private kvCache: KVNamespace<K>;

	constructor(kvCache: KVNamespace) {
		this.kvCache = kvCache;
	}

	async get(key: K) {
		return (await this.kvCache.get(key)) ?? undefined;
	}

	async set(key: K, value: string, options: KeyValueCacheSetOptions) {
		const opts: KVNamespacePutOptions | undefined = options.ttl
			? { expirationTtl: options.ttl }
			: undefined;
		return await this.kvCache.put(key, value, opts);
	}

	async delete(key: K) {
		return await this.kvCache.delete(key);
	}
}

export default KVCache;
