<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Mail\RecoveryPassword;
use App\Models\PasswordReset;
use App\Models\User;
use Auth;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class LoginController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'surname' => $request->surname,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        if ($user) {
            return response()->json(['message' => 'Usuário cadastrado com sucesso'], 200);
        }
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)){
            $user = $request->user();
            $token = $user->createToken('auth_token')->plainTextToken;
            
            return response()->json([
                'acess_token' => $token,
                'token_type' => 'Bearer'
            ]);
        }

        return response()->json([
            "message" => "Usuario invalido"
        ]);
    }

    public function sendEmailAndGenerateToken(Request $request)
    {
        $randomNumber = str_pad(mt_rand(1, 999999), 6, '0', STR_PAD_LEFT);
        Mail::to($request->email)->send(new RecoveryPassword($randomNumber));
        $recoveryInfo = [
            'email' => $request->email,
            'token' => $randomNumber,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s')
        ];

        $recovery = new PasswordReset();
        $status = $recovery->saveRecoveryInfo($recoveryInfo);
        return $status;
    }

    public function checkToken(Request $request)
    {
        $data = [
            'email' => $request->email,
            'token' => $request->token
        ];

        $recovery = new PasswordReset();
        $checkToken = $recovery->checkToken($data);
        $return = $checkToken->getData();
        return $return->data;
    }
}
