// scope.toggleMode = function() {
//     if (scope.vrMode == true) {
//         camera.fov = 90;
//         camera.updateProjectionMatrix()
//     } else {
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         camera.fov = 70;
//         camera.updateProjectionMatrix();
//         if (typeof deviceOrientationControls !== "undefined" && deviceOrientationControls)
//             deviceOrientationControls.enabled = false
//     }
//     scope.resizeCanvas()

// function isMobileBrowser(t) {
//     return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))
// }
// THREE.DeviceOrientationControls = function(t) {
//     this.object = t,
//     this.object.rotation.reorder("YXZ"),
//     this.freeze = !0,
//     this.movementSpeed = 1,
//     this.rollSpeed = .005,
//     this.autoAlign = !0,
//     this.autoForward = !1,
//     this.alpha = 0,
//     this.beta = 0,
//     this.gamma = 0,
//     this.orient = 0,
//     this.alignQuaternion = new THREE.Quaternion,
//     this.orientationQuaternion = new THREE.Quaternion;
//     var e = new THREE.Quaternion
//       , n = new THREE.Quaternion
//       , o = new THREE.Vector3
//       , i = new THREE.Matrix4
//       , a = new THREE.Euler(0,0,0,"YXZ")
//       , s = new THREE.Quaternion
//       , r = new THREE.Vector3(0,0,1)
//       , c = new THREE.Vector3(0,1,0)
//       , h = new THREE.Vector3(0,0,0)
//       , u = new THREE.Euler
//       , l = new THREE.Quaternion
//       , m = new THREE.Quaternion((-Math.sqrt(.5)),0,0,Math.sqrt(.5));
//     this.deviceOrientation = {},
//     this.screenOrientation = window.orientation || 0,
//     this.onDeviceOrientationChangeEvent = function(t) {
//         this.deviceOrientation = t
//     }
//     .bind(this);
//     var d = function() {
//         switch (window.screen.orientation || window.screen.mozOrientation) {
//         case "landscape-primary":
//             return 90;
//         case "landscape-secondary":
//             return -90;
//         case "portrait-secondary":
//             return 180;
//         case "portrait-primary":
//             return 0
//         }
//         return window.orientation || 0
//     }
//     ;
//     this.onScreenOrientationChangeEvent = function() {
//         this.screenOrientation = d()
//     }
//     .bind(this),
//     this.update = function(t) {
//         return function() {
//             if (!this.freeze) {
//                 var t = d();
//                 t !== this.screenOrientation && (this.screenOrientation = t,
//                 this.autoAlign = !0),
//                 this.alpha = this.deviceOrientation.gamma ? THREE.Math.degToRad(this.deviceOrientation.alpha) : 0,
//                 this.beta = this.deviceOrientation.beta ? THREE.Math.degToRad(this.deviceOrientation.beta) : 0,
//                 this.gamma = this.deviceOrientation.gamma ? THREE.Math.degToRad(this.deviceOrientation.gamma) : 0,
//                 this.orient = this.screenOrientation ? THREE.Math.degToRad(this.screenOrientation) : 0,
//                 u.set(this.beta, this.alpha, -this.gamma, "YXZ"),
//                 e.setFromEuler(u),
//                 n.slerp(e, .5),
//                 this.autoAlign ? this.orientationQuaternion.copy(e) : this.orientationQuaternion.copy(n),
//                 this.orientationQuaternion.multiply(m),
//                 this.orientationQuaternion.multiply(l.setFromAxisAngle(r, -this.orient)),
//                 this.object.quaternion.copy(this.alignQuaternion),
//                 this.object.quaternion.multiply(this.orientationQuaternion),
//                 this.autoForward && (o.set(0, 0, -1).applyQuaternion(this.object.quaternion, "ZXY").setLength(this.movementSpeed / 50),
//                 this.object.position.add(o)),
//                 this.autoAlign && 0 !== this.alpha && (this.autoAlign = !1,
//                 this.align())
//             }
//         }
//     }(),
//     this.align = function() {
//         o.set(0, 0, -1).applyQuaternion(s.copy(this.orientationQuaternion).inverse(), "ZXY"),
//         a.setFromQuaternion(s.setFromRotationMatrix(i.lookAt(o, h, c))),
//         a.set(0, a.y, 0),
//         this.alignQuaternion.setFromEuler(a)
//     }
//     ,
//     this.connect = function() {
//         return this.onScreenOrientationChangeEvent(),
//         window.addEventListener("deviceorientation", this.onDeviceOrientationChangeEvent, !1),
//         this.freeze = !1,
//         this
//     }
//     ,
//     this.disconnect = function() {
//         this.freeze = !0,
//         window.removeEventListener("deviceorientation", this.onDeviceOrientationChangeEvent, !1)
//     }
// }
// ,
// function() {
//     function t(t) {
//         this.object = t,
//         this.target = new THREE.Vector3,
//         this.minDistance = 0,
//         this.maxDistance = 1 / 0,
//         this.minZoom = 0,
//         this.maxZoom = 1 / 0,
//         this.minPolarAngle = 0,
//         this.maxPolarAngle = Math.PI,
//         this.minAzimuthAngle = -(1 / 0),
//         this.maxAzimuthAngle = 1 / 0,
//         this.enableDamping = !1,
//         this.dampingFactor = .25,
//         this.enableGroundLock = !1;
//         var e, n, scope = this, o = 1e-6, i = 0, a = 0, s = 1, r = new THREE.Vector3, c = !1;
//         this.getPolarAngle = function() {
//             return n
//         }
//         ,
//         this.getAzimuthalAngle = function() {
//             return e
//         }
//         ,
//         this.rotateLeft = function(t) {
//             a -= t
//         }
//         ,
//         this.rotateUp = function(t) {
//             i -= t
//         }
//         ,
//         this.panLeft = function() {
//             var t = new THREE.Vector3;
//             return function(e) {
//                 var n = this.object.matrix.elements;
//                 t.set(n[0], n[1], n[2]),
//                 t.multiplyScalar(-e),
//                 r.add(t)
//             }
//         }(),
//         this.panUp = function() {
//             var t = new THREE.Vector3;
//             return function(e) {
//                 var n = this.object.matrix.elements;
//                 scope.enableGroundLock ? t.set(n[4] * (1 - scope.object.up.x), n[5] * (1 - scope.object.up.y), n[6] * (1 - scope.object.up.z)) : t.set(n[4], n[5], n[6]),
//                 t.multiplyScalar(e),
//                 r.add(t)
//             }
//         }(),
//         this.pan = function(t, e, n, o) {
//             if (scope.object instanceof THREE.PerspectiveCamera) {
//                 var i = scope.object.position
//                   , a = i.clone().sub(scope.target)
//                   , s = a.length();
//                 s *= Math.tan(scope.object.fov / 2 * Math.PI / 180),
//                 scope.panLeft(2 * t * s / o),
//                 scope.panUp(2 * e * s / o)
//             } else
//                 scope.object instanceof THREE.OrthographicCamera ? (scope.panLeft(t * (scope.object.right - scope.object.left) / n),
//                 scope.panUp(e * (scope.object.top - scope.object.bottom) / o)) : console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.")
//         }
//         ,
//         this.dollyIn = function(t) {
//             scope.object instanceof THREE.PerspectiveCamera ? s /= t : scope.object instanceof THREE.OrthographicCamera ? (scope.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom * t)),
//             scope.object.updateProjectionMatrix(),
//             c = !0) : console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.")
//         }
//         ,
//         this.dollyOut = function(t) {
//             scope.object instanceof THREE.PerspectiveCamera ? s *= t : scope.object instanceof THREE.OrthographicCamera ? (scope.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / t)),
//             scope.object.updateProjectionMatrix(),
//             c = !0) : console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.")
//         }
//         ,
//         this.update = function() {
//             var h = new THREE.Vector3
//               , u = (new THREE.Quaternion).setFromUnitVectors(t.up, new THREE.Vector3(0,1,0))
//               , l = u.clone().inverse()
//               , m = new THREE.Vector3
//               , d = new THREE.Quaternion;
//             return function() {
//                 var t = this.object.position;
//                 h.copy(t).sub(this.target),
//                 h.applyQuaternion(u),
//                 e = Math.atan2(h.x, h.z),
//                 n = Math.atan2(Math.sqrt(h.x * h.x + h.z * h.z), h.y),
//                 e += a,
//                 n += i,
//                 e = Math.max(this.minAzimuthAngle, Math.min(this.maxAzimuthAngle, e)),
//                 n = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, n)),
//                 n = Math.max(o, Math.min(Math.PI - o, n));
//                 var p = h.length() * s;
//                 return p = Math.max(this.minDistance, Math.min(this.maxDistance, p)),
//                 this.target.add(r),
//                 h.x = p * Math.sin(n) * Math.sin(e),
//                 h.y = p * Math.cos(n),
//                 h.z = p * Math.sin(n) * Math.cos(e),
//                 h.applyQuaternion(l),
//                 t.copy(this.target).add(h),
//                 this.object.lookAt(this.target),
//                 this.enableDamping === !0 ? (a *= 1 - this.dampingFactor,
//                 i *= 1 - this.dampingFactor) : (a = 0,
//                 i = 0),
//                 s = 1,
//                 r.set(0, 0, 0),
//                 !!(c || m.distanceToSquared(this.object.position) > o || 8 * (1 - d.dot(this.object.quaternion)) > o) && (m.copy(this.object.position),
//                 d.copy(this.object.quaternion),
//                 c = !1,
//                 !0)
//             }
//         }()
//     }
//     THREE.OrbitControls = function(e, n) {
//         function o(t, e) {
//             var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
//             E.pan(t, e, element.clientWidth, element.clientHeight)
//         }
//         function i() {
//             return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed
//         }
//         function a() {
//             return Math.pow(.95, scope.zoomSpeed)
//         }
//         function s(t) {
//             if (scope.enabled !== !1) {
//                 if (t.preventDefault(),
//                 t.button === scope.mouseButtons.ORBIT) {
//                     if (scope.enableRotate === !1)
//                         return;
//                     x = H.ROTATE,
//                     b.set(t.clientX, t.clientY)
//                 } else if (t.button === scope.mouseButtons.ZOOM) {
//                     if (scope.enableZoom === !1)
//                         return;
//                     x = H.DOLLY,
//                     y.set(t.clientX, t.clientY)
//                 } else if (t.button === scope.mouseButtons.PAN) {
//                     if (scope.enablePan === !1)
//                         return;
//                     x = H.PAN,
//                     v.set(t.clientX, t.clientY)
//                 }
//                 x !== H.NONE && (document.addEventListener("mousemove", r, !1),
//                 document.addEventListener("mouseup", c, !1),
//                 scope.dispatchEvent(A))
//             }
//         }
//         function r(t) {
//             if (scope.enabled !== !1) {
//                 t.preventDefault();
//                 var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
//                 if (x === H.ROTATE) {
//                     if (scope.enableRotate === !1)
//                         return;
//                     g.set(t.clientX, t.clientY),
//                     f.subVectors(g, b),
//                     E.rotateLeft(2 * Math.PI * f.x / element.clientWidth * scope.rotateSpeed),
//                     E.rotateUp(2 * Math.PI * f.y / element.clientHeight * scope.rotateSpeed),
//                     b.copy(g)
//                 } else if (x === H.DOLLY) {
//                     if (scope.enableZoom === !1)
//                         return;
//                     R.set(t.clientX, t.clientY),
//                     O.subVectors(R, y),
//                     O.y > 0 ? E.dollyIn(a()) : O.y < 0 && E.dollyOut(a()),
//                     y.copy(R)
//                 } else if (x === H.PAN) {
//                     if (scope.enablePan === !1)
//                         return;
//                     w.set(t.clientX, t.clientY),
//                     T.subVectors(w, v),
//                     o(T.x, T.y),
//                     v.copy(w)
//                 }
//                 x !== H.NONE && scope.update()
//             }
//         }
//         function c() {
//             scope.enabled !== !1 && (document.removeEventListener("mousemove", r, !1),
//             document.removeEventListener("mouseup", c, !1),
//             scope.dispatchEvent(P),
//             x = H.NONE)
//         }
//         function h(t) {
//             if (scope.enabled !== !1 && scope.enableZoom !== !1 && x === H.NONE) {
//                 t.preventDefault(),
//                 t.stopPropagation();
//                 var e = 0;
//                 if (void 0 !== t.wheelDelta ? e = t.wheelDelta : void 0 !== t.detail && (e = -t.detail),
//                 e > 0 ? E.dollyOut(a()) : e < 0 && E.dollyIn(a()),
//                 scope.enableZoomToMouse) {
//                     var n = t.clientX - (scope.domElement.offsetLeft + scope.domElement.clientWidth / 2)
//                       , i = t.clientY - (scope.domElement.offsetTop + scope.domElement.clientHeight / 2);
//                     o(-n / 10, -i / 10)
//                 }
//                 scope.update(),
//                 scope.dispatchEvent(A),
//                 scope.dispatchEvent(P)
//             }
//         }
//         function u(t) {
//             if (scope.enabled !== !1 && scope.enableKeys !== !1 && scope.enablePan !== !1)
//                 switch (t.keyCode) {
//                 case scope.keys.UP:
//                     o(0, scope.keyPanSpeed),
//                     scope.update();
//                     break;
//                 case scope.keys.BOTTOM:
//                     o(0, -scope.keyPanSpeed),
//                     scope.update();
//                     break;
//                 case scope.keys.LEFT:
//                     o(scope.keyPanSpeed, 0),
//                     scope.update();
//                     break;
//                 case scope.keys.RIGHT:
//                     o(-scope.keyPanSpeed, 0),
//                     scope.update()
//                 }
//         }
//         function l(t) {
//             if (scope.enabled !== !1) {
//                 switch (t.touches.length) {
//                 case 1:
//                     if (scope.enableRotate === !1)
//                         return;
//                     x = H.TOUCH_ROTATE,
//                     b.set(t.touches[0].pageX, t.touches[0].pageY);
//                     break;
//                 case 2:
//                     if (scope.enableZoom === !1)
//                         return;
//                     x = H.TOUCH_DOLLY;
//                     var e = t.touches[0].pageX - t.touches[1].pageX
//                       , n = t.touches[0].pageY - t.touches[1].pageY
//                       , o = Math.sqrt(e * e + n * n);
//                     y.set(0, o);
//                     break;
//                 case 3:
//                     if (scope.enablePan === !1)
//                         return;
//                     x = H.TOUCH_PAN,
//                     v.set(t.touches[0].pageX, t.touches[0].pageY);
//                     break;
//                 default:
//                     x = H.NONE
//                 }
//                 x !== H.NONE && scope.dispatchEvent(A)
//             }
//         }
//         function m(t) {
//             if (scope.enabled !== !1) {
//                 t.preventDefault(),
//                 t.stopPropagation();
//                 var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
//                 switch (t.touches.length) {
//                 case 1:
//                     if (scope.enableRotate === !1)
//                         return;
//                     if (x !== H.TOUCH_ROTATE)
//                         return;
//                     g.set(t.touches[0].pageX, t.touches[0].pageY),
//                     f.subVectors(g, b),
//                     E.rotateLeft(2 * Math.PI * f.x / element.clientWidth * scope.rotateSpeed),
//                     E.rotateUp(2 * Math.PI * f.y / element.clientHeight * scope.rotateSpeed),
//                     b.copy(g),
//                     scope.update();
//                     break;
//                 case 2:
//                     if (scope.enableZoom === !1)
//                         return;
//                     if (x !== H.TOUCH_DOLLY)
//                         return;
//                     var e = t.touches[0].pageX - t.touches[1].pageX
//                       , n = t.touches[0].pageY - t.touches[1].pageY
//                       , i = Math.sqrt(e * e + n * n);
//                     R.set(0, i),
//                     O.subVectors(R, y),
//                     O.y > 0 ? E.dollyOut(a()) : O.y < 0 && E.dollyIn(a()),
//                     y.copy(R),
//                     scope.update();
//                     break;
//                 case 3:
//                     if (scope.enablePan === !1)
//                         return;
//                     if (x !== H.TOUCH_PAN)
//                         return;
//                     w.set(t.touches[0].pageX, t.touches[0].pageY),
//                     T.subVectors(w, v),
//                     o(T.x, T.y),
//                     v.copy(w),
//                     scope.update();
//                     break;
//                 default:
//                     x = H.NONE
//                 }
//             }
//         }
//         function d() {
//             scope.enabled !== !1 && (scope.dispatchEvent(P),
//             x = H.NONE)
//         }
//         function p(t) {
//             t.preventDefault()
//         }
//         var E = new t(e);
//         this.domElement = void 0 !== n ? n : document,
//         Object.defineProperty(this, "constraint", {
//             get: function() {
//                 return E
//             }
//         }),
//         this.getPolarAngle = function() {
//             return E.getPolarAngle()
//         }
//         ,
//         this.getAzimuthalAngle = function() {
//             return E.getAzimuthalAngle()
//         }
//         ,
//         this.enableGroundLock = function() {
//             E.enableGroundLock = !0
//         }
//         ,
//         this.enabled = !0,
//         this.center = this.target,
//         this.enableZoom = !0,
//         this.zoomSpeed = 1,
//         this.enableRotate = !0,
//         this.rotateSpeed = 1,
//         this.enablePan = !0,
//         this.keyPanSpeed = 7,
//         this.autoRotate = !1,
//         this.autoRotateSpeed = 2,
//         this.enableKeys = !0,
//         this.enableZoomToMouse = !1,
//         this.keys = {
//             LEFT: 37,
//             UP: 38,
//             RIGHT: 39,
//             BOTTOM: 40
//         },
//         this.mouseButtons = {
//             ORBIT: THREE.MOUSE.LEFT,
//             ZOOM: THREE.MOUSE.MIDDLE,
//             PAN: THREE.MOUSE.RIGHT
//         };
//         var scope = this
//           , b = new THREE.Vector2
//           , g = new THREE.Vector2
//           , f = new THREE.Vector2
//           , v = new THREE.Vector2
//           , w = new THREE.Vector2
//           , T = new THREE.Vector2
//           , y = new THREE.Vector2
//           , R = new THREE.Vector2
//           , O = new THREE.Vector2
//           , H = {
//             NONE: -1,
//             ROTATE: 0,
//             DOLLY: 1,
//             PAN: 2,
//             TOUCH_ROTATE: 3,
//             TOUCH_DOLLY: 4,
//             TOUCH_PAN: 5
//         }
//           , x = H.NONE;
//         this.target0 = this.target.clone(),
//         this.position0 = this.object.position.clone(),
//         this.zoom0 = this.object.zoom;
//         var M = {
//             type: "change"
//         }
//           , A = {
//             type: "start"
//         }
//           , P = {
//             type: "end"
//         };
//         this.update = function() {
//             this.autoRotate && x === H.NONE && E.rotateLeft(i()),
//             E.update() === !0 && this.dispatchEvent(M)
//         }
//         ,
//         this.reset = function() {
//             x = H.NONE,
//             this.target.copy(this.target0),
//             this.object.position.copy(this.position0),
//             this.object.zoom = this.zoom0,
//             this.object.updateProjectionMatrix(),
//             this.dispatchEvent(M),
//             this.update()
//         }
//         ,
//         this.dispose = function() {
//             this.domElement.removeEventListener("contextmenu", p, !1),
//             this.domElement.removeEventListener("mousedown", s, !1),
//             this.domElement.removeEventListener("mousewheel", h, !1),
//             this.domElement.removeEventListener("MozMousePixelScroll", h, !1),
//             this.domElement.removeEventListener("touchstart", l, !1),
//             this.domElement.removeEventListener("touchend", d, !1),
//             this.domElement.removeEventListener("touchmove", m, !1),
//             document.removeEventListener("mousemove", r, !1),
//             document.removeEventListener("mouseup", c, !1),
//             window.removeEventListener("keydown", u, !1)
//         }
//         ,
//         this.domElement.addEventListener("contextmenu", p, !1),
//         this.domElement.addEventListener("mousedown", s, !1),
//         this.domElement.addEventListener("mousewheel", h, !1),
//         this.domElement.addEventListener("MozMousePixelScroll", h, !1),
//         this.domElement.addEventListener("touchstart", l, !1),
//         this.domElement.addEventListener("touchend", d, !1),
//         this.domElement.addEventListener("touchmove", m, !1),
//         window.addEventListener("keydown", u, !1),
//         this.update()
//     }
//     ,
//     THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype),
//     THREE.OrbitControls.prototype.constructor = THREE.OrbitControls,
//     Object.defineProperties(THREE.OrbitControls.prototype, {
//         object: {
//             get: function() {
//                 return this.constraint.object
//             }
//         },
//         target: {
//             get: function() {
//                 return this.constraint.target
//             },
//             set: function(t) {
//                 console.warn("THREE.OrbitControls: target is now immutable. Use target.set() instead."),
//                 this.constraint.target.copy(t)
//             }
//         },
//         minDistance: {
//             get: function() {
//                 return this.constraint.minDistance
//             },
//             set: function(t) {
//                 this.constraint.minDistance = t
//             }
//         },
//         maxDistance: {
//             get: function() {
//                 return this.constraint.maxDistance
//             },
//             set: function(t) {
//                 this.constraint.maxDistance = t
//             }
//         },
//         minZoom: {
//             get: function() {
//                 return this.constraint.minZoom
//             },
//             set: function(t) {
//                 this.constraint.minZoom = t
//             }
//         },
//         maxZoom: {
//             get: function() {
//                 return this.constraint.maxZoom
//             },
//             set: function(t) {
//                 this.constraint.maxZoom = t
//             }
//         },
//         minPolarAngle: {
//             get: function() {
//                 return this.constraint.minPolarAngle
//             },
//             set: function(t) {
//                 this.constraint.minPolarAngle = t
//             }
//         },
//         maxPolarAngle: {
//             get: function() {
//                 return this.constraint.maxPolarAngle
//             },
//             set: function(t) {
//                 this.constraint.maxPolarAngle = t
//             }
//         },
//         minAzimuthAngle: {
//             get: function() {
//                 return this.constraint.minAzimuthAngle
//             },
//             set: function(t) {
//                 this.constraint.minAzimuthAngle = t
//             }
//         },
//         maxAzimuthAngle: {
//             get: function() {
//                 return this.constraint.maxAzimuthAngle
//             },
//             set: function(t) {
//                 this.constraint.maxAzimuthAngle = t
//             }
//         },
//         enableDamping: {
//             get: function() {
//                 return this.constraint.enableDamping
//             },
//             set: function(t) {
//                 this.constraint.enableDamping = t
//             }
//         },
//         dampingFactor: {
//             get: function() {
//                 return this.constraint.dampingFactor
//             },
//             set: function(t) {
//                 this.constraint.dampingFactor = t
//             }
//         },
//         noZoom: {
//             get: function() {
//                 return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),
//                 !this.enableZoom
//             },
//             set: function(t) {
//                 console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),
//                 this.enableZoom = !t
//             }
//         },
//         noRotate: {
//             get: function() {
//                 return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),
//                 !this.enableRotate
//             },
//             set: function(t) {
//                 console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),
//                 this.enableRotate = !t
//             }
//         },
//         noPan: {
//             get: function() {
//                 return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),
//                 !this.enablePan
//             },
//             set: function(t) {
//                 console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),
//                 this.enablePan = !t
//             }
//         },
//         noKeys: {
//             get: function() {
//                 return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),
//                 !this.enableKeys
//             },
//             set: function(t) {
//                 console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),
//                 this.enableKeys = !t
//             }
//         },
//         staticMoving: {
//             get: function() {
//                 return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),
//                 !this.constraint.enableDamping
//             },
//             set: function(t) {
//                 console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),
//                 this.constraint.enableDamping = !t
//             }
//         },
//         dynamicDampingFactor: {
//             get: function() {
//                 return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),
//                 this.constraint.dampingFactor
//             },
//             set: function(t) {
//                 console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),
//                 this.constraint.dampingFactor = t
//             }
//         }
//     })
// }(),
// THREE.StereoEffect = function(t) {
//     this.separation = 3;
//     var e, n, o = new THREE.Vector3, i = new THREE.Quaternion, a = new THREE.Vector3, s = new THREE.PerspectiveCamera, r = new THREE.PerspectiveCamera;
//     t.autoClear = !1,
//     this.setSize = function(o, i) {
//         e = o / 2,
//         n = i,
//         t.setSize(o, i)
//     }
//     ,
//     this.render = function(c, h) {
//         c.updateMatrixWorld(),
//         void 0 === h.parent && h.updateMatrixWorld(),
//         h.matrixWorld.decompose(o, i, a),
//         s.fov = h.fov,
//         s.aspect = .5 * h.aspect,
//         s.near = h.near,
//         s.far = h.far,
//         s.updateProjectionMatrix(),
//         s.position.copy(o),
//         s.quaternion.copy(i),
//         s.translateX(-this.separation),
//         s.updateMatrixWorld(),
//         r.near = h.near,
//         r.far = h.far,
//         r.projectionMatrix = s.projectionMatrix,
//         r.position.copy(o),
//         r.quaternion.copy(i),
//         r.translateX(this.separation),
//         r.updateMatrixWorld(),
//         t.setViewport(0, 0, 2 * e, n),
//         t.setViewport(0, 0, e, n),
//         t.render(c, s),
//         t.setViewport(e, 0, e, n),
//         t.render(c, r)
//     }
//     ,
//     this.clearDepth = function() {
//         t.clearDepth()
//     }
// }
// ;
