<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\UserPanel;

class UserPanelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user_panel = UserPanel::get();
        return response()->json(['success' => true, 'data' => $user_panel], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user_panel = new UserPanel();
        $user_panel->id_panel = $request->id_panel;
        $user_panel->id_user = $request->id_user;
        $user_panel->id_team_role = $request->id_team_role;
        $user_panel->order = $request->order;
        if ($user_panel->save()) {
            return response()->json(['success' => true, 'data' => $user_panel], 201);
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
        $user_panel = UserPanel::find($id);
        if (is_null($user_panel)) {
            return response()->json(['success' => false, 'error' => 'No existe'], 404);
        }
        return response()->json(['success' => true, 'data' => $user_panel], 200);
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
        $user_panel = UserPanel::find($id);
        $user_panel->id_panel = $request->id_panel;
        $user_panel->id_user = $request->id_user;
        $user_panel->id_team_role = $request->id_team_role;
        $user_panel->order = $request->order;
        if ($user_panel->save()) {
            return response()->json(['success' => true, 'data' => $user_panel], 200);
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
        $user_panel = UserPanel::find($id);
        if ($user_panel->delete()) {
            return response()->json(['success' => true, 'deleted' => $user_panel], 200);
        }
        return response()->json(['success' => false, 'error' => 'No existe'], 404);
    }
}
