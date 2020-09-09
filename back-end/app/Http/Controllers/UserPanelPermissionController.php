<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\UserPanelPermission;

class UserPanelPermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user_panel_permission = UserPanelPermission
            ::searchProject($request->project)
            ->searchUser($request->user)
            ->searchPermission($request->permission)
            ->with(['project', 'user', 'permission'])->get();
        return response()->json(['success' => true, 'data' => $user_panel_permission], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user_panel_permission = new UserPanelPermission();
        $user_panel_permission->id_panel = $request->id_panel;
        $user_panel_permission->id_user = $request->id_user;
        $user_panel_permission->id_permission = $request->id_permission;
        if ($user_panel_permission->save()) {
            return response()->json(['success' => true, 'data' => $user_panel_permission], 201);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user_panel_permission = UserPanelPermission::find($id);
        if (is_null($user_panel_permission)) {
            return response()->json(['success' => false, 'error' => 'No existe'], 404);
        }
        return response()->json(['success' => true, 'data' => $user_panel_permission], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user_panel_permission = UserPanelPermission::find($id);
        $user_panel_permission->id_panel = $request->id_panel;
        $user_panel_permission->id_user = $request->id_user;
        $user_panel_permission->id_permission = $request->id_permission;
        if ($user_panel_permission->save()) {
            return response()->json(['success' => true, 'data' => $user_panel_permission], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user_panel_permission = UserPanelPermission::find($id);
        if ($user_panel_permission->delete()) {
            return response()->json(['success' => true, 'deleted' => $user_panel_permission], 200);
        }
        return response()->json(['success' => false, 'error' => 'No existe'], 404);
    }
}
