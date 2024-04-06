<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Client\Request;

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

    public function checkToken($data)
    {
        $user = User::where('email', $data['email'])->first();

        if ($user) {
            $validateToken = PasswordReset::where('email', $data['email'])
                ->latest('created_at')
                ->first();

            if ($validateToken && $validateToken->token == $data['token']) {
                return response()->json(['data' => 'Sucesso']);
            } else {
                return response()->json(['data' => 'error'], 401);
            }
        }

        return response()->json(['data' => 'error'], 401);
    }
}
