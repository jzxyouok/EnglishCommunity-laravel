<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVideoInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('video_infos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title')->comment('标题');
            $table->text('intro')->nullable()->comment('简介');
            $table->string('photo')->nullable()->comment('标题图片');
            $table->integer('view')->default(0)->comment('浏览量');
            $table->tinyInteger('category_id')->comment('分类id');
            $table->string('teacher')->default('佚名')->comment('讲师');
            $table->tinyInteger('recommend')->default(0)->comment('推荐');
            $table->string('type')->nullable()->comment('视频类型: youku tudou iqiyi');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('video_infos');
    }
}
