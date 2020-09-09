<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Group extends Model
{
    use SoftDeletes; 

    protected $table = 'groups';

    public $timestamps = true;

    public function scopeSearch($query, $search)
    {
        if ($search)
            return $query->where('name', 'LIKE', "%$search%");
    }

    public function scopeSearchProject($query, $panel)
    {
        if ($panel)
            return $query->where('id_panel', '=', $panel);
    }

    public function project()
    {
        return $this->hasOne('App\Panel', 'id', 'id_panel');
    }
}
