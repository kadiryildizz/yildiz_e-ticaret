<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiteMenu extends Model
{
    use HasFactory;
    protected $fillable = ['UrunTuru','MenuAdi','UrunSayisi'];
    
}

