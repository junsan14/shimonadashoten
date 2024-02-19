<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MailController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    //dd(App::getLocale());
    return Inertia::render('Home',['userLocale'=>App::getLocale()]);
})->name('home');
Route::post('/', [MailController::class, 'send'])->name('contact.send');


require __DIR__.'/auth.php';
