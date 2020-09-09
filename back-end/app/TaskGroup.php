<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TaskGroup extends Model
{
    use SoftDeletes;

    protected $table = 'task_groups';

    public $timestamps = true;

    public function scopeSearchGroup($query, $group)
    {
        if ($group)
            return $query->where('id_group', '=', $group);
    }

    public function group()
    {
        return $this->hasOne('App\Group', 'id', 'id_group');
    }

    public function scopeSearchTask($query, $task)
    {
        if ($task)
            return $query->where('id_task', '=', $task);
    }

    public function task()
    {
        return $this->hasOne('App\Task', 'id', 'id_task');
    }
}
