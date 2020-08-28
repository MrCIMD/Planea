<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SmallTask extends Model
{
    use SoftDeletes; 

    protected $table = 'small_task';

    public $timestamps = true;
}
