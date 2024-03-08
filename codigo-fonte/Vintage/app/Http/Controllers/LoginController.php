<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Auth;
use Illuminate\Http\Request;

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
}
