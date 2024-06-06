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

    public function getWorkLoad(Request $request)
    {
        $scheduledTimes = Scheduled::join('workloads', 'scheduleds.scheduled_time', '=', 'workloads.id')
                            ->where('scheduleds.users_id', $request->id)
                            ->where('scheduled_day', $request->date)
                            ->pluck('workloads.hour')
                            ->toArray();
        
        $workloadTimes = Workload::pluck('hour')->toArray();

        $availableTimes = array_diff($workloadTimes, $scheduledTimes);

        return $availableTimes;
    }

    public function finalizeScheduling(SchedulingRequest $request)
    {
        $scheduled = Scheduled::create([
            'service_name' => $request->serviceName,
            'users_id' => $request->employeeId,
            'scheduled_time' => $request->hour,
            'scheduled_day' => $request->date,
            'name' => $request->name,
            'email' => $request->email,
            'telefone' => $request->telephone,
        ]);

        if($scheduled) {
            return response()->json(['status' => 'Agendamento realizado com sucesso'], 200);
        }

        return response()->json(['status' => 'Erro ao realizar o agendamento'], 400);
    }

    public function getSchedules($barberId = null, $date = null)
{
    if($date && $barberId === 'none') {
        $schedules = Scheduled::join('workloads', 'scheduleds.scheduled_time', '=', 'workloads.id')
            ->select('scheduleds.id', 'scheduleds.name', 'scheduleds.email', 'scheduleds.telefone', 'scheduleds.scheduled_time', 'scheduleds.status', 'workloads.hour')
            ->where('scheduled_day', $date)
            ->get();

        return response()->json($schedules);
    }

    if($barberId && is_null($date)) {
        $schedules = Scheduled::join('workloads', 'scheduleds.scheduled_time', '=', 'workloads.id')
            ->select('scheduleds.id', 'scheduleds.name', 'scheduleds.email', 'scheduleds.telefone', 'scheduleds.scheduled_time', 'scheduleds.status', 'workloads.hour')
            ->where('users_id', $barberId)
            ->get();

        return response()->json($schedules);
    }

    if($barberId && $date) {
        $schedules = Scheduled::select('id', 'name', 'telefone', 'scheduled_time', 'status')
            ->where('users_id', $barberId)
            ->where('scheduled_day', $date)
            ->get();

        return response()->json($schedules);
    }

    $schedules = Scheduled::join('workloads', 'scheduleds.scheduled_time', '=', 'workloads.id')
        ->select('scheduleds.id', 'scheduleds.name', 'scheduleds.email', 'scheduleds.telefone', 'scheduleds.scheduled_time', 'scheduleds.status', 'workloads.hour')
        ->get();

    return response()->json($schedules);
}


    public function cancelAppointment($id)
    {
        if(isset($id) && $id) {
            $verifyStatus = Scheduled::findOrFail($id);
            if($verifyStatus->status === 0) {
                return response()->json(['message' => 'Agendamento já cancelado'], 400);
            }
            $schedule = Scheduled::where('id', $id)->update(['status' => 0]);
            
            if ($schedule) {
                return response()->json(['message' => 'Agendamento cancelado com sucesso'], 200);
            } else {
                return response()->json(['message' => 'Erro ao cancelar agendamento'], 500);
            }
        }
    }


}
