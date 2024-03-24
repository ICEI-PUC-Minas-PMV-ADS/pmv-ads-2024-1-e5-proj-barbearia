<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
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
            'name' => 'required|string',
            'telephone' => 'required|string|min:9|max:11',
            'email' => 'required|email',
            'message' => 'required|string|min:10|max:500'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'O campo nome é obrigatório.',
            'telephone.required' => 'O campo telefone é obrigatório.',
            'telephone.min' => 'O campo telefone deve ter no minimo :min caracteres.',
            'telephone.max' => 'O campo telefone deve ter no maximo :max caracteres.',
            'email.required' => 'O campo email é obrigatório.',
            'email.email' => 'O email fornecido não é válido.',
            'message.required' => 'O campo mensagem é obrigatório.',
            'message.min' => 'O campo mensagem deve ter no minimo :min caracteres.',
            'message.max' => 'O campo mensagem deve ter no maximo :max caracteres.',
        ];
    }
}
