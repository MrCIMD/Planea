<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAssignedTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('assigned', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_task');
            $table->unsignedBigInteger('id_user');
            $table->timestamps();
            $table->softDeletes('deleted_at', 0);

            $table->foreign('id_task')->references('id')->on('tasks');
            $table->foreign('id_user')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('assigned');
    }
}
