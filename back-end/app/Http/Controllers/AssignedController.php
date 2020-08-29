<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Assigned;

class AssignedController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $assigneds = Assigned::get();
        return response()->json(['success' => true, 'data' => $assigneds], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $assigned = new Assigned();
        $assigned->id_task = $request->id_task;
        $assigned->id_user = $request->id_user;
        if ($assigned->save()) {
            return response()->json(['success' => true, 'data' => $assigned], 201);
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
        $assigned = Assigned::find($id);
        if (is_null($assigned)) {
            return response()->json(['success' => false, 'error' => 'No existe'], 404);
        }
        return response()->json(['success' => true, 'data' => $assigned], 200);
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
        $assigned = Assigned::find($id);
        $assigned->id_task = $request->id_task;
        $assigned->id_user = $request->id_user;
        if ($assigned->save()) {
            return response()->json(['success' => true, 'data' => $assigned], 200);
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
        $assigned = Assigned::find($id);
        if ($assigned->delete()) {
            return response()->json(['success' => true, 'deleted' => $assigned], 200);
        }
        return response()->json(['success' => false, 'error' => 'No existe'], 404);
    }
}
