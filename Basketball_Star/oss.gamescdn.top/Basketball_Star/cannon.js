var O, h;
O = function() {
    return function $(e, G, o) {
        function i(j, O) {
            if (!G[j]) {
                if (!e[j]) {
                    var h = "function" == typeof require && require;
                    if (!O && h) return h(j, !0);
                    if (a) return a(j, !0);
                    throw new Error("Cannot find module '" + j + "'")
                }
                var X = G[j] = {
                    exports: {}
                };
                e[j][0].call(X.exports, function(O) {
                    var h = e[j][1][O];
                    return i(h || O)
                }, X, X.exports, $, e, G, o)
            }
            return G[j].exports
        }
        for (var a = "function" == typeof require && require, O = 0; O < o.length; O++) i(o[O]);
        return i
    }({
        1: [function(O, h, j) {
            h.exports = {
                name: "cannon",
                version: "0.6.2",
                description: "A lightweight 3D physics engine written in JavaScript.",
                homepage: "",
                author: "Stefan Hedman <schteppe@gmail.com> ()",
                keywords: ["cannon.js", "cannon", "physics", "engine", "3d"],
                main: "./build/cannon.js",
                engines: {
                    node: "*"
                },
                repository: {
                    type: "git",
                    url: ""
                },
                bugs: {
                    url: ""
                },
                licenses: [{
                    type: "MIT"
                }],
                devDependencies: {
                    jshint: "latest",
                    "uglify-js": "latest",
                    nodeunit: "^0.9.0",
                    grunt: "~0.4.0",
                    "grunt-contrib-jshint": "~0.1.1",
                    "grunt-contrib-nodeunit": "^0.4.1",
                    "grunt-contrib-concat": "~0.1.3",
                    "grunt-contrib-uglify": "^0.5.1",
                    "grunt-browserify": "^2.1.4",
                    "grunt-contrib-yuidoc": "^0.5.2",
                    browserify: "*"
                },
                dependencies: {}
            }
        }, {}],
        2: [function(O, h, j) {
            h.exports = {
                version: O("../package.json").version,
                AABB: O("./collision/AABB"),
                ArrayCollisionMatrix: O("./collision/ArrayCollisionMatrix"),
                Body: O("./objects/Body"),
                Box: O("./shapes/Box"),
                Broadphase: O("./collision/Broadphase"),
                Constraint: O("./constraints/Constraint"),
                ContactEquation: O("./equations/ContactEquation"),
                Narrowphase: O("./world/Narrowphase"),
                ConeTwistConstraint: O("./constraints/ConeTwistConstraint"),
                ContactMaterial: O("./material/ContactMaterial"),
                ConvexPolyhedron: O("./shapes/ConvexPolyhedron"),
                Cylinder: O("./shapes/Cylinder"),
                DistanceConstraint: O("./constraints/DistanceConstraint"),
                Equation: O("./equations/Equation"),
                EventTarget: O("./utils/EventTarget"),
                FrictionEquation: O("./equations/FrictionEquation"),
                GSSolver: O("./solver/GSSolver"),
                GridBroadphase: O("./collision/GridBroadphase"),
                Heightfield: O("./shapes/Heightfield"),
                HingeConstraint: O("./constraints/HingeConstraint"),
                LockConstraint: O("./constraints/LockConstraint"),
                Mat3: O("./math/Mat3"),
                Material: O("./material/Material"),
                NaiveBroadphase: O("./collision/NaiveBroadphase"),
                ObjectCollisionMatrix: O("./collision/ObjectCollisionMatrix"),
                Pool: O("./utils/Pool"),
                Particle: O("./shapes/Particle"),
                Plane: O("./shapes/Plane"),
                PointToPointConstraint: O("./constraints/PointToPointConstraint"),
                Quaternion: O("./math/Quaternion"),
                Ray: O("./collision/Ray"),
                RaycastVehicle: O("./objects/RaycastVehicle"),
                RaycastResult: O("./collision/RaycastResult"),
                RigidVehicle: O("./objects/RigidVehicle"),
                RotationalEquation: O("./equations/RotationalEquation"),
                RotationalMotorEquation: O("./equations/RotationalMotorEquation"),
                SAPBroadphase: O("./collision/SAPBroadphase"),
                SPHSystem: O("./objects/SPHSystem"),
                Shape: O("./shapes/Shape"),
                Solver: O("./solver/Solver"),
                Sphere: O("./shapes/Sphere"),
                SplitSolver: O("./solver/SplitSolver"),
                Spring: O("./objects/Spring"),
                Trimesh: O("./shapes/Trimesh"),
                Vec3: O("./math/Vec3"),
                Vec3Pool: O("./utils/Vec3Pool"),
                World: O("./world/World")
            }
        }, {
            "../package.json": 1,
            "./collision/AABB": 3,
            "./collision/ArrayCollisionMatrix": 4,
            "./collision/Broadphase": 5,
            "./collision/GridBroadphase": 6,
            "./collision/NaiveBroadphase": 7,
            "./collision/ObjectCollisionMatrix": 8,
            "./collision/Ray": 9,
            "./collision/RaycastResult": 10,
            "./collision/SAPBroadphase": 11,
            "./constraints/ConeTwistConstraint": 12,
            "./constraints/Constraint": 13,
            "./constraints/DistanceConstraint": 14,
            "./constraints/HingeConstraint": 15,
            "./constraints/LockConstraint": 16,
            "./constraints/PointToPointConstraint": 17,
            "./equations/ContactEquation": 19,
            "./equations/Equation": 20,
            "./equations/FrictionEquation": 21,
            "./equations/RotationalEquation": 22,
            "./equations/RotationalMotorEquation": 23,
            "./material/ContactMaterial": 24,
            "./material/Material": 25,
            "./math/Mat3": 27,
            "./math/Quaternion": 28,
            "./math/Vec3": 30,
            "./objects/Body": 31,
            "./objects/RaycastVehicle": 32,
            "./objects/RigidVehicle": 33,
            "./objects/SPHSystem": 34,
            "./objects/Spring": 35,
            "./shapes/Box": 37,
            "./shapes/ConvexPolyhedron": 38,
            "./shapes/Cylinder": 39,
            "./shapes/Heightfield": 40,
            "./shapes/Particle": 41,
            "./shapes/Plane": 42,
            "./shapes/Shape": 43,
            "./shapes/Sphere": 44,
            "./shapes/Trimesh": 45,
            "./solver/GSSolver": 46,
            "./solver/Solver": 47,
            "./solver/SplitSolver": 48,
            "./utils/EventTarget": 49,
            "./utils/Pool": 51,
            "./utils/Vec3Pool": 54,
            "./world/Narrowphase": 55,
            "./world/World": 56
        }],
        3: [function(O, h, j) {
            var X = O("../math/Vec3");
            O("../utils/Utils");

            function $(O) {
                O = O || {}, this.lowerBound = new X, O.lowerBound && this.lowerBound.copy(O.lowerBound), this.upperBound = new X, O.upperBound && this.upperBound.copy(O.upperBound)
            }
            h.exports = $;
            var a = new X;
            $.prototype.setFromPoints = function(O, h, j, X) {
                var $ = this.lowerBound,
                    e = this.upperBound,
                    G = j;
                $.copy(O[0]), G && G.vmult($, $), e.copy($);
                for (var o = 1; o < O.length; o++) {
                    var i = O[o];
                    G && (G.vmult(i, a), i = a), i.x > e.x && (e.x = i.x), i.x < $.x && ($.x = i.x), i.y > e.y && (e.y = i.y), i.y < $.y && ($.y = i.y), i.z > e.z && (e.z = i.z), i.z < $.z && ($.z = i.z)
                }
                return h && (h.vadd($, $), h.vadd(e, e)), X && ($.x -= X, $.y -= X, $.z -= X, e.x += X, e.y += X, e.z += X), this
            }, $.prototype.copy = function(O) {
                return this.lowerBound.copy(O.lowerBound), this.upperBound.copy(O.upperBound), this
            }, $.prototype.clone = function() {
                return (new $).copy(this)
            }, $.prototype.extend = function(O) {
                var h = O.lowerBound.x;
                this.lowerBound.x > h && (this.lowerBound.x = h);
                var j = O.upperBound.x;
                this.upperBound.x < j && (this.upperBound.x = j);
                h = O.lowerBound.y;
                this.lowerBound.y > h && (this.lowerBound.y = h);
                j = O.upperBound.y;
                this.upperBound.y < j && (this.upperBound.y = j);
                h = O.lowerBound.z;
                this.lowerBound.z > h && (this.lowerBound.z = h);
                j = O.upperBound.z;
                this.upperBound.z < j && (this.upperBound.z = j)
            }, $.prototype.overlaps = function(O) {
                var h = this.lowerBound,
                    j = this.upperBound,
                    X = O.lowerBound,
                    $ = O.upperBound;
                return (X.x <= j.x && j.x <= $.x || h.x <= $.x && $.x <= j.x) && (X.y <= j.y && j.y <= $.y || h.y <= $.y && $.y <= j.y) && (X.z <= j.z && j.z <= $.z || h.z <= $.z && $.z <= j.z)
            }, $.prototype.contains = function(O) {
                var h = this.lowerBound,
                    j = this.upperBound,
                    X = O.lowerBound,
                    $ = O.upperBound;
                return h.x <= X.x && j.x >= $.x && h.y <= X.y && j.y >= $.y && h.z <= X.z && j.z >= $.z
            }, $.prototype.getCorners = function(O, h, j, X, $, e, G, o) {
                var i = this.lowerBound,
                    a = this.upperBound;
                O.copy(i), h.set(a.x, i.y, i.z), j.set(a.x, a.y, i.z), X.set(i.x, a.y, a.z), $.set(a.x, i.y, i.z), e.set(i.x, a.y, i.z), G.set(i.x, i.y, a.z), o.copy(a)
            };
            var n = [new X, new X, new X, new X, new X, new X, new X, new X];
            $.prototype.toLocalFrame = function(O, h) {
                var j = n,
                    X = j[0],
                    $ = j[1],
                    e = j[2],
                    G = j[3],
                    o = j[4],
                    i = j[5],
                    a = j[6],
                    K = j[7];
                this.getCorners(X, $, e, G, o, i, a, K);
                for (var R = 0; 8 !== R; R++) {
                    var z = j[R];
                    O.pointToLocal(z, z)
                }
                return h.setFromPoints(j)
            }, $.prototype.toWorldFrame = function(O, h) {
                var j = n,
                    X = j[0],
                    $ = j[1],
                    e = j[2],
                    G = j[3],
                    o = j[4],
                    i = j[5],
                    a = j[6],
                    K = j[7];
                this.getCorners(X, $, e, G, o, i, a, K);
                for (var R = 0; 8 !== R; R++) {
                    var z = j[R];
                    O.pointToWorld(z, z)
                }
                return h.setFromPoints(j)
            }
        }, {
            "../math/Vec3": 30,
            "../utils/Utils": 53
        }],
        4: [function(O, h, j) {
            function X() {
                this.matrix = []
            }(h.exports = X).prototype.get = function(O, h) {
                if ((O = O.index) < (h = h.index)) {
                    var j = h;
                    h = O, O = j
                }
                return this.matrix[(O * (O + 1) >> 1) + h - 1]
            }, X.prototype.set = function(O, h, j) {
                if ((O = O.index) < (h = h.index)) {
                    var X = h;
                    h = O, O = X
                }
                this.matrix[(O * (O + 1) >> 1) + h - 1] = j ? 1 : 0
            }, X.prototype.reset = function() {
                for (var O = 0, h = this.matrix.length; O !== h; O++) this.matrix[O] = 0
            }, X.prototype.setNumObjects = function(O) {
                this.matrix.length = O * (O - 1) >> 1
            }
        }, {}],
        5: [function(O, h, j) {
            var X = O("../objects/Body"),
                $ = O("../math/Vec3"),
                e = O("../math/Quaternion");
            O("../shapes/Shape"), O("../shapes/Plane");

            function G() {
                this.world = null, this.useBoundingBoxes = !1, this.dirty = !0
            }(h.exports = G).prototype.collisionPairs = function(O, h, j) {
                throw new Error("collisionPairs not implemented for this BroadPhase class!")
            };
            var o = X.STATIC | X.KINEMATIC;
            G.prototype.needBroadphaseCollision = function(O, h) {
                return 0 != (O.collisionFilterGroup & h.collisionFilterMask) && 0 != (h.collisionFilterGroup & O.collisionFilterMask) && (0 == (O.type & o) && O.sleepState !== X.SLEEPING || 0 == (h.type & o) && h.sleepState !== X.SLEEPING)
            }, G.prototype.intersectionTest = function(O, h, j, X) {
                this.useBoundingBoxes ? this.doBoundingBoxBroadphase(O, h, j, X) : this.doBoundingSphereBroadphase(O, h, j, X)
            };
            var i = new $;
            new $, new e, new $;
            G.prototype.doBoundingSphereBroadphase = function(O, h, j, X) {
                var $ = i;
                h.position.vsub(O.position, $);
                var e = Math.pow(O.boundingRadius + h.boundingRadius, 2);
                $.norm2() < e && (j.push(O), X.push(h))
            }, G.prototype.doBoundingBoxBroadphase = function(O, h, j, X) {
                O.aabbNeedsUpdate && O.computeAABB(), h.aabbNeedsUpdate && h.computeAABB(), O.aabb.overlaps(h.aabb) && (j.push(O), X.push(h))
            };
            var R = {
                    keys: []
                },
                z = [],
                n = [];
            G.prototype.makePairsUnique = function(O, h) {
                for (var j = R, X = z, $ = n, e = O.length, G = 0; G !== e; G++) X[G] = O[G], $[G] = h[G];
                O.length = 0;
                for (G = h.length = 0; G !== e; G++) {
                    var o = X[G].id,
                        i = $[G].id;
                    j[a = o < i ? o + "," + i : i + "," + o] = G, j.keys.push(a)
                }
                for (G = 0; G !== j.keys.length; G++) {
                    var a = j.keys.pop(),
                        K = j[a];
                    O.push(X[K]), h.push($[K]), delete j[a]
                }
            }, G.prototype.setWorld = function(O) {};
            var a = new $;
            G.boundingSphereCheck = function(O, h) {
                var j = a;
                return O.position.vsub(h.position, j), Math.pow(O.shape.boundingSphereRadius + h.shape.boundingSphereRadius, 2) > j.norm2()
            }, G.prototype.aabbQuery = function(O, h, j) {
                return console.warn(".aabbQuery is not implemented in this Broadphase subclass."), []
            }
        }, {
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "../objects/Body": 31,
            "../shapes/Plane": 42,
            "../shapes/Shape": 43
        }],
        6: [function(O, h, j) {
            h.exports = X;
            var o = O("./Broadphase"),
                i = O("../math/Vec3"),
                jO = O("../shapes/Shape");

            function X(O, h, j, X, $) {
                o.apply(this), this.nx = j || 10, this.ny = X || 10, this.nz = $ || 10, this.aabbMin = O || new i(100, 100, 100), this.aabbMax = h || new i(-100, -100, -100);
                var e = this.nx * this.ny * this.nz;
                if (e <= 0) throw "GridBroadphase: Each dimension's n must be >0";
                this.bins = [], this.binLengths = [], this.bins.length = e, this.binLengths.length = e;
                for (var G = 0; G < e; G++) this.bins[G] = [], this.binLengths[G] = 0
            }(X.prototype = new o).constructor = X;
            var XO = new i;
            new i;
            X.prototype.collisionPairs = function(O, h, j) {
                for (var X = O.numObjects(), $ = O.bodies, e = this.aabbMax, G = this.aabbMin, m = this.nx, P = this.ny, U = this.nz, w = P * U, F = U, B = 1, o = e.x, i = e.y, a = e.z, r = G.x, l = G.y, c = G.z, g = m / (o - r), q = P / (i - l), J = U / (a - c), K = (o - r) / m, R = (i - l) / P, z = (a - c) / U, n = .5 * Math.sqrt(K * K + R * R + z * z), M = jO.types, C = M.SPHERE, Z = M.PLANE, v = (M.BOX, M.COMPOUND, M.CONVEXPOLYHEDRON, this.bins), s = this.binLengths, A = this.bins.length, u = 0; u !== A; u++) s[u] = 0;
                var b = Math.ceil;
                G = Math.min, e = Math.max;

                function D(O, h, j, X, $, e, G) {
                    var o = (O - r) * g | 0,
                        i = (h - l) * q | 0,
                        a = (j - c) * J | 0,
                        K = b((X - r) * g),
                        R = b(($ - l) * q),
                        z = b((e - c) * J);
                    o < 0 ? o = 0 : m <= o && (o = m - 1), i < 0 ? i = 0 : P <= i && (i = P - 1), a < 0 ? a = 0 : U <= a && (a = U - 1), K < 0 ? K = 0 : m <= K && (K = m - 1), R < 0 ? R = 0 : P <= R && (R = P - 1), z < 0 ? z = 0 : U <= z && (z = U - 1), i *= F, a *= B, K *= w, R *= F, z *= B;
                    for (var n = o *= w; n <= K; n += w)
                        for (var M = i; M <= R; M += F)
                            for (var C = a; C <= z; C += B) {
                                var Z = n + M + C;
                                v[Z][s[Z]++] = G
                            }
                }
                for (u = 0; u !== X; u++) {
                    var x = (OO = $[u]).shape;
                    switch (x.type) {
                        case C:
                            var I = OO.position.x,
                                p = OO.position.y,
                                k = OO.position.z,
                                d = x.radius;
                            D(I - d, p - d, k - d, I + d, p + d, k + d, OO);
                            break;
                        case Z:
                            x.worldNormalNeedsUpdate && x.computeWorldNormal(OO.quaternion);
                            var W = x.worldNormal,
                                f = r + .5 * K - OO.position.x,
                                T = l + .5 * R - OO.position.y,
                                S = c + .5 * z - OO.position.z,
                                L = XO;
                            L.set(f, T, S);
                            for (var y = 0, Y = 0; y !== m; y++, Y += w, L.y = T, L.x += K)
                                for (var Q = 0, H = 0; Q !== P; Q++, H += F, L.z = S, L.y += R)
                                    for (var t = 0, _ = 0; t !== U; t++, _ += B, L.z += z)
                                        if (L.dot(W) < n) {
                                            var E = Y + H + _;
                                            v[E][s[E]++] = OO
                                        }
                            break;
                        default:
                            OO.aabbNeedsUpdate && OO.computeAABB(), D(OO.aabb.lowerBound.x, OO.aabb.lowerBound.y, OO.aabb.lowerBound.z, OO.aabb.upperBound.x, OO.aabb.upperBound.y, OO.aabb.upperBound.z, OO)
                    }
                }
                for (u = 0; u !== A; u++) {
                    var N = s[u];
                    if (1 < N) {
                        var V = v[u];
                        for (y = 0; y !== N; y++) {
                            var OO = V[y];
                            for (Q = 0; Q !== y; Q++) {
                                var hO = V[Q];
                                this.needBroadphaseCollision(OO, hO) && this.intersectionTest(OO, hO, h, j)
                            }
                        }
                    }
                }
                this.makePairsUnique(h, j)
            }
        }, {
            "../math/Vec3": 30,
            "../shapes/Shape": 43,
            "./Broadphase": 5
        }],
        7: [function(O, h, j) {
            h.exports = e;
            var X = O("./Broadphase"),
                $ = O("./AABB");

            function e() {
                X.apply(this)
            }((e.prototype = new X).constructor = e).prototype.collisionPairs = function(O, h, j) {
                var X, $, e, G, o = O.bodies,
                    i = o.length;
                for (X = 0; X !== i; X++)
                    for ($ = 0; $ !== X; $++) e = o[X], G = o[$], this.needBroadphaseCollision(e, G) && this.intersectionTest(e, G, h, j)
            };
            new $;
            e.prototype.aabbQuery = function(O, h, j) {
                j = j || [];
                for (var X = 0; X < O.bodies.length; X++) {
                    var $ = O.bodies[X];
                    $.aabbNeedsUpdate && $.computeAABB(), $.aabb.overlaps(h) && j.push($)
                }
                return j
            }
        }, {
            "./AABB": 3,
            "./Broadphase": 5
        }],
        8: [function(O, h, j) {
            function X() {
                this.matrix = {}
            }(h.exports = X).prototype.get = function(O, h) {
                if ((O = O.id) < (h = h.id)) {
                    var j = h;
                    h = O, O = j
                }
                return O + "-" + h in this.matrix
            }, X.prototype.set = function(O, h, j) {
                if ((O = O.id) < (h = h.id)) {
                    var X = h;
                    h = O, O = X
                }
                j ? this.matrix[O + "-" + h] = !0 : delete this.matrix[O + "-" + h]
            }, X.prototype.reset = function() {
                this.matrix = {}
            }, X.prototype.setNumObjects = function(O) {}
        }, {}],
        9: [function(O, h, j) {
            h.exports = Z;
            var C = O("../math/Vec3"),
                X = O("../math/Quaternion"),
                c = O("../math/Transform"),
                $ = (O("../shapes/ConvexPolyhedron"), O("../shapes/Box"), O("../collision/RaycastResult")),
                e = O("../shapes/Shape"),
                G = O("../collision/AABB");

            function Z(O, h) {
                this.from = O ? O.clone() : new C, this.to = h ? h.clone() : new C, this._direction = new C, this.precision = 1e-4, this.checkCollisionResponse = !0, this.skipBackfaces = !1, this.collisionFilterMask = -1, this.collisionFilterGroup = -1, this.mode = Z.ANY, this.result = new $, this.hasHit = !1, this.callback = function(O) {}
            }(Z.prototype.constructor = Z).CLOSEST = 1, Z.ANY = 2, Z.ALL = 4;
            var o = new G,
                i = [];
            Z.prototype.intersectWorld = function(O, h) {
                return this.mode = h.mode || Z.ANY, this.result = h.result || new $, this.skipBackfaces = !!h.skipBackfaces, this.collisionFilterMask = void 0 !== h.collisionFilterMask ? h.collisionFilterMask : -1, this.collisionFilterGroup = void 0 !== h.collisionFilterGroup ? h.collisionFilterGroup : -1, h.from && this.from.copy(h.from), h.to && this.to.copy(h.to), this.callback = h.callback || function() {}, this.hasHit = !1, this.result.reset(), this._updateDirection(), this.getAABB(o), i.length = 0, O.broadphase.aabbQuery(O, o, i), this.intersectBodies(i), this.hasHit
            };
            var R = new C,
                z = new C;

            function q(O, h, j, X) {
                X.vsub(h, n), j.vsub(h, R), O.vsub(h, z);
                var $, e, G = n.dot(n),
                    o = n.dot(R),
                    i = n.dot(z),
                    a = R.dot(R),
                    K = R.dot(z);
                return 0 <= ($ = a * i - o * K) && 0 <= (e = G * K - o * i) && $ + e < G * a - o * o
            }
            Z.pointInTriangle = q;
            var a = new C,
                K = new X;
            Z.prototype.intersectBody = function(O, h) {
                h && (this.result = h, this._updateDirection());
                var j = this.checkCollisionResponse;
                if ((!j || O.collisionResponse) && 0 != (this.collisionFilterGroup & O.collisionFilterMask) && 0 != (O.collisionFilterGroup & this.collisionFilterMask))
                    for (var X = a, $ = K, e = 0, G = O.shapes.length; e < G; e++) {
                        var o = O.shapes[e];
                        if ((!j || o.collisionResponse) && (O.quaternion.mult(O.shapeOrientations[e], $), O.quaternion.vmult(O.shapeOffsets[e], X), X.vadd(O.position, X), this.intersectShape(o, $, X, O), this.result._shouldStop)) break
                    }
            }, Z.prototype.intersectBodies = function(O, h) {
                h && (this.result = h, this._updateDirection());
                for (var j = 0, X = O.length; !this.result._shouldStop && j < X; j++) this.intersectBody(O[j])
            }, Z.prototype._updateDirection = function() {
                this.to.vsub(this.from, this._direction), this._direction.normalize()
            }, Z.prototype.intersectShape = function(O, h, j, X) {
                if (!(function(O, h, j) {
                        j.vsub(O, n);
                        var X = n.dot(h);
                        return h.mult(X, M), M.vadd(O, M), j.distanceTo(M)
                    }(this.from, this._direction, j) > O.boundingSphereRadius)) {
                    var $ = this[O.type];
                    $ && $.call(this, O, h, j, X)
                }
            };
            new C, new C;
            var J = new C,
                v = new C,
                s = new C,
                A = new C;
            new C, new $;
            Z.prototype.intersectBox = function(O, h, j, X) {
                return this.intersectConvex(O.convexPolyhedronRepresentation, h, j, X)
            }, Z.prototype[e.types.BOX] = Z.prototype.intersectBox, Z.prototype.intersectPlane = function(O, h, j, X) {
                var $ = this.from,
                    e = this.to,
                    G = this._direction,
                    o = new C(0, 0, 1);
                h.vmult(o, o);
                var i = new C;
                $.vsub(j, i);
                var a = i.dot(o);
                if (e.vsub(j, i), !(0 < a * i.dot(o) || $.distanceTo(e) < a)) {
                    var K = o.dot(G);
                    if (!(Math.abs(K) < this.precision)) {
                        var R = new C,
                            z = new C,
                            n = new C;
                        $.vsub(j, R);
                        var M = -o.dot(R) / K;
                        G.scale(M, z), $.vadd(z, n), this.reportIntersection(o, n, O, X, -1)
                    }
                }
            }, Z.prototype[e.types.PLANE] = Z.prototype.intersectPlane, Z.prototype.getAABB = function(O) {
                var h = this.to,
                    j = this.from;
                O.lowerBound.x = Math.min(h.x, j.x), O.lowerBound.y = Math.min(h.y, j.y), O.lowerBound.z = Math.min(h.z, j.z), O.upperBound.x = Math.max(h.x, j.x), O.upperBound.y = Math.max(h.y, j.y), O.upperBound.z = Math.max(h.z, j.z)
            };
            var m = {
                faceList: [0]
            };
            Z.prototype.intersectHeightfield = function(O, h, j, X) {
                O.data, O.elementSize;
                var $ = new C,
                    e = new Z(this.from, this.to);
                c.pointToLocalFrame(j, h, e.from, e.from), c.pointToLocalFrame(j, h, e.to, e.to);
                var G = [],
                    o = null,
                    i = null,
                    a = null,
                    K = null,
                    R = O.getIndexOfPosition(e.from.x, e.from.y, G, !1);
                if (R && (a = o = G[0], K = i = G[1]), (R = O.getIndexOfPosition(e.to.x, e.to.y, G, !1)) && ((null === o || G[0] < o) && (o = G[0]), (null === a || a < G[0]) && (a = G[0]), (null === i || G[1] < i) && (i = G[1]), (null === K || K < G[1]) && (K = G[1])), null !== o) {
                    var z = [];
                    O.getRectMinMax(o, i, a, K, z);
                    for (var n = o; n <= a; n++)
                        for (var M = i; M <= K; M++) {
                            if (this.result._shouldStop) return;
                            if (O.getConvexTrianglePillar(n, M, !1), c.pointToWorldFrame(j, h, O.pillarOffset, $), this.intersectConvex(O.pillarConvex, h, $, X, m), this.result._shouldStop) return;
                            O.getConvexTrianglePillar(n, M, !0), c.pointToWorldFrame(j, h, O.pillarOffset, $), this.intersectConvex(O.pillarConvex, h, $, X, m)
                        }
                }
            }, Z.prototype[e.types.HEIGHTFIELD] = Z.prototype.intersectHeightfield;
            var P = new C,
                U = new C;
            Z.prototype.intersectSphere = function(O, h, j, X) {
                var $ = this.from,
                    e = this.to,
                    G = O.radius,
                    o = Math.pow(e.x - $.x, 2) + Math.pow(e.y - $.y, 2) + Math.pow(e.z - $.z, 2),
                    i = 2 * ((e.x - $.x) * ($.x - j.x) + (e.y - $.y) * ($.y - j.y) + (e.z - $.z) * ($.z - j.z)),
                    a = Math.pow($.x - j.x, 2) + Math.pow($.y - j.y, 2) + Math.pow($.z - j.z, 2) - Math.pow(G, 2),
                    K = Math.pow(i, 2) - 4 * o * a,
                    R = P,
                    z = U;
                if (!(K < 0))
                    if (0 === K) $.lerp(e, K, R), R.vsub(j, z), z.normalize(), this.reportIntersection(z, R, O, X, -1);
                    else {
                        var n = (-i - Math.sqrt(K)) / (2 * o),
                            M = (-i + Math.sqrt(K)) / (2 * o);
                        if (0 <= n && n <= 1 && ($.lerp(e, n, R), R.vsub(j, z), z.normalize(), this.reportIntersection(z, R, O, X, -1)), this.result._shouldStop) return;
                        0 <= M && M <= 1 && ($.lerp(e, M, R), R.vsub(j, z), z.normalize(), this.reportIntersection(z, R, O, X, -1))
                    }
            }, Z.prototype[e.types.SPHERE] = Z.prototype.intersectSphere;
            var u = new C,
                b = (new C, new C, new C);
            Z.prototype.intersectConvex = function(O, h, j, X, $) {
                for (var e = u, G = b, o = $ && $.faceList || null, i = O.faces, a = O.vertices, K = O.faceNormals, R = this._direction, z = this.from, n = this.to, M = z.distanceTo(n), C = o ? o.length : i.length, Z = this.result, m = 0; !Z._shouldStop && m < C; m++) {
                    var P = o ? o[m] : m,
                        U = i[P],
                        w = K[P],
                        F = h,
                        B = j;
                    G.copy(a[U[0]]), F.vmult(G, G), G.vadd(B, G), G.vsub(z, G), F.vmult(w, e);
                    var r = R.dot(e);
                    if (!(Math.abs(r) < this.precision)) {
                        var l = e.dot(G) / r;
                        if (!(l < 0)) {
                            R.mult(l, J), J.vadd(z, J), v.copy(a[U[0]]), F.vmult(v, v), B.vadd(v, v);
                            for (var c = 1; !Z._shouldStop && c < U.length - 1; c++) {
                                s.copy(a[U[c]]), A.copy(a[U[c + 1]]), F.vmult(s, s), F.vmult(A, A), B.vadd(s, s), B.vadd(A, A);
                                var g = J.distanceTo(z);
                                !q(J, v, s, A) && !q(J, s, v, A) || M < g || this.reportIntersection(e, J, O, X, P)
                            }
                        }
                    }
                }
            }, Z.prototype[e.types.CONVEXPOLYHEDRON] = Z.prototype.intersectConvex;
            var g = new C,
                D = new C,
                x = new C,
                I = new C,
                p = new C,
                k = new C,
                d = (new G, []),
                W = new c;
            Z.prototype.intersectTrimesh = function(O, h, j, X, $) {
                var e = g,
                    G = d,
                    o = W,
                    i = b,
                    a = D,
                    K = x,
                    R = I,
                    z = k,
                    n = p,
                    M = ($ && $.faceList, O.indices),
                    C = (O.vertices, O.faceNormals, this.from),
                    Z = this.to,
                    m = this._direction;
                o.position.copy(j), o.quaternion.copy(h), c.vectorToLocalFrame(j, h, m, a), c.pointToLocalFrame(j, h, C, K), c.pointToLocalFrame(j, h, Z, R);
                var P = K.distanceSquared(R);
                O.tree.rayQuery(this, o, G);
                for (var U = 0, w = G.length; !this.result._shouldStop && U !== w; U++) {
                    var F = G[U];
                    O.getNormal(F, e), O.getVertex(M[3 * F], v), v.vsub(K, i);
                    var B = a.dot(e),
                        r = e.dot(i) / B;
                    if (!(r < 0)) {
                        a.scale(r, J), J.vadd(K, J), O.getVertex(M[3 * F + 1], s), O.getVertex(M[3 * F + 2], A);
                        var l = J.distanceSquared(K);
                        !q(J, s, v, A) && !q(J, v, s, A) || P < l || (c.vectorToWorldFrame(h, e, n), c.pointToWorldFrame(j, h, J, z), this.reportIntersection(n, z, O, X, F))
                    }
                }
                G.length = 0
            }, Z.prototype[e.types.TRIMESH] = Z.prototype.intersectTrimesh, Z.prototype.reportIntersection = function(O, h, j, X, $) {
                var e = this.from,
                    G = this.to,
                    o = e.distanceTo(h),
                    i = this.result;
                if (!(this.skipBackfaces && 0 < O.dot(this._direction))) switch (i.hitFaceIndex = void 0 !== $ ? $ : -1, this.mode) {
                    case Z.ALL:
                        this.hasHit = !0, i.set(e, G, O, h, j, X, o), i.hasHit = !0, this.callback(i);
                        break;
                    case Z.CLOSEST:
                        (o < i.distance || !i.hasHit) && (this.hasHit = !0, i.hasHit = !0, i.set(e, G, O, h, j, X, o));
                        break;
                    case Z.ANY:
                        this.hasHit = !0, i.hasHit = !0, i.set(e, G, O, h, j, X, o), i._shouldStop = !0
                }
            };
            var n = new C,
                M = new C
        }, {
            "../collision/AABB": 3,
            "../collision/RaycastResult": 10,
            "../math/Quaternion": 28,
            "../math/Transform": 29,
            "../math/Vec3": 30,
            "../shapes/Box": 37,
            "../shapes/ConvexPolyhedron": 38,
            "../shapes/Shape": 43
        }],
        10: [function(O, h, j) {
            var X = O("../math/Vec3");

            function $() {
                this.rayFromWorld = new X, this.rayToWorld = new X, this.hitNormalWorld = new X, this.hitPointWorld = new X, this.hasHit = !1, this.shape = null, this.body = null, this.hitFaceIndex = -1, this.distance = -1, this._shouldStop = !1
            }(h.exports = $).prototype.reset = function() {
                this.rayFromWorld.setZero(), this.rayToWorld.setZero(), this.hitNormalWorld.setZero(), this.hitPointWorld.setZero(), this.hasHit = !1, this.shape = null, this.body = null, this.hitFaceIndex = -1, this.distance = -1, this._shouldStop = !1
            }, $.prototype.abort = function() {
                this._shouldStop = !0
            }, $.prototype.set = function(O, h, j, X, $, e, G) {
                this.rayFromWorld.copy(O), this.rayToWorld.copy(h), this.hitNormalWorld.copy(j), this.hitPointWorld.copy(X), this.shape = $, this.body = e, this.distance = G
            }
        }, {
            "../math/Vec3": 30
        }],
        11: [function(O, h, j) {
            O("../shapes/Shape");
            var X = O("../collision/Broadphase");

            function K(O) {
                X.apply(this), this.axisList = [], this.world = null, this.axisIndex = 0;
                var j = this.axisList;
                this._addBodyHandler = function(O) {
                    j.push(O.body)
                }, this._removeBodyHandler = function(O) {
                    var h = j.indexOf(O.body); - 1 !== h && j.splice(h, 1)
                }, O && this.setWorld(O)
            }((h.exports = K).prototype = new X).setWorld = function(O) {
                for (var h = this.axisList.length = 0; h < O.bodies.length; h++) this.axisList.push(O.bodies[h]);
                O.removeEventListener("addBody", this._addBodyHandler), O.removeEventListener("removeBody", this._removeBodyHandler), O.addEventListener("addBody", this._addBodyHandler), O.addEventListener("removeBody", this._removeBodyHandler), this.world = O, this.dirty = !0
            }, K.insertionSortX = function(O) {
                for (var h = 1, j = O.length; h < j; h++) {
                    for (var X = O[h], $ = h - 1; 0 <= $ && !(O[$].aabb.lowerBound.x <= X.aabb.lowerBound.x); $--) O[$ + 1] = O[$];
                    O[$ + 1] = X
                }
                return O
            }, K.insertionSortY = function(O) {
                for (var h = 1, j = O.length; h < j; h++) {
                    for (var X = O[h], $ = h - 1; 0 <= $ && !(O[$].aabb.lowerBound.y <= X.aabb.lowerBound.y); $--) O[$ + 1] = O[$];
                    O[$ + 1] = X
                }
                return O
            }, K.insertionSortZ = function(O) {
                for (var h = 1, j = O.length; h < j; h++) {
                    for (var X = O[h], $ = h - 1; 0 <= $ && !(O[$].aabb.lowerBound.z <= X.aabb.lowerBound.z); $--) O[$ + 1] = O[$];
                    O[$ + 1] = X
                }
                return O
            }, K.prototype.collisionPairs = function(O, h, j) {
                var X, $, e = this.axisList,
                    G = e.length,
                    o = this.axisIndex;
                for (this.dirty && (this.sortList(), this.dirty = !1), X = 0; X !== G; X++) {
                    var i = e[X];
                    for ($ = X + 1; $ < G; $++) {
                        var a = e[$];
                        if (this.needBroadphaseCollision(i, a)) {
                            if (!K.checkBounds(i, a, o)) break;
                            this.intersectionTest(i, a, h, j)
                        }
                    }
                }
            }, K.prototype.sortList = function() {
                for (var O = this.axisList, h = this.axisIndex, j = O.length, X = 0; X !== j; X++) {
                    var $ = O[X];
                    $.aabbNeedsUpdate && $.computeAABB()
                }
                0 === h ? K.insertionSortX(O) : 1 === h ? K.insertionSortY(O) : 2 === h && K.insertionSortZ(O)
            }, K.checkBounds = function(O, h, j) {
                var X, $;
                0 === j ? (X = O.position.x, $ = h.position.x) : 1 === j ? (X = O.position.y, $ = h.position.y) : 2 === j && (X = O.position.z, $ = h.position.z);
                var e = O.boundingRadius,
                    G = h.boundingRadius;
                return $ - G < X + e
            }, K.prototype.autoDetectAxis = function() {
                for (var O = 0, h = 0, j = 0, X = 0, $ = 0, e = 0, G = this.axisList, o = G.length, i = 1 / o, a = 0; a !== o; a++) {
                    var K = G[a],
                        R = K.position.x;
                    O += R, h += R * R;
                    var z = K.position.y;
                    j += z, X += z * z;
                    var n = K.position.z;
                    $ += n, e += n * n
                }
                var M = h - O * O * i,
                    C = X - j * j * i,
                    Z = e - $ * $ * i;
                this.axisIndex = C < M ? Z < M ? 0 : 2 : Z < C ? 1 : 2
            }, K.prototype.aabbQuery = function(O, h, j) {
                j = j || [], this.dirty && (this.sortList(), this.dirty = !1);
                var X = this.axisIndex,
                    $ = "x";
                1 === X && ($ = "y"), 2 === X && ($ = "z");
                for (var e = this.axisList, G = (h.lowerBound[$], h.upperBound[$], 0); G < e.length; G++) {
                    var o = e[G];
                    o.aabbNeedsUpdate && o.computeAABB(), o.aabb.overlaps(h) && j.push(o)
                }
                return j
            }
        }, {
            "../collision/Broadphase": 5,
            "../shapes/Shape": 43
        }],
        12: [function(O, h, j) {
            h.exports = X;
            O("./Constraint");
            var i = O("./PointToPointConstraint"),
                a = O("../equations/ConeEquation"),
                K = O("../equations/RotationalEquation"),
                R = (O("../equations/ContactEquation"), O("../math/Vec3"));

            function X(O, h, j) {
                var X = void 0 !== (j = j || {}).maxForce ? j.maxForce : 1e6,
                    $ = j.pivotA ? j.pivotA.clone() : new R,
                    e = j.pivotB ? j.pivotB.clone() : new R;
                this.axisA = j.axisA ? j.axisA.clone() : new R, this.axisB = j.axisB ? j.axisB.clone() : new R, i.call(this, O, $, h, e, X), this.collideConnected = !!j.collideConnected, this.angle = void 0 !== j.angle ? j.angle : 0;
                var G = this.coneEquation = new a(O, h, j),
                    o = this.twistEquation = new K(O, h, j);
                this.twistAngle = void 0 !== j.twistAngle ? j.twistAngle : 0, G.maxForce = 0, G.minForce = -X, o.maxForce = 0, o.minForce = -X, this.equations.push(G, o)
            }
            X.prototype = new i, X.constructor = X;
            new R, new R;
            X.prototype.update = function() {
                var O = this.bodyA,
                    h = this.bodyB,
                    j = this.coneEquation,
                    X = this.twistEquation;
                i.prototype.update.call(this), O.vectorToWorldFrame(this.axisA, j.axisA), h.vectorToWorldFrame(this.axisB, j.axisB), this.axisA.tangents(X.axisA, X.axisA), O.vectorToWorldFrame(X.axisA, X.axisA), this.axisB.tangents(X.axisB, X.axisB), h.vectorToWorldFrame(X.axisB, X.axisB), j.angle = this.angle, X.maxAngle = this.twistAngle
            }
        }, {
            "../equations/ConeEquation": 18,
            "../equations/ContactEquation": 19,
            "../equations/RotationalEquation": 22,
            "../math/Vec3": 30,
            "./Constraint": 13,
            "./PointToPointConstraint": 17
        }],
        13: [function(O, h, j) {
            h.exports = $;
            var X = O("../utils/Utils");

            function $(O, h, j) {
                j = X.defaults(j, {
                    collideConnected: !0,
                    wakeUpBodies: !0
                }), this.equations = [], this.bodyA = O, this.bodyB = h, this.id = $.idCounter++, this.collideConnected = j.collideConnected, j.wakeUpBodies && (O && O.wakeUp(), h && h.wakeUp())
            }
            $.prototype.update = function() {
                throw new Error("method update() not implmemented in this Constraint subclass!")
            }, $.prototype.enable = function() {
                for (var O = this.equations, h = 0; h < O.length; h++) O[h].enabled = !0
            }, $.prototype.disable = function() {
                for (var O = this.equations, h = 0; h < O.length; h++) O[h].enabled = !1
            }, $.idCounter = 0
        }, {
            "../utils/Utils": 53
        }],
        14: [function(O, h, j) {
            h.exports = X;
            var e = O("./Constraint"),
                G = O("../equations/ContactEquation");

            function X(O, h, j, X) {
                e.call(this, O, h), void 0 === j && (j = O.position.distanceTo(h.position)), void 0 === X && (X = 1e6), this.distance = j;
                var $ = this.distanceEquation = new G(O, h);
                this.equations.push($), $.minForce = -X, $.maxForce = X
            }(X.prototype = new e).update = function() {
                var O = this.bodyA,
                    h = this.bodyB,
                    j = this.distanceEquation,
                    X = .5 * this.distance,
                    $ = j.ni;
                h.position.vsub(O.position, $), $.normalize(), $.mult(X, j.ri), $.mult(-X, j.rj)
            }
        }, {
            "../equations/ContactEquation": 19,
            "./Constraint": 13
        }],
        15: [function(O, h, j) {
            h.exports = X;
            O("./Constraint");
            var a = O("./PointToPointConstraint"),
                K = O("../equations/RotationalEquation"),
                R = O("../equations/RotationalMotorEquation"),
                z = (O("../equations/ContactEquation"), O("../math/Vec3"));

            function X(O, h, j) {
                var X = void 0 !== (j = j || {}).maxForce ? j.maxForce : 1e6,
                    $ = j.pivotA ? j.pivotA.clone() : new z,
                    e = j.pivotB ? j.pivotB.clone() : new z;
                a.call(this, O, $, h, e, X), (this.axisA = j.axisA ? j.axisA.clone() : new z(1, 0, 0)).normalize(), (this.axisB = j.axisB ? j.axisB.clone() : new z(1, 0, 0)).normalize();
                var G = this.rotationalEquation1 = new K(O, h, j),
                    o = this.rotationalEquation2 = new K(O, h, j),
                    i = this.motorEquation = new R(O, h, X);
                i.enabled = !1, this.equations.push(G, o, i)
            }
            X.prototype = new a, (X.constructor = X).prototype.enableMotor = function() {
                this.motorEquation.enabled = !0
            }, X.prototype.disableMotor = function() {
                this.motorEquation.enabled = !1
            }, X.prototype.setMotorSpeed = function(O) {
                this.motorEquation.targetVelocity = O
            }, X.prototype.setMotorMaxForce = function(O) {
                this.motorEquation.maxForce = O, this.motorEquation.minForce = -O
            };
            var n = new z,
                M = new z;
            X.prototype.update = function() {
                var O = this.bodyA,
                    h = this.bodyB,
                    j = this.motorEquation,
                    X = this.rotationalEquation1,
                    $ = this.rotationalEquation2,
                    e = n,
                    G = M,
                    o = this.axisA,
                    i = this.axisB;
                a.prototype.update.call(this), O.quaternion.vmult(o, e), h.quaternion.vmult(i, G), e.tangents(X.axisA, $.axisA), X.axisB.copy(G), $.axisB.copy(G), this.motorEquation.enabled && (O.quaternion.vmult(this.axisA, j.axisA), h.quaternion.vmult(this.axisB, j.axisB))
            }
        }, {
            "../equations/ContactEquation": 19,
            "../equations/RotationalEquation": 22,
            "../equations/RotationalMotorEquation": 23,
            "../math/Vec3": 30,
            "./Constraint": 13,
            "./PointToPointConstraint": 17
        }],
        16: [function(O, h, j) {
            h.exports = X;
            O("./Constraint");
            var K = O("./PointToPointConstraint"),
                R = O("../equations/RotationalEquation"),
                z = (O("../equations/RotationalMotorEquation"), O("../equations/ContactEquation"), O("../math/Vec3"));

            function X(O, h, j) {
                var X = void 0 !== (j = j || {}).maxForce ? j.maxForce : 1e6,
                    $ = new z,
                    e = new z,
                    G = new z;
                O.position.vadd(h.position, G), G.scale(.5, G), h.pointToLocalFrame(G, e), O.pointToLocalFrame(G, $), K.call(this, O, $, h, e, X);
                var o = this.rotationalEquation1 = new R(O, h, j),
                    i = this.rotationalEquation2 = new R(O, h, j),
                    a = this.rotationalEquation3 = new R(O, h, j);
                this.equations.push(o, i, a)
            }
            X.prototype = new K, X.constructor = X;
            new z, new z;
            X.prototype.update = function() {
                var O = this.bodyA,
                    h = this.bodyB,
                    j = (this.motorEquation, this.rotationalEquation1),
                    X = this.rotationalEquation2,
                    $ = this.rotationalEquation3;
                K.prototype.update.call(this), O.vectorToWorldFrame(z.UNIT_X, j.axisA), h.vectorToWorldFrame(z.UNIT_Y, j.axisB), O.vectorToWorldFrame(z.UNIT_Y, X.axisA), h.vectorToWorldFrame(z.UNIT_Z, X.axisB), O.vectorToWorldFrame(z.UNIT_Z, $.axisA), h.vectorToWorldFrame(z.UNIT_X, $.axisB)
            }
        }, {
            "../equations/ContactEquation": 19,
            "../equations/RotationalEquation": 22,
            "../equations/RotationalMotorEquation": 23,
            "../math/Vec3": 30,
            "./Constraint": 13,
            "./PointToPointConstraint": 17
        }],
        17: [function(O, h, j) {
            h.exports = X;
            var i = O("./Constraint"),
                a = O("../equations/ContactEquation"),
                K = O("../math/Vec3");

            function X(O, h, j, X, $) {
                i.call(this, O, j), $ = void 0 !== $ ? $ : 1e6, this.pivotA = h ? h.clone() : new K, this.pivotB = X ? X.clone() : new K;
                var e = this.equationX = new a(O, j),
                    G = this.equationY = new a(O, j),
                    o = this.equationZ = new a(O, j);
                this.equations.push(e, G, o), e.minForce = G.minForce = o.minForce = -$, e.maxForce = G.maxForce = o.maxForce = $, e.ni.set(1, 0, 0), G.ni.set(0, 1, 0), o.ni.set(0, 0, 1)
            }(X.prototype = new i).update = function() {
                var O = this.bodyA,
                    h = this.bodyB,
                    j = this.equationX,
                    X = this.equationY,
                    $ = this.equationZ;
                O.quaternion.vmult(this.pivotA, j.ri), h.quaternion.vmult(this.pivotB, j.rj), X.ri.copy(j.ri), X.rj.copy(j.rj), $.ri.copy(j.ri), $.rj.copy(j.rj)
            }
        }, {
            "../equations/ContactEquation": 19,
            "../math/Vec3": 30,
            "./Constraint": 13
        }],
        18: [function(O, h, j) {
            h.exports = X;
            var $ = O("../math/Vec3"),
                e = (O("../math/Mat3"), O("./Equation"));

            function X(O, h, j) {
                var X = void 0 !== (j = j || {}).maxForce ? j.maxForce : 1e6;
                e.call(this, O, h, -X, X), this.axisA = j.axisA ? j.axisA.clone() : new $(1, 0, 0), this.axisB = j.axisB ? j.axisB.clone() : new $(0, 1, 0), this.angle = void 0 !== j.angle ? j.angle : 0
            }(X.prototype = new e).constructor = X;
            var a = new $,
                K = new $;
            X.prototype.computeB = function(O) {
                var h = this.a,
                    j = this.b,
                    X = this.axisA,
                    $ = this.axisB,
                    e = a,
                    G = K,
                    o = this.jacobianElementA,
                    i = this.jacobianElementB;
                return X.cross($, e), $.cross(X, G), o.rotational.copy(G), i.rotational.copy(e), -(Math.cos(this.angle) - X.dot($)) * h - this.computeGW() * j - O * this.computeGiMf()
            }
        }, {
            "../math/Mat3": 27,
            "../math/Vec3": 30,
            "./Equation": 20
        }],
        19: [function(O, h, j) {
            h.exports = e;
            var X = O("./Equation"),
                $ = O("../math/Vec3");
            O("../math/Mat3");

            function e(O, h, j) {
                j = void 0 !== j ? j : 1e6, X.call(this, O, h, 0, j), this.restitution = 0, this.ri = new $, this.rj = new $, this.ni = new $
            }(e.prototype = new X).constructor = e;
            var U = new $,
                w = new $,
                F = new $;
            e.prototype.computeB = function(O) {
                var h = this.a,
                    j = this.b,
                    X = this.bi,
                    $ = this.bj,
                    e = this.ri,
                    G = this.rj,
                    o = U,
                    i = w,
                    a = X.velocity,
                    K = X.angularVelocity,
                    R = (X.force, X.torque, $.velocity),
                    z = $.angularVelocity,
                    n = ($.force, $.torque, F),
                    M = this.jacobianElementA,
                    C = this.jacobianElementB,
                    Z = this.ni;
                e.cross(Z, o), G.cross(Z, i), Z.negate(M.spatial), o.negate(M.rotational), C.spatial.copy(Z), C.rotational.copy(i), n.copy($.position), n.vadd(G, n), n.vsub(X.position, n), n.vsub(e, n);
                var m = Z.dot(n),
                    P = this.restitution + 1;
                return -m * h - (P * R.dot(Z) - P * a.dot(Z) + z.dot(i) - K.dot(o)) * j - O * this.computeGiMf()
            };
            var G = new $,
                o = new $,
                i = new $,
                a = new $,
                K = new $;
            e.prototype.getImpactVelocityAlongNormal = function() {
                var O = G,
                    h = o,
                    j = i,
                    X = a,
                    $ = K;
                return this.bi.position.vadd(this.ri, j), this.bj.position.vadd(this.rj, X), this.bi.getVelocityAtWorldPoint(j, O), this.bj.getVelocityAtWorldPoint(X, h), O.vsub(h, $), this.ni.dot($)
            }
        }, {
            "../math/Mat3": 27,
            "../math/Vec3": 30,
            "./Equation": 20
        }],
        20: [function(O, h, j) {
            h.exports = e;
            var $ = O("../math/JacobianElement"),
                X = O("../math/Vec3");

            function e(O, h, j, X) {
                this.id = e.id++, this.minForce = void 0 === j ? -1e6 : j, this.maxForce = void 0 === X ? 1e6 : X, this.bi = O, this.bj = h, this.a = 0, this.b = 0, this.eps = 0, this.jacobianElementA = new $, this.jacobianElementB = new $, this.enabled = !0, this.setSpookParams(1e7, 4, 1 / 60)
            }(e.prototype.constructor = e).id = 0, e.prototype.setSpookParams = function(O, h, j) {
                var X = h,
                    $ = O,
                    e = j;
                this.a = 4 / (e * (1 + 4 * X)), this.b = 4 * X / (1 + 4 * X), this.eps = 4 / (e * e * $ * (1 + 4 * X))
            }, e.prototype.computeB = function(O, h, j) {
                var X = this.computeGW();
                return -this.computeGq() * O - X * h - this.computeGiMf() * j
            }, e.prototype.computeGq = function() {
                var O = this.jacobianElementA,
                    h = this.jacobianElementB,
                    j = this.bi,
                    X = this.bj,
                    $ = j.position,
                    e = X.position;
                return O.spatial.dot($) + h.spatial.dot(e)
            };
            var i = new X;
            e.prototype.computeGW = function() {
                var O = this.jacobianElementA,
                    h = this.jacobianElementB,
                    j = this.bi,
                    X = this.bj,
                    $ = j.velocity,
                    e = X.velocity,
                    G = j.angularVelocity || i,
                    o = X.angularVelocity || i;
                return O.multiplyVectors($, G) + h.multiplyVectors(e, o)
            }, e.prototype.computeGWlambda = function() {
                var O = this.jacobianElementA,
                    h = this.jacobianElementB,
                    j = this.bi,
                    X = this.bj,
                    $ = j.vlambda,
                    e = X.vlambda,
                    G = j.wlambda || i,
                    o = X.wlambda || i;
                return O.multiplyVectors($, G) + h.multiplyVectors(e, o)
            };
            var K = new X,
                R = new X,
                z = new X,
                n = new X;
            e.prototype.computeGiMf = function() {
                var O = this.jacobianElementA,
                    h = this.jacobianElementB,
                    j = this.bi,
                    X = this.bj,
                    $ = j.force,
                    e = j.torque,
                    G = X.force,
                    o = X.torque,
                    i = j.invMassSolve,
                    a = X.invMassSolve;
                return j.invInertiaWorldSolve ? j.invInertiaWorldSolve.vmult(e, z) : z.set(0, 0, 0), X.invInertiaWorldSolve ? X.invInertiaWorldSolve.vmult(o, n) : n.set(0, 0, 0), $.mult(i, K), G.mult(a, R), O.multiplyVectors(K, z) + h.multiplyVectors(R, n)
            };
            var a = new X;
            e.prototype.computeGiMGt = function() {
                var O = this.jacobianElementA,
                    h = this.jacobianElementB,
                    j = this.bi,
                    X = this.bj,
                    $ = j.invMassSolve,
                    e = X.invMassSolve,
                    G = j.invInertiaWorldSolve,
                    o = X.invInertiaWorldSolve,
                    i = $ + e;
                return G && (G.vmult(O.rotational, a), i += a.dot(O.rotational)), o && (o.vmult(h.rotational, a), i += a.dot(h.rotational)), i
            };
            var G = new X;
            new X, new X, new X, new X, new X;
            e.prototype.addToWlambda = function(O) {
                var h = this.jacobianElementA,
                    j = this.jacobianElementB,
                    X = this.bi,
                    $ = this.bj,
                    e = G;
                h.spatial.mult(X.invMassSolve * O, e), X.vlambda.vadd(e, X.vlambda), j.spatial.mult($.invMassSolve * O, e), $.vlambda.vadd(e, $.vlambda), X.invInertiaWorldSolve && (X.invInertiaWorldSolve.vmult(h.rotational, e), e.mult(O, e), X.wlambda.vadd(e, X.wlambda)), $.invInertiaWorldSolve && ($.invInertiaWorldSolve.vmult(j.rotational, e), e.mult(O, e), $.wlambda.vadd(e, $.wlambda))
            }, e.prototype.computeC = function() {
                return this.computeGiMGt() + this.eps
            }
        }, {
            "../math/JacobianElement": 26,
            "../math/Vec3": 30
        }],
        21: [function(O, h, j) {
            h.exports = e;
            var X = O("./Equation"),
                $ = O("../math/Vec3");
            O("../math/Mat3");

            function e(O, h, j) {
                X.call(this, O, h, -j, j), this.ri = new $, this.rj = new $, this.t = new $
            }(e.prototype = new X).constructor = e;
            var a = new $,
                K = new $;
            e.prototype.computeB = function(O) {
                this.a;
                var h = this.b,
                    j = (this.bi, this.bj, this.ri),
                    X = this.rj,
                    $ = a,
                    e = K,
                    G = this.t;
                j.cross(G, $), X.cross(G, e);
                var o = this.jacobianElementA,
                    i = this.jacobianElementB;
                return G.negate(o.spatial), $.negate(o.rotational), i.spatial.copy(G), i.rotational.copy(e), -this.computeGW() * h - O * this.computeGiMf()
            }
        }, {
            "../math/Mat3": 27,
            "../math/Vec3": 30,
            "./Equation": 20
        }],
        22: [function(O, h, j) {
            h.exports = X;
            var $ = O("../math/Vec3"),
                e = (O("../math/Mat3"), O("./Equation"));

            function X(O, h, j) {
                var X = void 0 !== (j = j || {}).maxForce ? j.maxForce : 1e6;
                e.call(this, O, h, -X, X), this.axisA = j.axisA ? j.axisA.clone() : new $(1, 0, 0), this.axisB = j.axisB ? j.axisB.clone() : new $(0, 1, 0), this.maxAngle = Math.PI / 2
            }(X.prototype = new e).constructor = X;
            var a = new $,
                K = new $;
            X.prototype.computeB = function(O) {
                var h = this.a,
                    j = this.b,
                    X = this.axisA,
                    $ = this.axisB,
                    e = a,
                    G = K,
                    o = this.jacobianElementA,
                    i = this.jacobianElementB;
                return X.cross($, e), $.cross(X, G), o.rotational.copy(G), i.rotational.copy(e), -(Math.cos(this.maxAngle) - X.dot($)) * h - this.computeGW() * j - O * this.computeGiMf()
            }
        }, {
            "../math/Mat3": 27,
            "../math/Vec3": 30,
            "./Equation": 20
        }],
        23: [function(O, h, j) {
            h.exports = e;
            var X = O("../math/Vec3"),
                $ = (O("../math/Mat3"), O("./Equation"));

            function e(O, h, j) {
                j = void 0 !== j ? j : 1e6, $.call(this, O, h, -j, j), this.axisA = new X, this.axisB = new X, this.targetVelocity = 0
            }((e.prototype = new $).constructor = e).prototype.computeB = function(O) {
                this.a;
                var h = this.b,
                    j = (this.bi, this.bj, this.axisA),
                    X = this.axisB,
                    $ = this.jacobianElementA,
                    e = this.jacobianElementB;
                return $.rotational.copy(j), X.negate(e.rotational), -(this.computeGW() - this.targetVelocity) * h - O * this.computeGiMf()
            }
        }, {
            "../math/Mat3": 27,
            "../math/Vec3": 30,
            "./Equation": 20
        }],
        24: [function(O, h, j) {
            var X = O("../utils/Utils");

            function $(O, h, j) {
                j = X.defaults(j, {
                    friction: .3,
                    restitution: .3,
                    contactEquationStiffness: 1e7,
                    contactEquationRelaxation: 3,
                    frictionEquationStiffness: 1e7,
                    frictionEquationRelaxation: 3
                }), this.id = $.idCounter++, this.materials = [O, h], this.friction = j.friction, this.restitution = j.restitution, this.contactEquationStiffness = j.contactEquationStiffness, this.contactEquationRelaxation = j.contactEquationRelaxation, this.frictionEquationStiffness = j.frictionEquationStiffness, this.frictionEquationRelaxation = j.frictionEquationRelaxation
            }(h.exports = $).idCounter = 0
        }, {
            "../utils/Utils": 53
        }],
        25: [function(O, h, j) {
            function X(O) {
                var h = "";
                "string" == typeof(O = O || {}) ? (h = O, O = {}) : "object" == typeof O && (h = ""), this.name = h, this.id = X.idCounter++, this.friction = void 0 !== O.friction ? O.friction : -1, this.restitution = void 0 !== O.restitution ? O.restitution : -1
            }(h.exports = X).idCounter = 0
        }, {}],
        26: [function(O, h, j) {
            h.exports = $;
            var X = O("./Vec3");

            function $() {
                this.spatial = new X, this.rotational = new X
            }
            $.prototype.multiplyElement = function(O) {
                return O.spatial.dot(this.spatial) + O.rotational.dot(this.rotational)
            }, $.prototype.multiplyVectors = function(O, h) {
                return O.dot(this.spatial) + h.dot(this.rotational)
            }
        }, {
            "./Vec3": 30
        }],
        27: [function(O, h, j) {
            h.exports = a;
            var K = O("./Vec3");

            function a(O) {
                this.elements = O || [0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
            a.prototype.identity = function() {
                var O = this.elements;
                O[0] = 1, O[1] = 0, O[2] = 0, O[3] = 0, O[4] = 1, O[5] = 0, O[6] = 0, O[7] = 0, O[8] = 1
            }, a.prototype.setZero = function() {
                var O = this.elements;
                O[0] = 0, O[1] = 0, O[2] = 0, O[3] = 0, O[4] = 0, O[5] = 0, O[6] = 0, O[7] = 0, O[8] = 0
            }, a.prototype.setTrace = function(O) {
                var h = this.elements;
                h[0] = O.x, h[4] = O.y, h[8] = O.z
            }, a.prototype.getTrace = function(O) {
                O = O || new K;
                var h = this.elements;
                O.x = h[0], O.y = h[4], O.z = h[8]
            }, a.prototype.vmult = function(O, h) {
                h = h || new K;
                var j = this.elements,
                    X = O.x,
                    $ = O.y,
                    e = O.z;
                return h.x = j[0] * X + j[1] * $ + j[2] * e, h.y = j[3] * X + j[4] * $ + j[5] * e, h.z = j[6] * X + j[7] * $ + j[8] * e, h
            }, a.prototype.smult = function(O) {
                for (var h = 0; h < this.elements.length; h++) this.elements[h] *= O
            }, a.prototype.mmult = function(O, h) {
                for (var j = h || new a, X = 0; X < 3; X++)
                    for (var $ = 0; $ < 3; $++) {
                        for (var e = 0, G = 0; G < 3; G++) e += O.elements[X + 3 * G] * this.elements[G + 3 * $];
                        j.elements[X + 3 * $] = e
                    }
                return j
            }, a.prototype.scale = function(O, h) {
                h = h || new a;
                for (var j = this.elements, X = h.elements, $ = 0; 3 !== $; $++) X[3 * $ + 0] = O.x * j[3 * $ + 0], X[3 * $ + 1] = O.y * j[3 * $ + 1], X[3 * $ + 2] = O.z * j[3 * $ + 2];
                return h
            }, a.prototype.solve = function(O, h) {
                h = h || new K;
                for (var j, X = [], $ = 0; $ < 12; $++) X.push(0);
                for ($ = 0; $ < 3; $++)
                    for (j = 0; j < 3; j++) X[$ + 4 * j] = this.elements[$ + 3 * j];
                X[3] = O.x, X[7] = O.y, X[11] = O.z;
                var e, G, o = 3,
                    i = o;
                do {
                    if (0 === X[($ = i - o) + 4 * $])
                        for (j = $ + 1; j < i; j++)
                            if (0 !== X[$ + 4 * j]) {
                                for (e = 4; X[(G = 4 - e) + 4 * $] += X[G + 4 * j], --e;);
                                break
                            }
                    if (0 !== X[$ + 4 * $])
                        for (j = $ + 1; j < i; j++) {
                            var a = X[$ + 4 * j] / X[$ + 4 * $];
                            for (e = 4; X[(G = 4 - e) + 4 * j] = G <= $ ? 0 : X[G + 4 * j] - X[G + 4 * $] * a, --e;);
                        }
                } while (--o);
                if (h.z = X[11] / X[10], h.y = (X[7] - X[6] * h.z) / X[5], h.x = (X[3] - X[2] * h.z - X[1] * h.y) / X[0], isNaN(h.x) || isNaN(h.y) || isNaN(h.z) || h.x === 1 / 0 || h.y === 1 / 0 || h.z === 1 / 0) throw "Could not solve equation! Got x=[" + h.toString() + "], b=[" + O.toString() + "], A=[" + this.toString() + "]";
                return h
            }, a.prototype.e = function(O, h, j) {
                if (void 0 === j) return this.elements[h + 3 * O];
                this.elements[h + 3 * O] = j
            }, a.prototype.copy = function(O) {
                for (var h = 0; h < O.elements.length; h++) this.elements[h] = O.elements[h];
                return this
            }, a.prototype.toString = function() {
                for (var O = "", h = 0; h < 9; h++) O += this.elements[h] + ",";
                return O
            }, a.prototype.reverse = function(O) {
                O = O || new a;
                for (var h, j = [], X = 0; X < 18; X++) j.push(0);
                for (X = 0; X < 3; X++)
                    for (h = 0; h < 3; h++) j[X + 6 * h] = this.elements[X + 3 * h];
                j[3] = 1, j[9] = 0, j[15] = 0, j[4] = 0, j[10] = 1, j[16] = 0, j[5] = 0, j[11] = 0, j[17] = 1;
                var $, e, G = 3,
                    o = G;
                do {
                    if (0 === j[(X = o - G) + 6 * X])
                        for (h = X + 1; h < o; h++)
                            if (0 !== j[X + 6 * h]) {
                                for ($ = 6; j[(e = 6 - $) + 6 * X] += j[e + 6 * h], --$;);
                                break
                            }
                    if (0 !== j[X + 6 * X])
                        for (h = X + 1; h < o; h++) {
                            var i = j[X + 6 * h] / j[X + 6 * X];
                            for ($ = 6; j[(e = 6 - $) + 6 * h] = e <= X ? 0 : j[e + 6 * h] - j[e + 6 * X] * i, --$;);
                        }
                } while (--G);
                X = 2;
                do {
                    h = X - 1;
                    do {
                        i = j[X + 6 * h] / j[X + 6 * X];
                        for ($ = 6; j[(e = 6 - $) + 6 * h] = j[e + 6 * h] - j[e + 6 * X] * i, --$;);
                    } while (h--)
                } while (--X);
                X = 2;
                do {
                    i = 1 / j[X + 6 * X];
                    for ($ = 6; j[(e = 6 - $) + 6 * X] = j[e + 6 * X] * i, --$;);
                } while (X--);
                X = 2;
                do {
                    h = 2;
                    do {
                        if (e = j[3 + h + 6 * X], isNaN(e) || e === 1 / 0) throw "Could not reverse! A=[" + this.toString() + "]";
                        O.e(X, h, e)
                    } while (h--)
                } while (X--);
                return O
            }, a.prototype.setRotationFromQuaternion = function(O) {
                var h = O.x,
                    j = O.y,
                    X = O.z,
                    $ = O.w,
                    e = h + h,
                    G = j + j,
                    o = X + X,
                    i = h * e,
                    a = h * G,
                    K = h * o,
                    R = j * G,
                    z = j * o,
                    n = X * o,
                    M = $ * e,
                    C = $ * G,
                    Z = $ * o,
                    m = this.elements;
                return m[0] = 1 - (R + n), m[1] = a - Z, m[2] = K + C, m[3] = a + Z, m[4] = 1 - (i + n), m[5] = z - M, m[6] = K - C, m[7] = z + M, m[8] = 1 - (i + R), this
            }, a.prototype.transpose = function(O) {
                for (var h = (O = O || new a).elements, j = this.elements, X = 0; 3 !== X; X++)
                    for (var $ = 0; 3 !== $; $++) h[3 * X + $] = j[3 * $ + X];
                return O
            }
        }, {
            "./Vec3": 30
        }],
        28: [function(O, h, j) {
            h.exports = G;
            var n = O("./Vec3");

            function G(O, h, j, X) {
                this.x = void 0 !== O ? O : 0, this.y = void 0 !== h ? h : 0, this.z = void 0 !== j ? j : 0, this.w = void 0 !== X ? X : 1
            }
            G.prototype.set = function(O, h, j, X) {
                this.x = O, this.y = h, this.z = j, this.w = X
            }, G.prototype.toString = function() {
                return this.x + "," + this.y + "," + this.z + "," + this.w
            }, G.prototype.toArray = function() {
                return [this.x, this.y, this.z, this.w]
            }, G.prototype.setFromAxisAngle = function(O, h) {
                var j = Math.sin(.5 * h);
                this.x = O.x * j, this.y = O.y * j, this.z = O.z * j, this.w = Math.cos(.5 * h)
            }, G.prototype.toAxisAngle = function(O) {
                O = O || new n, this.normalize();
                var h = 2 * Math.acos(this.w),
                    j = Math.sqrt(1 - this.w * this.w);
                return O.z = j < .001 ? (O.x = this.x, O.y = this.y, this.z) : (O.x = this.x / j, O.y = this.y / j, this.z / j), [O, h]
            };
            var e = new n,
                o = new n;
            G.prototype.setFromVectors = function(O, h) {
                if (O.isAntiparallelTo(h)) {
                    var j = e,
                        X = o;
                    O.tangents(j, X), this.setFromAxisAngle(j, Math.PI)
                } else {
                    var $ = O.cross(h);
                    this.x = $.x, this.y = $.y, this.z = $.z, this.w = Math.sqrt(Math.pow(O.norm(), 2) * Math.pow(h.norm(), 2)) + O.dot(h), this.normalize()
                }
            };
            var i = new n,
                a = new n,
                K = new n;
            G.prototype.mult = function(O, h) {
                h = h || new G;
                var j = this.w,
                    X = i,
                    $ = a,
                    e = K;
                return X.set(this.x, this.y, this.z), $.set(O.x, O.y, O.z), h.w = j * O.w - X.dot($), X.cross($, e), h.x = j * $.x + O.w * X.x + e.x, h.y = j * $.y + O.w * X.y + e.y, h.z = j * $.z + O.w * X.z + e.z, h
            }, G.prototype.inverse = function(O) {
                var h = this.x,
                    j = this.y,
                    X = this.z,
                    $ = this.w;
                O = O || new G, this.conjugate(O);
                var e = 1 / (h * h + j * j + X * X + $ * $);
                return O.x *= e, O.y *= e, O.z *= e, O.w *= e, O
            }, G.prototype.conjugate = function(O) {
                return (O = O || new G).x = -this.x, O.y = -this.y, O.z = -this.z, O.w = this.w, O
            }, G.prototype.normalize = function() {
                var O = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
                0 === O ? (this.x = 0, this.y = 0, this.z = 0, this.w = 0) : (O = 1 / O, this.x *= O, this.y *= O, this.z *= O, this.w *= O)
            }, G.prototype.normalizeFast = function() {
                var O = (3 - (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)) / 2;
                0 === O ? (this.x = 0, this.y = 0, this.z = 0, this.w = 0) : (this.x *= O, this.y *= O, this.z *= O, this.w *= O)
            }, G.prototype.vmult = function(O, h) {
                h = h || new n;
                var j = O.x,
                    X = O.y,
                    $ = O.z,
                    e = this.x,
                    G = this.y,
                    o = this.z,
                    i = this.w,
                    a = i * j + G * $ - o * X,
                    K = i * X + o * j - e * $,
                    R = i * $ + e * X - G * j,
                    z = -e * j - G * X - o * $;
                return h.x = a * i + z * -e + K * -o - R * -G, h.y = K * i + z * -G + R * -e - a * -o, h.z = R * i + z * -o + a * -G - K * -e, h
            }, G.prototype.copy = function(O) {
                return this.x = O.x, this.y = O.y, this.z = O.z, this.w = O.w, this
            }, G.prototype.toEuler = function(O, h) {
                var j, X, $;
                h = h || "YZX";
                var e = this.x,
                    G = this.y,
                    o = this.z,
                    i = this.w;
                switch (h) {
                    case "YZX":
                        var a = e * G + o * i;
                        if (.499 < a && (j = 2 * Math.atan2(e, i), X = Math.PI / 2, $ = 0), a < -.499 && (j = -2 * Math.atan2(e, i), X = -Math.PI / 2, $ = 0), isNaN(j)) {
                            var K = e * e,
                                R = G * G,
                                z = o * o;
                            j = Math.atan2(2 * G * i - 2 * e * o, 1 - 2 * R - 2 * z), X = Math.asin(2 * a), $ = Math.atan2(2 * e * i - 2 * G * o, 1 - 2 * K - 2 * z)
                        }
                        break;
                    default:
                        throw new Error("Euler order " + h + " not supported yet.")
                }
                O.y = j, O.z = X, O.x = $
            }, G.prototype.setFromEuler = function(O, h, j, X) {
                X = X || "XYZ";
                var $ = Math.cos(O / 2),
                    e = Math.cos(h / 2),
                    G = Math.cos(j / 2),
                    o = Math.sin(O / 2),
                    i = Math.sin(h / 2),
                    a = Math.sin(j / 2);
                return "XYZ" === X ? (this.x = o * e * G + $ * i * a, this.y = $ * i * G - o * e * a, this.z = $ * e * a + o * i * G, this.w = $ * e * G - o * i * a) : "YXZ" === X ? (this.x = o * e * G + $ * i * a, this.y = $ * i * G - o * e * a, this.z = $ * e * a - o * i * G, this.w = $ * e * G + o * i * a) : "ZXY" === X ? (this.x = o * e * G - $ * i * a, this.y = $ * i * G + o * e * a, this.z = $ * e * a + o * i * G, this.w = $ * e * G - o * i * a) : "ZYX" === X ? (this.x = o * e * G - $ * i * a, this.y = $ * i * G + o * e * a, this.z = $ * e * a - o * i * G, this.w = $ * e * G + o * i * a) : "YZX" === X ? (this.x = o * e * G + $ * i * a, this.y = $ * i * G + o * e * a, this.z = $ * e * a - o * i * G, this.w = $ * e * G - o * i * a) : "XZY" === X && (this.x = o * e * G - $ * i * a, this.y = $ * i * G - o * e * a, this.z = $ * e * a + o * i * G, this.w = $ * e * G + o * i * a), this
            }, G.prototype.clone = function() {
                return new G(this.x, this.y, this.z, this.w)
            }
        }, {
            "./Vec3": 30
        }],
        29: [function(O, h, j) {
            var $ = O("./Vec3"),
                X = O("./Quaternion");

            function e(O) {
                O = O || {}, this.position = new $, O.position && this.position.copy(O.position), this.quaternion = new X, O.quaternion && this.quaternion.copy(O.quaternion)
            }
            h.exports = e;
            var G = new X;
            e.pointToLocalFrame = function(O, h, j, X) {
                X = X || new $;
                return j.vsub(O, X), h.conjugate(G), G.vmult(X, X), X
            }, e.prototype.pointToLocal = function(O, h) {
                return e.pointToLocalFrame(this.position, this.quaternion, O, h)
            }, e.pointToWorldFrame = function(O, h, j, X) {
                X = X || new $;
                return h.vmult(j, X), X.vadd(O, X), X
            }, e.prototype.pointToWorld = function(O, h) {
                return e.pointToWorldFrame(this.position, this.quaternion, O, h)
            }, e.prototype.vectorToWorldFrame = function(O, h) {
                h = h || new $;
                return this.quaternion.vmult(O, h), h
            }, e.vectorToWorldFrame = function(O, h, j) {
                return O.vmult(h, j), j
            }, e.vectorToLocalFrame = function(O, h, j, X) {
                X = X || new $;
                return h.w *= -1, h.vmult(j, X), h.w *= -1, X
            }
        }, {
            "./Quaternion": 28,
            "./Vec3": 30
        }],
        30: [function(O, h, j) {
            h.exports = i;
            var X = O("./Mat3");

            function i(O, h, j) {
                this.x = O || 0, this.y = h || 0, this.z = j || 0
            }
            i.ZERO = new i(0, 0, 0), i.UNIT_X = new i(1, 0, 0), i.UNIT_Y = new i(0, 1, 0), i.UNIT_Z = new i(0, 0, 1), i.prototype.cross = function(O, h) {
                var j = O.x,
                    X = O.y,
                    $ = O.z,
                    e = this.x,
                    G = this.y,
                    o = this.z;
                return (h = h || new i).x = G * $ - o * X, h.y = o * j - e * $, h.z = e * X - G * j, h
            }, i.prototype.set = function(O, h, j) {
                return this.x = O, this.y = h, this.z = j, this
            }, i.prototype.setZero = function() {
                this.x = this.y = this.z = 0
            }, i.prototype.vadd = function(O, h) {
                if (!h) return new i(this.x + O.x, this.y + O.y, this.z + O.z);
                h.x = O.x + this.x, h.y = O.y + this.y, h.z = O.z + this.z
            }, i.prototype.vsub = function(O, h) {
                if (!h) return new i(this.x - O.x, this.y - O.y, this.z - O.z);
                h.x = this.x - O.x, h.y = this.y - O.y, h.z = this.z - O.z
            }, i.prototype.crossmat = function() {
                return new X([0, -this.z, this.y, this.z, 0, -this.x, -this.y, this.x, 0])
            }, i.prototype.normalize = function() {
                var O = this.x,
                    h = this.y,
                    j = this.z,
                    X = Math.sqrt(O * O + h * h + j * j);
                if (0 < X) {
                    var $ = 1 / X;
                    this.x *= $, this.y *= $, this.z *= $
                } else this.x = 0, this.y = 0, this.z = 0;
                return X
            }, i.prototype.unit = function(O) {
                O = O || new i;
                var h = this.x,
                    j = this.y,
                    X = this.z,
                    $ = Math.sqrt(h * h + j * j + X * X);
                return O.z = 0 < $ ? ($ = 1 / $, O.x = h * $, O.y = j * $, X * $) : (O.x = 1, O.y = 0), O
            }, i.prototype.length = i.prototype.norm = function() {
                var O = this.x,
                    h = this.y,
                    j = this.z;
                return Math.sqrt(O * O + h * h + j * j)
            }, i.prototype.lengthSquared = i.prototype.norm2 = function() {
                return this.dot(this)
            }, i.prototype.distanceTo = function(O) {
                var h = this.x,
                    j = this.y,
                    X = this.z,
                    $ = O.x,
                    e = O.y,
                    G = O.z;
                return Math.sqrt(($ - h) * ($ - h) + (e - j) * (e - j) + (G - X) * (G - X))
            }, i.prototype.distanceSquared = function(O) {
                var h = this.x,
                    j = this.y,
                    X = this.z,
                    $ = O.x,
                    e = O.y,
                    G = O.z;
                return ($ - h) * ($ - h) + (e - j) * (e - j) + (G - X) * (G - X)
            }, i.prototype.scale = i.prototype.mult = function(O, h) {
                h = h || new i;
                var j = this.x,
                    X = this.y,
                    $ = this.z;
                return h.x = O * j, h.y = O * X, h.z = O * $, h
            }, i.prototype.dot = function(O) {
                return this.x * O.x + this.y * O.y + this.z * O.z
            }, i.prototype.isZero = function() {
                return 0 === this.x && 0 === this.y && 0 === this.z
            }, i.prototype.negate = function(O) {
                return (O = O || new i).x = -this.x, O.y = -this.y, O.z = -this.z, O
            };
            var G = new i,
                o = new i;
            i.prototype.tangents = function(O, h) {
                var j = this.norm();
                if (0 < j) {
                    var X = G,
                        $ = 1 / j;
                    X.set(this.x * $, this.y * $, this.z * $);
                    var e = o;
                    Math.abs(X.x) < .9 ? e.set(1, 0, 0) : e.set(0, 1, 0), X.cross(e, O), X.cross(O, h)
                } else O.set(1, 0, 0), h.set(0, 1, 0)
            }, i.prototype.toString = function() {
                return this.x + "," + this.y + "," + this.z
            }, i.prototype.toArray = function() {
                return [this.x, this.y, this.z]
            }, i.prototype.copy = function(O) {
                return this.x = O.x, this.y = O.y, this.z = O.z, this
            }, i.prototype.lerp = function(O, h, j) {
                var X = this.x,
                    $ = this.y,
                    e = this.z;
                j.x = X + (O.x - X) * h, j.y = $ + (O.y - $) * h, j.z = e + (O.z - e) * h
            }, i.prototype.almostEquals = function(O, h) {
                return void 0 === h && (h = 1e-6), !(Math.abs(this.x - O.x) > h || Math.abs(this.y - O.y) > h || Math.abs(this.z - O.z) > h)
            }, i.prototype.almostZero = function(O) {
                return void 0 === O && (O = 1e-6), !(Math.abs(this.x) > O || Math.abs(this.y) > O || Math.abs(this.z) > O)
            };
            var $ = new i;
            i.prototype.isAntiparallelTo = function(O, h) {
                return this.negate($), $.almostEquals(O, h)
            }, i.prototype.clone = function() {
                return new i(this.x, this.y, this.z)
            }
        }, {
            "./Mat3": 27
        }],
        31: [function(O, h, j) {
            h.exports = a;
            var X = O("../utils/EventTarget"),
                e = (O("../shapes/Shape"), O("../math/Vec3")),
                $ = O("../math/Mat3"),
                G = O("../math/Quaternion"),
                o = (O("../material/Material"), O("../collision/AABB")),
                i = O("../shapes/Box");

            function a(O) {
                O = O || {}, X.apply(this), this.id = a.idCounter++, this.world = null, this.preStep = null, this.postStep = null, this.vlambda = new e, this.collisionFilterGroup = "number" == typeof O.collisionFilterGroup ? O.collisionFilterGroup : 1, this.collisionFilterMask = "number" == typeof O.collisionFilterMask ? O.collisionFilterMask : 1, this.collisionResponse = !0, this.position = new e, O.position && this.position.copy(O.position), this.previousPosition = new e, this.initPosition = new e, this.velocity = new e, O.velocity && this.velocity.copy(O.velocity), this.initVelocity = new e, this.force = new e;
                var h = "number" == typeof O.mass ? O.mass : 0;
                this.mass = h, this.invMass = 0 < h ? 1 / h : 0, this.material = O.material || null, this.linearDamping = "number" == typeof O.linearDamping ? O.linearDamping : .01, this.type = h <= 0 ? a.STATIC : a.DYNAMIC, typeof O.type == typeof a.STATIC && (this.type = O.type), this.allowSleep = void 0 === O.allowSleep || O.allowSleep, this.sleepState = 0, this.sleepSpeedLimit = void 0 !== O.sleepSpeedLimit ? O.sleepSpeedLimit : .1, this.sleepTimeLimit = void 0 !== O.sleepTimeLimit ? O.sleepTimeLimit : 1, this.timeLastSleepy = 0, this._wakeUpAfterNarrowphase = !1, this.torque = new e, this.quaternion = new G, O.quaternion && this.quaternion.copy(O.quaternion), this.initQuaternion = new G, this.angularVelocity = new e, O.angularVelocity && this.angularVelocity.copy(O.angularVelocity), this.initAngularVelocity = new e, this.interpolatedPosition = new e, this.interpolatedQuaternion = new G, this.shapes = [], this.shapeOffsets = [], this.shapeOrientations = [], this.inertia = new e, this.invInertia = new e, this.invInertiaWorld = new $, this.invMassSolve = 0, this.invInertiaSolve = new e, this.invInertiaWorldSolve = new $, this.fixedRotation = void 0 !== O.fixedRotation && O.fixedRotation, this.angularDamping = void 0 !== O.angularDamping ? O.angularDamping : .01, this.aabb = new o, this.aabbNeedsUpdate = !0, this.wlambda = new e, O.shape && this.addShape(O.shape), this.updateMassProperties()
            }((a.prototype = new X).constructor = a).DYNAMIC = 1, a.STATIC = 2, a.KINEMATIC = 4, a.AWAKE = 0, a.SLEEPY = 1, a.SLEEPING = 2, a.idCounter = 0, a.prototype.wakeUp = function() {
                var O = this.sleepState;
                this.sleepState = 0, O === a.SLEEPING && this.dispatchEvent({
                    type: "wakeup"
                })
            }, a.prototype.sleep = function() {
                this.sleepState = a.SLEEPING, this.velocity.set(0, 0, 0), this.angularVelocity.set(0, 0, 0)
            }, a.sleepyEvent = {
                type: "sleepy"
            }, a.sleepEvent = {
                type: "sleep"
            }, a.prototype.sleepTick = function(O) {
                if (this.allowSleep) {
                    var h = this.sleepState,
                        j = this.velocity.norm2() + this.angularVelocity.norm2(),
                        X = Math.pow(this.sleepSpeedLimit, 2);
                    h === a.AWAKE && j < X ? (this.sleepState = a.SLEEPY, this.timeLastSleepy = O, this.dispatchEvent(a.sleepyEvent)) : h === a.SLEEPY && X < j ? this.wakeUp() : h === a.SLEEPY && O - this.timeLastSleepy > this.sleepTimeLimit && (this.sleep(), this.dispatchEvent(a.sleepEvent))
                }
            }, a.prototype.updateSolveMassProperties = function() {
                this.sleepState === a.SLEEPING || this.type === a.KINEMATIC ? (this.invMassSolve = 0, this.invInertiaSolve.setZero(), this.invInertiaWorldSolve.setZero()) : (this.invMassSolve = this.invMass, this.invInertiaSolve.copy(this.invInertia), this.invInertiaWorldSolve.copy(this.invInertiaWorld))
            }, a.prototype.pointToLocalFrame = function(O, h) {
                h = h || new e;
                return O.vsub(this.position, h), this.quaternion.conjugate().vmult(h, h), h
            }, a.prototype.vectorToLocalFrame = function(O, h) {
                h = h || new e;
                return this.quaternion.conjugate().vmult(O, h), h
            }, a.prototype.pointToWorldFrame = function(O, h) {
                h = h || new e;
                return this.quaternion.vmult(O, h), h.vadd(this.position, h), h
            }, a.prototype.vectorToWorldFrame = function(O, h) {
                h = h || new e;
                return this.quaternion.vmult(O, h), h
            };
            var R = new e,
                z = new G;
            a.prototype.addShape = function(O, h, j) {
                var X = new e,
                    $ = new G;
                return h && X.copy(h), j && $.copy(j), this.shapes.push(O), this.shapeOffsets.push(X), this.shapeOrientations.push($), this.updateMassProperties(), this.updateBoundingRadius(), this.aabbNeedsUpdate = !0, this
            }, a.prototype.updateBoundingRadius = function() {
                for (var O = this.shapes, h = this.shapeOffsets, j = O.length, X = 0, $ = 0; $ !== j; $++) {
                    var e = O[$];
                    e.updateBoundingSphereRadius();
                    var G = h[$].norm(),
                        o = e.boundingSphereRadius;
                    X < G + o && (X = G + o)
                }
                this.boundingRadius = X
            };
            var n = new o;
            a.prototype.computeAABB = function() {
                for (var O = this.shapes, h = this.shapeOffsets, j = this.shapeOrientations, X = O.length, $ = R, e = z, G = this.quaternion, o = this.aabb, i = n, a = 0; a !== X; a++) {
                    var K = O[a];
                    j[a].mult(G, e), e.vmult(h[a], $), $.vadd(this.position, $), K.calculateWorldAABB($, e, i.lowerBound, i.upperBound), 0 === a ? o.copy(i) : o.extend(i)
                }
                this.aabbNeedsUpdate = !1
            };
            var K = new $,
                M = new $;
            new $;
            a.prototype.updateInertiaWorld = function(O) {
                var h = this.invInertia;
                if (h.x !== h.y || h.y !== h.z || O) {
                    var j = K,
                        X = M;
                    j.setRotationFromQuaternion(this.quaternion), j.transpose(X), j.scale(h, j), j.mmult(X, this.invInertiaWorld)
                } else;
            };
            var C = new e,
                Z = new e;
            a.prototype.applyForce = function(O, h) {
                if (this.type === a.DYNAMIC) {
                    var j = C;
                    h.vsub(this.position, j);
                    var X = Z;
                    j.cross(O, X), this.force.vadd(O, this.force), this.torque.vadd(X, this.torque)
                }
            };
            var m = new e,
                P = new e;
            a.prototype.applyLocalForce = function(O, h) {
                if (this.type === a.DYNAMIC) {
                    var j = m,
                        X = P;
                    this.vectorToWorldFrame(O, j), this.pointToWorldFrame(h, X), this.applyForce(j, X)
                }
            };
            var U = new e,
                w = new e,
                F = new e;
            a.prototype.applyImpulse = function(O, h) {
                if (this.type === a.DYNAMIC) {
                    var j = U;
                    h.vsub(this.position, j);
                    var X = w;
                    X.copy(O), X.mult(this.invMass, X), this.velocity.vadd(X, this.velocity);
                    var $ = F;
                    j.cross(O, $), this.invInertiaWorld.vmult($, $), this.angularVelocity.vadd($, this.angularVelocity)
                }
            };
            var B = new e,
                r = new e;
            a.prototype.applyLocalImpulse = function(O, h) {
                if (this.type === a.DYNAMIC) {
                    var j = B,
                        X = r;
                    this.vectorToWorldFrame(O, j), this.pointToWorldFrame(h, X), this.applyImpulse(j, X)
                }
            };
            var l = new e;
            a.prototype.updateMassProperties = function() {
                var O = l;
                this.invMass = 0 < this.mass ? 1 / this.mass : 0;
                var h = this.inertia,
                    j = this.fixedRotation;
                this.computeAABB(), O.set((this.aabb.upperBound.x - this.aabb.lowerBound.x) / 2, (this.aabb.upperBound.y - this.aabb.lowerBound.y) / 2, (this.aabb.upperBound.z - this.aabb.lowerBound.z) / 2), i.calculateInertia(O, this.mass, h), this.invInertia.set(0 < h.x && !j ? 1 / h.x : 0, 0 < h.y && !j ? 1 / h.y : 0, 0 < h.z && !j ? 1 / h.z : 0), this.updateInertiaWorld(!0)
            }, a.prototype.getVelocityAtWorldPoint = function(O, h) {
                var j = new e;
                return O.vsub(this.position, j), this.angularVelocity.cross(j, h), this.velocity.vadd(h, h), h
            }
        }, {
            "../collision/AABB": 3,
            "../material/Material": 25,
            "../math/Mat3": 27,
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "../shapes/Box": 37,
            "../shapes/Shape": 43,
            "../utils/EventTarget": 49
        }],
        32: [function(O, h, j) {
            O("./Body");
            var c = O("../math/Vec3"),
                K = O("../math/Quaternion"),
                X = (O("../collision/RaycastResult"), O("../collision/Ray")),
                $ = O("../objects/WheelInfo");

            function e(O) {
                this.chassisBody = O.chassisBody, this.wheelInfos = [], this.sliding = !1, this.world = null, this.indexRightAxis = void 0 !== O.indexRightAxis ? O.indexRightAxis : 1, this.indexForwardAxis = void 0 !== O.indexForwardAxis ? O.indexForwardAxis : 0, this.indexUpAxis = void 0 !== O.indexUpAxis ? O.indexUpAxis : 2
            }
            h.exports = e;
            new c, new c, new c;
            var R = new c,
                z = new c,
                n = new c;
            new X;
            e.prototype.addWheel = function(O) {
                var h = new $(O = O || {}),
                    j = this.wheelInfos.length;
                return this.wheelInfos.push(h), j
            }, e.prototype.setSteeringValue = function(O, h) {
                this.wheelInfos[h].steering = O
            };
            new c;
            e.prototype.applyEngineForce = function(O, h) {
                this.wheelInfos[h].engineForce = O
            }, e.prototype.setBrake = function(O, h) {
                this.wheelInfos[h].brake = O
            }, e.prototype.addToWorld = function(O) {
                this.constraints;
                O.add(this.chassisBody);
                var h = this;
                this.preStepCallback = function() {
                    h.updateVehicle(O.dt)
                }, O.addEventListener("preStep", this.preStepCallback), this.world = O
            }, e.prototype.getVehicleAxisWorld = function(O, h) {
                h.set(0 === O ? 1 : 0, 1 === O ? 1 : 0, 2 === O ? 1 : 0), this.chassisBody.vectorToWorldFrame(h, h)
            }, e.prototype.updateVehicle = function(O) {
                for (var h = this.wheelInfos, j = h.length, X = this.chassisBody, $ = 0; $ < j; $++) this.updateWheelTransform($);
                this.currentVehicleSpeedKmHour = 3.6 * X.velocity.norm();
                var e = new c;
                this.getVehicleAxisWorld(this.indexForwardAxis, e), e.dot(X.velocity) < 0 && (this.currentVehicleSpeedKmHour *= -1);
                for ($ = 0; $ < j; $++) this.castRay(h[$]);
                this.updateSuspension(O);
                var G = new c,
                    o = new c;
                for ($ = 0; $ < j; $++) {
                    var i = (z = h[$]).suspensionForce;
                    i > z.maxSuspensionForce && (i = z.maxSuspensionForce), z.raycastResult.hitNormalWorld.scale(i * O, G), z.raycastResult.hitPointWorld.vsub(X.position, o), X.applyImpulse(G, z.raycastResult.hitPointWorld)
                }
                this.updateFriction(O);
                var a = new c,
                    K = new c,
                    R = new c;
                for ($ = 0; $ < j; $++) {
                    var z = h[$];
                    X.getVelocityAtWorldPoint(z.chassisConnectionPointWorld, R);
                    var n = 1;
                    switch (this.indexUpAxis) {
                        case 1:
                            n = -1
                    }
                    if (z.isInContact) {
                        this.getVehicleAxisWorld(this.indexForwardAxis, K);
                        var M = K.dot(z.raycastResult.hitNormalWorld);
                        z.raycastResult.hitNormalWorld.scale(M, a), K.vsub(a, K);
                        var C = K.dot(R);
                        z.deltaRotation = n * C * O / z.radius
                    }!z.sliding && z.isInContact || 0 === z.engineForce || !z.useCustomSlidingRotationalSpeed || (z.deltaRotation = (0 < z.engineForce ? 1 : -1) * z.customSlidingRotationalSpeed * O), Math.abs(z.brake) > Math.abs(z.engineForce) && (z.deltaRotation = 0), z.rotation += z.deltaRotation, z.deltaRotation *= .99
                }
            }, e.prototype.updateSuspension = function(O) {
                for (var h = this.chassisBody.mass, j = this.wheelInfos, X = j.length, $ = 0; $ < X; $++) {
                    var e = j[$];
                    if (e.isInContact) {
                        var G, o = e.suspensionRestLength - e.suspensionLength;
                        G = e.suspensionStiffness * o * e.clippedInvContactDotSuspension;
                        var i = e.suspensionRelativeVelocity;
                        G -= (i < 0 ? e.dampingCompression : e.dampingRelaxation) * i, e.suspensionForce = G * h, e.suspensionForce < 0 && (e.suspensionForce = 0)
                    } else e.suspensionForce = 0
                }
            }, e.prototype.removeFromWorld = function(O) {
                this.constraints;
                O.remove(this.chassisBody), O.removeEventListener("preStep", this.preStepCallback), this.world = null
            };
            var m = new c,
                P = new c;
            e.prototype.castRay = function(O) {
                var h = m,
                    j = P;
                this.updateWheelTransformWorld(O);
                var X = this.chassisBody,
                    $ = -1,
                    e = O.suspensionRestLength + O.radius;
                O.directionWorld.scale(e, h);
                var G = O.chassisConnectionPointWorld;
                G.vadd(h, j);
                var o = O.raycastResult;
                o.reset();
                var i = X.collisionResponse;
                X.collisionResponse = !1, this.world.rayTest(G, j, o), X.collisionResponse = i;
                var a = o.body;
                if (O.raycastResult.groundObject = 0, a) {
                    $ = o.distance, O.raycastResult.hitNormalWorld = o.hitNormalWorld, O.isInContact = !0;
                    var K = o.distance;
                    O.suspensionLength = K - O.radius;
                    var R = O.suspensionRestLength - O.maxSuspensionTravel,
                        z = O.suspensionRestLength + O.maxSuspensionTravel;
                    O.suspensionLength < R && (O.suspensionLength = R), O.suspensionLength > z && (O.suspensionLength = z, O.raycastResult.reset());
                    var n = O.raycastResult.hitNormalWorld.dot(O.directionWorld),
                        M = new c;
                    X.getVelocityAtWorldPoint(O.raycastResult.hitPointWorld, M);
                    var C = O.raycastResult.hitNormalWorld.dot(M);
                    if (-.1 <= n) O.suspensionRelativeVelocity = 0, O.clippedInvContactDotSuspension = 10;
                    else {
                        var Z = -1 / n;
                        O.suspensionRelativeVelocity = C * Z, O.clippedInvContactDotSuspension = Z
                    }
                } else O.suspensionLength = O.suspensionRestLength + 0 * O.maxSuspensionTravel, O.suspensionRelativeVelocity = 0, O.directionWorld.scale(-1, O.raycastResult.hitNormalWorld), O.clippedInvContactDotSuspension = 1;
                return $
            }, e.prototype.updateWheelTransformWorld = function(O) {
                O.isInContact = !1;
                var h = this.chassisBody;
                h.pointToWorldFrame(O.chassisConnectionPointLocal, O.chassisConnectionPointWorld), h.vectorToWorldFrame(O.directionLocal, O.directionWorld), h.vectorToWorldFrame(O.axleLocal, O.axleWorld)
            }, e.prototype.updateWheelTransform = function(O) {
                var h = R,
                    j = z,
                    X = n,
                    $ = this.wheelInfos[O];
                this.updateWheelTransformWorld($), $.directionLocal.scale(-1, h), j.copy($.axleLocal), h.cross(j, X), X.normalize(), j.normalize();
                var e = $.steering,
                    G = new K;
                G.setFromAxisAngle(h, e);
                var o = new K;
                o.setFromAxisAngle(j, $.rotation);
                var i = $.worldTransform.quaternion;
                this.chassisBody.quaternion.mult(G, i), i.mult(o, i), i.normalize();
                var a = $.worldTransform.position;
                a.copy($.directionWorld), a.scale($.suspensionLength, a), a.vadd($.chassisConnectionPointWorld, a)
            };
            var g = [new c(1, 0, 0), new c(0, 1, 0), new c(0, 0, 1)];
            e.prototype.getWheelTransformWorld = function(O) {
                return this.wheelInfos[O].worldTransform
            };
            var q = new c,
                J = [],
                v = [];
            e.prototype.updateFriction = function(O) {
                for (var h = q, j = this.wheelInfos, X = j.length, $ = this.chassisBody, e = v, G = J, o = 0; o < X; o++) {
                    (R = (w = j[o]).raycastResult.body) && 0, w.sideImpulse = 0, w.forwardImpulse = 0, e[o] || (e[o] = new c), G[o] || (G[o] = new c)
                }
                for (o = 0; o < X; o++) {
                    if (R = (w = j[o]).raycastResult.body) {
                        var i = G[o];
                        this.getWheelTransformWorld(o).vectorToWorldFrame(g[this.indexRightAxis], i);
                        var a = w.raycastResult.hitNormalWorld,
                            K = i.dot(a);
                        a.scale(K, h), i.vsub(h, i), i.normalize(), a.cross(i, e[o]), e[o].normalize(), w.sideImpulse = A($, w.raycastResult.hitPointWorld, R, w.raycastResult.hitPointWorld, i), w.sideImpulse *= 1
                    }
                }
                this.sliding = !1;
                for (o = 0; o < X; o++) {
                    var R = (w = j[o]).raycastResult.body,
                        z = 0;
                    if (w.slipInfo = 1, R) {
                        var n = w.brake ? w.brake : 0;
                        z = s($, R, w.raycastResult.hitPointWorld, e[o], n);
                        var M = n / (z += w.engineForce * O);
                        w.slipInfo *= M
                    }
                    if (w.forwardImpulse = 0, w.skidInfo = 1, R) {
                        w.skidInfo = 1;
                        var C = w.suspensionForce * O * w.frictionSlip,
                            Z = C * C;
                        w.forwardImpulse = z;
                        var m = .5 * w.forwardImpulse,
                            P = 1 * w.sideImpulse,
                            U = m * m + P * P;
                        if (w.sliding = !1, Z < U) {
                            this.sliding = !0, w.sliding = !0;
                            M = C / Math.sqrt(U);
                            w.skidInfo *= M
                        }
                    }
                }
                if (this.sliding)
                    for (o = 0; o < X; o++) {
                        0 !== (w = j[o]).sideImpulse && w.skidInfo < 1 && (w.forwardImpulse *= w.skidInfo, w.sideImpulse *= w.skidInfo)
                    }
                for (o = 0; o < X; o++) {
                    var w = j[o],
                        F = new c;
                    if (F.copy(w.raycastResult.hitPointWorld), 0 !== w.forwardImpulse) {
                        var B = new c;
                        e[o].scale(w.forwardImpulse, B), $.applyImpulse(B, F)
                    }
                    if (0 !== w.sideImpulse) {
                        R = w.raycastResult.body;
                        var r = new c;
                        r.copy(w.raycastResult.hitPointWorld);
                        var l = new c;
                        G[o].scale(w.sideImpulse, l), $.pointToLocalFrame(F, F), F["xyz" [this.indexUpAxis]] *= w.rollInfluence, $.pointToWorldFrame(F, F), $.applyImpulse(l, F), l.scale(-1, l), R.applyImpulse(l, r)
                    }
                }
            };
            var M = new c,
                C = new c,
                Z = new c;

            function s(O, h, j, X, $) {
                var e = 0,
                    G = j,
                    o = M,
                    i = C,
                    a = Z;
                O.getVelocityAtWorldPoint(G, o), h.getVelocityAtWorldPoint(G, i), o.vsub(i, a);
                return $ < (e = -X.dot(a) * (1 / (w(O, j, X) + w(h, j, X)))) && (e = $), e < -$ && (e = -$), e
            }
            var o = new c,
                i = new c,
                a = new c,
                U = new c;

            function w(O, h, j) {
                var X = o,
                    $ = i,
                    e = a,
                    G = U;
                return h.vsub(O.position, X), X.cross(j, $), O.invInertiaWorld.vmult($, G), G.cross(X, e), O.invMass + j.dot(e)
            }
            var F = new c,
                B = new c,
                r = new c;

            function A(O, h, j, X, $, e) {
                if (1.1 < $.norm2()) return 0;
                var G = F,
                    o = B,
                    i = r;
                O.getVelocityAtWorldPoint(h, G), j.getVelocityAtWorldPoint(X, o), G.vsub(o, i);
                return -.2 * $.dot(i) * (1 / (O.invMass + j.invMass))
            }
        }, {
            "../collision/Ray": 9,
            "../collision/RaycastResult": 10,
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "../objects/WheelInfo": 36,
            "./Body": 31
        }],
        33: [function(O, h, j) {
            var G = O("./Body"),
                o = O("../shapes/Sphere"),
                X = O("../shapes/Box"),
                i = O("../math/Vec3"),
                a = O("../constraints/HingeConstraint");

            function $(O) {
                if (this.wheelBodies = [], this.coordinateSystem = void 0 === O.coordinateSystem ? new i(1, 2, 3) : O.coordinateSystem.clone(), this.chassisBody = O.chassisBody, !this.chassisBody) {
                    var h = new X(new i(5, 2, .5));
                    this.chassisBody = new G(1, h)
                }
                this.constraints = [], this.wheelAxes = [], this.wheelForces = []
            }(h.exports = $).prototype.addWheel = function(O) {
                var h = (O = O || {}).body;
                h || (h = new G(1, new o(1.2))), this.wheelBodies.push(h), this.wheelForces.push(0);
                new i;
                var j = void 0 !== O.position ? O.position.clone() : new i,
                    X = new i;
                this.chassisBody.pointToWorldFrame(j, X), h.position.set(X.x, X.y, X.z);
                var $ = void 0 !== O.axis ? O.axis.clone() : new i(0, 1, 0);
                this.wheelAxes.push($);
                var e = new a(this.chassisBody, h, {
                    pivotA: j,
                    axisA: $,
                    pivotB: i.ZERO,
                    axisB: $,
                    collideConnected: !1
                });
                return this.constraints.push(e), this.wheelBodies.length - 1
            }, $.prototype.setSteeringValue = function(O, h) {
                var j = this.wheelAxes[h],
                    X = Math.cos(O),
                    $ = Math.sin(O),
                    e = j.x,
                    G = j.y;
                this.constraints[h].axisA.set(X * e - $ * G, $ * e + X * G, 0)
            }, $.prototype.setMotorSpeed = function(O, h) {
                var j = this.constraints[h];
                j.enableMotor(), j.motorTargetVelocity = O
            }, $.prototype.disableMotor = function(O) {
                this.constraints[O].disableMotor()
            };
            var e = new i;
            $.prototype.setWheelForce = function(O, h) {
                this.wheelForces[h] = O
            }, $.prototype.applyWheelForce = function(O, h) {
                var j = this.wheelAxes[h],
                    X = this.wheelBodies[h],
                    $ = X.torque;
                j.scale(O, e), X.vectorToWorldFrame(e, e), $.vadd(e, $)
            }, $.prototype.addToWorld = function(O) {
                for (var h = this.constraints, j = this.wheelBodies.concat([this.chassisBody]), X = 0; X < j.length; X++) O.add(j[X]);
                for (X = 0; X < h.length; X++) O.addConstraint(h[X]);
                O.addEventListener("preStep", this._update.bind(this))
            }, $.prototype._update = function() {
                for (var O = this.wheelForces, h = 0; h < O.length; h++) this.applyWheelForce(O[h], h)
            }, $.prototype.removeFromWorld = function(O) {
                for (var h = this.constraints, j = this.wheelBodies.concat([this.chassisBody]), X = 0; X < j.length; X++) O.remove(j[X]);
                for (X = 0; X < h.length; X++) O.removeConstraint(h[X])
            };
            var K = new i;
            $.prototype.getWheelSpeed = function(O) {
                var h = this.wheelAxes[O],
                    j = this.wheelBodies[O].angularVelocity;
                return this.chassisBody.vectorToWorldFrame(h, K), j.dot(K)
            }
        }, {
            "../constraints/HingeConstraint": 15,
            "../math/Vec3": 30,
            "../shapes/Box": 37,
            "../shapes/Sphere": 44,
            "./Body": 31
        }],
        34: [function(O, h, j) {
            h.exports = $;
            O("../shapes/Shape");
            var X = O("../math/Vec3");
            O("../math/Quaternion"), O("../shapes/Particle"), O("../objects/Body"), O("../material/Material");

            function $() {
                this.particles = [], this.density = 1, this.smoothingRadius = 1, this.speedOfSound = 1, this.viscosity = .01, this.eps = 1e-6, this.pressures = [], this.densities = [], this.neighbors = []
            }
            $.prototype.add = function(O) {
                this.particles.push(O), this.neighbors.length < this.particles.length && this.neighbors.push([])
            }, $.prototype.remove = function(O) {
                var h = this.particles.indexOf(O); - 1 !== h && (this.particles.splice(h, 1), this.neighbors.length > this.particles.length && this.neighbors.pop())
            };
            var i = new X;
            $.prototype.getNeighbors = function(O, h) {
                for (var j = this.particles.length, X = O.id, $ = this.smoothingRadius * this.smoothingRadius, e = i, G = 0; G !== j; G++) {
                    var o = this.particles[G];
                    o.position.vsub(O.position, e), X !== o.id && e.norm2() < $ && h.push(o)
                }
            };
            var B = new X,
                r = new X,
                l = new X,
                c = new X,
                g = new X,
                q = new X;
            $.prototype.update = function() {
                for (var O = this.particles.length, h = B, j = this.speedOfSound, X = this.eps, $ = 0; $ !== O; $++) {
                    var e = this.particles[$];
                    (U = this.neighbors[$]).length = 0, this.getNeighbors(e, U), U.push(this.particles[$]);
                    for (var G = U.length, o = 0, i = 0; i !== G; i++) {
                        e.position.vsub(U[i].position, h);
                        var a = h.norm(),
                            K = this.w(a);
                        o += U[i].mass * K
                    }
                    this.densities[$] = o, this.pressures[$] = j * j * (this.densities[$] - this.density)
                }
                var R = r,
                    z = l,
                    n = c,
                    M = g,
                    C = q;
                for ($ = 0; $ !== O; $++) {
                    var Z, m, P = this.particles[$];
                    R.set(0, 0, 0), z.set(0, 0, 0);
                    var U;
                    for (G = (U = this.neighbors[$]).length, i = 0; i !== G; i++) {
                        var w = U[i];
                        P.position.vsub(w.position, M);
                        var F = M.norm();
                        Z = -w.mass * (this.pressures[$] / (this.densities[$] * this.densities[$] + X) + this.pressures[i] / (this.densities[i] * this.densities[i] + X)), this.gradw(M, n), n.mult(Z, n), R.vadd(n, R), w.velocity.vsub(P.velocity, C), C.mult(1 / (1e-4 + this.densities[$] * this.densities[i]) * this.viscosity * w.mass, C), m = this.nablaw(F), C.mult(m, C), z.vadd(C, z)
                    }
                    z.mult(P.mass, z), R.mult(P.mass, R), P.force.vadd(z, P.force), P.force.vadd(R, P.force)
                }
            }, $.prototype.w = function(O) {
                var h = this.smoothingRadius;
                return 315 / (64 * Math.PI * Math.pow(h, 9)) * Math.pow(h * h - O * O, 3)
            }, $.prototype.gradw = function(O, h) {
                var j = O.norm(),
                    X = this.smoothingRadius;
                O.mult(945 / (32 * Math.PI * Math.pow(X, 9)) * Math.pow(X * X - j * j, 2), h)
            }, $.prototype.nablaw = function(O) {
                var h = this.smoothingRadius;
                return 945 / (32 * Math.PI * Math.pow(h, 9)) * (h * h - O * O) * (7 * O * O - 3 * h * h)
            }
        }, {
            "../material/Material": 25,
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "../objects/Body": 31,
            "../shapes/Particle": 41,
            "../shapes/Shape": 43
        }],
        35: [function(O, h, j) {
            var X = O("../math/Vec3");

            function $(O, h, j) {
                j = j || {}, this.restLength = "number" == typeof j.restLength ? j.restLength : 1, this.stiffness = j.stiffness || 100, this.damping = j.damping || 1, this.bodyA = O, this.bodyB = h, this.localAnchorA = new X, this.localAnchorB = new X, j.localAnchorA && this.localAnchorA.copy(j.localAnchorA), j.localAnchorB && this.localAnchorB.copy(j.localAnchorB), j.worldAnchorA && this.setWorldAnchorA(j.worldAnchorA), j.worldAnchorB && this.setWorldAnchorB(j.worldAnchorB)
            }(h.exports = $).prototype.setWorldAnchorA = function(O) {
                this.bodyA.pointToLocalFrame(O, this.localAnchorA)
            }, $.prototype.setWorldAnchorB = function(O) {
                this.bodyB.pointToLocalFrame(O, this.localAnchorB)
            }, $.prototype.getWorldAnchorA = function(O) {
                this.bodyA.pointToWorldFrame(this.localAnchorA, O)
            }, $.prototype.getWorldAnchorB = function(O) {
                this.bodyB.pointToWorldFrame(this.localAnchorB, O)
            };
            var m = new X,
                P = new X,
                U = new X,
                w = new X,
                F = new X,
                B = new X,
                r = new X,
                l = new X,
                c = new X,
                g = new X,
                q = new X;
            $.prototype.applyForce = function() {
                var O = this.stiffness,
                    h = this.damping,
                    j = this.restLength,
                    X = this.bodyA,
                    $ = this.bodyB,
                    e = m,
                    G = P,
                    o = U,
                    i = w,
                    a = q,
                    K = F,
                    R = B,
                    z = r,
                    n = l,
                    M = c,
                    C = g;
                this.getWorldAnchorA(K), this.getWorldAnchorB(R), K.vsub(X.position, z), R.vsub($.position, n), R.vsub(K, e);
                var Z = e.norm();
                G.copy(e), G.normalize(), $.velocity.vsub(X.velocity, o), $.angularVelocity.cross(n, a), o.vadd(a, o), X.angularVelocity.cross(z, a), o.vsub(a, o), G.mult(-O * (Z - j) - h * o.dot(G), i), X.force.vsub(i, X.force), $.force.vadd(i, $.force), z.cross(i, M), n.cross(i, C), X.torque.vsub(M, X.torque), $.torque.vadd(C, $.torque)
            }
        }, {
            "../math/Vec3": 30
        }],
        36: [function(O, h, j) {
            var X = O("../math/Vec3"),
                $ = O("../math/Transform"),
                e = O("../collision/RaycastResult"),
                G = O("../utils/Utils");

            function o(O) {
                O = G.defaults(O, {
                    chassisConnectionPointLocal: new X,
                    chassisConnectionPointWorld: new X,
                    directionLocal: new X,
                    directionWorld: new X,
                    axleLocal: new X,
                    axleWorld: new X,
                    suspensionRestLength: 1,
                    suspensionMaxLength: 2,
                    radius: 1,
                    suspensionStiffness: 100,
                    dampingCompression: 10,
                    dampingRelaxation: 10,
                    frictionSlip: 1e4,
                    steering: 0,
                    rotation: 0,
                    deltaRotation: 0,
                    rollInfluence: .01,
                    maxSuspensionForce: Number.MAX_VALUE,
                    isFrontWheel: !0,
                    clippedInvContactDotSuspension: 1,
                    suspensionRelativeVelocity: 0,
                    suspensionForce: 0,
                    skidInfo: 0,
                    suspensionLength: 0,
                    maxSuspensionTravel: 1,
                    useCustomSlidingRotationalSpeed: !1,
                    customSlidingRotationalSpeed: -.1
                }), this.maxSuspensionTravel = O.maxSuspensionTravel, this.customSlidingRotationalSpeed = O.customSlidingRotationalSpeed, this.useCustomSlidingRotationalSpeed = O.useCustomSlidingRotationalSpeed, this.sliding = !1, this.chassisConnectionPointLocal = O.chassisConnectionPointLocal.clone(), this.chassisConnectionPointWorld = O.chassisConnectionPointWorld.clone(), this.directionLocal = O.directionLocal.clone(), this.directionWorld = O.directionWorld.clone(), this.axleLocal = O.axleLocal.clone(), this.axleWorld = O.axleWorld.clone(), this.suspensionRestLength = O.suspensionRestLength, this.suspensionMaxLength = O.suspensionMaxLength, this.radius = O.radius, this.suspensionStiffness = O.suspensionStiffness, this.dampingCompression = O.dampingCompression, this.dampingRelaxation = O.dampingRelaxation, this.frictionSlip = O.frictionSlip, this.steering = 0, this.rotation = 0, this.deltaRotation = 0, this.rollInfluence = O.rollInfluence, this.maxSuspensionForce = O.maxSuspensionForce, this.engineForce = 0, this.brake = 0, this.isFrontWheel = O.isFrontWheel, this.clippedInvContactDotSuspension = 1, this.suspensionRelativeVelocity = 0, this.suspensionForce = 0, this.skidInfo = 0, this.suspensionLength = 0, this.sideImpulse = 0, this.forwardImpulse = 0, this.raycastResult = new e, this.worldTransform = new $, this.isInContact = !1
            }
            h.exports = o;
            var i = new X,
                a = new X;
            i = new X;
            o.prototype.updateWheel = function(O) {
                var h = this.raycastResult;
                if (this.isInContact) {
                    var j = h.hitNormalWorld.dot(h.directionWorld);
                    h.hitPointWorld.vsub(O.position, a), O.getVelocityAtWorldPoint(a, i);
                    var X = h.hitNormalWorld.dot(i);
                    if (-.1 <= j) this.suspensionRelativeVelocity = 0, this.clippedInvContactDotSuspension = 10;
                    else {
                        var $ = -1 / j;
                        this.suspensionRelativeVelocity = X * $, this.clippedInvContactDotSuspension = $
                    }
                } else h.suspensionLength = this.suspensionRestLength, this.suspensionRelativeVelocity = 0, h.directionWorld.scale(-1, h.hitNormalWorld), this.clippedInvContactDotSuspension = 1
            }
        }, {
            "../collision/RaycastResult": 10,
            "../math/Transform": 29,
            "../math/Vec3": 30,
            "../utils/Utils": 53
        }],
        37: [function(O, h, j) {
            h.exports = $;
            var X = O("./Shape"),
                G = O("../math/Vec3"),
                o = O("./ConvexPolyhedron");

            function $(O) {
                X.call(this), this.type = X.types.BOX, this.halfExtents = O, this.convexPolyhedronRepresentation = null, this.updateConvexPolyhedronRepresentation(), this.updateBoundingSphereRadius()
            }(($.prototype = new X).constructor = $).prototype.updateConvexPolyhedronRepresentation = function() {
                var O = this.halfExtents.x,
                    h = this.halfExtents.y,
                    j = this.halfExtents.z,
                    X = G,
                    $ = [new X(-O, -h, -j), new X(O, -h, -j), new X(O, h, -j), new X(-O, h, -j), new X(-O, -h, j), new X(O, -h, j), new X(O, h, j), new X(-O, h, j)],
                    e = (new X(0, 0, 1), new X(0, 1, 0), new X(1, 0, 0), new o($, [
                        [3, 2, 1, 0],
                        [4, 5, 6, 7],
                        [5, 4, 0, 1],
                        [2, 3, 7, 6],
                        [0, 4, 7, 3],
                        [1, 2, 6, 5]
                    ]));
                (this.convexPolyhedronRepresentation = e).material = this.material
            }, $.prototype.calculateLocalInertia = function(O, h) {
                return h = h || new G, $.calculateInertia(this.halfExtents, O, h), h
            }, $.calculateInertia = function(O, h, j) {
                var X = O;
                j.x = 1 / 12 * h * (2 * X.y * 2 * X.y + 2 * X.z * 2 * X.z), j.y = 1 / 12 * h * (2 * X.x * 2 * X.x + 2 * X.z * 2 * X.z), j.z = 1 / 12 * h * (2 * X.y * 2 * X.y + 2 * X.x * 2 * X.x)
            }, $.prototype.getSideNormals = function(O, h) {
                var j = O,
                    X = this.halfExtents;
                if (j[0].set(X.x, 0, 0), j[1].set(0, X.y, 0), j[2].set(0, 0, X.z), j[3].set(-X.x, 0, 0), j[4].set(0, -X.y, 0), j[5].set(0, 0, -X.z), void 0 !== h)
                    for (var $ = 0; $ !== j.length; $++) h.vmult(j[$], j[$]);
                return j
            }, $.prototype.volume = function() {
                return 8 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z
            }, $.prototype.updateBoundingSphereRadius = function() {
                this.boundingSphereRadius = this.halfExtents.norm()
            };
            var i = new G;
            new G;
            $.prototype.forEachWorldCorner = function(O, h, j) {
                for (var X = this.halfExtents, $ = [
                        [X.x, X.y, X.z],
                        [-X.x, X.y, X.z],
                        [-X.x, -X.y, X.z],
                        [-X.x, -X.y, -X.z],
                        [X.x, -X.y, -X.z],
                        [X.x, X.y, -X.z],
                        [-X.x, X.y, -X.z],
                        [X.x, -X.y, X.z]
                    ], e = 0; e < $.length; e++) i.set($[e][0], $[e][1], $[e][2]), h.vmult(i, i), O.vadd(i, i), j(i.x, i.y, i.z)
            };
            var K = [new G, new G, new G, new G, new G, new G, new G, new G];
            $.prototype.calculateWorldAABB = function(O, h, j, X) {
                var $ = this.halfExtents;
                K[0].set($.x, $.y, $.z), K[1].set(-$.x, $.y, $.z), K[2].set(-$.x, -$.y, $.z), K[3].set(-$.x, -$.y, -$.z), K[4].set($.x, -$.y, -$.z), K[5].set($.x, $.y, -$.z), K[6].set(-$.x, $.y, -$.z), K[7].set($.x, -$.y, $.z);
                var e = K[0];
                h.vmult(e, e), O.vadd(e, e), X.copy(e), j.copy(e);
                for (var G = 1; G < 8; G++) {
                    e = K[G];
                    h.vmult(e, e), O.vadd(e, e);
                    var o = e.x,
                        i = e.y,
                        a = e.z;
                    o > X.x && (X.x = o), i > X.y && (X.y = i), a > X.z && (X.z = a), o < j.x && (j.x = o), i < j.y && (j.y = i), a < j.z && (j.z = a)
                }
            }
        }, {
            "../math/Vec3": 30,
            "./ConvexPolyhedron": 38,
            "./Shape": 43
        }],
        38: [function(O, h, j) {
            h.exports = z;
            var X = O("./Shape"),
                w = O("../math/Vec3"),
                C = (O("../math/Quaternion"), O("../math/Transform"));

            function z(O, h, j) {
                X.call(this), this.type = X.types.CONVEXPOLYHEDRON, this.vertices = O || [], this.worldVertices = [], this.worldVerticesNeedsUpdate = !0, this.faces = h || [], this.faceNormals = [], this.computeNormals(), this.worldFaceNormalsNeedsUpdate = !0, this.worldFaceNormals = [], this.uniqueEdges = [], this.uniqueAxes = j ? j.slice() : null, this.computeEdges(), this.updateBoundingSphereRadius()
            }(z.prototype = new X).constructor = z;
            var R = new w;
            z.prototype.computeEdges = function() {
                var O = this.faces,
                    h = this.vertices,
                    j = (h.length, this.uniqueEdges);
                j.length = 0;
                for (var X = R, $ = 0; $ !== O.length; $++)
                    for (var e = O[$], G = e.length, o = 0; o !== G; o++) {
                        var i = (o + 1) % G;
                        h[e[o]].vsub(h[e[i]], X), X.normalize();
                        for (var a = !1, K = 0; K !== j.length; K++)
                            if (j[K].almostEquals(X) || j[K].almostEquals(X)) {
                                a = !0;
                                break
                            }
                        a || j.push(X.clone())
                    }
            }, z.prototype.computeNormals = function() {
                this.faceNormals.length = this.faces.length;
                for (var O = 0; O < this.faces.length; O++) {
                    for (var h = 0; h < this.faces[O].length; h++)
                        if (!this.vertices[this.faces[O][h]]) throw new Error("Vertex " + this.faces[O][h] + " not found!");
                    var j = this.faceNormals[O] || new w;
                    this.getFaceNormal(O, j), j.negate(j), this.faceNormals[O] = j;
                    var X = this.vertices[this.faces[O][0]];
                    if (j.dot(X) < 0) {
                        console.error(".faceNormals[" + O + "] = Vec3(" + j.toString() + ") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");
                        for (h = 0; h < this.faces[O].length; h++) console.warn(".vertices[" + this.faces[O][h] + "] = Vec3(" + this.vertices[this.faces[O][h]].toString() + ")")
                    }
                }
            };
            var $ = new w,
                e = new w;
            z.computeNormal = function(O, h, j, X) {
                h.vsub(O, e), j.vsub(h, $), $.cross(e, X), X.isZero() || X.normalize()
            }, z.prototype.getFaceNormal = function(O, h) {
                var j = this.faces[O],
                    X = this.vertices[j[0]],
                    $ = this.vertices[j[1]],
                    e = this.vertices[j[2]];
                return z.computeNormal(X, $, e, h)
            };
            var F = new w;
            z.prototype.clipAgainstHull = function(O, h, j, X, $, e, G, o, i) {
                for (var a = F, K = -1, R = -Number.MAX_VALUE, z = 0; z < j.faces.length; z++) {
                    a.copy(j.faceNormals[z]), $.vmult(a, a);
                    var n = a.dot(e);
                    R < n && (R = n, K = z)
                }
                for (var M = [], C = j.faces[K], Z = C.length, m = 0; m < Z; m++) {
                    var P = j.vertices[C[m]],
                        U = new w;
                    U.copy(P), $.vmult(U, U), X.vadd(U, U), M.push(U)
                }
                0 <= K && this.clipFaceAgainstHull(e, O, h, M, G, o, i)
            };
            var l = new w,
                c = new w,
                g = new w,
                q = new w,
                J = new w,
                v = new w;
            z.prototype.findSeparatingAxis = function(O, h, j, X, $, e, G, o) {
                var i = l,
                    a = c,
                    K = g,
                    R = q,
                    z = J,
                    n = v,
                    M = Number.MAX_VALUE,
                    C = this;
                if (C.uniqueAxes)
                    for (m = 0; m !== C.uniqueAxes.length; m++) {
                        if (j.vmult(C.uniqueAxes[m], i), !1 === (w = C.testSepAxis(i, O, h, j, X, $))) return !1;
                        w < M && (M = w, e.copy(i))
                    } else
                        for (var Z = G ? G.length : C.faces.length, m = 0; m < Z; m++) {
                            var P = G ? G[m] : m;
                            if (i.copy(C.faceNormals[P]), j.vmult(i, i), !1 === (w = C.testSepAxis(i, O, h, j, X, $))) return !1;
                            w < M && (M = w, e.copy(i))
                        }
                if (O.uniqueAxes)
                    for (m = 0; m !== O.uniqueAxes.length; m++) {
                        if ($.vmult(O.uniqueAxes[m], a), 0, !1 === (w = C.testSepAxis(a, O, h, j, X, $))) return !1;
                        w < M && (M = w, e.copy(a))
                    } else
                        for (var U = o ? o.length : O.faces.length, m = 0; m < U; m++) {
                            var w;
                            P = o ? o[m] : m;
                            if (a.copy(O.faceNormals[P]), $.vmult(a, a), 0, !1 === (w = C.testSepAxis(a, O, h, j, X, $))) return !1;
                            w < M && (M = w, e.copy(a))
                        }
                for (var F = 0; F !== C.uniqueEdges.length; F++) {
                    j.vmult(C.uniqueEdges[F], R);
                    for (var B = 0; B !== O.uniqueEdges.length; B++)
                        if ($.vmult(O.uniqueEdges[B], z), R.cross(z, n), !n.almostZero()) {
                            n.normalize();
                            var r = C.testSepAxis(n, O, h, j, X, $);
                            if (!1 === r) return !1;
                            r < M && (M = r, e.copy(n))
                        }
                }
                return X.vsub(h, K), 0 < K.dot(e) && e.negate(e), !0
            };
            var n = [],
                M = [];
            z.prototype.testSepAxis = function(O, h, j, X, $, e) {
                z.project(this, O, j, X, n), z.project(h, O, $, e, M);
                var G = n[0],
                    o = n[1],
                    i = M[0],
                    a = M[1];
                if (G < a || i < o) return !1;
                var K = G - a,
                    R = i - o;
                return K < R ? K : R
            };
            var G = new w,
                o = new w;
            z.prototype.calculateLocalInertia = function(O, h) {
                this.computeLocalAABB(G, o);
                var j = o.x - G.x,
                    X = o.y - G.y,
                    $ = o.z - G.z;
                h.x = 1 / 12 * O * (2 * X * 2 * X + 2 * $ * 2 * $), h.y = 1 / 12 * O * (2 * j * 2 * j + 2 * $ * 2 * $), h.z = 1 / 12 * O * (2 * X * 2 * X + 2 * j * 2 * j)
            }, z.prototype.getPlaneConstantOfFace = function(O) {
                var h = this.faces[O],
                    j = this.faceNormals[O],
                    X = this.vertices[h[0]];
                return -j.dot(X)
            };
            var x = new w,
                I = new w,
                p = new w,
                k = new w,
                d = new w,
                W = new w,
                f = new w,
                T = new w;
            z.prototype.clipFaceAgainstHull = function(O, h, j, X, $, e, G) {
                for (var o = x, i = I, a = p, K = k, R = d, z = W, n = f, M = T, C = this, Z = X, m = [], P = -1, U = Number.MAX_VALUE, w = 0; w < C.faces.length; w++) {
                    o.copy(C.faceNormals[w]), j.vmult(o, o);
                    var F = o.dot(O);
                    F < U && (U = F, P = w)
                }
                if (!(P < 0)) {
                    var B = C.faces[P];
                    B.connectedFaces = [];
                    for (var r = 0; r < C.faces.length; r++)
                        for (var l = 0; l < C.faces[r].length; l++) - 1 !== B.indexOf(C.faces[r][l]) && r !== P && -1 === B.connectedFaces.indexOf(r) && B.connectedFaces.push(r);
                    Z.length;
                    for (var c = B.length, g = 0; g < c; g++) {
                        var q = C.vertices[B[g]],
                            J = C.vertices[B[(g + 1) % c]];
                        q.vsub(J, i), a.copy(i), j.vmult(a, a), h.vadd(a, a), K.copy(this.faceNormals[P]), j.vmult(K, K), h.vadd(K, K), a.cross(K, R), R.negate(R), z.copy(q), j.vmult(z, z), h.vadd(z, z);
                        z.dot(R);
                        var v = B.connectedFaces[g];
                        n.copy(this.faceNormals[v]);
                        var s = this.getPlaneConstantOfFace(v);
                        M.copy(n), j.vmult(M, M);
                        var A = s - M.dot(h);
                        for (this.clipFaceAgainstPlane(Z, m, M, A); Z.length;) Z.shift();
                        for (; m.length;) Z.push(m.shift())
                    }
                    n.copy(this.faceNormals[P]);
                    s = this.getPlaneConstantOfFace(P);
                    M.copy(n), j.vmult(M, M);
                    for (A = s - M.dot(h), r = 0; r < Z.length; r++) {
                        var u = M.dot(Z[r]) + A;
                        if (u <= $ && (console.log("clamped: depth=" + u + " to minDist=" + $), u = $), u <= e) {
                            var b = Z[r];
                            if (u <= 0) {
                                var D = {
                                    point: b,
                                    normal: M,
                                    depth: u
                                };
                                G.push(D)
                            }
                        }
                    }
                }
            }, z.prototype.clipFaceAgainstPlane = function(O, h, j, X) {
                var $, e, G = O.length;
                if (G < 2) return h;
                var o = O[O.length - 1],
                    i = O[0];
                $ = j.dot(o) + X;
                for (var a = 0; a < G; a++) {
                    if (i = O[a], e = j.dot(i) + X, $ < 0)
                        if (e < 0) {
                            (K = new w).copy(i), h.push(K)
                        } else {
                            var K = new w;
                            o.lerp(i, $ / ($ - e), K), h.push(K)
                        }
                    else if (e < 0) {
                        K = new w;
                        o.lerp(i, $ / ($ - e), K), h.push(K), h.push(i)
                    }
                    o = i, $ = e
                }
                return h
            }, z.prototype.computeWorldVertices = function(O, h) {
                for (var j = this.vertices.length; this.worldVertices.length < j;) this.worldVertices.push(new w);
                for (var X = this.vertices, $ = this.worldVertices, e = 0; e !== j; e++) h.vmult(X[e], $[e]), O.vadd($[e], $[e]);
                this.worldVerticesNeedsUpdate = !1
            };
            new w;
            z.prototype.computeLocalAABB = function(O, h) {
                var j = this.vertices.length,
                    X = this.vertices;
                O.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), h.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
                for (var $ = 0; $ < j; $++) {
                    var e = X[$];
                    e.x < O.x ? O.x = e.x : e.x > h.x && (h.x = e.x), e.y < O.y ? O.y = e.y : e.y > h.y && (h.y = e.y), e.z < O.z ? O.z = e.z : e.z > h.z && (h.z = e.z)
                }
            }, z.prototype.computeWorldFaceNormals = function(O) {
                for (var h = this.faceNormals.length; this.worldFaceNormals.length < h;) this.worldFaceNormals.push(new w);
                for (var j = this.faceNormals, X = this.worldFaceNormals, $ = 0; $ !== h; $++) O.vmult(j[$], X[$]);
                this.worldFaceNormalsNeedsUpdate = !1
            }, z.prototype.updateBoundingSphereRadius = function() {
                for (var O = 0, h = this.vertices, j = 0, X = h.length; j !== X; j++) {
                    var $ = h[j].norm2();
                    O < $ && (O = $)
                }
                this.boundingSphereRadius = Math.sqrt(O)
            };
            var Z = new w;
            z.prototype.calculateWorldAABB = function(O, h, j, X) {
                for (var $, e, G, o, i, a, K = this.vertices.length, R = this.vertices, z = 0; z < K; z++) {
                    Z.copy(R[z]), h.vmult(Z, Z), O.vadd(Z, Z);
                    var n = Z;
                    n.x < $ || void 0 === $ ? $ = n.x : (n.x > o || void 0 === o) && (o = n.x), n.y < e || void 0 === e ? e = n.y : (n.y > i || void 0 === i) && (i = n.y), n.z < G || void 0 === G ? G = n.z : (n.z > a || void 0 === a) && (a = n.z)
                }
                j.set($, e, G), X.set(o, i, a)
            }, z.prototype.volume = function() {
                return 4 * Math.PI * this.boundingSphereRadius / 3
            }, z.prototype.getAveragePointLocal = function(O) {
                O = O || new w;
                for (var h = this.vertices.length, j = this.vertices, X = 0; X < h; X++) O.vadd(j[X], O);
                return O.mult(1 / h, O), O
            }, z.prototype.transformAllPoints = function(O, h) {
                var j = this.vertices.length,
                    X = this.vertices;
                if (h) {
                    for (var $ = 0; $ < j; $++) {
                        var e = X[$];
                        h.vmult(e, e)
                    }
                    for ($ = 0; $ < this.faceNormals.length; $++) {
                        e = this.faceNormals[$];
                        h.vmult(e, e)
                    }
                }
                if (O)
                    for ($ = 0; $ < j; $++) {
                        (e = X[$]).vadd(O, e)
                    }
            };
            var m = new w,
                P = new w,
                U = new w;
            z.prototype.pointIsInside = function(O) {
                var h = this.vertices.length,
                    j = this.vertices,
                    X = this.faces,
                    $ = this.faceNormals,
                    e = this.faces.length,
                    G = m;
                this.getAveragePointLocal(G);
                for (var o = 0; o < e; o++) {
                    this.faces[o].length, h = $[o];
                    var i = j[X[o][0]],
                        a = P;
                    O.vsub(i, a);
                    var K = h.dot(a),
                        R = U;
                    G.vsub(i, R);
                    var z = h.dot(R);
                    if (K < 0 && 0 < z || 0 < K && z < 0) return !1
                }
                return -1
            };
            new w;
            var B = new w,
                r = new w;
            z.project = function(O, h, j, X, $) {
                var e = O.vertices.length,
                    G = B,
                    o = 0,
                    i = 0,
                    a = r,
                    K = O.vertices;
                a.setZero(), C.vectorToLocalFrame(j, X, h, G), C.pointToLocalFrame(j, X, a, a);
                var R = a.dot(G);
                i = o = K[0].dot(G);
                for (var z = 1; z < e; z++) {
                    var n = K[z].dot(G);
                    o < n && (o = n), n < i && (i = n)
                }
                if ((o -= R) < (i -= R)) {
                    var M = i;
                    i = o, o = M
                }
                $[0] = o, $[1] = i
            }
        }, {
            "../math/Quaternion": 28,
            "../math/Transform": 29,
            "../math/Vec3": 30,
            "./Shape": 43
        }],
        39: [function(O, h, j) {
            h.exports = X;
            var Z = O("./Shape"),
                m = O("../math/Vec3"),
                P = (O("../math/Quaternion"), O("./ConvexPolyhedron"));

            function X(O, h, j, X) {
                var $ = X,
                    e = [],
                    G = [],
                    o = [],
                    i = [],
                    a = [],
                    K = Math.cos,
                    R = Math.sin;
                e.push(new m(h * K(0), h * R(0), .5 * -j)), i.push(0), e.push(new m(O * K(0), O * R(0), .5 * j)), a.push(1);
                for (var z = 0; z < $; z++) {
                    var n = 2 * Math.PI / $ * (z + 1),
                        M = 2 * Math.PI / $ * (z + .5);
                    z < $ - 1 ? (e.push(new m(h * K(n), h * R(n), .5 * -j)), i.push(2 * z + 2), e.push(new m(O * K(n), O * R(n), .5 * j)), a.push(2 * z + 3), o.push([2 * z + 2, 2 * z + 3, 2 * z + 1, 2 * z])) : o.push([0, 1, 2 * z + 1, 2 * z]), ($ % 2 == 1 || z < $ / 2) && G.push(new m(K(M), R(M), 0))
                }
                o.push(a), G.push(new m(0, 0, 1));
                var C = [];
                for (z = 0; z < i.length; z++) C.push(i[i.length - z - 1]);
                o.push(C), this.type = Z.types.CONVEXPOLYHEDRON, P.call(this, e, o, G)
            }
            X.prototype = new P
        }, {
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "./ConvexPolyhedron": 38,
            "./Shape": 43
        }],
        40: [function(O, h, j) {
            var X = O("./Shape"),
                R = O("./ConvexPolyhedron"),
                z = O("../math/Vec3"),
                $ = O("../utils/Utils");

            function e(O, h) {
                h = $.defaults(h, {
                    maxValue: null,
                    minValue: null,
                    elementSize: 1
                }), this.data = O, this.maxValue = h.maxValue, this.minValue = h.minValue, this.elementSize = h.elementSize, null === h.minValue && this.updateMinValue(), null === h.maxValue && this.updateMaxValue(), this.cacheEnabled = !0, X.call(this), this.pillarConvex = new R, this.pillarOffset = new z, this.type = X.types.HEIGHTFIELD, this.updateBoundingSphereRadius(), this._cachedPillars = {}
            }((h.exports = e).prototype = new X).update = function() {
                this._cachedPillars = {}
            }, e.prototype.updateMinValue = function() {
                for (var O = this.data, h = O[0][0], j = 0; j !== O.length; j++)
                    for (var X = 0; X !== O[j].length; X++) {
                        var $ = O[j][X];
                        $ < h && (h = $)
                    }
                this.minValue = h
            }, e.prototype.updateMaxValue = function() {
                for (var O = this.data, h = O[0][0], j = 0; j !== O.length; j++)
                    for (var X = 0; X !== O[j].length; X++) {
                        var $ = O[j][X];
                        h < $ && (h = $)
                    }
                this.maxValue = h
            }, e.prototype.setHeightValueAtIndex = function(O, h, j) {
                this.data[O][h] = j, this.clearCachedConvexTrianglePillar(O, h, !1), 0 < O && (this.clearCachedConvexTrianglePillar(O - 1, h, !0), this.clearCachedConvexTrianglePillar(O - 1, h, !1)), 0 < h && (this.clearCachedConvexTrianglePillar(O, h - 1, !0), this.clearCachedConvexTrianglePillar(O, h - 1, !1)), 0 < h && 0 < O && this.clearCachedConvexTrianglePillar(O - 1, h - 1, !0)
            }, e.prototype.getRectMinMax = function(O, h, j, X, $) {
                $ = $ || [];
                for (var e = this.data, G = this.minValue, o = O; o <= j; o++)
                    for (var i = h; i <= X; i++) {
                        var a = e[o][i];
                        G < a && (G = a)
                    }
                $[0] = this.minValue, $[1] = G
            }, e.prototype.getIndexOfPosition = function(O, h, j, X) {
                var $ = this.elementSize,
                    e = this.data,
                    G = Math.floor(O / $),
                    o = Math.floor(h / $);
                return j[0] = G, j[1] = o, X && (G < 0 && (G = 0), o < 0 && (o = 0), G >= e.length - 1 && (G = e.length - 1), o >= e[0].length - 1 && (o = e[0].length - 1)), !(G < 0 || o < 0 || G >= e.length - 1 || o >= e[0].length - 1)
            }, e.prototype.getHeightAt = function(O, h, j) {
                var X = [];
                this.getIndexOfPosition(O, h, X, j);
                var $ = [];
                return this.getRectMinMax(X[0], X[1] + 1, X[0], X[1] + 1, $), ($[0] + $[1]) / 2
            }, e.prototype.getCacheConvexTrianglePillarKey = function(O, h, j) {
                return O + "_" + h + "_" + (j ? 1 : 0)
            }, e.prototype.getCachedConvexTrianglePillar = function(O, h, j) {
                return this._cachedPillars[this.getCacheConvexTrianglePillarKey(O, h, j)]
            }, e.prototype.setCachedConvexTrianglePillar = function(O, h, j, X, $) {
                this._cachedPillars[this.getCacheConvexTrianglePillarKey(O, h, j)] = {
                    convex: X,
                    offset: $
                }
            }, e.prototype.clearCachedConvexTrianglePillar = function(O, h, j) {
                delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(O, h, j)]
            }, e.prototype.getConvexTrianglePillar = function(O, h, j) {
                var X = this.pillarConvex,
                    $ = this.pillarOffset;
                if (this.cacheEnabled) {
                    if (e = this.getCachedConvexTrianglePillar(O, h, j)) return this.pillarConvex = e.convex, void(this.pillarOffset = e.offset);
                    X = new R, $ = new z, this.pillarConvex = X, this.pillarOffset = $
                }
                var e = this.data,
                    G = this.elementSize,
                    o = X.faces;
                X.vertices.length = 6;
                for (var i = 0; i < 6; i++) X.vertices[i] || (X.vertices[i] = new z);
                o.length = 5;
                for (i = 0; i < 5; i++) o[i] || (o[i] = []);
                var a = X.vertices,
                    K = (Math.min(e[O][h], e[O + 1][h], e[O][h + 1], e[O + 1][h + 1]) - this.minValue) / 2 + this.minValue;
                o[4][3] = j ? ($.set((O + .75) * G, (h + .75) * G, K), a[0].set(.25 * G, .25 * G, e[O + 1][h + 1] - K), a[1].set(-.75 * G, .25 * G, e[O][h + 1] - K), a[2].set(.25 * G, -.75 * G, e[O + 1][h] - K), a[3].set(.25 * G, .25 * G, -K - 1), a[4].set(-.75 * G, .25 * G, -K - 1), a[5].set(.25 * G, -.75 * G, -K - 1), o[0][0] = 0, o[0][1] = 1, o[0][2] = 2, o[1][0] = 5, o[1][1] = 4, o[1][2] = 3, o[2][0] = 2, o[2][1] = 5, o[2][2] = 3, o[2][3] = 0, o[3][0] = 3, o[3][1] = 4, o[3][2] = 1, o[3][3] = 0, o[4][0] = 1, o[4][1] = 4, o[4][2] = 5, 2) : ($.set((O + .25) * G, (h + .25) * G, K), a[0].set(-.25 * G, -.25 * G, e[O][h] - K), a[1].set(.75 * G, -.25 * G, e[O + 1][h] - K), a[2].set(-.25 * G, .75 * G, e[O][h + 1] - K), a[3].set(-.25 * G, -.25 * G, -K - 1), a[4].set(.75 * G, -.25 * G, -K - 1), a[5].set(-.25 * G, .75 * G, -K - 1), o[0][0] = 0, o[0][1] = 1, o[0][2] = 2, o[1][0] = 5, o[1][1] = 4, o[1][2] = 3, o[2][0] = 0, o[2][1] = 2, o[2][2] = 5, o[2][3] = 3, o[3][0] = 1, o[3][1] = 0, o[3][2] = 3, o[3][3] = 4, o[4][0] = 4, o[4][1] = 5, o[4][2] = 2, 1), X.computeNormals(), X.computeEdges(), X.updateBoundingSphereRadius(), this.setCachedConvexTrianglePillar(O, h, j, X, $)
            }, e.prototype.calculateLocalInertia = function(O, h) {
                return (h = h || new z).set(0, 0, 0), h
            }, e.prototype.volume = function() {
                return Number.MAX_VALUE
            }, e.prototype.calculateWorldAABB = function(O, h, j, X) {
                j.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), X.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
            }, e.prototype.updateBoundingSphereRadius = function() {
                var O = this.data,
                    h = this.elementSize;
                this.boundingSphereRadius = new z(O.length * h, O[0].length * h, Math.max(Math.abs(this.maxValue), Math.abs(this.minValue))).norm()
            }
        }, {
            "../math/Vec3": 30,
            "../utils/Utils": 53,
            "./ConvexPolyhedron": 38,
            "./Shape": 43
        }],
        41: [function(O, h, j) {
            h.exports = e;
            var X = O("./Shape"),
                $ = O("../math/Vec3");

            function e() {
                X.call(this), this.type = X.types.PARTICLE
            }((e.prototype = new X).constructor = e).prototype.calculateLocalInertia = function(O, h) {
                return (h = h || new $).set(0, 0, 0), h
            }, e.prototype.volume = function() {
                return 0
            }, e.prototype.updateBoundingSphereRadius = function() {
                this.boundingSphereRadius = 0
            }, e.prototype.calculateWorldAABB = function(O, h, j, X) {
                j.copy(O), X.copy(O)
            }
        }, {
            "../math/Vec3": 30,
            "./Shape": 43
        }],
        42: [function(O, h, j) {
            h.exports = e;
            var X = O("./Shape"),
                $ = O("../math/Vec3");

            function e() {
                X.call(this), this.type = X.types.PLANE, this.worldNormal = new $, this.worldNormalNeedsUpdate = !0, this.boundingSphereRadius = Number.MAX_VALUE
            }((e.prototype = new X).constructor = e).prototype.computeWorldNormal = function(O) {
                var h = this.worldNormal;
                h.set(0, 0, 1), O.vmult(h, h), this.worldNormalNeedsUpdate = !1
            }, e.prototype.calculateLocalInertia = function(O, h) {
                return h = h || new $
            }, e.prototype.volume = function() {
                return Number.MAX_VALUE
            };
            var G = new $;
            e.prototype.calculateWorldAABB = function(O, h, j, X) {
                G.set(0, 0, 1), h.vmult(G, G);
                var $ = Number.MAX_VALUE;
                j.set(-$, -$, -$), X.set($, $, $), 1 === G.x && (X.x = O.x), 1 === G.y && (X.y = O.y), 1 === G.z && (X.z = O.z), -1 === G.x && (j.x = O.x), -1 === G.y && (j.y = O.y), -1 === G.z && (j.z = O.z)
            }, e.prototype.updateBoundingSphereRadius = function() {
                this.boundingSphereRadius = Number.MAX_VALUE
            }
        }, {
            "../math/Vec3": 30,
            "./Shape": 43
        }],
        43: [function(O, h, j) {
            h.exports = X;
            var X = O("./Shape");
            O("../math/Vec3"), O("../math/Quaternion"), O("../material/Material");

            function X() {
                this.id = X.idCounter++, this.type = 0, this.boundingSphereRadius = 0, this.collisionResponse = !0, this.material = null
            }(X.prototype.constructor = X).prototype.updateBoundingSphereRadius = function() {
                throw "computeBoundingSphereRadius() not implemented for shape type " + this.type
            }, X.prototype.volume = function() {
                throw "volume() not implemented for shape type " + this.type
            }, X.prototype.calculateLocalInertia = function(O, h) {
                throw "calculateLocalInertia() not implemented for shape type " + this.type
            }, X.idCounter = 0, X.types = {
                SPHERE: 1,
                PLANE: 2,
                BOX: 4,
                COMPOUND: 8,
                CONVEXPOLYHEDRON: 16,
                HEIGHTFIELD: 32,
                PARTICLE: 64,
                CYLINDER: 128,
                TRIMESH: 256
            }
        }, {
            "../material/Material": 25,
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "./Shape": 43
        }],
        44: [function(O, h, j) {
            h.exports = e;
            var X = O("./Shape"),
                $ = O("../math/Vec3");

            function e(O) {
                if (X.call(this), this.radius = void 0 !== O ? Number(O) : 1, this.type = X.types.SPHERE, this.radius < 0) throw new Error("The sphere radius cannot be negative.");
                this.updateBoundingSphereRadius()
            }((e.prototype = new X).constructor = e).prototype.calculateLocalInertia = function(O, h) {
                h = h || new $;
                var j = 2 * O * this.radius * this.radius / 5;
                return h.x = j, h.y = j, h.z = j, h
            }, e.prototype.volume = function() {
                return 4 * Math.PI * this.radius / 3
            }, e.prototype.updateBoundingSphereRadius = function() {
                this.boundingSphereRadius = this.radius
            }, e.prototype.calculateWorldAABB = function(O, h, j, X) {
                for (var $ = this.radius, e = ["x", "y", "z"], G = 0; G < e.length; G++) {
                    var o = e[G];
                    j[o] = O[o] - $, X[o] = O[o] + $
                }
            }
        }, {
            "../math/Vec3": 30,
            "./Shape": 43
        }],
        45: [function(O, h, j) {
            h.exports = P;
            var X = O("./Shape"),
                a = O("../math/Vec3"),
                $ = (O("../math/Quaternion"), O("../math/Transform")),
                K = O("../collision/AABB"),
                e = O("../utils/Octree");

            function P(O, h) {
                X.call(this), this.type = X.types.TRIMESH, this.vertices = new Float32Array(O), this.indices = new Int16Array(h), this.normals = new Float32Array(h.length), this.aabb = new K, this.edges = null, this.scale = new a(1, 1, 1), this.tree = new e, this.updateEdges(), this.updateNormals(), this.updateAABB(), this.updateBoundingSphereRadius(), this.updateTree()
            }(P.prototype = new X).constructor = P;
            var o = new a;
            P.prototype.updateTree = function() {
                var O = this.tree;
                O.reset(), O.aabb.copy(this.aabb);
                var h = this.scale;
                O.aabb.lowerBound.x *= 1 / h.x, O.aabb.lowerBound.y *= 1 / h.y, O.aabb.lowerBound.z *= 1 / h.z, O.aabb.upperBound.x *= 1 / h.x, O.aabb.upperBound.y *= 1 / h.y, O.aabb.upperBound.z *= 1 / h.z;
                for (var j = new K, X = new a, $ = new a, e = new a, G = [X, $, e], o = 0; o < this.indices.length / 3; o++) {
                    var i = 3 * o;
                    this._getUnscaledVertex(this.indices[i], X), this._getUnscaledVertex(this.indices[i + 1], $), this._getUnscaledVertex(this.indices[i + 2], e), j.setFromPoints(G), O.insert(j, o)
                }
                O.removeEmptyNodes()
            };
            var i = new K;
            P.prototype.getTrianglesInAABB = function(O, h) {
                i.copy(O);
                var j = this.scale,
                    X = j.x,
                    $ = j.y,
                    e = j.z,
                    G = i.lowerBound,
                    o = i.upperBound;
                return G.x /= X, G.y /= $, G.z /= e, o.x /= X, o.y /= $, o.z /= e, this.tree.aabbQuery(i, h)
            }, P.prototype.setScale = function(O) {
                var h = this.scale.x === this.scale.y === this.scale.z,
                    j = O.x === O.y === O.z;
                h && j || this.updateNormals(), this.scale.copy(O), this.updateAABB(), this.updateBoundingSphereRadius()
            }, P.prototype.updateNormals = function() {
                for (var O = o, h = this.normals, j = 0; j < this.indices.length / 3; j++) {
                    var X = 3 * j,
                        $ = this.indices[X],
                        e = this.indices[X + 1],
                        G = this.indices[X + 2];
                    this.getVertex($, M), this.getVertex(e, C), this.getVertex(G, Z), P.computeNormal(C, M, Z, O), h[X] = O.x, h[X + 1] = O.y, h[X + 2] = O.z
                }
            }, P.prototype.updateEdges = function() {
                for (var j = {}, O = function(O, h) {
                        j[$ < e ? $ + "_" + e : e + "_" + $] = !0
                    }, h = 0; h < this.indices.length / 3; h++) {
                    var X = 3 * h,
                        $ = this.indices[X],
                        e = this.indices[X + 1];
                    this.indices[X + 2];
                    O(), O(), O()
                }
                var G = Object.keys(j);
                this.edges = new Int16Array(2 * G.length);
                for (h = 0; h < G.length; h++) {
                    var o = G[h].split("_");
                    this.edges[2 * h] = parseInt(o[0], 10), this.edges[2 * h + 1] = parseInt(o[1], 10)
                }
            }, P.prototype.getEdgeVertex = function(O, h, j) {
                var X = this.edges[2 * O + (h ? 1 : 0)];
                this.getVertex(X, j)
            };
            var G = new a,
                R = new a;
            P.prototype.getEdgeVector = function(O, h) {
                var j = G,
                    X = R;
                this.getEdgeVertex(O, 0, j), this.getEdgeVertex(O, 1, X), X.vsub(j, h)
            };
            var z = new a,
                n = new a;
            P.computeNormal = function(O, h, j, X) {
                h.vsub(O, n), j.vsub(h, z), z.cross(n, X), X.isZero() || X.normalize()
            };
            var M = new a,
                C = new a,
                Z = new a;
            P.prototype.getVertex = function(O, h) {
                var j = this.scale;
                return this._getUnscaledVertex(O, h), h.x *= j.x, h.y *= j.y, h.z *= j.z, h
            }, P.prototype._getUnscaledVertex = function(O, h) {
                var j = 3 * O,
                    X = this.vertices;
                return h.set(X[j], X[j + 1], X[j + 2])
            }, P.prototype.getWorldVertex = function(O, h, j, X) {
                return this.getVertex(O, X), $.pointToWorldFrame(h, j, X, X), X
            }, P.prototype.getTriangleVertices = function(O, h, j, X) {
                var $ = 3 * O;
                this.getVertex(this.indices[$], h), this.getVertex(this.indices[$ + 1], j), this.getVertex(this.indices[$ + 2], X)
            }, P.prototype.getNormal = function(O, h) {
                var j = 3 * O;
                return h.set(this.normals[j], this.normals[j + 1], this.normals[j + 2])
            };
            var m = new K;
            P.prototype.calculateLocalInertia = function(O, h) {
                this.computeLocalAABB(m);
                var j = m.upperBound.x - m.lowerBound.x,
                    X = m.upperBound.y - m.lowerBound.y,
                    $ = m.upperBound.z - m.lowerBound.z;
                return h.set(1 / 12 * O * (2 * X * 2 * X + 2 * $ * 2 * $), 1 / 12 * O * (2 * j * 2 * j + 2 * $ * 2 * $), 1 / 12 * O * (2 * X * 2 * X + 2 * j * 2 * j))
            };
            var U = new a;
            P.prototype.computeLocalAABB = function(O) {
                var h = O.lowerBound,
                    j = O.upperBound,
                    X = this.vertices.length,
                    $ = (this.vertices, U);
                this.getVertex(0, $), h.copy($), j.copy($);
                for (var e = 0; e !== X; e++) this.getVertex(e, $), $.x < h.x ? h.x = $.x : $.x > j.x && (j.x = $.x), $.y < h.y ? h.y = $.y : $.y > j.y && (j.y = $.y), $.z < h.z ? h.z = $.z : $.z > j.z && (j.z = $.z)
            }, P.prototype.updateAABB = function() {
                this.computeLocalAABB(this.aabb)
            }, P.prototype.updateBoundingSphereRadius = function() {
                for (var O = 0, h = this.vertices, j = new a, X = 0, $ = h.length / 3; X !== $; X++) {
                    this.getVertex(X, j);
                    var e = j.norm2();
                    O < e && (O = e)
                }
                this.boundingSphereRadius = Math.sqrt(O)
            };
            new a;
            var w = new $,
                F = new K;
            P.prototype.calculateWorldAABB = function(O, h, j, X) {
                var $ = w,
                    e = F;
                $.position = O, $.quaternion = h, this.aabb.toWorldFrame($, e), j.copy(e.lowerBound), X.copy(e.upperBound)
            }, P.prototype.volume = function() {
                return 4 * Math.PI * this.boundingSphereRadius / 3
            }, P.createTorus = function(O, h, j, X, $) {
                O = O || 1, h = h || .5, j = j || 8, X = X || 6, $ = $ || 2 * Math.PI;
                for (var e = [], G = [], o = 0; o <= j; o++)
                    for (var i = 0; i <= X; i++) {
                        var a = i / X * $,
                            K = o / j * Math.PI * 2,
                            R = (O + h * Math.cos(K)) * Math.cos(a),
                            z = (O + h * Math.cos(K)) * Math.sin(a),
                            n = h * Math.sin(K);
                        e.push(R, z, n)
                    }
                for (o = 1; o <= j; o++)
                    for (i = 1; i <= X; i++) {
                        var M = (X + 1) * o + i - 1,
                            C = (X + 1) * (o - 1) + i - 1,
                            Z = (X + 1) * (o - 1) + i,
                            m = (X + 1) * o + i;
                        G.push(M, C, m), G.push(C, Z, m)
                    }
                return new P(e, G)
            }
        }, {
            "../collision/AABB": 3,
            "../math/Quaternion": 28,
            "../math/Transform": 29,
            "../math/Vec3": 30,
            "../utils/Octree": 50,
            "./Shape": 43
        }],
        46: [function(O, h, j) {
            h.exports = $;
            O("../math/Vec3"), O("../math/Quaternion");
            var X = O("./Solver");

            function $() {
                X.call(this), this.iterations = 10, this.tolerance = 1e-7
            }
            $.prototype = new X;
            var g = [],
                q = [],
                J = [];
            $.prototype.solve = function(O, h) {
                var j, X, $, e, G, o = 0,
                    i = this.iterations,
                    a = this.tolerance * this.tolerance,
                    K = this.equations,
                    R = K.length,
                    z = h.bodies,
                    n = z.length,
                    M = O;
                if (0 !== R)
                    for (var C = 0; C !== n; C++) z[C].updateSolveMassProperties();
                var Z = q,
                    m = J,
                    P = g;
                Z.length = R, m.length = R, P.length = R;
                for (C = 0; C !== R; C++) {
                    var U = K[C];
                    P[C] = 0, m[C] = U.computeB(M), Z[C] = 1 / U.computeC()
                }
                if (0 !== R) {
                    for (C = 0; C !== n; C++) {
                        var w = (r = z[C]).vlambda,
                            F = r.wlambda;
                        w.set(0, 0, 0), F && F.set(0, 0, 0)
                    }
                    for (o = 0; o !== i; o++) {
                        for (var B = e = 0; B !== R; B++) {
                            U = K[B];
                            j = m[B], X = Z[B], (G = P[B]) + ($ = X * (j - U.computeGWlambda() - U.eps * G)) < U.minForce ? $ = U.minForce - G : G + $ > U.maxForce && ($ = U.maxForce - G), P[B] += $, e += 0 < $ ? $ : -$, U.addToWlambda($)
                        }
                        if (e * e < a) break
                    }
                    for (C = 0; C !== n; C++) {
                        var r, l = (r = z[C]).velocity,
                            c = r.angularVelocity;
                        l.vadd(r.vlambda, l), c && c.vadd(r.wlambda, c)
                    }
                }
                return o
            }
        }, {
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "./Solver": 47
        }],
        47: [function(O, h, j) {
            function X() {
                this.equations = []
            }(h.exports = X).prototype.solve = function(O, h) {
                return 0
            }, X.prototype.addEquation = function(O) {
                O.enabled && this.equations.push(O)
            }, X.prototype.removeEquation = function(O) {
                var h = this.equations,
                    j = h.indexOf(O); - 1 !== j && h.splice(j, 1)
            }, X.prototype.removeAllEquations = function() {
                this.equations.length = 0
            }
        }, {}],
        48: [function(O, h, j) {
            h.exports = e;
            O("../math/Vec3"), O("../math/Quaternion");
            var X = O("./Solver"),
                $ = O("../objects/Body");

            function e(O) {
                for (X.call(this), this.iterations = 10, this.tolerance = 1e-7, this.subsolver = O, this.nodes = [], this.nodePool = []; this.nodePool.length < 128;) this.nodePool.push(this.createNode())
            }
            e.prototype = new X;
            var F = [],
                B = [],
                r = {
                    bodies: []
                },
                G = $.STATIC;

            function l(O) {
                for (var h = O.length, j = 0; j !== h; j++) {
                    var X = O[j];
                    if (!(X.visited || X.body.type & G)) return X
                }
                return !1
            }
            var o = [];

            function c(O, h, j, X) {
                for (o.push(O), O.visited = !0, h(O, j, X); o.length;)
                    for (var $, e = o.pop(); $ = l(e.children);) $.visited = !0, h($, j, X), o.push($)
            }

            function g(O, h, j) {
                h.push(O.body);
                for (var X = O.eqs.length, $ = 0; $ !== X; $++) {
                    var e = O.eqs[$]; - 1 === j.indexOf(e) && j.push(e)
                }
            }

            function q(O, h) {
                return h.id - O.id
            }
            e.prototype.createNode = function() {
                return {
                    body: null,
                    children: [],
                    eqs: [],
                    visited: !1
                }
            }, e.prototype.solve = function(O, h) {
                for (var j = F, X = this.nodePool, $ = h.bodies, e = this.equations, G = e.length, o = $.length, i = this.subsolver; X.length < o;) X.push(this.createNode());
                j.length = o;
                for (var a = 0; a < o; a++) j[a] = X[a];
                for (a = 0; a !== o; a++) {
                    var K = j[a];
                    K.body = $[a], K.children.length = 0, K.eqs.length = 0, K.visited = !1
                }
                for (var R = 0; R !== G; R++) {
                    var z = e[R],
                        n = (a = $.indexOf(z.bi), $.indexOf(z.bj)),
                        M = j[a],
                        C = j[n];
                    M.children.push(C), M.eqs.push(z), C.children.push(M), C.eqs.push(z)
                }
                var Z, m = 0,
                    P = B;
                i.tolerance = this.tolerance, i.iterations = this.iterations;
                for (var U = r; Z = l(j);) {
                    P.length = 0, U.bodies.length = 0, c(Z, g, U.bodies, P);
                    var w = P.length;
                    P = P.sort(q);
                    for (a = 0; a !== w; a++) i.addEquation(P[a]);
                    i.solve(O, U);
                    i.removeAllEquations(), m++
                }
                return m
            }
        }, {
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "../objects/Body": 31,
            "./Solver": 47
        }],
        49: [function(O, h, j) {
            var X = function() {};
            (h.exports = X).prototype = {
                constructor: X,
                addEventListener: function(O, h) {
                    void 0 === this._listeners && (this._listeners = {});
                    var j = this._listeners;
                    return void 0 === j[O] && (j[O] = []), -1 === j[O].indexOf(h) && j[O].push(h), this
                },
                hasEventListener: function(O, h) {
                    if (void 0 === this._listeners) return !1;
                    var j = this._listeners;
                    return void 0 !== j[O] && -1 !== j[O].indexOf(h)
                },
                removeEventListener: function(O, h) {
                    if (void 0 === this._listeners) return this;
                    var j = this._listeners;
                    if (void 0 === j[O]) return this;
                    var X = j[O].indexOf(h);
                    return -1 !== X && j[O].splice(X, 1), this
                },
                dispatchEvent: function(O) {
                    if (void 0 === this._listeners) return this;
                    var h = this._listeners[O.type];
                    if (void 0 !== h) {
                        O.target = this;
                        for (var j = 0, X = h.length; j < X; j++) h[j].call(this, O)
                    }
                    return this
                }
            }
        }, {}],
        50: [function(O, h, j) {
            var i = O("../collision/AABB"),
                a = O("../math/Vec3");

            function K(O) {
                O = O || {}, this.root = O.root || null, this.aabb = O.aabb ? O.aabb.clone() : new i, this.data = [], this.children = []
            }

            function X(O, h) {
                (h = h || {}).root = null, h.aabb = O, K.call(this, h), this.maxDepth = void 0 !== h.maxDepth ? h.maxDepth : 8
            }(h.exports = X).prototype = new K, K.prototype.reset = function(O, h) {
                this.children.length = this.data.length = 0
            }, K.prototype.insert = function(O, h, j) {
                var X = this.data;
                if (j = j || 0, !this.aabb.contains(O)) return !1;
                var $ = this.children;
                if (j < (this.maxDepth || this.root.maxDepth)) {
                    var e = !1;
                    $.length || (this.subdivide(), e = !0);
                    for (var G = 0; 8 !== G; G++)
                        if ($[G].insert(O, h, j + 1)) return !0;
                    e && ($.length = 0)
                }
                return X.push(h), !0
            };
            var R = new a;
            K.prototype.subdivide = function() {
                var O = this.aabb,
                    h = O.lowerBound,
                    j = O.upperBound,
                    X = this.children;
                X.push(new K({
                    aabb: new i({
                        lowerBound: new a(0, 0, 0)
                    })
                }), new K({
                    aabb: new i({
                        lowerBound: new a(1, 0, 0)
                    })
                }), new K({
                    aabb: new i({
                        lowerBound: new a(1, 1, 0)
                    })
                }), new K({
                    aabb: new i({
                        lowerBound: new a(1, 1, 1)
                    })
                }), new K({
                    aabb: new i({
                        lowerBound: new a(0, 1, 1)
                    })
                }), new K({
                    aabb: new i({
                        lowerBound: new a(0, 0, 1)
                    })
                }), new K({
                    aabb: new i({
                        lowerBound: new a(1, 0, 1)
                    })
                }), new K({
                    aabb: new i({
                        lowerBound: new a(0, 1, 0)
                    })
                })), j.vsub(h, R), R.scale(.5, R);
                for (var $ = this.root || this, e = 0; 8 !== e; e++) {
                    var G = X[e];
                    G.root = $;
                    var o = G.aabb.lowerBound;
                    o.x *= R.x, o.y *= R.y, o.z *= R.z, o.vadd(h, o), o.vadd(R, G.aabb.upperBound)
                }
            }, K.prototype.aabbQuery = function(O, h) {
                this.data, this.children;
                for (var j = [this]; j.length;) {
                    var X = j.pop();
                    X.aabb.overlaps(O) && Array.prototype.push.apply(h, X.data), Array.prototype.push.apply(j, X.children)
                }
                return h
            };
            var $ = new i;
            K.prototype.rayQuery = function(O, h, j) {
                return O.getAABB($), $.toLocalFrame(h, $), this.aabbQuery($, j), j
            }, K.prototype.removeEmptyNodes = function() {
                for (var O = [this]; O.length;) {
                    for (var h = O.pop(), j = h.children.length - 1; 0 <= j; j--) h.children[j].data.length || h.children.splice(j, 1);
                    Array.prototype.push.apply(O, h.children)
                }
            }
        }, {
            "../collision/AABB": 3,
            "../math/Vec3": 30
        }],
        51: [function(O, h, j) {
            function X() {
                this.objects = [], this.type = Object
            }(h.exports = X).prototype.release = function() {
                for (var O = arguments.length, h = 0; h !== O; h++) this.objects.push(arguments[h])
            }, X.prototype.get = function() {
                return 0 === this.objects.length ? this.constructObject() : this.objects.pop()
            }, X.prototype.constructObject = function() {
                throw new Error("constructObject() not implemented in this Pool subclass yet!")
            }
        }, {}],
        52: [function(O, h, j) {
            function X() {
                this.data = {
                    keys: []
                }
            }(h.exports = X).prototype.get = function(O, h) {
                if (h < O) {
                    var j = h;
                    h = O, O = j
                }
                return this.data[O + "-" + h]
            }, X.prototype.set = function(O, h, j) {
                if (h < O) {
                    var X = h;
                    h = O, O = X
                }
                var $ = O + "-" + h;
                this.get(O, h) || this.data.keys.push($), this.data[$] = j
            }, X.prototype.reset = function() {
                for (var O = this.data, h = O.keys; 0 < h.length;) {
                    delete O[h.pop()]
                }
            }
        }, {}],
        53: [function(O, h, j) {
            function X() {}(h.exports = X).defaults = function(O, h) {
                for (var j in O = O || {}, h) j in O || (O[j] = h[j]);
                return O
            }
        }, {}],
        54: [function(O, h, j) {
            h.exports = e;
            var X = O("../math/Vec3"),
                $ = O("./Pool");

            function e() {
                $.call(this), this.type = X
            }(e.prototype = new $).constructObject = function() {
                return new X
            }
        }, {
            "../math/Vec3": 30,
            "./Pool": 51
        }],
        55: [function(O, h, j) {
            h.exports = o;
            var X = O("../collision/AABB"),
                $ = O("../shapes/Shape"),
                u = O("../collision/Ray"),
                C = O("../math/Vec3"),
                b = O("../math/Transform"),
                e = (O("../shapes/ConvexPolyhedron"), O("../math/Quaternion")),
                G = (O("../solver/Solver"), O("../utils/Vec3Pool")),
                K = O("../equations/ContactEquation"),
                Z = O("../equations/FrictionEquation");

            function o(O) {
                this.contactPointPool = [], this.frictionEquationPool = [], this.result = [], this.frictionResult = [], this.v3pool = new G, this.world = O, this.currentContactMaterial = null, this.enableFrictionReduction = !1
            }
            o.prototype.createContactEquation = function(O, h, j, X, $, e) {
                var G;
                this.contactPointPool.length ? ((G = this.contactPointPool.pop()).bi = O, G.bj = h) : G = new K(O, h), G.enabled = O.collisionResponse && h.collisionResponse && j.collisionResponse && X.collisionResponse;
                var o = this.currentContactMaterial;
                G.restitution = o.restitution, G.setSpookParams(o.contactEquationStiffness, o.contactEquationRelaxation, this.world.dt);
                var i = j.material || O.material,
                    a = X.material || h.material;
                return i && a && 0 <= i.restitution && 0 <= a.restitution && (G.restitution = i.restitution * a.restitution), G.si = $ || j, G.sj = e || X, G
            }, o.prototype.createFrictionEquationsFromContact = function(O, h) {
                var j = O.bi,
                    X = O.bj,
                    $ = O.si,
                    e = O.sj,
                    G = this.world,
                    o = this.currentContactMaterial,
                    i = o.friction,
                    a = $.material || j.material,
                    K = e.material || X.material;
                if (a && K && 0 <= a.friction && 0 <= K.friction && (i = a.friction * K.friction), 0 < i) {
                    var R = i * G.gravity.length(),
                        z = j.invMass + X.invMass;
                    0 < z && (z = 1 / z);
                    var n = this.frictionEquationPool,
                        M = n.length ? n.pop() : new Z(j, X, R * z),
                        C = n.length ? n.pop() : new Z(j, X, R * z);
                    return M.bi = C.bi = j, M.bj = C.bj = X, M.minForce = C.minForce = -R * z, M.maxForce = C.maxForce = R * z, M.ri.copy(O.ri), M.rj.copy(O.rj), C.ri.copy(O.ri), C.rj.copy(O.rj), O.ni.tangents(M.t, C.t), M.setSpookParams(o.frictionEquationStiffness, o.frictionEquationRelaxation, G.dt), C.setSpookParams(o.frictionEquationStiffness, o.frictionEquationRelaxation, G.dt), M.enabled = C.enabled = O.enabled, h.push(M, C), !0
                }
                return !1
            };
            var i = new C,
                a = new C,
                R = new C;
            o.prototype.createFrictionFromAverage = function(O) {
                var h = this.result[this.result.length - 1];
                if (this.createFrictionEquationsFromContact(h, this.frictionResult) && 1 !== O) {
                    var j = this.frictionResult[this.frictionResult.length - 2],
                        X = this.frictionResult[this.frictionResult.length - 1];
                    i.setZero(), a.setZero(), R.setZero();
                    for (var $ = h.bi, e = (h.bj, 0); e !== O; e++)(h = this.result[this.result.length - 1 - e]).bodyA !== $ ? (i.vadd(h.ni, i), a.vadd(h.ri, a), R.vadd(h.rj, R)) : (i.vsub(h.ni, i), a.vadd(h.rj, a), R.vadd(h.ri, R));
                    var G = 1 / O;
                    a.scale(G, j.ri), R.scale(G, j.rj), X.ri.copy(j.ri), X.rj.copy(j.rj), i.normalize(), i.tangents(j.t, X.t)
                }
            };
            var B = new C,
                r = new C,
                l = new e,
                c = new e;
            o.prototype.getContacts = function(O, h, j, X, $, e, G) {
                this.contactPointPool = $, this.frictionEquationPool = G, this.result = X, this.frictionResult = e;
                for (var o = l, i = c, a = B, K = r, R = 0, z = O.length; R !== z; R++) {
                    var n = O[R],
                        M = h[R],
                        C = null;
                    n.material && M.material && (C = j.getContactMaterial(n.material, M.material) || null);
                    for (var Z = 0; Z < n.shapes.length; Z++) {
                        n.quaternion.mult(n.shapeOrientations[Z], o), n.quaternion.vmult(n.shapeOffsets[Z], a), a.vadd(n.position, a);
                        for (var m = n.shapes[Z], P = 0; P < M.shapes.length; P++) {
                            M.quaternion.mult(M.shapeOrientations[P], i), M.quaternion.vmult(M.shapeOffsets[P], K), K.vadd(M.position, K);
                            var U = M.shapes[P];
                            if (!(a.distanceTo(K) > m.boundingSphereRadius + U.boundingSphereRadius)) {
                                var w = null;
                                m.material && U.material && (w = j.getContactMaterial(m.material, U.material) || null), this.currentContactMaterial = w || C || j.defaultContactMaterial;
                                var F = this[m.type | U.type];
                                F && (m.type < U.type ? F.call(this, m, U, a, K, o, i, n, M, m, U) : F.call(this, U, m, K, a, i, o, M, n, m, U))
                            }
                        }
                    }
                }
            };
            o.prototype[$.types.BOX | $.types.BOX] = o.prototype.boxBox = function(O, h, j, X, $, e, G, o) {
                O.convexPolyhedronRepresentation.material = O.material, h.convexPolyhedronRepresentation.material = h.material, O.convexPolyhedronRepresentation.collisionResponse = O.collisionResponse, h.convexPolyhedronRepresentation.collisionResponse = h.collisionResponse, this.convexConvex(O.convexPolyhedronRepresentation, h.convexPolyhedronRepresentation, j, X, $, e, G, o, O, h)
            }, o.prototype[$.types.BOX | $.types.CONVEXPOLYHEDRON] = o.prototype.boxConvex = function(O, h, j, X, $, e, G, o) {
                O.convexPolyhedronRepresentation.material = O.material, O.convexPolyhedronRepresentation.collisionResponse = O.collisionResponse, this.convexConvex(O.convexPolyhedronRepresentation, h, j, X, $, e, G, o, O, h)
            }, o.prototype[$.types.BOX | $.types.PARTICLE] = o.prototype.boxParticle = function(O, h, j, X, $, e, G, o) {
                O.convexPolyhedronRepresentation.material = O.material, O.convexPolyhedronRepresentation.collisionResponse = O.collisionResponse, this.convexParticle(O.convexPolyhedronRepresentation, h, j, X, $, e, G, o, O, h)
            }, o.prototype[$.types.SPHERE] = o.prototype.sphereSphere = function(O, h, j, X, $, e, G, o) {
                var i = this.createContactEquation(G, o, O, h);
                X.vsub(j, i.ni), i.ni.normalize(), i.ri.copy(i.ni), i.rj.copy(i.ni), i.ri.mult(O.radius, i.ri), i.rj.mult(-h.radius, i.rj), i.ri.vadd(j, i.ri), i.ri.vsub(G.position, i.ri), i.rj.vadd(X, i.rj), i.rj.vsub(o.position, i.rj), this.result.push(i), this.createFrictionEquationsFromContact(i, this.frictionResult)
            };
            var m = new C,
                P = new C,
                U = new C;
            o.prototype[$.types.PLANE | $.types.TRIMESH] = o.prototype.planeTrimesh = function(O, h, j, X, $, e, G, o) {
                var i = new C,
                    a = m;
                a.set(0, 0, 1), $.vmult(a, a);
                for (var K = 0; K < h.vertices.length / 3; K++) {
                    h.getVertex(K, i);
                    var R = new C;
                    R.copy(i), b.pointToWorldFrame(X, e, R, i);
                    var z = P;
                    if (i.vsub(j, z), a.dot(z) <= 0) {
                        var n = this.createContactEquation(G, o, O, h);
                        n.ni.copy(a);
                        var M = U;
                        a.scale(z.dot(a), M), i.vsub(M, M), n.ri.copy(M), n.ri.vsub(G.position, n.ri), n.rj.copy(i), n.rj.vsub(o.position, n.rj), this.result.push(n), this.createFrictionEquationsFromContact(n, this.frictionResult)
                    }
                }
            };
            var D = new C,
                x = new C,
                I = (new C, new C),
                p = new C,
                k = new C,
                d = new C,
                W = new C,
                f = new C,
                T = new C,
                S = new C,
                L = new C,
                y = new C,
                Y = new C,
                Q = new X,
                H = [];
            o.prototype[$.types.SPHERE | $.types.TRIMESH] = o.prototype.sphereTrimesh = function(O, h, j, X, $, e, G, o) {
                var i = k,
                    a = d,
                    K = W,
                    R = f,
                    z = T,
                    n = S,
                    M = Q,
                    C = p,
                    Z = x,
                    m = H;
                b.pointToLocalFrame(X, e, j, z);
                var P = O.radius;
                M.lowerBound.set(z.x - P, z.y - P, z.z - P), M.upperBound.set(z.x + P, z.y + P, z.z + P), h.getTrianglesInAABB(M, m);
                for (var U = I, w = O.radius * O.radius, F = 0; F < m.length; F++)
                    for (var B = 0; B < 3; B++) {
                        if (h.getVertex(h.indices[3 * m[F] + B], U), U.vsub(z, Z), Z.norm2() <= w) C.copy(U), b.pointToWorldFrame(X, e, C, U), U.vsub(j, Z), (c = this.createContactEquation(G, o, O, h)).ni.copy(Z), c.ni.normalize(), c.ri.copy(c.ni), c.ri.scale(O.radius, c.ri), c.ri.vadd(j, c.ri), c.ri.vsub(G.position, c.ri), c.rj.copy(U), c.rj.vsub(o.position, c.rj), this.result.push(c), this.createFrictionEquationsFromContact(c, this.frictionResult)
                    }
                for (F = 0; F < m.length; F++)
                    for (B = 0; B < 3; B++) {
                        h.getVertex(h.indices[3 * m[F] + B], i), h.getVertex(h.indices[3 * m[F] + (B + 1) % 3], a), a.vsub(i, K), z.vsub(a, n);
                        var r = n.dot(K);
                        z.vsub(i, n);
                        var l = n.dot(K);
                        if (0 < l && r < 0)
                            if (z.vsub(i, n), R.copy(K), R.normalize(), l = n.dot(R), R.scale(l, n), n.vadd(i, n), (A = n.distanceTo(z)) < O.radius) {
                                var c = this.createContactEquation(G, o, O, h);
                                n.vsub(z, c.ni), c.ni.normalize(), c.ni.scale(O.radius, c.ri), b.pointToWorldFrame(X, e, n, n), n.vsub(o.position, c.rj), b.vectorToWorldFrame(e, c.ni, c.ni), b.vectorToWorldFrame(e, c.ri, c.ri), this.result.push(c), this.createFrictionEquationsFromContact(c, this.frictionResult)
                            }
                    }
                for (var g = L, q = y, J = Y, v = D, s = (F = 0, m.length); F !== s; F++) {
                    h.getTriangleVertices(m[F], g, q, J), h.getNormal(m[F], v), z.vsub(g, n);
                    var A = n.dot(v);
                    if (v.scale(A, n), z.vsub(n, n), A = n.distanceTo(z), u.pointInTriangle(n, g, q, J) && A < O.radius) {
                        c = this.createContactEquation(G, o, O, h);
                        n.vsub(z, c.ni), c.ni.normalize(), c.ni.scale(O.radius, c.ri), b.pointToWorldFrame(X, e, n, n), n.vsub(o.position, c.rj), b.vectorToWorldFrame(e, c.ni, c.ni), b.vectorToWorldFrame(e, c.ri, c.ri), this.result.push(c), this.createFrictionEquationsFromContact(c, this.frictionResult)
                    }
                }
                m.length = 0
            };
            var z = new C,
                n = new C;
            o.prototype[$.types.SPHERE | $.types.PLANE] = o.prototype.spherePlane = function(O, h, j, X, $, e, G, o) {
                var i = this.createContactEquation(G, o, O, h);
                if (i.ni.set(0, 0, 1), e.vmult(i.ni, i.ni), i.ni.negate(i.ni), i.ni.normalize(), i.ni.mult(O.radius, i.ri), j.vsub(X, z), i.ni.mult(i.ni.dot(z), n), z.vsub(n, i.rj), -z.dot(i.ni) <= O.radius) {
                    var a = i.ri,
                        K = i.rj;
                    a.vadd(j, a), a.vsub(G.position, a), K.vadd(X, K), K.vsub(o.position, K), this.result.push(i), this.createFrictionEquationsFromContact(i, this.frictionResult)
                }
            };
            var M = new C,
                w = new C,
                F = new C;

            function t(O, h, j) {
                for (var X = null, $ = O.length, e = 0; e !== $; e++) {
                    var G = O[e],
                        o = M;
                    O[(e + 1) % $].vsub(G, o);
                    var i = w;
                    o.cross(h, i);
                    var a = F;
                    j.vsub(G, a);
                    var K = i.dot(a);
                    if (!(null === X || 0 < K && !0 === X || K <= 0 && !1 === X)) return !1;
                    null === X && (X = 0 < K)
                }
                return !0
            }
            var _ = new C,
                E = new C,
                N = new C,
                V = new C,
                OO = [new C, new C, new C, new C, new C, new C],
                hO = new C,
                jO = new C,
                XO = new C,
                $O = new C;
            o.prototype[$.types.SPHERE | $.types.BOX] = o.prototype.sphereBox = function(O, h, j, X, $, e, G, o) {
                var i = this.v3pool,
                    a = OO;
                j.vsub(X, _), h.getSideNormals(a, e);
                for (var K = O.radius, R = !1, z = jO, n = XO, M = $O, C = null, Z = 0, m = 0, P = 0, U = null, w = 0, F = a.length; w !== F && !1 === R; w++) {
                    var B = E;
                    B.copy(a[w]);
                    var r = B.norm();
                    B.normalize();
                    var l = _.dot(B);
                    if (l < r + K && 0 < l) {
                        var c = N,
                            g = V;
                        c.copy(a[(w + 1) % 3]), g.copy(a[(w + 2) % 3]);
                        var q = c.norm(),
                            J = g.norm();
                        c.normalize(), g.normalize();
                        var v = _.dot(c),
                            s = _.dot(g);
                        if (v < q && -q < v && s < J && -J < s) {
                            var A = Math.abs(l - r - K);
                            (null === U || A < U) && (U = A, m = v, P = s, C = r, z.copy(B), n.copy(c), M.copy(g), Z++)
                        }
                    }
                }
                if (Z) {
                    R = !0;
                    var u = this.createContactEquation(G, o, O, h);
                    z.mult(-K, u.ri), u.ni.copy(z), u.ni.negate(u.ni), z.mult(C, z), n.mult(m, n), z.vadd(n, z), M.mult(P, M), z.vadd(M, u.rj), u.ri.vadd(j, u.ri), u.ri.vsub(G.position, u.ri), u.rj.vadd(X, u.rj), u.rj.vsub(o.position, u.rj), this.result.push(u), this.createFrictionEquationsFromContact(u, this.frictionResult)
                }
                for (var b = i.get(), D = hO, x = 0; 2 !== x && !R; x++)
                    for (var I = 0; 2 !== I && !R; I++)
                        for (var p = 0; 2 !== p && !R; p++) {
                            if (b.set(0, 0, 0), x ? b.vadd(a[0], b) : b.vsub(a[0], b), I ? b.vadd(a[1], b) : b.vsub(a[1], b), p ? b.vadd(a[2], b) : b.vsub(a[2], b), X.vadd(b, D), D.vsub(j, D), D.norm2() < K * K) R = !0, (u = this.createContactEquation(G, o, O, h)).ri.copy(D), u.ri.normalize(), u.ni.copy(u.ri), u.ri.mult(K, u.ri), u.rj.copy(b), u.ri.vadd(j, u.ri), u.ri.vsub(G.position, u.ri), u.rj.vadd(X, u.rj), u.rj.vsub(o.position, u.rj), this.result.push(u), this.createFrictionEquationsFromContact(u, this.frictionResult)
                        }
                i.release(b), b = null;
                var k = i.get(),
                    d = i.get(),
                    W = (u = i.get(), i.get()),
                    f = (A = i.get(), a.length);
                for (x = 0; x !== f && !R; x++)
                    for (I = 0; I !== f && !R; I++)
                        if (x % 3 != I % 3) {
                            a[I].cross(a[x], k), k.normalize(), a[x].vadd(a[I], d), u.copy(j), u.vsub(d, u), u.vsub(X, u);
                            var T = u.dot(k);
                            k.mult(T, W);
                            for (p = 0; p === x % 3 || p === I % 3;) p++;
                            A.copy(j), A.vsub(W, A), A.vsub(d, A), A.vsub(X, A);
                            var S = Math.abs(T),
                                L = A.norm();
                            if (S < a[p].norm() && L < K) {
                                R = !0;
                                var y = this.createContactEquation(G, o, O, h);
                                d.vadd(W, y.rj), y.rj.copy(y.rj), A.negate(y.ni), y.ni.normalize(), y.ri.copy(y.rj), y.ri.vadd(X, y.ri), y.ri.vsub(j, y.ri), y.ri.normalize(), y.ri.mult(K, y.ri), y.ri.vadd(j, y.ri), y.ri.vsub(G.position, y.ri), y.rj.vadd(X, y.rj), y.rj.vsub(o.position, y.rj), this.result.push(y), this.createFrictionEquationsFromContact(y, this.frictionResult)
                            }
                        }
                i.release(k, d, u, W, A)
            };
            var eO = new C,
                GO = new C,
                oO = new C,
                iO = new C,
                aO = new C,
                KO = new C,
                RO = new C,
                zO = new C,
                nO = new C,
                MO = new C;
            o.prototype[$.types.SPHERE | $.types.CONVEXPOLYHEDRON] = o.prototype.sphereConvex = function(O, h, j, X, $, e, G, o) {
                var i = this.v3pool;
                j.vsub(X, eO);
                for (var a = h.faceNormals, K = h.faces, R = h.vertices, z = O.radius, n = 0; n !== R.length; n++) {
                    var M = R[n],
                        C = aO;
                    e.vmult(M, C), X.vadd(C, C);
                    var Z = iO;
                    if (C.vsub(j, Z), Z.norm2() < z * z) return m = !0, (A = this.createContactEquation(G, o, O, h)).ri.copy(Z), A.ri.normalize(), A.ni.copy(A.ri), A.ri.mult(z, A.ri), C.vsub(X, A.rj), A.ri.vadd(j, A.ri), A.ri.vsub(G.position, A.ri), A.rj.vadd(X, A.rj), A.rj.vsub(o.position, A.rj), this.result.push(A), void this.createFrictionEquationsFromContact(A, this.frictionResult)
                }
                for (var m = !1, P = (n = 0, K.length); n !== P && !1 === m; n++) {
                    var U = a[n],
                        w = K[n],
                        F = KO;
                    e.vmult(U, F);
                    var B = RO;
                    e.vmult(R[w[0]], B), B.vadd(X, B);
                    var r = zO;
                    F.mult(-z, r), j.vadd(r, r);
                    var l = nO;
                    r.vsub(B, l);
                    var c = l.dot(F),
                        g = MO;
                    if (j.vsub(B, g), c < 0 && 0 < g.dot(F)) {
                        for (var q = [], J = 0, v = w.length; J !== v; J++) {
                            var s = i.get();
                            e.vmult(R[w[J]], s), X.vadd(s, s), q.push(s)
                        }
                        if (t(q, F, j)) {
                            m = !0;
                            var A = this.createContactEquation(G, o, O, h);
                            F.mult(-z, A.ri), F.negate(A.ni);
                            var u = i.get();
                            F.mult(-c, u);
                            var b = i.get();
                            F.mult(-z, b), j.vsub(X, A.rj), A.rj.vadd(b, A.rj), A.rj.vadd(u, A.rj), A.rj.vadd(X, A.rj), A.rj.vsub(o.position, A.rj), A.ri.vadd(j, A.ri), A.ri.vsub(G.position, A.ri), i.release(u), i.release(b), this.result.push(A), this.createFrictionEquationsFromContact(A, this.frictionResult);
                            J = 0;
                            for (var D = q.length; J !== D; J++) i.release(q[J]);
                            return
                        }
                        for (J = 0; J !== w.length; J++) {
                            var x = i.get(),
                                I = i.get();
                            e.vmult(R[w[(J + 1) % w.length]], x), e.vmult(R[w[(J + 2) % w.length]], I), X.vadd(x, x), X.vadd(I, I);
                            var p = GO;
                            I.vsub(x, p);
                            var k = oO;
                            p.unit(k);
                            var d = i.get(),
                                W = i.get();
                            j.vsub(x, W);
                            var f = W.dot(k);
                            k.mult(f, d), d.vadd(x, d);
                            var T = i.get();
                            if (d.vsub(j, T), 0 < f && f * f < p.norm2() && T.norm2() < z * z) {
                                A = this.createContactEquation(G, o, O, h);
                                d.vsub(X, A.rj), d.vsub(j, A.ni), A.ni.normalize(), A.ni.mult(z, A.ri), A.rj.vadd(X, A.rj), A.rj.vsub(o.position, A.rj), A.ri.vadd(j, A.ri), A.ri.vsub(G.position, A.ri), this.result.push(A), this.createFrictionEquationsFromContact(A, this.frictionResult);
                                for (J = 0, D = q.length; J !== D; J++) i.release(q[J]);
                                return i.release(x), i.release(I), i.release(d), i.release(T), void i.release(W)
                            }
                            i.release(x), i.release(I), i.release(d), i.release(T), i.release(W)
                        }
                        for (J = 0, D = q.length; J !== D; J++) i.release(q[J])
                    }
                }
            };
            new C, new C;
            o.prototype[$.types.PLANE | $.types.BOX] = o.prototype.planeBox = function(O, h, j, X, $, e, G, o) {
                h.convexPolyhedronRepresentation.material = h.material, h.convexPolyhedronRepresentation.collisionResponse = h.collisionResponse, this.planeConvex(O, h.convexPolyhedronRepresentation, j, X, $, e, G, o)
            };
            var g = new C,
                q = new C,
                J = new C,
                v = new C;
            o.prototype[$.types.PLANE | $.types.CONVEXPOLYHEDRON] = o.prototype.planeConvex = function(O, h, j, X, $, e, G, o) {
                var i = g,
                    a = q;
                a.set(0, 0, 1), $.vmult(a, a);
                for (var K = 0, R = J, z = 0; z !== h.vertices.length; z++) {
                    if (i.copy(h.vertices[z]), e.vmult(i, i), X.vadd(i, i), i.vsub(j, R), a.dot(R) <= 0) {
                        var n = this.createContactEquation(G, o, O, h),
                            M = v;
                        a.mult(a.dot(R), M), i.vsub(M, M), M.vsub(j, n.ri), n.ni.copy(a), i.vsub(X, n.rj), n.ri.vadd(j, n.ri), n.ri.vsub(G.position, n.ri), n.rj.vadd(X, n.rj), n.rj.vsub(o.position, n.rj), this.result.push(n), K++, this.enableFrictionReduction || this.createFrictionEquationsFromContact(n, this.frictionResult)
                    }
                }
                this.enableFrictionReduction && K && this.createFrictionFromAverage(K)
            };
            var s = new C,
                A = new C;
            o.prototype[$.types.CONVEXPOLYHEDRON] = o.prototype.convexConvex = function(O, h, j, X, $, e, G, o, i, a, K, R) {
                var z = s;
                if (!(j.distanceTo(X) > O.boundingSphereRadius + h.boundingSphereRadius) && O.findSeparatingAxis(h, j, $, X, e, z, K, R)) {
                    var n = [],
                        M = A;
                    O.clipAgainstHull(j, $, h, X, e, z, -100, 100, n);
                    for (var C = 0, Z = 0; Z !== n.length; Z++) {
                        var m = this.createContactEquation(G, o, O, h, i, a),
                            P = m.ri,
                            U = m.rj;
                        z.negate(m.ni), n[Z].normal.negate(M), M.mult(n[Z].depth, M), n[Z].point.vadd(M, P), U.copy(n[Z].point), P.vsub(j, P), U.vsub(X, U), P.vadd(j, P), P.vsub(G.position, P), U.vadd(X, U), U.vsub(o.position, U), this.result.push(m), C++, this.enableFrictionReduction || this.createFrictionEquationsFromContact(m, this.frictionResult)
                    }
                    this.enableFrictionReduction && C && this.createFrictionFromAverage(C)
                }
            };
            var CO = new C,
                ZO = new C,
                mO = new C;
            o.prototype[$.types.PLANE | $.types.PARTICLE] = o.prototype.planeParticle = function(O, h, j, X, $, e, G, o) {
                var i = CO;
                i.set(0, 0, 1), G.quaternion.vmult(i, i);
                var a = ZO;
                if (X.vsub(G.position, a), i.dot(a) <= 0) {
                    var K = this.createContactEquation(o, G, h, O);
                    K.ni.copy(i), K.ni.negate(K.ni), K.ri.set(0, 0, 0);
                    var R = mO;
                    i.mult(i.dot(X), R), X.vsub(R, R), K.rj.copy(R), this.result.push(K), this.createFrictionEquationsFromContact(K, this.frictionResult)
                }
            };
            var PO = new C;
            o.prototype[$.types.PARTICLE | $.types.SPHERE] = o.prototype.sphereParticle = function(O, h, j, X, $, e, G, o) {
                var i = PO;
                if (i.set(0, 0, 1), X.vsub(j, i), i.norm2() <= O.radius * O.radius) {
                    var a = this.createContactEquation(o, G, h, O);
                    i.normalize(), a.rj.copy(i), a.rj.mult(O.radius, a.rj), a.ni.copy(i), a.ni.negate(a.ni), a.ri.set(0, 0, 0), this.result.push(a), this.createFrictionEquationsFromContact(a, this.frictionResult)
                }
            };
            var UO = new e,
                wO = new C,
                FO = (new C, new C),
                BO = new C,
                rO = new C;
            o.prototype[$.types.PARTICLE | $.types.CONVEXPOLYHEDRON] = o.prototype.convexParticle = function(O, h, j, X, $, e, G, o) {
                var i = -1,
                    a = FO,
                    K = rO,
                    R = null,
                    z = wO;
                if (z.copy(X), z.vsub(j, z), $.conjugate(UO), UO.vmult(z, z), O.pointIsInside(z)) {
                    O.worldVerticesNeedsUpdate && O.computeWorldVertices(j, $), O.worldFaceNormalsNeedsUpdate && O.computeWorldFaceNormals($);
                    for (var n = 0, M = O.faces.length; n !== M; n++) {
                        var C = [O.worldVertices[O.faces[n][0]]],
                            Z = O.worldFaceNormals[n];
                        X.vsub(C[0], BO);
                        var m = -Z.dot(BO);
                        (null === R || Math.abs(m) < Math.abs(R)) && (R = m, i = n, a.copy(Z), 0)
                    }
                    if (-1 !== i) {
                        var P = this.createContactEquation(o, G, h, O);
                        a.mult(R, K), K.vadd(X, K), K.vsub(j, K), P.rj.copy(K), a.negate(P.ni), P.ri.set(0, 0, 0);
                        var U = P.ri,
                            w = P.rj;
                        U.vadd(X, U), U.vsub(o.position, U), w.vadd(j, w), w.vsub(G.position, w), this.result.push(P), this.createFrictionEquationsFromContact(P, this.frictionResult)
                    } else console.warn("Point found inside convex, but did not find penetrating face!")
                }
            }, o.prototype[$.types.BOX | $.types.HEIGHTFIELD] = o.prototype.boxHeightfield = function(O, h, j, X, $, e, G, o) {
                O.convexPolyhedronRepresentation.material = O.material, O.convexPolyhedronRepresentation.collisionResponse = O.collisionResponse, this.convexHeightfield(O.convexPolyhedronRepresentation, h, j, X, $, e, G, o)
            };
            var lO = new C,
                cO = new C,
                gO = [0];
            o.prototype[$.types.CONVEXPOLYHEDRON | $.types.HEIGHTFIELD] = o.prototype.convexHeightfield = function(O, h, j, X, $, e, G, o) {
                var i = h.data,
                    a = h.elementSize,
                    K = O.boundingSphereRadius,
                    R = cO,
                    z = gO,
                    n = lO;
                b.pointToLocalFrame(X, e, j, n);
                var M = Math.floor((n.x - K) / a) - 1,
                    C = Math.ceil((n.x + K) / a) + 1,
                    Z = Math.floor((n.y - K) / a) - 1,
                    m = Math.ceil((n.y + K) / a) + 1;
                if (!(C < 0 || m < 0 || M > i.length || Z > i[0].length)) {
                    M < 0 && (M = 0), C < 0 && (C = 0), Z < 0 && (Z = 0), m < 0 && (m = 0), M >= i.length && (M = i.length - 1), C >= i.length && (C = i.length - 1), m >= i[0].length && (m = i[0].length - 1), Z >= i[0].length && (Z = i[0].length - 1);
                    var P = [];
                    h.getRectMinMax(M, Z, C, m, P);
                    var U = P[0],
                        w = P[1];
                    if (!(n.z - K > w || n.z + K < U))
                        for (var F = M; F < C; F++)
                            for (var B = Z; B < m; B++) h.getConvexTrianglePillar(F, B, !1), b.pointToWorldFrame(X, e, h.pillarOffset, R), j.distanceTo(R) < h.pillarConvex.boundingSphereRadius + O.boundingSphereRadius && this.convexConvex(O, h.pillarConvex, j, R, $, e, G, o, null, null, z, null), h.getConvexTrianglePillar(F, B, !0), b.pointToWorldFrame(X, e, h.pillarOffset, R), j.distanceTo(R) < h.pillarConvex.boundingSphereRadius + O.boundingSphereRadius && this.convexConvex(O, h.pillarConvex, j, R, $, e, G, o, null, null, z, null)
                }
            };
            var qO = new C,
                JO = new C;
            o.prototype[$.types.SPHERE | $.types.HEIGHTFIELD] = o.prototype.sphereHeightfield = function(O, h, j, X, $, e, G, o) {
                var i = h.data,
                    a = O.radius,
                    K = h.elementSize,
                    R = JO,
                    z = qO;
                b.pointToLocalFrame(X, e, j, z);
                var n = Math.floor((z.x - a) / K) - 1,
                    M = Math.ceil((z.x + a) / K) + 1,
                    C = Math.floor((z.y - a) / K) - 1,
                    Z = Math.ceil((z.y + a) / K) + 1;
                if (!(M < 0 || Z < 0 || n > i.length || Z > i[0].length)) {
                    n < 0 && (n = 0), M < 0 && (M = 0), C < 0 && (C = 0), Z < 0 && (Z = 0), n >= i.length && (n = i.length - 1), M >= i.length && (M = i.length - 1), Z >= i[0].length && (Z = i[0].length - 1), C >= i[0].length && (C = i[0].length - 1);
                    var m = [];
                    h.getRectMinMax(n, C, M, Z, m);
                    var P = m[0],
                        U = m[1];
                    if (!(z.z - a > U || z.z + a < P))
                        for (var w = this.result, F = n; F < M; F++)
                            for (var B = C; B < Z; B++) {
                                var r = w.length;
                                if (h.getConvexTrianglePillar(F, B, !1), b.pointToWorldFrame(X, e, h.pillarOffset, R), j.distanceTo(R) < h.pillarConvex.boundingSphereRadius + O.boundingSphereRadius && this.sphereConvex(O, h.pillarConvex, j, R, $, e, G, o), h.getConvexTrianglePillar(F, B, !0), b.pointToWorldFrame(X, e, h.pillarOffset, R), j.distanceTo(R) < h.pillarConvex.boundingSphereRadius + O.boundingSphereRadius && this.sphereConvex(O, h.pillarConvex, j, R, $, e, G, o), 2 < w.length - r) return
                            }
                }
            }
        }, {
            "../collision/AABB": 3,
            "../collision/Ray": 9,
            "../equations/ContactEquation": 19,
            "../equations/FrictionEquation": 21,
            "../math/Quaternion": 28,
            "../math/Transform": 29,
            "../math/Vec3": 30,
            "../shapes/ConvexPolyhedron": 38,
            "../shapes/Shape": 43,
            "../solver/Solver": 47,
            "../utils/Vec3Pool": 54
        }],
        56: [function(O, h, j) {
            h.exports = Z;
            var XO = O("../shapes/Shape"),
                X = O("../math/Vec3"),
                $ = O("../math/Quaternion"),
                e = O("../solver/GSSolver"),
                G = (O("../utils/Vec3Pool"), O("../equations/ContactEquation"), O("../equations/FrictionEquation"), O("./Narrowphase")),
                o = O("../utils/EventTarget"),
                i = O("../collision/ArrayCollisionMatrix"),
                a = O("../material/Material"),
                K = O("../material/ContactMaterial"),
                $O = O("../objects/Body"),
                R = O("../utils/TupleDictionary"),
                z = O("../collision/RaycastResult"),
                n = O("../collision/AABB"),
                M = O("../collision/Ray"),
                C = O("../collision/NaiveBroadphase");

            function Z() {
                o.apply(this), this.dt = -1, this.allowSleep = !1, this.contacts = [], this.frictionEquations = [], this.quatNormalizeSkip = 0, this.quatNormalizeFast = !1, this.time = 0, this.stepnumber = 0, this.default_dt = 1 / 60, this.nextId = 0, this.gravity = new X, this.broadphase = new C, this.bodies = [], this.solver = new e, this.constraints = [], this.narrowphase = new G(this), this.collisionMatrix = new i, this.collisionMatrixPrevious = new i, this.materials = [], this.contactmaterials = [], this.contactMaterialTable = new R, this.defaultMaterial = new a("default"), this.defaultContactMaterial = new K(this.defaultMaterial, this.defaultMaterial, {
                    friction: .3,
                    restitution: 0
                }), this.doProfiling = !1, this.profile = {
                    solve: 0,
                    makeContactConstraints: 0,
                    broadphase: 0,
                    integrate: 0,
                    narrowphase: 0
                }, this.subsystems = [], this.addBodyEvent = {
                    type: "addBody",
                    body: null
                }, this.removeBodyEvent = {
                    type: "removeBody",
                    body: null
                }
            }
            Z.prototype = new o;
            new n;
            var m = new M;
            if (Z.prototype.getContactMaterial = function(O, h) {
                    return this.contactMaterialTable.get(O.id, h.id)
                }, Z.prototype.numObjects = function() {
                    return this.bodies.length
                }, Z.prototype.collisionMatrixTick = function() {
                    var O = this.collisionMatrixPrevious;
                    this.collisionMatrixPrevious = this.collisionMatrix, this.collisionMatrix = O, this.collisionMatrix.reset()
                }, Z.prototype.add = Z.prototype.addBody = function(O) {
                    -1 === this.bodies.indexOf(O) && (O.index = this.bodies.length, this.bodies.push(O), O.world = this, O.initPosition.copy(O.position), O.initVelocity.copy(O.velocity), O.timeLastSleepy = this.time, O instanceof $O && (O.initAngularVelocity.copy(O.angularVelocity), O.initQuaternion.copy(O.quaternion)), this.collisionMatrix.setNumObjects(this.bodies.length), this.addBodyEvent.body = O, this.dispatchEvent(this.addBodyEvent))
                }, Z.prototype.addConstraint = function(O) {
                    this.constraints.push(O)
                }, Z.prototype.removeConstraint = function(O) {
                    var h = this.constraints.indexOf(O); - 1 !== h && this.constraints.splice(h, 1)
                }, Z.prototype.rayTest = function(O, h, j) {
                    j instanceof z ? this.raycastClosest(O, h, {
                        skipBackfaces: !0
                    }, j) : this.raycastAll(O, h, {
                        skipBackfaces: !0
                    }, j)
                }, Z.prototype.raycastAll = function(O, h, j, X) {
                    return j.mode = M.ALL, j.from = O, j.to = h, j.callback = X, m.intersectWorld(this, j)
                }, Z.prototype.raycastAny = function(O, h, j, X) {
                    return j.mode = M.ANY, j.from = O, j.to = h, j.result = X, m.intersectWorld(this, j)
                }, Z.prototype.raycastClosest = function(O, h, j, X) {
                    return j.mode = M.CLOSEST, j.from = O, j.to = h, j.result = X, m.intersectWorld(this, j)
                }, Z.prototype.removeBody = Z.prototype.remove = function(O) {
                    O.world = null;
                    var h = this.bodies.length - 1,
                        j = this.bodies,
                        X = j.indexOf(O);
                    if (-1 !== X) {
                        j.splice(X, 1);
                        for (var $ = 0; $ !== j.length; $++) j[$].index = $;
                        this.collisionMatrix.setNumObjects(h), this.removeBodyEvent.body = O, this.dispatchEvent(this.removeBodyEvent)
                    }
                }, Z.prototype.addMaterial = function(O) {
                    this.materials.push(O)
                }, Z.prototype.addContactMaterial = function(O) {
                    this.contactmaterials.push(O), this.contactMaterialTable.set(O.materials[0].id, O.materials[1].id, O)
                }, "undefined" == typeof performance && (performance = {}), !performance.now) {
                var P = Date.now();
                performance.timing && performance.timing.navigationStart && (P = performance.timing.navigationStart), performance.now = function() {
                    return Date.now() - P
                }
            }
            var U = new X;
            Z.prototype.step = function(O, h, j) {
                if (j = j || 10, 0 === (h = h || 0)) this.internalStep(O), this.time += O;
                else {
                    var X = Math.floor((this.time + h) / O) - Math.floor(this.time / O);
                    X = Math.min(X, j);
                    for (var $ = performance.now(), e = 0; e !== X && (this.internalStep(O), !(performance.now() - $ > 1e3 * O)); e++);
                    this.time += h;
                    for (var G = this.time % O / O, o = U, i = this.bodies, a = 0; a !== i.length; a++) {
                        var K = i[a];
                        K.type !== $O.STATIC && K.sleepState !== $O.SLEEPING ? (K.position.vsub(K.previousPosition, o), o.scale(G, o), K.position.vadd(o, K.interpolatedPosition)) : (K.interpolatedPosition.copy(K.position), K.interpolatedQuaternion.copy(K.quaternion))
                    }
                }
            };
            var eO = {
                    type: "postStep"
                },
                GO = {
                    type: "preStep"
                },
                oO = {
                    type: "collide",
                    body: null,
                    contact: null
                },
                iO = [],
                aO = [],
                KO = [],
                RO = [],
                zO = (new X, new X, new X, new X, new X, new X, new X, new X, new X, new $, new $),
                nO = new $,
                MO = new X;
            Z.prototype.internalStep = function(O) {
                this.dt = O;
                var h, j = this.contacts,
                    X = KO,
                    $ = RO,
                    e = this.numObjects(),
                    G = this.bodies,
                    o = this.solver,
                    i = this.gravity,
                    a = this.doProfiling,
                    K = this.profile,
                    R = $O.DYNAMIC,
                    z = this.constraints,
                    n = aO,
                    M = (i.norm(), i.x),
                    C = i.y,
                    Z = i.z,
                    m = 0;
                for (a && (h = performance.now()), m = 0; m !== e; m++) {
                    if ((J = G[m]).type & R) {
                        var P = J.force,
                            U = J.mass;
                        P.x += U * M, P.y += U * C, P.z += U * Z
                    }
                }
                m = 0;
                for (var w = this.subsystems.length; m !== w; m++) this.subsystems[m].update();
                a && (h = performance.now()), X.length = 0, $.length = 0, this.broadphase.collisionPairs(this, X, $), a && (K.broadphase = performance.now() - h);
                var F = z.length;
                for (m = 0; m !== F; m++) {
                    if (!(u = z[m]).collideConnected)
                        for (var B = X.length - 1; 0 <= B; B -= 1)(u.bodyA === X[B] && u.bodyB === $[B] || u.bodyB === X[B] && u.bodyA === $[B]) && (X.splice(B, 1), $.splice(B, 1))
                }
                this.collisionMatrixTick(), a && (h = performance.now());
                var r = iO,
                    l = j.length;
                for (m = 0; m !== l; m++) r.push(j[m]);
                j.length = 0;
                var c = this.frictionEquations.length;
                for (m = 0; m !== c; m++) n.push(this.frictionEquations[m]);
                this.frictionEquations.length = 0, this.narrowphase.getContacts(X, $, this, j, r, this.frictionEquations, n), a && (K.narrowphase = performance.now() - h), a && (h = performance.now());
                for (m = 0; m < this.frictionEquations.length; m++) o.addEquation(this.frictionEquations[m]);
                for (var g = j.length, q = 0; q !== g; q++) {
                    var J = (u = j[q]).bi,
                        v = u.bj;
                    u.si, u.sj, (J.material && v.material && this.getContactMaterial(J.material, v.material) || this.defaultContactMaterial).friction;
                    if (J.material && v.material && (0 <= J.material.friction && 0 <= v.material.friction && J.material.friction * v.material.friction, 0 <= J.material.restitution && 0 <= v.material.restitution && (u.restitution = J.material.restitution * v.material.restitution)), o.addEquation(u), J.allowSleep && J.type === $O.DYNAMIC && J.sleepState === $O.SLEEPING && v.sleepState === $O.AWAKE && v.type !== $O.STATIC) {
                        var s = v.velocity.norm2() + v.angularVelocity.norm2();
                        2 * Math.pow(v.sleepSpeedLimit, 2) <= s && (J._wakeUpAfterNarrowphase = !0)
                    }
                    if (v.allowSleep && v.type === $O.DYNAMIC && v.sleepState === $O.SLEEPING && J.sleepState === $O.AWAKE && J.type !== $O.STATIC) {
                        var A = J.velocity.norm2() + J.angularVelocity.norm2();
                        2 * Math.pow(J.sleepSpeedLimit, 2) <= A && (v._wakeUpAfterNarrowphase = !0)
                    }
                    this.collisionMatrix.set(J, v, !0), this.collisionMatrixPrevious.get(J, v) || (oO.body = v, oO.contact = u, J.dispatchEvent(oO), oO.body = J, v.dispatchEvent(oO))
                }
                for (a && (K.makeContactConstraints = performance.now() - h, h = performance.now()), m = 0; m !== e; m++) {
                    (J = G[m])._wakeUpAfterNarrowphase && (J.wakeUp(), J._wakeUpAfterNarrowphase = !1)
                }
                F = z.length;
                for (m = 0; m !== F; m++) {
                    var u;
                    (u = z[m]).update();
                    B = 0;
                    for (var b = u.equations.length; B !== b; B++) {
                        var D = u.equations[B];
                        o.addEquation(D)
                    }
                }
                o.solve(O, this), a && (K.solve = performance.now() - h), o.removeAllEquations();
                var x = Math.pow;
                for (m = 0; m !== e; m++) {
                    if ((J = G[m]).type & R) {
                        var I = x(1 - J.linearDamping, O),
                            p = J.velocity;
                        p.mult(I, p);
                        var k = J.angularVelocity;
                        if (k) {
                            var d = x(1 - J.angularDamping, O);
                            k.mult(d, k)
                        }
                    }
                }
                for (this.dispatchEvent(GO), m = 0; m !== e; m++) {
                    (J = G[m]).preStep && J.preStep.call(J)
                }
                a && (h = performance.now());
                var W = zO,
                    f = nO,
                    T = this.stepnumber,
                    S = $O.DYNAMIC | $O.KINEMATIC,
                    L = T % (this.quatNormalizeSkip + 1) == 0,
                    y = this.quatNormalizeFast,
                    Y = .5 * O;
                XO.types.PLANE, XO.types.CONVEXPOLYHEDRON;
                for (m = 0; m !== e; m++) {
                    var Q = G[m],
                        H = Q.force,
                        t = Q.torque;
                    if (Q.type & S && Q.sleepState !== $O.SLEEPING) {
                        var _ = Q.velocity,
                            E = Q.angularVelocity,
                            N = Q.position,
                            V = Q.quaternion,
                            OO = Q.invMass,
                            hO = Q.invInertiaWorld;
                        _.x += H.x * OO * O, _.y += H.y * OO * O, _.z += H.z * OO * O, Q.angularVelocity && (hO.vmult(t, MO), MO.mult(O, MO), MO.vadd(E, E)), N.x += _.x * O, N.y += _.y * O, N.z += _.z * O, Q.angularVelocity && (W.set(E.x, E.y, E.z, 0), W.mult(V, f), V.x += Y * f.x, V.y += Y * f.y, V.z += Y * f.z, V.w += Y * f.w, L && (y ? V.normalizeFast() : V.normalize())), Q.aabb && (Q.aabbNeedsUpdate = !0), Q.updateInertiaWorld && Q.updateInertiaWorld()
                    }
                }
                for (this.clearForces(), this.broadphase.dirty = !0, a && (K.integrate = performance.now() - h), this.time += O, this.stepnumber += 1, this.dispatchEvent(eO), m = 0; m !== e; m++) {
                    var jO = (J = G[m]).postStep;
                    jO && jO.call(J)
                }
                if (this.allowSleep)
                    for (m = 0; m !== e; m++) G[m].sleepTick(this.time)
            }, Z.prototype.clearForces = function() {
                for (var O = this.bodies, h = O.length, j = 0; j !== h; j++) {
                    var X = O[j];
                    X.force, X.torque;
                    X.force.set(0, 0, 0), X.torque.set(0, 0, 0)
                }
            }
        }, {
            "../collision/AABB": 3,
            "../collision/ArrayCollisionMatrix": 4,
            "../collision/NaiveBroadphase": 7,
            "../collision/Ray": 9,
            "../collision/RaycastResult": 10,
            "../equations/ContactEquation": 19,
            "../equations/FrictionEquation": 21,
            "../material/ContactMaterial": 24,
            "../material/Material": 25,
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "../objects/Body": 31,
            "../shapes/Shape": 43,
            "../solver/GSSolver": 46,
            "../utils/EventTarget": 49,
            "../utils/TupleDictionary": 52,
            "../utils/Vec3Pool": 54,
            "./Narrowphase": 55
        }]
    }, {}, [2])(2)
}, "object" == typeof exports && "undefined" != typeof module ? window.CANNON = O() : ("undefined" != typeof window ? h = window : "undefined" != typeof global ? h = global : "undefined" != typeof self && (h = self), window.CANNON = h.CANNON = O());