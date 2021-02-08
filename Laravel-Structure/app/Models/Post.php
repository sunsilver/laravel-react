<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    // fillable 안에 넣어야 컬럼 안에 데이터를 넣을 수 있음
    protected $fillable = [
        'title',
        'text',
    ];
}
