<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\SmallTask;

class SmallTaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $small_task = SmallTask::get();
        return response()->json(['success' => true, 'data' => $small_task], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $small_task = new SmallTask();
        $small_task->id_task = $request->id_task;
        $small_task->name = $request->name;
        $small_task->finished = $request->finished;
        $small_task->order = $request->order;
        if ($small_task->save()) {
            return response()->json(['success' => true, 'data' => $small_task], 201);
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
        $small_task = SmallTask::find($id);
        if (is_null($small_task)) {
            return response()->json(['success' => false, 'error' => 'No existe'], 404);
        }
        return response()->json(['success' => true, 'data' => $small_task], 200);
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
        $small_task = SmallTask::find($id);
        $small_task->id_task = $request->id_task;
        $small_task->name = $request->name;
        $small_task->finished = $request->finished;
        $small_task->order = $request->order;
        if ($small_task->save()) {
            return response()->json(['success' => true, 'data' => $small_task], 200);
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
        $small_task = SmallTask::find($id);
        if ($small_task->delete()) {
            return response()->json(['success' => true, 'deleted' => $small_task], 200);
        }
        return response()->json(['success' => false, 'error' => 'No existe'], 404);
    }
}
