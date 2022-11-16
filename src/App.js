import { QueryClient, QueryClientProvider } from 'react-query';
import { HackerNewsRoutes } from './Routes';
import './App.css';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
            staleTime: Infinity,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <HackerNewsRoutes />
        </QueryClientProvider>
    );
}

export default App;
