import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeConfig } from './config/theme.config';
import { Provider } from 'react-redux'
import store from './redux/store';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Suspense } from 'react';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Suspense fallback={<></>}>
        <Provider store={store}>
            <ThemeConfig>
                <App />
            </ThemeConfig>
        </Provider>
    </Suspense>
)
