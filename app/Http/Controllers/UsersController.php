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

    public function getuser(){
        $select = Users::all();
        return $select;
    }

    public function updateuser(Request $request){
        $inputs = $request->all();
        $updateData=array(
            "username"=>$inputs["username"],
            "email"=>$inputs["email"],
            "password"=>$inputs["password"]
        );
        $update = Users::where("user_id", $inputs["user_id"])->update($updateData);
        return $update;
    }
    
}
