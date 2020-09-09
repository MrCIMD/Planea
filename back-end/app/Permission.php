<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Permission extends Model
{
    use SoftDeletes;

    protected $table = 'permissions';

    public $timestamps = true;

    public function scopeSearch($query, $search)
    {
        if ($search)
            return $query->where('role', 'LIKE', "%$search%")
                ->orWhere('description', 'LIKE', "%$search%")
                ->orWhere('icon', 'LIKE', "%$search%");
    }
}
