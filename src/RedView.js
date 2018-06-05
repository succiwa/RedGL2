"use strict";
var RedView;
(function () {
	var ViewMap;
	ViewMap = {};
	/**DOC:
	 {
		 constructorYn : true,
		 title :`RedView`,
		 description : `
			 고유 키를 기반으로 <b>RedScene</b>과 <b>RedCamera를</b> 쌍으로 하는 정보를 소유.
			 <b>RedWorld</b>에 등록되어지며 실제 렌더링시 필요한 그려질 크기와 위치를 결정한다.
		 `,
		 params : {
			 key :[
				 {type:'String'},
				 '고유키',
				 '기존에 존재하는 키일경우 <b>캐쉬된 Instance</b>를 반환'
			 ],
			 scene :[
				 {type:'RedScene'},
				 'RedScene'
			 ],
			 camera :[
				 {type:'RedCamera'},
				 'RedCamera'
			 ]
		 },
		 example : `
			 var tWorld, tScene, tCamera;
			 tScene = RedScene(); // 씬생성
			 tCamera = RedCamera(); // 카메라생성
			 RedView('test', tScene, tCamera); // test라는 키값을 가진 RedView 생성
			 RedView('test2', tScene, tCamera); // test2라는 키값을 가진 RedView 생성
		 `,
		 return : 'RedView Instance'
	 }
	 :DOC*/
	RedView = function (key, scene, camera) {
		if ( ViewMap[key] ) {
			if ( scene || camera ) RedGLUtil.throwFunc('RedView : ' + key, '는 이미 생성된 RedView key입니다.', '입력값 : ' + key)
			else return ViewMap[key]
		}
		if ( !(this instanceof RedView) ) return new RedView(key, scene, camera);
		if ( !(typeof key == 'string') ) RedGLUtil.throwFunc('RedView : key : 문자열만 허용', '입력값 : ' + key)
		if ( !scene && !camera ) RedGLUtil.throwFunc('RedView : 존재하지 않는 key입니다.', '입력값 : ' + key)
		if ( scene && !(scene instanceof RedScene) ) RedGLUtil.throwFunc('RedView : RedScene Instance만 허용', '입력값 : ' + scene)
		//TODO: 카메라 컨트롤러 벨리데이션 어쩔껀지 결정해야함
		if ( !camera ) RedGLUtil.throwFunc('RedView : RedCamera or XXController Instance만 허용', '입력값 : ' + camera)
		else {
			if (
				!(camera instanceof RedCamera)
				&& !(camera instanceof RedBasicController)
				&& !(camera instanceof RedObitController)
			) RedGLUtil.throwFunc('RedView : RedCamera or XXController Instance만 허용')
		}
		/**DOC:
		 {
			 title :`key`,
			 description : `고유키`,
			 return : 'String'
		 }
		 :DOC*/
		this['key'] = key;
		/**DOC:
		 {
			 title :`scene`,
			 description : `scene`,
			 return : 'RedScene'
		 }
		 :DOC*/
		this['scene'] = scene;
		/**DOC:
		 {
			 title :`camera`,
			 description : `camera`,
			 return : 'RedCamera'
		 }
		 :DOC*/
		this['camera'] = camera;
		this['_width'] = '100%';
		this['_height'] = '100%';
		this['_x'] = 0;
		this['_y'] = 0;
		this['_viewRect'] = [0, 0, 0, 0];
		ViewMap[key] = this;
		console.log(this);
	};
	RedView.prototype = {
		/**DOC:
		 {
			 code : 'METHOD',
			 title :`setSize`,
			 description : `
				  씬의 사이즈를 결정.
				  px, % 단위를 받음
			 `,
			 example : `
				  var tWorld, tScene, tCamera;
				  tScene = RedScene(); // 씬생성
				  tCamera = RedCamera(); // 카메라생성
				  RedView('test', tScene, tCamera); // test라는 키값을 가진 RedView 생성
				  RedView('test').setSize(100,100);
				  RedView('test').setSize('50%',100);
			 `,
			 return : 'void'
		 }
		 :DOC*/
		setSize: function (w, h) {
			this['_width'] = w != undefined ? w : '100%';
			this['_height'] = h != undefined ? h : '100%';
		},
		/**DOC:
		 {
			 code : 'METHOD',
			 title :`setLocation`,
			 description : `
				 씬의 위치를 결정.
				 px, % 단위를 받음
			 `,
			 example : `
				  var tWorld, tScene, tCamera;
				  tScene = RedScene(); // 씬생성
				  tCamera = RedCamera(); // 카메라생성
				  RedView('test', tScene, tCamera); // test라는 키값을 가진 RedView 생성
				  RedView('test').setLocation(100,100);
				  RedView('test').setLocation('50%',100);
			 `,
			 return : 'void'
		 }
		 :DOC*/
		setLocation: function (x, y) {
			this['_x'] = x != undefined ? x : 0;
			this['_y'] = y != undefined ? y : 0;
		}
	}
	Object.freeze(RedView);
})();
