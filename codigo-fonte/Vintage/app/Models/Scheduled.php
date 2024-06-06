<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Scheduled extends Model
{
    use HasFactory;

    protected $fillable = [
        'created_at',
        'updated_at',
        'service_name',
        'users_id',
        'scheduled_time',
        'scheduled_day',
        'name',
        'email',
        'telefone',
        'status'
    ];
}
