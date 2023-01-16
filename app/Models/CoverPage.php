<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoverPage extends Model
{
    use HasFactory;
    protected $table = "coverpage";
    protected $primaryKey = "cover_id";
    protected $fillable = ["image_url", "cover_name", "cover_job", "cover_text", "linkedin_url", "github_url", "twitter_url", "instagram_url", "play_url"];
}
