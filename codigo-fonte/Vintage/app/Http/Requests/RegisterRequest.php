<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
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
            'name' => 'required|string|min:4|max:30',
            'surname' => 'required|string|min:3|max:30',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|min:8',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'O campo nome é obrigatório.',
            'name.min' => 'O nome deve ter no mínimo :min caracteres.',
            'surname.required' => 'O campo sobrenome é obrigatório.',
            'surname.min' => 'O sobrenome deve ter no mínimo :min caracteres.',
            'email.required' => 'O campo email é obrigatório.',
            'email.email' => 'O email fornecido não é válido.',
            'email.unique' => 'Este email já está em uso.',
            'password.required' => 'O campo senha é obrigatório.',
            'password.min' => 'A senha deve ter no mínimo :min caracteres.',
        ];
    }
}
