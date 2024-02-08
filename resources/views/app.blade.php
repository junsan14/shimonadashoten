<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <!-- Google Tag Manager -->
            <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5H5PT428');</script>
        <!-- End Google Tag Manager -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        <meta inertia head-key="description" name="description" content="海に最も近い駅の1つとして有名な愛媛県伊予市に位置する下灘駅に小売店が24年2月10日OPEN!長年未使用だった駅室の一角で伊予市ならではのお土産やJR商品を販売しています。" />
        <meta inertia property="og:description" content="海に最も近い駅の1つとして有名な愛媛県伊予市に位置する下灘駅に小売店が24年2月10日OPEN!長年未使用だった駅室の一角で伊予市ならではのお土産やJR商品を販売しています。" />
        <meta property="og:title" content="下灘商店｜海が見える駅のお土産屋さん" />
        <meta property="og:image" content="{{ asset('og.webp') }}" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shimonada-shoten.com/" />
        <link rel="icon" type="svg+xml" sizes="32x32" href="{{ asset('favicon.png') }}"" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased noscroll">
        <!-- Google Tag Manager (noscript) -->
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5H5PT428"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
        @inertia
    </body>
</html>
