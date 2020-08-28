<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Panel extends Model
{
    use SoftDeletes; 

    protected $table = 'panels';

    public $timestamps = true;
}
