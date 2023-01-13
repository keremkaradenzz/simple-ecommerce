import Header from './components/Header';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box'
import List from './components/Product/List';
import { QueryClient, QueryClientProvider } from 'react-query';
function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: 'white', height: '100vh' }} >
          <Header />
          <List />
        </Box>
      </Container>
    </QueryClientProvider>
  );
}

export default App;
