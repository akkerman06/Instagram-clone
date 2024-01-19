import ReactDOM from 'react-dom/client'
import './app/styles/index.scss'
import App from './app/App'
import { ThemeProvider } from './app/provider/ThemeProvider/ui/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import './shared/config/i18n';
import { StoreProvider } from './app/provider'

ReactDOM.createRoot(document.getElementById("root")).render(
    <StoreProvider>
        <ThemeProvider>
            <BrowserRouter>
                <App></App>   
            </BrowserRouter>
        </ThemeProvider>        
    </StoreProvider>
);