<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Saw;

class SawController extends Controller
{
    public function index(){
        $select = Saw::all();
        return $select;
    }
    public function update(Request $request){
        $inputs = $request->all();
        $updateData = array(
            "saw"=>$inputs["word"],
            "writer"=>$inputs["writer"]
        );
        $update = Saw::where("saw_id", $inputs["saw_id"])->update($updateData);
        return $update;
    }
}
