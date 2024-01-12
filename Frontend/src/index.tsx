import ReactDOM from 'react-dom/client'
import './app/styles/index.scss'
import App from './app/App'
import { ThemeProvider } from './app/provider/ThemeProvider/ui/ThemeProvider'
ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider>
        <App></App>        
    </ThemeProvider>

)