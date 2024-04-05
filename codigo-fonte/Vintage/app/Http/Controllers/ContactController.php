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
        Mail::to($request->email)->send(new ContactUs($request));

        return response()->json(['status' => 'Sucesso!'], 200);
    }
}
