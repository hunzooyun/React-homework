import { ErrorBoundary } from 'react-error-boundary';
import CardListPage from './card-list/index';

function App() {
  return (
    <ErrorBoundary fallback={<p>Oops... 오류 발생! 😥</p>}>
      <CardListPage />
    </ErrorBoundary>
  );
}

export default App;
