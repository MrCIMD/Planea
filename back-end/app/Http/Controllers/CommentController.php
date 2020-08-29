<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Comment;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $comment = Comment::get();
        return response()->json(['success' => true, 'data' => $comment], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $comment = new Comment();
        $comment->id_task = $request->id_task;
        $comment->id_user = $request->id_user;
        $comment->comment = $request->comment;
        if ($comment->save()) {
            return response()->json(['success' => true, 'data' => $comment], 201);
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
        $comment = Comment::find($id);
        if (is_null($comment)) {
            return response()->json(['success' => false, 'error' => 'No existe'], 404);
        }
        return response()->json(['success' => true, 'data' => $comment], 200);
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
        $comment = Comment::find($id);
        $comment->id_task = $request->id_task;
        $comment->id_user = $request->id_user;
        $comment->comment = $request->comment;
        if ($comment->save()) {
            return response()->json(['success' => true, 'data' => $comment], 200);
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
        $comment = Comment::find($id);
        if ($comment->delete()) {
            return response()->json(['success' => true, 'deleted' => $comment], 200);
        }
        return response()->json(['success' => false, 'error' => 'No existe'], 404);
    }
}
