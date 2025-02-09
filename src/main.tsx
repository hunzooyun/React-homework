import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './tailwind.css';
import App from '@/app';

const root = document.getElementById('root');

if (root) {
  createRoot(root, {
    identifierPrefix: 'euid-',
  }).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
