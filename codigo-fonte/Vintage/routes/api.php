<?php

use App\Http\Controllers\LoginController;
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

Route::post('/register', [LoginController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);

Route::prefix('recovery')->group(function () {
    Route::post('/password', [LoginController::class, 'sendEmailAndGenerateToken']);
    Route::get('/check-token', [LoginController::class, 'checkToken']);
    Route::post('/new-password', [LoginController::class, 'newPassword']);
});
