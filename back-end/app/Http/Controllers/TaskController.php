<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Task;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $task = Task::get();
        return response()->json(['success' => true, 'data' => $task], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $task = new Task();
        $task->id_panel = $request->id_panel;
        $task->name = $request->name;
        $task->description = $request->description;
        $task->order = $request->order;
        $task->id_progress = $request->id_progress;
        $task->id_priority = $request->id_priority;
        $task->note = $request->note;
        $task->finished = $request->finished;
        $task->start_date = $request->start_date;
        $task->end_date = $request->end_date;
        if ($task->save()) {
            return response()->json(['success' => true, 'data' => $task], 201);
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
        $task = Task::find($id);
        if (is_null($task)) {
            return response()->json(['success' => false, 'error' => 'No existe'], 404);
        }
        return response()->json(['success' => true, 'data' => $task], 200);
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
        $task = Task::find($id);
        $task->id_panel = $request->id_panel;
        $task->name = $request->name;
        $task->description = $request->description;
        $task->order = $request->order;
        $task->id_progress = $request->id_progress;
        $task->id_priority = $request->id_priority;
        $task->note = $request->note;
        $task->finished = $request->finished;
        $task->start_date = $request->start_date;
        $task->end_date = $request->end_date;
        if ($task->save()) {
            return response()->json(['success' => true, 'data' => $task], 200);
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
        $task = Task::find($id);
        if ($task->delete()) {
            return response()->json(['success' => true, 'deleted' => $task], 200);
        }
        return response()->json(['success' => false, 'error' => 'No existe'], 404);
    }
}
