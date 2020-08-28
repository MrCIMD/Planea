<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TaskArchive extends Model
{
    use SoftDeletes; 

    protected $table = 'task_files';

    public $timestamps = true;
}
