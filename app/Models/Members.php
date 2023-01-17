<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Members extends Model
{
    use HasFactory;

    protected $table = "members";
    protected $primaryKey = "member_id";
    protected $fillable = ["member_email"];
}
