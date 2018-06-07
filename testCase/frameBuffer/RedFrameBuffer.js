"use strict";
RedGL(document.createElement('canvas'), function (v) {
	var tRedGL = this;
	var tGL = tRedGL.gl
	redSuite(
		"RedFrameBuffer 테스트",
		redGroup(
			"생성 확인",
			redTest("기본 생성 테스트", function (unit, title) {
				try {
					var t0 = RedFrameBuffer(tRedGL)
					console.log('///////////////////////////////////////////////////////////')
					console.log(title, '\n', t0)
					unit.run(true)
				} catch ( error ) {
					console.log('///////////////////////////////////////////////////////////')
					console.log(title, '\n', error)
					unit.run(false)
				}
			}, true)
		),
		redGroup(
			"인자 확인",
			redTest("RedGL Instance만 허용하는지", function (unit, title) {
				try {
					var t0 = RedFrameBuffer(1)
					console.log('///////////////////////////////////////////////////////////')
					console.log(title, '\n', t0)
					unit.run(true)
				} catch ( error ) {
					console.log('///////////////////////////////////////////////////////////')
					console.log(title, '\n', error)
					unit.run(false)
				}
			}, false),
			redTest("width 반영되는지", function (unit, title) {
				var t0 = RedFrameBuffer(tRedGL, 123)
				console.log(t0)
				unit.run(t0['width'])
			}, 123),
			redTest("height 반영되는지", function (unit, title) {
				var t0 = RedFrameBuffer(tRedGL, 123, 512)
				console.log(t0)
				unit.run(t0['height'])
			}, 512)
		),
		redGroup(
			"bind, unbind",
			redTest("bind - 소유하고있는 webglFrameBuffer가 등록되는지 확인", function (unit, title) {
				var t0 = RedFrameBuffer(tRedGL)
				t0.bind(tGL)
				console.log(tGL.getParameter(tGL.FRAMEBUFFER_BINDING))
				unit.run(tGL.getParameter(tGL.FRAMEBUFFER_BINDING) == t0['webglFrameBuffer'])
				t0.unbind(tGL)
			}, true),
			redTest("unbind - unbind시 webglFrameBuffer가 unbind 되는지 확인", function (unit, title) {
				var t0 = RedFrameBuffer(tRedGL)
				t0.bind(tGL)
				t0.unbind(tGL)
				unit.run(tGL.getParameter(tGL.FRAMEBUFFER_BINDING) == t0['webglFrameBuffer'])
			}, false),
			redTest("bind - 소유하고있는 webglFrameBuffer가 등록되는지 확인2", function (unit, title) {
				var t0 = RedFrameBuffer(tRedGL)
				t0.bind(tGL)
				unit.run(tGL.getParameter(tGL.FRAMEBUFFER_BINDING) == t0['webglFrameBuffer'])
				t0.unbind(tGL)
			}, true),
			redTest("bind - 소유하고있는 webglTexture가 등록되는지 확인", function (unit, title) {
				var t0 = RedFrameBuffer(tRedGL)
				t0.bind(tGL)
				// console.log(tGL.TEXTURE)
				// console.log(tGL.getFramebufferAttachmentParameter(tGL.FRAMEBUFFER, tGL.COLOR_ATTACHMENT0, tGL.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE))
				// console.log(tGL.getFramebufferAttachmentParameter(tGL.FRAMEBUFFER, tGL.COLOR_ATTACHMENT0, tGL.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME))
				// console.log(tGL.getFramebufferAttachmentParameter(tGL.FRAMEBUFFER, tGL.COLOR_ATTACHMENT0, tGL.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL))
				// console.log(tGL.getFramebufferAttachmentParameter(tGL.FRAMEBUFFER, tGL.COLOR_ATTACHMENT0, tGL.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE))
				console.log(tGL.getParameter(tGL.TEXTURE_BINDING_2D) == t0['texture']['webglTexture'])
				unit.run(tGL.getParameter(tGL.TEXTURE_BINDING_2D) == t0['texture']['webglTexture'])
				t0.unbind(tGL)
			}, true),
			redTest("unbind - unbind시 소유하고있는 webglTexture가 unbind 되는지 확인", function (unit, title) {
				var t0 = RedFrameBuffer(tRedGL)
				t0.bind(tGL)
				t0.unbind(tGL)
				console.log(t0['texture']['webglTexture'])
				unit.run(tGL.getParameter(tGL.TEXTURE_BINDING_2D) == t0['texture']['webglTexture'])
			}, false),
			redTest("bind - 소유하고있는 webglRenderBuffer가 등록되는지 확인", function (unit, title) {
				var t0 = RedFrameBuffer(tRedGL)
				t0.bind(tGL)
				console.log(tGL.getParameter(tGL.RENDERBUFFER_BINDING))
				unit.run(tGL.getParameter(tGL.RENDERBUFFER_BINDING) == t0['webglRenderBuffer'])
				t0.unbind(tGL)
			}, true),
			redTest("unbind - unbind시 소유하고있는 webglRenderBuffer가 unbind 되는지 확인", function (unit, title) {
				var t0 = RedFrameBuffer(tRedGL)
				t0.bind(tGL)
				console.log(tGL.getParameter(tGL.RENDERBUFFER_BINDING))
				unit.run(tGL.getParameter(tGL.RENDERBUFFER_BINDING) == t0['webglRenderBuffer'])
				t0.unbind(tGL)
			}, true),
		)
	)
})