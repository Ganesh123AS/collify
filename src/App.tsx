import QueryClientProvider from './providers/QueryClient/ShellQueryClientProvider';
import { ErrorBoundary } from './components/errors/ErrorBoundary'
import { RouterProvider } from 'react-router';
import { appRoutes } from './routes/appRoutes';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <QueryClientProvider>
          <Suspense fallback={<p>Loading module...</p>}>
            <ToastContainer position="top-right" autoClose={3000} />
            <RouterProvider router={appRoutes} />
          </Suspense>
        </QueryClientProvider>

      </ErrorBoundary>
    </>
  )
}

export default App;
