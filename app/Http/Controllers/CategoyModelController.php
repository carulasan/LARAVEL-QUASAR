<?php

namespace App\Http\Controllers;

use App\CategoyModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CategoyModelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
      
        //  return response()->json(Auth::id(), 200);
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CategoyModel  $categoyModel
     * @return \Illuminate\Http\Response
     */
    public function show(CategoyModel $categoyModel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CategoyModel  $categoyModel
     * @return \Illuminate\Http\Response
     */
    public function edit(CategoyModel $categoyModel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CategoyModel  $categoyModel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CategoyModel $categoyModel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CategoyModel  $categoyModel
     * @return \Illuminate\Http\Response
     */
    public function destroy(CategoyModel $categoyModel)
    {
        //
    }
}
