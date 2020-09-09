<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserPanel extends Model
{
    use SoftDeletes; 

    protected $table = 'user_panels';

    public $timestamps = true;

    public function scopeSearchPanel($query, $panel)
    {
        if ($panel)
            return $query->where('id_panel', '=', $panel);
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

    public function scopeSearchTeamRole($query, $team_role)
    {
        if ($team_role)
            return $query->where('id_team_role', '=', $team_role);
    }

    public function teamRole()
    {
        return $this->hasOne('App\TeamRole', 'id', 'id_team_role');
    }
}
