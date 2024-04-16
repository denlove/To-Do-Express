import App from './providers/App'

const bootApp = () => {
    App.loadEnvConfig()
    App.loadDatabase()
    App.loadServer()
}

bootApp()
