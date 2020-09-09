<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserPanelPermission extends Model
{
    use SoftDeletes;

    protected $table = 'user_panels_permissions';

    public $timestamps = true;

    public function scopeSearchProject($query, $project)
    {
        if ($project)
            return $query->where('id_panel', '=', $project);
    }

    public function project()
    {
        return $this->hasOne('App\Panel', 'id', 'id_panel');
    }

    public function scopeSearchUser($query, $user)
    {
        if ($user)
            return $query->where('id_user', '=', $user);
    }

    public function user()
    {
        return $this->hasOne('App\User', 'id', 'id_user');
    }

    public function scopeSearchPermission($query, $permission)
    {
        if ($permission)
            return $query->where('id_permission', '=', $permission);
    }

    public function permission()
    {
        return $this->hasOne('App\Permission', 'id', 'id_permission');
    }
}
