<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SchedulingRequest extends FormRequest
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
            'serviceName' => 'required|string',
            'employeeId' => 'required|integer',
            'hour' => 'required|string',
            'date' => 'required|date',
            'name' => 'required|string',
            'email' => 'required|email',
            'telephone' => 'required|min:8|max:11',
        ];
    }
}
