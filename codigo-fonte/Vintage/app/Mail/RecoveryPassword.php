<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class RecoveryPassword extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Build the message.
     *
     * @return $this
     */
    public $token;

     public function __construct($token)
     {
        $this->token = $token;
     }
    public function build()
    {
        return $this->subject('Recuperação de Senha')
                    ->view('emails.RecoveryPassword')
                    ->with('token', $this->token)
                    ->attach(public_path('img/logo-vintage.jpg'), [
                        'as' => 'logo-vintage.jpg',
                        'mime' => 'image/jpeg',
                    ]);
    }
}
