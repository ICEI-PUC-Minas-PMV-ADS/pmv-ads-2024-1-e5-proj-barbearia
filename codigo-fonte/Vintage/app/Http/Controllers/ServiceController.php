<?php

namespace App\Http\Controllers;

use App\Http\Requests\SchedulingRequest;
use App\Models\Scheduled;
use App\Models\Service;
use App\Models\User;
use App\Models\Workload;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function getServices()
    {
        $services = Service::all();

        return response()->json($services);
    }

    public function getEmployees()
    {
        $employees = User::where('status', 1)->get();

        return response()->json($employees);
    }

    public function getWorkLoad()
    {
        $workLoad = Workload::all();

        return response()->json($workLoad);
    }

    public function finalizeScheduling(SchedulingRequest $request) {
        $scheduled = Scheduled::create([
            'service_name' => $request->serviceName,
            'users_id' => $request->employeeId,
            'scheduled_time' => $request->hour,
            'name' => $request->name,
            'email' => $request->email,
            'telefone' => $request->telephone,
        ]);

        if($scheduled) {
            return response()->json(['status' => 'Agendamento realizado com sucesso'], 200);
        }

        return response()->json(['status' => 'Erro ao realizar o agendamento'], 400);
    }
}
