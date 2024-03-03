<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $locale_data = [];
        $locales = ['ja', 'zh', 'en']; // 👈 できれば Enum での管理がベターです

        foreach ($locales as $locale) {

            $json_path = lang_path($locale .'.json');
            $json_content = file_get_contents($json_path);
            $locale_data[$locale] = json_decode($json_content, true);

        }
        $default_locale = config('app.locale');
        $current_locale = request('locale', $default_locale);
        
        //dd($current_locale);

        Inertia::share('locale', [
            'currentLocale' => $current_locale,
            'localeData' => $locale_data,
            'userLocale'=>App::getLocale(),
        ]);
        //dd($current_locale );
        
        return Inertia::render('Home');
        

    }
}
