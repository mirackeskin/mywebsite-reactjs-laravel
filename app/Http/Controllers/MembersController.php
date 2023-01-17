<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Members;

class MembersController extends Controller
{
    public function index(){
        $select = Members::all();
        return $select;
    }
    public function insert(Request $request){
        $inputs = $request->all();
        $insertData = array(
            "member_email"=>$inputs["member_email"]
        );
        $insert = Members::create($insertData);
        if($insert){
            return true;
        }else{
            return false;
        }
    }

    public function delete(Request $request){
        $inputs = $request->all();
        $delete = Members::where("member_id", $inputs["member_id"])->delete();
        return $delete;
    }
}
