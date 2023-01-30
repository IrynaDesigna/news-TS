import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', { apiKey: '6759f0f6f59e43a19d84dc41e045debf' });
    }
}

export default AppLoader;
