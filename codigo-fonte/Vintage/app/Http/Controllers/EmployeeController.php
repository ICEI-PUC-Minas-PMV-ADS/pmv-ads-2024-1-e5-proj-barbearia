<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateEmployee;
use App\Models\User;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function getEmployee () {
        $users = new User();
        
        $employees = $users->getEmployees();
        return $employees;
        
    }

    public function updateEmployee (UpdateEmployee $request, $id) {
        $user = User::find($id);

        if ($user) {
            $user->update([
                'name' => $request->name,
                'surname' => $request->surname,
                'email' => $request->email
            ]);

            return response()->json(['Dados cadastrais alterados com sucesso'], 200);
        }

        return response()->json(['Nenhum usuario encontrado'], 500);
    }

    public function deleteEmployee (Request $request) {
        $user = User::find($request->id);

        if($user) {
            $user->delete();
            return response()->json(['Usuario excluido com sucesso'], 200);
        }

        return response()->json(['Nenhum usuario encontrado'], 500);
    }
}
