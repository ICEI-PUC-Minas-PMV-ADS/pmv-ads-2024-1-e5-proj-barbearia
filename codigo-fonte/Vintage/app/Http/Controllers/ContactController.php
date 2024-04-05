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
        Mail::to(env('MAIL_FROM_ADDRESS'))->send(new ContactUs($request));

        return response()->json(['status' => 'Sucesso!'], 200);
    }
}
