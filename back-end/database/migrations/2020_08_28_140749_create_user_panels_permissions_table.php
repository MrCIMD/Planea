<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserPanelsPermissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_panels_permissions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_panel');
            $table->unsignedBigInteger('id_user');
            $table->unsignedBigInteger('id_permission');
            $table->timestamps();
            $table->softDeletes('deleted_at', 0);

            $table->foreign('id_panel')->references('id')->on('panels');
            $table->foreign('id_user')->references('id')->on('users');
            $table->foreign('id_permission')->references('id')->on('permissions');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_panels_permissions');
    }
}
