define({ "api": [
  {
    "type": "post",
    "url": "/auth/login",
    "title": "app登录",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"status\": \"success\",\n      \"code\": 200,\n      \"message\": \"登录成功\",\n      \"data\": {\n          \"token\": \"xxxx.xxxx.xxx-xx\",\n          \"id\": 1,\n          \"username\": \"admin\",\n          \"nickname\": \"管理员\",\n          \"say\": null,\n          \"avatar\": null,\n          \"mobile\": null,\n          \"score\": 0,\n          \"sex\": 0,\n          \"qq_binding\": 0,\n          \"wx_binding\": 0,\n          \"wb_binding\": 0,\n          \"group\": \"一级会员\",\n          \"permission\": \"管理员\",\n          \"status\": 1,\n          \"register_time\": -62169984000\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n      \"status\": \"error\",\n      \"code\": 404,\n      \"message\": \"用户不存在\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/AuthenticateController.php",
    "groupTitle": "Auth",
    "name": "PostAuthLogin"
  },
  {
    "type": "post",
    "url": "/auth/register",
    "title": "app注册",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>重复密码</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"status\": \"success\",\n      \"code\": 200,\n      \"message\": \"注册成功\",\n      \"data\": {\n          \"username\": \"admin888\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n      \"status\": \"error\",\n      \"code\": 404,\n      \"message\": \"用户名已经存在\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/AuthenticateController.php",
    "groupTitle": "Auth",
    "name": "PostAuthRegister"
  },
  {
    "type": "get",
    "url": "/category",
    "title": "分类列表",
    "description": "<p>获取所有分类信息</p>",
    "group": "Category",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": \"success\",\n    \"code\": 200,\n    \"message\": \"查询分类列表成功\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"name\": \"音标\",\n            \"view\": 0,\n            \"pid\": 0\n        },\n        {\n            \"id\": 2,\n            \"name\": \"单词\",\n            \"view\": 0,\n            \"pid\": 0\n        },\n        {\n            \"id\": 3,\n            \"name\": \"语法\",\n            \"view\": 4,\n            \"pid\": 0\n        },\n        {\n            \"id\": 4,\n            \"name\": \"口语\",\n            \"view\": 0,\n            \"pid\": 0\n        },\n        {\n            \"id\": 5,\n            \"name\": \"听力\",\n            \"view\": 0,\n            \"pid\": 0\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n      \"status\": \"error\",\n      \"code\": 404,\n      \"message\": \"查询分类列表失败\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/CategoryController.php",
    "groupTitle": "Category",
    "name": "GetCategory"
  },
  {
    "type": "get",
    "url": "/category/{category}/video",
    "title": "视频信息列表",
    "description": "<p>根据分类id查询视频信息列表</p>",
    "group": "Category",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "count",
            "description": "<p>每页数量,默认10条</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": \"success\",\n    \"code\": 200,\n    \"message\": \"查询视频列表成功\",\n    \"data\": {\n    \"total\": 25,\n    \"rows\": 2,\n    \"current_page\": 1,\n    \"data\": [\n        {\n            \"id\": 25,\n            \"title\": \"这是一个测试标题\",\n            \"intro\": \"这是一些简介这是一些简介这是一些简介\",\n            \"photo\": \"uploads/2c9337d98f69cd02cbbab4ae0e1cd118.jpg\",\n            \"view\": 0,\n            \"category_id\": 3,\n            \"teacher\": \"苍老师\",\n            \"type\": \"youku\",\n            \"created_at\": \"2016-08-01 05:29:44\",\n            \"updated_at\": \"2016-08-01 06:22:49\"\n            },\n            {\n            \"id\": 24,\n            \"title\": \"这是一个测试标题\",\n            \"intro\": \"这是一些简介这是一些简介这是一些简介\",\n            \"photo\": \"uploads/7f32770735063583890994798c4300d3.jpg\",\n            \"view\": 0,\n            \"category_id\": 3,\n            \"teacher\": \"苍老师\",\n            \"type\": \"youku\",\n            \"created_at\": \"2016-08-01 05:29:44\",\n            \"updated_at\": \"2016-08-01 05:29:44\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n      \"status\": \"error\",\n      \"code\": 404,\n      \"message\": \"查询视频列表失败\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/CategoryController.php",
    "groupTitle": "Category",
    "name": "GetCategoryCategoryVideo"
  },
  {
    "type": "get",
    "url": "/parse1",
    "title": "解析优酷视频1",
    "description": "<p>根据url/id解析flv视频列表,可供分段下载</p>",
    "group": "Video",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": \"success\",\n    \"code\": 200,\n    \"message\": \"解析视频地址成功\",\n    \"data\": {\n        \"normal\": {\n            \"count\": \"2\",\n            \"data\": [\n                \"http://k.youku.com/player/getFlvPath/sid/847022969297012c1d9f3_00/st/flv/fileid/030002020057A01079076B31F0446F4CC58682-901F-3DB9-6F28-0B6148C748B7?K=a506ff12854c8ebe282b9f1b&ctype=12&ev=1&token=3704&oip=3549804647&ep=eiaTGkuPX8gJ5yrYiD8bNC22fSEMXP4J9h%2BFg9JgALshT5m%2FmD7Wzp23SI1BF48ZdiYAZu%2BC2NXvbEgWYflDqB4Q3DraMPrmiPLr5a0hwpEEbmoxdsWls1SdRDD1&ymovie=1\",\n                \"http://k.youku.com/player/getFlvPath/sid/847022969297012c1d9f3_01/st/flv/fileid/030002020157A01079076B31F0446F4CC58682-901F-3DB9-6F28-0B6148C748B7?K=32258eefe0579806261f2881&ctype=12&ev=1&token=3704&oip=3549804647&ep=eiaTGkuPX8gJ5yrYiD8bNC22fSEMXP4J9h%2BFg9JgALohT5m%2FmD7Wzp23SI1BF48ZdiYAZu%2BC2NXvbEgWYflDqB4Q3DraMPrmiPLr5a0hwpEEbmoxdsWls1SdRDD1&ymovie=1\"\n            ]\n        },\n        \"high\": {\n            \"count\": \"2\",\n            \"data\": [\n                \"http://k.youku.com/player/getFlvPath/sid/847022969297012c1d9f3_00/st/mp4/fileid/030008020057A01347076B31F0446F4CC58682-901F-3DB9-6F28-0B6148C748B7?K=99121930a5baabe32412b1e7&ctype=12&ev=1&token=3704&oip=3549804647&ep=eiaTGkuPX8gJ5yrYiD8bNC22fSEMXP4J9h%2BFidJgALshT5m%2FmD3VwJ23SI1BF48ZdiYAZu%2BC2NXvbEgWYflDqB4Q3DraMPrmiPLr5a0hwpEEbmoxdsWls1SdRDD1\",\n                \"http://k.youku.com/player/getFlvPath/sid/847022969297012c1d9f3_01/st/mp4/fileid/030008020157A01347076B31F0446F4CC58682-901F-3DB9-6F28-0B6148C748B7?K=8aabf523c76432272412b1e7&ctype=12&ev=1&token=3704&oip=3549804647&ep=eiaTGkuPX8gJ5yrYiD8bNC22fSEMXP4J9h%2BFidJgALohT5m%2FmD3VwJ23SI1BF48ZdiYAZu%2BC2NXvbEgWYflDqB4Q3DraMPrmiPLr5a0hwpEEbmoxdsWls1SdRDD1\"\n            ]\n        },\n        \"hyper\": {\n            \"count\": \"3\",\n            \"data\": [\n                \"http://k.youku.com/player/getFlvPath/sid/847022969297012c1d9f3_00/st/flv/fileid/030001030057A013C5076B31F0446F4CC58682-901F-3DB9-6F28-0B6148C748B7?K=0926bb69b555efc3261f2881&ctype=12&ev=1&token=3704&oip=3549804647&ep=eiaTGkuPX8gJ5yrYiD8bNC22fSEMXP4J9h%2BFgNJhALshT5m%2FmD2iwp23SI1BF48ZdiYAZu%2BC2NXvbEgWYflDqB4Q3DraMPrmiPLr5a0hwpEEbmoxdsWls1SdRDD1\",\n                \"http://k.youku.com/player/getFlvPath/sid/847022969297012c1d9f3_01/st/flv/fileid/030001030157A013C5076B31F0446F4CC58682-901F-3DB9-6F28-0B6148C748B7?K=53e8c1867c4d32f2261f2881&ctype=12&ev=1&token=3704&oip=3549804647&ep=eiaTGkuPX8gJ5yrYiD8bNC22fSEMXP4J9h%2BFgNJhALohT5m%2FmD2iwp23SI1BF48ZdiYAZu%2BC2NXvbEgWYflDqB4Q3DraMPrmiPLr5a0hwpEEbmoxdsWls1SdRDD1\",\n                \"http://k.youku.com/player/getFlvPath/sid/847022969297012c1d9f3_02/st/flv/fileid/030001030257A013C5076B31F0446F4CC58682-901F-3DB9-6F28-0B6148C748B7?K=e8d08cbef327713e261f2881&ctype=12&ev=1&token=3704&oip=3549804647&ep=eiaTGkuPX8gJ5yrYiD8bNC22fSEMXP4J9h%2BFgNJhALkhT5m%2FmD2iwp23SI1BF48ZdiYAZu%2BC2NXvbEgWYflDqB4Q3DraMPrmiPLr5a0hwpEEbmoxdsWls1SdRDD1\"\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n      \"status\": \"error\",\n      \"code\": 404,\n      \"message\": \"解析视频地址失败\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/VideoController.php",
    "groupTitle": "Video",
    "name": "GetParse1"
  },
  {
    "type": "get",
    "url": "/video/{video}",
    "title": "视频播放列表",
    "description": "<p>根据视频信息id查询视频播放列表</p>",
    "group": "Video",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": \"success\",\n    \"code\": 200,\n    \"message\": \"查询视频播放列表成功\",\n    \"data\": [\n        {\n            \"id\": 137,\n            \"title\": \"音标学习\",\n            \"video_info_id\": 25,\n            \"video_url\": \"http://v.youku.com/v_show/id_XNzg3NTcxMDA=.html\",\n            \"created_at\": \"2016-08-01 06:22:49\",\n            \"updated_at\": \"2016-08-01 06:22:49\",\n            \"order\": 0\n        },\n        {\n            \"id\": 138,\n            \"title\": \"语法学习\",\n            \"video_info_id\": 25,\n            \"video_url\": \"http://v.youku.com/v_show/id_XNzg3NTcxMDA=.html\",\n            \"created_at\": \"2016-08-01 06:22:49\",\n            \"updated_at\": \"2016-08-01 06:22:49\",\n            \"order\": 1\n        },\n        {\n            \"id\": 139,\n            \"title\": \"牛逼学习\",\n            \"video_info_id\": 25,\n            \"video_url\": \"http://v.youku.com/v_show/id_XNzg3NTcxMDA=.html\",\n            \"created_at\": \"2016-08-01 06:22:49\",\n            \"updated_at\": \"2016-08-01 06:22:49\",\n            \"order\": 2\n        },\n        {\n            \"id\": 140,\n            \"title\": \"傻逼学习\",\n            \"video_info_id\": 25,\n            \"video_url\": \"http://v.youku.com/v_show/id_XNzg3NTcxMDA=.html\",\n            \"created_at\": \"2016-08-01 06:22:49\",\n            \"updated_at\": \"2016-08-01 06:22:49\",\n            \"order\": 3\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n      \"status\": \"error\",\n      \"code\": 404,\n      \"message\": \"查询视频播放列表失败\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/VideoController.php",
    "groupTitle": "Video",
    "name": "GetVideoVideo"
  }
] });
