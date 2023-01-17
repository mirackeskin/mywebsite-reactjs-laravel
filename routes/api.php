<?php

use App\Http\Controllers\MembersController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\SawController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\UsersController;
use App\Http\Controllers\CoverPageController;


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

//UsersController
Route::post("/login", [UsersController::class, "login"]);
Route::get("/getuser", [UsersController::class, "getuser"]);
Route::post("/updateuser", [UsersController::class, "updateuser"]);

//PostsController
Route::get("/posts", [PostsController::class, "posts"]);
Route::post("/delete", [PostsController::class, "delete"]);
Route::post("/create", [PostsController::class, "create"]);
Route::post("/update", [PostsController::class, "update"]);
Route::post("/post", [PostsController::class, "getpost"]);

//CoverPageController
Route::get("/coverpage", [CoverPageController::class, "get"]);
Route::post("/updatecover", [CoverPageController::class, "update"]);

//MembersController
Route::get("members", [MembersController::class, "index"]);
Route::post("createmember", [MembersController::class, "insert"]);
Route::post("deletemember", [MembersController::class, "delete"]);

//SawController
Route::get("saw", [SawController::class, "index"]);
Route::post("updatesaw", [SawController::class, "update"]);