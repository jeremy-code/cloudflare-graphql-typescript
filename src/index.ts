import { CloudflareApolloServer } from "./services/CloudflareApolloServer";
import playground from "./services/playground";

import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import dataSources from "./datasources";
import KVCache from "./services/KVCache";

interface Env {
	WORKERS_GRAPHQL_CACHE: KVNamespace;
}

export default {
	async fetch(req: Request, env: Env): Promise<Response> {
		try {
			if (new URL(req.url).pathname === "/___graphql") {
				return playground(req, { baseEndpoint: "/" });
			}
			const server = new CloudflareApolloServer({
				typeDefs,
				resolvers,
				dataSources,
				cache: new KVCache(env.WORKERS_GRAPHQL_CACHE),
			});
			server.start();
			return server.respond(req);
		} catch (e) {
			if (e instanceof Error) {
				return new Response(e.message, { status: 500 });
			}
			return new Response("Internal server error", { status: 500 });
		}
	},
};
