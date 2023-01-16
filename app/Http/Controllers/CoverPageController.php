<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CoverPage;

class CoverPageController extends Controller
{
    public function get(){
        $select = CoverPage::all();
        return $select;
    }

    public function update(Request $request){
        $inputs = $request->all();
        //file upload
        $image = $inputs["image"];
        $image_name = $image->getClientOriginalName();
        $upload_file = $image->move(public_path("images"), $image_name);
        //file upload
        if($upload_file){
            
            $updateData = array(
                "image_url"=>$image_name,
                "cover_name"=>$inputs["cover_name"],
                "cover_job"=>$inputs["cover_job"],
                "cover_text"=>$inputs["cover_text"],
                "linkedin_url"=>$inputs["linkedin_url"],
                "github_url"=>$inputs["github_url"],
                "twitter_url"=>$inputs["twitter_url"],
                "instagram_url"=>$inputs["instagram_url"],
                "play_url"=>$inputs["play_url"],
            );
            
            $update=CoverPage::where("cover_id","<=","1")->update($updateData);
            return $update;
        }
        
    }
}
