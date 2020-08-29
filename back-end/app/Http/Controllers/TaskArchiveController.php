<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\TaskArchive;

class TaskArchiveController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $task_archive = TaskArchive::get();
        return response()->json(['success' => true, 'data' => $task_archive], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $task_archive = new TaskArchive();
        $task_archive->id_file = $request->id_file;
        $task_archive->id_task = $request->id_task;
        if ($task_archive->save()) {
            return response()->json(['success' => true, 'data' => $task_archive], 201);
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
        $task_archive = TaskArchive::find($id);
        if (is_null($task_archive)) {
            return response()->json(['success' => false, 'error' => 'No existe'], 404);
        }
        return response()->json(['success' => true, 'data' => $task_archive], 200);
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
        $task_archive = TaskArchive::find($id);
        $task_archive->id_file = $request->id_file;
        $task_archive->id_task = $request->id_task;
        if ($task_archive->save()) {
            return response()->json(['success' => true, 'data' => $task_archive], 200);
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
        $task_archive = TaskArchive::find($id);
        if ($task_archive->delete()) {
            return response()->json(['success' => true, 'deleted' => $task_archive], 200);
        }
        return response()->json(['success' => false, 'error' => 'No existe'], 404);
    }
}
