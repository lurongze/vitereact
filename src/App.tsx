import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { RecoilRoot } from 'recoil';
import AppRoutes from '@/routes/index';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps): JSX.Element {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function handleResetApp(): void {
  console.log('handleResetApp!');
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleResetApp}>
      <RecoilRoot>
        <AppRoutes />
      </RecoilRoot>
    </ErrorBoundary>
  );
}

export default App;
