<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserPanel extends Model
{
    use SoftDeletes; 

    protected $table = 'user_panels';

    public $timestamps = true;
}
