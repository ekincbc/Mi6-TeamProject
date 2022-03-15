<?php



use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/people-of-interest', "PeopleController@index");
// for any URL that begins with /missions/, display the view missions.app
Route::view('/missions/{path?}', 'missions.app')->where('path', '.*');

