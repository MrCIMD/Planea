<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserPanelPermission extends Model
{
    use SoftDeletes; 

    protected $table = 'user_panels_permissions';

    public $timestamps = true;
}
