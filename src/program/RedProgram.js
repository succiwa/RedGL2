"use strict";

var RedProgram;
(function () {
    var makeProgram;
    var tGL;
    var TYPE_MAP;
    makeProgram = (function () {
        var tProgram;
        return function (gl, key, vs, fs) {
            tProgram = gl.createProgram();
            gl.attachShader(tProgram, vs['webglShader']);
            gl.attachShader(tProgram, fs['webglShader']);
            gl.linkProgram(tProgram);
            if (!gl.getProgramParameter(tProgram, gl.LINK_STATUS)) throw "프로그램을 초기화 할 수 없습니다.";
            tProgram.key = key;
            tProgram.vShaderKey = vs.key;
            tProgram.fShaderKey = vs.key;
            gl.useProgram(tProgram);
            return tProgram;
        }
    })()
    RedProgram = function (redGL, key, vs, fs) {
        if (!(this instanceof RedProgram)) return new RedProgram(redGL, key, vs, fs)
        if (!(redGL instanceof RedGL)) throw 'RedProgram : RedGL 인스턴스만 허용됩니다.'
        if (typeof key != 'string') throw 'RedProgram : key - 문자열만 허용됩니다.'
        if (!vs instanceof RedShader) throw 'RedProgram : vShaderInfo - RedShader만 허용됩니다.'
        if (!fs instanceof RedShader) throw 'RedProgram : fShaderInfo - RedShader만 허용됩니다.'
        if (vs['type'] != RedShader.VERTEX) throw 'RedProgram : vShaderInfo - VERTEX 타입만 허용됩니다.'
        if (fs['type'] != RedShader.FRAGMENT) throw 'RedProgram : fShaderInfo - FRAGMENT 타입만 허용됩니다.'
        tGL = redGL.gl;

        if (!redGL['_datas']['RedProgram']) redGL['_datas']['RedProgram'] = {};
        redGL['_datas']['RedProgram'][key] = this


        this['key'] = key;
        this['webglProgram'] = makeProgram(tGL, key, vs, fs);
        tGL.useProgram(this['webglProgram'])



        this.attributeLocation = [];
        this.uniformLocation = [];
        this.systemUniformLocation = [];
        this.updateLocation(vs);
        this.updateLocation(fs);
        console.log(this)
        this['_UUID'] = RedGL['makeUUID']();
        Object.freeze(this)
    }
    TYPE_MAP = {
        //TODO: 이놈정교화
        'mat4': 'mat',
        'mat3': 'mat',
        'mat2': 'mat',
        'vec4': 'vec',
        'vec3': 'vec',
        'vec2': 'vec',
        'float': 'float',
        'int': 'int'
    }
    RedProgram.prototype = {
        updateLocation: (function () {
            var self;
        
            return function (shader) {
                self = this;
                if (shader['parseData']['attribute']) {
                    shader['parseData']['attribute']['list'].forEach(function (v) {
                        var tInfo = {};
                        tInfo = {}
                        tInfo['location'] = tGL.getAttribLocation(self['webglProgram'], v['name']);
                        tInfo['type'] = v['dataType']
                        tInfo['name'] = v['name']
                        self['attributeLocation'].push(tInfo)
                        self['attributeLocation'][v['name']] = tInfo
                    })
                }
                if (shader['parseData']['uniform']) {
                    shader['parseData']['uniform']['list'].forEach(function (v) {
                        var tInfo = {};
                        console.log(v)
                        // console.log(v['name'],tGL.getUniformLocation(self['webglProgram'], v['name']))
                        tInfo['location'] = tGL.getUniformLocation(self['webglProgram'], v['name']);
                        tInfo['type'] = v['dataType']
                        tInfo['renderType'] = TYPE_MAP[v['dataType']]
                        tInfo['name'] = v['name']
                        if (v['systemUniformYn']) {
                            self['systemUniformLocation'].push(tInfo)
                            self['systemUniformLocation'][v['name']] = tInfo
                        } else {
                            self['uniformLocation'].push(tInfo)
                            self['uniformLocation'][v['name']] = tInfo
                        }

                    })

                }
            }
        })()
    }
    Object.freeze(RedProgram)
})();