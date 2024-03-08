<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
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
            'email' => 'required|string',
            'password' => 'required|string'
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'O campo email é obrigatório.',
            'password.required' => 'O campo senha é obrigatório.',
        ];
    }
}
