<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PasswordReset extends Model
{
    use HasFactory;

    protected $table = 'password_resets';
    public $timestamps = false;
    protected $fillable = [
        'email',
        'token',
        'created_at'
    ];

    public function saveRecoveryInfo($data)
    {
        $recovery = PasswordReset::create([
            'email' => $data['email'],
            'token' => $data['token'],
            'created_at' => $data['created_at']
        ]);

        return $recovery ? true : false;
    }
}
