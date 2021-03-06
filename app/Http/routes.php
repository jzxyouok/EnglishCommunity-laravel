<?php

Route::get('/', function () {
    return redirect()->route('admin.index');
});

// 后台路由组
Route::group(['prefix' => 'admin', 'namespace' => 'Admin'], function () {

    Route::group(['middleware' => ['check.register']], function () {
        // 注册
        Route::any('register', 'UserController@register')->name('admin.register');
    });

    // 登录
    Route::any('login', 'UserController@login')->name('admin.login');

    // 注销
    Route::get('logout', 'UserController@logout')->name('admin.logout');

    // 已经登录
    Route::group(['middleware' => ['admin.login']], function () {
    
        // 后台首页
        Route::get('index', 'IndexController@index')->name('admin.index');

        // 文档
        Route::get('apidoc', function () {
            return view('admin.apidoc');
        });

        // 修改密码
        Route::any('modify', 'UserController@modify')->name('admin.modify');

        // 分类
        Route::resource('category', 'CategoryController');

        // 视频
        Route::resource('video', 'VideoController');
        Route::post('upload', 'VideoController@uploadImage')->name('admin.upload');

        // 配置
        Route::resource('option', 'OptionController');

        // 反馈信息
        Route::resource('feedback', 'FeedbackController');
    });
});

// api路由组
Route::group(['prefix' => 'api', 'namespace' => 'Api'], function () {

    Route::group(['prefix' => 'auth'], function () {
        Route::post('register', 'AuthenticateController@register');
        Route::post('login', 'AuthenticateController@login');
    });

    // 查询所有分类列表
    Route::get('category', 'CategoryController@getCategoryies');

    // 根据分类id查询视频信息列表
    Route::get('category/{category}/videos', 'CategoryController@getVideInfosList');

    // 根据视频信息id 获取视频信息
    Route::get('video/{video}', 'VideoController@getVideoList');

    // 解析视频
    Route::get('parse1', 'VideoController@parseYouku1');

});
