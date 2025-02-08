import { ErrorBoundary } from 'react-error-boundary';
import Cart from './components/Cart';

function App() {
  return (
    <ErrorBoundary fallback={<p>Oops... 오류 발생! 😥</p>}>
      <Cart />
    </ErrorBoundary>
  );
}

export default App;
