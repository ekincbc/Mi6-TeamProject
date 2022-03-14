<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Person;

class Image extends Model
{
    public function image()
        {
            return $this->hasOne(Person::class);
        }

    use HasFactory;
}
