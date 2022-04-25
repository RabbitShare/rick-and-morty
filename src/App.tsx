import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Characters } from './components/Characters/Characters';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export function App() {
  return (
    <ApolloProvider client={client}>
      <Characters />
    </ApolloProvider>
  );
}
