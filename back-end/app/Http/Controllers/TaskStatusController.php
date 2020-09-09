<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\TaskStatus;

class TaskStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $task_status = TaskStatus::search($request->search)->get();
        return response()->json(['success' => true, 'data' => $task_status], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $task_status = new TaskStatus();
        $task_status->name = $request->name;
        $task_status->description = $request->description;
        if ($task_status->save()) {
            return response()->json(['success' => true, 'data' => $task_status], 201);
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
        $task_status = TaskStatus::find($id);
        if (is_null($task_status)) {
            return response()->json(['success' => false, 'error' => 'No existe'], 404);
        }
        return response()->json(['success' => true, 'data' => $task_status], 200);
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
        $task_status = TaskStatus::find($id);
        $task_status->name = $request->name;
        $task_status->description = $request->description;
        if ($task_status->save()) {
            return response()->json(['success' => true, 'data' => $task_status], 200);
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
        $task_status = TaskStatus::find($id);
        if ($task_status->delete()) {
            return response()->json(['success' => true, 'deleted' => $task_status], 200);
        }
        return response()->json(['success' => false, 'error' => 'No existe'], 404);
    }
}
