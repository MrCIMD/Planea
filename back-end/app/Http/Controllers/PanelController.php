<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Panel;

class PanelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $panels = Panel::get();
        return response()->json(['success' => true, 'data' => $panels], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $panel = new Panel();
        $panel->name = $request->name;
        $panel->description = $request->description;
        if ($panel->save()) {
            return response()->json(['success' => true, 'data' => $panel], 201);
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
        $panel = Panel::find($id);
        if (is_null($panel)) {
            return response()->json(['success' => false, 'error' => 'No existe'], 404);
        }
        return response()->json(['success' => true, 'data' => $panel], 200);
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
        $panel = Panel::find($id);
        $panel->name = $request->name;
        $panel->description = $request->description;
        if ($panel->save()) {
            return response()->json(['success' => true, 'data' => $panel], 200);
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
        $panel = Panel::find($id);
        if ($panel->delete()) {
            return response()->json(['success' => true, 'deleted' => $panel], 200);
        }
        return response()->json(['success' => false, 'error' => 'No existe'], 404);
    }
}
