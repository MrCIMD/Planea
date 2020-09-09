<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model
{
    use SoftDeletes; 

    protected $table = 'comments';

    public $timestamps = true;

    public function scopeSearch($query, $search)
    {
        if ($search)
            return $query->where('comment', 'LIKE', "%$search%");
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

    public function scopeSearchUser($query, $user)
    {
        if ($user)
            return $query->where('id_user', '=', $user);
    }

    public function user()
    {
        return $this->hasOne('App\User', 'id', 'id_user');
    }
}
