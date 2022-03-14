<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PeopleController extends Controller
{
    public function index(Request $request)
    {
        // get the search term from the request
        $search_term = $request->input('search');

        dd($search_term);
    }
}
