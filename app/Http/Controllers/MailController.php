<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;
use App\Mail\CheckMail;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;


class MailController extends Controller
{
    public function send(Request $request)
    {
        //dd($request->user_name);
       Mail::to($request->user_email)->send(new ContactMail($request));
       Mail::to('info@shimonada-shoten.com')->send(new CheckMail($request));
       return Redirect::back();

    }
}
