import './bootstrap';
import '../css/app.scss';
import '../css/reset.css';
import './Script';



import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';


createInertiaApp({
    title: (title) => `${__(':title')}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        window.__ = window.trans = (key = null, replace = {}, locale = null) => {
            const {currentLocale, localeData} = props.initialPage.props.locale;
            const userLocale = currentLocale? currentLocale : props.initialPage.props.userLocale;
            //console.log(props.initialPage.props)
            locale = userLocale;
            
            let translatedText = localeData[locale][key] || key;
            //console.log(locale)
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
