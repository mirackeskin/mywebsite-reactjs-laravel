<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Posts;

class PostsController extends Controller
{
    public function posts(){
        $select = Posts::all();
        return $select;
    }

    public function getpost(Request $request){
        $id = $request->id;
        $select = Posts::where("id", $id)->get();
        return $select;
    }
    
    public function create(Request $request){
        $inputs=$request->all();
        //file upload
        $image = $inputs["image"];
        $image_name = $image->getClientOriginalName();
        $upload_file = $image->move(public_path("images"), $image_name);
        
        //file upload
        if($upload_file){
            $posts = new Posts();
            $posts->post_title = $inputs["post_title"];
            $posts->post_content = $inputs["post_content"];
            $posts->post_image = $image_name;
            $posts->post_cover_text = $inputs["post_cover_text"];
            $posts->save();
            return $posts;
        }else{
            return 0;
        }
        
    }

    public function update(Request $request){
        $inputs=$request->all();
        //file upload
        $image = $inputs["image"];
        $image_name = $image->getClientOriginalName();
        $upload_file = $image->move(public_path("images"), $image_name);
        //file upload
        if($upload_file){
            $updateData = array(
                "post_title"=>$inputs["post_title"],
                "post_content"=>$inputs["post_content"],
                "post_image"=>$image_name,
                "post_cover_text"=>$inputs["post_cover_text"]
            );
            $update=Posts::where("id", $inputs["id"])->update($updateData);
            return $update;
        } else {
            return 0;}
    }
    
    public function delete(Request $request){
        $inputs = $request->all();
        $delete=Posts::where("id",$inputs["id"])->delete();
        return $delete;
    }
}
