<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('username', 30)->unique()->index()->comment('用户名');
            $table->string('password')->comment('密码');
            $table->string('nickname', 30)->nullable()->comment('昵称');
            $table->string('say')->nullable()->comment('心情寄语');
            $table->string('avatar', 50)->nullable()->comment('头像');
            $table->string('mobile', 11)->nullable()->comment('手机号码');
            $table->integer('score')->default(0)->comment('积分');
            $table->tinyInteger('sex')->default(0)->comment('性别 0 男 1女');
            $table->tinyInteger('qq_binding')->default(0)->comment('是否绑定QQ登录');
            $table->tinyInteger('wx_binding')->default(0)->comment('是否绑定微信登录');
            $table->tinyInteger('wb_binding')->default(0)->comment('是否绑定微博登录');
            $table->tinyInteger('group_id')->default(1)->comment('用户组id');
            $table->tinyInteger('permission_id')->default(1)->comment('权限id');
            $table->tinyInteger('status')->default(1)->comment('状态 1可用 0 不可用');
            $table->string('token')->nullable()->comment('token');
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
        Schema::drop('users');
    }
}
