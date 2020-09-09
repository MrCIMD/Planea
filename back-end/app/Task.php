<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Task extends Model
{
    use SoftDeletes;

    protected $table = 'tasks';

    public $timestamps = true;

    public function scopeSearch($query, $search)
    {
        if ($search)
            return $query->where('name', 'LIKE', "%$search%")
                ->orWhere('description', 'LIKE', "%$search%")
                ->orWhere('note', 'LIKE', "%$search%");
    }

    public function scopeSearchProject($query, $project)
    {
        if ($project)
            return $query->where('id_panel', '=', $project);
    }

    public function project()
    {
        return $this->hasOne('App\Panel', 'id', 'id_panel');
    }

    public function scopeSearchStatu($query, $statu)
    {
        if ($statu)
            return $query->where('id_status', '=', $statu);
    }

    public function statu()
    {
        return $this->hasOne('App\TaskStatus', 'id', 'id_status');
    }

    public function scopeSearchProgress($query, $progress)
    {
        if ($progress)
            return $query->where('id_progress', '=', $progress);
    }

    public function progress()
    {
        return $this->hasOne('App\Progress', 'id', 'id_progress');
    }

    public function scopeSearchPriority($query, $priority)
    {
        if ($priority)
            return $query->where('id_priority', '=', $priority);
    }

    public function priority()
    {
        return $this->hasOne('App\Priority', 'id', 'id_priority');
    }
}
