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
        return response()->json($employees, 200);
    }

    public function updateEmployee (UpdateEmployee $request, $id) {
        $user = User::find($id);

        if ($user) {
            $user->update([
                'name' => $request->name,
                'surname' => $request->surname,
                'email' => $request->email,
                'day_off' => $request->day_off,
            ]);

            return response()->json(['Dados cadastrais alterados com sucesso'], 200);
        }

        return response()->json(['Nenhum usuario encontrado'], 500);
    }

    public function disableEmployee (Request $request) {
        $user = User::find($request->id);

        if($user) {
            $user->status = false;
            $user->save();
            return response()->json(['Usuario inativado com sucesso'], 200);
        }

        return response()->json(['Nenhum usuario encontrado'], 500);
    }
}
