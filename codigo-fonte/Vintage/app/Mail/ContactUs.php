<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactUs extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Build the message.
     *
     * @return $this
     */

    public $name;
    public $telephone;
    public $email;
    public $msg;
    
    public function __construct($request)
    {
        $this->name = $request->name;
        $this->telephone = $request->telephone;
        $this->email = $request->email;
        $this->msg = $request->message;
    }

    public function build ()
    {
        return $this->subject('Contato')
                ->view('emails.ContactUs')
                ->with([
                    'name' => $this->name,
                    'telephone' => $this->telephone,
                    'email' => $this->email,
                    'message' => $this->msg,
                ]);
    }
}
