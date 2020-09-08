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

Route::group(['middleware' => 'api','prefix' => 'account'], 
    function ($router) {
        Route::post('login', 'UserController@login');
        Route::post('register', 'UserController@register');
        Route::post('logout', 'UserController@logout');
        Route::post('refresh', 'UserController@refresh');
});

Route::group(['middleware' => ['jwt.verify']], function() {
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
});