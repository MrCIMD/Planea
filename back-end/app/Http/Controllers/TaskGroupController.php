<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\TaskGroup;

class TaskGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $task_group = TaskGroup
            ::searchGroup($request->group)
            ->searchTask($request->task)
            ->with(['group', 'task'])->get();
        return response()->json(['success' => true, 'data' => $task_group], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $task_group = new TaskGroup();
        $task_group->id_task = $request->id_task;
        $task_group->id_group = $request->id_group;
        $task_group->order = $request->order;
        if ($task_group->save()) {
            return response()->json(['success' => true, 'data' => $task_group], 201);
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
        $task_group = TaskGroup::find($id);
        if (is_null($task_group)) {
            return response()->json(['success' => false, 'error' => 'No existe'], 404);
        }
        return response()->json(['success' => true, 'data' => $task_group], 200);
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
        $task_group = TaskGroup::find($id);
        $task_group->id_task = $request->id_task;
        $task_group->id_group = $request->id_group;
        if ($task_group->save()) {
            return response()->json(['success' => true, 'data' => $task_group], 200);
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
        $task_group = TaskGroup::find($id);
        if ($task_group->delete()) {
            return response()->json(['success' => true, 'deleted' => $task_group], 200);
        }
        return response()->json(['success' => false, 'error' => 'No existe'], 404);
    }
}
