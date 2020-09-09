<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\TeamRole;

class TeamRoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $team_role = TeamRole::search($request->search)->get();
        return response()->json(['success' => true, 'data' => $team_role], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $team_role = new TeamRole();
        $team_role->role = $request->role;
        $team_role->description = $request->description;
        $team_role->icon = $request->icon;
        if ($team_role->save()) {
            return response()->json(['success' => true, 'data' => $team_role], 201);
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
        $team_role = TeamRole::find($id);
        if (is_null($team_role)) {
            return response()->json(['success' => false, 'error' => 'No existe'], 404);
        }
        return response()->json(['success' => true, 'data' => $team_role], 200);
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
        $team_role = TeamRole::find($id);
        $team_role->role = $request->role;
        $team_role->description = $request->description;
        $team_role->icon = $request->icon;
        if ($team_role->save()) {
            return response()->json(['success' => true, 'data' => $team_role], 200);
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
        $team_role = TeamRole::find($id);
        if ($team_role->delete()) {
            return response()->json(['success' => true, 'deleted' => $team_role], 200);
        }
        return response()->json(['success' => false, 'error' => 'No existe'], 404);
    }
}
