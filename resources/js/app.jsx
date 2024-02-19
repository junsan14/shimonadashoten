import './bootstrap';
import '../css/app.scss';
import '../css/reset.css';
import './script';



import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
createInertiaApp({
    title: (title) => `${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        window.__ = window.trans = (key = null, replace = {}, locale = null) => {
            const {currentLocale, localeData} = props.initialPage.props.locale;
            const userLocale = props.initialPage.props.userLocale;
            //console.log(userLocale)
            if(locale === null) {

                locale = userLocale;

            }

            let translatedText = localeData[locale][key] || key;

            for(let key in replace) {

                const replacingValue = replace[key];
                translatedText = translatedText.replace(`:${key}`, replacingValue);

            }

            return translatedText;

        };
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: 'white',
    },
});
