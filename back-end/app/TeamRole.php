<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TeamRole extends Model
{
    use SoftDeletes;

    protected $table = 'team_roles';

    public $timestamps = true;

    public function scopeSearch($query, $search)
    {
        if ($search)
            return $query->where('role', 'LIKE', "%$search%")
                ->orWhere('description', 'LIKE', "%$search%")
                ->orWhere('icon', 'LIKE', "%$search%");
    }
}
