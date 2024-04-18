<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scheduleds', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('service_name');
            $table->foreignId('users_id')->constrained()->onDelete('cascade');
            $table->string('scheduled_time');
            $table->date('scheduled_day');
            $table->string('name');
            $table->string('email');
            $table->string('telefone');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('scheduleds');
    }
};
