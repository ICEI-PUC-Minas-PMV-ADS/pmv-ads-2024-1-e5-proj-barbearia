<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\User;
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
}
