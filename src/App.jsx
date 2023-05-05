import React from "react";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./config/apollo";
import RootRouting from "./config/routing/RootRouting";

export default function App() {
	return (
		<ApolloProvider client={apolloClient}>
			<RootRouting />
		</ApolloProvider>
	);
}
