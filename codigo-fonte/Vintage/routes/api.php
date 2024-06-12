<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ServiceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/teste', [LoginController::class, 'teste']);
Route::post('/register', [LoginController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth:sanctum');

Route::prefix('recovery')->group(function () {
    Route::post('/password', [LoginController::class, 'sendEmailAndGenerateToken']);
    Route::post('/check-token', [LoginController::class, 'checkToken']);
    Route::post('/new-password', [LoginController::class, 'newPassword']);
});

Route::prefix('/manager')->middleware('auth:sanctum')->group(function () {
    Route::get('/employee', [EmployeeController::class, 'getEmployee']);
    Route::patch('/employee/update/{id}', [EmployeeController::class, 'updateEmployee']);
    Route::patch('/employee/disable/{id}', [EmployeeController::class, 'disableEmployee']);
});

Route::prefix('/schedule')->group(function () {
    Route::get('/service', [ServiceController::class, 'getServices']);
    Route::get('/employees', [ServiceController::class, 'getEmployees']);
    Route::post('/workload', [ServiceController::class, 'getWorkLoad']);
    Route::post('/finalize-scheduling', [ServiceController::class, 'finalizeScheduling']);
    Route::get('/get-schedule/{barberId?}/{date?}', [ServiceController::class, 'getSchedules']);
    Route::post('cancel-appointment/{id}', [ServiceController::class, 'cancelAppointment']);
});

Route::prefix('/products')->group(function () {
    Route::get('/get-products', [ProductController::class, 'getProducts']);
    Route::post('/register', [ProductController::class, 'register']);
    Route::delete('/delete/{id}', [ProductController::class, 'deleteProduct']);
    Route::put('/update/{id}', [ProductController::class, 'updateProduct']);
});

Route::post('/contact-us', [ContactController::class, 'contact']);