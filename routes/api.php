<?php

use App\Http\Controllers\PostsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\UsersController;

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


Route::post("/login", [UsersController::class, "login"]);
Route::get("/posts", [PostsController::class, "posts"]);
Route::post("/delete", [PostsController::class, "delete"]);
Route::post("/create", [PostsController::class, "create"]);
Route::post("/update", [PostsController::class, "update"]);
Route::post("/post", [PostsController::class, "getpost"]);
