<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Progress;

class ProgressController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $progress = Progress::get();
        return response()->json(['success' => true, 'data' => $progress], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $progress = new Progress();
        $progress->name = $request->name;
        $progress->progress = $request->progress;
        if ($progress->save()) {
            return response()->json(['success' => true, 'data' => $progress], 201);
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
        $progress = Progress::find($id);
        if (is_null($progress)) {
            return response()->json(['success' => false, 'error' => 'No existe'], 404);
        }
        return response()->json(['success' => true, 'data' => $progress], 200);
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
        $progress = Progress::find($id);
        $progress->name = $request->name;
        $progress->progress = $request->progress;
        if ($progress->save()) {
            return response()->json(['success' => true, 'data' => $progress], 200);
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
        $progress = Progress::find($id);
        if ($progress->delete()) {
            return response()->json(['success' => true, 'deleted' => $progress], 200);
        }
        return response()->json(['success' => false, 'error' => 'No existe'], 404);
    }
}
