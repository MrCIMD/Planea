<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SmallTask extends Model
{
    use SoftDeletes;

    protected $table = 'small_task';

    public $timestamps = true;

    public function scopeSearch($query, $search)
    {
        if ($search)
            return $query->where('name', 'LIKE', "%$search%");
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
