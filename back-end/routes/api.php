<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('account/register', 'UserController@register');

Route::post('account/login', 'UserController@authenticate');

Route::group(['middleware' => ['jwt.verify']], function() {
    /*AÑADE AQUI LAS RUTAS QUE QUIERAS PROTEGER CON JWT*/
});

Route::apiResources([
    'archive' => 'ArchiveController',
    'assigned' => 'AssignedController',
    'comment' => 'CommentController',
    'group' => 'GroupController',
    'panel' => 'PanelController',
    'permission' => 'PermissionController',
    'priority' => 'PriorityController',
    'progress' => 'ProgressController',
    'small-task' => 'SmallTaskController',
    'task-archive' => 'TaskArchiveController',
    'task' => 'TaskController',
    'task-group' => 'TaskGroupController',
    'team-role' => 'TeamRoleController',
    'user-panel' => 'UserPanelController',
    'user-panel-permission' => 'UserPanelPermissionController'
]);