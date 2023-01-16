<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Users;

class UsersController extends Controller
{
    public function login(Request $request){
        $inputs = $request->all();
        $user = Users::where("email",$inputs["email"])->where("password",$inputs["password"])->first();
        return $user;
    }
    
}
