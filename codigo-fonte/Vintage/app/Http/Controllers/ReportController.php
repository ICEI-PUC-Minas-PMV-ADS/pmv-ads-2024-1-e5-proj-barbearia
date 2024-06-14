<?php

namespace App\Http\Controllers;

use App\Models\Scheduled;
use App\Models\User;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function getSchedules(Request $request) {
        $year = $request->ano;
        $month = $request->mes;

        $users = User::all();
        $data = [];
        foreach($users as $user) {
            $countStatus1 = Scheduled::whereYear('scheduleds.created_at', $year)
                ->whereMonth('scheduleds.created_at', $month)
                ->where('scheduleds.users_id', $user->id)
                ->where('scheduleds.status', 1)
                ->count();

            $countStatus0 = Scheduled::whereYear('scheduleds.created_at', $year)
                ->whereMonth('scheduleds.created_at', $month)
                ->where('scheduleds.users_id', $user->id)
                ->where('scheduleds.status', 0)
                ->count();

            $userData[] = $user->name;
            $userData[] = $countStatus1;
            $userData[] = $countStatus0;
            array_push($data, $userData);
            $userData = [];
        }

        return $data;
    }
}