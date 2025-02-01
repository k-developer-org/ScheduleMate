import { ErrorBoundary } from 'react-error-boundary';
import AppRouter from './router-provider';
import { Error } from '@/shared/ui/error';

export function Provider() {
  return (
    <ErrorBoundary fallbackRender={Error} onError={(err) => console.log('error')}>
      <AppRouter />
    </ErrorBoundary>
  )
}