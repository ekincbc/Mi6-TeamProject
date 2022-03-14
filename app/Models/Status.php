<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Person;


class Status extends Model
{

    public function status()

        {
            return $this->hasMany(Person::class);
        }
    use HasFactory;
}
