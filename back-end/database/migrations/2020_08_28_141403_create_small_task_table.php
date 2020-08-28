<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSmallTaskTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('small_task', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_task');
            $table->string('name');
            $table->boolean('finished');
            $table->integer('order');
            $table->timestamps();
            $table->softDeletes('deleted_at', 0);

            $table->foreign('id_task')->references('id')->on('tasks');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('small_task');
    }
}
