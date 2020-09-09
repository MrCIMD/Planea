<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Group;

class GroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $groups = Group
            ::search($request->search)
            ->searchProject($request->panel)
            ->with(['project'])->get();
        return response()->json(['success' => true, 'data' => $groups], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $group = new Group();
        $group->id_panel = $request->id_panel;
        $group->name = $request->name;
        $group->order = $request->order;
        if ($group->save()) {
            return response()->json(['success' => true, 'data' => $group], 201);
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
        $group = Group::find($id);
        if (is_null($group)) {
            return response()->json(['success' => false, 'error' => 'No existe'], 404);
        }
        return response()->json(['success' => true, 'data' => $group], 200);
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
        $group = Group::find($id);
        $group->id_panel = $request->id_panel;
        $group->name = $request->name;
        $group->order = $request->order;
        if ($group->save()) {
            return response()->json(['success' => true, 'data' => $group], 200);
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
        $group = Group::find($id);
        if ($group->delete()) {
            return response()->json(['success' => true, 'deleted' => $group], 200);
        }
        return response()->json(['success' => false, 'error' => 'No existe'], 404);
    }
}
