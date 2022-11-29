import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeConfig } from './config/theme.config';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ThemeConfig>
        <App />
    </ThemeConfig>
)
