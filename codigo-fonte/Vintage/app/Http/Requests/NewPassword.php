<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NewPassword extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'email' => 'required|string|email',
            'password' => 'required|string|min:8|confirmed',
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'O campo email é obrigatório.',
            'email.email' => 'O email fornecido não é válido.',
            'password.required' => 'O campo senha é obrigatório.',
            'password.min' => 'A senha deve ter no mínimo :min caracteres.',
            'password.confirmed' => 'As senhas informadas nao sao iguais.',
        ];
    }
}
