import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeConfig } from './config/theme.config';
import { Provider } from 'react-redux'
import store from './redux/store';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <ThemeConfig>
            <App />
        </ThemeConfig>
    </Provider>
)
