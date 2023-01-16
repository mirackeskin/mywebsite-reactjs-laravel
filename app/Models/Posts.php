<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    use HasFactory;
    protected $table = "posts";
    protected $primaryKey = "post_id";
    protected $fillable = ["post_title","post_image","post_cover_text","post_content"];
}
