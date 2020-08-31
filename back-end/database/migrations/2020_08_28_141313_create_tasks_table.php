<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_panel');
            $table->string('name');
            $table->string('description');
            $table->unsignedBigInteger('id_status');
            $table->integer('order');
            $table->unsignedBigInteger('id_progress');
            $table->unsignedBigInteger('id_priority');
            $table->string('note');
            $table->boolean('finished');
            $table->date('start_date');
            $table->date('end_date');
            $table->timestamps();
            $table->softDeletes('deleted_at', 0);

            $table->foreign('id_panel')->references('id')->on('panels');
            $table->foreign('id_status')->references('id')->on('task_status');
            $table->foreign('id_progress')->references('id')->on('progress');
            $table->foreign('id_priority')->references('id')->on('priorities');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
}
