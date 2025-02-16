import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './tailwind.css';
import './../src/character-list/index.css';
import App from './character-list/app';

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
