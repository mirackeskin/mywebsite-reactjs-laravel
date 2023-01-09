<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Deneme;

class DenemeController extends Controller
{
    public function index(){
        $select = Deneme::all();
        return $select;
    }
    public function auth(Request $request){
        $inputs = $request->all();
        $insertData=array(
            "username"=>"sa",
            "password"=>"SA"
        );
        $deneme = new Deneme();
        $deneme->username = $inputs["username"];
        $deneme->password = $inputs["password"];
        $deneme->save();
        return response()->json([$deneme]);
    }
}
