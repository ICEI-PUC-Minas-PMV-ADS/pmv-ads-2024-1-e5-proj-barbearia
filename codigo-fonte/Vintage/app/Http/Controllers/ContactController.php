<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Mail\ContactUs;
use Illuminate\Http\Request;
use Mail;

class ContactController extends Controller
{
    public function contact (ContactRequest $request)
    {
        Mail::to('guilherme.gomes.1384292@sga.pucminas.br')->send(new ContactUs($request));

    }
}
