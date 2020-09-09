<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Progress extends Model
{
    use SoftDeletes;

    protected $table = 'progress';

    public $timestamps = true;

    public function scopeSearch($query, $search)
    {
        if ($search)
            return $query->where('name', 'LIKE', "%$search%");
    }
}
