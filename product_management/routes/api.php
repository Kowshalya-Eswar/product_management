<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
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

Route::post('register',[UserController::class,'index']);

Route::post('login',[UserController::class,'login']);

Route::post('add',[ProductController::class,'create']);

Route::get('list',[ProductController::class,'list']);

Route::delete('delete/{id}',[ProductController::class,'destroy']);

Route::get('show/{id}',[ProductController::class,'show']);

Route::get('search/{key}',[ProductController::class,'search']);

Route::put('update/{id}',[ProductController::class,'update']);