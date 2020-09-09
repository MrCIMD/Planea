<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TaskArchive extends Model
{
    use SoftDeletes;

    protected $table = 'task_files';

    public $timestamps = true;

    public function scopeSearchArchive($query, $archive)
    {
        if ($archive)
            return $query->where('id_file', '=', $archive);
    }

    public function archive()
    {
        return $this->hasOne('App\Archive', 'id', 'id_file');
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
