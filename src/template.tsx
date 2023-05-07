import ReactDOM from 'react-dom/client';
import { App } from './App';
import styleTemplate from './template.module.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <div className={styleTemplate.body_background}>
    <App />
  </div>
);
