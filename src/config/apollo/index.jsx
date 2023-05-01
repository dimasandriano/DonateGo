import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const wsLink = new GraphQLWsLink(
	createClient({
		url: "wss://donatego.hasura.app/v1/graphql",
		connectionParams: {
			headers: {
				"x-hasura-admin-secret":
					"rbZrgM5Bl4kKzmhi8fyqMpHkXBTPCe6xIqzOOiwQyzjTLfA14YhmLVUK2nwhjeua",
			},
		},
	})
);

const httpLink = new HttpLink({
	uri: "https://donatego.hasura.app/v1/graphql",
	headers: {
		"x-hasura-admin-secret":
			"rbZrgM5Bl4kKzmhi8fyqMpHkXBTPCe6xIqzOOiwQyzjTLfA14YhmLVUK2nwhjeua",
	},
});

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === "OperationDefinition" &&
			definition.operation === "subscription"
		);
	},
	wsLink,
	httpLink
);

const apolloClient = new ApolloClient({
	link: splitLink,
	cache: new InMemoryCache(),
});

export default apolloClient;
