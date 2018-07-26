"use strict";
RedGL(document.createElement('canvas'), function (v) {
	var tRedGL = this;
	var tDiffuseTexture = RedBitmapTexture(tRedGL, RedBitmapTexture.EMPTY_BASE64)
	redSuite(
		"RedParticleBitmapMaterial 테스트",
		redGroup(
			"RedParticleBitmapMaterial( redGL )",
			redTest("성공테스트 : 기본 생성 테스트", function (unit, title) {
				try {
					RedParticleBitmapMaterial(tRedGL, tDiffuseTexture);
					unit.run(true)
				} catch ( error ) {
					console.log('///////////////////////////////////////////////////////////')
					console.log(title, '\n', error)
					unit.run(false)
				}
			}, true),
			redTest("실패테스트 : RedGL instance만 허용.", function (unit, title) {
				try {
					RedParticleBitmapMaterial(1);
					unit.run(true)
				} catch ( error ) {
					console.log('///////////////////////////////////////////////////////////')
					console.log(title, '\n', error)
					unit.run(false)
				}
			}, false)
		),
		redGroup(
			"(RedParticleBitmapMaterial Instance).<b>diffuseTexture</b> = value",
			redTest("실패테스트  : null 세팅 허용하지 않음", function (unit, title) {
				try {
					var t0 = RedParticleBitmapMaterial(tRedGL, tDiffuseTexture);
					t0.diffuseTexture = null
				} catch ( error ) {
					console.log('///////////////////////////////////////////////////////////')
					console.log(title, '\n', error)
					unit.run(false)
				}
			}, false),
			redTest("실패테스트  : RedBitmapTexture Instance만 허용", function (unit, title) {
				try {
					var t0 = RedParticleBitmapMaterial(tRedGL, 1);
					t0.diffuseTexture = null
				} catch ( error ) {
					console.log('///////////////////////////////////////////////////////////')
					console.log(title, '\n', error)
					unit.run(false)
				}
			}, false)
		),
		redGroup(
			"(RedParticleBitmapMaterial Instance).<b>alpha</b> = value",
			redTest("실패테스트  : 생성인자 반영되는지 체크 : 숫자만 허용하는지", function (unit, title) {
				try {
					var t0 = RedParticleBitmapMaterial(tRedGL, tDiffuseTexture);
					t0.alpha = 'failTest'
				} catch ( error ) {
					console.log('///////////////////////////////////////////////////////////')
					console.log(title, '\n', error)
					unit.run(false)
				}
			}, false),
			redTest("성공테스트 : 0.5", function (unit, title) {
				var t0 = RedParticleBitmapMaterial(tRedGL, tDiffuseTexture);
				t0.alpha = 0.5
				unit.run(t0['alpha'])
			}, 0.5),
			redTest("성공테스트 : 1이상을 입력하면 1로 치환되는지", function (unit, title) {
				var t0 = RedParticleBitmapMaterial(tRedGL, tDiffuseTexture);
				t0.alpha = 1000
				unit.run(t0['alpha'])
			}, 1),
			redTest("성공테스트 : 0이하를 입력하면 0으로 치환되는지", function (unit, title) {
				var t0 = RedParticleBitmapMaterial(tRedGL, tDiffuseTexture);
				t0.alpha = -1000
				unit.run(t0['alpha'])
			}, 0)
		),
		redGroup(
			"(RedParticleBitmapMaterial Instance).<b>alphaTest</b> = value",
			redTest("실패테스트  : 생성인자 반영되는지 체크 : 숫자만 허용하는지", function (unit, title) {
				try {
					var t0 = RedParticleBitmapMaterial(tRedGL, tDiffuseTexture);
					t0.alphaTest = 'failTest'
				} catch ( error ) {
					console.log('///////////////////////////////////////////////////////////')
					console.log(title, '\n', error)
					unit.run(false)
				}
			}, false),
			redTest("성공테스트 : 0.5", function (unit, title) {
				var t0 = RedParticleBitmapMaterial(tRedGL, tDiffuseTexture);
				t0.alphaTest = 0.5
				unit.run(t0['alphaTest'])
			}, 0.5),
			redTest("성공테스트 : 1이상을 입력하면 1로 치환되는지", function (unit, title) {
				var t0 = RedParticleBitmapMaterial(tRedGL, tDiffuseTexture);
				t0.alphaTest = 1000
				unit.run(t0['alphaTest'])
			}, 1),
			redTest("성공테스트 : 0이하를 입력하면 0으로 치환되는지", function (unit, title) {
				var t0 = RedParticleBitmapMaterial(tRedGL, tDiffuseTexture);
				t0.alphaTest = -1000
				unit.run(t0['alphaTest'])
			}, 0)
		)
	)
})
