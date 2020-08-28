<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Assigned extends Model
{
    use SoftDeletes; 

    protected $table = 'assigned';

    public $timestamps = true;
}
