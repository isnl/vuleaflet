(() => {
  var t = { 9705: (t2, e2, i2) => {
    var n = i2(1540);
    function r(t3) {
      var e3 = [Infinity, Infinity, -Infinity, -Infinity];
      return n.coordEach(t3, function(t4) {
        e3[0] > t4[0] && (e3[0] = t4[0]), e3[1] > t4[1] && (e3[1] = t4[1]), e3[2] < t4[0] && (e3[2] = t4[0]), e3[3] < t4[1] && (e3[3] = t4[1]);
      }), e3;
    }
    r["default"] = r, e2.Z = r;
  }, 4102: (t2, e2) => {
    function i2(t3, e3, i3) {
      void 0 === i3 && (i3 = {});
      var n2 = { type: "Feature" };
      return (0 === i3.id || i3.id) && (n2.id = i3.id), i3.bbox && (n2.bbox = i3.bbox), n2.properties = e3 || {}, n2.geometry = t3, n2;
    }
    function n(t3, e3, n2) {
      if (void 0 === n2 && (n2 = {}), !t3)
        throw new Error("coordinates is required");
      if (!Array.isArray(t3))
        throw new Error("coordinates must be an Array");
      if (t3.length < 2)
        throw new Error("coordinates must be at least 2 numbers long");
      if (!d(t3[0]) || !d(t3[1]))
        throw new Error("coordinates must contain numbers");
      return i2({ type: "Point", coordinates: t3 }, e3, n2);
    }
    function r(t3, e3, n2) {
      void 0 === n2 && (n2 = {});
      for (var r2 = 0, a2 = t3; r2 < a2.length; r2++) {
        var o2 = a2[r2];
        if (o2.length < 4)
          throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
        for (var s2 = 0; s2 < o2[o2.length - 1].length; s2++)
          if (o2[o2.length - 1][s2] !== o2[0][s2])
            throw new Error("First and last Position are not equivalent.");
      }
      return i2({ type: "Polygon", coordinates: t3 }, e3, n2);
    }
    function a(t3, e3, n2) {
      if (void 0 === n2 && (n2 = {}), t3.length < 2)
        throw new Error("coordinates must be an array of two or more positions");
      return i2({ type: "LineString", coordinates: t3 }, e3, n2);
    }
    function o(t3, e3) {
      void 0 === e3 && (e3 = {});
      var i3 = { type: "FeatureCollection" };
      return e3.id && (i3.id = e3.id), e3.bbox && (i3.bbox = e3.bbox), i3.features = t3, i3;
    }
    function s(t3, e3, n2) {
      return void 0 === n2 && (n2 = {}), i2({ type: "MultiLineString", coordinates: t3 }, e3, n2);
    }
    function l(t3, e3, n2) {
      return void 0 === n2 && (n2 = {}), i2({ type: "MultiPoint", coordinates: t3 }, e3, n2);
    }
    function h(t3, e3, n2) {
      return void 0 === n2 && (n2 = {}), i2({ type: "MultiPolygon", coordinates: t3 }, e3, n2);
    }
    function u(t3, i3) {
      void 0 === i3 && (i3 = "kilometers");
      var n2 = e2.factors[i3];
      if (!n2)
        throw new Error(i3 + " units is invalid");
      return t3 * n2;
    }
    function c(t3, i3) {
      void 0 === i3 && (i3 = "kilometers");
      var n2 = e2.factors[i3];
      if (!n2)
        throw new Error(i3 + " units is invalid");
      return t3 / n2;
    }
    function p(t3) {
      return 180 * (t3 % (2 * Math.PI)) / Math.PI;
    }
    function d(t3) {
      return !isNaN(t3) && null !== t3 && !Array.isArray(t3);
    }
    Object.defineProperty(e2, "__esModule", { value: true }), e2.earthRadius = 63710088e-1, e2.factors = { centimeters: 100 * e2.earthRadius, centimetres: 100 * e2.earthRadius, degrees: e2.earthRadius / 111325, feet: 3.28084 * e2.earthRadius, inches: 39.37 * e2.earthRadius, kilometers: e2.earthRadius / 1e3, kilometres: e2.earthRadius / 1e3, meters: e2.earthRadius, metres: e2.earthRadius, miles: e2.earthRadius / 1609.344, millimeters: 1e3 * e2.earthRadius, millimetres: 1e3 * e2.earthRadius, nauticalmiles: e2.earthRadius / 1852, radians: 1, yards: 1.0936 * e2.earthRadius }, e2.unitsFactors = { centimeters: 100, centimetres: 100, degrees: 1 / 111325, feet: 3.28084, inches: 39.37, kilometers: 1e-3, kilometres: 1e-3, meters: 1, metres: 1, miles: 1 / 1609.344, millimeters: 1e3, millimetres: 1e3, nauticalmiles: 1 / 1852, radians: 1 / e2.earthRadius, yards: 1.0936133 }, e2.areaFactors = { acres: 247105e-9, centimeters: 1e4, centimetres: 1e4, feet: 10.763910417, hectares: 1e-4, inches: 1550.003100006, kilometers: 1e-6, kilometres: 1e-6, meters: 1, metres: 1, miles: 386e-9, millimeters: 1e6, millimetres: 1e6, yards: 1.195990046 }, e2.feature = i2, e2.geometry = function(t3, e3, i3) {
      switch (t3) {
        case "Point":
          return n(e3).geometry;
        case "LineString":
          return a(e3).geometry;
        case "Polygon":
          return r(e3).geometry;
        case "MultiPoint":
          return l(e3).geometry;
        case "MultiLineString":
          return s(e3).geometry;
        case "MultiPolygon":
          return h(e3).geometry;
        default:
          throw new Error(t3 + " is invalid");
      }
    }, e2.point = n, e2.points = function(t3, e3, i3) {
      return void 0 === i3 && (i3 = {}), o(t3.map(function(t4) {
        return n(t4, e3);
      }), i3);
    }, e2.polygon = r, e2.polygons = function(t3, e3, i3) {
      return void 0 === i3 && (i3 = {}), o(t3.map(function(t4) {
        return r(t4, e3);
      }), i3);
    }, e2.lineString = a, e2.lineStrings = function(t3, e3, i3) {
      return void 0 === i3 && (i3 = {}), o(t3.map(function(t4) {
        return a(t4, e3);
      }), i3);
    }, e2.featureCollection = o, e2.multiLineString = s, e2.multiPoint = l, e2.multiPolygon = h, e2.geometryCollection = function(t3, e3, n2) {
      return void 0 === n2 && (n2 = {}), i2({ type: "GeometryCollection", geometries: t3 }, e3, n2);
    }, e2.round = function(t3, e3) {
      if (void 0 === e3 && (e3 = 0), e3 && !(e3 >= 0))
        throw new Error("precision must be a positive number");
      var i3 = Math.pow(10, e3 || 0);
      return Math.round(t3 * i3) / i3;
    }, e2.radiansToLength = u, e2.lengthToRadians = c, e2.lengthToDegrees = function(t3, e3) {
      return p(c(t3, e3));
    }, e2.bearingToAzimuth = function(t3) {
      var e3 = t3 % 360;
      return e3 < 0 && (e3 += 360), e3;
    }, e2.radiansToDegrees = p, e2.degreesToRadians = function(t3) {
      return t3 % 360 * Math.PI / 180;
    }, e2.convertLength = function(t3, e3, i3) {
      if (void 0 === e3 && (e3 = "kilometers"), void 0 === i3 && (i3 = "kilometers"), !(t3 >= 0))
        throw new Error("length must be a positive number");
      return u(c(t3, e3), i3);
    }, e2.convertArea = function(t3, i3, n2) {
      if (void 0 === i3 && (i3 = "meters"), void 0 === n2 && (n2 = "kilometers"), !(t3 >= 0))
        throw new Error("area must be a positive number");
      var r2 = e2.areaFactors[i3];
      if (!r2)
        throw new Error("invalid original units");
      var a2 = e2.areaFactors[n2];
      if (!a2)
        throw new Error("invalid final units");
      return t3 / r2 * a2;
    }, e2.isNumber = d, e2.isObject = function(t3) {
      return !!t3 && t3.constructor === Object;
    }, e2.validateBBox = function(t3) {
      if (!t3)
        throw new Error("bbox is required");
      if (!Array.isArray(t3))
        throw new Error("bbox must be an Array");
      if (4 !== t3.length && 6 !== t3.length)
        throw new Error("bbox must be an Array of 4 or 6 numbers");
      t3.forEach(function(t4) {
        if (!d(t4))
          throw new Error("bbox must only contain numbers");
      });
    }, e2.validateId = function(t3) {
      if (!t3)
        throw new Error("id is required");
      if (-1 === ["string", "number"].indexOf(typeof t3))
        throw new Error("id must be a number or a string");
    };
  }, 1540: (t2, e2, i2) => {
    Object.defineProperty(e2, "__esModule", { value: true });
    var n = i2(4102);
    function r(t3, e3, i3) {
      if (null !== t3)
        for (var n2, a2, o2, s2, l2, h2, u2, c, p = 0, d = 0, f = t3.type, g = "FeatureCollection" === f, _ = "Feature" === f, m = g ? t3.features.length : 1, y = 0; y < m; y++) {
          l2 = (c = !!(u2 = g ? t3.features[y].geometry : _ ? t3.geometry : t3) && "GeometryCollection" === u2.type) ? u2.geometries.length : 1;
          for (var v = 0; v < l2; v++) {
            var L2 = 0, b = 0;
            if (null !== (s2 = c ? u2.geometries[v] : u2)) {
              h2 = s2.coordinates;
              var k = s2.type;
              switch (p = !i3 || "Polygon" !== k && "MultiPolygon" !== k ? 0 : 1, k) {
                case null:
                  break;
                case "Point":
                  if (false === e3(h2, d, y, L2, b))
                    return false;
                  d++, L2++;
                  break;
                case "LineString":
                case "MultiPoint":
                  for (n2 = 0; n2 < h2.length; n2++) {
                    if (false === e3(h2[n2], d, y, L2, b))
                      return false;
                    d++, "MultiPoint" === k && L2++;
                  }
                  "LineString" === k && L2++;
                  break;
                case "Polygon":
                case "MultiLineString":
                  for (n2 = 0; n2 < h2.length; n2++) {
                    for (a2 = 0; a2 < h2[n2].length - p; a2++) {
                      if (false === e3(h2[n2][a2], d, y, L2, b))
                        return false;
                      d++;
                    }
                    "MultiLineString" === k && L2++, "Polygon" === k && b++;
                  }
                  "Polygon" === k && L2++;
                  break;
                case "MultiPolygon":
                  for (n2 = 0; n2 < h2.length; n2++) {
                    for (b = 0, a2 = 0; a2 < h2[n2].length; a2++) {
                      for (o2 = 0; o2 < h2[n2][a2].length - p; o2++) {
                        if (false === e3(h2[n2][a2][o2], d, y, L2, b))
                          return false;
                        d++;
                      }
                      b++;
                    }
                    L2++;
                  }
                  break;
                case "GeometryCollection":
                  for (n2 = 0; n2 < s2.geometries.length; n2++)
                    if (false === r(s2.geometries[n2], e3, i3))
                      return false;
                  break;
                default:
                  throw new Error("Unknown Geometry Type");
              }
            }
          }
        }
    }
    function a(t3, e3) {
      var i3;
      switch (t3.type) {
        case "FeatureCollection":
          for (i3 = 0; i3 < t3.features.length && false !== e3(t3.features[i3].properties, i3); i3++)
            ;
          break;
        case "Feature":
          e3(t3.properties, 0);
      }
    }
    function o(t3, e3) {
      if ("Feature" === t3.type)
        e3(t3, 0);
      else if ("FeatureCollection" === t3.type)
        for (var i3 = 0; i3 < t3.features.length && false !== e3(t3.features[i3], i3); i3++)
          ;
    }
    function s(t3, e3) {
      var i3, n2, r2, a2, o2, s2, l2, h2, u2, c, p = 0, d = "FeatureCollection" === t3.type, f = "Feature" === t3.type, g = d ? t3.features.length : 1;
      for (i3 = 0; i3 < g; i3++) {
        for (s2 = d ? t3.features[i3].geometry : f ? t3.geometry : t3, h2 = d ? t3.features[i3].properties : f ? t3.properties : {}, u2 = d ? t3.features[i3].bbox : f ? t3.bbox : void 0, c = d ? t3.features[i3].id : f ? t3.id : void 0, o2 = (l2 = !!s2 && "GeometryCollection" === s2.type) ? s2.geometries.length : 1, r2 = 0; r2 < o2; r2++)
          if (null !== (a2 = l2 ? s2.geometries[r2] : s2))
            switch (a2.type) {
              case "Point":
              case "LineString":
              case "MultiPoint":
              case "Polygon":
              case "MultiLineString":
              case "MultiPolygon":
                if (false === e3(a2, p, h2, u2, c))
                  return false;
                break;
              case "GeometryCollection":
                for (n2 = 0; n2 < a2.geometries.length; n2++)
                  if (false === e3(a2.geometries[n2], p, h2, u2, c))
                    return false;
                break;
              default:
                throw new Error("Unknown Geometry Type");
            }
          else if (false === e3(null, p, h2, u2, c))
            return false;
        p++;
      }
    }
    function l(t3, e3) {
      s(t3, function(t4, i3, r2, a2, o2) {
        var s2, l2 = null === t4 ? null : t4.type;
        switch (l2) {
          case null:
          case "Point":
          case "LineString":
          case "Polygon":
            return false !== e3(n.feature(t4, r2, { bbox: a2, id: o2 }), i3, 0) && void 0;
        }
        switch (l2) {
          case "MultiPoint":
            s2 = "Point";
            break;
          case "MultiLineString":
            s2 = "LineString";
            break;
          case "MultiPolygon":
            s2 = "Polygon";
        }
        for (var h2 = 0; h2 < t4.coordinates.length; h2++) {
          var u2 = { type: s2, coordinates: t4.coordinates[h2] };
          if (false === e3(n.feature(u2, r2), i3, h2))
            return false;
        }
      });
    }
    function h(t3, e3) {
      l(t3, function(t4, i3, a2) {
        var o2 = 0;
        if (t4.geometry) {
          var s2 = t4.geometry.type;
          if ("Point" !== s2 && "MultiPoint" !== s2) {
            var l2, h2 = 0, u2 = 0, c = 0;
            return false !== r(t4, function(r2, s3, p, d, f) {
              if (l2 === void 0 || i3 > h2 || d > u2 || f > c)
                return l2 = r2, h2 = i3, u2 = d, c = f, void (o2 = 0);
              var g = n.lineString([l2, r2], t4.properties);
              if (false === e3(g, i3, a2, f, o2))
                return false;
              o2++, l2 = r2;
            }) && void 0;
          }
        }
      });
    }
    function u(t3, e3) {
      if (!t3)
        throw new Error("geojson is required");
      l(t3, function(t4, i3, r2) {
        if (null !== t4.geometry) {
          var a2 = t4.geometry.type, o2 = t4.geometry.coordinates;
          switch (a2) {
            case "LineString":
              if (false === e3(t4, i3, r2, 0, 0))
                return false;
              break;
            case "Polygon":
              for (var s2 = 0; s2 < o2.length; s2++)
                if (false === e3(n.lineString(o2[s2], t4.properties), i3, r2, s2))
                  return false;
          }
        }
      });
    }
    e2.coordAll = function(t3) {
      var e3 = [];
      return r(t3, function(t4) {
        e3.push(t4);
      }), e3;
    }, e2.coordEach = r, e2.coordReduce = function(t3, e3, i3, n2) {
      var a2 = i3;
      return r(t3, function(t4, n3, r2, o2, s2) {
        a2 = 0 === n3 && i3 === void 0 ? t4 : e3(a2, t4, n3, r2, o2, s2);
      }, n2), a2;
    }, e2.featureEach = o, e2.featureReduce = function(t3, e3, i3) {
      var n2 = i3;
      return o(t3, function(t4, r2) {
        n2 = 0 === r2 && i3 === void 0 ? t4 : e3(n2, t4, r2);
      }), n2;
    }, e2.findPoint = function(t3, e3) {
      if (e3 = e3 || {}, !n.isObject(e3))
        throw new Error("options is invalid");
      var i3, r2 = e3.featureIndex || 0, a2 = e3.multiFeatureIndex || 0, o2 = e3.geometryIndex || 0, s2 = e3.coordIndex || 0, l2 = e3.properties;
      switch (t3.type) {
        case "FeatureCollection":
          r2 < 0 && (r2 = t3.features.length + r2), l2 = l2 || t3.features[r2].properties, i3 = t3.features[r2].geometry;
          break;
        case "Feature":
          l2 = l2 || t3.properties, i3 = t3.geometry;
          break;
        case "Point":
        case "MultiPoint":
          return null;
        case "LineString":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon":
          i3 = t3;
          break;
        default:
          throw new Error("geojson is invalid");
      }
      if (null === i3)
        return null;
      var h2 = i3.coordinates;
      switch (i3.type) {
        case "Point":
          return n.point(h2, l2, e3);
        case "MultiPoint":
          return a2 < 0 && (a2 = h2.length + a2), n.point(h2[a2], l2, e3);
        case "LineString":
          return s2 < 0 && (s2 = h2.length + s2), n.point(h2[s2], l2, e3);
        case "Polygon":
          return o2 < 0 && (o2 = h2.length + o2), s2 < 0 && (s2 = h2[o2].length + s2), n.point(h2[o2][s2], l2, e3);
        case "MultiLineString":
          return a2 < 0 && (a2 = h2.length + a2), s2 < 0 && (s2 = h2[a2].length + s2), n.point(h2[a2][s2], l2, e3);
        case "MultiPolygon":
          return a2 < 0 && (a2 = h2.length + a2), o2 < 0 && (o2 = h2[a2].length + o2), s2 < 0 && (s2 = h2[a2][o2].length - s2), n.point(h2[a2][o2][s2], l2, e3);
      }
      throw new Error("geojson is invalid");
    }, e2.findSegment = function(t3, e3) {
      if (e3 = e3 || {}, !n.isObject(e3))
        throw new Error("options is invalid");
      var i3, r2 = e3.featureIndex || 0, a2 = e3.multiFeatureIndex || 0, o2 = e3.geometryIndex || 0, s2 = e3.segmentIndex || 0, l2 = e3.properties;
      switch (t3.type) {
        case "FeatureCollection":
          r2 < 0 && (r2 = t3.features.length + r2), l2 = l2 || t3.features[r2].properties, i3 = t3.features[r2].geometry;
          break;
        case "Feature":
          l2 = l2 || t3.properties, i3 = t3.geometry;
          break;
        case "Point":
        case "MultiPoint":
          return null;
        case "LineString":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon":
          i3 = t3;
          break;
        default:
          throw new Error("geojson is invalid");
      }
      if (null === i3)
        return null;
      var h2 = i3.coordinates;
      switch (i3.type) {
        case "Point":
        case "MultiPoint":
          return null;
        case "LineString":
          return s2 < 0 && (s2 = h2.length + s2 - 1), n.lineString([h2[s2], h2[s2 + 1]], l2, e3);
        case "Polygon":
          return o2 < 0 && (o2 = h2.length + o2), s2 < 0 && (s2 = h2[o2].length + s2 - 1), n.lineString([h2[o2][s2], h2[o2][s2 + 1]], l2, e3);
        case "MultiLineString":
          return a2 < 0 && (a2 = h2.length + a2), s2 < 0 && (s2 = h2[a2].length + s2 - 1), n.lineString([h2[a2][s2], h2[a2][s2 + 1]], l2, e3);
        case "MultiPolygon":
          return a2 < 0 && (a2 = h2.length + a2), o2 < 0 && (o2 = h2[a2].length + o2), s2 < 0 && (s2 = h2[a2][o2].length - s2 - 1), n.lineString([h2[a2][o2][s2], h2[a2][o2][s2 + 1]], l2, e3);
      }
      throw new Error("geojson is invalid");
    }, e2.flattenEach = l, e2.flattenReduce = function(t3, e3, i3) {
      var n2 = i3;
      return l(t3, function(t4, r2, a2) {
        n2 = 0 === r2 && 0 === a2 && i3 === void 0 ? t4 : e3(n2, t4, r2, a2);
      }), n2;
    }, e2.geomEach = s, e2.geomReduce = function(t3, e3, i3) {
      var n2 = i3;
      return s(t3, function(t4, r2, a2, o2, s2) {
        n2 = 0 === r2 && i3 === void 0 ? t4 : e3(n2, t4, r2, a2, o2, s2);
      }), n2;
    }, e2.lineEach = u, e2.lineReduce = function(t3, e3, i3) {
      var n2 = i3;
      return u(t3, function(t4, r2, a2, o2) {
        n2 = 0 === r2 && i3 === void 0 ? t4 : e3(n2, t4, r2, a2, o2);
      }), n2;
    }, e2.propEach = a, e2.propReduce = function(t3, e3, i3) {
      var n2 = i3;
      return a(t3, function(t4, r2) {
        n2 = 0 === r2 && i3 === void 0 ? t4 : e3(n2, t4, r2);
      }), n2;
    }, e2.segmentEach = h, e2.segmentReduce = function(t3, e3, i3) {
      var n2 = i3, r2 = false;
      return h(t3, function(t4, a2, o2, s2, l2) {
        n2 = false === r2 && i3 === void 0 ? t4 : e3(n2, t4, a2, o2, s2, l2), r2 = true;
      }), n2;
    };
  }, 5975: (t2, e2, i2) => {
    i2(7107);
    var n = i2(2492), r = i2.n(n);
    const a = JSON.parse('{"tooltips":{"placeMarker":"Click to place marker","firstVertex":"Click to place first vertex","continueLine":"Click to continue drawing","finishLine":"Click any existing marker to finish","finishPoly":"Click first marker to finish","finishRect":"Click to finish","startCircle":"Click to place circle center","finishCircle":"Click to finish circle","placeCircleMarker":"Click to place circle marker","placeText":"Click to place text"},"actions":{"finish":"Finish","cancel":"Cancel","removeLastVertex":"Remove Last Vertex"},"buttonTitles":{"drawMarkerButton":"Draw Marker","drawPolyButton":"Draw Polygons","drawLineButton":"Draw Polyline","drawCircleButton":"Draw Circle","drawRectButton":"Draw Rectangle","editButton":"Edit Layers","dragButton":"Drag Layers","cutButton":"Cut Layers","deleteButton":"Remove Layers","drawCircleMarkerButton":"Draw Circle Marker","snappingButton":"Snap dragged marker to other layers and vertices","pinningButton":"Pin shared vertices together","rotateButton":"Rotate Layers","drawTextButton":"Draw Text","scaleButton":"Scale Layers","autoTracingButton":"Auto trace Line"},"measurements":{"totalLength":"Length","segmentLength":"Segment length","area":"Area","radius":"Radius","perimeter":"Perimeter","height":"Height","width":"Width","coordinates":"Position","coordinatesMarker":"Position Marker"}}'), o = JSON.parse('{"tooltips":{"placeMarker":"Platziere den Marker mit Klick","firstVertex":"Platziere den ersten Marker mit Klick","continueLine":"Klicke, um weiter zu zeichnen","finishLine":"Beende mit Klick auf existierenden Marker","finishPoly":"Beende mit Klick auf ersten Marker","finishRect":"Beende mit Klick","startCircle":"Platziere das Kreiszentrum mit Klick","finishCircle":"Beende den Kreis mit Klick","placeCircleMarker":"Platziere den Kreismarker mit Klick","placeText":"Platziere den Text mit Klick"},"actions":{"finish":"Beenden","cancel":"Abbrechen","removeLastVertex":"Letzten Vertex l\xF6schen"},"buttonTitles":{"drawMarkerButton":"Marker zeichnen","drawPolyButton":"Polygon zeichnen","drawLineButton":"Polyline zeichnen","drawCircleButton":"Kreis zeichnen","drawRectButton":"Rechteck zeichnen","editButton":"Layer editieren","dragButton":"Layer bewegen","cutButton":"Layer schneiden","deleteButton":"Layer l\xF6schen","drawCircleMarkerButton":"Kreismarker zeichnen","snappingButton":"Bewegter Layer an andere Layer oder Vertexe einhacken","pinningButton":"Vertexe an der gleichen Position verkn\xFCpfen","rotateButton":"Layer drehen","drawTextButton":"Text zeichnen","scaleButton":"Layer skalieren","autoTracingButton":"Linie automatisch nachzeichen"},"measurements":{"totalLength":"L\xE4nge","segmentLength":"Segment L\xE4nge","area":"Fl\xE4che","radius":"Radius","perimeter":"Umfang","height":"H\xF6he","width":"Breite","coordinates":"Position","coordinatesMarker":"Position Marker"}}'), s = JSON.parse(`{"tooltips":{"placeMarker":"Clicca per posizionare un Marker","firstVertex":"Clicca per posizionare il primo vertice","continueLine":"Clicca per continuare a disegnare","finishLine":"Clicca qualsiasi marker esistente per terminare","finishPoly":"Clicca il primo marker per terminare","finishRect":"Clicca per terminare","startCircle":"Clicca per posizionare il punto centrale del cerchio","finishCircle":"Clicca per terminare il cerchio","placeCircleMarker":"Clicca per posizionare un Marker del cherchio"},"actions":{"finish":"Termina","cancel":"Annulla","removeLastVertex":"Rimuovi l'ultimo vertice"},"buttonTitles":{"drawMarkerButton":"Disegna Marker","drawPolyButton":"Disegna Poligoni","drawLineButton":"Disegna Polilinea","drawCircleButton":"Disegna Cerchio","drawRectButton":"Disegna Rettangolo","editButton":"Modifica Livelli","dragButton":"Sposta Livelli","cutButton":"Ritaglia Livelli","deleteButton":"Elimina Livelli","drawCircleMarkerButton":"Disegna Marker del Cerchio","snappingButton":"Snap ha trascinato il pennarello su altri strati e vertici","pinningButton":"Pin condiviso vertici insieme"}}`), l = JSON.parse('{"tooltips":{"placeMarker":"Klik untuk menempatkan marker","firstVertex":"Klik untuk menempatkan vertex pertama","continueLine":"Klik untuk meneruskan digitasi","finishLine":"Klik pada sembarang marker yang ada untuk mengakhiri","finishPoly":"Klik marker pertama untuk mengakhiri","finishRect":"Klik untuk mengakhiri","startCircle":"Klik untuk menempatkan titik pusat lingkaran","finishCircle":"Klik untuk mengakhiri lingkaran","placeCircleMarker":"Klik untuk menempatkan penanda lingkarann"},"actions":{"finish":"Selesai","cancel":"Batal","removeLastVertex":"Hilangkan Vertex Terakhir"},"buttonTitles":{"drawMarkerButton":"Digitasi Marker","drawPolyButton":"Digitasi Polygon","drawLineButton":"Digitasi Polyline","drawCircleButton":"Digitasi Lingkaran","drawRectButton":"Digitasi Segi Empat","editButton":"Edit Layer","dragButton":"Geser Layer","cutButton":"Potong Layer","deleteButton":"Hilangkan Layer","drawCircleMarkerButton":"Digitasi Penanda Lingkaran","snappingButton":"Jepretkan penanda yang ditarik ke lapisan dan simpul lain","pinningButton":"Sematkan simpul bersama bersama"}}'), h = JSON.parse('{"tooltips":{"placeMarker":"Adaug\u0103 un punct","firstVertex":"Apas\u0103 aici pentru a ad\u0103uga primul Vertex","continueLine":"Apas\u0103 aici pentru a continua desenul","finishLine":"Apas\u0103 pe orice obiect pentru a finisa desenul","finishPoly":"Apas\u0103 pe primul obiect pentru a finisa","finishRect":"Apas\u0103 pentru a finisa","startCircle":"Apas\u0103 pentru a desena un cerc","finishCircle":"Apas\u0103 pentru a finisa un cerc","placeCircleMarker":"Adaug\u0103 un punct"},"actions":{"finish":"Termin\u0103","cancel":"Anuleaz\u0103","removeLastVertex":"\u0218terge ultimul Vertex"},"buttonTitles":{"drawMarkerButton":"Adaug\u0103 o bulin\u0103","drawPolyButton":"Deseneaz\u0103 un poligon","drawLineButton":"Deseneaz\u0103 o linie","drawCircleButton":"Deseneaz\u0103 un cerc","drawRectButton":"Deseneaz\u0103 un dreptunghi","editButton":"Editeaz\u0103 straturile","dragButton":"Mut\u0103 straturile","cutButton":"Taie straturile","deleteButton":"\u0218terge straturile","drawCircleMarkerButton":"Deseneaz\u0103 marcatorul cercului","snappingButton":"Fixa\u021Bi marcatorul glisat pe alte straturi \u0219i v\xE2rfuri","pinningButton":"Fixa\u021Bi v\xE2rfurile partajate \xEEmpreun\u0103"}}'), u = JSON.parse('{"tooltips":{"placeMarker":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u043C\u0430\u0440\u043A\u0435\u0440","firstVertex":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u043F\u0435\u0440\u0432\u044B\u0439 \u043E\u0431\u044A\u0435\u043A\u0442","continueLine":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435","finishLine":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043B\u044E\u0431\u043E\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0440 \u0434\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F","finishPoly":"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0435\u0440\u0432\u0443\u044E \u0442\u043E\u0447\u043A\u0443, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u044C","finishRect":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u044C","startCircle":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0446\u0435\u043D\u0442\u0440 \u043A\u0440\u0443\u0433\u0430","finishCircle":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0434\u0430\u0442\u044C \u0440\u0430\u0434\u0438\u0443\u0441","placeCircleMarker":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u043A\u0440\u0443\u0433\u043E\u0432\u043E\u0439 \u043C\u0430\u0440\u043A\u0435\u0440"},"actions":{"finish":"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C","cancel":"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C","removeLastVertex":"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"},"buttonTitles":{"drawMarkerButton":"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u0430\u0440\u043A\u0435\u0440","drawPolyButton":"\u0420\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u043B\u0438\u0433\u043E\u043D","drawLineButton":"\u0420\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u043A\u0440\u0438\u0432\u0443\u044E","drawCircleButton":"\u0420\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u043A\u0440\u0443\u0433","drawRectButton":"\u0420\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A","editButton":"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043B\u043E\u0439","dragButton":"\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u0441\u043B\u043E\u0439","cutButton":"\u0412\u044B\u0440\u0435\u0437\u0430\u0442\u044C \u0441\u043B\u043E\u0439","deleteButton":"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043B\u043E\u0439","drawCircleMarkerButton":"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u0440\u0443\u0433\u043E\u0432\u043E\u0439 \u043C\u0430\u0440\u043A\u0435\u0440","snappingButton":"\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u043C\u0430\u0440\u043A\u0435\u0440 \u043A \u0434\u0440\u0443\u0433\u0438\u043C \u0441\u043B\u043E\u044F\u043C \u0438 \u0432\u0435\u0440\u0448\u0438\u043D\u0430\u043C","pinningButton":"\u0421\u0432\u044F\u0437\u0430\u0442\u044C \u043E\u0431\u0449\u0438\u0435 \u0442\u043E\u0447\u043A\u0438 \u0432\u043C\u0435\u0441\u0442\u0435"}}'), c = JSON.parse('{"tooltips":{"placeMarker":"Presiona para colocar un marcador","firstVertex":"Presiona para colocar el primer v\xE9rtice","continueLine":"Presiona para continuar dibujando","finishLine":"Presiona cualquier marcador existente para finalizar","finishPoly":"Presiona el primer marcador para finalizar","finishRect":"Presiona para finalizar","startCircle":"Presiona para colocar el centro del c\xEDrculo","finishCircle":"Presiona para finalizar el c\xEDrculo","placeCircleMarker":"Presiona para colocar un marcador de c\xEDrculo"},"actions":{"finish":"Finalizar","cancel":"Cancelar","removeLastVertex":"Eliminar \xFAltimo v\xE9rtice"},"buttonTitles":{"drawMarkerButton":"Dibujar Marcador","drawPolyButton":"Dibujar Pol\xEDgono","drawLineButton":"Dibujar L\xEDnea","drawCircleButton":"Dibujar C\xEDrculo","drawRectButton":"Dibujar Rect\xE1ngulo","editButton":"Editar Capas","dragButton":"Arrastrar Capas","cutButton":"Cortar Capas","deleteButton":"Eliminar Capas","drawCircleMarkerButton":"Dibujar Marcador de C\xEDrculo","snappingButton":"El marcador de Snap arrastrado a otras capas y v\xE9rtices","pinningButton":"Fijar juntos los v\xE9rtices compartidos"}}'), p = JSON.parse('{"tooltips":{"placeMarker":"Klik om een marker te plaatsen","firstVertex":"Klik om het eerste punt te plaatsen","continueLine":"Klik om te blijven tekenen","finishLine":"Klik op een bestaand punt om te be\xEBindigen","finishPoly":"Klik op het eerst punt om te be\xEBindigen","finishRect":"Klik om te be\xEBindigen","startCircle":"Klik om het middelpunt te plaatsen","finishCircle":"Klik om de cirkel te be\xEBindigen","placeCircleMarker":"Klik om een marker te plaatsen"},"actions":{"finish":"Bewaar","cancel":"Annuleer","removeLastVertex":"Verwijder laatste punt"},"buttonTitles":{"drawMarkerButton":"Plaats Marker","drawPolyButton":"Teken een vlak","drawLineButton":"Teken een lijn","drawCircleButton":"Teken een cirkel","drawRectButton":"Teken een vierkant","editButton":"Bewerk","dragButton":"Verplaats","cutButton":"Knip","deleteButton":"Verwijder","drawCircleMarkerButton":"Plaats Marker","snappingButton":"Snap gesleepte marker naar andere lagen en hoekpunten","pinningButton":"Speld gedeelde hoekpunten samen"}}'), d = JSON.parse(`{"tooltips":{"placeMarker":"Cliquez pour placer un marqueur","firstVertex":"Cliquez pour placer le premier sommet","continueLine":"Cliquez pour continuer \xE0 dessiner","finishLine":"Cliquez sur n'importe quel marqueur pour terminer","finishPoly":"Cliquez sur le premier marqueur pour terminer","finishRect":"Cliquez pour terminer","startCircle":"Cliquez pour placer le centre du cercle","finishCircle":"Cliquez pour finir le cercle","placeCircleMarker":"Cliquez pour placer le marqueur circulaire"},"actions":{"finish":"Terminer","cancel":"Annuler","removeLastVertex":"Retirer le dernier sommet"},"buttonTitles":{"drawMarkerButton":"Placer des marqueurs","drawPolyButton":"Dessiner des polygones","drawLineButton":"Dessiner des polylignes","drawCircleButton":"Dessiner un cercle","drawRectButton":"Dessiner un rectangle","editButton":"\xC9diter des calques","dragButton":"D\xE9placer des calques","cutButton":"Couper des calques","deleteButton":"Supprimer des calques","drawCircleMarkerButton":"Dessiner un marqueur circulaire","snappingButton":"Glisser le marqueur vers d'autres couches et sommets","pinningButton":"\xC9pingler ensemble les sommets partag\xE9s","rotateButton":"Tourner des calques"}}`), f = JSON.parse('{"tooltips":{"placeMarker":"\u5355\u51FB\u653E\u7F6E\u6807\u8BB0","firstVertex":"\u5355\u51FB\u653E\u7F6E\u9996\u4E2A\u9876\u70B9","continueLine":"\u5355\u51FB\u7EE7\u7EED\u7ED8\u5236","finishLine":"\u5355\u51FB\u4EFB\u4F55\u5B58\u5728\u7684\u6807\u8BB0\u4EE5\u5B8C\u6210","finishPoly":"\u5355\u51FB\u7B2C\u4E00\u4E2A\u6807\u8BB0\u4EE5\u5B8C\u6210","finishRect":"\u5355\u51FB\u5B8C\u6210","startCircle":"\u5355\u51FB\u653E\u7F6E\u5706\u5FC3","finishCircle":"\u5355\u51FB\u5B8C\u6210\u5706\u5F62","placeCircleMarker":"\u70B9\u51FB\u653E\u7F6E\u5706\u5F62\u6807\u8BB0"},"actions":{"finish":"\u5B8C\u6210","cancel":"\u53D6\u6D88","removeLastVertex":"\u79FB\u9664\u6700\u540E\u7684\u9876\u70B9"},"buttonTitles":{"drawMarkerButton":"\u7ED8\u5236\u6807\u8BB0","drawPolyButton":"\u7ED8\u5236\u591A\u8FB9\u5F62","drawLineButton":"\u7ED8\u5236\u7EBF\u6BB5","drawCircleButton":"\u7ED8\u5236\u5706\u5F62","drawRectButton":"\u7ED8\u5236\u957F\u65B9\u5F62","editButton":"\u7F16\u8F91\u56FE\u5C42","dragButton":"\u62D6\u62FD\u56FE\u5C42","cutButton":"\u526A\u5207\u56FE\u5C42","deleteButton":"\u5220\u9664\u56FE\u5C42","drawCircleMarkerButton":"\u753B\u5706\u5708\u6807\u8BB0","snappingButton":"\u5C06\u62D6\u52A8\u7684\u6807\u8BB0\u6355\u6349\u5230\u5176\u4ED6\u56FE\u5C42\u548C\u9876\u70B9","pinningButton":"\u5C06\u5171\u4EAB\u9876\u70B9\u56FA\u5B9A\u5728\u4E00\u8D77"}}'), g = JSON.parse('{"tooltips":{"placeMarker":"\u55AE\u64CA\u653E\u7F6E\u6A19\u8A18","firstVertex":"\u55AE\u64CA\u653E\u7F6E\u7B2C\u4E00\u500B\u9802\u9EDE","continueLine":"\u55AE\u64CA\u7E7C\u7E8C\u7E6A\u88FD","finishLine":"\u55AE\u64CA\u4EFB\u4F55\u5B58\u5728\u7684\u6A19\u8A18\u4EE5\u5B8C\u6210","finishPoly":"\u55AE\u64CA\u7B2C\u4E00\u500B\u6A19\u8A18\u4EE5\u5B8C\u6210","finishRect":"\u55AE\u64CA\u5B8C\u6210","startCircle":"\u55AE\u64CA\u653E\u7F6E\u5713\u5FC3","finishCircle":"\u55AE\u64CA\u5B8C\u6210\u5713\u5F62","placeCircleMarker":"\u9EDE\u64CA\u653E\u7F6E\u5713\u5F62\u6A19\u8A18"},"actions":{"finish":"\u5B8C\u6210","cancel":"\u53D6\u6D88","removeLastVertex":"\u79FB\u9664\u6700\u5F8C\u4E00\u500B\u9802\u9EDE"},"buttonTitles":{"drawMarkerButton":"\u653E\u7F6E\u6A19\u8A18","drawPolyButton":"\u7E6A\u88FD\u591A\u908A\u5F62","drawLineButton":"\u7E6A\u88FD\u7DDA\u6BB5","drawCircleButton":"\u7E6A\u88FD\u5713\u5F62","drawRectButton":"\u7E6A\u88FD\u65B9\u5F62","editButton":"\u7DE8\u8F2F\u5716\u5F62","dragButton":"\u79FB\u52D5\u5716\u5F62","cutButton":"\u88C1\u5207\u5716\u5F62","deleteButton":"\u522A\u9664\u5716\u5F62","drawCircleMarkerButton":"\u756B\u5713\u5708\u6A19\u8A18","snappingButton":"\u5C07\u62D6\u52D5\u7684\u6A19\u8A18\u5C0D\u9F4A\u5230\u5176\u4ED6\u5716\u5C64\u548C\u9802\u9EDE","pinningButton":"\u5C07\u5171\u4EAB\u9802\u9EDE\u56FA\u5B9A\u5728\u4E00\u8D77"}}'), _ = { en: a, de: o, it: s, id: l, ro: h, ru: u, es: c, nl: p, fr: d, pt_br: JSON.parse('{"tooltips":{"placeMarker":"Clique para posicionar o marcador","firstVertex":"Clique para posicionar o primeiro v\xE9rtice","continueLine":"Clique para continuar desenhando","finishLine":"Clique em qualquer marcador existente para finalizar","finishPoly":"Clique no primeiro ponto para fechar o pol\xEDgono","finishRect":"Clique para finalizar","startCircle":"Clique para posicionar o centro do c\xEDrculo","finishCircle":"Clique para fechar o c\xEDrculo","placeCircleMarker":"Clique para posicionar o marcador circular"},"actions":{"finish":"Finalizar","cancel":"Cancelar","removeLastVertex":"Remover \xFAltimo v\xE9rtice"},"buttonTitles":{"drawMarkerButton":"Desenhar um marcador","drawPolyButton":"Desenhar um pol\xEDgono","drawLineButton":"Desenhar uma polilinha","drawCircleButton":"Desenhar um c\xEDrculo","drawRectButton":"Desenhar um ret\xE2ngulo","editButton":"Editar camada(s)","dragButton":"Mover camada(s)","cutButton":"Recortar camada(s)","deleteButton":"Remover camada(s)","drawCircleMarkerButton":"Marcador de c\xEDrculos de desenho","snappingButton":"Marcador arrastado para outras camadas e v\xE9rtices","pinningButton":"V\xE9rtices compartilhados de pinos juntos"}}'), zh: f, zh_tw: g, pl: JSON.parse('{"tooltips":{"placeMarker":"Kliknij, aby ustawi\u0107 znacznik","firstVertex":"Kliknij, aby ustawi\u0107 pierwszy punkt","continueLine":"Kliknij, aby kontynuowa\u0107 rysowanie","finishLine":"Kliknij dowolny punkt, aby zako\u0144czy\u0107","finishPoly":"Kliknij pierwszy punkt, aby zako\u0144czy\u0107","finishRect":"Kliknij, aby zako\u0144czy\u0107","startCircle":"Kliknij, aby ustawi\u0107 \u015Brodek ko\u0142a","finishCircle":"Kliknij, aby zako\u0144czy\u0107 rysowanie ko\u0142a","placeCircleMarker":"Kliknij, aby ustawi\u0107 okr\u0105g\u0142y znacznik"},"actions":{"finish":"Zako\u0144cz","cancel":"Anuluj","removeLastVertex":"Usu\u0144 ostatni punkt"},"buttonTitles":{"drawMarkerButton":"Narysuj znacznik","drawPolyButton":"Narysuj wielok\u0105t","drawLineButton":"Narysuj \u015Bcie\u017Ck\u0119","drawCircleButton":"Narysuj ko\u0142o","drawRectButton":"Narysuj prostok\u0105t","editButton":"Edytuj","dragButton":"Przesu\u0144","cutButton":"Wytnij","deleteButton":"Usu\u0144","drawCircleMarkerButton":"Narysuj okr\u0105g\u0142y znacznik","snappingButton":"Snap przeci\u0105gni\u0119ty marker na inne warstwy i wierzcho\u0142ki","pinningButton":"Sworze\u0144 wsp\xF3lne wierzcho\u0142ki razem"}}'), sv: JSON.parse('{"tooltips":{"placeMarker":"Klicka f\xF6r att placera mark\xF6r","firstVertex":"Klicka f\xF6r att placera f\xF6rsta h\xF6rnet","continueLine":"Klicka f\xF6r att forts\xE4tta rita","finishLine":"Klicka p\xE5 en existerande punkt f\xF6r att slutf\xF6ra","finishPoly":"Klicka p\xE5 den f\xF6rsta punkten f\xF6r att slutf\xF6ra","finishRect":"Klicka f\xF6r att slutf\xF6ra","startCircle":"Klicka f\xF6r att placera cirkelns centrum","finishCircle":"Klicka f\xF6r att slutf\xF6ra cirkeln","placeCircleMarker":"Klicka f\xF6r att placera cirkelmark\xF6r"},"actions":{"finish":"Slutf\xF6r","cancel":"Avbryt","removeLastVertex":"Ta bort sista h\xF6rnet"},"buttonTitles":{"drawMarkerButton":"Rita Mark\xF6r","drawPolyButton":"Rita Polygoner","drawLineButton":"Rita Linje","drawCircleButton":"Rita Cirkel","drawRectButton":"Rita Rektangel","editButton":"Redigera Lager","dragButton":"Dra Lager","cutButton":"Klipp i Lager","deleteButton":"Ta bort Lager","drawCircleMarkerButton":"Rita Cirkelmark\xF6r","snappingButton":"Sn\xE4pp dra mark\xF6ren till andra lager och h\xF6rn","pinningButton":"F\xE4st delade h\xF6rn tillsammans"}}'), el: JSON.parse('{"tooltips":{"placeMarker":"\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C4\u03AE\u03C3\u03B5\u03C4\u03B5 \u0394\u03B5\u03AF\u03BA\u03C4\u03B7","firstVertex":"\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C4\u03AE\u03C3\u03B5\u03C4\u03B5 \u03C4\u03BF \u03C0\u03C1\u03CE\u03C4\u03BF \u03C3\u03B7\u03BC\u03B5\u03AF\u03BF","continueLine":"\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C3\u03C5\u03BD\u03B5\u03C7\u03AF\u03C3\u03B5\u03C4\u03B5 \u03BD\u03B1 \u03C3\u03C7\u03B5\u03B4\u03B9\u03AC\u03B6\u03B5\u03C4\u03B5","finishLine":"\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03C3\u03B5 \u03BF\u03C0\u03BF\u03B9\u03BF\u03BD\u03B4\u03AE\u03C0\u03BF\u03C4\u03B5 \u03C5\u03C0\u03AC\u03C1\u03C7\u03BF\u03BD \u03C3\u03B7\u03BC\u03B5\u03AF\u03BF \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03BF\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03C9\u03B8\u03B5\u03AF","finishPoly":"\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03C3\u03C4\u03BF \u03C0\u03C1\u03CE\u03C4\u03BF \u03C3\u03B7\u03BC\u03B5\u03AF\u03BF \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03B5\u03BB\u03B5\u03B9\u03CE\u03C3\u03B5\u03C4\u03B5","finishRect":"\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03B5\u03BB\u03B5\u03B9\u03CE\u03C3\u03B5\u03C4\u03B5","startCircle":"\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C4\u03AE\u03C3\u03B5\u03C4\u03B5 \u03BA\u03AD\u03BD\u03C4\u03C1\u03BF \u039A\u03CD\u03BA\u03BB\u03BF\u03C5","finishCircle":"\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03BF\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03CE\u03C3\u03B5\u03C4\u03B5 \u03C4\u03BF\u03BD \u039A\u03CD\u03BA\u03BB\u03BF","placeCircleMarker":"\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C4\u03AE\u03C3\u03B5\u03C4\u03B5 \u039A\u03C5\u03BA\u03BB\u03B9\u03BA\u03CC \u0394\u03B5\u03AF\u03BA\u03C4\u03B7"},"actions":{"finish":"\u03A4\u03AD\u03BB\u03BF\u03C2","cancel":"\u0391\u03BA\u03CD\u03C1\u03C9\u03C3\u03B7","removeLastVertex":"\u039A\u03B1\u03C4\u03AC\u03C1\u03B3\u03B7\u03C3\u03B7 \u03C4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03BF\u03C5 \u03C3\u03B7\u03BC\u03B5\u03AF\u03BF\u03C5"},"buttonTitles":{"drawMarkerButton":"\u03A3\u03C7\u03B5\u03B4\u03AF\u03B1\u03C3\u03B7 \u0394\u03B5\u03AF\u03BA\u03C4\u03B7","drawPolyButton":"\u03A3\u03C7\u03B5\u03B4\u03AF\u03B1\u03C3\u03B7 \u03A0\u03BF\u03BB\u03C5\u03B3\u03CE\u03BD\u03BF\u03C5","drawLineButton":"\u03A3\u03C7\u03B5\u03B4\u03AF\u03B1\u03C3\u03B7 \u0393\u03C1\u03B1\u03BC\u03BC\u03AE\u03C2","drawCircleButton":"\u03A3\u03C7\u03B5\u03B4\u03AF\u03B1\u03C3\u03B7 \u039A\u03CD\u03BA\u03BB\u03BF\u03C5","drawRectButton":"\u03A3\u03C7\u03B5\u03B4\u03AF\u03B1\u03C3\u03B7 \u039F\u03C1\u03B8\u03BF\u03B3\u03C9\u03BD\u03AF\u03BF\u03C5","editButton":"\u0395\u03C0\u03B5\u03BE\u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1 \u0395\u03C0\u03B9\u03C0\u03AD\u03B4\u03C9\u03BD","dragButton":"\u039C\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC \u0395\u03C0\u03B9\u03C0\u03AD\u03B4\u03C9\u03BD","cutButton":"\u0391\u03C0\u03BF\u03BA\u03BF\u03C0\u03AE \u0395\u03C0\u03B9\u03C0\u03AD\u03B4\u03C9\u03BD","deleteButton":"\u039A\u03B1\u03C4\u03AC\u03C1\u03B3\u03B7\u03C3\u03B7 \u0395\u03C0\u03B9\u03C0\u03AD\u03B4\u03C9\u03BD","drawCircleMarkerButton":"\u03A3\u03C7\u03B5\u03B4\u03AF\u03B1\u03C3\u03B7 \u039A\u03C5\u03BA\u03BB\u03B9\u03BA\u03BF\u03CD \u0394\u03B5\u03AF\u03BA\u03C4\u03B7","snappingButton":"\u03A0\u03C1\u03BF\u03C3\u03BA\u03CC\u03BB\u03BB\u03B7\u03C3\u03B7 \u03C4\u03BF\u03C5 \u0394\u03B5\u03AF\u03BA\u03C4\u03B7 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC\u03C2 \u03C3\u03B5 \u03AC\u03BB\u03BB\u03B1 \u0395\u03C0\u03AF\u03C0\u03B5\u03B4\u03B1 \u03BA\u03B1\u03B9 \u039A\u03BF\u03C1\u03C5\u03C6\u03AD\u03C2","pinningButton":"\u03A0\u03B5\u03C1\u03B9\u03BA\u03BF\u03C0\u03AE \u03BA\u03BF\u03B9\u03BD\u03CE\u03BD \u03BA\u03BF\u03C1\u03C5\u03C6\u03CE\u03BD \u03BC\u03B1\u03B6\u03AF"}}'), hu: JSON.parse('{"tooltips":{"placeMarker":"Kattintson a jel\xF6l\u0151 elhelyez\xE9s\xE9hez","firstVertex":"Kattintson az els\u0151 pont elhelyez\xE9s\xE9hez","continueLine":"Kattintson a k\xF6vetkez\u0151 pont elhelyez\xE9s\xE9hez","finishLine":"A befejez\xE9shez kattintson egy megl\xE9v\u0151 pontra","finishPoly":"A befejez\xE9shez kattintson az els\u0151 pontra","finishRect":"Kattintson a befejez\xE9shez","startCircle":"Kattintson a k\xF6r k\xF6z\xE9ppontj\xE1nak elhelyez\xE9s\xE9hez","finishCircle":"Kattintson a k\xF6r befejez\xE9s\xE9hez","placeCircleMarker":"Kattintson a k\xF6rjel\xF6l\u0151 elhelyez\xE9s\xE9hez"},"actions":{"finish":"Befejez\xE9s","cancel":"M\xE9gse","removeLastVertex":"Utols\xF3 pont elt\xE1vol\xEDt\xE1sa"},"buttonTitles":{"drawMarkerButton":"Jel\xF6l\u0151 rajzol\xE1sa","drawPolyButton":"Poligon rajzol\xE1sa","drawLineButton":"Vonal rajzol\xE1sa","drawCircleButton":"K\xF6r rajzol\xE1sa","drawRectButton":"N\xE9gyzet rajzol\xE1sa","editButton":"Elemek szerkeszt\xE9se","dragButton":"Elemek mozgat\xE1sa","cutButton":"Elemek v\xE1g\xE1sa","deleteButton":"Elemek t\xF6rl\xE9se","drawCircleMarkerButton":"K\xF6r jel\xF6l\u0151 rajzol\xE1sa","snappingButton":"Kapcsolja a jel\xF6lt\u0151t m\xE1sik elemhez vagy ponthoz","pinningButton":"K\xF6z\xF6s pontok \xF6sszek\xF6t\xE9se"}}'), da: JSON.parse('{"tooltips":{"placeMarker":"Tryk for at placere en mark\xF8r","firstVertex":"Tryk for at placere det f\xF8rste punkt","continueLine":"Tryk for at forts\xE6tte linjen","finishLine":"Tryk p\xE5 et eksisterende punkt for at afslutte","finishPoly":"Tryk p\xE5 det f\xF8rste punkt for at afslutte","finishRect":"Tryk for at afslutte","startCircle":"Tryk for at placere cirklens center","finishCircle":"Tryk for at afslutte cirklen","placeCircleMarker":"Tryk for at placere en cirkelmark\xF8r"},"actions":{"finish":"Afslut","cancel":"Afbryd","removeLastVertex":"Fjern sidste punkt"},"buttonTitles":{"drawMarkerButton":"Placer mark\xF8r","drawPolyButton":"Tegn polygon","drawLineButton":"Tegn linje","drawCircleButton":"Tegn cirkel","drawRectButton":"Tegn firkant","editButton":"Rediger","dragButton":"Tr\xE6k","cutButton":"Klip","deleteButton":"Fjern","drawCircleMarkerButton":"Tegn cirkelmark\xF8r","snappingButton":"Fastg\xF8r trukket mark\xF8r til andre elementer","pinningButton":"Sammenl\xE6g delte elementer"}}'), no: JSON.parse('{"tooltips":{"placeMarker":"Klikk for \xE5 plassere punkt","firstVertex":"Klikk for \xE5 plassere f\xF8rste punkt","continueLine":"Klikk for \xE5 tegne videre","finishLine":"Klikk p\xE5 et eksisterende punkt for \xE5 fullf\xF8re","finishPoly":"Klikk f\xF8rste punkt for \xE5 fullf\xF8re","finishRect":"Klikk for \xE5 fullf\xF8re","startCircle":"Klikk for \xE5 sette sirkel midtpunkt","finishCircle":"Klikk for \xE5 fullf\xF8re sirkel","placeCircleMarker":"Klikk for \xE5 plassere sirkel"},"actions":{"finish":"Fullf\xF8r","cancel":"Kanseller","removeLastVertex":"Fjern forrige punkt"},"buttonTitles":{"drawMarkerButton":"Tegn Punkt","drawPolyButton":"Tegn Flate","drawLineButton":"Tegn Linje","drawCircleButton":"Tegn Sirkel","drawRectButton":"Tegn rektangel","editButton":"Rediger Objekter","dragButton":"Dra Objekter","cutButton":"Kutt Objekter","deleteButton":"Fjern Objekter","drawCircleMarkerButton":"Tegn sirkel-punkt","snappingButton":"Fest dratt punkt til andre objekter og punkt","pinningButton":"Pin delte punkt sammen"}}'), fa: JSON.parse('{"tooltips":{"placeMarker":"\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u062C\u0627\u0646\u0645\u0627\u06CC\u06CC \u0646\u0634\u0627\u0646","firstVertex":"\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u0631\u0633\u0645 \u0627\u0648\u0644\u06CC\u0646 \u0631\u0623\u0633","continueLine":"\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u0627\u062F\u0627\u0645\u0647 \u0631\u0633\u0645","finishLine":"\u06A9\u0644\u06CC\u06A9 \u0631\u0648\u06CC \u0647\u0631 \u0646\u0634\u0627\u0646 \u0645\u0648\u062C\u0648\u062F \u0628\u0631\u0627\u06CC \u067E\u0627\u06CC\u0627\u0646","finishPoly":"\u06A9\u0644\u06CC\u06A9 \u0631\u0648\u06CC \u0627\u0648\u0644\u06CC\u0646 \u0646\u0634\u0627\u0646 \u0628\u0631\u0627\u06CC \u067E\u0627\u06CC\u0627\u0646","finishRect":"\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u067E\u0627\u06CC\u0627\u0646","startCircle":"\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u0631\u0633\u0645 \u0645\u0631\u06A9\u0632 \u062F\u0627\u06CC\u0631\u0647","finishCircle":"\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u067E\u0627\u06CC\u0627\u0646 \u0631\u0633\u0645 \u062F\u0627\u06CC\u0631\u0647","placeCircleMarker":"\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u0631\u0633\u0645 \u0646\u0634\u0627\u0646 \u062F\u0627\u06CC\u0631\u0647","placeText":"\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u0646\u0648\u0634\u062A\u0646 \u0645\u062A\u0646"},"actions":{"finish":"\u067E\u0627\u06CC\u0627\u0646","cancel":"\u0644\u0641\u0648","removeLastVertex":"\u062D\u0630\u0641 \u0622\u062E\u0631\u06CC\u0646 \u0631\u0623\u0633"},"buttonTitles":{"drawMarkerButton":"\u062F\u0631\u062C \u0646\u0634\u0627\u0646","drawPolyButton":"\u0631\u0633\u0645 \u0686\u0646\u062F\u0636\u0644\u0639\u06CC","drawLineButton":"\u0631\u0633\u0645 \u062E\u0637","drawCircleButton":"\u0631\u0633\u0645 \u062F\u0627\u06CC\u0631\u0647","drawRectButton":"\u0631\u0633\u0645 \u0686\u0647\u0627\u0631\u0636\u0644\u0639\u06CC","editButton":"\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0644\u0627\u06CC\u0647\u200C\u0647\u0627","dragButton":"\u062C\u0627\u0628\u062C\u0627\u06CC\u06CC \u0644\u0627\u06CC\u0647\u200C\u0647\u0627","cutButton":"\u0628\u0631\u0634 \u0644\u0627\u06CC\u0647\u200C\u0647\u0627","deleteButton":"\u062D\u0630\u0641 \u0644\u0627\u06CC\u0647\u200C\u0647\u0627","drawCircleMarkerButton":"\u0631\u0633\u0645 \u0646\u0634\u0627\u0646 \u062F\u0627\u06CC\u0631\u0647","snappingButton":"\u0646\u0634\u0627\u0646\u06AF\u0631 \u0631\u0627 \u0628\u0647 \u0644\u0627\u06CC\u0647\u200C\u0647\u0627 \u0648 \u0631\u0626\u0648\u0633 \u062F\u06CC\u06AF\u0631 \u0628\u06A9\u0634\u06CC\u062F","pinningButton":"\u0631\u0626\u0648\u0633 \u0645\u0634\u062A\u0631\u06A9 \u0631\u0627 \u0628\u0627 \u0647\u0645 \u067E\u06CC\u0646 \u06A9\u0646\u06CC\u062F","rotateButton":"\u0686\u0631\u062E\u0634 \u0644\u0627\u06CC\u0647","drawTextButton":"\u0631\u0633\u0645 \u0645\u062A\u0646"}}'), ua: JSON.parse(`{"tooltips":{"placeMarker":"\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u043C\u0430\u0440\u043A\u0435\u0440","firstVertex":"\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u043F\u0435\u0440\u0448\u0443 \u0432\u0435\u0440\u0448\u0438\u043D\u0443","continueLine":"\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u043C\u0430\u043B\u044E\u0432\u0430\u0442\u0438","finishLine":"\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0456\u0441\u043D\u0443\u044E\u0447\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0440 \u0434\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044F","finishPoly":"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u043F\u0435\u0440\u0448\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0440, \u0449\u043E\u0431 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438","finishRect":"\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438","startCircle":"\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0434\u043E\u0434\u0430\u0442\u0438 \u0446\u0435\u043D\u0442\u0440 \u043A\u043E\u043B\u0430","finishCircle":"\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438 \u043A\u043E\u043B\u043E","placeCircleMarker":"\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u043A\u0440\u0443\u0433\u043E\u0432\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0440"},"actions":{"finish":"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438","cancel":"\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438","removeLastVertex":"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044E \u0432\u0435\u0440\u0448\u0438\u043D\u0443"},"buttonTitles":{"drawMarkerButton":"\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u043C\u0430\u0440\u043A\u0435\u0440","drawPolyButton":"\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u043F\u043E\u043B\u0456\u0433\u043E\u043D","drawLineButton":"\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u043A\u0440\u0438\u0432\u0443","drawCircleButton":"\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u043A\u043E\u043B\u043E","drawRectButton":"\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u043F\u0440\u044F\u043C\u043E\u043A\u0443\u0442\u043D\u0438\u043A","editButton":"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0448\u0430\u0440\u0438","dragButton":"\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u0448\u0430\u0440\u0438","cutButton":"\u0412\u0438\u0440\u0456\u0437\u0430\u0442\u0438 \u0448\u0430\u0440\u0438","deleteButton":"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0448\u0430\u0440\u0438","drawCircleMarkerButton":"\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u043A\u0440\u0443\u0433\u043E\u0432\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0440","snappingButton":"\u041F\u0440\u0438\u0432\u2019\u044F\u0437\u0430\u0442\u0438 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0443\u0442\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0440 \u0434\u043E \u0456\u043D\u0448\u0438\u0445 \u0448\u0430\u0440\u0456\u0432 \u0442\u0430 \u0432\u0435\u0440\u0448\u0438\u043D","pinningButton":"\u0417\u0432'\u044F\u0437\u0430\u0442\u0438 \u0441\u043F\u0456\u043B\u044C\u043D\u0456 \u0432\u0435\u0440\u0448\u0438\u043D\u0438 \u0440\u0430\u0437\u043E\u043C"}}`), tr: JSON.parse('{"tooltips":{"placeMarker":"\u0130\u015Faret\xE7i yerle\u015Ftirmek i\xE7in t\u0131klay\u0131n","firstVertex":"\u0130lk tepe noktas\u0131n\u0131 yerle\u015Ftirmek i\xE7in t\u0131klay\u0131n","continueLine":"\xC7izime devam etmek i\xE7in t\u0131klay\u0131n","finishLine":"Bitirmek i\xE7in mevcut herhangi bir i\u015Faret\xE7iyi t\u0131klay\u0131n","finishPoly":"Bitirmek i\xE7in ilk i\u015Faret\xE7iyi t\u0131klay\u0131n","finishRect":"Bitirmek i\xE7in t\u0131klay\u0131n","startCircle":"Daire merkezine yerle\u015Ftirmek i\xE7in t\u0131klay\u0131n","finishCircle":"Daireyi bitirmek i\xE7in t\u0131klay\u0131n","placeCircleMarker":"Daire i\u015Faret\xE7isi yerle\u015Ftirmek i\xE7in t\u0131klay\u0131n"},"actions":{"finish":"Bitir","cancel":"\u0130ptal","removeLastVertex":"Son k\xF6\u015Feyi kald\u0131r"},"buttonTitles":{"drawMarkerButton":"\xC7izim \u0130\u015Faret\xE7isi","drawPolyButton":"\xC7okgenler \xE7iz","drawLineButton":"\xC7oklu \xE7izgi \xE7iz","drawCircleButton":"\xC7ember \xE7iz","drawRectButton":"Dikd\xF6rtgen \xE7iz","editButton":"Katmanlar\u0131 d\xFCzenle","dragButton":"Katmanlar\u0131 s\xFCr\xFCkle","cutButton":"Katmanlar\u0131 kes","deleteButton":"Katmanlar\u0131 kald\u0131r","drawCircleMarkerButton":"Daire i\u015Faret\xE7isi \xE7iz","snappingButton":"S\xFCr\xFCklenen i\u015Faret\xE7iyi di\u011Fer katmanlara ve k\xF6\u015Felere yap\u0131\u015Ft\u0131r","pinningButton":"Payla\u015F\u0131lan k\xF6\u015Feleri birbirine sabitle"}}'), cz: JSON.parse('{"tooltips":{"placeMarker":"Kliknut\xEDm vytvo\u0159\xEDte zna\u010Dku","firstVertex":"Kliknut\xEDm vytvo\u0159\xEDte prvn\xED objekt","continueLine":"Kliknut\xEDm pokra\u010Dujte v kreslen\xED","finishLine":"Kliknut\xED na libovolnou existuj\xEDc\xED zna\u010Dku pro dokon\u010Den\xED","finishPoly":"Vyberte prvn\xED bod pro dokon\u010Den\xED","finishRect":"Klikn\u011Bte pro dokon\u010Den\xED","startCircle":"Kliknut\xEDm p\u0159idejte st\u0159ed kruhu","finishCircle":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0434\u0430\u0442\u044C \u0440\u0430\u0434\u0438\u0443\u0441","placeCircleMarker":"Kliknut\xEDm nastavte polom\u011Br"},"actions":{"finish":"Dokon\u010Dit","cancel":"Zru\u0161it","removeLastVertex":"Zru\u0161it posledn\xED akci"},"buttonTitles":{"drawMarkerButton":"P\u0159idat zna\u010Dku","drawPolyButton":"Nakreslit polygon","drawLineButton":"Nakreslit k\u0159ivku","drawCircleButton":"Nakreslit kruh","drawRectButton":"Nakreslit obd\xE9ln\xEDk","editButton":"Upravit vrstvu","dragButton":"P\u0159eneste vrstvu","cutButton":"Vyjmout vrstvu","deleteButton":"Smazat vrstvu","drawCircleMarkerButton":"P\u0159idat kruhovou zna\u010Dku","snappingButton":"Nav\xE1zat ta\u017Enou zna\u010Dku k dal\u0161\xEDm vrstv\xE1m a vrchol\u016Fm","pinningButton":"Spojit spole\u010Dn\xE9 body dohromady"}}'), ja: JSON.parse('{"tooltips":{"placeMarker":"\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30DE\u30FC\u30AB\u30FC\u3092\u914D\u7F6E","firstVertex":"\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u6700\u521D\u306E\u9802\u70B9\u3092\u914D\u7F6E","continueLine":"\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u63CF\u753B\u3092\u7D9A\u3051\u308B","finishLine":"\u4EFB\u610F\u306E\u30DE\u30FC\u30AB\u30FC\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u7D42\u4E86","finishPoly":"\u6700\u521D\u306E\u30DE\u30FC\u30AB\u30FC\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u7D42\u4E86","finishRect":"\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u7D42\u4E86","startCircle":"\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u5186\u306E\u4E2D\u5FC3\u3092\u914D\u7F6E","finishCircle":"\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u5186\u306E\u63CF\u753B\u3092\u7D42\u4E86","placeCircleMarker":"\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u5186\u30DE\u30FC\u30AB\u30FC\u3092\u914D\u7F6E","placeText":"\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30C6\u30AD\u30B9\u30C8\u3092\u914D\u7F6E"},"actions":{"finish":"\u7D42\u4E86","cancel":"\u30AD\u30E3\u30F3\u30BB\u30EB","removeLastVertex":"\u6700\u5F8C\u306E\u9802\u70B9\u3092\u524A\u9664"},"buttonTitles":{"drawMarkerButton":"\u30DE\u30FC\u30AB\u30FC\u3092\u63CF\u753B","drawPolyButton":"\u30DD\u30EA\u30B4\u30F3\u3092\u63CF\u753B","drawLineButton":"\u6298\u308C\u7DDA\u3092\u63CF\u753B","drawCircleButton":"\u5186\u3092\u63CF\u753B","drawRectButton":"\u77E9\u5F62\u3092\u63CF\u753B","editButton":"\u30EC\u30A4\u30E4\u30FC\u3092\u7DE8\u96C6","dragButton":"\u30EC\u30A4\u30E4\u30FC\u3092\u30C9\u30E9\u30C3\u30B0","cutButton":"\u30EC\u30A4\u30E4\u30FC\u3092\u5207\u308A\u53D6\u308A","deleteButton":"\u30EC\u30A4\u30E4\u30FC\u3092\u524A\u9664","drawCircleMarkerButton":"\u5186\u30DE\u30FC\u30AB\u30FC\u3092\u63CF\u753B","snappingButton":"\u30C9\u30E9\u30C3\u30B0\u3057\u305F\u30DE\u30FC\u30AB\u30FC\u3092\u4ED6\u306E\u30EC\u30A4\u30E4\u30FC\u3084\u9802\u70B9\u306B\u30B9\u30CA\u30C3\u30D7\u3059\u308B","pinningButton":"\u5171\u6709\u3059\u308B\u9802\u70B9\u3092\u540C\u6642\u306B\u52D5\u304B\u3059","rotateButton":"\u30EC\u30A4\u30E4\u30FC\u3092\u56DE\u8EE2","drawTextButton":"\u30C6\u30AD\u30B9\u30C8\u3092\u63CF\u753B"}}'), fi: JSON.parse('{"tooltips":{"placeMarker":"Klikkaa asettaaksesi merkin","firstVertex":"Klikkaa asettaakseni ensimm\xE4isen osuuden","continueLine":"Klikkaa jatkaaksesi piirt\xE4mist\xE4","finishLine":"Klikkaa olemassa olevaa merkki\xE4 lopettaaksesi","finishPoly":"Klikkaa ensimm\xE4ist\xE4 merkki\xE4 lopettaaksesi","finishRect":"Klikkaa lopettaaksesi","startCircle":"Klikkaa asettaaksesi ympyr\xE4n keskipisteen","finishCircle":"Klikkaa lopettaaksesi ympyr\xE4n","placeCircleMarker":"Klikkaa asettaaksesi ympyr\xE4merkin","placeText":"Klikkaa asettaaksesi tekstin"},"actions":{"finish":"Valmis","cancel":"Peruuta","removeLastVertex":"Poista viimeinen osuus"},"buttonTitles":{"drawMarkerButton":"Piirr\xE4 merkkej\xE4","drawPolyButton":"Piirr\xE4 monikulmioita","drawLineButton":"Piirr\xE4 viivoja","drawCircleButton":"Piirr\xE4 ympyr\xE4","drawRectButton":"Piirr\xE4 neliskulmioita","editButton":"Muokkaa","dragButton":"Siirr\xE4","cutButton":"Leikkaa","deleteButton":"Poista","drawCircleMarkerButton":"Piirr\xE4 ympyr\xE4merkki","snappingButton":"Kiinnit\xE4 siirrett\xE4v\xE4 merkki toisiin muotoihin","pinningButton":"Kiinnit\xE4 jaetut muodot yhteen","rotateButton":"K\xE4\xE4nn\xE4","drawTextButton":"Piirr\xE4 teksti\xE4"}}'), ko: JSON.parse('{"tooltips":{"placeMarker":"\uB9C8\uCEE4 \uC704\uCE58\uB97C \uD074\uB9AD\uD558\uC138\uC694","firstVertex":"\uCCAB\uBC88\uC9F8 \uAF2D\uC9C0\uC810 \uC704\uCE58\uC744 \uD074\uB9AD\uD558\uC138\uC694","continueLine":"\uACC4\uC18D \uADF8\uB9AC\uB824\uBA74 \uD074\uB9AD\uD558\uC138\uC694","finishLine":"\uB05D\uB0B4\uB824\uBA74 \uAE30\uC874 \uB9C8\uCEE4\uB97C \uD074\uB9AD\uD558\uC138\uC694","finishPoly":"\uB05D\uB0B4\uB824\uBA74 \uCC98\uC74C \uB9C8\uCEE4\uB97C \uD074\uB9AD\uD558\uC138\uC694","finishRect":"\uB05D\uB0B4\uB824\uBA74 \uD074\uB9AD\uD558\uC138\uC694","startCircle":"\uC6D0\uC758 \uC911\uC2EC\uC774 \uB420 \uC704\uCE58\uB97C \uD074\uB9AD\uD558\uC138\uC694","finishCircle":"\uC6D0\uC744 \uB05D\uB0B4\uB824\uBA74 \uD074\uB9AD\uD558\uC138\uC694","placeCircleMarker":"\uC6D0 \uB9C8\uCEE4 \uC704\uCE58\uB97C \uD074\uB9AD\uD558\uC138\uC694","placeText":"\uD14D\uC2A4\uD2B8 \uC704\uCE58\uB97C \uD074\uB9AD\uD558\uC138\uC694"},"actions":{"finish":"\uB05D\uB0B4\uAE30","cancel":"\uCDE8\uC18C","removeLastVertex":"\uB9C8\uC9C0\uB9C9 \uAF2D\uC9C0\uC810 \uC81C\uAC70"},"buttonTitles":{"drawMarkerButton":"\uB9C8\uCEE4 \uADF8\uB9AC\uAE30","drawPolyButton":"\uB2E4\uAC01\uD615 \uADF8\uB9AC\uAE30","drawLineButton":"\uB2E4\uAC01\uC120 \uADF8\uB9AC\uAE30","drawCircleButton":"\uC6D0 \uADF8\uB9AC\uAE30","drawRectButton":"\uC9C1\uC0AC\uAC01\uD615 \uADF8\uB9AC\uAE30","editButton":"\uB808\uC774\uC5B4 \uD3B8\uC9D1\uD558\uAE30","dragButton":"\uB808\uC774\uC5B4 \uB04C\uAE30","cutButton":"\uB808\uC774\uC5B4 \uC790\uB974\uAE30","deleteButton":"\uB808\uC774\uC5B4 \uC81C\uAC70\uD558\uAE30","drawCircleMarkerButton":"\uC6D0 \uB9C8\uCEE4 \uADF8\uB9AC\uAE30","snappingButton":"\uC7A1\uC544\uB048 \uB9C8\uCEE4\uB97C \uB2E4\uB978 \uB808\uC774\uC5B4 \uBC0F \uAF2D\uC9C0\uC810\uC5D0 \uB4E4\uB7EC\uBD99\uAC8C \uD558\uAE30","pinningButton":"\uACF5\uC720 \uAF2D\uC9C0\uC810\uC744 \uD568\uAED8 \uCC0D\uAE30","rotateButton":"\uB808\uC774\uC5B4 \uD68C\uC804\uD558\uAE30","drawTextButton":"\uD14D\uC2A4\uD2B8 \uADF8\uB9AC\uAE30"}}') };
    function m(t3, e3) {
      var i3 = Object.keys(t3);
      if (Object.getOwnPropertySymbols) {
        var n2 = Object.getOwnPropertySymbols(t3);
        e3 && (n2 = n2.filter(function(e4) {
          return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
        })), i3.push.apply(i3, n2);
      }
      return i3;
    }
    function y(t3) {
      for (var e3 = 1; e3 < arguments.length; e3++) {
        var i3 = null != arguments[e3] ? arguments[e3] : {};
        e3 % 2 ? m(Object(i3), true).forEach(function(e4) {
          v(t3, e4, i3[e4]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(i3)) : m(Object(i3)).forEach(function(e4) {
          Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(i3, e4));
        });
      }
      return t3;
    }
    function v(t3, e3, i3) {
      return e3 in t3 ? Object.defineProperty(t3, e3, { value: i3, enumerable: true, configurable: true, writable: true }) : t3[e3] = i3, t3;
    }
    const b = { _globalEditModeEnabled: false, enableGlobalEditMode: function(t3) {
      var e3 = y({}, t3);
      this._globalEditModeEnabled = true, this.Toolbar.toggleButton("editMode", this.globalEditModeEnabled()), L.PM.Utils.findLayers(this.map).forEach(function(t4) {
        t4.pm.enable(e3);
      }), this.throttledReInitEdit || (this.throttledReInitEdit = L.Util.throttle(this.handleLayerAdditionInGlobalEditMode, 100, this)), this._addedLayers = {}, this.map.on("layeradd", this._layerAdded, this), this.map.on("layeradd", this.throttledReInitEdit, this), this._fireGlobalEditModeToggled(true);
    }, disableGlobalEditMode: function() {
      this._globalEditModeEnabled = false, L.PM.Utils.findLayers(this.map).forEach(function(t3) {
        t3.pm.disable();
      }), this.map.off("layeradd", this.throttledReInitEdit, this), this.Toolbar.toggleButton("editMode", this.globalEditModeEnabled()), this._fireGlobalEditModeToggled(false);
    }, globalEditEnabled: function() {
      return this.globalEditModeEnabled();
    }, globalEditModeEnabled: function() {
      return this._globalEditModeEnabled;
    }, toggleGlobalEditMode: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.globalOptions;
      this.globalEditModeEnabled() ? this.disableGlobalEditMode() : this.enableGlobalEditMode(t3);
    }, handleLayerAdditionInGlobalEditMode: function() {
      var t3 = this._addedLayers;
      for (var e3 in this._addedLayers = {}, t3) {
        var i3 = t3[e3];
        this._isRelevantForEdit(i3) && this.globalEditModeEnabled() && i3.pm.enable(y({}, this.globalOptions));
      }
    }, _layerAdded: function(t3) {
      var e3 = t3.layer;
      this._addedLayers[L.stamp(e3)] = e3;
    }, _isRelevantForEdit: function(t3) {
      return t3.pm && !(t3 instanceof L.LayerGroup) && (!L.PM.optIn && !t3.options.pmIgnore || L.PM.optIn && false === t3.options.pmIgnore) && !t3._pmTempLayer && t3.pm.options.allowEditing;
    } };
    const k = { _globalDragModeEnabled: false, enableGlobalDragMode: function() {
      var t3 = L.PM.Utils.findLayers(this.map);
      this._globalDragModeEnabled = true, this._addedLayersDrag = {}, t3.forEach(function(t4) {
        t4.pm.enableLayerDrag();
      }), this.throttledReInitDrag || (this.throttledReInitDrag = L.Util.throttle(this.reinitGlobalDragMode, 100, this)), this.map.on("layeradd", this._layerAddedDrag, this), this.map.on("layeradd", this.throttledReInitDrag, this), this.Toolbar.toggleButton("dragMode", this.globalDragModeEnabled()), this._fireGlobalDragModeToggled(true);
    }, disableGlobalDragMode: function() {
      var t3 = L.PM.Utils.findLayers(this.map);
      this._globalDragModeEnabled = false, t3.forEach(function(t4) {
        t4.pm.disableLayerDrag();
      }), this.map.off("layeradd", this._layerAddedDrag, this), this.map.off("layeradd", this.throttledReInitDrag, this), this.Toolbar.toggleButton("dragMode", this.globalDragModeEnabled()), this._fireGlobalDragModeToggled(false);
    }, globalDragModeEnabled: function() {
      return !!this._globalDragModeEnabled;
    }, toggleGlobalDragMode: function() {
      this.globalDragModeEnabled() ? this.disableGlobalDragMode() : this.enableGlobalDragMode();
    }, reinitGlobalDragMode: function() {
      var t3 = this._addedLayersDrag;
      for (var e3 in this._addedLayersDrag = {}, t3) {
        var i3 = t3[e3];
        this._isRelevantForDrag(i3) && this.globalDragModeEnabled() && i3.pm.enableLayerDrag();
      }
    }, _layerAddedDrag: function(t3) {
      var e3 = t3.layer;
      this._addedLayersDrag[L.stamp(e3)] = e3;
    }, _isRelevantForDrag: function(t3) {
      return t3.pm && !(t3 instanceof L.LayerGroup) && (!L.PM.optIn && !t3.options.pmIgnore || L.PM.optIn && false === t3.options.pmIgnore) && !t3._pmTempLayer && t3.pm.options.draggable;
    } };
    const M = { _globalRemovalModeEnabled: false, enableGlobalRemovalMode: function() {
      var t3 = this;
      this._globalRemovalModeEnabled = true, this.map.eachLayer(function(e3) {
        t3._isRelevantForRemoval(e3) && (e3.pm.disable(), e3.on("click", t3.removeLayer, t3));
      }), this.throttledReInitRemoval || (this.throttledReInitRemoval = L.Util.throttle(this.reinitGlobalRemovalMode, 100, this)), this.map.on("layeradd", this.throttledReInitRemoval, this), this.Toolbar.toggleButton("removalMode", this.globalRemovalModeEnabled()), this._fireGlobalRemovalModeToggled(true);
    }, disableGlobalRemovalMode: function() {
      var t3 = this;
      this._globalRemovalModeEnabled = false, this.map.eachLayer(function(e3) {
        e3.off("click", t3.removeLayer, t3);
      }), this.map.off("layeradd", this.throttledReInitRemoval, this), this.Toolbar.toggleButton("removalMode", this.globalRemovalModeEnabled()), this._fireGlobalRemovalModeToggled(false);
    }, globalRemovalEnabled: function() {
      return this.globalRemovalModeEnabled();
    }, globalRemovalModeEnabled: function() {
      return !!this._globalRemovalModeEnabled;
    }, toggleGlobalRemovalMode: function() {
      this.globalRemovalModeEnabled() ? this.disableGlobalRemovalMode() : this.enableGlobalRemovalMode();
    }, reinitGlobalRemovalMode: function(t3) {
      var e3 = t3.layer;
      this._isRelevantForRemoval(e3) && this.globalRemovalModeEnabled() && (this.disableGlobalRemovalMode(), this.enableGlobalRemovalMode());
    }, removeLayer: function(t3) {
      var e3 = t3.target;
      this._isRelevantForRemoval(e3) && !e3.pm.dragging() && (e3.removeFrom(this.map.pm._getContainingLayer()), e3.remove(), e3 instanceof L.LayerGroup ? (this._fireRemoveLayerGroup(e3), this._fireRemoveLayerGroup(this.map, e3)) : (e3.pm._fireRemove(e3), e3.pm._fireRemove(this.map, e3)));
    }, _isRelevantForRemoval: function(t3) {
      return t3.pm && !(t3 instanceof L.LayerGroup) && (!L.PM.optIn && !t3.options.pmIgnore || L.PM.optIn && false === t3.options.pmIgnore) && !t3._pmTempLayer && t3.pm.options.allowRemoval;
    } };
    const x = { _globalRotateModeEnabled: false, enableGlobalRotateMode: function() {
      var t3 = this;
      this._globalRotateModeEnabled = true, L.PM.Utils.findLayers(this.map).filter(function(t4) {
        return t4 instanceof L.Polyline;
      }).forEach(function(e3) {
        t3._isRelevantForRotate(e3) && e3.pm.enableRotate();
      }), this.throttledReInitRotate || (this.throttledReInitRotate = L.Util.throttle(this._reinitGlobalRotateMode, 100, this)), this.map.on("layeradd", this.throttledReInitRotate, this), this.Toolbar.toggleButton("rotateMode", this.globalRotateModeEnabled()), this._fireGlobalRotateModeToggled();
    }, disableGlobalRotateMode: function() {
      this._globalRotateModeEnabled = false, L.PM.Utils.findLayers(this.map).filter(function(t3) {
        return t3 instanceof L.Polyline;
      }).forEach(function(t3) {
        t3.pm.disableRotate();
      }), this.map.off("layeradd", this.throttledReInitRotate, this), this.Toolbar.toggleButton("rotateMode", this.globalRotateModeEnabled()), this._fireGlobalRotateModeToggled();
    }, globalRotateModeEnabled: function() {
      return !!this._globalRotateModeEnabled;
    }, toggleGlobalRotateMode: function() {
      this.globalRotateModeEnabled() ? this.disableGlobalRotateMode() : this.enableGlobalRotateMode();
    }, _reinitGlobalRotateMode: function(t3) {
      var e3 = t3.layer;
      this._isRelevantForRotate(e3) && this.globalRotateModeEnabled() && (this.disableGlobalRotateMode(), this.enableGlobalRotateMode());
    }, _isRelevantForRotate: function(t3) {
      return t3.pm && !(t3 instanceof L.LayerGroup) && (!L.PM.optIn && !t3.options.pmIgnore || L.PM.optIn && false === t3.options.pmIgnore) && !t3._pmTempLayer && t3.pm.options.allowRotation;
    } };
    function w(t3, e3) {
      var i3 = Object.keys(t3);
      if (Object.getOwnPropertySymbols) {
        var n2 = Object.getOwnPropertySymbols(t3);
        e3 && (n2 = n2.filter(function(e4) {
          return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
        })), i3.push.apply(i3, n2);
      }
      return i3;
    }
    function C(t3) {
      for (var e3 = 1; e3 < arguments.length; e3++) {
        var i3 = null != arguments[e3] ? arguments[e3] : {};
        e3 % 2 ? w(Object(i3), true).forEach(function(e4) {
          P(t3, e4, i3[e4]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(i3)) : w(Object(i3)).forEach(function(e4) {
          Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(i3, e4));
        });
      }
      return t3;
    }
    function P(t3, e3, i3) {
      return e3 in t3 ? Object.defineProperty(t3, e3, { value: i3, enumerable: true, configurable: true, writable: true }) : t3[e3] = i3, t3;
    }
    var E = { _fireDrawStart: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "Draw", e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.__fire(this._map, "pm:drawstart", { shape: this._shape, workingLayer: this._layer }, t3, e3);
    }, _fireDrawEnd: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "Draw", e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.__fire(this._map, "pm:drawend", { shape: this._shape }, t3, e3);
    }, _fireCreate: function(t3) {
      var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Draw", i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.__fire(this._map, "pm:create", { shape: this._shape, marker: t3, layer: t3 }, e3, i3);
    }, _fireCenterPlaced: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "Draw", e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i3 = "Draw" === t3 ? this._layer : void 0, n2 = "Draw" !== t3 ? this._layer : void 0;
      this.__fire(this._layer, "pm:centerplaced", { shape: this._shape, workingLayer: i3, layer: n2, latlng: this._layer.getLatLng() }, t3, e3);
    }, _fireCut: function(t3, e3, i3) {
      var n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "Draw", r2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
      this.__fire(t3, "pm:cut", { shape: this._shape, layer: e3, originalLayer: i3 }, n2, r2);
    }, _fireEdit: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this._layer, e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Edit", i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.__fire(t3, "pm:edit", { layer: this._layer, shape: this.getShape() }, e3, i3);
    }, _fireEnable: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "Edit", e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.__fire(this._layer, "pm:enable", { layer: this._layer, shape: this.getShape() }, t3, e3);
    }, _fireDisable: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "Edit", e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.__fire(this._layer, "pm:disable", { layer: this._layer, shape: this.getShape() }, t3, e3);
    }, _fireUpdate: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "Edit", e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.__fire(this._layer, "pm:update", { layer: this._layer, shape: this.getShape() }, t3, e3);
    }, _fireMarkerDragStart: function(t3) {
      var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "Edit", n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      this.__fire(this._layer, "pm:markerdragstart", { layer: this._layer, markerEvent: t3, shape: this.getShape(), indexPath: e3 }, i3, n2);
    }, _fireMarkerDrag: function(t3) {
      var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "Edit", n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      this.__fire(this._layer, "pm:markerdrag", { layer: this._layer, markerEvent: t3, shape: this.getShape(), indexPath: e3 }, i3, n2);
    }, _fireMarkerDragEnd: function(t3) {
      var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "Edit", r2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
      this.__fire(this._layer, "pm:markerdragend", { layer: this._layer, markerEvent: t3, shape: this.getShape(), indexPath: e3, intersectionReset: i3 }, n2, r2);
    }, _fireDragStart: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "Edit", e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.__fire(this._layer, "pm:dragstart", { layer: this._layer, shape: this.getShape() }, t3, e3);
    }, _fireDrag: function(t3) {
      var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Edit", i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.__fire(this._layer, "pm:drag", C(C({}, t3), {}, { shape: this.getShape() }), e3, i3);
    }, _fireDragEnd: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "Edit", e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.__fire(this._layer, "pm:dragend", { layer: this._layer, shape: this.getShape() }, t3, e3);
    }, _fireDragEnable: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "Edit", e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.__fire(this._layer, "pm:dragenable", { layer: this._layer, shape: this.getShape() }, t3, e3);
    }, _fireDragDisable: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "Edit", e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.__fire(this._layer, "pm:dragdisable", { layer: this._layer, shape: this.getShape() }, t3, e3);
    }, _fireRemove: function(t3) {
      var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t3, i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "Edit", n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      this.__fire(t3, "pm:remove", { layer: e3, shape: this.getShape() }, i3, n2);
    }, _fireVertexAdded: function(t3, e3, i3) {
      var n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "Edit", r2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
      this.__fire(this._layer, "pm:vertexadded", { layer: this._layer, workingLayer: this._layer, marker: t3, indexPath: e3, latlng: i3, shape: this.getShape() }, n2, r2);
    }, _fireVertexRemoved: function(t3, e3) {
      var i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "Edit", n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      this.__fire(this._layer, "pm:vertexremoved", { layer: this._layer, marker: t3, indexPath: e3, shape: this.getShape() }, i3, n2);
    }, _fireVertexClick: function(t3, e3) {
      var i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "Edit", n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      this.__fire(this._layer, "pm:vertexclick", { layer: this._layer, markerEvent: t3, indexPath: e3, shape: this.getShape() }, i3, n2);
    }, _fireIntersect: function(t3) {
      var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Edit", i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.__fire(this._layer, "pm:intersect", { layer: this._layer, intersection: t3, shape: this.getShape() }, e3, i3);
    }, _fireLayerReset: function(t3, e3) {
      var i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "Edit", n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      this.__fire(this._layer, "pm:layerreset", { layer: this._layer, markerEvent: t3, indexPath: e3, shape: this.getShape() }, i3, n2);
    }, _fireChange: function(t3) {
      var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Edit", i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.__fire(this._layer, "pm:change", { layer: this._layer, latlngs: t3, shape: this.getShape() }, e3, i3);
    }, _fireTextChange: function(t3) {
      var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Edit", i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.__fire(this._layer, "pm:textchange", { layer: this._layer, text: t3, shape: this.getShape() }, e3, i3);
    }, _fireTextFocus: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "Edit", e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.__fire(this._layer, "pm:textfocus", { layer: this._layer, shape: this.getShape() }, t3, e3);
    }, _fireTextBlur: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "Edit", e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.__fire(this._layer, "pm:textblur", { layer: this._layer, shape: this.getShape() }, t3, e3);
    }, _fireSnapDrag: function(t3, e3) {
      var i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "Snapping", n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      this.__fire(t3, "pm:snapdrag", e3, i3, n2);
    }, _fireSnap: function(t3, e3) {
      var i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "Snapping", n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      this.__fire(t3, "pm:snap", e3, i3, n2);
    }, _fireUnsnap: function(t3, e3) {
      var i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "Snapping", n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      this.__fire(t3, "pm:unsnap", e3, i3, n2);
    }, _fireRotationEnable: function(t3, e3) {
      var i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "Rotation", n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      this.__fire(t3, "pm:rotateenable", { layer: this._layer, helpLayer: this._rotatePoly, shape: this.getShape() }, i3, n2);
    }, _fireRotationDisable: function(t3) {
      var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Rotation", i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.__fire(t3, "pm:rotatedisable", { layer: this._layer, shape: this.getShape() }, e3, i3);
    }, _fireRotationStart: function(t3, e3) {
      var i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "Rotation", n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      this.__fire(t3, "pm:rotatestart", { layer: this._rotationLayer, helpLayer: this._layer, startAngle: this._startAngle, originLatLngs: e3 }, i3, n2);
    }, _fireRotation: function(t3, e3, i3) {
      var n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : this._rotationLayer, r2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "Rotation", a2 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
      this.__fire(t3, "pm:rotate", { layer: n2, helpLayer: this._layer, startAngle: this._startAngle, angle: n2.pm.getAngle(), angleDiff: e3, oldLatLngs: i3, newLatLngs: n2.getLatLngs() }, r2, a2);
    }, _fireRotationEnd: function(t3, e3, i3) {
      var n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "Rotation", r2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
      this.__fire(t3, "pm:rotateend", { layer: this._rotationLayer, helpLayer: this._layer, startAngle: e3, angle: this._rotationLayer.pm.getAngle(), originLatLngs: i3, newLatLngs: this._rotationLayer.getLatLngs() }, n2, r2);
    }, _fireActionClick: function(t3, e3, i3) {
      var n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "Toolbar", r2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
      this.__fire(this._map, "pm:actionclick", { text: t3.text, action: t3, btnName: e3, button: i3 }, n2, r2);
    }, _fireButtonClick: function(t3, e3) {
      var i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "Toolbar", n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      this.__fire(this._map, "pm:buttonclick", { btnName: t3, button: e3 }, i3, n2);
    }, _fireLangChange: function(t3, e3, i3, n2) {
      var r2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "Global", a2 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
      this.__fire(this.map, "pm:langchange", { oldLang: t3, activeLang: e3, fallback: i3, translations: n2 }, r2, a2);
    }, _fireGlobalDragModeToggled: function(t3) {
      var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Global", i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.__fire(this.map, "pm:globaldragmodetoggled", { enabled: t3, map: this.map }, e3, i3);
    }, _fireGlobalEditModeToggled: function(t3) {
      var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Global", i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.__fire(this.map, "pm:globaleditmodetoggled", { enabled: t3, map: this.map }, e3, i3);
    }, _fireGlobalRemovalModeToggled: function(t3) {
      var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Global", i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.__fire(this.map, "pm:globalremovalmodetoggled", { enabled: t3, map: this.map }, e3, i3);
    }, _fireGlobalCutModeToggled: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "Global", e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.__fire(this._map, "pm:globalcutmodetoggled", { enabled: !!this._enabled, map: this._map }, t3, e3);
    }, _fireGlobalDrawModeToggled: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "Global", e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.__fire(this._map, "pm:globaldrawmodetoggled", { enabled: this._enabled, shape: this._shape, map: this._map }, t3, e3);
    }, _fireGlobalRotateModeToggled: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "Global", e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.__fire(this.map, "pm:globalrotatemodetoggled", { enabled: this.globalRotateModeEnabled(), map: this.map }, t3, e3);
    }, _fireRemoveLayerGroup: function(t3) {
      var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t3, i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "Edit", n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      this.__fire(t3, "pm:remove", { layer: e3, shape: void 0 }, i3, n2);
    }, _fireKeyeventEvent: function(t3, e3, i3) {
      var n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "Global", r2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
      this.__fire(this.map, "pm:keyevent", { event: t3, eventType: e3, focusOn: i3 }, n2, r2);
    }, __fire: function(t3, e3, i3, n2) {
      var a2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
      i3 = r()(i3, a2, { source: n2 }), L.PM.Utils._fireEvent(t3, e3, i3);
    } };
    const S = E;
    const O = { _lastEvents: { keydown: void 0, keyup: void 0, current: void 0 }, _initKeyListener: function(t3) {
      this.map = t3, L.DomEvent.on(document, "keydown keyup", this._onKeyListener, this), L.DomEvent.on(window, "blur", this._onBlur, this);
    }, _onKeyListener: function(t3) {
      var e3 = "document";
      this.map.getContainer().contains(t3.target) && (e3 = "map");
      var i3 = { event: t3, eventType: t3.type, focusOn: e3 };
      this._lastEvents[t3.type] = i3, this._lastEvents.current = i3, this.map.pm._fireKeyeventEvent(t3, t3.type, e3);
    }, _onBlur: function(t3) {
      t3.altKey = false;
      var e3 = { event: t3, eventType: t3.type, focusOn: "document" };
      this._lastEvents[t3.type] = e3, this._lastEvents.current = e3;
    }, getLastKeyEvent: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "current";
      return this._lastEvents[t3];
    }, isShiftKeyPressed: function() {
      var t3;
      return null === (t3 = this._lastEvents.current) || void 0 === t3 ? void 0 : t3.event.shiftKey;
    }, isAltKeyPressed: function() {
      var t3;
      return null === (t3 = this._lastEvents.current) || void 0 === t3 ? void 0 : t3.event.altKey;
    }, isCtrlKeyPressed: function() {
      var t3;
      return null === (t3 = this._lastEvents.current) || void 0 === t3 ? void 0 : t3.event.ctrlKey;
    }, isMetaKeyPressed: function() {
      var t3;
      return null === (t3 = this._lastEvents.current) || void 0 === t3 ? void 0 : t3.event.metaKey;
    }, getPressedKey: function() {
      var t3;
      return null === (t3 = this._lastEvents.current) || void 0 === t3 ? void 0 : t3.event.key;
    } };
    var D = i2(7361), B = i2.n(D), R = i2(8721), T = i2.n(R);
    function I(t3) {
      var e3 = L.PM.activeLang;
      return T()(_, e3) || (e3 = "en"), B()(_[e3], t3);
    }
    function j(t3) {
      for (var e3 = 0; e3 < t3.length; e3 += 1) {
        var i3 = t3[e3];
        if (Array.isArray(i3)) {
          if (j(i3))
            return true;
        } else if (null !== i3 && i3 !== void 0 && "" !== i3)
          return true;
      }
      return false;
    }
    function A(t3) {
      return t3.reduce(function(t4, e3) {
        if (0 !== e3.length) {
          var i3 = Array.isArray(e3) ? A(e3) : e3;
          Array.isArray(i3) ? 0 !== i3.length && t4.push(i3) : t4.push(i3);
        }
        return t4;
      }, []);
    }
    function G(t3, e3, i3) {
      for (var n2, r2, a2, o2 = 6378137, s2 = 63567523142e-4, l2 = 1 / 298.257223563, h2 = t3.lng, u2 = t3.lat, c2 = i3, p2 = Math.PI, d2 = e3 * p2 / 180, f2 = Math.sin(d2), g2 = Math.cos(d2), _2 = (1 - l2) * Math.tan(u2 * p2 / 180), m2 = 1 / Math.sqrt(1 + _2 * _2), y2 = _2 * m2, v2 = Math.atan2(_2, g2), b2 = m2 * f2, k2 = 1 - b2 * b2, M2 = k2 * (o2 * o2 - s2 * s2) / (s2 * s2), x2 = 1 + M2 / 16384 * (4096 + M2 * (M2 * (320 - 175 * M2) - 768)), w2 = M2 / 1024 * (256 + M2 * (M2 * (74 - 47 * M2) - 128)), C2 = c2 / (s2 * x2), P2 = 2 * Math.PI; Math.abs(C2 - P2) > 1e-12; ) {
        n2 = Math.cos(2 * v2 + C2), P2 = C2, C2 = c2 / (s2 * x2) + w2 * (r2 = Math.sin(C2)) * (n2 + w2 / 4 * ((a2 = Math.cos(C2)) * (2 * n2 * n2 - 1) - w2 / 6 * n2 * (4 * r2 * r2 - 3) * (4 * n2 * n2 - 3)));
      }
      var E2 = y2 * r2 - m2 * a2 * g2, S2 = Math.atan2(y2 * a2 + m2 * r2 * g2, (1 - l2) * Math.sqrt(b2 * b2 + E2 * E2)), O2 = l2 / 16 * k2 * (4 + l2 * (4 - 3 * k2)), D2 = h2 + 180 * (Math.atan2(r2 * f2, m2 * a2 - y2 * r2 * g2) - (1 - O2) * l2 * b2 * (C2 + O2 * r2 * (n2 + O2 * a2 * (2 * n2 * n2 - 1)))) / p2, B2 = 180 * S2 / p2;
      return L.latLng(D2, B2);
    }
    function N(t3, e3, i3, n2) {
      for (var r2, a2, o2 = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4], s2 = [], l2 = 0; l2 < i3; l2 += 1) {
        if (o2)
          r2 = G(t3, 360 * l2 / i3 + n2, e3), a2 = L.latLng(r2.lng, r2.lat);
        else {
          var h2 = t3.lat + Math.cos(2 * l2 * Math.PI / i3) * e3, u2 = t3.lng + Math.sin(2 * l2 * Math.PI / i3) * e3;
          a2 = L.latLng(h2, u2);
        }
        s2.push(a2);
      }
      return s2;
    }
    function z(t3, e3, i3, n2) {
      var r2 = function(t4, e4, i4) {
        var n3 = t4.latLngToContainerPoint(e4), r3 = t4.latLngToContainerPoint(i4), a2 = 180 * Math.atan2(r3.y - n3.y, r3.x - n3.x) / Math.PI + 90;
        return a2 + (a2 < 0 ? 360 : 0);
      }(t3, e3, i3);
      return function(t4, e4, i4) {
        e4 = (e4 + 360) % 360;
        var n3 = Math.PI / 180, r3 = 180 / Math.PI, a2 = 6378137, o2 = t4.lng * n3, s2 = t4.lat * n3, l2 = e4 * n3, h2 = Math.sin(s2), u2 = Math.cos(s2), c2 = Math.cos(i4 / a2), p2 = Math.sin(i4 / a2), d2 = Math.asin(h2 * c2 + u2 * p2 * Math.cos(l2)), f2 = o2 + Math.atan2(Math.sin(l2) * p2 * u2, c2 - h2 * Math.sin(d2));
        return f2 = (f2 *= r3) > 180 ? f2 - 360 : f2 < -180 ? f2 + 360 : f2, L.latLng([d2 * r3, f2]);
      }(e3, r2, n2);
    }
    function F(t3, e3) {
      var i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "asc";
      if (!e3 || 0 === Object.keys(e3).length)
        return function(t4, e4) {
          return t4 - e4;
        };
      for (var n2, r2 = Object.keys(e3), a2 = r2.length - 1, o2 = {}; a2 >= 0; )
        n2 = r2[a2], o2[n2.toLowerCase()] = e3[n2], a2 -= 1;
      function s2(t4) {
        return t4 instanceof L.Marker ? "Marker" : t4 instanceof L.Circle ? "Circle" : t4 instanceof L.CircleMarker ? "CircleMarker" : t4 instanceof L.Rectangle ? "Rectangle" : t4 instanceof L.Polygon ? "Polygon" : t4 instanceof L.Polyline ? "Line" : void 0;
      }
      return function(e4, n3) {
        var r3, a3;
        if ("instanceofShape" === t3) {
          if (r3 = s2(e4.layer).toLowerCase(), a3 = s2(n3.layer).toLowerCase(), !r3 || !a3)
            return 0;
        } else {
          if (!e4.hasOwnProperty(t3) || !n3.hasOwnProperty(t3))
            return 0;
          r3 = e4[t3].toLowerCase(), a3 = n3[t3].toLowerCase();
        }
        var l2 = r3 in o2 ? o2[r3] : Number.MAX_SAFE_INTEGER, h2 = a3 in o2 ? o2[a3] : Number.MAX_SAFE_INTEGER, u2 = 0;
        return l2 < h2 ? u2 = -1 : l2 > h2 && (u2 = 1), "desc" === i3 ? -1 * u2 : u2;
      };
    }
    function U(t3) {
      var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t3.getLatLngs();
      return t3 instanceof L.Polygon ? L.polygon(e3).getLatLngs() : L.polyline(e3).getLatLngs();
    }
    function V(t3, e3) {
      var i3, n2;
      if (null !== (i3 = e3.options.crs) && void 0 !== i3 && null !== (n2 = i3.projection) && void 0 !== n2 && n2.MAX_LATITUDE) {
        var r2, a2, o2 = null === (r2 = e3.options.crs) || void 0 === r2 || null === (a2 = r2.projection) || void 0 === a2 ? void 0 : a2.MAX_LATITUDE;
        t3.lat = Math.max(Math.min(o2, t3.lat), -o2);
      }
      return t3;
    }
    function K(t3) {
      return t3.options.renderer || t3._map && (t3._map._getPaneRenderer(t3.options.pane) || t3._map.options.renderer || t3._map._renderer) || t3._renderer;
    }
    const H = L.Class.extend({ includes: [b, k, M, x, S], initialize: function(t3) {
      this.map = t3, this.Draw = new L.PM.Draw(t3), this.Toolbar = new L.PM.Toolbar(t3), this.Keyboard = O, this.globalOptions = { snappable: true, layerGroup: void 0, snappingOrder: ["Marker", "CircleMarker", "Circle", "Line", "Polygon", "Rectangle"], panes: { vertexPane: "markerPane", layerPane: "overlayPane", markerPane: "markerPane" }, draggable: true }, this.Keyboard._initKeyListener(t3);
    }, setLang: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "en", e3 = arguments.length > 1 ? arguments[1] : void 0, i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "en", n2 = L.PM.activeLang;
      e3 && (_[t3] = r()(_[i3], e3)), L.PM.activeLang = t3, this.map.pm.Toolbar.reinit(), this._fireLangChange(n2, t3, i3, _[t3]);
    }, addControls: function(t3) {
      this.Toolbar.addControls(t3);
    }, removeControls: function() {
      this.Toolbar.removeControls();
    }, toggleControls: function() {
      this.Toolbar.toggleControls();
    }, controlsVisible: function() {
      return this.Toolbar.isVisible;
    }, enableDraw: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "Polygon", e3 = arguments.length > 1 ? arguments[1] : void 0;
      "Poly" === t3 && (t3 = "Polygon"), this.Draw.enable(t3, e3);
    }, disableDraw: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "Polygon";
      "Poly" === t3 && (t3 = "Polygon"), this.Draw.disable(t3);
    }, setPathOptions: function(t3) {
      var e3 = this, i3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n2 = i3.ignoreShapes || [], r2 = i3.merge || false;
      this.map.pm.Draw.shapes.forEach(function(i4) {
        -1 === n2.indexOf(i4) && e3.map.pm.Draw[i4].setPathOptions(t3, r2);
      });
    }, getGlobalOptions: function() {
      return this.globalOptions;
    }, setGlobalOptions: function(t3) {
      var e3 = this, i3 = r()(this.globalOptions, t3), n2 = false;
      this.map.pm.Draw.CircleMarker.enabled() && !!this.map.pm.Draw.CircleMarker.options.editable != !!i3.editable && (this.map.pm.Draw.CircleMarker.disable(), n2 = true), this.map.pm.Draw.shapes.forEach(function(t4) {
        e3.map.pm.Draw[t4].setOptions(i3);
      }), n2 && this.map.pm.Draw.CircleMarker.enable(), L.PM.Utils.findLayers(this.map).forEach(function(t4) {
        t4.pm.setOptions(i3);
      }), this.map.fire("pm:globaloptionschanged"), this.globalOptions = i3, this.applyGlobalOptions();
    }, applyGlobalOptions: function() {
      L.PM.Utils.findLayers(this.map).forEach(function(t3) {
        t3.pm.enabled() && t3.pm.applyOptions();
      });
    }, globalDrawModeEnabled: function() {
      return !!this.Draw.getActiveShape();
    }, globalCutModeEnabled: function() {
      return !!this.Draw.Cut.enabled();
    }, enableGlobalCutMode: function(t3) {
      return this.Draw.Cut.enable(t3);
    }, toggleGlobalCutMode: function(t3) {
      return this.Draw.Cut.toggle(t3);
    }, disableGlobalCutMode: function() {
      return this.Draw.Cut.disable();
    }, getGeomanLayers: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], e3 = L.PM.Utils.findLayers(this.map);
      if (!t3)
        return e3;
      var i3 = L.featureGroup();
      return i3._pmTempLayer = true, e3.forEach(function(t4) {
        i3.addLayer(t4);
      }), i3;
    }, getGeomanDrawLayers: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], e3 = L.PM.Utils.findLayers(this.map).filter(function(t4) {
        return true === t4._drawnByGeoman;
      });
      if (!t3)
        return e3;
      var i3 = L.featureGroup();
      return i3._pmTempLayer = true, e3.forEach(function(t4) {
        i3.addLayer(t4);
      }), i3;
    }, _getContainingLayer: function() {
      return this.globalOptions.layerGroup && this.globalOptions.layerGroup instanceof L.LayerGroup ? this.globalOptions.layerGroup : this.map;
    }, _isCRSSimple: function() {
      return this.map.options.crs === L.CRS.Simple;
    }, _touchEventCounter: 0, _addTouchEvents: function(t3) {
      0 === this._touchEventCounter && (L.DomEvent.on(t3, "touchmove", this._canvasTouchMove, this), L.DomEvent.on(t3, "touchstart touchend touchcancel", this._canvasTouchClick, this)), this._touchEventCounter += 1;
    }, _removeTouchEvents: function(t3) {
      1 === this._touchEventCounter && (L.DomEvent.off(t3, "touchmove", this._canvasTouchMove, this), L.DomEvent.off(t3, "touchstart touchend touchcancel", this._canvasTouchClick, this)), this._touchEventCounter = this._touchEventCounter <= 1 ? 0 : this._touchEventCounter - 1;
    }, _canvasTouchMove: function(t3) {
      K(this.map)._onMouseMove(this._createMouseEvent("mousemove", t3));
    }, _canvasTouchClick: function(t3) {
      var e3 = "";
      "touchstart" === t3.type || "pointerdown" === t3.type ? e3 = "mousedown" : "touchend" === t3.type || "pointerup" === t3.type ? e3 = "mouseup" : "touchcancel" !== t3.type && "pointercancel" !== t3.type || (e3 = "mouseup"), e3 && K(this.map)._onClick(this._createMouseEvent(e3, t3));
    }, _createMouseEvent: function(t3, e3) {
      var i3, n2 = e3.touches[0] || e3.changedTouches[0];
      try {
        i3 = new MouseEvent(t3, { bubbles: e3.bubbles, cancelable: e3.cancelable, view: e3.view, detail: n2.detail, screenX: n2.screenX, screenY: n2.screenY, clientX: n2.clientX, clientY: n2.clientY, ctrlKey: e3.ctrlKey, altKey: e3.altKey, shiftKey: e3.shiftKey, metaKey: e3.metaKey, button: e3.button, relatedTarget: e3.relatedTarget });
      } catch (r2) {
        (i3 = document.createEvent("MouseEvents")).initMouseEvent(t3, e3.bubbles, e3.cancelable, e3.view, n2.detail, n2.screenX, n2.screenY, n2.clientX, n2.clientY, e3.ctrlKey, e3.altKey, e3.shiftKey, e3.metaKey, e3.button, e3.relatedTarget);
      }
      return i3;
    } });
    const q = L.Control.extend({ includes: [S], options: { position: "topleft", disableByOtherButtons: true }, initialize: function(t3) {
      this._button = L.Util.extend({}, this.options, t3);
    }, onAdd: function(t3) {
      return this._map = t3, this._map.pm.Toolbar.options.oneBlock ? this._container = this._map.pm.Toolbar._createContainer(this.options.position) : "edit" === this._button.tool ? this._container = this._map.pm.Toolbar.editContainer : "options" === this._button.tool ? this._container = this._map.pm.Toolbar.optionsContainer : "custom" === this._button.tool ? this._container = this._map.pm.Toolbar.customContainer : this._container = this._map.pm.Toolbar.drawContainer, this.buttonsDomNode = this._makeButton(this._button), this._container.appendChild(this.buttonsDomNode), this._container;
    }, onRemove: function() {
      return this.buttonsDomNode.remove(), this._container;
    }, getText: function() {
      return this._button.text;
    }, getIconUrl: function() {
      return this._button.iconUrl;
    }, destroy: function() {
      this._button = {}, this._update();
    }, toggle: function(t3) {
      return this._button.toggleStatus = "boolean" == typeof t3 ? t3 : !this._button.toggleStatus, this._applyStyleClasses(), this._button.toggleStatus;
    }, toggled: function() {
      return this._button.toggleStatus;
    }, onCreate: function() {
      this.toggle(false);
    }, disable: function() {
      this.toggle(false), this._button.disabled = true, this._updateDisabled();
    }, enable: function() {
      this._button.disabled = false, this._updateDisabled();
    }, _triggerClick: function(t3) {
      t3 && t3.preventDefault(), this._button.disabled || (this._button.onClick(t3, { button: this, event: t3 }), this._clicked(t3), this._button.afterClick(t3, { button: this, event: t3 }));
    }, _makeButton: function(t3) {
      var e3 = this, i3 = this.options.position.indexOf("right") > -1 ? "pos-right" : "", n2 = L.DomUtil.create("div", "button-container  ".concat(i3), this._container);
      t3.title && n2.setAttribute("title", t3.title);
      var r2 = L.DomUtil.create("a", "leaflet-buttons-control-button", n2);
      r2.setAttribute("role", "button"), r2.setAttribute("tabindex", "0"), r2.href = "#";
      var a2 = L.DomUtil.create("div", "leaflet-pm-actions-container ".concat(i3), n2), o2 = t3.actions, s2 = { cancel: { text: I("actions.cancel"), onClick: function() {
        this._triggerClick();
      } }, finishMode: { text: I("actions.finish"), onClick: function() {
        this._triggerClick();
      } }, removeLastVertex: { text: I("actions.removeLastVertex"), onClick: function() {
        this._map.pm.Draw[t3.jsClass]._removeLastVertex();
      } }, finish: { text: I("actions.finish"), onClick: function(e4) {
        this._map.pm.Draw[t3.jsClass]._finishShape(e4);
      } } };
      o2.forEach(function(n3) {
        var r3, o3 = "string" == typeof n3 ? n3 : n3.name;
        if (s2[o3])
          r3 = s2[o3];
        else {
          if (!n3.text)
            return;
          r3 = n3;
        }
        var l3 = L.DomUtil.create("a", "leaflet-pm-action ".concat(i3, " action-").concat(o3), a2);
        if (l3.setAttribute("role", "button"), l3.setAttribute("tabindex", "0"), l3.href = "#", l3.innerHTML = r3.text, L.DomEvent.disableClickPropagation(l3), L.DomEvent.on(l3, "click", L.DomEvent.stop), !t3.disabled && r3.onClick) {
          L.DomEvent.addListener(l3, "click", function(i4) {
            i4.preventDefault();
            var n4 = "", a3 = e3._map.pm.Toolbar.buttons;
            for (var o4 in a3)
              if (a3[o4]._button === t3) {
                n4 = o4;
                break;
              }
            e3._fireActionClick(r3, n4, t3);
          }, e3), L.DomEvent.addListener(l3, "click", r3.onClick, e3);
        }
      }), t3.toggleStatus && L.DomUtil.addClass(n2, "active");
      var l2 = L.DomUtil.create("div", "control-icon", r2);
      return t3.iconUrl && l2.setAttribute("src", t3.iconUrl), t3.className && L.DomUtil.addClass(l2, t3.className), L.DomEvent.disableClickPropagation(r2), L.DomEvent.on(r2, "click", L.DomEvent.stop), t3.disabled || (L.DomEvent.addListener(r2, "click", this._onBtnClick, this), L.DomEvent.addListener(r2, "click", this._triggerClick, this)), t3.disabled && (L.DomUtil.addClass(r2, "pm-disabled"), r2.setAttribute("aria-disabled", "true")), n2;
    }, _applyStyleClasses: function() {
      this._container && (this._button.toggleStatus && false !== this._button.cssToggle ? (L.DomUtil.addClass(this.buttonsDomNode, "active"), L.DomUtil.addClass(this._container, "activeChild")) : (L.DomUtil.removeClass(this.buttonsDomNode, "active"), L.DomUtil.removeClass(this._container, "activeChild")));
    }, _onBtnClick: function() {
      this._button.disableOtherButtons && this._map.pm.Toolbar.triggerClickOnToggledButtons(this);
      var t3 = "", e3 = this._map.pm.Toolbar.buttons;
      for (var i3 in e3)
        if (e3[i3]._button === this._button) {
          t3 = i3;
          break;
        }
      this._fireButtonClick(t3, this._button);
    }, _clicked: function() {
      this._button.doToggle && this.toggle();
    }, _updateDisabled: function() {
      if (this._container) {
        var t3 = "pm-disabled", e3 = this.buttonsDomNode.children[0];
        this._button.disabled ? (L.DomUtil.addClass(e3, t3), e3.setAttribute("aria-disabled", "true"), L.DomEvent.off(e3, "click", this._triggerClick, this), L.DomEvent.off(e3, "click", this._onBtnClick, this)) : (L.DomUtil.removeClass(e3, t3), e3.setAttribute("aria-disabled", "false"), L.DomEvent.on(e3, "click", this._triggerClick, this), L.DomEvent.on(e3, "click", this._onBtnClick, this));
      }
    } });
    function J(t3, e3) {
      var i3 = Object.keys(t3);
      if (Object.getOwnPropertySymbols) {
        var n2 = Object.getOwnPropertySymbols(t3);
        e3 && (n2 = n2.filter(function(e4) {
          return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
        })), i3.push.apply(i3, n2);
      }
      return i3;
    }
    function Y(t3) {
      for (var e3 = 1; e3 < arguments.length; e3++) {
        var i3 = null != arguments[e3] ? arguments[e3] : {};
        e3 % 2 ? J(Object(i3), true).forEach(function(e4) {
          X(t3, e4, i3[e4]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(i3)) : J(Object(i3)).forEach(function(e4) {
          Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(i3, e4));
        });
      }
      return t3;
    }
    function X(t3, e3, i3) {
      return e3 in t3 ? Object.defineProperty(t3, e3, { value: i3, enumerable: true, configurable: true, writable: true }) : t3[e3] = i3, t3;
    }
    function Z(t3) {
      return Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
        return typeof t4;
      } : function(t4) {
        return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
      }, Z(t3);
    }
    L.Control.PMButton = q;
    const $ = L.Class.extend({ options: { drawMarker: true, drawRectangle: true, drawPolyline: true, drawPolygon: true, drawCircle: true, drawCircleMarker: true, drawText: true, editMode: true, dragMode: true, cutPolygon: true, removalMode: true, rotateMode: true, snappingOption: true, drawControls: true, editControls: true, optionsControls: true, customControls: true, oneBlock: false, position: "topleft", positions: { draw: "", edit: "", options: "", custom: "" } }, customButtons: [], initialize: function(t3) {
      this.init(t3);
    }, reinit: function() {
      var t3 = this.isVisible;
      this.removeControls(), this._defineButtons(), t3 && this.addControls();
    }, init: function(t3) {
      this.map = t3, this.buttons = {}, this.isVisible = false, this.drawContainer = L.DomUtil.create("div", "leaflet-pm-toolbar leaflet-pm-draw leaflet-bar leaflet-control"), this.editContainer = L.DomUtil.create("div", "leaflet-pm-toolbar leaflet-pm-edit leaflet-bar leaflet-control"), this.optionsContainer = L.DomUtil.create("div", "leaflet-pm-toolbar leaflet-pm-options leaflet-bar leaflet-control"), this.customContainer = L.DomUtil.create("div", "leaflet-pm-toolbar leaflet-pm-custom leaflet-bar leaflet-control"), this._defineButtons();
    }, _createContainer: function(t3) {
      var e3 = "".concat(t3, "Container");
      return this[e3] || (this[e3] = L.DomUtil.create("div", "leaflet-pm-toolbar leaflet-pm-".concat(t3, " leaflet-bar leaflet-control"))), this[e3];
    }, getButtons: function() {
      return this.buttons;
    }, addControls: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options;
      "undefined" != typeof t3.editPolygon && (t3.editMode = t3.editPolygon), "undefined" != typeof t3.deleteLayer && (t3.removalMode = t3.deleteLayer), L.Util.setOptions(this, t3), this.applyIconStyle(), this.isVisible = true, this._showHideButtons();
    }, applyIconStyle: function() {
      var t3 = this.getButtons(), e3 = { geomanIcons: { drawMarker: "control-icon leaflet-pm-icon-marker", drawPolyline: "control-icon leaflet-pm-icon-polyline", drawRectangle: "control-icon leaflet-pm-icon-rectangle", drawPolygon: "control-icon leaflet-pm-icon-polygon", drawCircle: "control-icon leaflet-pm-icon-circle", drawCircleMarker: "control-icon leaflet-pm-icon-circle-marker", editMode: "control-icon leaflet-pm-icon-edit", dragMode: "control-icon leaflet-pm-icon-drag", cutPolygon: "control-icon leaflet-pm-icon-cut", removalMode: "control-icon leaflet-pm-icon-delete", drawText: "control-icon leaflet-pm-icon-text" } };
      for (var i3 in t3) {
        var n2 = t3[i3];
        L.Util.setOptions(n2, { className: e3.geomanIcons[i3] });
      }
    }, removeControls: function() {
      var t3 = this.getButtons();
      for (var e3 in t3)
        t3[e3].remove();
      this.isVisible = false;
    }, toggleControls: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options;
      this.isVisible ? this.removeControls() : this.addControls(t3);
    }, _addButton: function(t3, e3) {
      return this.buttons[t3] = e3, this.options[t3] = this.options[t3] || false, this.buttons[t3];
    }, triggerClickOnToggledButtons: function(t3) {
      for (var e3 in this.buttons) {
        var i3 = this.buttons[e3];
        i3._button.disableByOtherButtons && i3 !== t3 && i3.toggled() && i3._triggerClick();
      }
    }, toggleButton: function(t3, e3) {
      var i3 = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
      return "editPolygon" === t3 && (t3 = "editMode"), "deleteLayer" === t3 && (t3 = "removalMode"), i3 && this.triggerClickOnToggledButtons(this.buttons[t3]), !!this.buttons[t3] && this.buttons[t3].toggle(e3);
    }, _defineButtons: function() {
      var t3 = this, e3 = { className: "control-icon leaflet-pm-icon-marker", title: I("buttonTitles.drawMarkerButton"), jsClass: "Marker", onClick: function() {
      }, afterClick: function(e4, i4) {
        t3.map.pm.Draw[i4.button._button.jsClass].toggle();
      }, doToggle: true, toggleStatus: false, disableOtherButtons: true, position: this.options.position, actions: ["cancel"] }, i3 = { title: I("buttonTitles.drawPolyButton"), className: "control-icon leaflet-pm-icon-polygon", jsClass: "Polygon", onClick: function() {
      }, afterClick: function(e4, i4) {
        t3.map.pm.Draw[i4.button._button.jsClass].toggle();
      }, doToggle: true, toggleStatus: false, disableOtherButtons: true, position: this.options.position, actions: ["finish", "removeLastVertex", "cancel"] }, n2 = { className: "control-icon leaflet-pm-icon-polyline", title: I("buttonTitles.drawLineButton"), jsClass: "Line", onClick: function() {
      }, afterClick: function(e4, i4) {
        t3.map.pm.Draw[i4.button._button.jsClass].toggle();
      }, doToggle: true, toggleStatus: false, disableOtherButtons: true, position: this.options.position, actions: ["finish", "removeLastVertex", "cancel"] }, r2 = { title: I("buttonTitles.drawCircleButton"), className: "control-icon leaflet-pm-icon-circle", jsClass: "Circle", onClick: function() {
      }, afterClick: function(e4, i4) {
        t3.map.pm.Draw[i4.button._button.jsClass].toggle();
      }, doToggle: true, toggleStatus: false, disableOtherButtons: true, position: this.options.position, actions: ["cancel"] }, a2 = { title: I("buttonTitles.drawCircleMarkerButton"), className: "control-icon leaflet-pm-icon-circle-marker", jsClass: "CircleMarker", onClick: function() {
      }, afterClick: function(e4, i4) {
        t3.map.pm.Draw[i4.button._button.jsClass].toggle();
      }, doToggle: true, toggleStatus: false, disableOtherButtons: true, position: this.options.position, actions: ["cancel"] }, o2 = { title: I("buttonTitles.drawRectButton"), className: "control-icon leaflet-pm-icon-rectangle", jsClass: "Rectangle", onClick: function() {
      }, afterClick: function(e4, i4) {
        t3.map.pm.Draw[i4.button._button.jsClass].toggle();
      }, doToggle: true, toggleStatus: false, disableOtherButtons: true, position: this.options.position, actions: ["cancel"] }, s2 = { title: I("buttonTitles.editButton"), className: "control-icon leaflet-pm-icon-edit", onClick: function() {
      }, afterClick: function() {
        t3.map.pm.toggleGlobalEditMode();
      }, doToggle: true, toggleStatus: false, disableOtherButtons: true, position: this.options.position, tool: "edit", actions: ["finishMode"] }, l2 = { title: I("buttonTitles.dragButton"), className: "control-icon leaflet-pm-icon-drag", onClick: function() {
      }, afterClick: function() {
        t3.map.pm.toggleGlobalDragMode();
      }, doToggle: true, toggleStatus: false, disableOtherButtons: true, position: this.options.position, tool: "edit", actions: ["finishMode"] }, h2 = { title: I("buttonTitles.cutButton"), className: "control-icon leaflet-pm-icon-cut", jsClass: "Cut", onClick: function() {
      }, afterClick: function(e4, i4) {
        t3.map.pm.Draw[i4.button._button.jsClass].toggle({ snappable: true, cursorMarker: true, allowSelfIntersection: false });
      }, doToggle: true, toggleStatus: false, disableOtherButtons: true, position: this.options.position, tool: "edit", actions: ["finish", "removeLastVertex", "cancel"] }, u2 = { title: I("buttonTitles.deleteButton"), className: "control-icon leaflet-pm-icon-delete", onClick: function() {
      }, afterClick: function() {
        t3.map.pm.toggleGlobalRemovalMode();
      }, doToggle: true, toggleStatus: false, disableOtherButtons: true, position: this.options.position, tool: "edit", actions: ["finishMode"] }, c2 = { title: I("buttonTitles.rotateButton"), className: "control-icon leaflet-pm-icon-rotate", onClick: function() {
      }, afterClick: function() {
        t3.map.pm.toggleGlobalRotateMode();
      }, doToggle: true, toggleStatus: false, disableOtherButtons: true, position: this.options.position, tool: "edit", actions: ["finishMode"] }, p2 = { className: "control-icon leaflet-pm-icon-text", title: I("buttonTitles.drawTextButton"), jsClass: "Text", onClick: function() {
      }, afterClick: function(e4, i4) {
        t3.map.pm.Draw[i4.button._button.jsClass].toggle();
      }, doToggle: true, toggleStatus: false, disableOtherButtons: true, position: this.options.position, actions: ["cancel"] };
      this._addButton("drawMarker", new L.Control.PMButton(e3)), this._addButton("drawPolyline", new L.Control.PMButton(n2)), this._addButton("drawRectangle", new L.Control.PMButton(o2)), this._addButton("drawPolygon", new L.Control.PMButton(i3)), this._addButton("drawCircle", new L.Control.PMButton(r2)), this._addButton("drawCircleMarker", new L.Control.PMButton(a2)), this._addButton("drawText", new L.Control.PMButton(p2)), this._addButton("editMode", new L.Control.PMButton(s2)), this._addButton("dragMode", new L.Control.PMButton(l2)), this._addButton("cutPolygon", new L.Control.PMButton(h2)), this._addButton("removalMode", new L.Control.PMButton(u2)), this._addButton("rotateMode", new L.Control.PMButton(c2));
    }, _showHideButtons: function() {
      if (this.isVisible) {
        this.removeControls(), this.isVisible = true;
        var t3 = this.getButtons(), e3 = [];
        for (var i3 in false === this.options.drawControls && (e3 = e3.concat(Object.keys(t3).filter(function(e4) {
          return !t3[e4]._button.tool;
        }))), false === this.options.editControls && (e3 = e3.concat(Object.keys(t3).filter(function(e4) {
          return "edit" === t3[e4]._button.tool;
        }))), false === this.options.optionsControls && (e3 = e3.concat(Object.keys(t3).filter(function(e4) {
          return "options" === t3[e4]._button.tool;
        }))), false === this.options.customControls && (e3 = e3.concat(Object.keys(t3).filter(function(e4) {
          return "custom" === t3[e4]._button.tool;
        }))), t3)
          if (this.options[i3] && -1 === e3.indexOf(i3)) {
            var n2 = t3[i3]._button.tool;
            n2 || (n2 = "draw"), t3[i3].setPosition(this._getBtnPosition(n2)), t3[i3].addTo(this.map);
          }
      }
    }, _getBtnPosition: function(t3) {
      return this.options.positions && this.options.positions[t3] ? this.options.positions[t3] : this.options.position;
    }, setBlockPosition: function(t3, e3) {
      this.options.positions[t3] = e3, this._showHideButtons(), this.changeControlOrder();
    }, getBlockPositions: function() {
      return this.options.positions;
    }, copyDrawControl: function(t3, e3) {
      if (!e3)
        throw new TypeError("Button has no name");
      "object" !== Z(e3) && (e3 = { name: e3 });
      var i3 = this._btnNameMapping(t3);
      if (!e3.name)
        throw new TypeError("Button has no name");
      if (this.buttons[e3.name])
        throw new TypeError("Button with this name already exists");
      var n2 = this.map.pm.Draw.createNewDrawInstance(e3.name, i3);
      return e3 = Y(Y({}, this.buttons[i3]._button), e3), { drawInstance: n2, control: this.createCustomControl(e3) };
    }, createCustomControl: function(t3) {
      var e3, i3;
      if (!t3.name)
        throw new TypeError("Button has no name");
      if (this.buttons[t3.name])
        throw new TypeError("Button with this name already exists");
      t3.onClick || (t3.onClick = function() {
      }), t3.afterClick || (t3.afterClick = function() {
      }), false !== t3.toggle && (t3.toggle = true), t3.block && (t3.block = t3.block.toLowerCase()), t3.block && "draw" !== t3.block || (t3.block = ""), t3.className ? -1 === t3.className.indexOf("control-icon") && (t3.className = "control-icon ".concat(t3.className)) : t3.className = "control-icon";
      var n2 = { tool: t3.block, className: t3.className, title: t3.title || "", jsClass: t3.name, onClick: t3.onClick, afterClick: t3.afterClick, doToggle: t3.toggle, toggleStatus: false, disableOtherButtons: null === (e3 = t3.disableOtherButtons) || void 0 === e3 || e3, disableByOtherButtons: null === (i3 = t3.disableByOtherButtons) || void 0 === i3 || i3, cssToggle: t3.toggle, position: this.options.position, actions: t3.actions || [], disabled: !!t3.disabled };
      false !== this.options[t3.name] && (this.options[t3.name] = true);
      var r2 = this._addButton(t3.name, new L.Control.PMButton(n2));
      return this.changeControlOrder(), r2;
    }, changeControlOrder: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e3 = this._shapeMapping(), i3 = [];
      t3.forEach(function(t4) {
        e3[t4] ? i3.push(e3[t4]) : i3.push(t4);
      });
      var n2 = this.getButtons(), r2 = {};
      i3.forEach(function(t4) {
        n2[t4] && (r2[t4] = n2[t4]);
      });
      var a2 = Object.keys(n2).filter(function(t4) {
        return !n2[t4]._button.tool;
      });
      a2.forEach(function(t4) {
        -1 === i3.indexOf(t4) && (r2[t4] = n2[t4]);
      });
      var o2 = Object.keys(n2).filter(function(t4) {
        return "edit" === n2[t4]._button.tool;
      });
      o2.forEach(function(t4) {
        -1 === i3.indexOf(t4) && (r2[t4] = n2[t4]);
      });
      var s2 = Object.keys(n2).filter(function(t4) {
        return "options" === n2[t4]._button.tool;
      });
      s2.forEach(function(t4) {
        -1 === i3.indexOf(t4) && (r2[t4] = n2[t4]);
      });
      var l2 = Object.keys(n2).filter(function(t4) {
        return "custom" === n2[t4]._button.tool;
      });
      l2.forEach(function(t4) {
        -1 === i3.indexOf(t4) && (r2[t4] = n2[t4]);
      }), Object.keys(n2).forEach(function(t4) {
        -1 === i3.indexOf(t4) && (r2[t4] = n2[t4]);
      }), this.map.pm.Toolbar.buttons = r2, this._showHideButtons();
    }, getControlOrder: function() {
      var t3 = this.getButtons(), e3 = [];
      for (var i3 in t3)
        e3.push(i3);
      return e3;
    }, changeActionsOfControl: function(t3, e3) {
      var i3 = this._btnNameMapping(t3);
      if (!i3)
        throw new TypeError("No name passed");
      if (!e3)
        throw new TypeError("No actions passed");
      if (!this.buttons[i3])
        throw new TypeError("Button with this name not exists");
      this.buttons[i3]._button.actions = e3, this.changeControlOrder();
    }, setButtonDisabled: function(t3, e3) {
      var i3 = this._btnNameMapping(t3);
      e3 ? this.buttons[i3].disable() : this.buttons[i3].enable();
    }, _shapeMapping: function() {
      return { Marker: "drawMarker", Circle: "drawCircle", Polygon: "drawPolygon", Rectangle: "drawRectangle", Polyline: "drawPolyline", Line: "drawPolyline", CircleMarker: "drawCircleMarker", Edit: "editMode", Drag: "dragMode", Cut: "cutPolygon", Removal: "removalMode", Rotate: "rotateMode", Text: "drawText" };
    }, _btnNameMapping: function(t3) {
      var e3 = this._shapeMapping();
      return e3[t3] ? e3[t3] : t3;
    } });
    function W(t3, e3) {
      var i3 = Object.keys(t3);
      if (Object.getOwnPropertySymbols) {
        var n2 = Object.getOwnPropertySymbols(t3);
        e3 && (n2 = n2.filter(function(e4) {
          return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
        })), i3.push.apply(i3, n2);
      }
      return i3;
    }
    function Q(t3) {
      for (var e3 = 1; e3 < arguments.length; e3++) {
        var i3 = null != arguments[e3] ? arguments[e3] : {};
        e3 % 2 ? W(Object(i3), true).forEach(function(e4) {
          tt(t3, e4, i3[e4]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(i3)) : W(Object(i3)).forEach(function(e4) {
          Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(i3, e4));
        });
      }
      return t3;
    }
    function tt(t3, e3, i3) {
      return e3 in t3 ? Object.defineProperty(t3, e3, { value: i3, enumerable: true, configurable: true, writable: true }) : t3[e3] = i3, t3;
    }
    var et = { _initSnappableMarkers: function() {
      this.options.snapDistance = this.options.snapDistance || 30, this.options.snapSegment = this.options.snapSegment === void 0 || this.options.snapSegment, this._assignEvents(this._markers), this._layer.off("pm:dragstart", this._unsnap, this), this._layer.on("pm:dragstart", this._unsnap, this);
    }, _disableSnapping: function() {
      this._layer.off("pm:dragstart", this._unsnap, this);
    }, _assignEvents: function(t3) {
      var e3 = this;
      t3.forEach(function(t4) {
        Array.isArray(t4) ? e3._assignEvents(t4) : (t4.off("drag", e3._handleSnapping, e3), t4.on("drag", e3._handleSnapping, e3), t4.off("dragend", e3._cleanupSnapping, e3), t4.on("dragend", e3._cleanupSnapping, e3));
      });
    }, _cleanupSnapping: function(t3) {
      t3 && (t3.target._snapped = false);
      delete this._snapList, this.throttledList && (this._map.off("layeradd", this.throttledList, this), this.throttledList = void 0), this._map.off("pm:remove", this._handleSnapLayerRemoval, this), this.debugIndicatorLines && this.debugIndicatorLines.forEach(function(t4) {
        t4.remove();
      });
    }, _handleThrottleSnapping: function() {
      this.throttledList && this._createSnapList();
    }, _handleSnapping: function(t3) {
      var e3 = this, i3 = t3.target;
      if (i3._snapped = false, this.throttledList || (this.throttledList = L.Util.throttle(this._handleThrottleSnapping, 100, this)), this._map.pm.Keyboard.isAltKeyPressed())
        return false;
      if (this._snapList === void 0 && (this._createSnapList(), this._map.off("layeradd", this.throttledList, this), this._map.on("layeradd", this.throttledList, this)), this._snapList.length <= 0)
        return false;
      var n2 = this._calcClosestLayer(i3.getLatLng(), this._snapList);
      if (0 === Object.keys(n2).length)
        return false;
      var r2, a2 = n2.layer instanceof L.Marker || n2.layer instanceof L.CircleMarker || !this.options.snapSegment;
      r2 = a2 ? n2.latlng : this._checkPrioritiySnapping(n2);
      var o2 = this.options.snapDistance, s2 = { marker: i3, shape: this._shape, snapLatLng: r2, segment: n2.segment, layer: this._layer, workingLayer: this._layer, layerInteractedWith: n2.layer, distance: n2.distance };
      if (this._fireSnapDrag(s2.marker, s2), this._fireSnapDrag(this._layer, s2), n2.distance < o2) {
        i3._orgLatLng = i3.getLatLng(), i3.setLatLng(r2), i3._snapped = true, i3._snapInfo = s2;
        var l2 = this._snapLatLng || {}, h2 = r2 || {};
        l2.lat === h2.lat && l2.lng === h2.lng || (e3._snapLatLng = r2, e3._fireSnap(i3, s2), e3._fireSnap(e3._layer, s2));
      } else
        this._snapLatLng && (this._unsnap(s2), i3._snapped = false, i3._snapInfo = void 0, this._fireUnsnap(s2.marker, s2), this._fireUnsnap(this._layer, s2));
      return true;
    }, _createSnapList: function() {
      var t3 = this, e3 = [], i3 = [], n2 = this._map;
      n2.off("pm:remove", this._handleSnapLayerRemoval, this), n2.on("pm:remove", this._handleSnapLayerRemoval, this), n2.eachLayer(function(t4) {
        if ((t4 instanceof L.Polyline || t4 instanceof L.Marker || t4 instanceof L.CircleMarker || t4 instanceof L.ImageOverlay) && true !== t4.options.snapIgnore) {
          if (t4.options.snapIgnore === void 0 && (!L.PM.optIn && true === t4.options.pmIgnore || L.PM.optIn && false !== t4.options.pmIgnore))
            return;
          (t4 instanceof L.Circle || t4 instanceof L.CircleMarker) && t4.pm && t4.pm._hiddenPolyCircle ? e3.push(t4.pm._hiddenPolyCircle) : t4 instanceof L.ImageOverlay && (t4 = L.rectangle(t4.getBounds())), e3.push(t4);
          var n3 = L.polyline([], { color: "red", pmIgnore: true });
          n3._pmTempLayer = true, i3.push(n3), (t4 instanceof L.Circle || t4 instanceof L.CircleMarker) && i3.push(n3);
        }
      }), e3 = (e3 = (e3 = e3.filter(function(e4) {
        return t3._layer !== e4;
      })).filter(function(t4) {
        return t4._latlng || t4._latlngs && j(t4._latlngs);
      })).filter(function(t4) {
        return !t4._pmTempLayer;
      }), this._otherSnapLayers ? (this._otherSnapLayers.forEach(function() {
        var t4 = L.polyline([], { color: "red", pmIgnore: true });
        t4._pmTempLayer = true, i3.push(t4);
      }), this._snapList = e3.concat(this._otherSnapLayers)) : this._snapList = e3, this.debugIndicatorLines = i3;
    }, _handleSnapLayerRemoval: function(t3) {
      var e3 = t3.layer, i3 = this._snapList.findIndex(function(t4) {
        return t4._leaflet_id === e3._leaflet_id;
      });
      this._snapList.splice(i3, 1);
    }, _calcClosestLayer: function(t3, e3) {
      return this._calcClosestLayers(t3, e3, 1)[0];
    }, _calcClosestLayers: function(t3, e3) {
      var i3 = this, n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, r2 = [], a2 = {};
      e3.forEach(function(e4, o3) {
        if (!e4._parentCopy || e4._parentCopy !== i3._layer) {
          var s2 = i3._calcLayerDistances(t3, e4);
          if (s2.distance = Math.floor(s2.distance), i3.debugIndicatorLines) {
            if (!i3.debugIndicatorLines[o3]) {
              var l2 = L.polyline([], { color: "red", pmIgnore: true });
              l2._pmTempLayer = true, i3.debugIndicatorLines[o3] = l2;
            }
            i3.debugIndicatorLines[o3].setLatLngs([t3, s2.latlng]);
          }
          1 === n2 && (a2.distance === void 0 || s2.distance <= a2.distance) ? (s2.distance < a2.distance && (r2 = []), (a2 = s2).layer = e4, r2.push(a2)) : 1 !== n2 && (a2 = {}, (a2 = s2).layer = e4, r2.push(a2));
        }
      }), 1 !== n2 && (r2 = r2.sort(function(t4, e4) {
        return t4.distance - e4.distance;
      })), -1 === n2 && (n2 = r2.length);
      var o2 = this._getClosestLayerByPriority(r2, n2);
      return L.Util.isArray(o2) ? o2 : [o2];
    }, _calcLayerDistances: function(t3, e3) {
      var i3 = this._map, n2 = e3 instanceof L.Marker || e3 instanceof L.CircleMarker, r2 = e3 instanceof L.Polygon, a2 = t3;
      if (n2) {
        var o2 = e3.getLatLng();
        return { latlng: Q({}, o2), distance: this._getDistance(i3, o2, a2) };
      }
      return this._calcLatLngDistances(a2, e3.getLatLngs(), i3, r2);
    }, _calcLatLngDistances: function(t3, e3, i3) {
      var n2, r2, a2, o2 = this, s2 = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], l2 = function u2(e4) {
        e4.forEach(function(l3, h3) {
          if (Array.isArray(l3))
            u2(l3);
          else if (o2.options.snapSegment) {
            var c2, p2 = l3;
            c2 = s2 ? h3 + 1 === e4.length ? 0 : h3 + 1 : h3 + 1 === e4.length ? void 0 : h3 + 1;
            var d2 = e4[c2];
            if (d2) {
              var f2 = o2._getDistanceToSegment(i3, t3, p2, d2);
              (r2 === void 0 || f2 < r2) && (r2 = f2, a2 = [p2, d2]);
            }
          } else {
            var g2 = o2._getDistance(i3, t3, l3);
            (r2 === void 0 || g2 < r2) && (r2 = g2, n2 = l3);
          }
        });
      };
      if (l2(e3), this.options.snapSegment) {
        var h2 = this._getClosestPointOnSegment(i3, t3, a2[0], a2[1]);
        return { latlng: Q({}, h2), segment: a2, distance: r2 };
      }
      return { latlng: n2, distance: r2 };
    }, _getClosestLayerByPriority: function(t3) {
      var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
      t3 = t3.sort(function(t4, e4) {
        return t4._leaflet_id - e4._leaflet_id;
      });
      var i3 = ["Marker", "CircleMarker", "Circle", "Line", "Polygon", "Rectangle"], n2 = this._map.pm.globalOptions.snappingOrder || [], r2 = 0, a2 = {};
      return n2.concat(i3).forEach(function(t4) {
        a2[t4] || (r2 += 1, a2[t4] = r2);
      }), t3.sort(F("instanceofShape", a2)), 1 === e3 ? t3[0] || {} : t3.slice(0, e3);
    }, _checkPrioritiySnapping: function(t3) {
      var e3 = this._map, i3 = t3.segment[0], n2 = t3.segment[1], r2 = t3.latlng, a2 = this._getDistance(e3, i3, r2), o2 = this._getDistance(e3, n2, r2), s2 = a2 < o2 ? i3 : n2, l2 = a2 < o2 ? a2 : o2;
      if (this.options.snapMiddle) {
        var h2 = L.PM.Utils.calcMiddleLatLng(e3, i3, n2), u2 = this._getDistance(e3, h2, r2);
        u2 < a2 && u2 < o2 && (s2 = h2, l2 = u2);
      }
      return Q({}, l2 < this.options.snapDistance ? s2 : r2);
    }, _unsnap: function() {
      delete this._snapLatLng;
    }, _getClosestPointOnSegment: function(t3, e3, i3, n2) {
      var r2 = t3.getMaxZoom();
      r2 === Infinity && (r2 = t3.getZoom());
      var a2 = t3.project(e3, r2), o2 = t3.project(i3, r2), s2 = t3.project(n2, r2), l2 = L.LineUtil.closestPointOnSegment(a2, o2, s2);
      return t3.unproject(l2, r2);
    }, _getDistanceToSegment: function(t3, e3, i3, n2) {
      var r2 = t3.latLngToLayerPoint(e3), a2 = t3.latLngToLayerPoint(i3), o2 = t3.latLngToLayerPoint(n2);
      return L.LineUtil.pointToSegmentDistance(r2, a2, o2);
    }, _getDistance: function(t3, e3, i3) {
      return t3.latLngToLayerPoint(e3).distanceTo(t3.latLngToLayerPoint(i3));
    } };
    const it = et;
    const nt = L.Class.extend({ includes: [it, S], options: { snappable: true, snapDistance: 20, snapMiddle: false, allowSelfIntersection: true, tooltips: true, templineStyle: {}, hintlineStyle: { color: "#3388ff", dashArray: "5,5" }, pathOptions: null, cursorMarker: true, finishOn: null, markerStyle: { draggable: true, icon: L.icon() }, hideMiddleMarkers: false, minRadiusCircle: null, maxRadiusCircle: null, minRadiusCircleMarker: null, maxRadiusCircleMarker: null, editable: false, markerEditable: true, continueDrawing: false, snapSegment: true, requireSnapToFinish: false }, setOptions: function(t3) {
      L.Util.setOptions(this, t3), this.setStyle(this.options);
    }, setStyle: function() {
    }, getOptions: function() {
      return this.options;
    }, initialize: function(t3) {
      var e3 = this, i3 = new L.Icon.Default();
      i3.options.tooltipAnchor = [0, 0], this.options.markerStyle.icon = i3, this._map = t3, this.shapes = ["Marker", "CircleMarker", "Line", "Polygon", "Rectangle", "Circle", "Cut", "Text"], this.shapes.forEach(function(t4) {
        e3[t4] = new L.PM.Draw[t4](e3._map);
      }), this.Marker.setOptions({ continueDrawing: true }), this.CircleMarker.setOptions({ continueDrawing: true });
    }, setPathOptions: function(t3) {
      var e3 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
      this.options.pathOptions = e3 ? r()(this.options.pathOptions, t3) : t3;
    }, getShapes: function() {
      return this.shapes;
    }, getShape: function() {
      return this._shape;
    }, enable: function(t3, e3) {
      if (!t3)
        throw new Error("Error: Please pass a shape as a parameter. Possible shapes are: ".concat(this.getShapes().join(",")));
      this.disable(), this[t3].enable(e3);
    }, disable: function() {
      var t3 = this;
      this.shapes.forEach(function(e3) {
        t3[e3].disable();
      });
    }, addControls: function() {
      var t3 = this;
      this.shapes.forEach(function(e3) {
        t3[e3].addButton();
      });
    }, getActiveShape: function() {
      var t3, e3 = this;
      return this.shapes.forEach(function(i3) {
        e3[i3]._enabled && (t3 = i3);
      }), t3;
    }, _setGlobalDrawMode: function() {
      "Cut" === this._shape ? this._fireGlobalCutModeToggled() : this._fireGlobalDrawModeToggled();
      var t3 = L.PM.Utils.findLayers(this._map);
      this._enabled ? t3.forEach(function(t4) {
        L.PM.Utils.disablePopup(t4);
      }) : t3.forEach(function(t4) {
        L.PM.Utils.enablePopup(t4);
      });
    }, createNewDrawInstance: function(t3, e3) {
      var i3 = this._getShapeFromBtnName(e3);
      if (this[t3])
        throw new TypeError("Draw Type already exists");
      if (!L.PM.Draw[i3])
        throw new TypeError("There is no class L.PM.Draw.".concat(i3));
      return this[t3] = new L.PM.Draw[i3](this._map), this[t3].toolbarButtonName = t3, this[t3]._shape = t3, this.shapes.push(t3), this[e3] && this[t3].setOptions(this[e3].options), this[t3].setOptions(this[t3].options), this[t3];
    }, _getShapeFromBtnName: function(t3) {
      var e3 = { drawMarker: "Marker", drawCircle: "Circle", drawPolygon: "Polygon", drawPolyline: "Line", drawRectangle: "Rectangle", drawCircleMarker: "CircleMarker", editMode: "Edit", dragMode: "Drag", cutPolygon: "Cut", removalMode: "Removal", rotateMode: "Rotate", drawText: "Text" };
      return e3[t3] ? e3[t3] : this[t3] ? this[t3]._shape : t3;
    }, _finishLayer: function(t3) {
      t3.pm && (t3.pm.setOptions(this.options), t3.pm._shape = this._shape, t3.pm._map = this._map), this._addDrawnLayerProp(t3);
    }, _addDrawnLayerProp: function(t3) {
      t3._drawnByGeoman = true;
    }, _setPane: function(t3, e3) {
      "layerPane" === e3 ? t3.options.pane = this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.layerPane || "overlayPane" : "vertexPane" === e3 ? t3.options.pane = this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.vertexPane || "markerPane" : "markerPane" === e3 && (t3.options.pane = this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.markerPane || "markerPane");
    }, _isFirstLayer: function() {
      return 0 === (this._map || this._layer._map).pm.getGeomanLayers().length;
    } });
    nt.Marker = nt.extend({ initialize: function(t3) {
      this._map = t3, this._shape = "Marker", this.toolbarButtonName = "drawMarker";
    }, enable: function(t3) {
      var e3 = this;
      L.Util.setOptions(this, t3), this._enabled = true, this._map.on("click", this._createMarker, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, true), this._hintMarker = L.marker(this._map.getCenter(), this.options.markerStyle), this._setPane(this._hintMarker, "markerPane"), this._hintMarker._pmTempLayer = true, this._hintMarker.addTo(this._map), this.options.tooltips && this._hintMarker.bindTooltip(I("tooltips.placeMarker"), { permanent: true, offset: L.point(0, 10), direction: "bottom", opacity: 0.8 }).openTooltip(), this._layer = this._hintMarker, this._map.on("mousemove", this._syncHintMarker, this), this.options.markerEditable && this._map.eachLayer(function(t4) {
        e3.isRelevantMarker(t4) && t4.pm.enable();
      }), this._fireDrawStart(), this._setGlobalDrawMode();
    }, disable: function() {
      var t3 = this;
      this._enabled && (this._enabled = false, this._map.off("click", this._createMarker, this), this._hintMarker.remove(), this._map.off("mousemove", this._syncHintMarker, this), this._map.eachLayer(function(e3) {
        t3.isRelevantMarker(e3) && e3.pm.disable();
      }), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, false), this.options.snappable && this._cleanupSnapping(), this._fireDrawEnd(), this._setGlobalDrawMode());
    }, enabled: function() {
      return this._enabled;
    }, toggle: function(t3) {
      this.enabled() ? this.disable() : this.enable(t3);
    }, isRelevantMarker: function(t3) {
      return t3 instanceof L.Marker && t3.pm && !t3._pmTempLayer && !t3.pm._initTextMarker;
    }, _syncHintMarker: function(t3) {
      if (this._hintMarker.setLatLng(t3.latlng), this.options.snappable) {
        var e3 = t3;
        e3.target = this._hintMarker, this._handleSnapping(e3);
      }
      this._fireChange(this._hintMarker.getLatLng(), "Draw");
    }, _createMarker: function(t3) {
      if (t3.latlng && (!this.options.requireSnapToFinish || this._hintMarker._snapped || this._isFirstLayer())) {
        this._hintMarker._snapped || this._hintMarker.setLatLng(t3.latlng);
        var e3 = this._hintMarker.getLatLng(), i3 = new L.Marker(e3, this.options.markerStyle);
        this._setPane(i3, "markerPane"), this._finishLayer(i3), i3.pm || (i3.options.draggable = false), i3.addTo(this._map.pm._getContainingLayer()), i3.pm && this.options.markerEditable ? i3.pm.enable() : i3.dragging && i3.dragging.disable(), this._fireCreate(i3), this._cleanupSnapping(), this.options.continueDrawing || this.disable();
      }
    }, setStyle: function() {
      var t3, e3;
      null !== (t3 = this.options.markerStyle) && void 0 !== t3 && t3.icon && (null === (e3 = this._hintMarker) || void 0 === e3 || e3.setIcon(this.options.markerStyle.icon));
    } });
    var rt = 63710088e-1, at = { centimeters: 637100880, centimetres: 637100880, degrees: 57.22891354143274, feet: 20902260511392e-6, inches: 39.37 * rt, kilometers: 6371.0088, kilometres: 6371.0088, meters: rt, metres: rt, miles: 3958.761333810546, millimeters: 6371008800, millimetres: 6371008800, nauticalmiles: rt / 1852, radians: 1, yards: 6967335223679999e-9 };
    function ot(t3, e3, i3) {
      void 0 === i3 && (i3 = {});
      var n2 = { type: "Feature" };
      return (0 === i3.id || i3.id) && (n2.id = i3.id), i3.bbox && (n2.bbox = i3.bbox), n2.properties = e3 || {}, n2.geometry = t3, n2;
    }
    function st(t3, e3, i3) {
      if (void 0 === i3 && (i3 = {}), !t3)
        throw new Error("coordinates is required");
      if (!Array.isArray(t3))
        throw new Error("coordinates must be an Array");
      if (t3.length < 2)
        throw new Error("coordinates must be at least 2 numbers long");
      if (!ft(t3[0]) || !ft(t3[1]))
        throw new Error("coordinates must contain numbers");
      return ot({ type: "Point", coordinates: t3 }, e3, i3);
    }
    function lt(t3, e3, i3) {
      if (void 0 === i3 && (i3 = {}), t3.length < 2)
        throw new Error("coordinates must be an array of two or more positions");
      return ot({ type: "LineString", coordinates: t3 }, e3, i3);
    }
    function ht(t3, e3) {
      void 0 === e3 && (e3 = {});
      var i3 = { type: "FeatureCollection" };
      return e3.id && (i3.id = e3.id), e3.bbox && (i3.bbox = e3.bbox), i3.features = t3, i3;
    }
    function ut(t3, e3) {
      void 0 === e3 && (e3 = "kilometers");
      var i3 = at[e3];
      if (!i3)
        throw new Error(e3 + " units is invalid");
      return t3 * i3;
    }
    function ct(t3, e3) {
      void 0 === e3 && (e3 = "kilometers");
      var i3 = at[e3];
      if (!i3)
        throw new Error(e3 + " units is invalid");
      return t3 / i3;
    }
    function pt(t3) {
      return 180 * (t3 % (2 * Math.PI)) / Math.PI;
    }
    function dt(t3) {
      return t3 % 360 * Math.PI / 180;
    }
    function ft(t3) {
      return !isNaN(t3) && null !== t3 && !Array.isArray(t3);
    }
    function gt(t3) {
      var e3, i3, n2 = { type: "FeatureCollection", features: [] };
      if ("LineString" === (i3 = "Feature" === t3.type ? t3.geometry : t3).type)
        e3 = [i3.coordinates];
      else if ("MultiLineString" === i3.type)
        e3 = i3.coordinates;
      else if ("MultiPolygon" === i3.type)
        e3 = [].concat.apply([], i3.coordinates);
      else {
        if ("Polygon" !== i3.type)
          throw new Error("Input must be a LineString, MultiLineString, Polygon, or MultiPolygon Feature or Geometry");
        e3 = i3.coordinates;
      }
      return e3.forEach(function(t4) {
        e3.forEach(function(e4) {
          for (var i4 = 0; i4 < t4.length - 1; i4++)
            for (var r2 = i4; r2 < e4.length - 1; r2++) {
              if (t4 === e4) {
                if (1 === Math.abs(i4 - r2))
                  continue;
                if (0 === i4 && r2 === t4.length - 2 && t4[i4][0] === t4[t4.length - 1][0] && t4[i4][1] === t4[t4.length - 1][1])
                  continue;
              }
              var a2 = _t(t4[i4][0], t4[i4][1], t4[i4 + 1][0], t4[i4 + 1][1], e4[r2][0], e4[r2][1], e4[r2 + 1][0], e4[r2 + 1][1]);
              a2 && n2.features.push(st([a2[0], a2[1]]));
            }
        });
      }), n2;
    }
    function _t(t3, e3, i3, n2, r2, a2, o2, s2) {
      var l2, h2, u2, c2, p2 = { x: null, y: null, onLine1: false, onLine2: false };
      return 0 === (l2 = (s2 - a2) * (i3 - t3) - (o2 - r2) * (n2 - e3)) ? null !== p2.x && null !== p2.y && p2 : (c2 = (i3 - t3) * (h2 = e3 - a2) - (n2 - e3) * (u2 = t3 - r2), h2 = ((o2 - r2) * h2 - (s2 - a2) * u2) / l2, u2 = c2 / l2, p2.x = t3 + h2 * (i3 - t3), p2.y = e3 + h2 * (n2 - e3), h2 >= 0 && h2 <= 1 && (p2.onLine1 = true), u2 >= 0 && u2 <= 1 && (p2.onLine2 = true), !(!p2.onLine1 || !p2.onLine2) && [p2.x, p2.y]);
    }
    function mt(t3, e3) {
      var i3 = Object.keys(t3);
      if (Object.getOwnPropertySymbols) {
        var n2 = Object.getOwnPropertySymbols(t3);
        e3 && (n2 = n2.filter(function(e4) {
          return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
        })), i3.push.apply(i3, n2);
      }
      return i3;
    }
    function yt(t3) {
      for (var e3 = 1; e3 < arguments.length; e3++) {
        var i3 = null != arguments[e3] ? arguments[e3] : {};
        e3 % 2 ? mt(Object(i3), true).forEach(function(e4) {
          vt(t3, e4, i3[e4]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(i3)) : mt(Object(i3)).forEach(function(e4) {
          Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(i3, e4));
        });
      }
      return t3;
    }
    function vt(t3, e3, i3) {
      return e3 in t3 ? Object.defineProperty(t3, e3, { value: i3, enumerable: true, configurable: true, writable: true }) : t3[e3] = i3, t3;
    }
    function Lt(t3, e3) {
      var i3 = Object.keys(t3);
      if (Object.getOwnPropertySymbols) {
        var n2 = Object.getOwnPropertySymbols(t3);
        e3 && (n2 = n2.filter(function(e4) {
          return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
        })), i3.push.apply(i3, n2);
      }
      return i3;
    }
    function bt(t3) {
      for (var e3 = 1; e3 < arguments.length; e3++) {
        var i3 = null != arguments[e3] ? arguments[e3] : {};
        e3 % 2 ? Lt(Object(i3), true).forEach(function(e4) {
          kt(t3, e4, i3[e4]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(i3)) : Lt(Object(i3)).forEach(function(e4) {
          Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(i3, e4));
        });
      }
      return t3;
    }
    function kt(t3, e3, i3) {
      return e3 in t3 ? Object.defineProperty(t3, e3, { value: i3, enumerable: true, configurable: true, writable: true }) : t3[e3] = i3, t3;
    }
    function Mt(t3, e3) {
      var i3 = Object.keys(t3);
      if (Object.getOwnPropertySymbols) {
        var n2 = Object.getOwnPropertySymbols(t3);
        e3 && (n2 = n2.filter(function(e4) {
          return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
        })), i3.push.apply(i3, n2);
      }
      return i3;
    }
    function xt(t3) {
      for (var e3 = 1; e3 < arguments.length; e3++) {
        var i3 = null != arguments[e3] ? arguments[e3] : {};
        e3 % 2 ? Mt(Object(i3), true).forEach(function(e4) {
          wt(t3, e4, i3[e4]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(i3)) : Mt(Object(i3)).forEach(function(e4) {
          Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(i3, e4));
        });
      }
      return t3;
    }
    function wt(t3, e3, i3) {
      return e3 in t3 ? Object.defineProperty(t3, e3, { value: i3, enumerable: true, configurable: true, writable: true }) : t3[e3] = i3, t3;
    }
    function Ct(t3) {
      if (!t3)
        throw new Error("coord is required");
      if (!Array.isArray(t3)) {
        if ("Feature" === t3.type && null !== t3.geometry && "Point" === t3.geometry.type)
          return t3.geometry.coordinates;
        if ("Point" === t3.type)
          return t3.coordinates;
      }
      if (Array.isArray(t3) && t3.length >= 2 && !Array.isArray(t3[0]) && !Array.isArray(t3[1]))
        return t3;
      throw new Error("coord must be GeoJSON Point or an Array of numbers");
    }
    function Pt(t3) {
      if (Array.isArray(t3))
        return t3;
      if ("Feature" === t3.type) {
        if (null !== t3.geometry)
          return t3.geometry.coordinates;
      } else if (t3.coordinates)
        return t3.coordinates;
      throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array");
    }
    function Et(t3) {
      return "Feature" === t3.type ? t3.geometry : t3;
    }
    function St(t3, e3) {
      return "FeatureCollection" === t3.type ? "FeatureCollection" : "GeometryCollection" === t3.type ? "GeometryCollection" : "Feature" === t3.type && null !== t3.geometry ? t3.geometry.type : t3.type;
    }
    function Ot(t3, e3, i3) {
      if (null !== t3)
        for (var n2, r2, a2, o2, s2, l2, h2, u2, c2 = 0, p2 = 0, d2 = t3.type, f2 = "FeatureCollection" === d2, g2 = "Feature" === d2, _2 = f2 ? t3.features.length : 1, m2 = 0; m2 < _2; m2++) {
          s2 = (u2 = !!(h2 = f2 ? t3.features[m2].geometry : g2 ? t3.geometry : t3) && "GeometryCollection" === h2.type) ? h2.geometries.length : 1;
          for (var y2 = 0; y2 < s2; y2++) {
            var v2 = 0, L2 = 0;
            if (null !== (o2 = u2 ? h2.geometries[y2] : h2)) {
              l2 = o2.coordinates;
              var b2 = o2.type;
              switch (c2 = !i3 || "Polygon" !== b2 && "MultiPolygon" !== b2 ? 0 : 1, b2) {
                case null:
                  break;
                case "Point":
                  if (false === e3(l2, p2, m2, v2, L2))
                    return false;
                  p2++, v2++;
                  break;
                case "LineString":
                case "MultiPoint":
                  for (n2 = 0; n2 < l2.length; n2++) {
                    if (false === e3(l2[n2], p2, m2, v2, L2))
                      return false;
                    p2++, "MultiPoint" === b2 && v2++;
                  }
                  "LineString" === b2 && v2++;
                  break;
                case "Polygon":
                case "MultiLineString":
                  for (n2 = 0; n2 < l2.length; n2++) {
                    for (r2 = 0; r2 < l2[n2].length - c2; r2++) {
                      if (false === e3(l2[n2][r2], p2, m2, v2, L2))
                        return false;
                      p2++;
                    }
                    "MultiLineString" === b2 && v2++, "Polygon" === b2 && L2++;
                  }
                  "Polygon" === b2 && v2++;
                  break;
                case "MultiPolygon":
                  for (n2 = 0; n2 < l2.length; n2++) {
                    for (L2 = 0, r2 = 0; r2 < l2[n2].length; r2++) {
                      for (a2 = 0; a2 < l2[n2][r2].length - c2; a2++) {
                        if (false === e3(l2[n2][r2][a2], p2, m2, v2, L2))
                          return false;
                        p2++;
                      }
                      L2++;
                    }
                    v2++;
                  }
                  break;
                case "GeometryCollection":
                  for (n2 = 0; n2 < o2.geometries.length; n2++)
                    if (false === Ot(o2.geometries[n2], e3, i3))
                      return false;
                  break;
                default:
                  throw new Error("Unknown Geometry Type");
              }
            }
          }
        }
    }
    function Dt(t3, e3) {
      if ("Feature" === t3.type)
        e3(t3, 0);
      else if ("FeatureCollection" === t3.type)
        for (var i3 = 0; i3 < t3.features.length && false !== e3(t3.features[i3], i3); i3++)
          ;
    }
    function Bt(t3, e3) {
      var i3, n2, r2, a2, o2, s2, l2, h2, u2, c2, p2 = 0, d2 = "FeatureCollection" === t3.type, f2 = "Feature" === t3.type, g2 = d2 ? t3.features.length : 1;
      for (i3 = 0; i3 < g2; i3++) {
        for (s2 = d2 ? t3.features[i3].geometry : f2 ? t3.geometry : t3, h2 = d2 ? t3.features[i3].properties : f2 ? t3.properties : {}, u2 = d2 ? t3.features[i3].bbox : f2 ? t3.bbox : void 0, c2 = d2 ? t3.features[i3].id : f2 ? t3.id : void 0, o2 = (l2 = !!s2 && "GeometryCollection" === s2.type) ? s2.geometries.length : 1, r2 = 0; r2 < o2; r2++)
          if (null !== (a2 = l2 ? s2.geometries[r2] : s2))
            switch (a2.type) {
              case "Point":
              case "LineString":
              case "MultiPoint":
              case "Polygon":
              case "MultiLineString":
              case "MultiPolygon":
                if (false === e3(a2, p2, h2, u2, c2))
                  return false;
                break;
              case "GeometryCollection":
                for (n2 = 0; n2 < a2.geometries.length; n2++)
                  if (false === e3(a2.geometries[n2], p2, h2, u2, c2))
                    return false;
                break;
              default:
                throw new Error("Unknown Geometry Type");
            }
          else if (false === e3(null, p2, h2, u2, c2))
            return false;
        p2++;
      }
    }
    function Rt(t3, e3) {
      Bt(t3, function(t4, i3, n2, r2, a2) {
        var o2, s2 = null === t4 ? null : t4.type;
        switch (s2) {
          case null:
          case "Point":
          case "LineString":
          case "Polygon":
            return false !== e3(ot(t4, n2, { bbox: r2, id: a2 }), i3, 0) && void 0;
        }
        switch (s2) {
          case "MultiPoint":
            o2 = "Point";
            break;
          case "MultiLineString":
            o2 = "LineString";
            break;
          case "MultiPolygon":
            o2 = "Polygon";
        }
        for (var l2 = 0; l2 < t4.coordinates.length; l2++) {
          var h2 = t4.coordinates[l2];
          if (false === e3(ot({ type: o2, coordinates: h2 }, n2), i3, l2))
            return false;
        }
      });
    }
    nt.Line = nt.extend({ initialize: function(t3) {
      this._map = t3, this._shape = "Line", this.toolbarButtonName = "drawPolyline", this._doesSelfIntersect = false;
    }, enable: function(t3) {
      L.Util.setOptions(this, t3), this._enabled = true, this._markers = [], this._layerGroup = new L.FeatureGroup(), this._layerGroup._pmTempLayer = true, this._layerGroup.addTo(this._map), this._layer = L.polyline([], yt(yt({}, this.options.templineStyle), {}, { pmIgnore: false })), this._setPane(this._layer, "layerPane"), this._layer._pmTempLayer = true, this._layerGroup.addLayer(this._layer), this._hintline = L.polyline([], this.options.hintlineStyle), this._setPane(this._hintline, "layerPane"), this._hintline._pmTempLayer = true, this._layerGroup.addLayer(this._hintline), this._hintMarker = L.marker(this._map.getCenter(), { interactive: false, zIndexOffset: 100, icon: L.divIcon({ className: "marker-icon cursor-marker" }) }), this._setPane(this._hintMarker, "vertexPane"), this._hintMarker._pmTempLayer = true, this._layerGroup.addLayer(this._hintMarker), this.options.cursorMarker && L.DomUtil.addClass(this._hintMarker._icon, "visible"), this.options.tooltips && this._hintMarker.bindTooltip(I("tooltips.firstVertex"), { permanent: true, offset: L.point(0, 10), direction: "bottom", opacity: 0.8 }).openTooltip(), this._map._container.style.cursor = "crosshair", this._map.on("click", this._createVertex, this), this.options.finishOn && "snap" !== this.options.finishOn && this._map.on(this.options.finishOn, this._finishShape, this), "dblclick" === this.options.finishOn && (this.tempMapDoubleClickZoomState = this._map.doubleClickZoom._enabled, this.tempMapDoubleClickZoomState && this._map.doubleClickZoom.disable()), this._map.on("mousemove", this._syncHintMarker, this), this._hintMarker.on("move", this._syncHintLine, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, true), this._otherSnapLayers = [], this._fireDrawStart(), this._setGlobalDrawMode();
    }, disable: function() {
      this._enabled && (this._enabled = false, this._map._container.style.cursor = "", this._map.off("click", this._createVertex, this), this._map.off("mousemove", this._syncHintMarker, this), this.options.finishOn && "snap" !== this.options.finishOn && this._map.off(this.options.finishOn, this._finishShape, this), this.tempMapDoubleClickZoomState && this._map.doubleClickZoom.enable(), this._map.removeLayer(this._layerGroup), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, false), this.options.snappable && this._cleanupSnapping(), this._fireDrawEnd(), this._setGlobalDrawMode());
    }, enabled: function() {
      return this._enabled;
    }, toggle: function(t3) {
      this.enabled() ? this.disable() : this.enable(t3);
    }, _syncHintLine: function() {
      var t3 = this._layer.getLatLngs();
      if (t3.length > 0) {
        var e3 = t3[t3.length - 1];
        this._hintline.setLatLngs([e3, this._hintMarker.getLatLng()]);
      }
    }, _syncHintMarker: function(t3) {
      if (this._hintMarker.setLatLng(t3.latlng), this.options.snappable) {
        var e3 = t3;
        e3.target = this._hintMarker, this._handleSnapping(e3);
      }
      this.options.allowSelfIntersection || this._handleSelfIntersection(true, this._hintMarker.getLatLng());
      var i3 = this._layer._defaultShape().slice();
      i3.push(this._hintMarker.getLatLng()), this._change(i3);
    }, hasSelfIntersection: function() {
      return gt(this._layer.toGeoJSON(15)).features.length > 0;
    }, _handleSelfIntersection: function(t3, e3) {
      var i3 = L.polyline(this._layer.getLatLngs());
      t3 && (e3 || (e3 = this._hintMarker.getLatLng()), i3.addLatLng(e3));
      var n2 = gt(i3.toGeoJSON(15));
      this._doesSelfIntersect = n2.features.length > 0, this._doesSelfIntersect ? this._hintline.setStyle({ color: "#f00000ff" }) : this._hintline.isEmpty() || this._hintline.setStyle(this.options.hintlineStyle);
    }, _createVertex: function(t3) {
      if (this.options.allowSelfIntersection || (this._handleSelfIntersection(true, t3.latlng), !this._doesSelfIntersect)) {
        this._hintMarker._snapped || this._hintMarker.setLatLng(t3.latlng);
        var e3 = this._hintMarker.getLatLng(), i3 = this._layer.getLatLngs(), n2 = i3[i3.length - 1];
        if (e3.equals(i3[0]) || i3.length > 0 && e3.equals(n2))
          this._finishShape();
        else {
          this._layer._latlngInfo = this._layer._latlngInfo || [], this._layer._latlngInfo.push({ latlng: e3, snapInfo: this._hintMarker._snapInfo }), this._layer.addLatLng(e3);
          var r2 = this._createMarker(e3);
          this._setTooltipText(), this._setHintLineAfterNewVertex(e3), this._fireVertexAdded(r2, void 0, e3, "Draw"), this._change(this._layer.getLatLngs()), "snap" === this.options.finishOn && this._hintMarker._snapped && this._finishShape(t3);
        }
      }
    }, _setHintLineAfterNewVertex: function(t3) {
      this._hintline.setLatLngs([t3, t3]);
    }, _removeLastVertex: function() {
      var t3 = this._markers;
      if (t3.length <= 1)
        this.disable();
      else {
        var e3 = this._layer.getLatLngs(), i3 = t3[t3.length - 1], n2 = L.PM.Utils.findDeepMarkerIndex(t3, i3).indexPath;
        t3.pop(), this._layerGroup.removeLayer(i3);
        var r2 = t3[t3.length - 1], a2 = e3.indexOf(r2.getLatLng());
        e3 = e3.slice(0, a2 + 1), this._layer.setLatLngs(e3), this._layer._latlngInfo.pop(), this._syncHintLine(), this._setTooltipText(), this._fireVertexRemoved(i3, n2, "Draw"), this._change(this._layer.getLatLngs());
      }
    }, _finishShape: function() {
      if ((this.options.allowSelfIntersection || (this._handleSelfIntersection(false), !this._doesSelfIntersect)) && (!this.options.requireSnapToFinish || this._hintMarker._snapped || this._isFirstLayer())) {
        var t3 = this._layer.getLatLngs();
        if (!(t3.length <= 1)) {
          var e3 = L.polyline(t3, this.options.pathOptions);
          this._setPane(e3, "layerPane"), this._finishLayer(e3), e3.addTo(this._map.pm._getContainingLayer()), this._fireCreate(e3), this.options.snappable && this._cleanupSnapping(), this.disable(), this.options.continueDrawing && this.enable();
        }
      }
    }, _createMarker: function(t3) {
      var e3 = new L.Marker(t3, { draggable: false, icon: L.divIcon({ className: "marker-icon" }) });
      return this._setPane(e3, "vertexPane"), e3._pmTempLayer = true, this._layerGroup.addLayer(e3), this._markers.push(e3), e3.on("click", this._finishShape, this), e3;
    }, _setTooltipText: function() {
      var t3 = "";
      t3 = I(this._layer.getLatLngs().flat().length <= 1 ? "tooltips.continueLine" : "tooltips.finishLine"), this._hintMarker.setTooltipContent(t3);
    }, _change: function(t3) {
      this._fireChange(t3, "Draw");
    }, setStyle: function() {
      var t3, e3;
      null === (t3 = this._layer) || void 0 === t3 || t3.setStyle(this.options.templineStyle), null === (e3 = this._hintline) || void 0 === e3 || e3.setStyle(this.options.hintlineStyle);
    } }), nt.Polygon = nt.Line.extend({ initialize: function(t3) {
      this._map = t3, this._shape = "Polygon", this.toolbarButtonName = "drawPolygon";
    }, enable: function(t3) {
      L.PM.Draw.Line.prototype.enable.call(this, t3), this._layer.pm._shape = "Polygon";
    }, _createMarker: function(t3) {
      var e3 = new L.Marker(t3, { draggable: false, icon: L.divIcon({ className: "marker-icon" }) });
      return this._setPane(e3, "vertexPane"), e3._pmTempLayer = true, this._layerGroup.addLayer(e3), this._markers.push(e3), 1 === this._layer.getLatLngs().flat().length ? (e3.on("click", this._finishShape, this), this._tempSnapLayerIndex = this._otherSnapLayers.push(e3) - 1, this.options.snappable && this._cleanupSnapping()) : e3.on("click", function() {
        return 1;
      }), e3;
    }, _setTooltipText: function() {
      var t3 = "";
      t3 = I(this._layer.getLatLngs().flat().length <= 2 ? "tooltips.continueLine" : "tooltips.finishPoly"), this._hintMarker.setTooltipContent(t3);
    }, _finishShape: function() {
      if ((this.options.allowSelfIntersection || (this._handleSelfIntersection(true, this._layer.getLatLngs()[0]), !this._doesSelfIntersect)) && (!this.options.requireSnapToFinish || this._hintMarker._snapped || this._isFirstLayer())) {
        var t3 = this._layer.getLatLngs();
        if (!(t3.length <= 2)) {
          var e3 = L.polygon(t3, this.options.pathOptions);
          this._setPane(e3, "layerPane"), this._finishLayer(e3), e3.addTo(this._map.pm._getContainingLayer()), this._fireCreate(e3), this._cleanupSnapping(), this._otherSnapLayers.splice(this._tempSnapLayerIndex, 1), delete this._tempSnapLayerIndex, this.disable(), this.options.continueDrawing && this.enable();
        }
      }
    } }), nt.Rectangle = nt.extend({ initialize: function(t3) {
      this._map = t3, this._shape = "Rectangle", this.toolbarButtonName = "drawRectangle";
    }, enable: function(t3) {
      if (L.Util.setOptions(this, t3), this._enabled = true, this._layerGroup = new L.FeatureGroup(), this._layerGroup._pmTempLayer = true, this._layerGroup.addTo(this._map), this._layer = L.rectangle([[0, 0], [0, 0]], this.options.pathOptions), this._setPane(this._layer, "layerPane"), this._layer._pmTempLayer = true, this._startMarker = L.marker(this._map.getCenter(), { icon: L.divIcon({ className: "marker-icon rect-start-marker" }), draggable: false, zIndexOffset: -100, opacity: this.options.cursorMarker ? 1 : 0 }), this._setPane(this._startMarker, "vertexPane"), this._startMarker._pmTempLayer = true, this._layerGroup.addLayer(this._startMarker), this._hintMarker = L.marker(this._map.getCenter(), { zIndexOffset: 150, icon: L.divIcon({ className: "marker-icon cursor-marker" }) }), this._setPane(this._hintMarker, "vertexPane"), this._hintMarker._pmTempLayer = true, this._layerGroup.addLayer(this._hintMarker), this.options.cursorMarker && L.DomUtil.addClass(this._hintMarker._icon, "visible"), this.options.tooltips && this._hintMarker.bindTooltip(I("tooltips.firstVertex"), { permanent: true, offset: L.point(0, 10), direction: "bottom", opacity: 0.8 }).openTooltip(), this.options.cursorMarker) {
        this._styleMarkers = [];
        for (var e3 = 0; e3 < 2; e3 += 1) {
          var i3 = L.marker(this._map.getCenter(), { icon: L.divIcon({ className: "marker-icon rect-style-marker" }), draggable: false, zIndexOffset: 100 });
          this._setPane(i3, "vertexPane"), i3._pmTempLayer = true, this._layerGroup.addLayer(i3), this._styleMarkers.push(i3);
        }
      }
      this._map._container.style.cursor = "crosshair", this._map.on("click", this._placeStartingMarkers, this), this._map.on("mousemove", this._syncHintMarker, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, true), this._otherSnapLayers = [], this._fireDrawStart(), this._setGlobalDrawMode();
    }, disable: function() {
      this._enabled && (this._enabled = false, this._map._container.style.cursor = "", this._map.off("click", this._finishShape, this), this._map.off("click", this._placeStartingMarkers, this), this._map.off("mousemove", this._syncHintMarker, this), this._map.removeLayer(this._layerGroup), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, false), this.options.snappable && this._cleanupSnapping(), this._fireDrawEnd(), this._setGlobalDrawMode());
    }, enabled: function() {
      return this._enabled;
    }, toggle: function(t3) {
      this.enabled() ? this.disable() : this.enable(t3);
    }, _placeStartingMarkers: function(t3) {
      this._hintMarker._snapped || this._hintMarker.setLatLng(t3.latlng);
      var e3 = this._hintMarker.getLatLng();
      L.DomUtil.addClass(this._startMarker._icon, "visible"), this._startMarker.setLatLng(e3), this.options.cursorMarker && this._styleMarkers && this._styleMarkers.forEach(function(t4) {
        L.DomUtil.addClass(t4._icon, "visible"), t4.setLatLng(e3);
      }), this._map.off("click", this._placeStartingMarkers, this), this._map.on("click", this._finishShape, this), this._hintMarker.setTooltipContent(I("tooltips.finishRect")), this._setRectangleOrigin();
    }, _setRectangleOrigin: function() {
      var t3 = this._startMarker.getLatLng();
      t3 && (this._layerGroup.addLayer(this._layer), this._layer.setLatLngs([t3, t3]), this._hintMarker.on("move", this._syncRectangleSize, this));
    }, _syncHintMarker: function(t3) {
      if (this._hintMarker.setLatLng(t3.latlng), this.options.snappable) {
        var e3 = t3;
        e3.target = this._hintMarker, this._handleSnapping(e3);
      }
      var i3 = this._layerGroup && this._layerGroup.hasLayer(this._layer) ? this._layer.getLatLngs() : [this._hintMarker.getLatLng()];
      this._fireChange(i3, "Draw");
    }, _syncRectangleSize: function() {
      var t3 = this, e3 = V(this._startMarker.getLatLng(), this._map), i3 = V(this._hintMarker.getLatLng(), this._map), n2 = L.PM.Utils._getRotatedRectangle(e3, i3, this.options.rectangleAngle || 0, this._map);
      if (this._layer.setLatLngs(n2), this.options.cursorMarker && this._styleMarkers) {
        var r2 = [];
        n2.forEach(function(t4) {
          t4.equals(e3, 1e-8) || t4.equals(i3, 1e-8) || r2.push(t4);
        }), r2.forEach(function(e4, i4) {
          try {
            t3._styleMarkers[i4].setLatLng(e4);
          } catch (n3) {
          }
        });
      }
    }, _findCorners: function() {
      var t3 = this._layer.getBounds();
      return [t3.getNorthWest(), t3.getNorthEast(), t3.getSouthEast(), t3.getSouthWest()];
    }, _finishShape: function(t3) {
      this._hintMarker._snapped || this._hintMarker.setLatLng(t3.latlng);
      var e3 = this._hintMarker.getLatLng(), i3 = this._startMarker.getLatLng();
      if (!this.options.requireSnapToFinish || this._hintMarker._snapped || this._isFirstLayer()) {
        var n2 = L.rectangle([i3, e3], this.options.pathOptions);
        if (this.options.rectangleAngle) {
          var r2 = L.PM.Utils._getRotatedRectangle(i3, e3, this.options.rectangleAngle || 0, this._map);
          n2.setLatLngs(r2), n2.pm && n2.pm._setAngle(this.options.rectangleAngle || 0);
        }
        this._setPane(n2, "layerPane"), this._finishLayer(n2), n2.addTo(this._map.pm._getContainingLayer()), this._fireCreate(n2), this.disable(), this.options.continueDrawing && this.enable();
      }
    }, setStyle: function() {
      var t3;
      null === (t3 = this._layer) || void 0 === t3 || t3.setStyle(this.options.pathOptions);
    } }), nt.Circle = nt.extend({ initialize: function(t3) {
      this._map = t3, this._shape = "Circle", this.toolbarButtonName = "drawCircle";
    }, enable: function(t3) {
      L.Util.setOptions(this, t3), this.options.radius = 0, this._enabled = true, this._layerGroup = new L.FeatureGroup(), this._layerGroup._pmTempLayer = true, this._layerGroup.addTo(this._map), this._layer = L.circle(this._map.getCenter(), bt(bt({}, this.options.templineStyle), {}, { radius: 0 })), this._setPane(this._layer, "layerPane"), this._layer._pmTempLayer = true, this._centerMarker = L.marker(this._map.getCenter(), { icon: L.divIcon({ className: "marker-icon" }), draggable: false, zIndexOffset: 100 }), this._setPane(this._centerMarker, "vertexPane"), this._centerMarker._pmTempLayer = true, this._hintMarker = L.marker(this._map.getCenter(), { zIndexOffset: 110, icon: L.divIcon({ className: "marker-icon cursor-marker" }) }), this._setPane(this._hintMarker, "vertexPane"), this._hintMarker._pmTempLayer = true, this._layerGroup.addLayer(this._hintMarker), this.options.cursorMarker && L.DomUtil.addClass(this._hintMarker._icon, "visible"), this.options.tooltips && this._hintMarker.bindTooltip(I("tooltips.startCircle"), { permanent: true, offset: L.point(0, 10), direction: "bottom", opacity: 0.8 }).openTooltip(), this._hintline = L.polyline([], this.options.hintlineStyle), this._setPane(this._hintline, "layerPane"), this._hintline._pmTempLayer = true, this._layerGroup.addLayer(this._hintline), this._map._container.style.cursor = "crosshair", this._map.on("click", this._placeCenterMarker, this), this._map.on("mousemove", this._syncHintMarker, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, true), this._otherSnapLayers = [], this._fireDrawStart(), this._setGlobalDrawMode();
    }, disable: function() {
      this._enabled && (this._enabled = false, this._map._container.style.cursor = "", this._map.off("click", this._finishShape, this), this._map.off("click", this._placeCenterMarker, this), this._map.off("mousemove", this._syncHintMarker, this), this._map.removeLayer(this._layerGroup), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, false), this.options.snappable && this._cleanupSnapping(), this._fireDrawEnd(), this._setGlobalDrawMode());
    }, enabled: function() {
      return this._enabled;
    }, toggle: function(t3) {
      this.enabled() ? this.disable() : this.enable(t3);
    }, _syncHintLine: function() {
      var t3 = this._centerMarker.getLatLng(), e3 = this._getNewDestinationOfHintMarker();
      this._hintline.setLatLngs([t3, e3]);
    }, _syncCircleRadius: function() {
      var t3, e3 = this._centerMarker.getLatLng(), i3 = this._hintMarker.getLatLng();
      t3 = this._map.options.crs === L.CRS.Simple ? this._map.distance(e3, i3) : e3.distanceTo(i3), this.options.minRadiusCircle && t3 < this.options.minRadiusCircle ? this._layer.setRadius(this.options.minRadiusCircle) : this.options.maxRadiusCircle && t3 > this.options.maxRadiusCircle ? this._layer.setRadius(this.options.maxRadiusCircle) : this._layer.setRadius(t3);
    }, _syncHintMarker: function(t3) {
      if (this._hintMarker.setLatLng(t3.latlng), this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker()), this.options.snappable) {
        var e3 = t3;
        e3.target = this._hintMarker, this._handleSnapping(e3);
      }
      this._handleHintMarkerSnapping();
      var i3 = this._layerGroup && this._layerGroup.hasLayer(this._centerMarker) ? this._centerMarker.getLatLng() : this._hintMarker.getLatLng();
      this._fireChange(i3, "Draw");
    }, _placeCenterMarker: function(t3) {
      this._layerGroup.addLayer(this._layer), this._layerGroup.addLayer(this._centerMarker), this._hintMarker._snapped || this._hintMarker.setLatLng(t3.latlng);
      var e3 = this._hintMarker.getLatLng();
      this._layerGroup.addLayer(this._layer), this._centerMarker.setLatLng(e3), this._map.off("click", this._placeCenterMarker, this), this._map.on("click", this._finishShape, this), this._placeCircleCenter();
    }, _placeCircleCenter: function() {
      var t3 = this._centerMarker.getLatLng();
      t3 && (this._layer.setLatLng(t3), this._hintMarker.on("move", this._syncHintLine, this), this._hintMarker.on("move", this._syncCircleRadius, this), this._hintMarker.setTooltipContent(I("tooltips.finishCircle")), this._fireCenterPlaced(), this._fireChange(this._layer.getLatLng(), "Draw"));
    }, _finishShape: function(t3) {
      if (!this.options.requireSnapToFinish || this._hintMarker._snapped || this._isFirstLayer()) {
        this._hintMarker._snapped || this._hintMarker.setLatLng(t3.latlng);
        var e3, i3 = this._centerMarker.getLatLng(), n2 = this._hintMarker.getLatLng();
        e3 = this._map.options.crs === L.CRS.Simple ? this._map.distance(i3, n2) : i3.distanceTo(n2), this.options.minRadiusCircle && e3 < this.options.minRadiusCircle ? e3 = this.options.minRadiusCircle : this.options.maxRadiusCircle && e3 > this.options.maxRadiusCircle && (e3 = this.options.maxRadiusCircle);
        var r2 = bt(bt({}, this.options.pathOptions), {}, { radius: e3 }), a2 = L.circle(i3, r2);
        this._setPane(a2, "layerPane"), this._finishLayer(a2), a2.addTo(this._map.pm._getContainingLayer()), a2.pm && a2.pm._updateHiddenPolyCircle(), this._fireCreate(a2), this.disable(), this.options.continueDrawing && this.enable();
      }
    }, _getNewDestinationOfHintMarker: function() {
      var t3 = this._hintMarker.getLatLng();
      if (!this._layerGroup.hasLayer(this._centerMarker))
        return t3;
      var e3 = this._centerMarker.getLatLng(), i3 = e3.distanceTo(t3);
      return this.options.minRadiusCircle && i3 < this.options.minRadiusCircle ? t3 = z(this._map, e3, t3, this.options.minRadiusCircle) : this.options.maxRadiusCircle && i3 > this.options.maxRadiusCircle && (t3 = z(this._map, e3, t3, this.options.maxRadiusCircle)), t3;
    }, _handleHintMarkerSnapping: function() {
      if (this._hintMarker._snapped) {
        var t3 = this._centerMarker.getLatLng(), e3 = this._hintMarker.getLatLng(), i3 = t3.distanceTo(e3);
        this._layerGroup.hasLayer(this._centerMarker) && (this.options.minRadiusCircle && i3 < this.options.minRadiusCircle || this.options.maxRadiusCircle && i3 > this.options.maxRadiusCircle) && this._hintMarker.setLatLng(this._hintMarker._orgLatLng);
      }
      this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker());
    }, setStyle: function() {
      var t3, e3;
      null === (t3 = this._layer) || void 0 === t3 || t3.setStyle(this.options.templineStyle), null === (e3 = this._hintline) || void 0 === e3 || e3.setStyle(this.options.hintlineStyle);
    } }), nt.CircleMarker = nt.Marker.extend({ initialize: function(t3) {
      this._map = t3, this._shape = "CircleMarker", this.toolbarButtonName = "drawCircleMarker", this._layerIsDragging = false;
    }, enable: function(t3) {
      var e3 = this;
      if (L.Util.setOptions(this, t3), this._enabled = true, this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, true), this.options.editable) {
        var i3 = {};
        L.extend(i3, this.options.templineStyle), i3.radius = 0, this._layerGroup = new L.FeatureGroup(), this._layerGroup._pmTempLayer = true, this._layerGroup.addTo(this._map), this._layer = L.circleMarker(this._map.getCenter(), i3), this._setPane(this._layer, "layerPane"), this._layer._pmTempLayer = true, this._centerMarker = L.marker(this._map.getCenter(), { icon: L.divIcon({ className: "marker-icon" }), draggable: false, zIndexOffset: 100 }), this._setPane(this._centerMarker, "vertexPane"), this._centerMarker._pmTempLayer = true, this._hintMarker = L.marker(this._map.getCenter(), { zIndexOffset: 110, icon: L.divIcon({ className: "marker-icon cursor-marker" }) }), this._setPane(this._hintMarker, "vertexPane"), this._hintMarker._pmTempLayer = true, this._layerGroup.addLayer(this._hintMarker), this.options.cursorMarker && L.DomUtil.addClass(this._hintMarker._icon, "visible"), this.options.tooltips && this._hintMarker.bindTooltip(I("tooltips.startCircle"), { permanent: true, offset: L.point(0, 10), direction: "bottom", opacity: 0.8 }).openTooltip(), this._hintline = L.polyline([], this.options.hintlineStyle), this._setPane(this._hintline, "layerPane"), this._hintline._pmTempLayer = true, this._layerGroup.addLayer(this._hintline), this._map.on("click", this._placeCenterMarker, this), this._map._container.style.cursor = "crosshair";
      } else
        this._map.on("click", this._createMarker, this), this._hintMarker = L.circleMarker(this._map.getCenter(), this.options.templineStyle), this._setPane(this._hintMarker, "layerPane"), this._hintMarker._pmTempLayer = true, this._hintMarker.addTo(this._map), this._layer = this._hintMarker, this.options.tooltips && this._hintMarker.bindTooltip(I("tooltips.placeCircleMarker"), { permanent: true, offset: L.point(0, 10), direction: "bottom", opacity: 0.8 }).openTooltip();
      this._map.on("mousemove", this._syncHintMarker, this), !this.options.editable && this.options.markerEditable && this._map.eachLayer(function(t4) {
        e3.isRelevantMarker(t4) && t4.pm.enable();
      }), this._layer.bringToBack(), this._fireDrawStart(), this._setGlobalDrawMode();
    }, disable: function() {
      var t3 = this;
      this._enabled && (this._enabled = false, this.options.editable ? (this._map._container.style.cursor = "", this._map.off("click", this._finishShape, this), this._map.off("click", this._placeCenterMarker, this), this._map.removeLayer(this._layerGroup)) : (this._map.off("click", this._createMarker, this), this._map.eachLayer(function(e3) {
        t3.isRelevantMarker(e3) && e3.pm.disable();
      }), this._hintMarker.remove()), this._map.off("mousemove", this._syncHintMarker, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, false), this.options.snappable && this._cleanupSnapping(), this._fireDrawEnd(), this._setGlobalDrawMode());
    }, _placeCenterMarker: function(t3) {
      this._layerGroup.addLayer(this._layer), this._layerGroup.addLayer(this._centerMarker), this._hintMarker._snapped || this._hintMarker.setLatLng(t3.latlng);
      var e3 = this._hintMarker.getLatLng();
      this._layerGroup.addLayer(this._layer), this._centerMarker.setLatLng(e3), this._map.off("click", this._placeCenterMarker, this), this._map.on("click", this._finishShape, this), this._placeCircleCenter();
    }, _placeCircleCenter: function() {
      var t3 = this._centerMarker.getLatLng();
      t3 && (this._layer.setLatLng(t3), this._hintMarker.on("move", this._syncHintLine, this), this._hintMarker.on("move", this._syncCircleRadius, this), this._hintMarker.setTooltipContent(I("tooltips.finishCircle")), this._fireCenterPlaced(), this._fireChange(this._layer.getLatLng(), "Draw"));
    }, _syncHintLine: function() {
      var t3 = this._centerMarker.getLatLng(), e3 = this._getNewDestinationOfHintMarker();
      this._hintline.setLatLngs([t3, e3]);
    }, _syncCircleRadius: function() {
      var t3 = this._centerMarker.getLatLng(), e3 = this._hintMarker.getLatLng(), i3 = this._map.project(t3).distanceTo(this._map.project(e3));
      this.options.minRadiusCircleMarker && i3 < this.options.minRadiusCircleMarker ? this._layer.setRadius(this.options.minRadiusCircleMarker) : this.options.maxRadiusCircleMarker && i3 > this.options.maxRadiusCircleMarker ? this._layer.setRadius(this.options.maxRadiusCircleMarker) : this._layer.setRadius(i3);
    }, _syncHintMarker: function(t3) {
      if (this._hintMarker.setLatLng(t3.latlng), this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker()), this.options.snappable) {
        var e3 = t3;
        e3.target = this._hintMarker, this._handleSnapping(e3);
      }
      this._handleHintMarkerSnapping();
      var i3 = this._layerGroup && this._layerGroup.hasLayer(this._centerMarker) ? this._centerMarker.getLatLng() : this._hintMarker.getLatLng();
      this._fireChange(i3, "Draw");
    }, isRelevantMarker: function(t3) {
      return t3 instanceof L.CircleMarker && !(t3 instanceof L.Circle) && t3.pm && !t3._pmTempLayer;
    }, _createMarker: function(t3) {
      if ((!this.options.requireSnapToFinish || this._hintMarker._snapped || this._isFirstLayer()) && t3.latlng && !this._layerIsDragging) {
        this._hintMarker._snapped || this._hintMarker.setLatLng(t3.latlng);
        var e3 = this._hintMarker.getLatLng(), i3 = L.circleMarker(e3, this.options.pathOptions);
        this._setPane(i3, "layerPane"), this._finishLayer(i3), i3.addTo(this._map.pm._getContainingLayer()), i3.pm && this.options.markerEditable && i3.pm.enable(), this._fireCreate(i3), this._cleanupSnapping(), this.options.continueDrawing || this.disable();
      }
    }, _finishShape: function(t3) {
      if (!this.options.requireSnapToFinish || this._hintMarker._snapped || this._isFirstLayer()) {
        this._hintMarker._snapped || this._hintMarker.setLatLng(t3.latlng);
        var e3 = this._centerMarker.getLatLng(), i3 = this._hintMarker.getLatLng(), n2 = this._map.project(e3).distanceTo(this._map.project(i3));
        this.options.editable && (this.options.minRadiusCircleMarker && n2 < this.options.minRadiusCircleMarker ? n2 = this.options.minRadiusCircleMarker : this.options.maxRadiusCircleMarker && n2 > this.options.maxRadiusCircleMarker && (n2 = this.options.maxRadiusCircleMarker));
        var r2 = xt(xt({}, this.options.pathOptions), {}, { radius: n2 }), a2 = L.circleMarker(e3, r2);
        this._setPane(a2, "layerPane"), this._finishLayer(a2), a2.addTo(this._map.pm._getContainingLayer()), a2.pm && a2.pm._updateHiddenPolyCircle(), this._fireCreate(a2), this.disable(), this.options.continueDrawing && this.enable();
      }
    }, _getNewDestinationOfHintMarker: function() {
      var t3 = this._hintMarker.getLatLng();
      if (this.options.editable) {
        if (!this._layerGroup.hasLayer(this._centerMarker))
          return t3;
        var e3 = this._centerMarker.getLatLng(), i3 = this._map.project(e3).distanceTo(this._map.project(t3));
        this.options.minRadiusCircleMarker && i3 < this.options.minRadiusCircleMarker ? t3 = z(this._map, e3, t3, this._pxRadiusToMeter(this.options.minRadiusCircleMarker)) : this.options.maxRadiusCircleMarker && i3 > this.options.maxRadiusCircleMarker && (t3 = z(this._map, e3, t3, this._pxRadiusToMeter(this.options.maxRadiusCircleMarker)));
      }
      return t3;
    }, _handleHintMarkerSnapping: function() {
      if (this.options.editable) {
        if (this._hintMarker._snapped) {
          var t3 = this._centerMarker.getLatLng(), e3 = this._hintMarker.getLatLng(), i3 = this._map.project(t3).distanceTo(this._map.project(e3));
          this._layerGroup.hasLayer(this._centerMarker) && (this.options.minRadiusCircleMarker && i3 < this.options.minRadiusCircleMarker || this.options.maxRadiusCircleMarker && i3 > this.options.maxRadiusCircleMarker) && this._hintMarker.setLatLng(this._hintMarker._orgLatLng);
        }
        this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker());
      }
    }, _pxRadiusToMeter: function(t3) {
      var e3 = this._centerMarker.getLatLng(), i3 = this._map.project(e3), n2 = L.point(i3.x + t3, i3.y);
      return this._map.unproject(n2).distanceTo(e3);
    }, setStyle: function() {
      var t3, e3, i3 = {};
      L.extend(i3, this.options.templineStyle), this.options.editable && (i3.radius = 0), null === (t3 = this._layer) || void 0 === t3 || t3.setStyle(i3), null === (e3 = this._hintline) || void 0 === e3 || e3.setStyle(this.options.hintlineStyle);
    } });
    const Tt = function(t3) {
      if (!t3)
        throw new Error("geojson is required");
      var e3 = [];
      return Rt(t3, function(t4) {
        !function(t5, e4) {
          var i3 = [], n2 = t5.geometry;
          if (null !== n2) {
            switch (n2.type) {
              case "Polygon":
                i3 = Pt(n2);
                break;
              case "LineString":
                i3 = [Pt(n2)];
            }
            i3.forEach(function(i4) {
              var n3 = function(t6, e5) {
                var i5 = [];
                return t6.reduce(function(t7, n4) {
                  var r2, a2, o2, s2, l2, h2, u2 = lt([t7, n4], e5);
                  return u2.bbox = (a2 = n4, o2 = (r2 = t7)[0], s2 = r2[1], l2 = a2[0], h2 = a2[1], [o2 < l2 ? o2 : l2, s2 < h2 ? s2 : h2, o2 > l2 ? o2 : l2, s2 > h2 ? s2 : h2]), i5.push(u2), n4;
                }), i5;
              }(i4, t5.properties);
              n3.forEach(function(t6) {
                t6.id = e4.length, e4.push(t6);
              });
            });
          }
        }(t4, e3);
      }), ht(e3);
    };
    var It = i2(1787);
    function jt(t3, e3) {
      var i3 = Pt(t3), n2 = Pt(e3);
      if (2 !== i3.length)
        throw new Error("<intersects> line1 must only contain 2 coordinates");
      if (2 !== n2.length)
        throw new Error("<intersects> line2 must only contain 2 coordinates");
      var r2 = i3[0][0], a2 = i3[0][1], o2 = i3[1][0], s2 = i3[1][1], l2 = n2[0][0], h2 = n2[0][1], u2 = n2[1][0], c2 = n2[1][1], p2 = (c2 - h2) * (o2 - r2) - (u2 - l2) * (s2 - a2), d2 = (u2 - l2) * (a2 - h2) - (c2 - h2) * (r2 - l2), f2 = (o2 - r2) * (a2 - h2) - (s2 - a2) * (r2 - l2);
      if (0 === p2)
        return null;
      var g2 = d2 / p2, _2 = f2 / p2;
      return g2 >= 0 && g2 <= 1 && _2 >= 0 && _2 <= 1 ? st([r2 + g2 * (o2 - r2), a2 + g2 * (s2 - a2)]) : null;
    }
    const At = function(t3, e3) {
      var i3 = {}, n2 = [];
      if ("LineString" === t3.type && (t3 = ot(t3)), "LineString" === e3.type && (e3 = ot(e3)), "Feature" === t3.type && "Feature" === e3.type && null !== t3.geometry && null !== e3.geometry && "LineString" === t3.geometry.type && "LineString" === e3.geometry.type && 2 === t3.geometry.coordinates.length && 2 === e3.geometry.coordinates.length) {
        var r2 = jt(t3, e3);
        return r2 && n2.push(r2), ht(n2);
      }
      var a2 = It();
      return a2.load(Tt(e3)), Dt(Tt(t3), function(t4) {
        Dt(a2.search(t4), function(e4) {
          var r3 = jt(t4, e4);
          if (r3) {
            var a3 = Pt(r3).join(",");
            i3[a3] || (i3[a3] = true, n2.push(r3));
          }
        });
      }), ht(n2);
    };
    const Gt = function(t3, e3, i3) {
      void 0 === i3 && (i3 = {});
      var n2 = Ct(t3), r2 = Ct(e3), a2 = dt(r2[1] - n2[1]), o2 = dt(r2[0] - n2[0]), s2 = dt(n2[1]), l2 = dt(r2[1]), h2 = Math.pow(Math.sin(a2 / 2), 2) + Math.pow(Math.sin(o2 / 2), 2) * Math.cos(s2) * Math.cos(l2);
      return ut(2 * Math.atan2(Math.sqrt(h2), Math.sqrt(1 - h2)), i3.units);
    };
    const Nt = function(t3) {
      var e3 = t3[0], i3 = t3[1], n2 = t3[2], r2 = t3[3];
      if (Gt(t3.slice(0, 2), [n2, i3]) >= Gt(t3.slice(0, 2), [e3, r2])) {
        var a2 = (i3 + r2) / 2;
        return [e3, a2 - (n2 - e3) / 2, n2, a2 + (n2 - e3) / 2];
      }
      var o2 = (e3 + n2) / 2;
      return [o2 - (r2 - i3) / 2, i3, o2 + (r2 - i3) / 2, r2];
    };
    function zt(t3) {
      var e3 = [Infinity, Infinity, -Infinity, -Infinity];
      return Ot(t3, function(t4) {
        e3[0] > t4[0] && (e3[0] = t4[0]), e3[1] > t4[1] && (e3[1] = t4[1]), e3[2] < t4[0] && (e3[2] = t4[0]), e3[3] < t4[1] && (e3[3] = t4[1]);
      }), e3;
    }
    zt["default"] = zt;
    const Ft = zt;
    const Ut = function(t3, e3) {
      void 0 === e3 && (e3 = {});
      var i3 = e3.precision, n2 = e3.coordinates, r2 = e3.mutate;
      if (i3 = i3 === void 0 || null === i3 || isNaN(i3) ? 6 : i3, n2 = n2 === void 0 || null === n2 || isNaN(n2) ? 3 : n2, !t3)
        throw new Error("<geojson> is required");
      if ("number" != typeof i3)
        throw new Error("<precision> must be a number");
      if ("number" != typeof n2)
        throw new Error("<coordinates> must be a number");
      false !== r2 && r2 !== void 0 || (t3 = JSON.parse(JSON.stringify(t3)));
      var a2 = Math.pow(10, i3);
      return Ot(t3, function(t4) {
        !function(t5, e4, i4) {
          t5.length > i4 && t5.splice(i4, t5.length);
          for (var n3 = 0; n3 < t5.length; n3++)
            t5[n3] = Math.round(t5[n3] * e4) / e4;
        }(t4, a2, n2);
      }), t3;
    };
    function Vt(t3, e3, i3) {
      if (void 0 === i3 && (i3 = {}), true === i3.final)
        return function(t4, e4) {
          var i4 = Vt(e4, t4);
          return i4 = (i4 + 180) % 360;
        }(t3, e3);
      var n2 = Ct(t3), r2 = Ct(e3), a2 = dt(n2[0]), o2 = dt(r2[0]), s2 = dt(n2[1]), l2 = dt(r2[1]), h2 = Math.sin(o2 - a2) * Math.cos(l2), u2 = Math.cos(s2) * Math.sin(l2) - Math.sin(s2) * Math.cos(l2) * Math.cos(o2 - a2);
      return pt(Math.atan2(h2, u2));
    }
    function Kt(t3, e3, i3, n2) {
      void 0 === n2 && (n2 = {});
      var r2 = Ct(t3), a2 = dt(r2[0]), o2 = dt(r2[1]), s2 = dt(i3), l2 = ct(e3, n2.units), h2 = Math.asin(Math.sin(o2) * Math.cos(l2) + Math.cos(o2) * Math.sin(l2) * Math.cos(s2));
      return st([pt(a2 + Math.atan2(Math.sin(s2) * Math.sin(l2) * Math.cos(o2), Math.cos(l2) - Math.sin(o2) * Math.sin(h2))), pt(h2)], n2.properties);
    }
    const Ht = function(t3, e3, i3) {
      void 0 === i3 && (i3 = {});
      var n2 = st([Infinity, Infinity], { dist: Infinity }), r2 = 0;
      return Rt(t3, function(t4) {
        for (var a2 = Pt(t4), o2 = 0; o2 < a2.length - 1; o2++) {
          var s2 = st(a2[o2]);
          s2.properties.dist = Gt(e3, s2, i3);
          var l2 = st(a2[o2 + 1]);
          l2.properties.dist = Gt(e3, l2, i3);
          var h2 = Gt(s2, l2, i3), u2 = Math.max(s2.properties.dist, l2.properties.dist), c2 = Vt(s2, l2), p2 = Kt(e3, u2, c2 + 90, i3), d2 = Kt(e3, u2, c2 - 90, i3), f2 = At(lt([p2.geometry.coordinates, d2.geometry.coordinates]), lt([s2.geometry.coordinates, l2.geometry.coordinates])), g2 = null;
          f2.features.length > 0 && ((g2 = f2.features[0]).properties.dist = Gt(e3, g2, i3), g2.properties.location = r2 + Gt(s2, g2, i3)), s2.properties.dist < n2.properties.dist && ((n2 = s2).properties.index = o2, n2.properties.location = r2), l2.properties.dist < n2.properties.dist && ((n2 = l2).properties.index = o2 + 1, n2.properties.location = r2 + h2), g2 && g2.properties.dist < n2.properties.dist && ((n2 = g2).properties.index = o2), r2 += h2;
        }
      }), n2;
    };
    function qt(t3, e3) {
      var i3 = [], n2 = It();
      return Rt(e3, function(e4) {
        if (i3.forEach(function(t4, e5) {
          t4.id = e5;
        }), i3.length) {
          var r2 = n2.search(e4);
          if (r2.features.length) {
            var a2 = Yt(e4, r2);
            i3 = i3.filter(function(t4) {
              return t4.id !== a2.id;
            }), n2.remove(a2), Dt(Jt(a2, e4), function(t4) {
              i3.push(t4), n2.insert(t4);
            });
          }
        } else
          (i3 = Jt(t3, e4).features).forEach(function(t4) {
            t4.bbox || (t4.bbox = Nt(Ft(t4)));
          }), n2.load(ht(i3));
      }), ht(i3);
    }
    function Jt(t3, e3) {
      var i3 = [], n2 = Pt(t3)[0], r2 = Pt(t3)[t3.geometry.coordinates.length - 1];
      if (Xt(n2, Ct(e3)) || Xt(r2, Ct(e3)))
        return ht([t3]);
      var a2 = It(), o2 = Tt(t3);
      a2.load(o2);
      var s2 = a2.search(e3);
      if (!s2.features.length)
        return ht([t3]);
      var l2 = Yt(e3, s2), h2 = function(t4, e4, i4) {
        var n3 = i4;
        return Dt(t4, function(t5, r3) {
          n3 = 0 === r3 && i4 === void 0 ? t5 : e4(n3, t5, r3);
        }), n3;
      }(o2, function(t4, n3, r3) {
        var a3 = Pt(n3)[1], o3 = Ct(e3);
        return r3 === l2.id ? (t4.push(o3), i3.push(lt(t4)), Xt(o3, a3) ? [o3] : [o3, a3]) : (t4.push(a3), t4);
      }, [n2]);
      return h2.length > 1 && i3.push(lt(h2)), ht(i3);
    }
    function Yt(t3, e3) {
      if (!e3.features.length)
        throw new Error("lines must contain features");
      if (1 === e3.features.length)
        return e3.features[0];
      var i3, n2 = Infinity;
      return Dt(e3, function(e4) {
        var r2 = Ht(e4, t3).properties.dist;
        r2 < n2 && (i3 = e4, n2 = r2);
      }), i3;
    }
    function Xt(t3, e3) {
      return t3[0] === e3[0] && t3[1] === e3[1];
    }
    const Zt = function(t3, e3) {
      if (!t3)
        throw new Error("line is required");
      if (!e3)
        throw new Error("splitter is required");
      var i3 = St(t3), n2 = St(e3);
      if ("LineString" !== i3)
        throw new Error("line must be LineString");
      if ("FeatureCollection" === n2)
        throw new Error("splitter cannot be a FeatureCollection");
      if ("GeometryCollection" === n2)
        throw new Error("splitter cannot be a GeometryCollection");
      var r2 = Ut(e3, { precision: 7 });
      switch (n2) {
        case "Point":
          return Jt(t3, r2);
        case "MultiPoint":
          return qt(t3, r2);
        case "LineString":
        case "MultiLineString":
        case "Polygon":
        case "MultiPolygon":
          return qt(t3, At(t3, r2));
      }
    };
    function $t(t3, e3, i3) {
      if (void 0 === i3 && (i3 = {}), !t3)
        throw new Error("point is required");
      if (!e3)
        throw new Error("polygon is required");
      var n2 = Ct(t3), r2 = Et(e3), a2 = r2.type, o2 = e3.bbox, s2 = r2.coordinates;
      if (o2 && false === function(t4, e4) {
        return e4[0] <= t4[0] && e4[1] <= t4[1] && e4[2] >= t4[0] && e4[3] >= t4[1];
      }(n2, o2))
        return false;
      "Polygon" === a2 && (s2 = [s2]);
      for (var l2 = false, h2 = 0; h2 < s2.length && !l2; h2++)
        if (Wt(n2, s2[h2][0], i3.ignoreBoundary)) {
          for (var u2 = false, c2 = 1; c2 < s2[h2].length && !u2; )
            Wt(n2, s2[h2][c2], !i3.ignoreBoundary) && (u2 = true), c2++;
          u2 || (l2 = true);
        }
      return l2;
    }
    function Wt(t3, e3, i3) {
      var n2 = false;
      e3[0][0] === e3[e3.length - 1][0] && e3[0][1] === e3[e3.length - 1][1] && (e3 = e3.slice(0, e3.length - 1));
      for (var r2 = 0, a2 = e3.length - 1; r2 < e3.length; a2 = r2++) {
        var o2 = e3[r2][0], s2 = e3[r2][1], l2 = e3[a2][0], h2 = e3[a2][1];
        if (t3[1] * (o2 - l2) + s2 * (l2 - t3[0]) + h2 * (t3[0] - o2) == 0 && (o2 - t3[0]) * (l2 - t3[0]) <= 0 && (s2 - t3[1]) * (h2 - t3[1]) <= 0)
          return !i3;
        s2 > t3[1] != h2 > t3[1] && t3[0] < (l2 - o2) * (t3[1] - s2) / (h2 - s2) + o2 && (n2 = !n2);
      }
      return n2;
    }
    function Qt(t3, e3, i3, n2, r2) {
      var a2 = i3[0], o2 = i3[1], s2 = t3[0], l2 = t3[1], h2 = e3[0], u2 = e3[1], c2 = h2 - s2, p2 = u2 - l2, d2 = (i3[0] - s2) * p2 - (i3[1] - l2) * c2;
      if (null !== r2) {
        if (Math.abs(d2) > r2)
          return false;
      } else if (0 !== d2)
        return false;
      return n2 ? "start" === n2 ? Math.abs(c2) >= Math.abs(p2) ? c2 > 0 ? s2 < a2 && a2 <= h2 : h2 <= a2 && a2 < s2 : p2 > 0 ? l2 < o2 && o2 <= u2 : u2 <= o2 && o2 < l2 : "end" === n2 ? Math.abs(c2) >= Math.abs(p2) ? c2 > 0 ? s2 <= a2 && a2 < h2 : h2 < a2 && a2 <= s2 : p2 > 0 ? l2 <= o2 && o2 < u2 : u2 < o2 && o2 <= l2 : "both" === n2 && (Math.abs(c2) >= Math.abs(p2) ? c2 > 0 ? s2 < a2 && a2 < h2 : h2 < a2 && a2 < s2 : p2 > 0 ? l2 < o2 && o2 < u2 : u2 < o2 && o2 < l2) : Math.abs(c2) >= Math.abs(p2) ? c2 > 0 ? s2 <= a2 && a2 <= h2 : h2 <= a2 && a2 <= s2 : p2 > 0 ? l2 <= o2 && o2 <= u2 : u2 <= o2 && o2 <= l2;
    }
    const te = function(t3, e3, i3) {
      void 0 === i3 && (i3 = {});
      for (var n2 = Ct(t3), r2 = Pt(e3), a2 = 0; a2 < r2.length - 1; a2++) {
        var o2 = false;
        if (i3.ignoreEndVertices && (0 === a2 && (o2 = "start"), a2 === r2.length - 2 && (o2 = "end"), 0 === a2 && a2 + 1 === r2.length - 1 && (o2 = "both")), Qt(r2[a2], r2[a2 + 1], n2, o2, "undefined" == typeof i3.epsilon ? null : i3.epsilon))
          return true;
      }
      return false;
    };
    function ee(t3, e3) {
      var i3 = Et(t3), n2 = Et(e3), r2 = i3.type, a2 = n2.type, o2 = i3.coordinates, s2 = n2.coordinates;
      switch (r2) {
        case "Point":
          if ("Point" === a2)
            return ne(o2, s2);
          throw new Error("feature2 " + a2 + " geometry not supported");
        case "MultiPoint":
          switch (a2) {
            case "Point":
              return function(t4, e4) {
                var i4, n3 = false;
                for (i4 = 0; i4 < t4.coordinates.length; i4++)
                  if (ne(t4.coordinates[i4], e4.coordinates)) {
                    n3 = true;
                    break;
                  }
                return n3;
              }(i3, n2);
            case "MultiPoint":
              return function(t4, e4) {
                for (var i4 = 0, n3 = e4.coordinates; i4 < n3.length; i4++) {
                  for (var r3 = n3[i4], a3 = false, o3 = 0, s3 = t4.coordinates; o3 < s3.length; o3++) {
                    if (ne(r3, s3[o3])) {
                      a3 = true;
                      break;
                    }
                  }
                  if (!a3)
                    return false;
                }
                return true;
              }(i3, n2);
            default:
              throw new Error("feature2 " + a2 + " geometry not supported");
          }
        case "LineString":
          switch (a2) {
            case "Point":
              return te(n2, i3, { ignoreEndVertices: true });
            case "LineString":
              return function(t4, e4) {
                for (var i4 = false, n3 = 0, r3 = e4.coordinates; n3 < r3.length; n3++) {
                  var a3 = r3[n3];
                  if (te({ type: "Point", coordinates: a3 }, t4, { ignoreEndVertices: true }) && (i4 = true), !te({ type: "Point", coordinates: a3 }, t4, { ignoreEndVertices: false }))
                    return false;
                }
                return i4;
              }(i3, n2);
            case "MultiPoint":
              return function(t4, e4) {
                for (var i4 = false, n3 = 0, r3 = e4.coordinates; n3 < r3.length; n3++) {
                  var a3 = r3[n3];
                  if (te(a3, t4, { ignoreEndVertices: true }) && (i4 = true), !te(a3, t4))
                    return false;
                }
                if (i4)
                  return true;
                return false;
              }(i3, n2);
            default:
              throw new Error("feature2 " + a2 + " geometry not supported");
          }
        case "Polygon":
          switch (a2) {
            case "Point":
              return $t(n2, i3, { ignoreBoundary: true });
            case "LineString":
              return function(t4, e4) {
                var i4 = false, n3 = 0, r3 = Ft(t4), a3 = Ft(e4);
                if (!ie(r3, a3))
                  return false;
                for (; n3 < e4.coordinates.length - 1; n3++) {
                  if ($t({ type: "Point", coordinates: re(e4.coordinates[n3], e4.coordinates[n3 + 1]) }, t4, { ignoreBoundary: true })) {
                    i4 = true;
                    break;
                  }
                }
                return i4;
              }(i3, n2);
            case "Polygon":
              return function(t4, e4) {
                if ("Feature" === t4.type && null === t4.geometry)
                  return false;
                if ("Feature" === e4.type && null === e4.geometry)
                  return false;
                var i4 = Ft(t4), n3 = Ft(e4);
                if (!ie(i4, n3))
                  return false;
                for (var r3 = Et(e4).coordinates, a3 = 0, o3 = r3; a3 < o3.length; a3++)
                  for (var s3 = 0, l2 = o3[a3]; s3 < l2.length; s3++) {
                    if (!$t(l2[s3], t4))
                      return false;
                  }
                return true;
              }(i3, n2);
            case "MultiPoint":
              return function(t4, e4) {
                for (var i4 = 0, n3 = e4.coordinates; i4 < n3.length; i4++) {
                  if (!$t(n3[i4], t4, { ignoreBoundary: true }))
                    return false;
                }
                return true;
              }(i3, n2);
            default:
              throw new Error("feature2 " + a2 + " geometry not supported");
          }
        default:
          throw new Error("feature1 " + r2 + " geometry not supported");
      }
    }
    function ie(t3, e3) {
      return !(t3[0] > e3[0]) && (!(t3[2] < e3[2]) && (!(t3[1] > e3[1]) && !(t3[3] < e3[3])));
    }
    function ne(t3, e3) {
      return t3[0] === e3[0] && t3[1] === e3[1];
    }
    function re(t3, e3) {
      return [(t3[0] + e3[0]) / 2, (t3[1] + e3[1]) / 2];
    }
    var ae = i2(2676), oe = i2.n(ae);
    function se(t3) {
      var e3 = { type: "Feature" };
      return e3.geometry = t3, e3;
    }
    function le(t3) {
      return "Feature" === t3.type ? t3.geometry : t3;
    }
    function he(t3) {
      return t3 && t3.geometry && t3.geometry.coordinates ? t3.geometry.coordinates : t3;
    }
    function ue(t3) {
      return se({ type: "Polygon", coordinates: t3 });
    }
    function ce(t3) {
      return se({ type: "MultiPolygon", coordinates: t3 });
    }
    function pe(t3) {
      return Array.isArray(t3) ? 1 + pe(t3[0]) : -1;
    }
    function de(t3) {
      t3 instanceof L.Polyline && (t3 = t3.toGeoJSON(15));
      var e3 = he(t3), i3 = pe(e3), n2 = [];
      return i3 > 1 ? e3.forEach(function(t4) {
        n2.push(function(t5) {
          return se({ type: "LineString", coordinates: t5 });
        }(t4));
      }) : n2.push(t3), n2;
    }
    function fe(t3) {
      var e3 = [];
      return t3.eachLayer(function(t4) {
        e3.push(he(t4.toGeoJSON(15)));
      }), function(t4) {
        return se({ type: "MultiLineString", coordinates: t4 });
      }(e3);
    }
    function ge(t3, e3) {
      return function(t4) {
        if (Array.isArray(t4))
          return t4;
      }(t3) || function(t4, e4) {
        var i3 = null == t4 ? null : "undefined" != typeof Symbol && t4[Symbol.iterator] || t4["@@iterator"];
        if (null == i3)
          return;
        var n2, r2, a2 = [], o2 = true, s2 = false;
        try {
          for (i3 = i3.call(t4); !(o2 = (n2 = i3.next()).done) && (a2.push(n2.value), !e4 || a2.length !== e4); o2 = true)
            ;
        } catch (l2) {
          s2 = true, r2 = l2;
        } finally {
          try {
            o2 || null == i3["return"] || i3["return"]();
          } finally {
            if (s2)
              throw r2;
          }
        }
        return a2;
      }(t3, e3) || function(t4, e4) {
        if (!t4)
          return;
        if ("string" == typeof t4)
          return _e(t4, e4);
        var i3 = Object.prototype.toString.call(t4).slice(8, -1);
        "Object" === i3 && t4.constructor && (i3 = t4.constructor.name);
        if ("Map" === i3 || "Set" === i3)
          return Array.from(t4);
        if ("Arguments" === i3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i3))
          return _e(t4, e4);
      }(t3, e3) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function _e(t3, e3) {
      (null == e3 || e3 > t3.length) && (e3 = t3.length);
      for (var i3 = 0, n2 = new Array(e3); i3 < e3; i3++)
        n2[i3] = t3[i3];
      return n2;
    }
    function me(t3) {
      return function(t4) {
        if (Array.isArray(t4))
          return ye(t4);
      }(t3) || function(t4) {
        if ("undefined" != typeof Symbol && null != t4[Symbol.iterator] || null != t4["@@iterator"])
          return Array.from(t4);
      }(t3) || function(t4, e3) {
        if (!t4)
          return;
        if ("string" == typeof t4)
          return ye(t4, e3);
        var i3 = Object.prototype.toString.call(t4).slice(8, -1);
        "Object" === i3 && t4.constructor && (i3 = t4.constructor.name);
        if ("Map" === i3 || "Set" === i3)
          return Array.from(t4);
        if ("Arguments" === i3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i3))
          return ye(t4, e3);
      }(t3) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function ye(t3, e3) {
      (null == e3 || e3 > t3.length) && (e3 = t3.length);
      for (var i3 = 0, n2 = new Array(e3); i3 < e3; i3++)
        n2[i3] = t3[i3];
      return n2;
    }
    nt.Cut = nt.Polygon.extend({ initialize: function(t3) {
      this._map = t3, this._shape = "Cut", this.toolbarButtonName = "cutPolygon";
    }, _finishShape: function() {
      var t3 = this;
      if (this._editedLayers = [], (this.options.allowSelfIntersection || (this._handleSelfIntersection(true, this._layer.getLatLngs()[0]), !this._doesSelfIntersect)) && (!this.options.requireSnapToFinish || this._hintMarker._snapped || this._isFirstLayer())) {
        var e3 = this._layer.getLatLngs();
        if (!(e3.length <= 2)) {
          var i3 = L.polygon(e3, this.options.pathOptions);
          i3._latlngInfos = this._layer._latlngInfo, this.cut(i3), this._cleanupSnapping(), this._otherSnapLayers.splice(this._tempSnapLayerIndex, 1), delete this._tempSnapLayerIndex, this._editedLayers.forEach(function(e4) {
            var i4 = e4.layer, n2 = e4.originalLayer;
            t3._fireCut(n2, i4, n2), t3._fireCut(t3._map, i4, n2), n2.pm._fireEdit();
          }), this._editedLayers = [], this.disable(), this.options.continueDrawing && this.enable();
        }
      }
    }, cut: function(t3) {
      var e3 = this, i3 = this._map._layers, n2 = t3._latlngInfos || [];
      Object.keys(i3).map(function(t4) {
        return i3[t4];
      }).filter(function(t4) {
        return t4.pm;
      }).filter(function(t4) {
        return !t4._pmTempLayer;
      }).filter(function(t4) {
        return !L.PM.optIn && !t4.options.pmIgnore || L.PM.optIn && false === t4.options.pmIgnore;
      }).filter(function(t4) {
        return t4 instanceof L.Polyline;
      }).filter(function(e4) {
        return e4 !== t3;
      }).filter(function(t4) {
        return t4.pm.options.allowCutting;
      }).filter(function(t4) {
        return !(e3.options.layersToCut && L.Util.isArray(e3.options.layersToCut) && e3.options.layersToCut.length > 0) || e3.options.layersToCut.indexOf(t4) > -1;
      }).filter(function(t4) {
        return !e3._layerGroup.hasLayer(t4);
      }).filter(function(e4) {
        try {
          var i4 = !!At(t3.toGeoJSON(15), e4.toGeoJSON(15)).features.length > 0;
          return i4 || e4 instanceof L.Polyline && !(e4 instanceof L.Polygon) ? i4 : (n3 = t3.toGeoJSON(15), r2 = e4.toGeoJSON(15), a2 = le(n3), o2 = le(r2), !(0 === (s2 = oe().intersection(a2.coordinates, o2.coordinates)).length || !(1 === s2.length ? ue(s2[0]) : ce(s2))));
        } catch (l2) {
          return e4 instanceof L.Polygon && console.error("You can't cut polygons with self-intersections"), false;
        }
        var n3, r2, a2, o2, s2;
      }).forEach(function(i4) {
        var r2;
        if (i4 instanceof L.Polygon) {
          var a2 = (r2 = L.polygon(i4.getLatLngs())).getLatLngs();
          n2.forEach(function(t4) {
            if (t4 && t4.snapInfo) {
              var i5 = t4.latlng, n3 = e3._calcClosestLayer(i5, [r2]);
              if (n3 && n3.segment && n3.distance < e3.options.snapDistance) {
                var o3 = n3.segment;
                if (o3 && 2 === o3.length) {
                  var s3 = L.PM.Utils._getIndexFromSegment(a2, o3), l3 = s3.indexPath, h3 = s3.parentPath, u3 = s3.newIndex;
                  (l3.length > 1 ? B()(a2, h3) : a2).splice(u3, 0, i5);
                }
              }
            }
          });
        } else
          r2 = i4;
        var o2 = e3._cutLayer(t3, r2), s2 = L.geoJSON(o2, i4.options);
        if (1 === s2.getLayers().length) {
          var l2 = s2.getLayers();
          s2 = ge(l2, 1)[0];
        }
        e3._setPane(s2, "layerPane");
        var h2 = s2.addTo(e3._map.pm._getContainingLayer());
        if (h2.pm.enable(i4.pm.options), h2.pm.disable(), i4._pmTempLayer = true, t3._pmTempLayer = true, i4.remove(), i4.removeFrom(e3._map.pm._getContainingLayer()), t3.remove(), t3.removeFrom(e3._map.pm._getContainingLayer()), h2.getLayers && 0 === h2.getLayers().length && e3._map.pm.removeLayer({ target: h2 }), h2 instanceof L.LayerGroup ? (h2.eachLayer(function(t4) {
          e3._addDrawnLayerProp(t4);
        }), e3._addDrawnLayerProp(h2)) : e3._addDrawnLayerProp(h2), e3.options.layersToCut && L.Util.isArray(e3.options.layersToCut) && e3.options.layersToCut.length > 0) {
          var u2 = e3.options.layersToCut.indexOf(i4);
          u2 > -1 && e3.options.layersToCut.splice(u2, 1);
        }
        e3._editedLayers.push({ layer: h2, originalLayer: i4 });
      });
    }, _cutLayer: function(t3, e3) {
      var i3, n2, r2, a2, o2, s2, l2 = L.geoJSON();
      if (e3 instanceof L.Polygon)
        n2 = e3.toGeoJSON(15), r2 = t3.toGeoJSON(15), a2 = le(n2), o2 = le(r2), i3 = 0 === (s2 = oe().difference(a2.coordinates, o2.coordinates)).length ? null : 1 === s2.length ? ue(s2[0]) : ce(s2);
      else {
        var h2 = de(e3);
        h2.forEach(function(e4) {
          var i4 = Zt(e4, t3.toGeoJSON(15));
          (i4 && i4.features.length > 0 ? L.geoJSON(i4) : L.geoJSON(e4)).getLayers().forEach(function(e5) {
            ee(t3.toGeoJSON(15), e5.toGeoJSON(15)) || e5.addTo(l2);
          });
        }), i3 = h2.length > 1 ? fe(l2) : l2.toGeoJSON(15);
      }
      return i3;
    }, _change: L.Util.falseFn }), nt.Text = nt.extend({ initialize: function(t3) {
      this._map = t3, this._shape = "Text", this.toolbarButtonName = "drawText";
    }, enable: function(t3) {
      L.Util.setOptions(this, t3), this._enabled = true, this._map.on("click", this._createMarker, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, true), this._hintMarker = L.marker(this._map.getCenter(), { interactive: false, zIndexOffset: 100, icon: L.divIcon({ className: "marker-icon cursor-marker" }) }), this._setPane(this._hintMarker, "vertexPane"), this._hintMarker._pmTempLayer = true, this._hintMarker.addTo(this._map), this.options.cursorMarker && L.DomUtil.addClass(this._hintMarker._icon, "visible"), this.options.tooltips && this._hintMarker.bindTooltip(I("tooltips.placeText"), { permanent: true, offset: L.point(0, 10), direction: "bottom", opacity: 0.8 }).openTooltip(), this._layer = this._hintMarker, this._map.on("mousemove", this._syncHintMarker, this), this._fireDrawStart(), this._setGlobalDrawMode();
    }, disable: function() {
      this._enabled && (this._enabled = false, this._map.off("click", this._createMarker, this), this._hintMarker.remove(), this._map.off("mousemove", this._syncHintMarker, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, false), this.options.snappable && this._cleanupSnapping(), this._fireDrawEnd(), this._setGlobalDrawMode());
    }, enabled: function() {
      return this._enabled;
    }, toggle: function(t3) {
      this.enabled() ? this.disable() : this.enable(t3);
    }, _syncHintMarker: function(t3) {
      if (this._hintMarker.setLatLng(t3.latlng), this.options.snappable) {
        var e3 = t3;
        e3.target = this._hintMarker, this._handleSnapping(e3);
      }
    }, _createMarker: function(t3) {
      var e3;
      if (t3.latlng && (!this.options.requireSnapToFinish || this._hintMarker._snapped || this._isFirstLayer())) {
        this._hintMarker._snapped || this._hintMarker.setLatLng(t3.latlng);
        var i3 = this._hintMarker.getLatLng();
        if (this.textArea = this._createTextArea(), null !== (e3 = this.options.textOptions) && void 0 !== e3 && e3.className) {
          var n2, r2 = this.options.textOptions.className.split(" ");
          (n2 = this.textArea.classList).add.apply(n2, me(r2));
        }
        var a2 = this._createTextIcon(this.textArea), o2 = new L.Marker(i3, { textMarker: true, _textMarkerOverPM: true, icon: a2 });
        if (this._setPane(o2, "markerPane"), this._finishLayer(o2), o2.pm || (o2.options.draggable = false), o2.addTo(this._map.pm._getContainingLayer()), o2.pm) {
          var s2, l2, h2, u2, c2;
          o2.pm.textArea = this.textArea, L.setOptions(o2.pm, { removeIfEmpty: null === (s2 = null === (l2 = this.options.textOptions) || void 0 === l2 ? void 0 : l2.removeIfEmpty) || void 0 === s2 || s2 });
          var p2 = null === (h2 = null === (u2 = this.options.textOptions) || void 0 === u2 ? void 0 : u2.focusAfterDraw) || void 0 === h2 || h2;
          o2.pm._createTextMarker(p2), null !== (c2 = this.options.textOptions) && void 0 !== c2 && c2.text && o2.pm.setText(this.options.textOptions.text);
        }
        this._fireCreate(o2), this._cleanupSnapping(), this.disable(), this.options.continueDrawing && this.enable();
      }
    }, _createTextArea: function() {
      var t3 = document.createElement("textarea");
      return t3.autofocus = true, t3.readOnly = true, t3.classList.add("pm-textarea", "pm-disabled"), t3;
    }, _createTextIcon: function(t3) {
      return L.divIcon({ className: "pm-text-marker", html: t3 });
    } });
    const ve = { enableLayerDrag: function() {
      if (this.options.draggable && this._layer._map) {
        this.disable(), this._layerDragEnabled = true, this._map || (this._map = this._layer._map), (this._layer instanceof L.Marker || this._layer instanceof L.ImageOverlay) && L.DomEvent.on(this._getDOMElem(), "dragstart", this._stopDOMImageDrag), this._layer.dragging && this._layer.dragging.disable(), this._tempDragCoord = null, K(this._layer) instanceof L.Canvas ? (this._layer.on("mouseout", this.removeDraggingClass, this), this._layer.on("mouseover", this.addDraggingClass, this)) : this.addDraggingClass(), this._originalMapDragState = this._layer._map.dragging._enabled, this._safeToCacheDragState = true;
        var t3 = this._getDOMElem();
        t3 && (K(this._layer) instanceof L.Canvas ? (this._layer.on("touchstart mousedown", this._dragMixinOnMouseDown, this), this._map.pm._addTouchEvents(t3)) : L.DomEvent.on(t3, "touchstart mousedown", this._simulateMouseDownEvent, this)), this._fireDragEnable();
      }
    }, disableLayerDrag: function() {
      this._layerDragEnabled = false, K(this._layer) instanceof L.Canvas ? (this._layer.off("mouseout", this.removeDraggingClass, this), this._layer.off("mouseover", this.addDraggingClass, this)) : this.removeDraggingClass(), this._originalMapDragState && this._dragging && this._map.dragging.enable(), this._safeToCacheDragState = false, this._layer.dragging && this._layer.dragging.disable();
      var t3 = this._getDOMElem();
      t3 && (K(this._layer) instanceof L.Canvas ? (this._layer.off("touchstart mousedown", this._dragMixinOnMouseDown, this), this._map.pm._removeTouchEvents(t3)) : L.DomEvent.off(t3, "touchstart mousedown", this._simulateMouseDownEvent, this)), this._layerDragged && this._fireUpdate(), this._layerDragged = false, this._fireDragDisable();
    }, dragging: function() {
      return this._dragging;
    }, layerDragEnabled: function() {
      return !!this._layerDragEnabled;
    }, _simulateMouseDownEvent: function(t3) {
      var e3 = t3.touches ? t3.touches[0] : t3, i3 = { originalEvent: e3, target: this._layer };
      return i3.containerPoint = this._map.mouseEventToContainerPoint(e3), i3.latlng = this._map.containerPointToLatLng(i3.containerPoint), this._dragMixinOnMouseDown(i3), false;
    }, _simulateMouseMoveEvent: function(t3) {
      var e3 = t3.touches ? t3.touches[0] : t3, i3 = { originalEvent: e3, target: this._layer };
      return i3.containerPoint = this._map.mouseEventToContainerPoint(e3), i3.latlng = this._map.containerPointToLatLng(i3.containerPoint), this._dragMixinOnMouseMove(i3), false;
    }, _simulateMouseUpEvent: function(t3) {
      var e3 = { originalEvent: t3.touches ? t3.touches[0] : t3, target: this._layer };
      return -1 === t3.type.indexOf("touch") && (e3.containerPoint = this._map.mouseEventToContainerPoint(t3), e3.latlng = this._map.containerPointToLatLng(e3.containerPoint)), this._dragMixinOnMouseUp(e3), false;
    }, _dragMixinOnMouseDown: function(t3) {
      if (!(t3.originalEvent.button > 0)) {
        this._overwriteEventIfItComesFromMarker(t3);
        var e3 = t3._fromLayerSync, i3 = this._syncLayers("_dragMixinOnMouseDown", t3);
        this._layer instanceof L.Marker && (!this.options.snappable || e3 || i3 ? this._disableSnapping() : this._initSnappableMarkers()), this._layer instanceof L.CircleMarker && !(this._layer instanceof L.Circle) && (!this.options.snappable || e3 || i3 ? this._layer.pm.options.editable ? this._layer.pm._disableSnapping() : this._layer.pm._disableSnappingDrag() : this._layer.pm.options.editable || this._initSnappableMarkersDrag()), this._safeToCacheDragState && (this._originalMapDragState = this._layer._map.dragging._enabled, this._safeToCacheDragState = false), this._tempDragCoord = t3.latlng, L.DomEvent.on(this._map.getContainer(), "touchend mouseup", this._simulateMouseUpEvent, this), L.DomEvent.on(this._map.getContainer(), "touchmove mousemove", this._simulateMouseMoveEvent, this);
      }
    }, _dragMixinOnMouseMove: function(t3) {
      this._overwriteEventIfItComesFromMarker(t3);
      var e3 = this._getDOMElem();
      this._syncLayers("_dragMixinOnMouseMove", t3), this._dragging || (this._dragging = true, L.DomUtil.addClass(e3, "leaflet-pm-dragging"), this._layer instanceof L.Marker || this._layer.bringToFront(), this._originalMapDragState && this._map.dragging.disable(), this._fireDragStart()), this._tempDragCoord || (this._tempDragCoord = t3.latlng), this._onLayerDrag(t3), this._layer instanceof L.CircleMarker && this._layer.pm._updateHiddenPolyCircle();
    }, _dragMixinOnMouseUp: function(t3) {
      var e3 = this, i3 = this._getDOMElem();
      return this._syncLayers("_dragMixinOnMouseUp", t3), this._originalMapDragState && this._map.dragging.enable(), this._safeToCacheDragState = true, L.DomEvent.off(this._map.getContainer(), "touchmove mousemove", this._simulateMouseMoveEvent, this), L.DomEvent.off(this._map.getContainer(), "touchend mouseup", this._simulateMouseUpEvent, this), !!this._dragging && (this._layer instanceof L.CircleMarker && this._layer.pm._updateHiddenPolyCircle(), this._layerDragged = true, window.setTimeout(function() {
        e3._dragging = false, i3 && L.DomUtil.removeClass(i3, "leaflet-pm-dragging"), e3._fireDragEnd(), e3._fireEdit(), e3._layerEdited = true;
      }, 10), true);
    }, _onLayerDrag: function(t3) {
      var e3 = t3.latlng, i3 = e3.lat - this._tempDragCoord.lat, n2 = e3.lng - this._tempDragCoord.lng, r2 = function u2(t4) {
        return t4.map(function(t5) {
          if (Array.isArray(t5))
            return u2(t5);
          var e4 = { lat: t5.lat + i3, lng: t5.lng + n2 };
          return (t5.alt || 0 === t5.alt) && (e4.alt = t5.alt), e4;
        });
      };
      if (this._layer instanceof L.Circle || this._layer instanceof L.CircleMarker && this._layer.options.editable) {
        var a2 = r2([this._layer.getLatLng()]);
        this._layer.setLatLng(a2[0]), this._fireChange(this._layer.getLatLng(), "Edit");
      } else if (this._layer instanceof L.CircleMarker || this._layer instanceof L.Marker) {
        var o2 = this._layer.getLatLng();
        this._layer._snapped && (o2 = this._layer._orgLatLng);
        var s2 = r2([o2]);
        this._layer.setLatLng(s2[0]), this._fireChange(this._layer.getLatLng(), "Edit");
      } else if (this._layer instanceof L.ImageOverlay) {
        var l2 = r2([this._layer.getBounds().getNorthWest(), this._layer.getBounds().getSouthEast()]);
        this._layer.setBounds(l2), this._fireChange(this._layer.getBounds(), "Edit");
      } else {
        var h2 = r2(this._layer.getLatLngs());
        this._layer.setLatLngs(h2), this._fireChange(this._layer.getLatLngs(), "Edit");
      }
      this._tempDragCoord = e3, t3.layer = this._layer, this._fireDrag(t3);
    }, addDraggingClass: function() {
      var t3 = this._getDOMElem();
      t3 && L.DomUtil.addClass(t3, "leaflet-pm-draggable");
    }, removeDraggingClass: function() {
      var t3 = this._getDOMElem();
      t3 && L.DomUtil.removeClass(t3, "leaflet-pm-draggable");
    }, _getDOMElem: function() {
      var t3 = null;
      return this._layer._path ? t3 = this._layer._path : this._layer._renderer && this._layer._renderer._container ? t3 = this._layer._renderer._container : this._layer._image ? t3 = this._layer._image : this._layer._icon && (t3 = this._layer._icon), t3;
    }, _overwriteEventIfItComesFromMarker: function(t3) {
      t3.target.getLatLng && (!t3.target._radius || t3.target._radius <= 10) && (t3.containerPoint = this._map.mouseEventToContainerPoint(t3.originalEvent), t3.latlng = this._map.containerPointToLatLng(t3.containerPoint));
    }, _syncLayers: function(t3, e3) {
      var i3 = this;
      if (this.enabled())
        return false;
      if (!e3._fromLayerSync && this._layer === e3.target && this.options.syncLayersOnDrag) {
        e3._fromLayerSync = true;
        var n2 = [];
        if (L.Util.isArray(this.options.syncLayersOnDrag))
          n2 = this.options.syncLayersOnDrag, this.options.syncLayersOnDrag.forEach(function(t4) {
            t4 instanceof L.LayerGroup && (n2 = n2.concat(t4.pm.getLayers(true)));
          });
        else if (true === this.options.syncLayersOnDrag && this._parentLayerGroup)
          for (var r2 in this._parentLayerGroup) {
            var a2 = this._parentLayerGroup[r2];
            a2.pm && (n2 = a2.pm.getLayers(true));
          }
        return L.Util.isArray(n2) && n2.length > 0 && (n2 = n2.filter(function(t4) {
          return !!t4.pm;
        }).filter(function(t4) {
          return !!t4.pm.options.draggable;
        })).forEach(function(n3) {
          n3 !== i3._layer && n3.pm[t3] && (n3._snapped = false, n3.pm[t3](e3));
        }), n2.length > 0;
      }
      return false;
    }, _stopDOMImageDrag: function(t3) {
      return t3.preventDefault(), false;
    } };
    function Le(t3, e3, i3) {
      var n2 = i3.getMaxZoom();
      if (n2 === Infinity && (n2 = i3.getZoom()), L.Util.isArray(t3)) {
        var r2 = [];
        return t3.forEach(function(t4) {
          r2.push(Le(t4, e3, i3));
        }), r2;
      }
      return t3 instanceof L.LatLng ? function(t4, e4, i4, n3) {
        return i4.unproject(e4.transform(i4.project(t4, n3)), n3);
      }(t3, e3, i3, n2) : null;
    }
    function be(t3, e3) {
      e3 instanceof L.Layer && (e3 = e3.getLatLng());
      var i3 = t3.getMaxZoom();
      return i3 === Infinity && (i3 = t3.getZoom()), t3.project(e3, i3);
    }
    function ke(t3, e3) {
      var i3 = t3.getMaxZoom();
      return i3 === Infinity && (i3 = t3.getZoom()), t3.unproject(e3, i3);
    }
    var Me = { _onRotateStart: function(t3) {
      this._preventRenderingMarkers(true), this._rotationOriginLatLng = this._getRotationCenter().clone(), this._rotationOriginPoint = be(this._map, this._rotationOriginLatLng), this._rotationStartPoint = be(this._map, t3.target.getLatLng()), this._initialRotateLatLng = U(this._layer), this._startAngle = this.getAngle();
      var e3 = U(this._rotationLayer, this._rotationLayer.pm._rotateOrgLatLng);
      this._fireRotationStart(this._rotationLayer, e3), this._fireRotationStart(this._map, e3);
    }, _onRotate: function(t3) {
      var e3 = be(this._map, t3.target.getLatLng()), i3 = this._rotationStartPoint, n2 = this._rotationOriginPoint, r2 = Math.atan2(e3.y - n2.y, e3.x - n2.x) - Math.atan2(i3.y - n2.y, i3.x - n2.x);
      this._layer.setLatLngs(this._rotateLayer(r2, this._initialRotateLatLng, this._rotationOriginLatLng, L.PM.Matrix.init(), this._map));
      var a2 = this;
      !function h2(t4) {
        var e4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i4 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -1;
        if (i4 > -1 && e4.push(i4), L.Util.isArray(t4[0]))
          t4.forEach(function(t5, i5) {
            return h2(t5, e4.slice(), i5);
          });
        else {
          var n3 = B()(a2._markers, e4);
          t4.forEach(function(t5, e5) {
            n3[e5].setLatLng(t5);
          });
        }
      }(this._layer.getLatLngs());
      var o2 = U(this._rotationLayer);
      this._rotationLayer.setLatLngs(this._rotateLayer(r2, this._rotationLayer.pm._rotateOrgLatLng, this._rotationOriginLatLng, L.PM.Matrix.init(), this._map));
      var s2 = 180 * r2 / Math.PI, l2 = (s2 = s2 < 0 ? s2 + 360 : s2) + this._startAngle;
      this._setAngle(l2), this._rotationLayer.pm._setAngle(l2), this._fireRotation(this._rotationLayer, s2, o2), this._fireRotation(this._map, s2, o2), this._rotationLayer.pm._fireChange(this._rotationLayer.getLatLngs(), "Rotation");
    }, _onRotateEnd: function() {
      var t3 = this._startAngle;
      delete this._rotationOriginLatLng, delete this._rotationOriginPoint, delete this._rotationStartPoint, delete this._initialRotateLatLng, delete this._startAngle;
      var e3 = U(this._rotationLayer, this._rotationLayer.pm._rotateOrgLatLng);
      this._rotationLayer.pm._rotateOrgLatLng = U(this._rotationLayer), this._fireRotationEnd(this._rotationLayer, t3, e3), this._fireRotationEnd(this._map, t3, e3), this._rotationLayer.pm._fireEdit(this._rotationLayer, "Rotation"), this._preventRenderingMarkers(false), this._layerRotated = true;
    }, _rotateLayer: function(t3, e3, i3, n2, r2) {
      var a2 = be(r2, i3);
      return this._matrix = n2.clone().rotate(t3, a2).flip(), Le(e3, this._matrix, r2);
    }, _setAngle: function(t3) {
      t3 = t3 < 0 ? t3 + 360 : t3, this._angle = t3 % 360;
    }, _getRotationCenter: function() {
      var t3 = L.polygon(this._layer.getLatLngs(), { stroke: false, fill: false, pmIgnore: true }).addTo(this._layer._map), e3 = t3.getCenter();
      return t3.removeFrom(this._layer._map), e3;
    }, enableRotate: function() {
      if (this.options.allowRotation) {
        this.rotateEnabled() && this.disableRotate();
        this._rotatePoly = L.polygon(this._layer.getLatLngs(), { fill: false, stroke: false, pmIgnore: false, snapIgnore: true }), this._rotatePoly._pmTempLayer = true, this._rotatePoly.addTo(this._layer._map), this._rotatePoly.pm._setAngle(this.getAngle()), this._rotatePoly.pm.setOptions(this._layer._map.pm.getGlobalOptions()), this._rotatePoly.pm.setOptions({ rotate: true, snappable: false, hideMiddleMarkers: true }), this._rotatePoly.pm._rotationLayer = this._layer, this._rotatePoly.pm.enable(), this._rotateOrgLatLng = U(this._layer), this._rotateEnabled = true, this._layer.on("remove", this.disableRotate, this), this._fireRotationEnable(this._layer), this._fireRotationEnable(this._layer._map);
      } else
        this.disableRotate();
    }, disableRotate: function() {
      this.rotateEnabled() && (this._rotatePoly.pm._layerRotated && this._fireUpdate(), this._rotatePoly.pm._layerRotated = false, this._rotatePoly.pm.disable(), this._rotatePoly.remove(), this._rotatePoly.pm.setOptions({ rotate: false }), this._rotatePoly = void 0, this._rotateOrgLatLng = void 0, this._layer.off("remove", this.disableRotate, this), this._rotateEnabled = false, this._fireRotationDisable(this._layer), this._fireRotationDisable(this._layer._map));
    }, rotateEnabled: function() {
      return this._rotateEnabled;
    }, rotateLayer: function(t3) {
      var e3 = this.getAngle(), i3 = this._layer.getLatLngs(), n2 = t3 * (Math.PI / 180);
      this._layer.setLatLngs(this._rotateLayer(n2, this._layer.getLatLngs(), this._getRotationCenter(), L.PM.Matrix.init(), this._layer._map)), this._rotateOrgLatLng = L.polygon(this._layer.getLatLngs()).getLatLngs(), this._setAngle(this.getAngle() + t3), this.rotateEnabled() && this._rotatePoly && this._rotatePoly.pm.enabled() && (this._rotatePoly.setLatLngs(this._rotateLayer(n2, this._rotatePoly.getLatLngs(), this._getRotationCenter(), L.PM.Matrix.init(), this._rotatePoly._map)), this._rotatePoly.pm._initMarkers());
      var r2 = this.getAngle() - e3;
      r2 = r2 < 0 ? r2 + 360 : r2, this._startAngle = e3, this._fireRotation(this._layer, r2, i3, this._layer), this._fireRotation(this._map || this._layer._map, r2, i3, this._layer), delete this._startAngle, this._fireChange(this._layer.getLatLngs(), "Rotation");
    }, rotateLayerToAngle: function(t3) {
      var e3 = t3 - this.getAngle();
      this.rotateLayer(e3);
    }, getAngle: function() {
      return this._angle || 0;
    }, setInitAngle: function(t3) {
      this._setAngle(t3);
    } };
    const xe = Me;
    const we = L.Class.extend({ includes: [ve, it, xe, S], options: { snappable: true, snapDistance: 20, allowSelfIntersection: true, allowSelfIntersectionEdit: false, preventMarkerRemoval: false, removeLayerBelowMinVertexCount: true, limitMarkersToCount: -1, hideMiddleMarkers: false, snapSegment: true, syncLayersOnDrag: false, draggable: true, allowEditing: true, allowRemoval: true, allowCutting: true, allowRotation: true, addVertexOn: "click", removeVertexOn: "contextmenu", removeVertexValidation: void 0, addVertexValidation: void 0, moveVertexValidation: void 0 }, setOptions: function(t3) {
      L.Util.setOptions(this, t3);
    }, getOptions: function() {
      return this.options;
    }, applyOptions: function() {
    }, isPolygon: function() {
      return this._layer instanceof L.Polygon;
    }, getShape: function() {
      return this._shape;
    }, _setPane: function(t3, e3) {
      "layerPane" === e3 ? t3.options.pane = this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.layerPane || "overlayPane" : "vertexPane" === e3 ? t3.options.pane = this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.vertexPane || "markerPane" : "markerPane" === e3 && (t3.options.pane = this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.markerPane || "markerPane");
    }, remove: function() {
      (this._map || this._layer._map).pm.removeLayer({ target: this._layer });
    }, _vertexValidation: function(t3, e3) {
      var i3 = e3.target, n2 = { layer: this._layer, marker: i3, event: e3 }, r2 = "";
      return "move" === t3 ? r2 = "moveVertexValidation" : "add" === t3 ? r2 = "addVertexValidation" : "remove" === t3 && (r2 = "removeVertexValidation"), this.options[r2] && "function" == typeof this.options[r2] && !this.options[r2](n2) ? ("move" === t3 && (i3._cancelDragEventChain = i3.getLatLng()), false) : (i3._cancelDragEventChain = null, true);
    }, _vertexValidationDrag: function(t3) {
      return !t3._cancelDragEventChain || (t3._latlng = t3._cancelDragEventChain, t3.update(), false);
    }, _vertexValidationDragEnd: function(t3) {
      return !t3._cancelDragEventChain || (t3._cancelDragEventChain = null, false);
    } });
    function Ce(t3) {
      return function(t4) {
        if (Array.isArray(t4))
          return Pe(t4);
      }(t3) || function(t4) {
        if ("undefined" != typeof Symbol && null != t4[Symbol.iterator] || null != t4["@@iterator"])
          return Array.from(t4);
      }(t3) || function(t4, e3) {
        if (!t4)
          return;
        if ("string" == typeof t4)
          return Pe(t4, e3);
        var i3 = Object.prototype.toString.call(t4).slice(8, -1);
        "Object" === i3 && t4.constructor && (i3 = t4.constructor.name);
        if ("Map" === i3 || "Set" === i3)
          return Array.from(t4);
        if ("Arguments" === i3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i3))
          return Pe(t4, e3);
      }(t3) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function Pe(t3, e3) {
      (null == e3 || e3 > t3.length) && (e3 = t3.length);
      for (var i3 = 0, n2 = new Array(e3); i3 < e3; i3++)
        n2[i3] = t3[i3];
      return n2;
    }
    we.LayerGroup = L.Class.extend({ initialize: function(t3) {
      var e3 = this;
      this._layerGroup = t3, this._layers = this.getLayers(), this._getMap(), this._layers.forEach(function(t4) {
        return e3._initLayer(t4);
      });
      this._layerGroup.on("layeradd", L.Util.throttle(function(t4) {
        if (!t4.layer._pmTempLayer) {
          e3._layers = e3.getLayers();
          var i3 = e3._layers.filter(function(t5) {
            return !t5.pm._parentLayerGroup || !(e3._layerGroup._leaflet_id in t5.pm._parentLayerGroup);
          });
          i3.forEach(function(t5) {
            e3._initLayer(t5);
          }), i3.length > 0 && e3._getMap() && e3._getMap().pm.globalEditModeEnabled() && e3.enabled() && e3.enable(e3.getOptions());
        }
      }, 100, this), this), this._layerGroup.on("layerremove", function(t4) {
        e3._removeLayerFromGroup(t4.target);
      }, this);
      this._layerGroup.on("layerremove", L.Util.throttle(function(t4) {
        t4.target._pmTempLayer || (e3._layers = e3.getLayers());
      }, 100, this), this);
    }, enable: function(t3) {
      var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      0 === e3.length && (this._layers = this.getLayers()), this._options = t3, this._layers.forEach(function(i3) {
        i3 instanceof L.LayerGroup ? -1 === e3.indexOf(i3._leaflet_id) && (e3.push(i3._leaflet_id), i3.pm.enable(t3, e3)) : i3.pm.enable(t3);
      });
    }, disable: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      0 === t3.length && (this._layers = this.getLayers()), this._layers.forEach(function(e3) {
        e3 instanceof L.LayerGroup ? -1 === t3.indexOf(e3._leaflet_id) && (t3.push(e3._leaflet_id), e3.pm.disable(t3)) : e3.pm.disable();
      });
    }, enabled: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      0 === t3.length && (this._layers = this.getLayers());
      var e3 = this._layers.find(function(e4) {
        return e4 instanceof L.LayerGroup ? -1 === t3.indexOf(e4._leaflet_id) && (t3.push(e4._leaflet_id), e4.pm.enabled(t3)) : e4.pm.enabled();
      });
      return !!e3;
    }, toggleEdit: function(t3) {
      var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      0 === e3.length && (this._layers = this.getLayers()), this._options = t3, this._layers.forEach(function(i3) {
        i3 instanceof L.LayerGroup ? -1 === e3.indexOf(i3._leaflet_id) && (e3.push(i3._leaflet_id), i3.pm.toggleEdit(t3, e3)) : i3.pm.toggleEdit(t3);
      });
    }, _initLayer: function(t3) {
      var e3 = L.Util.stamp(this._layerGroup);
      t3.pm._parentLayerGroup || (t3.pm._parentLayerGroup = {}), t3.pm._parentLayerGroup[e3] = this._layerGroup;
    }, _removeLayerFromGroup: function(t3) {
      if (t3.pm && t3.pm._layerGroup) {
        var e3 = L.Util.stamp(this._layerGroup);
        delete t3.pm._layerGroup[e3];
      }
    }, dragging: function() {
      if (this._layers = this.getLayers(), this._layers) {
        var t3 = this._layers.find(function(t4) {
          return t4.pm.dragging();
        });
        return !!t3;
      }
      return false;
    }, getOptions: function() {
      return this.options;
    }, _getMap: function() {
      var t3;
      return this._map || (null === (t3 = this._layers.find(function(t4) {
        return !!t4._map;
      })) || void 0 === t3 ? void 0 : t3._map) || null;
    }, getLayers: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], e3 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i3 = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [], r2 = [];
      return t3 ? this._layerGroup.getLayers().forEach(function(t4) {
        r2.push(t4), t4 instanceof L.LayerGroup && -1 === n2.indexOf(t4._leaflet_id) && (n2.push(t4._leaflet_id), r2 = r2.concat(t4.pm.getLayers(true, true, true, n2)));
      }) : r2 = this._layerGroup.getLayers(), i3 && (r2 = r2.filter(function(t4) {
        return !(t4 instanceof L.LayerGroup);
      })), e3 && (r2 = (r2 = (r2 = r2.filter(function(t4) {
        return !!t4.pm;
      })).filter(function(t4) {
        return !t4._pmTempLayer;
      })).filter(function(t4) {
        return !L.PM.optIn && !t4.options.pmIgnore || L.PM.optIn && false === t4.options.pmIgnore;
      })), r2;
    }, setOptions: function(t3) {
      var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      0 === e3.length && (this._layers = this.getLayers()), this.options = t3, this._layers.forEach(function(i3) {
        i3.pm && (i3 instanceof L.LayerGroup ? -1 === e3.indexOf(i3._leaflet_id) && (e3.push(i3._leaflet_id), i3.pm.setOptions(t3, e3)) : i3.pm.setOptions(t3));
      });
    } }), we.Marker = we.extend({ _shape: "Marker", initialize: function(t3) {
      this._layer = t3, this._enabled = false, this._layer.on("dragend", this._onDragEnd, this);
    }, enable: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { draggable: true };
      L.Util.setOptions(this, t3), this.options.allowEditing && this._layer._map ? (this._map = this._layer._map, this.enabled() && this.disable(), this.applyOptions(), this._layer.on("remove", this.disable, this), this._enabled = true, this._fireEnable()) : this.disable();
    }, disable: function() {
      this.enabled() && (this.disableLayerDrag(), this._layer.off("remove", this.disable, this), this._layer.off("contextmenu", this._removeMarker, this), this._layerEdited && this._fireUpdate(), this._layerEdited = false, this._fireDisable(), this._enabled = false);
    }, enabled: function() {
      return this._enabled;
    }, toggleEdit: function(t3) {
      this.enabled() ? this.disable() : this.enable(t3);
    }, applyOptions: function() {
      this.options.snappable ? this._initSnappableMarkers() : this._disableSnapping(), this.options.draggable ? this.enableLayerDrag() : this.disableLayerDrag(), this.options.preventMarkerRemoval || this._layer.on("contextmenu", this._removeMarker, this);
    }, _removeMarker: function(t3) {
      var e3 = t3.target;
      e3.remove(), this._fireRemove(e3), this._fireRemove(this._map, e3);
    }, _onDragEnd: function() {
      this._fireEdit(), this._layerEdited = true;
    }, _initSnappableMarkers: function() {
      var t3 = this._layer;
      this.options.snapDistance = this.options.snapDistance || 30, this.options.snapSegment = this.options.snapSegment === void 0 || this.options.snapSegment, t3.off("pm:drag", this._handleSnapping, this), t3.on("pm:drag", this._handleSnapping, this), t3.off("pm:dragend", this._cleanupSnapping, this), t3.on("pm:dragend", this._cleanupSnapping, this), t3.off("pm:dragstart", this._unsnap, this), t3.on("pm:dragstart", this._unsnap, this);
    }, _disableSnapping: function() {
      var t3 = this._layer;
      t3.off("pm:drag", this._handleSnapping, this), t3.off("pm:dragend", this._cleanupSnapping, this), t3.off("pm:dragstart", this._unsnap, this);
    } });
    const Ee = { filterMarkerGroup: function() {
      this.markerCache = [], this.createCache(), this._layer.on("pm:edit", this.createCache, this), this.applyLimitFilters({}), this.throttledApplyLimitFilters || (this.throttledApplyLimitFilters = L.Util.throttle(this.applyLimitFilters, 100, this)), this._layer.on("pm:disable", this._removeMarkerLimitEvents, this), this.options.limitMarkersToCount > -1 && (this._layer.on("pm:vertexremoved", this._initMarkers, this), this._map.on("mousemove", this.throttledApplyLimitFilters, this));
    }, _removeMarkerLimitEvents: function() {
      this._map.off("mousemove", this.throttledApplyLimitFilters, this), this._layer.off("pm:edit", this.createCache, this), this._layer.off("pm:disable", this._removeMarkerLimitEvents, this), this._layer.off("pm:vertexremoved", this._initMarkers, this);
    }, createCache: function() {
      var t3 = [].concat(Ce(this._markerGroup.getLayers()), Ce(this.markerCache));
      this.markerCache = t3.filter(function(t4, e3, i3) {
        return i3.indexOf(t4) === e3;
      });
    }, renderLimits: function(t3) {
      var e3 = this;
      this.markerCache.forEach(function(i3) {
        t3.includes(i3) ? e3._markerGroup.addLayer(i3) : e3._markerGroup.removeLayer(i3);
      });
    }, applyLimitFilters: function(t3) {
      var e3 = t3.latlng, i3 = void 0 === e3 ? { lat: 0, lng: 0 } : e3;
      if (!this._preventRenderMarkers) {
        var n2 = Ce(this._filterClosestMarkers(i3));
        this.renderLimits(n2);
      }
    }, _filterClosestMarkers: function(t3) {
      var e3 = Ce(this.markerCache), i3 = this.options.limitMarkersToCount;
      return -1 === i3 ? e3 : (e3.sort(function(e4, i4) {
        return e4._latlng.distanceTo(t3) - i4._latlng.distanceTo(t3);
      }), e3.filter(function(t4, e4) {
        return !(i3 > -1) || e4 < i3;
      }));
    }, _preventRenderMarkers: false, _preventRenderingMarkers: function(t3) {
      this._preventRenderMarkers = !!t3;
    } };
    function Se(t3, e3) {
      return function(t4) {
        if (Array.isArray(t4))
          return t4;
      }(t3) || function(t4, e4) {
        var i3 = null == t4 ? null : "undefined" != typeof Symbol && t4[Symbol.iterator] || t4["@@iterator"];
        if (null == i3)
          return;
        var n2, r2, a2 = [], o2 = true, s2 = false;
        try {
          for (i3 = i3.call(t4); !(o2 = (n2 = i3.next()).done) && (a2.push(n2.value), !e4 || a2.length !== e4); o2 = true)
            ;
        } catch (l2) {
          s2 = true, r2 = l2;
        } finally {
          try {
            o2 || null == i3["return"] || i3["return"]();
          } finally {
            if (s2)
              throw r2;
          }
        }
        return a2;
      }(t3, e3) || function(t4, e4) {
        if (!t4)
          return;
        if ("string" == typeof t4)
          return Oe(t4, e4);
        var i3 = Object.prototype.toString.call(t4).slice(8, -1);
        "Object" === i3 && t4.constructor && (i3 = t4.constructor.name);
        if ("Map" === i3 || "Set" === i3)
          return Array.from(t4);
        if ("Arguments" === i3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i3))
          return Oe(t4, e4);
      }(t3, e3) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function Oe(t3, e3) {
      (null == e3 || e3 > t3.length) && (e3 = t3.length);
      for (var i3 = 0, n2 = new Array(e3); i3 < e3; i3++)
        n2[i3] = t3[i3];
      return n2;
    }
    function De(t3) {
      return function(t4) {
        if (Array.isArray(t4))
          return Be(t4);
      }(t3) || function(t4) {
        if ("undefined" != typeof Symbol && null != t4[Symbol.iterator] || null != t4["@@iterator"])
          return Array.from(t4);
      }(t3) || function(t4, e3) {
        if (!t4)
          return;
        if ("string" == typeof t4)
          return Be(t4, e3);
        var i3 = Object.prototype.toString.call(t4).slice(8, -1);
        "Object" === i3 && t4.constructor && (i3 = t4.constructor.name);
        if ("Map" === i3 || "Set" === i3)
          return Array.from(t4);
        if ("Arguments" === i3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i3))
          return Be(t4, e3);
      }(t3) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function Be(t3, e3) {
      (null == e3 || e3 > t3.length) && (e3 = t3.length);
      for (var i3 = 0, n2 = new Array(e3); i3 < e3; i3++)
        n2[i3] = t3[i3];
      return n2;
    }
    we.Line = we.extend({ includes: [Ee], _shape: "Line", initialize: function(t3) {
      this._layer = t3, this._enabled = false;
    }, enable: function(t3) {
      L.Util.setOptions(this, t3), this._map = this._layer._map, this._map && (this.options.allowEditing ? (this.enabled() && this.disable(), this._enabled = true, this._initMarkers(), this.applyOptions(), this._layer.on("remove", this.disable, this), this.options.allowSelfIntersection || this._layer.on("pm:vertexremoved", this._handleSelfIntersectionOnVertexRemoval, this), this.options.allowSelfIntersection ? this.cachedColor = void 0 : ("#f00000ff" !== this._layer.options.color ? (this.cachedColor = this._layer.options.color, this.isRed = false) : this.isRed = true, this._handleLayerStyle()), this._fireEnable()) : this.disable());
    }, disable: function() {
      if (this.enabled() && !this._dragging) {
        this._enabled = false, this._markerGroup.clearLayers(), this._markerGroup.removeFrom(this._map), this._layer.off("remove", this.disable, this), this.options.allowSelfIntersection || this._layer.off("pm:vertexremoved", this._handleSelfIntersectionOnVertexRemoval, this);
        var t3 = this._layer._path ? this._layer._path : this._layer._renderer._container;
        L.DomUtil.removeClass(t3, "leaflet-pm-draggable"), this._map.hasLayer(this._layer) && !this.hasSelfIntersection() || L.DomUtil.removeClass(t3, "leaflet-pm-invalid"), this._layerEdited && this._fireUpdate(), this._layerEdited = false, this._fireDisable();
      }
    }, enabled: function() {
      return this._enabled;
    }, toggleEdit: function(t3) {
      return this.enabled() ? this.disable() : this.enable(t3), this.enabled();
    }, applyOptions: function() {
      this.options.snappable ? this._initSnappableMarkers() : this._disableSnapping();
    }, _initMarkers: function() {
      var t3 = this, e3 = this._map, i3 = this._layer.getLatLngs();
      this._markerGroup && this._markerGroup.clearLayers(), this._markerGroup = new L.FeatureGroup(), this._markerGroup._pmTempLayer = true;
      this._markers = function n2(e4) {
        if (Array.isArray(e4[0]))
          return e4.map(n2, t3);
        var i4 = e4.map(t3._createMarker, t3);
        return true !== t3.options.hideMiddleMarkers && e4.map(function(n3, r2) {
          var a2 = t3.isPolygon() ? (r2 + 1) % e4.length : r2 + 1;
          return t3._createMiddleMarker(i4[r2], i4[a2]);
        }), i4;
      }(i3), this.filterMarkerGroup(), e3.addLayer(this._markerGroup);
    }, _createMarker: function(t3) {
      var e3 = new L.Marker(t3, { draggable: true, icon: L.divIcon({ className: "marker-icon" }) });
      return this._setPane(e3, "vertexPane"), e3._pmTempLayer = true, this.options.rotate ? (e3.on("dragstart", this._onRotateStart, this), e3.on("drag", this._onRotate, this), e3.on("dragend", this._onRotateEnd, this)) : (e3.on("click", this._onVertexClick, this), e3.on("dragstart", this._onMarkerDragStart, this), e3.on("move", this._onMarkerDrag, this), e3.on("dragend", this._onMarkerDragEnd, this), this.options.preventMarkerRemoval || e3.on(this.options.removeVertexOn, this._removeMarker, this)), this._markerGroup.addLayer(e3), e3;
    }, _createMiddleMarker: function(t3, e3) {
      if (!t3 || !e3)
        return false;
      var i3 = L.PM.Utils.calcMiddleLatLng(this._map, t3.getLatLng(), e3.getLatLng()), n2 = this._createMarker(i3), r2 = L.divIcon({ className: "marker-icon marker-icon-middle" });
      return n2.setIcon(r2), n2.leftM = t3, n2.rightM = e3, t3._middleMarkerNext = n2, e3._middleMarkerPrev = n2, n2.on(this.options.addVertexOn, this._onMiddleMarkerClick, this), n2.on("movestart", this._onMiddleMarkerMoveStart, this), n2;
    }, _onMiddleMarkerClick: function(t3) {
      var e3 = t3.target;
      if (this._vertexValidation("add", t3)) {
        var i3 = L.divIcon({ className: "marker-icon" });
        e3.setIcon(i3), this._addMarker(e3, e3.leftM, e3.rightM);
      }
    }, _onMiddleMarkerMoveStart: function(t3) {
      var e3 = t3.target;
      e3.on("moveend", this._onMiddleMarkerMoveEnd, this), this._vertexValidation("add", t3) ? (e3._dragging = true, this._addMarker(e3, e3.leftM, e3.rightM)) : e3.on("move", this._onMiddleMarkerMovePrevent, this);
    }, _onMiddleMarkerMovePrevent: function(t3) {
      var e3 = t3.target;
      this._vertexValidationDrag(e3);
    }, _onMiddleMarkerMoveEnd: function(t3) {
      var e3 = t3.target;
      if (e3.off("move", this._onMiddleMarkerMovePrevent, this), e3.off("moveend", this._onMiddleMarkerMoveEnd, this), this._vertexValidationDragEnd(e3)) {
        var i3 = L.divIcon({ className: "marker-icon" });
        e3.setIcon(i3), setTimeout(function() {
          delete e3._dragging;
        }, 100);
      }
    }, _addMarker: function(t3, e3, i3) {
      t3.off("movestart", this._onMiddleMarkerMoveStart, this), t3.off(this.options.addVertexOn, this._onMiddleMarkerClick, this);
      var n2 = t3.getLatLng(), r2 = this._layer._latlngs;
      delete t3.leftM, delete t3.rightM;
      var a2 = L.PM.Utils.findDeepMarkerIndex(this._markers, e3), o2 = a2.indexPath, s2 = a2.index, l2 = a2.parentPath, h2 = o2.length > 1 ? B()(r2, l2) : r2, u2 = o2.length > 1 ? B()(this._markers, l2) : this._markers;
      h2.splice(s2 + 1, 0, n2), u2.splice(s2 + 1, 0, t3), this._layer.setLatLngs(r2), true !== this.options.hideMiddleMarkers && (this._createMiddleMarker(e3, t3), this._createMiddleMarker(t3, i3)), this._fireEdit(), this._layerEdited = true, this._fireChange(this._layer.getLatLngs(), "Edit"), this._fireVertexAdded(t3, L.PM.Utils.findDeepMarkerIndex(this._markers, t3).indexPath, n2), this.options.snappable && this._initSnappableMarkers();
    }, hasSelfIntersection: function() {
      return gt(this._layer.toGeoJSON(15)).features.length > 0;
    }, _handleSelfIntersectionOnVertexRemoval: function() {
      this._handleLayerStyle(true), this.hasSelfIntersection() && (this._layer.setLatLngs(this._coordsBeforeEdit), this._coordsBeforeEdit = null, this._initMarkers());
    }, _handleLayerStyle: function(t3) {
      var e3 = this._layer;
      if (this.hasSelfIntersection()) {
        if (!this.options.allowSelfIntersection && this.options.allowSelfIntersectionEdit && this._updateDisabledMarkerStyle(this._markers, true), this.isRed)
          return;
        t3 ? this._flashLayer() : (e3.setStyle({ color: "#f00000ff" }), this.isRed = true), this._fireIntersect(gt(this._layer.toGeoJSON(15)));
      } else
        e3.setStyle({ color: this.cachedColor }), this.isRed = false, !this.options.allowSelfIntersection && this.options.allowSelfIntersectionEdit && this._updateDisabledMarkerStyle(this._markers, false);
    }, _flashLayer: function() {
      var t3 = this;
      this.cachedColor || (this.cachedColor = this._layer.options.color), this._layer.setStyle({ color: "#f00000ff" }), this.isRed = true, window.setTimeout(function() {
        t3._layer.setStyle({ color: t3.cachedColor }), t3.isRed = false;
      }, 200);
    }, _updateDisabledMarkerStyle: function(t3, e3) {
      var i3 = this;
      t3.forEach(function(t4) {
        Array.isArray(t4) ? i3._updateDisabledMarkerStyle(t4, e3) : t4._icon && (e3 && !i3._checkMarkerAllowedToDrag(t4) ? L.DomUtil.addClass(t4._icon, "vertexmarker-disabled") : L.DomUtil.removeClass(t4._icon, "vertexmarker-disabled"));
      });
    }, _removeMarker: function(t3) {
      var e3 = t3.target;
      if (this._vertexValidation("remove", t3)) {
        this.options.allowSelfIntersection || (this._coordsBeforeEdit = U(this._layer, this._layer.getLatLngs()));
        var i3 = this._layer.getLatLngs(), n2 = L.PM.Utils.findDeepMarkerIndex(this._markers, e3), r2 = n2.indexPath, a2 = n2.index, o2 = n2.parentPath;
        if (r2) {
          var s2 = r2.length > 1 ? B()(i3, o2) : i3, l2 = r2.length > 1 ? B()(this._markers, o2) : this._markers;
          if (this.options.removeLayerBelowMinVertexCount || !(s2.length <= 2 || this.isPolygon() && s2.length <= 3)) {
            s2.splice(a2, 1), this._layer.setLatLngs(i3), this.isPolygon() && s2.length <= 2 && s2.splice(0, s2.length);
            var h2 = false;
            if (s2.length <= 1 && (s2.splice(0, s2.length), o2.length > 1 && r2.length > 1 && (i3 = A(i3)), this._layer.setLatLngs(i3), this._initMarkers(), h2 = true), j(i3) || this._layer.remove(), i3 = A(i3), this._layer.setLatLngs(i3), this._markers = A(this._markers), !h2 && (l2 = r2.length > 1 ? B()(this._markers, o2) : this._markers, e3._middleMarkerPrev && this._markerGroup.removeLayer(e3._middleMarkerPrev), e3._middleMarkerNext && this._markerGroup.removeLayer(e3._middleMarkerNext), this._markerGroup.removeLayer(e3), l2)) {
              var u2, c2;
              if (this.isPolygon() ? (u2 = (a2 + 1) % l2.length, c2 = (a2 + (l2.length - 1)) % l2.length) : (c2 = a2 - 1 < 0 ? void 0 : a2 - 1, u2 = a2 + 1 >= l2.length ? void 0 : a2 + 1), u2 !== c2) {
                var p2 = l2[c2], d2 = l2[u2];
                true !== this.options.hideMiddleMarkers && this._createMiddleMarker(p2, d2);
              }
              l2.splice(a2, 1);
            }
            this._fireEdit(), this._layerEdited = true, this._fireVertexRemoved(e3, r2), this._fireChange(this._layer.getLatLngs(), "Edit");
          } else
            this._flashLayer();
        }
      }
    }, updatePolygonCoordsFromMarkerDrag: function(t3) {
      var e3 = this._layer.getLatLngs(), i3 = t3.getLatLng(), n2 = L.PM.Utils.findDeepMarkerIndex(this._markers, t3), r2 = n2.indexPath, a2 = n2.index, o2 = n2.parentPath;
      (r2.length > 1 ? B()(e3, o2) : e3).splice(a2, 1, i3), this._layer.setLatLngs(e3);
    }, _getNeighborMarkers: function(t3) {
      var e3 = L.PM.Utils.findDeepMarkerIndex(this._markers, t3), i3 = e3.indexPath, n2 = e3.index, r2 = e3.parentPath, a2 = i3.length > 1 ? B()(this._markers, r2) : this._markers, o2 = (n2 + 1) % a2.length;
      return { prevMarker: a2[(n2 + (a2.length - 1)) % a2.length], nextMarker: a2[o2] };
    }, _checkMarkerAllowedToDrag: function(t3) {
      var e3 = this._getNeighborMarkers(t3), i3 = e3.prevMarker, n2 = e3.nextMarker, r2 = L.polyline([i3.getLatLng(), t3.getLatLng()]), a2 = L.polyline([t3.getLatLng(), n2.getLatLng()]), o2 = At(this._layer.toGeoJSON(15), r2.toGeoJSON(15)).features.length, s2 = At(this._layer.toGeoJSON(15), a2.toGeoJSON(15)).features.length;
      return t3.getLatLng() === this._markers[0][0].getLatLng() ? s2 += 1 : t3.getLatLng() === this._markers[0][this._markers[0].length - 1].getLatLng() && (o2 += 1), !(o2 <= 2 && s2 <= 2);
    }, _onMarkerDragStart: function(t3) {
      var e3 = t3.target;
      if (this.cachedColor || (this.cachedColor = this._layer.options.color), this._vertexValidation("move", t3)) {
        var i3 = L.PM.Utils.findDeepMarkerIndex(this._markers, e3).indexPath;
        this._fireMarkerDragStart(t3, i3), this.options.allowSelfIntersection || (this._coordsBeforeEdit = U(this._layer, this._layer.getLatLngs())), !this.options.allowSelfIntersection && this.options.allowSelfIntersectionEdit && this.hasSelfIntersection() ? this._markerAllowedToDrag = this._checkMarkerAllowedToDrag(e3) : this._markerAllowedToDrag = null;
      }
    }, _onMarkerDrag: function(t3) {
      var e3 = t3.target;
      if (this._vertexValidationDrag(e3)) {
        var i3 = L.PM.Utils.findDeepMarkerIndex(this._markers, e3), n2 = i3.indexPath, r2 = i3.index, a2 = i3.parentPath;
        if (n2) {
          if (!this.options.allowSelfIntersection && this.options.allowSelfIntersectionEdit && this.hasSelfIntersection() && false === this._markerAllowedToDrag)
            return this._layer.setLatLngs(this._coordsBeforeEdit), this._initMarkers(), void this._handleLayerStyle();
          this.updatePolygonCoordsFromMarkerDrag(e3);
          var o2 = n2.length > 1 ? B()(this._markers, a2) : this._markers, s2 = (r2 + 1) % o2.length, l2 = (r2 + (o2.length - 1)) % o2.length, h2 = e3.getLatLng(), u2 = o2[l2].getLatLng(), c2 = o2[s2].getLatLng();
          if (e3._middleMarkerNext) {
            var p2 = L.PM.Utils.calcMiddleLatLng(this._map, h2, c2);
            e3._middleMarkerNext.setLatLng(p2);
          }
          if (e3._middleMarkerPrev) {
            var d2 = L.PM.Utils.calcMiddleLatLng(this._map, h2, u2);
            e3._middleMarkerPrev.setLatLng(d2);
          }
          this.options.allowSelfIntersection || this._handleLayerStyle(), this._fireMarkerDrag(t3, n2), this._fireChange(this._layer.getLatLngs(), "Edit");
        }
      }
    }, _onMarkerDragEnd: function(t3) {
      var e3 = t3.target;
      if (this._vertexValidationDragEnd(e3)) {
        var i3 = L.PM.Utils.findDeepMarkerIndex(this._markers, e3).indexPath, n2 = this.hasSelfIntersection();
        n2 && this.options.allowSelfIntersectionEdit && this._markerAllowedToDrag && (n2 = false);
        var r2 = !this.options.allowSelfIntersection && n2;
        if (this._fireMarkerDragEnd(t3, i3, r2), r2)
          return this._layer.setLatLngs(this._coordsBeforeEdit), this._coordsBeforeEdit = null, this._initMarkers(), this.options.snappable && this._initSnappableMarkers(), this._handleLayerStyle(), void this._fireLayerReset(t3, i3);
        !this.options.allowSelfIntersection && this.options.allowSelfIntersectionEdit && this._handleLayerStyle(), this._fireEdit(), this._layerEdited = true, this._fireChange(this._layer.getLatLngs(), "Edit");
      }
    }, _onVertexClick: function(t3) {
      var e3 = t3.target;
      if (!e3._dragging) {
        var i3 = L.PM.Utils.findDeepMarkerIndex(this._markers, e3).indexPath;
        this._fireVertexClick(t3, i3);
      }
    } }), we.Polygon = we.Line.extend({ _shape: "Polygon", _checkMarkerAllowedToDrag: function(t3) {
      var e3 = this._getNeighborMarkers(t3), i3 = e3.prevMarker, n2 = e3.nextMarker, r2 = L.polyline([i3.getLatLng(), t3.getLatLng()]), a2 = L.polyline([t3.getLatLng(), n2.getLatLng()]), o2 = At(this._layer.toGeoJSON(15), r2.toGeoJSON(15)).features.length, s2 = At(this._layer.toGeoJSON(15), a2.toGeoJSON(15)).features.length;
      return !(o2 <= 2 && s2 <= 2);
    } }), we.Rectangle = we.Polygon.extend({ _shape: "Rectangle", _initMarkers: function() {
      var t3 = this, e3 = this._map, i3 = this._findCorners();
      this._markerGroup && this._markerGroup.clearLayers(), this._markerGroup = new L.FeatureGroup(), this._markerGroup._pmTempLayer = true, e3.addLayer(this._markerGroup), this._markers = [], this._markers[0] = i3.map(this._createMarker, this);
      var n2 = Se(this._markers, 1);
      this._cornerMarkers = n2[0], this._layer.getLatLngs()[0].forEach(function(e4, i4) {
        var n3 = t3._cornerMarkers.find(function(t4) {
          return t4._index === i4;
        });
        n3 && n3.setLatLng(e4);
      });
    }, applyOptions: function() {
      this.options.snappable ? this._initSnappableMarkers() : this._disableSnapping(), this._addMarkerEvents();
    }, _createMarker: function(t3, e3) {
      var i3 = new L.Marker(t3, { draggable: true, icon: L.divIcon({ className: "marker-icon" }) });
      return this._setPane(i3, "vertexPane"), i3._origLatLng = t3, i3._index = e3, i3._pmTempLayer = true, this._markerGroup.addLayer(i3), i3;
    }, _addMarkerEvents: function() {
      var t3 = this;
      this._markers[0].forEach(function(e3) {
        e3.on("dragstart", t3._onMarkerDragStart, t3), e3.on("drag", t3._onMarkerDrag, t3), e3.on("dragend", t3._onMarkerDragEnd, t3), t3.options.preventMarkerRemoval || e3.on("contextmenu", t3._removeMarker, t3);
      });
    }, _removeMarker: function() {
      return null;
    }, _onMarkerDragStart: function(t3) {
      if (this._vertexValidation("move", t3)) {
        var e3 = t3.target, i3 = this._cornerMarkers;
        e3._oppositeCornerLatLng = i3.find(function(t4) {
          return t4._index === (e3._index + 2) % 4;
        }).getLatLng(), e3._snapped = false, this._fireMarkerDragStart(t3);
      }
    }, _onMarkerDrag: function(t3) {
      var e3 = t3.target;
      this._vertexValidationDrag(e3) && e3._index !== void 0 && (this._adjustRectangleForMarkerMove(e3), this._fireMarkerDrag(t3), this._fireChange(this._layer.getLatLngs(), "Edit"));
    }, _onMarkerDragEnd: function(t3) {
      var e3 = t3.target;
      this._vertexValidationDragEnd(e3) && (this._cornerMarkers.forEach(function(t4) {
        delete t4._oppositeCornerLatLng;
      }), this._fireMarkerDragEnd(t3), this._fireEdit(), this._layerEdited = true, this._fireChange(this._layer.getLatLngs(), "Edit"));
    }, _adjustRectangleForMarkerMove: function(t3) {
      L.extend(t3._origLatLng, t3._latlng);
      var e3 = L.PM.Utils._getRotatedRectangle(t3.getLatLng(), t3._oppositeCornerLatLng, this._angle || 0, this._map);
      this._layer.setLatLngs(e3), this._adjustAllMarkers(), this._layer.redraw();
    }, _adjustAllMarkers: function() {
      var t3 = this, e3 = this._layer.getLatLngs()[0];
      e3 && 4 !== e3.length && e3.length > 0 ? (e3.forEach(function(e4, i3) {
        t3._cornerMarkers[i3].setLatLng(e4);
      }), this._cornerMarkers.slice(e3.length).forEach(function(t4) {
        t4.setLatLng(e3[0]);
      })) : e3 && e3.length ? this._cornerMarkers.forEach(function(t4) {
        t4.setLatLng(e3[t4._index]);
      }) : console.error("The layer has no LatLngs");
    }, _findCorners: function() {
      var t3 = this._layer.getLatLngs()[0];
      return L.PM.Utils._getRotatedRectangle(t3[0], t3[2], this._angle || 0, this._map);
    } }), we.Circle = we.extend({ _shape: "Circle", initialize: function(t3) {
      this._layer = t3, this._enabled = false, this._updateHiddenPolyCircle();
    }, enable: function(t3) {
      L.Util.setOptions(this, t3), this._map = this._layer._map, this.options.allowEditing ? (this.enabled() || this.disable(), this._enabled = true, this._initMarkers(), this.applyOptions(), this._layer.on("remove", this.disable, this), this._updateHiddenPolyCircle(), this._fireEnable()) : this.disable();
    }, disable: function() {
      if (this.enabled() && !this._dragging) {
        this._centerMarker.off("dragstart", this._onCircleDragStart, this), this._centerMarker.off("drag", this._onCircleDrag, this), this._centerMarker.off("dragend", this._onCircleDragEnd, this), this._outerMarker.off("drag", this._handleOuterMarkerSnapping, this), this._layer.off("remove", this.disable, this), this._enabled = false, this._helperLayers.clearLayers();
        var t3 = this._layer._path ? this._layer._path : this._layer._renderer._container;
        L.DomUtil.removeClass(t3, "leaflet-pm-draggable"), this._layerEdited && this._fireUpdate(), this._layerEdited = false, this._fireDisable();
      }
    }, enabled: function() {
      return this._enabled;
    }, toggleEdit: function(t3) {
      this.enabled() ? this.disable() : this.enable(t3);
    }, _initMarkers: function() {
      var t3 = this._map;
      this._helperLayers && this._helperLayers.clearLayers(), this._helperLayers = new L.FeatureGroup(), this._helperLayers._pmTempLayer = true, this._helperLayers.addTo(t3);
      var e3 = this._layer.getLatLng(), i3 = this._layer._radius, n2 = this._getLatLngOnCircle(e3, i3);
      this._centerMarker = this._createCenterMarker(e3), this._outerMarker = this._createOuterMarker(n2), this._markers = [this._centerMarker, this._outerMarker], this._createHintLine(this._centerMarker, this._outerMarker);
    }, applyOptions: function() {
      this.options.snappable ? (this._initSnappableMarkers(), this._outerMarker.on("drag", this._handleOuterMarkerSnapping, this), this._outerMarker.on("move", this._syncHintLine, this), this._outerMarker.on("move", this._syncCircleRadius, this), this._centerMarker.on("move", this._moveCircle, this)) : this._disableSnapping();
    }, _createHintLine: function(t3, e3) {
      var i3 = t3.getLatLng(), n2 = e3.getLatLng();
      this._hintline = L.polyline([i3, n2], this.options.hintlineStyle), this._setPane(this._hintline, "layerPane"), this._hintline._pmTempLayer = true, this._helperLayers.addLayer(this._hintline);
    }, _createCenterMarker: function(t3) {
      var e3 = this._createMarker(t3);
      return L.DomUtil.addClass(e3._icon, "leaflet-pm-draggable"), e3.on("drag", this._moveCircle, this), e3.on("dragstart", this._onCircleDragStart, this), e3.on("drag", this._onCircleDrag, this), e3.on("dragend", this._onCircleDragEnd, this), e3;
    }, _createOuterMarker: function(t3) {
      var e3 = this._createMarker(t3);
      return e3.on("drag", this._resizeCircle, this), e3;
    }, _createMarker: function(t3) {
      var e3 = new L.Marker(t3, { draggable: true, icon: L.divIcon({ className: "marker-icon" }) });
      return this._setPane(e3, "vertexPane"), e3._origLatLng = t3, e3._pmTempLayer = true, e3.on("dragstart", this._onMarkerDragStart, this), e3.on("drag", this._onMarkerDrag, this), e3.on("dragend", this._onMarkerDragEnd, this), this._helperLayers.addLayer(e3), e3;
    }, _resizeCircle: function() {
      this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker()), this._syncHintLine(), this._syncCircleRadius();
    }, _moveCircle: function(t3) {
      if (!t3.target._cancelDragEventChain) {
        var e3 = t3.latlng;
        this._layer.setLatLng(e3);
        var i3 = this._layer._radius, n2 = this._getLatLngOnCircle(e3, i3);
        this._outerMarker._latlng = n2, this._outerMarker.update(), this._syncHintLine(), this._updateHiddenPolyCircle(), this._fireCenterPlaced("Edit"), this._fireChange(this._layer.getLatLng(), "Edit");
      }
    }, _syncCircleRadius: function() {
      var t3 = this._centerMarker.getLatLng(), e3 = this._outerMarker.getLatLng(), i3 = this._map.distance(t3, e3);
      this.options.minRadiusCircle && i3 < this.options.minRadiusCircle ? this._layer.setRadius(this.options.minRadiusCircle) : this.options.maxRadiusCircle && i3 > this.options.maxRadiusCircle ? this._layer.setRadius(this.options.maxRadiusCircle) : this._layer.setRadius(i3), this._updateHiddenPolyCircle(), this._fireChange(this._layer.getLatLng(), "Edit");
    }, _syncHintLine: function() {
      var t3 = this._centerMarker.getLatLng(), e3 = this._outerMarker.getLatLng();
      this._hintline.setLatLngs([t3, e3]);
    }, _disableSnapping: function() {
      var t3 = this;
      this._markers.forEach(function(e3) {
        e3.off("move", t3._syncHintLine, t3), e3.off("move", t3._syncCircleRadius, t3), e3.off("drag", t3._handleSnapping, t3), e3.off("dragend", t3._cleanupSnapping, t3);
      }), this._layer.off("pm:dragstart", this._unsnap, this);
    }, _onMarkerDragStart: function(t3) {
      this._vertexValidation("move", t3) && this._fireMarkerDragStart(t3);
    }, _onMarkerDrag: function(t3) {
      var e3 = t3.target;
      this._vertexValidationDrag(e3) && this._fireMarkerDrag(t3);
    }, _onMarkerDragEnd: function(t3) {
      var e3 = t3.target;
      this._vertexValidationDragEnd(e3) && (this._fireEdit(), this._layerEdited = true, this._fireMarkerDragEnd(t3));
    }, _onCircleDragStart: function(t3) {
      this._vertexValidationDrag(t3.target) ? (delete this._vertexValidationReset, this._fireDragStart()) : this._vertexValidationReset = true;
    }, _onCircleDrag: function(t3) {
      this._vertexValidationReset || this._fireDrag(t3);
    }, _onCircleDragEnd: function() {
      this._vertexValidationReset ? delete this._vertexValidationReset : this._fireDragEnd();
    }, _updateHiddenPolyCircle: function() {
      var t3 = this._map && this._map.pm._isCRSSimple();
      this._hiddenPolyCircle ? this._hiddenPolyCircle.setLatLngs(L.PM.Utils.circleToPolygon(this._layer, 200, !t3).getLatLngs()) : this._hiddenPolyCircle = L.PM.Utils.circleToPolygon(this._layer, 200, !t3), this._hiddenPolyCircle._parentCopy || (this._hiddenPolyCircle._parentCopy = this._layer);
    }, _getLatLngOnCircle: function(t3, e3) {
      var i3 = this._map.project(t3), n2 = L.point(i3.x + e3, i3.y);
      return this._map.unproject(n2);
    }, _getNewDestinationOfOuterMarker: function() {
      var t3 = this._centerMarker.getLatLng(), e3 = this._outerMarker.getLatLng(), i3 = this._map.distance(t3, e3);
      return this.options.minRadiusCircle && i3 < this.options.minRadiusCircle ? e3 = z(this._map, t3, e3, this.options.minRadiusCircle) : this.options.maxRadiusCircle && i3 > this.options.maxRadiusCircle && (e3 = z(this._map, t3, e3, this.options.maxRadiusCircle)), e3;
    }, _handleOuterMarkerSnapping: function() {
      if (this._outerMarker._snapped) {
        var t3 = this._centerMarker.getLatLng(), e3 = this._outerMarker.getLatLng(), i3 = this._map.distance(t3, e3);
        (this.options.minRadiusCircle && i3 < this.options.minRadiusCircle || this.options.maxRadiusCircle && i3 > this.options.maxRadiusCircle) && this._outerMarker.setLatLng(this._outerMarker._orgLatLng);
      }
      this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker());
    } }), we.CircleMarker = we.extend({ _shape: "CircleMarker", initialize: function(t3) {
      this._layer = t3, this._enabled = false, this._updateHiddenPolyCircle();
    }, enable: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { draggable: true, snappable: true };
      L.Util.setOptions(this, t3), this.options.allowEditing && this._layer._map ? (this._map = this._layer._map, this.enabled() && this.disable(), this.applyOptions(), this._layer.on("remove", this.disable, this), this._enabled = true, this._layer.on("pm:dragstart", this._onDragStart, this), this._layer.on("pm:drag", this._onMarkerDrag, this), this._layer.on("pm:dragend", this._onMarkerDragEnd, this), this._updateHiddenPolyCircle(), this._fireEnable()) : this.disable();
    }, disable: function() {
      this._dragging || (this._helperLayers && this._helperLayers.clearLayers(), this._map || (this._map = this._layer._map), this._map || (this.options.editable ? (this._map.off("move", this._syncMarkers, this), this._outerMarker && this._outerMarker.on("drag", this._handleOuterMarkerSnapping, this)) : this._map.off("move", this._updateHiddenPolyCircle, this)), this.disableLayerDrag(), this._layer.off("contextmenu", this._removeMarker, this), this._layer.off("remove", this.disable, this), this.enabled() && (this._layerEdited && this._fireUpdate(), this._layerEdited = false, this._fireDisable()), this._enabled = false);
    }, enabled: function() {
      return this._enabled;
    }, toggleEdit: function(t3) {
      this.enabled() ? this.disable() : this.enable(t3);
    }, applyOptions: function() {
      !this.options.editable && this.options.draggable ? this.enableLayerDrag() : this.disableLayerDrag(), this.options.editable ? (this._initMarkers(), this._map.on("move", this._syncMarkers, this)) : this._map.on("move", this._updateHiddenPolyCircle, this), this.options.snappable ? this.options.editable ? (this._initSnappableMarkers(), this._centerMarker.on("drag", this._moveCircle, this), this.options.editable && this._outerMarker.on("drag", this._handleOuterMarkerSnapping, this), this._outerMarker.on("move", this._syncHintLine, this), this._outerMarker.on("move", this._syncCircleRadius, this)) : this._initSnappableMarkersDrag() : this.options.editable ? this._disableSnapping() : this._disableSnappingDrag(), this.options.preventMarkerRemoval || this._layer.on("contextmenu", this._removeMarker, this);
    }, _initMarkers: function() {
      var t3 = this._map;
      this._helperLayers && this._helperLayers.clearLayers(), this._helperLayers = new L.FeatureGroup(), this._helperLayers._pmTempLayer = true, this._helperLayers.addTo(t3);
      var e3 = this._layer.getLatLng(), i3 = this._layer._radius, n2 = this._getLatLngOnCircle(e3, i3);
      this._centerMarker = this._createCenterMarker(e3), this._outerMarker = this._createOuterMarker(n2), this._markers = [this._centerMarker, this._outerMarker], this._createHintLine(this._centerMarker, this._outerMarker);
    }, _getLatLngOnCircle: function(t3, e3) {
      var i3 = this._map.project(t3), n2 = L.point(i3.x + e3, i3.y);
      return this._map.unproject(n2);
    }, _createHintLine: function(t3, e3) {
      var i3 = t3.getLatLng(), n2 = e3.getLatLng();
      this._hintline = L.polyline([i3, n2], this.options.hintlineStyle), this._setPane(this._hintline, "layerPane"), this._hintline._pmTempLayer = true, this._helperLayers.addLayer(this._hintline);
    }, _createCenterMarker: function(t3) {
      var e3 = this._createMarker(t3);
      return this.options.draggable ? L.DomUtil.addClass(e3._icon, "leaflet-pm-draggable") : e3.dragging.disable(), e3;
    }, _createOuterMarker: function(t3) {
      var e3 = this._createMarker(t3);
      return e3.on("drag", this._resizeCircle, this), e3;
    }, _createMarker: function(t3) {
      var e3 = new L.Marker(t3, { draggable: true, icon: L.divIcon({ className: "marker-icon" }) });
      return this._setPane(e3, "vertexPane"), e3._origLatLng = t3, e3._pmTempLayer = true, e3.on("dragstart", this._onMarkerDragStart, this), e3.on("drag", this._onMarkerDrag, this), e3.on("dragend", this._onMarkerDragEnd, this), this._helperLayers.addLayer(e3), e3;
    }, _moveCircle: function() {
      var t3 = this._centerMarker.getLatLng();
      this._layer.setLatLng(t3);
      var e3 = this._layer._radius, i3 = this._getLatLngOnCircle(t3, e3);
      this._outerMarker._latlng = i3, this._outerMarker.update(), this._syncHintLine(), this._updateHiddenPolyCircle(), this._fireCenterPlaced("Edit"), this._fireChange(this._layer.getLatLng(), "Edit");
    }, _syncMarkers: function() {
      var t3 = this._layer.getLatLng(), e3 = this._layer._radius, i3 = this._getLatLngOnCircle(t3, e3);
      this._outerMarker.setLatLng(i3), this._centerMarker.setLatLng(t3), this._syncHintLine(), this._updateHiddenPolyCircle();
    }, _resizeCircle: function() {
      this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker()), this._syncHintLine(), this._syncCircleRadius();
    }, _syncCircleRadius: function() {
      var t3 = this._centerMarker.getLatLng(), e3 = this._outerMarker.getLatLng(), i3 = this._map.project(t3).distanceTo(this._map.project(e3));
      this.options.minRadiusCircleMarker && i3 < this.options.minRadiusCircleMarker ? this._layer.setRadius(this.options.minRadiusCircleMarker) : this.options.maxRadiusCircleMarker && i3 > this.options.maxRadiusCircleMarker ? this._layer.setRadius(this.options.maxRadiusCircleMarker) : this._layer.setRadius(i3), this._updateHiddenPolyCircle(), this._fireChange(this._layer.getLatLng(), "Edit");
    }, _syncHintLine: function() {
      var t3 = this._centerMarker.getLatLng(), e3 = this._outerMarker.getLatLng();
      this._hintline.setLatLngs([t3, e3]);
    }, _removeMarker: function() {
      this.options.editable && this.disable(), this._layer.remove(), this._fireRemove(this._layer), this._fireRemove(this._map, this._layer);
    }, _onDragStart: function() {
      this._map.pm.Draw.CircleMarker._layerIsDragging = true;
    }, _onMarkerDragStart: function(t3) {
      this._vertexValidation("move", t3) && this._fireMarkerDragStart(t3);
    }, _onMarkerDrag: function(t3) {
      var e3 = t3.target;
      e3 instanceof L.Marker && !this._vertexValidationDrag(e3) || this._fireMarkerDrag(t3);
    }, _onMarkerDragEnd: function(t3) {
      this._map.pm.Draw.CircleMarker._layerIsDragging = false;
      var e3 = t3.target;
      this._vertexValidationDragEnd(e3) && (this.options.editable && (this._fireEdit(), this._layerEdited = true), this._fireMarkerDragEnd(t3));
    }, _initSnappableMarkersDrag: function() {
      var t3 = this._layer;
      this.options.snapDistance = this.options.snapDistance || 30, this.options.snapSegment = this.options.snapSegment === void 0 || this.options.snapSegment, t3.off("pm:drag", this._handleSnapping, this), t3.on("pm:drag", this._handleSnapping, this), t3.off("pm:dragend", this._cleanupSnapping, this), t3.on("pm:dragend", this._cleanupSnapping, this), t3.off("pm:dragstart", this._unsnap, this), t3.on("pm:dragstart", this._unsnap, this);
    }, _disableSnappingDrag: function() {
      var t3 = this._layer;
      t3.off("pm:drag", this._handleSnapping, this), t3.off("pm:dragend", this._cleanupSnapping, this), t3.off("pm:dragstart", this._unsnap, this);
    }, _updateHiddenPolyCircle: function() {
      var t3 = this._layer._map || this._map;
      if (t3) {
        var e3 = L.PM.Utils.pxRadiusToMeterRadius(this._layer.getRadius(), t3, this._layer.getLatLng()), i3 = L.circle(this._layer.getLatLng(), this._layer.options);
        i3.setRadius(e3);
        var n2 = t3 && t3.pm._isCRSSimple();
        this._hiddenPolyCircle ? this._hiddenPolyCircle.setLatLngs(L.PM.Utils.circleToPolygon(i3, 200, !n2).getLatLngs()) : this._hiddenPolyCircle = L.PM.Utils.circleToPolygon(i3, 200, !n2), this._hiddenPolyCircle._parentCopy || (this._hiddenPolyCircle._parentCopy = this._layer);
      }
    }, _getNewDestinationOfOuterMarker: function() {
      var t3 = this._centerMarker.getLatLng(), e3 = this._outerMarker.getLatLng(), i3 = this._map.project(t3).distanceTo(this._map.project(e3));
      return this.options.minRadiusCircleMarker && i3 < this.options.minRadiusCircleMarker ? e3 = z(this._map, t3, e3, L.PM.Utils.pxRadiusToMeterRadius(this.options.minRadiusCircleMarker, this._map, t3)) : this.options.maxRadiusCircleMarker && i3 > this.options.maxRadiusCircleMarker && (e3 = z(this._map, t3, e3, L.PM.Utils.pxRadiusToMeterRadius(this.options.maxRadiusCircleMarker, this._map, t3))), e3;
    }, _handleOuterMarkerSnapping: function() {
      if (this._outerMarker._snapped) {
        var t3 = this._centerMarker.getLatLng(), e3 = this._outerMarker.getLatLng(), i3 = this._map.project(t3).distanceTo(this._map.project(e3));
        (this.options.minRadiusCircleMarker && i3 < this.options.minRadiusCircleMarker || this.options.maxRadiusCircleMarker && i3 > this.options.maxRadiusCircleMarker) && this._outerMarker.setLatLng(this._outerMarker._orgLatLng);
      }
      this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker());
    } }), we.ImageOverlay = we.extend({ _shape: "ImageOverlay", initialize: function(t3) {
      this._layer = t3, this._enabled = false;
    }, toggleEdit: function(t3) {
      this.enabled() ? this.disable() : this.enable(t3);
    }, enabled: function() {
      return this._enabled;
    }, enable: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { draggable: true, snappable: true };
      L.Util.setOptions(this, t3), this._map = this._layer._map, this._map && (this.options.allowEditing ? (this.enabled() || this.disable(), this.enableLayerDrag(), this._layer.on("remove", this.disable, this), this._enabled = true, this._otherSnapLayers = this._findCorners(), this._fireEnable()) : this.disable());
    }, disable: function() {
      this._dragging || (this._map || (this._map = this._layer._map), this.disableLayerDrag(), this._layer.off("remove", this.disable, this), this.enabled() || (this._layerEdited && this._fireUpdate(), this._layerEdited = false, this._fireDisable()), this._enabled = false);
    }, _findCorners: function() {
      var t3 = this._layer.getBounds();
      return [t3.getNorthWest(), t3.getNorthEast(), t3.getSouthEast(), t3.getSouthWest()];
    } }), we.Text = we.extend({ _shape: "Text", initialize: function(t3) {
      this._layer = t3, this._enabled = false;
    }, enable: function(t3) {
      L.Util.setOptions(this, t3), this.textArea && (this.options.allowEditing && this._layer._map ? (this._map = this._layer._map, this.enabled() && this.disable(), this.applyOptions(), this._safeToCacheDragState = true, this._focusChange(), this.textArea.readOnly = false, this.textArea.classList.remove("pm-disabled"), this._layer.on("remove", this.disable, this), L.DomEvent.on(this.textArea, "input", this._autoResize, this), L.DomEvent.on(this.textArea, "focus", this._focusChange, this), L.DomEvent.on(this.textArea, "blur", this._focusChange, this), this._layer.on("dblclick", L.DomEvent.stop), L.DomEvent.off(this.textArea, "mousedown", this._preventTextSelection), this._enabled = true, this._fireEnable()) : this.disable());
    }, disable: function() {
      if (this.enabled()) {
        this._layer.off("remove", this.disable, this), L.DomEvent.off(this.textArea, "input", this._autoResize, this), L.DomEvent.off(this.textArea, "focus", this._focusChange, this), L.DomEvent.off(this.textArea, "blur", this._focusChange, this), L.DomEvent.off(document, "click", this._documentClick, this), this._focusChange(), this.textArea.readOnly = true, this.textArea.classList.add("pm-disabled");
        var t3 = document.activeElement;
        this.textArea.focus(), this.textArea.selectionStart = 0, this.textArea.selectionEnd = 0, L.DomEvent.on(this.textArea, "mousedown", this._preventTextSelection), t3.focus(), this._disableOnBlurActive = false, this._layerEdited && this._fireUpdate(), this._layerEdited = false, this._fireDisable(), this._enabled = false;
      }
    }, enabled: function() {
      return this._enabled;
    }, toggleEdit: function(t3) {
      this.enabled() ? this.disable() : this.enable(t3);
    }, applyOptions: function() {
      this.options.snappable ? this._initSnappableMarkers() : this._disableSnapping();
    }, _initSnappableMarkers: function() {
      var t3 = this._layer;
      this.options.snapDistance = this.options.snapDistance || 30, this.options.snapSegment = this.options.snapSegment === void 0 || this.options.snapSegment, t3.off("pm:drag", this._handleSnapping, this), t3.on("pm:drag", this._handleSnapping, this), t3.off("pm:dragend", this._cleanupSnapping, this), t3.on("pm:dragend", this._cleanupSnapping, this), t3.off("pm:dragstart", this._unsnap, this), t3.on("pm:dragstart", this._unsnap, this);
    }, _disableSnapping: function() {
      var t3 = this._layer;
      t3.off("pm:drag", this._handleSnapping, this), t3.off("pm:dragend", this._cleanupSnapping, this), t3.off("pm:dragstart", this._unsnap, this);
    }, _autoResize: function() {
      this.textArea.style.height = "1px", this.textArea.style.width = "1px";
      var t3 = this.textArea.scrollHeight > 21 ? this.textArea.scrollHeight : 21, e3 = this.textArea.scrollWidth > 16 ? this.textArea.scrollWidth : 16;
      this.textArea.style.height = "".concat(t3, "px"), this.textArea.style.width = "".concat(e3, "px"), this._layer.options.text = this.getText(), this._fireTextChange(this.getText());
    }, _disableOnBlur: function() {
      var t3 = this;
      this._disableOnBlurActive = true, setTimeout(function() {
        t3.enabled() && L.DomEvent.on(document, "click", t3._documentClick, t3);
      }, 100);
    }, _documentClick: function(t3) {
      t3.target !== this.textArea && (this.disable(), !this.getText() && this.options.removeIfEmpty && this.remove());
    }, _focusChange: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e3 = this._hasFocus;
      this._hasFocus = "focus" === t3.type, !e3 != !this._hasFocus && (this._hasFocus ? (this._applyFocus(), this._focusText = this.getText(), this._fireTextFocus()) : (this._removeFocus(), this._fireTextBlur(), this._focusText !== this.getText() && (this._fireEdit(), this._layerEdited = true)));
    }, _applyFocus: function() {
      this.textArea.classList.add("pm-hasfocus"), this._map.dragging && (this._safeToCacheDragState && (this._originalMapDragState = this._map.dragging._enabled, this._safeToCacheDragState = false), this._map.dragging.disable());
    }, _removeFocus: function() {
      this._map.dragging && (this._originalMapDragState && this._map.dragging.enable(), this._safeToCacheDragState = true), this.textArea.classList.remove("pm-hasfocus");
    }, focus: function() {
      if (!this.enabled())
        throw new TypeError("Layer is not enabled");
      this.textArea.focus();
    }, blur: function() {
      if (!this.enabled())
        throw new TypeError("Layer is not enabled");
      this.textArea.blur(), this._disableOnBlurActive && this.disable();
    }, hasFocus: function() {
      return this._hasFocus;
    }, getElement: function() {
      return this.textArea;
    }, setText: function(t3) {
      this.textArea.value = t3, this._autoResize();
    }, getText: function() {
      return this.textArea.value;
    }, _initTextMarker: function() {
      if (this.textArea = L.PM.Draw.Text.prototype._createTextArea.call(this), this.options.className) {
        var t3, e3 = this.options.className.split(" ");
        (t3 = this.textArea.classList).add.apply(t3, De(e3));
      }
      var i3 = L.PM.Draw.Text.prototype._createTextIcon.call(this, this.textArea);
      this._layer.setIcon(i3), this._layer.once("add", this._createTextMarker, this);
    }, _createTextMarker: function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      this._layer.off("add", this._createTextMarker, this), this._layer.getElement().tabIndex = -1, this.textArea.wrap = "off", this.textArea.style.overflow = "hidden", this.textArea.style.height = L.DomUtil.getStyle(this.textArea, "font-size"), this.textArea.style.width = "1px", this._layer.options.text && this.setText(this._layer.options.text), this._autoResize(), true === t3 && (this.enable(), this.focus(), this._disableOnBlur());
    }, _preventTextSelection: function(t3) {
      t3.preventDefault();
    } });
    var Re = function(t3, e3, i3, n2, r2, a2) {
      this._matrix = [t3, e3, i3, n2, r2, a2];
    };
    Re.init = function() {
      return new L.PM.Matrix(1, 0, 0, 1, 0, 0);
    }, Re.prototype = { transform: function(t3) {
      return this._transform(t3.clone());
    }, _transform: function(t3) {
      var e3 = this._matrix, i3 = t3.x, n2 = t3.y;
      return t3.x = e3[0] * i3 + e3[1] * n2 + e3[4], t3.y = e3[2] * i3 + e3[3] * n2 + e3[5], t3;
    }, untransform: function(t3) {
      var e3 = this._matrix;
      return new L.Point((t3.x / e3[0] - e3[4]) / e3[0], (t3.y / e3[2] - e3[5]) / e3[2]);
    }, clone: function() {
      var t3 = this._matrix;
      return new L.PM.Matrix(t3[0], t3[1], t3[2], t3[3], t3[4], t3[5]);
    }, translate: function(t3) {
      return t3 === void 0 ? new L.Point(this._matrix[4], this._matrix[5]) : ("number" == typeof t3 ? (e3 = t3, i3 = t3) : (e3 = t3.x, i3 = t3.y), this._add(1, 0, 0, 1, e3, i3));
      var e3, i3;
    }, scale: function(t3, e3) {
      return t3 === void 0 ? new L.Point(this._matrix[0], this._matrix[3]) : (e3 = e3 || L.point(0, 0), "number" == typeof t3 ? (i3 = t3, n2 = t3) : (i3 = t3.x, n2 = t3.y), this._add(i3, 0, 0, n2, e3.x, e3.y)._add(1, 0, 0, 1, -e3.x, -e3.y));
      var i3, n2;
    }, rotate: function(t3, e3) {
      var i3 = Math.cos(t3), n2 = Math.sin(t3);
      return e3 = e3 || new L.Point(0, 0), this._add(i3, n2, -n2, i3, e3.x, e3.y)._add(1, 0, 0, 1, -e3.x, -e3.y);
    }, flip: function() {
      return this._matrix[1] *= -1, this._matrix[2] *= -1, this;
    }, _add: function(t3, e3, i3, n2, r2, a2) {
      var o2, s2 = [[], [], []], l2 = this._matrix, h2 = [[l2[0], l2[2], l2[4]], [l2[1], l2[3], l2[5]], [0, 0, 1]], u2 = [[t3, i3, r2], [e3, n2, a2], [0, 0, 1]];
      t3 && t3 instanceof L.PM.Matrix && (u2 = [[(l2 = t3._matrix)[0], l2[2], l2[4]], [l2[1], l2[3], l2[5]], [0, 0, 1]]);
      for (var c2 = 0; c2 < 3; c2 += 1)
        for (var p2 = 0; p2 < 3; p2 += 1) {
          o2 = 0;
          for (var d2 = 0; d2 < 3; d2 += 1)
            o2 += h2[c2][d2] * u2[d2][p2];
          s2[c2][p2] = o2;
        }
      return this._matrix = [s2[0][0], s2[1][0], s2[0][1], s2[1][1], s2[0][2], s2[1][2]], this;
    } };
    const Te = Re;
    var Ie = { calcMiddleLatLng: function(t3, e3, i3) {
      var n2 = t3.project(e3), r2 = t3.project(i3);
      return t3.unproject(n2._add(r2)._divideBy(2));
    }, findLayers: function(t3) {
      var e3 = [];
      return t3.eachLayer(function(t4) {
        (t4 instanceof L.Polyline || t4 instanceof L.Marker || t4 instanceof L.Circle || t4 instanceof L.CircleMarker || t4 instanceof L.ImageOverlay) && e3.push(t4);
      }), e3 = (e3 = (e3 = e3.filter(function(t4) {
        return !!t4.pm;
      })).filter(function(t4) {
        return !t4._pmTempLayer;
      })).filter(function(t4) {
        return !L.PM.optIn && !t4.options.pmIgnore || L.PM.optIn && false === t4.options.pmIgnore;
      });
    }, circleToPolygon: function(t3) {
      for (var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 60, i3 = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], n2 = t3.getLatLng(), r2 = t3.getRadius(), a2 = N(n2, r2, e3, 0, i3), o2 = [], s2 = 0; s2 < a2.length; s2 += 1) {
        var l2 = [a2[s2].lat, a2[s2].lng];
        o2.push(l2);
      }
      return L.polygon(o2, t3.options);
    }, disablePopup: function(t3) {
      t3.getPopup() && (t3._tempPopupCopy = t3.getPopup(), t3.unbindPopup());
    }, enablePopup: function(t3) {
      t3._tempPopupCopy && (t3.bindPopup(t3._tempPopupCopy), delete t3._tempPopupCopy);
    }, _fireEvent: function(t3, e3, i3) {
      var n2 = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
      t3.fire(e3, i3, n2);
      var r2 = this.getAllParentGroups(t3), a2 = r2.groups;
      a2.forEach(function(t4) {
        t4.fire(e3, i3, n2);
      });
    }, getAllParentGroups: function(t3) {
      var e3 = [], i3 = [];
      return !t3._pmLastGroupFetch || !t3._pmLastGroupFetch.time || new Date().getTime() - t3._pmLastGroupFetch.time > 1e3 ? (function n2(t4) {
        for (var r2 in t4._eventParents)
          if (-1 === e3.indexOf(r2)) {
            e3.push(r2);
            var a2 = t4._eventParents[r2];
            i3.push(a2), n2(a2);
          }
      }(t3), t3._pmLastGroupFetch = { time: new Date().getTime(), groups: i3, groupIds: e3 }, { groupIds: e3, groups: i3 }) : { groups: t3._pmLastGroupFetch.groups, groupIds: t3._pmLastGroupFetch.groupIds };
    }, createGeodesicPolygon: N, getTranslation: I, findDeepCoordIndex: function(t3, e3) {
      var i3, n2 = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], r2 = function o2(t4) {
        return function(r3, a3) {
          var s2 = t4.concat(a3);
          if (n2) {
            if (r3.lat && r3.lat === e3.lat && r3.lng === e3.lng)
              return i3 = s2, true;
          } else if (r3.lat && L.latLng(r3).equals(e3))
            return i3 = s2, true;
          return Array.isArray(r3) && r3.some(o2(s2));
        };
      };
      t3.some(r2([]));
      var a2 = {};
      return i3 && (a2 = { indexPath: i3, index: i3[i3.length - 1], parentPath: i3.slice(0, i3.length - 1) }), a2;
    }, findDeepMarkerIndex: function(t3, e3) {
      var i3;
      t3.some(function r2(t4) {
        return function(n3, a2) {
          var o2 = t4.concat(a2);
          return n3._leaflet_id === e3._leaflet_id ? (i3 = o2, true) : Array.isArray(n3) && n3.some(r2(o2));
        };
      }([]));
      var n2 = {};
      return i3 && (n2 = { indexPath: i3, index: i3[i3.length - 1], parentPath: i3.slice(0, i3.length - 1) }), n2;
    }, _getIndexFromSegment: function(t3, e3) {
      if (e3 && 2 === e3.length) {
        var i3 = this.findDeepCoordIndex(t3, e3[0]), n2 = this.findDeepCoordIndex(t3, e3[1]), r2 = Math.max(i3.index, n2.index);
        return 0 !== i3.index && 0 !== n2.index || 1 === r2 || (r2 += 1), { indexA: i3, indexB: n2, newIndex: r2, indexPath: i3.indexPath, parentPath: i3.parentPath };
      }
      return null;
    }, _getRotatedRectangle: function(t3, e3, i3, n2) {
      var r2 = be(n2, t3), a2 = be(n2, e3), o2 = i3 * Math.PI / 180, s2 = Math.cos(o2), l2 = Math.sin(o2), h2 = (a2.x - r2.x) * s2 + (a2.y - r2.y) * l2, u2 = (a2.y - r2.y) * s2 - (a2.x - r2.x) * l2, c2 = h2 * s2 + r2.x, p2 = h2 * l2 + r2.y, d2 = -u2 * l2 + r2.x, f2 = u2 * s2 + r2.y;
      return [ke(n2, r2), ke(n2, { x: c2, y: p2 }), ke(n2, a2), ke(n2, { x: d2, y: f2 })];
    }, pxRadiusToMeterRadius: function(t3, e3, i3) {
      var n2 = e3.project(i3), r2 = L.point(n2.x + t3, n2.y);
      return e3.distance(e3.unproject(r2), i3);
    } };
    const je = Ie;
    L.PM = L.PM || { version: "2.14.2", Map: H, Toolbar: $, Draw: nt, Edit: we, Utils: je, Matrix: Te, activeLang: "en", optIn: false, initialize: function(t3) {
      this.addInitHooks(t3);
    }, setOptIn: function(t3) {
      this.optIn = !!t3;
    }, addInitHooks: function() {
      L.Map.addInitHook(function() {
        this.pm = void 0, L.PM.optIn ? false === this.options.pmIgnore && (this.pm = new L.PM.Map(this)) : this.options.pmIgnore || (this.pm = new L.PM.Map(this)), this.pm && this.pm.setGlobalOptions({});
      }), L.LayerGroup.addInitHook(function() {
        this.pm = void 0, L.PM.optIn ? false === this.options.pmIgnore && (this.pm = new L.PM.Edit.LayerGroup(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.LayerGroup(this));
      }), L.Marker.addInitHook(function() {
        this.pm = void 0, L.PM.optIn ? false === this.options.pmIgnore && (this.options.textMarker ? (this.pm = new L.PM.Edit.Text(this), this.options._textMarkerOverPM || this.pm._initTextMarker(), delete this.options._textMarkerOverPM) : this.pm = new L.PM.Edit.Marker(this)) : this.options.pmIgnore || (this.options.textMarker ? (this.pm = new L.PM.Edit.Text(this), this.options._textMarkerOverPM || this.pm._initTextMarker(), delete this.options._textMarkerOverPM) : this.pm = new L.PM.Edit.Marker(this));
      }), L.CircleMarker.addInitHook(function() {
        this.pm = void 0, L.PM.optIn ? false === this.options.pmIgnore && (this.pm = new L.PM.Edit.CircleMarker(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.CircleMarker(this));
      }), L.Polyline.addInitHook(function() {
        this.pm = void 0, L.PM.optIn ? false === this.options.pmIgnore && (this.pm = new L.PM.Edit.Line(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.Line(this));
      }), L.Polygon.addInitHook(function() {
        this.pm = void 0, L.PM.optIn ? false === this.options.pmIgnore && (this.pm = new L.PM.Edit.Polygon(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.Polygon(this));
      }), L.Rectangle.addInitHook(function() {
        this.pm = void 0, L.PM.optIn ? false === this.options.pmIgnore && (this.pm = new L.PM.Edit.Rectangle(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.Rectangle(this));
      }), L.Circle.addInitHook(function() {
        this.pm = void 0, L.PM.optIn ? false === this.options.pmIgnore && (this.pm = new L.PM.Edit.Circle(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.Circle(this));
      }), L.ImageOverlay.addInitHook(function() {
        this.pm = void 0, L.PM.optIn ? false === this.options.pmIgnore && (this.pm = new L.PM.Edit.ImageOverlay(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.ImageOverlay(this));
      });
    }, reInitLayer: function(t3) {
      var e3 = this;
      t3 instanceof L.LayerGroup && t3.eachLayer(function(t4) {
        e3.reInitLayer(t4);
      }), t3.pm || L.PM.optIn && false !== t3.options.pmIgnore || t3.options.pmIgnore || (t3 instanceof L.Map ? t3.pm = new L.PM.Map(t3) : t3 instanceof L.Marker ? t3.options.textMarker ? (t3.pm = new L.PM.Edit.Text(t3), t3.pm._initTextMarker(), t3.pm._createTextMarker(false)) : t3.pm = new L.PM.Edit.Marker(t3) : t3 instanceof L.Circle ? t3.pm = new L.PM.Edit.Circle(t3) : t3 instanceof L.CircleMarker ? t3.pm = new L.PM.Edit.CircleMarker(t3) : t3 instanceof L.Rectangle ? t3.pm = new L.PM.Edit.Rectangle(t3) : t3 instanceof L.Polygon ? t3.pm = new L.PM.Edit.Polygon(t3) : t3 instanceof L.Polyline ? t3.pm = new L.PM.Edit.Line(t3) : t3 instanceof L.LayerGroup ? t3.pm = new L.PM.Edit.LayerGroup(t3) : t3 instanceof L.ImageOverlay && (t3.pm = new L.PM.Edit.ImageOverlay(t3)));
    } }, "1.7.1" === L.version && L.Canvas.include({ _onClick: function(t3) {
      for (var e3, i3, n2 = this._map.mouseEventToLayerPoint(t3), r2 = this._drawFirst; r2; r2 = r2.next)
        (e3 = r2.layer).options.interactive && e3._containsPoint(n2) && ("click" !== t3.type && "preclick" !== t3.type || !this._map._draggableMoved(e3)) && (i3 = e3);
      i3 && (L.DomEvent.fakeStop(t3), this._fireEvent([i3], t3));
    } }), L.PM.initialize();
  }, 7107: () => {
    Array.prototype.findIndex = Array.prototype.findIndex || function(t2) {
      if (null === this)
        throw new TypeError("Array.prototype.findIndex called on null or undefined");
      if ("function" != typeof t2)
        throw new TypeError("callback must be a function");
      for (var e2 = Object(this), i2 = e2.length >>> 0, n = arguments[1], r = 0; r < i2; r++)
        if (t2.call(n, e2[r], r, e2))
          return r;
      return -1;
    }, Array.prototype.find = Array.prototype.find || function(t2) {
      if (null === this)
        throw new TypeError("Array.prototype.find called on null or undefined");
      if ("function" != typeof t2)
        throw new TypeError("callback must be a function");
      for (var e2 = Object(this), i2 = e2.length >>> 0, n = arguments[1], r = 0; r < i2; r++) {
        var a = e2[r];
        if (t2.call(n, a, r, e2))
          return a;
      }
    }, "function" != typeof Object.assign && (Object.assign = function(t2) {
      if (null == t2)
        throw new TypeError("Cannot convert undefined or null to object");
      t2 = Object(t2);
      for (var e2 = 1; e2 < arguments.length; e2++) {
        var i2 = arguments[e2];
        if (null != i2)
          for (var n in i2)
            Object.prototype.hasOwnProperty.call(i2, n) && (t2[n] = i2[n]);
      }
      return t2;
    }), [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function(t2) {
      t2.hasOwnProperty("remove") || Object.defineProperty(t2, "remove", { configurable: true, enumerable: true, writable: true, value: function() {
        this.parentNode.removeChild(this);
      } });
    }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", { value: function(t2, e2) {
      if (null == this)
        throw new TypeError('"this" is null or not defined');
      var i2 = Object(this), n = i2.length >>> 0;
      if (0 === n)
        return false;
      var r, a, o = 0 | e2, s = Math.max(o >= 0 ? o : n - Math.abs(o), 0);
      for (; s < n; ) {
        if ((r = i2[s]) === (a = t2) || "number" == typeof r && "number" == typeof a && isNaN(r) && isNaN(a))
          return true;
        s++;
      }
      return false;
    } });
  }, 1787: (t2, e2, i2) => {
    var n = i2(2582), r = i2(4102), a = i2(1540), o = i2(9705).Z, s = a.featureEach, l = (a.coordEach, r.polygon, r.featureCollection);
    function h(t3) {
      var e3 = new n(t3);
      return e3.insert = function(t4) {
        if ("Feature" !== t4.type)
          throw new Error("invalid feature");
        return t4.bbox = t4.bbox ? t4.bbox : o(t4), n.prototype.insert.call(this, t4);
      }, e3.load = function(t4) {
        var e4 = [];
        return Array.isArray(t4) ? t4.forEach(function(t5) {
          if ("Feature" !== t5.type)
            throw new Error("invalid features");
          t5.bbox = t5.bbox ? t5.bbox : o(t5), e4.push(t5);
        }) : s(t4, function(t5) {
          if ("Feature" !== t5.type)
            throw new Error("invalid features");
          t5.bbox = t5.bbox ? t5.bbox : o(t5), e4.push(t5);
        }), n.prototype.load.call(this, e4);
      }, e3.remove = function(t4, e4) {
        if ("Feature" !== t4.type)
          throw new Error("invalid feature");
        return t4.bbox = t4.bbox ? t4.bbox : o(t4), n.prototype.remove.call(this, t4, e4);
      }, e3.clear = function() {
        return n.prototype.clear.call(this);
      }, e3.search = function(t4) {
        var e4 = n.prototype.search.call(this, this.toBBox(t4));
        return l(e4);
      }, e3.collides = function(t4) {
        return n.prototype.collides.call(this, this.toBBox(t4));
      }, e3.all = function() {
        var t4 = n.prototype.all.call(this);
        return l(t4);
      }, e3.toJSON = function() {
        return n.prototype.toJSON.call(this);
      }, e3.fromJSON = function(t4) {
        return n.prototype.fromJSON.call(this, t4);
      }, e3.toBBox = function(t4) {
        var e4;
        if (t4.bbox)
          e4 = t4.bbox;
        else if (Array.isArray(t4) && 4 === t4.length)
          e4 = t4;
        else if (Array.isArray(t4) && 6 === t4.length)
          e4 = [t4[0], t4[1], t4[3], t4[4]];
        else if ("Feature" === t4.type)
          e4 = o(t4);
        else {
          if ("FeatureCollection" !== t4.type)
            throw new Error("invalid geojson");
          e4 = o(t4);
        }
        return { minX: e4[0], minY: e4[1], maxX: e4[2], maxY: e4[3] };
      }, e3;
    }
    t2.exports = h, t2.exports["default"] = h;
  }, 1989: (t2, e2, i2) => {
    var n = i2(1789), r = i2(401), a = i2(7667), o = i2(1327), s = i2(1866);
    function l(t3) {
      var e3 = -1, i3 = null == t3 ? 0 : t3.length;
      for (this.clear(); ++e3 < i3; ) {
        var n2 = t3[e3];
        this.set(n2[0], n2[1]);
      }
    }
    l.prototype.clear = n, l.prototype["delete"] = r, l.prototype.get = a, l.prototype.has = o, l.prototype.set = s, t2.exports = l;
  }, 8407: (t2, e2, i2) => {
    var n = i2(7040), r = i2(4125), a = i2(2117), o = i2(7518), s = i2(4705);
    function l(t3) {
      var e3 = -1, i3 = null == t3 ? 0 : t3.length;
      for (this.clear(); ++e3 < i3; ) {
        var n2 = t3[e3];
        this.set(n2[0], n2[1]);
      }
    }
    l.prototype.clear = n, l.prototype["delete"] = r, l.prototype.get = a, l.prototype.has = o, l.prototype.set = s, t2.exports = l;
  }, 7071: (t2, e2, i2) => {
    var n = i2(852)(i2(5639), "Map");
    t2.exports = n;
  }, 3369: (t2, e2, i2) => {
    var n = i2(4785), r = i2(1285), a = i2(6e3), o = i2(9916), s = i2(5265);
    function l(t3) {
      var e3 = -1, i3 = null == t3 ? 0 : t3.length;
      for (this.clear(); ++e3 < i3; ) {
        var n2 = t3[e3];
        this.set(n2[0], n2[1]);
      }
    }
    l.prototype.clear = n, l.prototype["delete"] = r, l.prototype.get = a, l.prototype.has = o, l.prototype.set = s, t2.exports = l;
  }, 6384: (t2, e2, i2) => {
    var n = i2(8407), r = i2(7465), a = i2(3779), o = i2(7599), s = i2(4758), l = i2(4309);
    function h(t3) {
      var e3 = this.__data__ = new n(t3);
      this.size = e3.size;
    }
    h.prototype.clear = r, h.prototype["delete"] = a, h.prototype.get = o, h.prototype.has = s, h.prototype.set = l, t2.exports = h;
  }, 2705: (t2, e2, i2) => {
    var n = i2(5639).Symbol;
    t2.exports = n;
  }, 1149: (t2, e2, i2) => {
    var n = i2(5639).Uint8Array;
    t2.exports = n;
  }, 6874: (t2) => {
    t2.exports = function(t3, e2, i2) {
      switch (i2.length) {
        case 0:
          return t3.call(e2);
        case 1:
          return t3.call(e2, i2[0]);
        case 2:
          return t3.call(e2, i2[0], i2[1]);
        case 3:
          return t3.call(e2, i2[0], i2[1], i2[2]);
      }
      return t3.apply(e2, i2);
    };
  }, 4636: (t2, e2, i2) => {
    var n = i2(2545), r = i2(5694), a = i2(1469), o = i2(4144), s = i2(5776), l = i2(6719), h = Object.prototype.hasOwnProperty;
    t2.exports = function(t3, e3) {
      var i3 = a(t3), u = !i3 && r(t3), c = !i3 && !u && o(t3), p = !i3 && !u && !c && l(t3), d = i3 || u || c || p, f = d ? n(t3.length, String) : [], g = f.length;
      for (var _ in t3)
        !e3 && !h.call(t3, _) || d && ("length" == _ || c && ("offset" == _ || "parent" == _) || p && ("buffer" == _ || "byteLength" == _ || "byteOffset" == _) || s(_, g)) || f.push(_);
      return f;
    };
  }, 9932: (t2) => {
    t2.exports = function(t3, e2) {
      for (var i2 = -1, n = null == t3 ? 0 : t3.length, r = Array(n); ++i2 < n; )
        r[i2] = e2(t3[i2], i2, t3);
      return r;
    };
  }, 6556: (t2, e2, i2) => {
    var n = i2(9465), r = i2(7813);
    t2.exports = function(t3, e3, i3) {
      (i3 !== void 0 && !r(t3[e3], i3) || i3 === void 0 && !(e3 in t3)) && n(t3, e3, i3);
    };
  }, 4865: (t2, e2, i2) => {
    var n = i2(9465), r = i2(7813), a = Object.prototype.hasOwnProperty;
    t2.exports = function(t3, e3, i3) {
      var o = t3[e3];
      a.call(t3, e3) && r(o, i3) && (i3 !== void 0 || e3 in t3) || n(t3, e3, i3);
    };
  }, 8470: (t2, e2, i2) => {
    var n = i2(7813);
    t2.exports = function(t3, e3) {
      for (var i3 = t3.length; i3--; )
        if (n(t3[i3][0], e3))
          return i3;
      return -1;
    };
  }, 9465: (t2, e2, i2) => {
    var n = i2(8777);
    t2.exports = function(t3, e3, i3) {
      "__proto__" == e3 && n ? n(t3, e3, { configurable: true, enumerable: true, value: i3, writable: true }) : t3[e3] = i3;
    };
  }, 3118: (t2, e2, i2) => {
    var n = i2(3218), r = Object.create, a = function() {
      function t3() {
      }
      return function(e3) {
        if (!n(e3))
          return {};
        if (r)
          return r(e3);
        t3.prototype = e3;
        var i3 = new t3();
        return t3.prototype = void 0, i3;
      };
    }();
    t2.exports = a;
  }, 8483: (t2, e2, i2) => {
    var n = i2(5063)();
    t2.exports = n;
  }, 7786: (t2, e2, i2) => {
    var n = i2(1811), r = i2(327);
    t2.exports = function(t3, e3) {
      for (var i3 = 0, a = (e3 = n(e3, t3)).length; null != t3 && i3 < a; )
        t3 = t3[r(e3[i3++])];
      return i3 && i3 == a ? t3 : void 0;
    };
  }, 4239: (t2, e2, i2) => {
    var n = i2(2705), r = i2(9607), a = i2(2333), o = n ? n.toStringTag : void 0;
    t2.exports = function(t3) {
      return null == t3 ? t3 === void 0 ? "[object Undefined]" : "[object Null]" : o && o in Object(t3) ? r(t3) : a(t3);
    };
  }, 8565: (t2) => {
    var e2 = Object.prototype.hasOwnProperty;
    t2.exports = function(t3, i2) {
      return null != t3 && e2.call(t3, i2);
    };
  }, 9454: (t2, e2, i2) => {
    var n = i2(4239), r = i2(7005);
    t2.exports = function(t3) {
      return r(t3) && "[object Arguments]" == n(t3);
    };
  }, 8458: (t2, e2, i2) => {
    var n = i2(3560), r = i2(5346), a = i2(3218), o = i2(346), s = /^\[object .+?Constructor\]$/, l = Function.prototype, h = Object.prototype, u = l.toString, c = h.hasOwnProperty, p = RegExp("^" + u.call(c).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t2.exports = function(t3) {
      return !(!a(t3) || r(t3)) && (n(t3) ? p : s).test(o(t3));
    };
  }, 8749: (t2, e2, i2) => {
    var n = i2(4239), r = i2(1780), a = i2(7005), o = {};
    o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = true, o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object DataView]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = false, t2.exports = function(t3) {
      return a(t3) && r(t3.length) && !!o[n(t3)];
    };
  }, 313: (t2, e2, i2) => {
    var n = i2(3218), r = i2(5726), a = i2(3498), o = Object.prototype.hasOwnProperty;
    t2.exports = function(t3) {
      if (!n(t3))
        return a(t3);
      var e3 = r(t3), i3 = [];
      for (var s in t3)
        ("constructor" != s || !e3 && o.call(t3, s)) && i3.push(s);
      return i3;
    };
  }, 2980: (t2, e2, i2) => {
    var n = i2(6384), r = i2(6556), a = i2(8483), o = i2(9783), s = i2(3218), l = i2(1704), h = i2(6390);
    t2.exports = function u(t3, e3, i3, c, p) {
      t3 !== e3 && a(e3, function(a2, l2) {
        if (p || (p = new n()), s(a2))
          o(t3, e3, l2, i3, u, c, p);
        else {
          var d = c ? c(h(t3, l2), a2, l2 + "", t3, e3, p) : void 0;
          d === void 0 && (d = a2), r(t3, l2, d);
        }
      }, l);
    };
  }, 9783: (t2, e2, i2) => {
    var n = i2(6556), r = i2(4626), a = i2(7133), o = i2(278), s = i2(8517), l = i2(5694), h = i2(1469), u = i2(9246), c = i2(4144), p = i2(3560), d = i2(3218), f = i2(8630), g = i2(6719), _ = i2(6390), m = i2(9881);
    t2.exports = function(t3, e3, i3, y, v, L2, b) {
      var k = _(t3, i3), M = _(e3, i3), x = b.get(M);
      if (x)
        n(t3, i3, x);
      else {
        var w = L2 ? L2(k, M, i3 + "", t3, e3, b) : void 0, C = w === void 0;
        if (C) {
          var P = h(M), E = !P && c(M), S = !P && !E && g(M);
          w = M, P || E || S ? h(k) ? w = k : u(k) ? w = o(k) : E ? (C = false, w = r(M, true)) : S ? (C = false, w = a(M, true)) : w = [] : f(M) || l(M) ? (w = k, l(k) ? w = m(k) : d(k) && !p(k) || (w = s(M))) : C = false;
        }
        C && (b.set(M, w), v(w, M, y, L2, b), b["delete"](M)), n(t3, i3, w);
      }
    };
  }, 5976: (t2, e2, i2) => {
    var n = i2(6557), r = i2(5357), a = i2(61);
    t2.exports = function(t3, e3) {
      return a(r(t3, e3, n), t3 + "");
    };
  }, 6560: (t2, e2, i2) => {
    var n = i2(5703), r = i2(8777), a = i2(6557), o = r ? function(t3, e3) {
      return r(t3, "toString", { configurable: true, enumerable: false, value: n(e3), writable: true });
    } : a;
    t2.exports = o;
  }, 2545: (t2) => {
    t2.exports = function(t3, e2) {
      for (var i2 = -1, n = Array(t3); ++i2 < t3; )
        n[i2] = e2(i2);
      return n;
    };
  }, 531: (t2, e2, i2) => {
    var n = i2(2705), r = i2(9932), a = i2(1469), o = i2(3448), s = n ? n.prototype : void 0, l = s ? s.toString : void 0;
    t2.exports = function h(t3) {
      if ("string" == typeof t3)
        return t3;
      if (a(t3))
        return r(t3, h) + "";
      if (o(t3))
        return l ? l.call(t3) : "";
      var e3 = t3 + "";
      return "0" == e3 && 1 / t3 == -Infinity ? "-0" : e3;
    };
  }, 1717: (t2) => {
    t2.exports = function(t3) {
      return function(e2) {
        return t3(e2);
      };
    };
  }, 1811: (t2, e2, i2) => {
    var n = i2(1469), r = i2(5403), a = i2(5514), o = i2(9833);
    t2.exports = function(t3, e3) {
      return n(t3) ? t3 : r(t3, e3) ? [t3] : a(o(t3));
    };
  }, 4318: (t2, e2, i2) => {
    var n = i2(1149);
    t2.exports = function(t3) {
      var e3 = new t3.constructor(t3.byteLength);
      return new n(e3).set(new n(t3)), e3;
    };
  }, 4626: (t2, e2, i2) => {
    t2 = i2.nmd(t2);
    var n = i2(5639), r = e2 && !e2.nodeType && e2, a = r && t2 && !t2.nodeType && t2, o = a && a.exports === r ? n.Buffer : void 0, s = o ? o.allocUnsafe : void 0;
    t2.exports = function(t3, e3) {
      if (e3)
        return t3.slice();
      var i3 = t3.length, n2 = s ? s(i3) : new t3.constructor(i3);
      return t3.copy(n2), n2;
    };
  }, 7133: (t2, e2, i2) => {
    var n = i2(4318);
    t2.exports = function(t3, e3) {
      var i3 = e3 ? n(t3.buffer) : t3.buffer;
      return new t3.constructor(i3, t3.byteOffset, t3.length);
    };
  }, 278: (t2) => {
    t2.exports = function(t3, e2) {
      var i2 = -1, n = t3.length;
      for (e2 || (e2 = Array(n)); ++i2 < n; )
        e2[i2] = t3[i2];
      return e2;
    };
  }, 8363: (t2, e2, i2) => {
    var n = i2(4865), r = i2(9465);
    t2.exports = function(t3, e3, i3, a) {
      var o = !i3;
      i3 || (i3 = {});
      for (var s = -1, l = e3.length; ++s < l; ) {
        var h = e3[s], u = a ? a(i3[h], t3[h], h, i3, t3) : void 0;
        u === void 0 && (u = t3[h]), o ? r(i3, h, u) : n(i3, h, u);
      }
      return i3;
    };
  }, 4429: (t2, e2, i2) => {
    var n = i2(5639)["__core-js_shared__"];
    t2.exports = n;
  }, 1463: (t2, e2, i2) => {
    var n = i2(5976), r = i2(6612);
    t2.exports = function(t3) {
      return n(function(e3, i3) {
        var n2 = -1, a = i3.length, o = a > 1 ? i3[a - 1] : void 0, s = a > 2 ? i3[2] : void 0;
        for (o = t3.length > 3 && "function" == typeof o ? (a--, o) : void 0, s && r(i3[0], i3[1], s) && (o = a < 3 ? void 0 : o, a = 1), e3 = Object(e3); ++n2 < a; ) {
          var l = i3[n2];
          l && t3(e3, l, n2, o);
        }
        return e3;
      });
    };
  }, 5063: (t2) => {
    t2.exports = function(t3) {
      return function(e2, i2, n) {
        for (var r = -1, a = Object(e2), o = n(e2), s = o.length; s--; ) {
          var l = o[t3 ? s : ++r];
          if (false === i2(a[l], l, a))
            break;
        }
        return e2;
      };
    };
  }, 8777: (t2, e2, i2) => {
    var n = i2(852), r = function() {
      try {
        var t3 = n(Object, "defineProperty");
        return t3({}, "", {}), t3;
      } catch (e3) {
      }
    }();
    t2.exports = r;
  }, 1957: (t2, e2, i2) => {
    var n = "object" == typeof i2.g && i2.g && i2.g.Object === Object && i2.g;
    t2.exports = n;
  }, 5050: (t2, e2, i2) => {
    var n = i2(7019);
    t2.exports = function(t3, e3) {
      var i3 = t3.__data__;
      return n(e3) ? i3["string" == typeof e3 ? "string" : "hash"] : i3.map;
    };
  }, 852: (t2, e2, i2) => {
    var n = i2(8458), r = i2(7801);
    t2.exports = function(t3, e3) {
      var i3 = r(t3, e3);
      return n(i3) ? i3 : void 0;
    };
  }, 5924: (t2, e2, i2) => {
    var n = i2(5569)(Object.getPrototypeOf, Object);
    t2.exports = n;
  }, 9607: (t2, e2, i2) => {
    var n = i2(2705), r = Object.prototype, a = r.hasOwnProperty, o = r.toString, s = n ? n.toStringTag : void 0;
    t2.exports = function(t3) {
      var e3 = a.call(t3, s), i3 = t3[s];
      try {
        t3[s] = void 0;
        var n2 = true;
      } catch (l) {
      }
      var r2 = o.call(t3);
      return n2 && (e3 ? t3[s] = i3 : delete t3[s]), r2;
    };
  }, 7801: (t2) => {
    t2.exports = function(t3, e2) {
      return null == t3 ? void 0 : t3[e2];
    };
  }, 222: (t2, e2, i2) => {
    var n = i2(1811), r = i2(5694), a = i2(1469), o = i2(5776), s = i2(1780), l = i2(327);
    t2.exports = function(t3, e3, i3) {
      for (var h = -1, u = (e3 = n(e3, t3)).length, c = false; ++h < u; ) {
        var p = l(e3[h]);
        if (!(c = null != t3 && i3(t3, p)))
          break;
        t3 = t3[p];
      }
      return c || ++h != u ? c : !!(u = null == t3 ? 0 : t3.length) && s(u) && o(p, u) && (a(t3) || r(t3));
    };
  }, 1789: (t2, e2, i2) => {
    var n = i2(4536);
    t2.exports = function() {
      this.__data__ = n ? n(null) : {}, this.size = 0;
    };
  }, 401: (t2) => {
    t2.exports = function(t3) {
      var e2 = this.has(t3) && delete this.__data__[t3];
      return this.size -= e2 ? 1 : 0, e2;
    };
  }, 7667: (t2, e2, i2) => {
    var n = i2(4536), r = Object.prototype.hasOwnProperty;
    t2.exports = function(t3) {
      var e3 = this.__data__;
      if (n) {
        var i3 = e3[t3];
        return "__lodash_hash_undefined__" === i3 ? void 0 : i3;
      }
      return r.call(e3, t3) ? e3[t3] : void 0;
    };
  }, 1327: (t2, e2, i2) => {
    var n = i2(4536), r = Object.prototype.hasOwnProperty;
    t2.exports = function(t3) {
      var e3 = this.__data__;
      return n ? e3[t3] !== void 0 : r.call(e3, t3);
    };
  }, 1866: (t2, e2, i2) => {
    var n = i2(4536);
    t2.exports = function(t3, e3) {
      var i3 = this.__data__;
      return this.size += this.has(t3) ? 0 : 1, i3[t3] = n && e3 === void 0 ? "__lodash_hash_undefined__" : e3, this;
    };
  }, 8517: (t2, e2, i2) => {
    var n = i2(3118), r = i2(5924), a = i2(5726);
    t2.exports = function(t3) {
      return "function" != typeof t3.constructor || a(t3) ? {} : n(r(t3));
    };
  }, 5776: (t2) => {
    var e2 = /^(?:0|[1-9]\d*)$/;
    t2.exports = function(t3, i2) {
      var n = typeof t3;
      return !!(i2 = null == i2 ? 9007199254740991 : i2) && ("number" == n || "symbol" != n && e2.test(t3)) && t3 > -1 && t3 % 1 == 0 && t3 < i2;
    };
  }, 6612: (t2, e2, i2) => {
    var n = i2(7813), r = i2(8612), a = i2(5776), o = i2(3218);
    t2.exports = function(t3, e3, i3) {
      if (!o(i3))
        return false;
      var s = typeof e3;
      return !!("number" == s ? r(i3) && a(e3, i3.length) : "string" == s && e3 in i3) && n(i3[e3], t3);
    };
  }, 5403: (t2, e2, i2) => {
    var n = i2(1469), r = i2(3448), a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, o = /^\w*$/;
    t2.exports = function(t3, e3) {
      if (n(t3))
        return false;
      var i3 = typeof t3;
      return !("number" != i3 && "symbol" != i3 && "boolean" != i3 && null != t3 && !r(t3)) || (o.test(t3) || !a.test(t3) || null != e3 && t3 in Object(e3));
    };
  }, 7019: (t2) => {
    t2.exports = function(t3) {
      var e2 = typeof t3;
      return "string" == e2 || "number" == e2 || "symbol" == e2 || "boolean" == e2 ? "__proto__" !== t3 : null === t3;
    };
  }, 5346: (t2, e2, i2) => {
    var n, r = i2(4429), a = (n = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
    t2.exports = function(t3) {
      return !!a && a in t3;
    };
  }, 5726: (t2) => {
    var e2 = Object.prototype;
    t2.exports = function(t3) {
      var i2 = t3 && t3.constructor;
      return t3 === ("function" == typeof i2 && i2.prototype || e2);
    };
  }, 7040: (t2) => {
    t2.exports = function() {
      this.__data__ = [], this.size = 0;
    };
  }, 4125: (t2, e2, i2) => {
    var n = i2(8470), r = Array.prototype.splice;
    t2.exports = function(t3) {
      var e3 = this.__data__, i3 = n(e3, t3);
      return !(i3 < 0) && (i3 == e3.length - 1 ? e3.pop() : r.call(e3, i3, 1), --this.size, true);
    };
  }, 2117: (t2, e2, i2) => {
    var n = i2(8470);
    t2.exports = function(t3) {
      var e3 = this.__data__, i3 = n(e3, t3);
      return i3 < 0 ? void 0 : e3[i3][1];
    };
  }, 7518: (t2, e2, i2) => {
    var n = i2(8470);
    t2.exports = function(t3) {
      return n(this.__data__, t3) > -1;
    };
  }, 4705: (t2, e2, i2) => {
    var n = i2(8470);
    t2.exports = function(t3, e3) {
      var i3 = this.__data__, r = n(i3, t3);
      return r < 0 ? (++this.size, i3.push([t3, e3])) : i3[r][1] = e3, this;
    };
  }, 4785: (t2, e2, i2) => {
    var n = i2(1989), r = i2(8407), a = i2(7071);
    t2.exports = function() {
      this.size = 0, this.__data__ = { hash: new n(), map: new (a || r)(), string: new n() };
    };
  }, 1285: (t2, e2, i2) => {
    var n = i2(5050);
    t2.exports = function(t3) {
      var e3 = n(this, t3)["delete"](t3);
      return this.size -= e3 ? 1 : 0, e3;
    };
  }, 6e3: (t2, e2, i2) => {
    var n = i2(5050);
    t2.exports = function(t3) {
      return n(this, t3).get(t3);
    };
  }, 9916: (t2, e2, i2) => {
    var n = i2(5050);
    t2.exports = function(t3) {
      return n(this, t3).has(t3);
    };
  }, 5265: (t2, e2, i2) => {
    var n = i2(5050);
    t2.exports = function(t3, e3) {
      var i3 = n(this, t3), r = i3.size;
      return i3.set(t3, e3), this.size += i3.size == r ? 0 : 1, this;
    };
  }, 4523: (t2, e2, i2) => {
    var n = i2(8306);
    t2.exports = function(t3) {
      var e3 = n(t3, function(t4) {
        return 500 === i3.size && i3.clear(), t4;
      }), i3 = e3.cache;
      return e3;
    };
  }, 4536: (t2, e2, i2) => {
    var n = i2(852)(Object, "create");
    t2.exports = n;
  }, 3498: (t2) => {
    t2.exports = function(t3) {
      var e2 = [];
      if (null != t3)
        for (var i2 in Object(t3))
          e2.push(i2);
      return e2;
    };
  }, 1167: (t2, e2, i2) => {
    t2 = i2.nmd(t2);
    var n = i2(1957), r = e2 && !e2.nodeType && e2, a = r && t2 && !t2.nodeType && t2, o = a && a.exports === r && n.process, s = function() {
      try {
        var t3 = a && a.require && a.require("util").types;
        return t3 || o && o.binding && o.binding("util");
      } catch (e3) {
      }
    }();
    t2.exports = s;
  }, 2333: (t2) => {
    var e2 = Object.prototype.toString;
    t2.exports = function(t3) {
      return e2.call(t3);
    };
  }, 5569: (t2) => {
    t2.exports = function(t3, e2) {
      return function(i2) {
        return t3(e2(i2));
      };
    };
  }, 5357: (t2, e2, i2) => {
    var n = i2(6874), r = Math.max;
    t2.exports = function(t3, e3, i3) {
      return e3 = r(e3 === void 0 ? t3.length - 1 : e3, 0), function() {
        for (var a = arguments, o = -1, s = r(a.length - e3, 0), l = Array(s); ++o < s; )
          l[o] = a[e3 + o];
        o = -1;
        for (var h = Array(e3 + 1); ++o < e3; )
          h[o] = a[o];
        return h[e3] = i3(l), n(t3, this, h);
      };
    };
  }, 5639: (t2, e2, i2) => {
    var n = i2(1957), r = "object" == typeof self && self && self.Object === Object && self, a = n || r || Function("return this")();
    t2.exports = a;
  }, 6390: (t2) => {
    t2.exports = function(t3, e2) {
      if (("constructor" !== e2 || "function" != typeof t3[e2]) && "__proto__" != e2)
        return t3[e2];
    };
  }, 61: (t2, e2, i2) => {
    var n = i2(6560), r = i2(1275)(n);
    t2.exports = r;
  }, 1275: (t2) => {
    var e2 = Date.now;
    t2.exports = function(t3) {
      var i2 = 0, n = 0;
      return function() {
        var r = e2(), a = 16 - (r - n);
        if (n = r, a > 0) {
          if (++i2 >= 800)
            return arguments[0];
        } else
          i2 = 0;
        return t3.apply(void 0, arguments);
      };
    };
  }, 7465: (t2, e2, i2) => {
    var n = i2(8407);
    t2.exports = function() {
      this.__data__ = new n(), this.size = 0;
    };
  }, 3779: (t2) => {
    t2.exports = function(t3) {
      var e2 = this.__data__, i2 = e2["delete"](t3);
      return this.size = e2.size, i2;
    };
  }, 7599: (t2) => {
    t2.exports = function(t3) {
      return this.__data__.get(t3);
    };
  }, 4758: (t2) => {
    t2.exports = function(t3) {
      return this.__data__.has(t3);
    };
  }, 4309: (t2, e2, i2) => {
    var n = i2(8407), r = i2(7071), a = i2(3369);
    t2.exports = function(t3, e3) {
      var i3 = this.__data__;
      if (i3 instanceof n) {
        var o = i3.__data__;
        if (!r || o.length < 199)
          return o.push([t3, e3]), this.size = ++i3.size, this;
        i3 = this.__data__ = new a(o);
      }
      return i3.set(t3, e3), this.size = i3.size, this;
    };
  }, 5514: (t2, e2, i2) => {
    var n = i2(4523), r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, a = /\\(\\)?/g, o = n(function(t3) {
      var e3 = [];
      return 46 === t3.charCodeAt(0) && e3.push(""), t3.replace(r, function(t4, i3, n2, r2) {
        e3.push(n2 ? r2.replace(a, "$1") : i3 || t4);
      }), e3;
    });
    t2.exports = o;
  }, 327: (t2, e2, i2) => {
    var n = i2(3448);
    t2.exports = function(t3) {
      if ("string" == typeof t3 || n(t3))
        return t3;
      var e3 = t3 + "";
      return "0" == e3 && 1 / t3 == -Infinity ? "-0" : e3;
    };
  }, 346: (t2) => {
    var e2 = Function.prototype.toString;
    t2.exports = function(t3) {
      if (null != t3) {
        try {
          return e2.call(t3);
        } catch (i2) {
        }
        try {
          return t3 + "";
        } catch (i2) {
        }
      }
      return "";
    };
  }, 5703: (t2) => {
    t2.exports = function(t3) {
      return function() {
        return t3;
      };
    };
  }, 7813: (t2) => {
    t2.exports = function(t3, e2) {
      return t3 === e2 || t3 != t3 && e2 != e2;
    };
  }, 7361: (t2, e2, i2) => {
    var n = i2(7786);
    t2.exports = function(t3, e3, i3) {
      var r = null == t3 ? void 0 : n(t3, e3);
      return r === void 0 ? i3 : r;
    };
  }, 8721: (t2, e2, i2) => {
    var n = i2(8565), r = i2(222);
    t2.exports = function(t3, e3) {
      return null != t3 && r(t3, e3, n);
    };
  }, 6557: (t2) => {
    t2.exports = function(t3) {
      return t3;
    };
  }, 5694: (t2, e2, i2) => {
    var n = i2(9454), r = i2(7005), a = Object.prototype, o = a.hasOwnProperty, s = a.propertyIsEnumerable, l = n(function() {
      return arguments;
    }()) ? n : function(t3) {
      return r(t3) && o.call(t3, "callee") && !s.call(t3, "callee");
    };
    t2.exports = l;
  }, 1469: (t2) => {
    var e2 = Array.isArray;
    t2.exports = e2;
  }, 8612: (t2, e2, i2) => {
    var n = i2(3560), r = i2(1780);
    t2.exports = function(t3) {
      return null != t3 && r(t3.length) && !n(t3);
    };
  }, 9246: (t2, e2, i2) => {
    var n = i2(8612), r = i2(7005);
    t2.exports = function(t3) {
      return r(t3) && n(t3);
    };
  }, 4144: (t2, e2, i2) => {
    t2 = i2.nmd(t2);
    var n = i2(5639), r = i2(5062), a = e2 && !e2.nodeType && e2, o = a && t2 && !t2.nodeType && t2, s = o && o.exports === a ? n.Buffer : void 0, l = (s ? s.isBuffer : void 0) || r;
    t2.exports = l;
  }, 3560: (t2, e2, i2) => {
    var n = i2(4239), r = i2(3218);
    t2.exports = function(t3) {
      if (!r(t3))
        return false;
      var e3 = n(t3);
      return "[object Function]" == e3 || "[object GeneratorFunction]" == e3 || "[object AsyncFunction]" == e3 || "[object Proxy]" == e3;
    };
  }, 1780: (t2) => {
    t2.exports = function(t3) {
      return "number" == typeof t3 && t3 > -1 && t3 % 1 == 0 && t3 <= 9007199254740991;
    };
  }, 3218: (t2) => {
    t2.exports = function(t3) {
      var e2 = typeof t3;
      return null != t3 && ("object" == e2 || "function" == e2);
    };
  }, 7005: (t2) => {
    t2.exports = function(t3) {
      return null != t3 && "object" == typeof t3;
    };
  }, 8630: (t2, e2, i2) => {
    var n = i2(4239), r = i2(5924), a = i2(7005), o = Function.prototype, s = Object.prototype, l = o.toString, h = s.hasOwnProperty, u = l.call(Object);
    t2.exports = function(t3) {
      if (!a(t3) || "[object Object]" != n(t3))
        return false;
      var e3 = r(t3);
      if (null === e3)
        return true;
      var i3 = h.call(e3, "constructor") && e3.constructor;
      return "function" == typeof i3 && i3 instanceof i3 && l.call(i3) == u;
    };
  }, 3448: (t2, e2, i2) => {
    var n = i2(4239), r = i2(7005);
    t2.exports = function(t3) {
      return "symbol" == typeof t3 || r(t3) && "[object Symbol]" == n(t3);
    };
  }, 6719: (t2, e2, i2) => {
    var n = i2(8749), r = i2(1717), a = i2(1167), o = a && a.isTypedArray, s = o ? r(o) : n;
    t2.exports = s;
  }, 1704: (t2, e2, i2) => {
    var n = i2(4636), r = i2(313), a = i2(8612);
    t2.exports = function(t3) {
      return a(t3) ? n(t3, true) : r(t3);
    };
  }, 8306: (t2, e2, i2) => {
    var n = i2(3369);
    function r(t3, e3) {
      if ("function" != typeof t3 || null != e3 && "function" != typeof e3)
        throw new TypeError("Expected a function");
      var i3 = function() {
        var n2 = arguments, r2 = e3 ? e3.apply(this, n2) : n2[0], a = i3.cache;
        if (a.has(r2))
          return a.get(r2);
        var o = t3.apply(this, n2);
        return i3.cache = a.set(r2, o) || a, o;
      };
      return i3.cache = new (r.Cache || n)(), i3;
    }
    r.Cache = n, t2.exports = r;
  }, 2492: (t2, e2, i2) => {
    var n = i2(2980), r = i2(1463)(function(t3, e3, i3) {
      n(t3, e3, i3);
    });
    t2.exports = r;
  }, 5062: (t2) => {
    t2.exports = function() {
      return false;
    };
  }, 9881: (t2, e2, i2) => {
    var n = i2(8363), r = i2(1704);
    t2.exports = function(t3) {
      return n(t3, r(t3));
    };
  }, 9833: (t2, e2, i2) => {
    var n = i2(531);
    t2.exports = function(t3) {
      return null == t3 ? "" : n(t3);
    };
  }, 2676: function(t2) {
    t2.exports = function() {
      function t3(t4, e3) {
        if (!(t4 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function e2(t4, e3) {
        for (var i3 = 0; i3 < e3.length; i3++) {
          var n2 = e3[i3];
          n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t4, n2.key, n2);
        }
      }
      function i2(t4, i3, n2) {
        return i3 && e2(t4.prototype, i3), n2 && e2(t4, n2), t4;
      }
      var n = function() {
        function t4(t5, e3) {
          this.next = null, this.key = t5, this.data = e3, this.left = null, this.right = null;
        }
        return t4;
      }();
      function r(t4, e3) {
        return t4 > e3 ? 1 : t4 < e3 ? -1 : 0;
      }
      function a(t4, e3, i3) {
        for (var r2 = new n(null, null), a2 = r2, o2 = r2; ; ) {
          var s2 = i3(t4, e3.key);
          if (s2 < 0) {
            if (null === e3.left)
              break;
            if (i3(t4, e3.left.key) < 0) {
              var l2 = e3.left;
              if (e3.left = l2.right, l2.right = e3, null === (e3 = l2).left)
                break;
            }
            o2.left = e3, o2 = e3, e3 = e3.left;
          } else {
            if (!(s2 > 0))
              break;
            if (null === e3.right)
              break;
            if (i3(t4, e3.right.key) > 0 && (l2 = e3.right, e3.right = l2.left, l2.left = e3, null === (e3 = l2).right))
              break;
            a2.right = e3, a2 = e3, e3 = e3.right;
          }
        }
        return a2.right = e3.left, o2.left = e3.right, e3.left = r2.right, e3.right = r2.left, e3;
      }
      function o(t4, e3, i3, r2) {
        var o2 = new n(t4, e3);
        if (null === i3)
          return o2.left = o2.right = null, o2;
        var s2 = r2(t4, (i3 = a(t4, i3, r2)).key);
        return s2 < 0 ? (o2.left = i3.left, o2.right = i3, i3.left = null) : s2 >= 0 && (o2.right = i3.right, o2.left = i3, i3.right = null), o2;
      }
      function s(t4, e3, i3) {
        var n2 = null, r2 = null;
        if (e3) {
          var o2 = i3((e3 = a(t4, e3, i3)).key, t4);
          0 === o2 ? (n2 = e3.left, r2 = e3.right) : o2 < 0 ? (r2 = e3.right, e3.right = null, n2 = e3) : (n2 = e3.left, e3.left = null, r2 = e3);
        }
        return { left: n2, right: r2 };
      }
      function l(t4, e3, i3) {
        return null === e3 ? t4 : (null === t4 || ((e3 = a(t4.key, e3, i3)).left = t4), e3);
      }
      function h(t4, e3, i3, n2, r2) {
        if (t4) {
          n2(e3 + (i3 ? "\u2514\u2500\u2500 " : "\u251C\u2500\u2500 ") + r2(t4) + "\n");
          var a2 = e3 + (i3 ? "    " : "\u2502   ");
          t4.left && h(t4.left, a2, false, n2, r2), t4.right && h(t4.right, a2, true, n2, r2);
        }
      }
      var u = function() {
        function t4(t5) {
          void 0 === t5 && (t5 = r), this._root = null, this._size = 0, this._comparator = t5;
        }
        return t4.prototype.insert = function(t5, e3) {
          return this._size++, this._root = o(t5, e3, this._root, this._comparator);
        }, t4.prototype.add = function(t5, e3) {
          var i3 = new n(t5, e3);
          null === this._root && (i3.left = i3.right = null, this._size++, this._root = i3);
          var r2 = this._comparator, o2 = a(t5, this._root, r2), s2 = r2(t5, o2.key);
          return 0 === s2 ? this._root = o2 : (s2 < 0 ? (i3.left = o2.left, i3.right = o2, o2.left = null) : s2 > 0 && (i3.right = o2.right, i3.left = o2, o2.right = null), this._size++, this._root = i3), this._root;
        }, t4.prototype.remove = function(t5) {
          this._root = this._remove(t5, this._root, this._comparator);
        }, t4.prototype._remove = function(t5, e3, i3) {
          var n2;
          return null === e3 ? null : 0 === i3(t5, (e3 = a(t5, e3, i3)).key) ? (null === e3.left ? n2 = e3.right : (n2 = a(t5, e3.left, i3)).right = e3.right, this._size--, n2) : e3;
        }, t4.prototype.pop = function() {
          var t5 = this._root;
          if (t5) {
            for (; t5.left; )
              t5 = t5.left;
            return this._root = a(t5.key, this._root, this._comparator), this._root = this._remove(t5.key, this._root, this._comparator), { key: t5.key, data: t5.data };
          }
          return null;
        }, t4.prototype.findStatic = function(t5) {
          for (var e3 = this._root, i3 = this._comparator; e3; ) {
            var n2 = i3(t5, e3.key);
            if (0 === n2)
              return e3;
            e3 = n2 < 0 ? e3.left : e3.right;
          }
          return null;
        }, t4.prototype.find = function(t5) {
          return this._root && (this._root = a(t5, this._root, this._comparator), 0 !== this._comparator(t5, this._root.key)) ? null : this._root;
        }, t4.prototype.contains = function(t5) {
          for (var e3 = this._root, i3 = this._comparator; e3; ) {
            var n2 = i3(t5, e3.key);
            if (0 === n2)
              return true;
            e3 = n2 < 0 ? e3.left : e3.right;
          }
          return false;
        }, t4.prototype.forEach = function(t5, e3) {
          for (var i3 = this._root, n2 = [], r2 = false; !r2; )
            null !== i3 ? (n2.push(i3), i3 = i3.left) : 0 !== n2.length ? (i3 = n2.pop(), t5.call(e3, i3), i3 = i3.right) : r2 = true;
          return this;
        }, t4.prototype.range = function(t5, e3, i3, n2) {
          for (var r2 = [], a2 = this._comparator, o2 = this._root; 0 !== r2.length || o2; )
            if (o2)
              r2.push(o2), o2 = o2.left;
            else {
              if (a2((o2 = r2.pop()).key, e3) > 0)
                break;
              if (a2(o2.key, t5) >= 0 && i3.call(n2, o2))
                return this;
              o2 = o2.right;
            }
          return this;
        }, t4.prototype.keys = function() {
          var t5 = [];
          return this.forEach(function(e3) {
            var i3 = e3.key;
            return t5.push(i3);
          }), t5;
        }, t4.prototype.values = function() {
          var t5 = [];
          return this.forEach(function(e3) {
            var i3 = e3.data;
            return t5.push(i3);
          }), t5;
        }, t4.prototype.min = function() {
          return this._root ? this.minNode(this._root).key : null;
        }, t4.prototype.max = function() {
          return this._root ? this.maxNode(this._root).key : null;
        }, t4.prototype.minNode = function(t5) {
          if (void 0 === t5 && (t5 = this._root), t5)
            for (; t5.left; )
              t5 = t5.left;
          return t5;
        }, t4.prototype.maxNode = function(t5) {
          if (void 0 === t5 && (t5 = this._root), t5)
            for (; t5.right; )
              t5 = t5.right;
          return t5;
        }, t4.prototype.at = function(t5) {
          for (var e3 = this._root, i3 = false, n2 = 0, r2 = []; !i3; )
            if (e3)
              r2.push(e3), e3 = e3.left;
            else if (r2.length > 0) {
              if (e3 = r2.pop(), n2 === t5)
                return e3;
              n2++, e3 = e3.right;
            } else
              i3 = true;
          return null;
        }, t4.prototype.next = function(t5) {
          var e3 = this._root, i3 = null;
          if (t5.right) {
            for (i3 = t5.right; i3.left; )
              i3 = i3.left;
            return i3;
          }
          for (var n2 = this._comparator; e3; ) {
            var r2 = n2(t5.key, e3.key);
            if (0 === r2)
              break;
            r2 < 0 ? (i3 = e3, e3 = e3.left) : e3 = e3.right;
          }
          return i3;
        }, t4.prototype.prev = function(t5) {
          var e3 = this._root, i3 = null;
          if (null !== t5.left) {
            for (i3 = t5.left; i3.right; )
              i3 = i3.right;
            return i3;
          }
          for (var n2 = this._comparator; e3; ) {
            var r2 = n2(t5.key, e3.key);
            if (0 === r2)
              break;
            r2 < 0 ? e3 = e3.left : (i3 = e3, e3 = e3.right);
          }
          return i3;
        }, t4.prototype.clear = function() {
          return this._root = null, this._size = 0, this;
        }, t4.prototype.toList = function() {
          return d(this._root);
        }, t4.prototype.load = function(t5, e3, i3) {
          void 0 === e3 && (e3 = []), void 0 === i3 && (i3 = false);
          var n2 = t5.length, r2 = this._comparator;
          if (i3 && _(t5, e3, 0, n2 - 1, r2), null === this._root)
            this._root = c(t5, e3, 0, n2), this._size = n2;
          else {
            var a2 = g(this.toList(), p(t5, e3), r2);
            n2 = this._size + n2, this._root = f({ head: a2 }, 0, n2);
          }
          return this;
        }, t4.prototype.isEmpty = function() {
          return null === this._root;
        }, Object.defineProperty(t4.prototype, "size", { get: function() {
          return this._size;
        }, enumerable: true, configurable: true }), Object.defineProperty(t4.prototype, "root", { get: function() {
          return this._root;
        }, enumerable: true, configurable: true }), t4.prototype.toString = function(t5) {
          void 0 === t5 && (t5 = function(t6) {
            return String(t6.key);
          });
          var e3 = [];
          return h(this._root, "", true, function(t6) {
            return e3.push(t6);
          }, t5), e3.join("");
        }, t4.prototype.update = function(t5, e3, i3) {
          var n2 = this._comparator, r2 = s(t5, this._root, n2), a2 = r2.left, h2 = r2.right;
          n2(t5, e3) < 0 ? h2 = o(e3, i3, h2, n2) : a2 = o(e3, i3, a2, n2), this._root = l(a2, h2, n2);
        }, t4.prototype.split = function(t5) {
          return s(t5, this._root, this._comparator);
        }, t4;
      }();
      function c(t4, e3, i3, r2) {
        var a2 = r2 - i3;
        if (a2 > 0) {
          var o2 = i3 + Math.floor(a2 / 2), s2 = t4[o2], l2 = e3[o2], h2 = new n(s2, l2);
          return h2.left = c(t4, e3, i3, o2), h2.right = c(t4, e3, o2 + 1, r2), h2;
        }
        return null;
      }
      function p(t4, e3) {
        for (var i3 = new n(null, null), r2 = i3, a2 = 0; a2 < t4.length; a2++)
          r2 = r2.next = new n(t4[a2], e3[a2]);
        return r2.next = null, i3.next;
      }
      function d(t4) {
        for (var e3 = t4, i3 = [], r2 = false, a2 = new n(null, null), o2 = a2; !r2; )
          e3 ? (i3.push(e3), e3 = e3.left) : i3.length > 0 ? e3 = (e3 = o2 = o2.next = i3.pop()).right : r2 = true;
        return o2.next = null, a2.next;
      }
      function f(t4, e3, i3) {
        var n2 = i3 - e3;
        if (n2 > 0) {
          var r2 = e3 + Math.floor(n2 / 2), a2 = f(t4, e3, r2), o2 = t4.head;
          return o2.left = a2, t4.head = t4.head.next, o2.right = f(t4, r2 + 1, i3), o2;
        }
        return null;
      }
      function g(t4, e3, i3) {
        for (var r2 = new n(null, null), a2 = r2, o2 = t4, s2 = e3; null !== o2 && null !== s2; )
          i3(o2.key, s2.key) < 0 ? (a2.next = o2, o2 = o2.next) : (a2.next = s2, s2 = s2.next), a2 = a2.next;
        return null !== o2 ? a2.next = o2 : null !== s2 && (a2.next = s2), r2.next;
      }
      function _(t4, e3, i3, n2, r2) {
        if (!(i3 >= n2)) {
          for (var a2 = t4[i3 + n2 >> 1], o2 = i3 - 1, s2 = n2 + 1; ; ) {
            do {
              o2++;
            } while (r2(t4[o2], a2) < 0);
            do {
              s2--;
            } while (r2(t4[s2], a2) > 0);
            if (o2 >= s2)
              break;
            var l2 = t4[o2];
            t4[o2] = t4[s2], t4[s2] = l2, l2 = e3[o2], e3[o2] = e3[s2], e3[s2] = l2;
          }
          _(t4, e3, i3, s2, r2), _(t4, e3, s2 + 1, n2, r2);
        }
      }
      var m = function(t4, e3) {
        return t4.ll.x <= e3.x && e3.x <= t4.ur.x && t4.ll.y <= e3.y && e3.y <= t4.ur.y;
      }, y = function(t4, e3) {
        if (e3.ur.x < t4.ll.x || t4.ur.x < e3.ll.x || e3.ur.y < t4.ll.y || t4.ur.y < e3.ll.y)
          return null;
        var i3 = t4.ll.x < e3.ll.x ? e3.ll.x : t4.ll.x, n2 = t4.ur.x < e3.ur.x ? t4.ur.x : e3.ur.x;
        return { ll: { x: i3, y: t4.ll.y < e3.ll.y ? e3.ll.y : t4.ll.y }, ur: { x: n2, y: t4.ur.y < e3.ur.y ? t4.ur.y : e3.ur.y } };
      }, v = Number.EPSILON;
      v === void 0 && (v = Math.pow(2, -52));
      var L2 = v * v, b = function(t4, e3) {
        if (-v < t4 && t4 < v && -v < e3 && e3 < v)
          return 0;
        var i3 = t4 - e3;
        return i3 * i3 < L2 * t4 * e3 ? 0 : t4 < e3 ? -1 : 1;
      }, k = function() {
        function e3() {
          t3(this, e3), this.reset();
        }
        return i2(e3, [{ key: "reset", value: function() {
          this.xRounder = new M(), this.yRounder = new M();
        } }, { key: "round", value: function(t4, e4) {
          return { x: this.xRounder.round(t4), y: this.yRounder.round(e4) };
        } }]), e3;
      }(), M = function() {
        function e3() {
          t3(this, e3), this.tree = new u(), this.round(0);
        }
        return i2(e3, [{ key: "round", value: function(t4) {
          var e4 = this.tree.add(t4), i3 = this.tree.prev(e4);
          if (null !== i3 && 0 === b(e4.key, i3.key))
            return this.tree.remove(t4), i3.key;
          var n2 = this.tree.next(e4);
          return null !== n2 && 0 === b(e4.key, n2.key) ? (this.tree.remove(t4), n2.key) : t4;
        } }]), e3;
      }(), x = new k(), w = function(t4, e3) {
        return t4.x * e3.y - t4.y * e3.x;
      }, C = function(t4, e3) {
        return t4.x * e3.x + t4.y * e3.y;
      }, P = function(t4, e3, i3) {
        var n2 = { x: e3.x - t4.x, y: e3.y - t4.y }, r2 = { x: i3.x - t4.x, y: i3.y - t4.y }, a2 = w(n2, r2);
        return b(a2, 0);
      }, E = function(t4) {
        return Math.sqrt(C(t4, t4));
      }, S = function(t4, e3, i3) {
        var n2 = { x: e3.x - t4.x, y: e3.y - t4.y }, r2 = { x: i3.x - t4.x, y: i3.y - t4.y };
        return w(r2, n2) / E(r2) / E(n2);
      }, O = function(t4, e3, i3) {
        var n2 = { x: e3.x - t4.x, y: e3.y - t4.y }, r2 = { x: i3.x - t4.x, y: i3.y - t4.y };
        return C(r2, n2) / E(r2) / E(n2);
      }, D = function(t4, e3, i3) {
        return 0 === e3.y ? null : { x: t4.x + e3.x / e3.y * (i3 - t4.y), y: i3 };
      }, B = function(t4, e3, i3) {
        return 0 === e3.x ? null : { x: i3, y: t4.y + e3.y / e3.x * (i3 - t4.x) };
      }, R = function(t4, e3, i3, n2) {
        if (0 === e3.x)
          return B(i3, n2, t4.x);
        if (0 === n2.x)
          return B(t4, e3, i3.x);
        if (0 === e3.y)
          return D(i3, n2, t4.y);
        if (0 === n2.y)
          return D(t4, e3, i3.y);
        var r2 = w(e3, n2);
        if (0 == r2)
          return null;
        var a2 = { x: i3.x - t4.x, y: i3.y - t4.y }, o2 = w(a2, e3) / r2, s2 = w(a2, n2) / r2;
        return { x: (t4.x + s2 * e3.x + (i3.x + o2 * n2.x)) / 2, y: (t4.y + s2 * e3.y + (i3.y + o2 * n2.y)) / 2 };
      }, T = function() {
        function e3(i3, n2) {
          t3(this, e3), i3.events === void 0 ? i3.events = [this] : i3.events.push(this), this.point = i3, this.isLeft = n2;
        }
        return i2(e3, null, [{ key: "compare", value: function(t4, i3) {
          var n2 = e3.comparePoints(t4.point, i3.point);
          return 0 !== n2 ? n2 : (t4.point !== i3.point && t4.link(i3), t4.isLeft !== i3.isLeft ? t4.isLeft ? 1 : -1 : j.compare(t4.segment, i3.segment));
        } }, { key: "comparePoints", value: function(t4, e4) {
          return t4.x < e4.x ? -1 : t4.x > e4.x ? 1 : t4.y < e4.y ? -1 : t4.y > e4.y ? 1 : 0;
        } }]), i2(e3, [{ key: "link", value: function(t4) {
          if (t4.point === this.point)
            throw new Error("Tried to link already linked events");
          for (var e4 = t4.point.events, i3 = 0, n2 = e4.length; i3 < n2; i3++) {
            var r2 = e4[i3];
            this.point.events.push(r2), r2.point = this.point;
          }
          this.checkForConsuming();
        } }, { key: "checkForConsuming", value: function() {
          for (var t4 = this.point.events.length, e4 = 0; e4 < t4; e4++) {
            var i3 = this.point.events[e4];
            if (i3.segment.consumedBy === void 0)
              for (var n2 = e4 + 1; n2 < t4; n2++) {
                var r2 = this.point.events[n2];
                r2.consumedBy === void 0 && i3.otherSE.point.events === r2.otherSE.point.events && i3.segment.consume(r2.segment);
              }
          }
        } }, { key: "getAvailableLinkedEvents", value: function() {
          for (var t4 = [], e4 = 0, i3 = this.point.events.length; e4 < i3; e4++) {
            var n2 = this.point.events[e4];
            n2 !== this && !n2.segment.ringOut && n2.segment.isInResult() && t4.push(n2);
          }
          return t4;
        } }, { key: "getLeftmostComparator", value: function(t4) {
          var e4 = this, i3 = /* @__PURE__ */ new Map(), n2 = function(n3) {
            var r2 = n3.otherSE;
            i3.set(n3, { sine: S(e4.point, t4.point, r2.point), cosine: O(e4.point, t4.point, r2.point) });
          };
          return function(t5, e5) {
            i3.has(t5) || n2(t5), i3.has(e5) || n2(e5);
            var r2 = i3.get(t5), a2 = r2.sine, o2 = r2.cosine, s2 = i3.get(e5), l2 = s2.sine, h2 = s2.cosine;
            return a2 >= 0 && l2 >= 0 ? o2 < h2 ? 1 : o2 > h2 ? -1 : 0 : a2 < 0 && l2 < 0 ? o2 < h2 ? -1 : o2 > h2 ? 1 : 0 : l2 < a2 ? -1 : l2 > a2 ? 1 : 0;
          };
        } }]), e3;
      }(), I = 0, j = function() {
        function e3(i3, n2, r2, a2) {
          t3(this, e3), this.id = ++I, this.leftSE = i3, i3.segment = this, i3.otherSE = n2, this.rightSE = n2, n2.segment = this, n2.otherSE = i3, this.rings = r2, this.windings = a2;
        }
        return i2(e3, null, [{ key: "compare", value: function(t4, e4) {
          var i3 = t4.leftSE.point.x, n2 = e4.leftSE.point.x, r2 = t4.rightSE.point.x, a2 = e4.rightSE.point.x;
          if (a2 < i3)
            return 1;
          if (r2 < n2)
            return -1;
          var o2 = t4.leftSE.point.y, s2 = e4.leftSE.point.y, l2 = t4.rightSE.point.y, h2 = e4.rightSE.point.y;
          if (i3 < n2) {
            if (s2 < o2 && s2 < l2)
              return 1;
            if (s2 > o2 && s2 > l2)
              return -1;
            var u2 = t4.comparePoint(e4.leftSE.point);
            if (u2 < 0)
              return 1;
            if (u2 > 0)
              return -1;
            var c2 = e4.comparePoint(t4.rightSE.point);
            return 0 !== c2 ? c2 : -1;
          }
          if (i3 > n2) {
            if (o2 < s2 && o2 < h2)
              return -1;
            if (o2 > s2 && o2 > h2)
              return 1;
            var p2 = e4.comparePoint(t4.leftSE.point);
            if (0 !== p2)
              return p2;
            var d2 = t4.comparePoint(e4.rightSE.point);
            return d2 < 0 ? 1 : d2 > 0 ? -1 : 1;
          }
          if (o2 < s2)
            return -1;
          if (o2 > s2)
            return 1;
          if (r2 < a2) {
            var f2 = e4.comparePoint(t4.rightSE.point);
            if (0 !== f2)
              return f2;
          }
          if (r2 > a2) {
            var g2 = t4.comparePoint(e4.rightSE.point);
            if (g2 < 0)
              return 1;
            if (g2 > 0)
              return -1;
          }
          if (r2 !== a2) {
            var _2 = l2 - o2, m2 = r2 - i3, y2 = h2 - s2, v2 = a2 - n2;
            if (_2 > m2 && y2 < v2)
              return 1;
            if (_2 < m2 && y2 > v2)
              return -1;
          }
          return r2 > a2 ? 1 : r2 < a2 || l2 < h2 ? -1 : l2 > h2 ? 1 : t4.id < e4.id ? -1 : t4.id > e4.id ? 1 : 0;
        } }]), i2(e3, [{ key: "replaceRightSE", value: function(t4) {
          this.rightSE = t4, this.rightSE.segment = this, this.rightSE.otherSE = this.leftSE, this.leftSE.otherSE = this.rightSE;
        } }, { key: "bbox", value: function() {
          var t4 = this.leftSE.point.y, e4 = this.rightSE.point.y;
          return { ll: { x: this.leftSE.point.x, y: t4 < e4 ? t4 : e4 }, ur: { x: this.rightSE.point.x, y: t4 > e4 ? t4 : e4 } };
        } }, { key: "vector", value: function() {
          return { x: this.rightSE.point.x - this.leftSE.point.x, y: this.rightSE.point.y - this.leftSE.point.y };
        } }, { key: "isAnEndpoint", value: function(t4) {
          return t4.x === this.leftSE.point.x && t4.y === this.leftSE.point.y || t4.x === this.rightSE.point.x && t4.y === this.rightSE.point.y;
        } }, { key: "comparePoint", value: function(t4) {
          if (this.isAnEndpoint(t4))
            return 0;
          var e4 = this.leftSE.point, i3 = this.rightSE.point, n2 = this.vector();
          if (e4.x === i3.x)
            return t4.x === e4.x ? 0 : t4.x < e4.x ? 1 : -1;
          var r2 = (t4.y - e4.y) / n2.y, a2 = e4.x + r2 * n2.x;
          if (t4.x === a2)
            return 0;
          var o2 = (t4.x - e4.x) / n2.x, s2 = e4.y + o2 * n2.y;
          return t4.y === s2 ? 0 : t4.y < s2 ? -1 : 1;
        } }, { key: "getIntersection", value: function(t4) {
          var e4 = this.bbox(), i3 = t4.bbox(), n2 = y(e4, i3);
          if (null === n2)
            return null;
          var r2 = this.leftSE.point, a2 = this.rightSE.point, o2 = t4.leftSE.point, s2 = t4.rightSE.point, l2 = m(e4, o2) && 0 === this.comparePoint(o2), h2 = m(i3, r2) && 0 === t4.comparePoint(r2), u2 = m(e4, s2) && 0 === this.comparePoint(s2), c2 = m(i3, a2) && 0 === t4.comparePoint(a2);
          if (h2 && l2)
            return c2 && !u2 ? a2 : !c2 && u2 ? s2 : null;
          if (h2)
            return u2 && r2.x === s2.x && r2.y === s2.y ? null : r2;
          if (l2)
            return c2 && a2.x === o2.x && a2.y === o2.y ? null : o2;
          if (c2 && u2)
            return null;
          if (c2)
            return a2;
          if (u2)
            return s2;
          var p2 = R(r2, this.vector(), o2, t4.vector());
          return null === p2 ? null : m(n2, p2) ? x.round(p2.x, p2.y) : null;
        } }, { key: "split", value: function(t4) {
          var i3 = [], n2 = t4.events !== void 0, r2 = new T(t4, true), a2 = new T(t4, false), o2 = this.rightSE;
          this.replaceRightSE(a2), i3.push(a2), i3.push(r2);
          var s2 = new e3(r2, o2, this.rings.slice(), this.windings.slice());
          return T.comparePoints(s2.leftSE.point, s2.rightSE.point) > 0 && s2.swapEvents(), T.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), n2 && (r2.checkForConsuming(), a2.checkForConsuming()), i3;
        } }, { key: "swapEvents", value: function() {
          var t4 = this.rightSE;
          this.rightSE = this.leftSE, this.leftSE = t4, this.leftSE.isLeft = true, this.rightSE.isLeft = false;
          for (var e4 = 0, i3 = this.windings.length; e4 < i3; e4++)
            this.windings[e4] *= -1;
        } }, { key: "consume", value: function(t4) {
          for (var i3 = this, n2 = t4; i3.consumedBy; )
            i3 = i3.consumedBy;
          for (; n2.consumedBy; )
            n2 = n2.consumedBy;
          var r2 = e3.compare(i3, n2);
          if (0 !== r2) {
            if (r2 > 0) {
              var a2 = i3;
              i3 = n2, n2 = a2;
            }
            if (i3.prev === n2) {
              var o2 = i3;
              i3 = n2, n2 = o2;
            }
            for (var s2 = 0, l2 = n2.rings.length; s2 < l2; s2++) {
              var h2 = n2.rings[s2], u2 = n2.windings[s2], c2 = i3.rings.indexOf(h2);
              -1 === c2 ? (i3.rings.push(h2), i3.windings.push(u2)) : i3.windings[c2] += u2;
            }
            n2.rings = null, n2.windings = null, n2.consumedBy = i3, n2.leftSE.consumedBy = i3.leftSE, n2.rightSE.consumedBy = i3.rightSE;
          }
        } }, { key: "prevInResult", value: function() {
          return this._prevInResult !== void 0 || (this.prev ? this.prev.isInResult() ? this._prevInResult = this.prev : this._prevInResult = this.prev.prevInResult() : this._prevInResult = null), this._prevInResult;
        } }, { key: "beforeState", value: function() {
          if (this._beforeState !== void 0)
            return this._beforeState;
          if (this.prev) {
            var t4 = this.prev.consumedBy || this.prev;
            this._beforeState = t4.afterState();
          } else
            this._beforeState = { rings: [], windings: [], multiPolys: [] };
          return this._beforeState;
        } }, { key: "afterState", value: function() {
          if (this._afterState !== void 0)
            return this._afterState;
          var t4 = this.beforeState();
          this._afterState = { rings: t4.rings.slice(0), windings: t4.windings.slice(0), multiPolys: [] };
          for (var e4 = this._afterState.rings, i3 = this._afterState.windings, n2 = this._afterState.multiPolys, r2 = 0, a2 = this.rings.length; r2 < a2; r2++) {
            var o2 = this.rings[r2], s2 = this.windings[r2], l2 = e4.indexOf(o2);
            -1 === l2 ? (e4.push(o2), i3.push(s2)) : i3[l2] += s2;
          }
          for (var h2 = [], u2 = [], c2 = 0, p2 = e4.length; c2 < p2; c2++)
            if (0 !== i3[c2]) {
              var d2 = e4[c2], f2 = d2.poly;
              if (-1 === u2.indexOf(f2))
                if (d2.isExterior)
                  h2.push(f2);
                else {
                  -1 === u2.indexOf(f2) && u2.push(f2);
                  var g2 = h2.indexOf(d2.poly);
                  -1 !== g2 && h2.splice(g2, 1);
                }
            }
          for (var _2 = 0, m2 = h2.length; _2 < m2; _2++) {
            var y2 = h2[_2].multiPoly;
            -1 === n2.indexOf(y2) && n2.push(y2);
          }
          return this._afterState;
        } }, { key: "isInResult", value: function() {
          if (this.consumedBy)
            return false;
          if (this._isInResult !== void 0)
            return this._isInResult;
          var t4 = this.beforeState().multiPolys, e4 = this.afterState().multiPolys;
          switch (q.type) {
            case "union":
              var i3 = 0 === t4.length, n2 = 0 === e4.length;
              this._isInResult = i3 !== n2;
              break;
            case "intersection":
              var r2, a2;
              t4.length < e4.length ? (r2 = t4.length, a2 = e4.length) : (r2 = e4.length, a2 = t4.length), this._isInResult = a2 === q.numMultiPolys && r2 < a2;
              break;
            case "xor":
              var o2 = Math.abs(t4.length - e4.length);
              this._isInResult = o2 % 2 == 1;
              break;
            case "difference":
              var s2 = function(t5) {
                return 1 === t5.length && t5[0].isSubject;
              };
              this._isInResult = s2(t4) !== s2(e4);
              break;
            default:
              throw new Error("Unrecognized operation type found ".concat(q.type));
          }
          return this._isInResult;
        } }], [{ key: "fromRing", value: function(t4, i3, n2) {
          var r2, a2, o2, s2 = T.comparePoints(t4, i3);
          if (s2 < 0)
            r2 = t4, a2 = i3, o2 = 1;
          else {
            if (!(s2 > 0))
              throw new Error("Tried to create degenerate segment at [".concat(t4.x, ", ").concat(t4.y, "]"));
            r2 = i3, a2 = t4, o2 = -1;
          }
          return new e3(new T(r2, true), new T(a2, false), [n2], [o2]);
        } }]), e3;
      }(), A = function() {
        function e3(i3, n2, r2) {
          if (t3(this, e3), !Array.isArray(i3) || 0 === i3.length)
            throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
          if (this.poly = n2, this.isExterior = r2, this.segments = [], "number" != typeof i3[0][0] || "number" != typeof i3[0][1])
            throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
          var a2 = x.round(i3[0][0], i3[0][1]);
          this.bbox = { ll: { x: a2.x, y: a2.y }, ur: { x: a2.x, y: a2.y } };
          for (var o2 = a2, s2 = 1, l2 = i3.length; s2 < l2; s2++) {
            if ("number" != typeof i3[s2][0] || "number" != typeof i3[s2][1])
              throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
            var h2 = x.round(i3[s2][0], i3[s2][1]);
            h2.x === o2.x && h2.y === o2.y || (this.segments.push(j.fromRing(o2, h2, this)), h2.x < this.bbox.ll.x && (this.bbox.ll.x = h2.x), h2.y < this.bbox.ll.y && (this.bbox.ll.y = h2.y), h2.x > this.bbox.ur.x && (this.bbox.ur.x = h2.x), h2.y > this.bbox.ur.y && (this.bbox.ur.y = h2.y), o2 = h2);
          }
          a2.x === o2.x && a2.y === o2.y || this.segments.push(j.fromRing(o2, a2, this));
        }
        return i2(e3, [{ key: "getSweepEvents", value: function() {
          for (var t4 = [], e4 = 0, i3 = this.segments.length; e4 < i3; e4++) {
            var n2 = this.segments[e4];
            t4.push(n2.leftSE), t4.push(n2.rightSE);
          }
          return t4;
        } }]), e3;
      }(), G = function() {
        function e3(i3, n2) {
          if (t3(this, e3), !Array.isArray(i3))
            throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
          this.exteriorRing = new A(i3[0], this, true), this.bbox = { ll: { x: this.exteriorRing.bbox.ll.x, y: this.exteriorRing.bbox.ll.y }, ur: { x: this.exteriorRing.bbox.ur.x, y: this.exteriorRing.bbox.ur.y } }, this.interiorRings = [];
          for (var r2 = 1, a2 = i3.length; r2 < a2; r2++) {
            var o2 = new A(i3[r2], this, false);
            o2.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o2.bbox.ll.x), o2.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o2.bbox.ll.y), o2.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o2.bbox.ur.x), o2.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o2.bbox.ur.y), this.interiorRings.push(o2);
          }
          this.multiPoly = n2;
        }
        return i2(e3, [{ key: "getSweepEvents", value: function() {
          for (var t4 = this.exteriorRing.getSweepEvents(), e4 = 0, i3 = this.interiorRings.length; e4 < i3; e4++)
            for (var n2 = this.interiorRings[e4].getSweepEvents(), r2 = 0, a2 = n2.length; r2 < a2; r2++)
              t4.push(n2[r2]);
          return t4;
        } }]), e3;
      }(), N = function() {
        function e3(i3, n2) {
          if (t3(this, e3), !Array.isArray(i3))
            throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
          try {
            "number" == typeof i3[0][0][0] && (i3 = [i3]);
          } catch (s2) {
          }
          this.polys = [], this.bbox = { ll: { x: Number.POSITIVE_INFINITY, y: Number.POSITIVE_INFINITY }, ur: { x: Number.NEGATIVE_INFINITY, y: Number.NEGATIVE_INFINITY } };
          for (var r2 = 0, a2 = i3.length; r2 < a2; r2++) {
            var o2 = new G(i3[r2], this);
            o2.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o2.bbox.ll.x), o2.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o2.bbox.ll.y), o2.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o2.bbox.ur.x), o2.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o2.bbox.ur.y), this.polys.push(o2);
          }
          this.isSubject = n2;
        }
        return i2(e3, [{ key: "getSweepEvents", value: function() {
          for (var t4 = [], e4 = 0, i3 = this.polys.length; e4 < i3; e4++)
            for (var n2 = this.polys[e4].getSweepEvents(), r2 = 0, a2 = n2.length; r2 < a2; r2++)
              t4.push(n2[r2]);
          return t4;
        } }]), e3;
      }(), z = function() {
        function e3(i3) {
          t3(this, e3), this.events = i3;
          for (var n2 = 0, r2 = i3.length; n2 < r2; n2++)
            i3[n2].segment.ringOut = this;
          this.poly = null;
        }
        return i2(e3, null, [{ key: "factory", value: function(t4) {
          for (var i3 = [], n2 = 0, r2 = t4.length; n2 < r2; n2++) {
            var a2 = t4[n2];
            if (a2.isInResult() && !a2.ringOut) {
              for (var o2 = null, s2 = a2.leftSE, l2 = a2.rightSE, h2 = [s2], u2 = s2.point, c2 = []; o2 = s2, s2 = l2, h2.push(s2), s2.point !== u2; )
                for (; ; ) {
                  var p2 = s2.getAvailableLinkedEvents();
                  if (0 === p2.length) {
                    var d2 = h2[0].point, f2 = h2[h2.length - 1].point;
                    throw new Error("Unable to complete output ring starting at [".concat(d2.x, ",") + " ".concat(d2.y, "]. Last matching segment found ends at") + " [".concat(f2.x, ", ").concat(f2.y, "]."));
                  }
                  if (1 === p2.length) {
                    l2 = p2[0].otherSE;
                    break;
                  }
                  for (var g2 = null, _2 = 0, m2 = c2.length; _2 < m2; _2++)
                    if (c2[_2].point === s2.point) {
                      g2 = _2;
                      break;
                    }
                  if (null === g2) {
                    c2.push({ index: h2.length, point: s2.point });
                    var y2 = s2.getLeftmostComparator(o2);
                    l2 = p2.sort(y2)[0].otherSE;
                    break;
                  }
                  var v2 = c2.splice(g2)[0], L3 = h2.splice(v2.index);
                  L3.unshift(L3[0].otherSE), i3.push(new e3(L3.reverse()));
                }
              i3.push(new e3(h2));
            }
          }
          return i3;
        } }]), i2(e3, [{ key: "getGeom", value: function() {
          for (var t4 = this.events[0].point, e4 = [t4], i3 = 1, n2 = this.events.length - 1; i3 < n2; i3++) {
            var r2 = this.events[i3].point, a2 = this.events[i3 + 1].point;
            0 !== P(r2, t4, a2) && (e4.push(r2), t4 = r2);
          }
          if (1 === e4.length)
            return null;
          var o2 = e4[0], s2 = e4[1];
          0 === P(o2, t4, s2) && e4.shift(), e4.push(e4[0]);
          for (var l2 = this.isExteriorRing() ? 1 : -1, h2 = this.isExteriorRing() ? 0 : e4.length - 1, u2 = this.isExteriorRing() ? e4.length : -1, c2 = [], p2 = h2; p2 != u2; p2 += l2)
            c2.push([e4[p2].x, e4[p2].y]);
          return c2;
        } }, { key: "isExteriorRing", value: function() {
          if (this._isExteriorRing === void 0) {
            var t4 = this.enclosingRing();
            this._isExteriorRing = !t4 || !t4.isExteriorRing();
          }
          return this._isExteriorRing;
        } }, { key: "enclosingRing", value: function() {
          return this._enclosingRing === void 0 && (this._enclosingRing = this._calcEnclosingRing()), this._enclosingRing;
        } }, { key: "_calcEnclosingRing", value: function() {
          for (var t4 = this.events[0], e4 = 1, i3 = this.events.length; e4 < i3; e4++) {
            var n2 = this.events[e4];
            T.compare(t4, n2) > 0 && (t4 = n2);
          }
          for (var r2 = t4.segment.prevInResult(), a2 = r2 ? r2.prevInResult() : null; ; ) {
            if (!r2)
              return null;
            if (!a2)
              return r2.ringOut;
            if (a2.ringOut !== r2.ringOut)
              return a2.ringOut.enclosingRing() !== r2.ringOut ? r2.ringOut : r2.ringOut.enclosingRing();
            r2 = a2.prevInResult(), a2 = r2 ? r2.prevInResult() : null;
          }
        } }]), e3;
      }(), F = function() {
        function e3(i3) {
          t3(this, e3), this.exteriorRing = i3, i3.poly = this, this.interiorRings = [];
        }
        return i2(e3, [{ key: "addInterior", value: function(t4) {
          this.interiorRings.push(t4), t4.poly = this;
        } }, { key: "getGeom", value: function() {
          var t4 = [this.exteriorRing.getGeom()];
          if (null === t4[0])
            return null;
          for (var e4 = 0, i3 = this.interiorRings.length; e4 < i3; e4++) {
            var n2 = this.interiorRings[e4].getGeom();
            null !== n2 && t4.push(n2);
          }
          return t4;
        } }]), e3;
      }(), U = function() {
        function e3(i3) {
          t3(this, e3), this.rings = i3, this.polys = this._composePolys(i3);
        }
        return i2(e3, [{ key: "getGeom", value: function() {
          for (var t4 = [], e4 = 0, i3 = this.polys.length; e4 < i3; e4++) {
            var n2 = this.polys[e4].getGeom();
            null !== n2 && t4.push(n2);
          }
          return t4;
        } }, { key: "_composePolys", value: function(t4) {
          for (var e4 = [], i3 = 0, n2 = t4.length; i3 < n2; i3++) {
            var r2 = t4[i3];
            if (!r2.poly)
              if (r2.isExteriorRing())
                e4.push(new F(r2));
              else {
                var a2 = r2.enclosingRing();
                a2.poly || e4.push(new F(a2)), a2.poly.addInterior(r2);
              }
          }
          return e4;
        } }]), e3;
      }(), V = function() {
        function e3(i3) {
          var n2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : j.compare;
          t3(this, e3), this.queue = i3, this.tree = new u(n2), this.segments = [];
        }
        return i2(e3, [{ key: "process", value: function(t4) {
          var e4 = t4.segment, i3 = [];
          if (t4.consumedBy)
            return t4.isLeft ? this.queue.remove(t4.otherSE) : this.tree.remove(e4), i3;
          var n2 = t4.isLeft ? this.tree.insert(e4) : this.tree.find(e4);
          if (!n2)
            throw new Error("Unable to find segment #".concat(e4.id, " ") + "[".concat(e4.leftSE.point.x, ", ").concat(e4.leftSE.point.y, "] -> ") + "[".concat(e4.rightSE.point.x, ", ").concat(e4.rightSE.point.y, "] ") + "in SweepLine tree. Please submit a bug report.");
          for (var r2 = n2, a2 = n2, o2 = void 0, s2 = void 0; o2 === void 0; )
            null === (r2 = this.tree.prev(r2)) ? o2 = null : r2.key.consumedBy === void 0 && (o2 = r2.key);
          for (; s2 === void 0; )
            null === (a2 = this.tree.next(a2)) ? s2 = null : a2.key.consumedBy === void 0 && (s2 = a2.key);
          if (t4.isLeft) {
            var l2 = null;
            if (o2) {
              var h2 = o2.getIntersection(e4);
              if (null !== h2 && (e4.isAnEndpoint(h2) || (l2 = h2), !o2.isAnEndpoint(h2)))
                for (var u2 = this._splitSafely(o2, h2), c2 = 0, p2 = u2.length; c2 < p2; c2++)
                  i3.push(u2[c2]);
            }
            var d2 = null;
            if (s2) {
              var f2 = s2.getIntersection(e4);
              if (null !== f2 && (e4.isAnEndpoint(f2) || (d2 = f2), !s2.isAnEndpoint(f2)))
                for (var g2 = this._splitSafely(s2, f2), _2 = 0, m2 = g2.length; _2 < m2; _2++)
                  i3.push(g2[_2]);
            }
            if (null !== l2 || null !== d2) {
              var y2 = null;
              y2 = null === l2 ? d2 : null === d2 || T.comparePoints(l2, d2) <= 0 ? l2 : d2, this.queue.remove(e4.rightSE), i3.push(e4.rightSE);
              for (var v2 = e4.split(y2), L3 = 0, b2 = v2.length; L3 < b2; L3++)
                i3.push(v2[L3]);
            }
            i3.length > 0 ? (this.tree.remove(e4), i3.push(t4)) : (this.segments.push(e4), e4.prev = o2);
          } else {
            if (o2 && s2) {
              var k2 = o2.getIntersection(s2);
              if (null !== k2) {
                if (!o2.isAnEndpoint(k2))
                  for (var M2 = this._splitSafely(o2, k2), x2 = 0, w2 = M2.length; x2 < w2; x2++)
                    i3.push(M2[x2]);
                if (!s2.isAnEndpoint(k2))
                  for (var C2 = this._splitSafely(s2, k2), P2 = 0, E2 = C2.length; P2 < E2; P2++)
                    i3.push(C2[P2]);
              }
            }
            this.tree.remove(e4);
          }
          return i3;
        } }, { key: "_splitSafely", value: function(t4, e4) {
          this.tree.remove(t4);
          var i3 = t4.rightSE;
          this.queue.remove(i3);
          var n2 = t4.split(e4);
          return n2.push(i3), t4.consumedBy === void 0 && this.tree.insert(t4), n2;
        } }]), e3;
      }(), K = "undefined" != typeof process && {}.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, H = "undefined" != typeof process && {}.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6, q = new (function() {
        function e3() {
          t3(this, e3);
        }
        return i2(e3, [{ key: "run", value: function(t4, e4, i3) {
          q.type = t4, x.reset();
          for (var n2 = [new N(e4, true)], r2 = 0, a2 = i3.length; r2 < a2; r2++)
            n2.push(new N(i3[r2], false));
          if (q.numMultiPolys = n2.length, "difference" === q.type)
            for (var o2 = n2[0], s2 = 1; s2 < n2.length; )
              null !== y(n2[s2].bbox, o2.bbox) ? s2++ : n2.splice(s2, 1);
          if ("intersection" === q.type) {
            for (var l2 = 0, h2 = n2.length; l2 < h2; l2++)
              for (var c2 = n2[l2], p2 = l2 + 1, d2 = n2.length; p2 < d2; p2++)
                if (null === y(c2.bbox, n2[p2].bbox))
                  return [];
          }
          for (var f2 = new u(T.compare), g2 = 0, _2 = n2.length; g2 < _2; g2++)
            for (var m2 = n2[g2].getSweepEvents(), v2 = 0, L3 = m2.length; v2 < L3; v2++)
              if (f2.insert(m2[v2]), f2.size > K)
                throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big). Please file a bug report.");
          for (var b2 = new V(f2), k2 = f2.size, M2 = f2.pop(); M2; ) {
            var w2 = M2.key;
            if (f2.size === k2) {
              var C2 = w2.segment;
              throw new Error("Unable to pop() ".concat(w2.isLeft ? "left" : "right", " SweepEvent ") + "[".concat(w2.point.x, ", ").concat(w2.point.y, "] from segment #").concat(C2.id, " ") + "[".concat(C2.leftSE.point.x, ", ").concat(C2.leftSE.point.y, "] -> ") + "[".concat(C2.rightSE.point.x, ", ").concat(C2.rightSE.point.y, "] from queue. ") + "Please file a bug report.");
            }
            if (f2.size > K)
              throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big). Please file a bug report.");
            if (b2.segments.length > H)
              throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments). Please file a bug report.");
            for (var P2 = b2.process(w2), E2 = 0, S2 = P2.length; E2 < S2; E2++) {
              var O2 = P2[E2];
              O2.consumedBy === void 0 && f2.insert(O2);
            }
            k2 = f2.size, M2 = f2.pop();
          }
          x.reset();
          var D2 = z.factory(b2.segments);
          return new U(D2).getGeom();
        } }]), e3;
      }())(), J = function(t4) {
        for (var e3 = arguments.length, i3 = new Array(e3 > 1 ? e3 - 1 : 0), n2 = 1; n2 < e3; n2++)
          i3[n2 - 1] = arguments[n2];
        return q.run("union", t4, i3);
      }, Y = function(t4) {
        for (var e3 = arguments.length, i3 = new Array(e3 > 1 ? e3 - 1 : 0), n2 = 1; n2 < e3; n2++)
          i3[n2 - 1] = arguments[n2];
        return q.run("intersection", t4, i3);
      }, X = function(t4) {
        for (var e3 = arguments.length, i3 = new Array(e3 > 1 ? e3 - 1 : 0), n2 = 1; n2 < e3; n2++)
          i3[n2 - 1] = arguments[n2];
        return q.run("xor", t4, i3);
      }, Z = function(t4) {
        for (var e3 = arguments.length, i3 = new Array(e3 > 1 ? e3 - 1 : 0), n2 = 1; n2 < e3; n2++)
          i3[n2 - 1] = arguments[n2];
        return q.run("difference", t4, i3);
      };
      return { union: J, intersection: Y, xor: X, difference: Z };
    }();
  }, 2582: function(t2) {
    t2.exports = function() {
      function t3(t4, n2, r2, a2, o2) {
        !function s2(t5, i3, n3, r3, a3) {
          for (; r3 > n3; ) {
            if (r3 - n3 > 600) {
              var o3 = r3 - n3 + 1, l2 = i3 - n3 + 1, h2 = Math.log(o3), u2 = 0.5 * Math.exp(2 * h2 / 3), c2 = 0.5 * Math.sqrt(h2 * u2 * (o3 - u2) / o3) * (l2 - o3 / 2 < 0 ? -1 : 1);
              s2(t5, i3, Math.max(n3, Math.floor(i3 - l2 * u2 / o3 + c2)), Math.min(r3, Math.floor(i3 + (o3 - l2) * u2 / o3 + c2)), a3);
            }
            var p2 = t5[i3], d2 = n3, f2 = r3;
            for (e2(t5, n3, i3), a3(t5[r3], p2) > 0 && e2(t5, n3, r3); d2 < f2; ) {
              for (e2(t5, d2, f2), d2++, f2--; a3(t5[d2], p2) < 0; )
                d2++;
              for (; a3(t5[f2], p2) > 0; )
                f2--;
            }
            0 === a3(t5[n3], p2) ? e2(t5, n3, f2) : e2(t5, ++f2, r3), f2 <= i3 && (n3 = f2 + 1), i3 <= f2 && (r3 = f2 - 1);
          }
        }(t4, n2, r2 || 0, a2 || t4.length - 1, o2 || i2);
      }
      function e2(t4, e3, i3) {
        var n2 = t4[e3];
        t4[e3] = t4[i3], t4[i3] = n2;
      }
      function i2(t4, e3) {
        return t4 < e3 ? -1 : t4 > e3 ? 1 : 0;
      }
      var n = function(t4) {
        void 0 === t4 && (t4 = 9), this._maxEntries = Math.max(4, t4), this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries)), this.clear();
      };
      function r(t4, e3, i3) {
        if (!i3)
          return e3.indexOf(t4);
        for (var n2 = 0; n2 < e3.length; n2++)
          if (i3(t4, e3[n2]))
            return n2;
        return -1;
      }
      function a(t4, e3) {
        o(t4, 0, t4.children.length, e3, t4);
      }
      function o(t4, e3, i3, n2, r2) {
        r2 || (r2 = f(null)), r2.minX = 1 / 0, r2.minY = 1 / 0, r2.maxX = -1 / 0, r2.maxY = -1 / 0;
        for (var a2 = e3; a2 < i3; a2++) {
          var o2 = t4.children[a2];
          s(r2, t4.leaf ? n2(o2) : o2);
        }
        return r2;
      }
      function s(t4, e3) {
        return t4.minX = Math.min(t4.minX, e3.minX), t4.minY = Math.min(t4.minY, e3.minY), t4.maxX = Math.max(t4.maxX, e3.maxX), t4.maxY = Math.max(t4.maxY, e3.maxY), t4;
      }
      function l(t4, e3) {
        return t4.minX - e3.minX;
      }
      function h(t4, e3) {
        return t4.minY - e3.minY;
      }
      function u(t4) {
        return (t4.maxX - t4.minX) * (t4.maxY - t4.minY);
      }
      function c(t4) {
        return t4.maxX - t4.minX + (t4.maxY - t4.minY);
      }
      function p(t4, e3) {
        return t4.minX <= e3.minX && t4.minY <= e3.minY && e3.maxX <= t4.maxX && e3.maxY <= t4.maxY;
      }
      function d(t4, e3) {
        return e3.minX <= t4.maxX && e3.minY <= t4.maxY && e3.maxX >= t4.minX && e3.maxY >= t4.minY;
      }
      function f(t4) {
        return { children: t4, height: 1, leaf: true, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 };
      }
      function g(e3, i3, n2, r2, a2) {
        for (var o2 = [i3, n2]; o2.length; )
          if (!((n2 = o2.pop()) - (i3 = o2.pop()) <= r2)) {
            var s2 = i3 + Math.ceil((n2 - i3) / r2 / 2) * r2;
            t3(e3, s2, i3, n2, a2), o2.push(i3, s2, s2, n2);
          }
      }
      return n.prototype.all = function() {
        return this._all(this.data, []);
      }, n.prototype.search = function(t4) {
        var e3 = this.data, i3 = [];
        if (!d(t4, e3))
          return i3;
        for (var n2 = this.toBBox, r2 = []; e3; ) {
          for (var a2 = 0; a2 < e3.children.length; a2++) {
            var o2 = e3.children[a2], s2 = e3.leaf ? n2(o2) : o2;
            d(t4, s2) && (e3.leaf ? i3.push(o2) : p(t4, s2) ? this._all(o2, i3) : r2.push(o2));
          }
          e3 = r2.pop();
        }
        return i3;
      }, n.prototype.collides = function(t4) {
        var e3 = this.data;
        if (!d(t4, e3))
          return false;
        for (var i3 = []; e3; ) {
          for (var n2 = 0; n2 < e3.children.length; n2++) {
            var r2 = e3.children[n2], a2 = e3.leaf ? this.toBBox(r2) : r2;
            if (d(t4, a2)) {
              if (e3.leaf || p(t4, a2))
                return true;
              i3.push(r2);
            }
          }
          e3 = i3.pop();
        }
        return false;
      }, n.prototype.load = function(t4) {
        if (!t4 || !t4.length)
          return this;
        if (t4.length < this._minEntries) {
          for (var e3 = 0; e3 < t4.length; e3++)
            this.insert(t4[e3]);
          return this;
        }
        var i3 = this._build(t4.slice(), 0, t4.length - 1, 0);
        if (this.data.children.length)
          if (this.data.height === i3.height)
            this._splitRoot(this.data, i3);
          else {
            if (this.data.height < i3.height) {
              var n2 = this.data;
              this.data = i3, i3 = n2;
            }
            this._insert(i3, this.data.height - i3.height - 1, true);
          }
        else
          this.data = i3;
        return this;
      }, n.prototype.insert = function(t4) {
        return t4 && this._insert(t4, this.data.height - 1), this;
      }, n.prototype.clear = function() {
        return this.data = f([]), this;
      }, n.prototype.remove = function(t4, e3) {
        if (!t4)
          return this;
        for (var i3, n2, a2, o2 = this.data, s2 = this.toBBox(t4), l2 = [], h2 = []; o2 || l2.length; ) {
          if (o2 || (o2 = l2.pop(), n2 = l2[l2.length - 1], i3 = h2.pop(), a2 = true), o2.leaf) {
            var u2 = r(t4, o2.children, e3);
            if (-1 !== u2)
              return o2.children.splice(u2, 1), l2.push(o2), this._condense(l2), this;
          }
          a2 || o2.leaf || !p(o2, s2) ? n2 ? (i3++, o2 = n2.children[i3], a2 = false) : o2 = null : (l2.push(o2), h2.push(i3), i3 = 0, n2 = o2, o2 = o2.children[0]);
        }
        return this;
      }, n.prototype.toBBox = function(t4) {
        return t4;
      }, n.prototype.compareMinX = function(t4, e3) {
        return t4.minX - e3.minX;
      }, n.prototype.compareMinY = function(t4, e3) {
        return t4.minY - e3.minY;
      }, n.prototype.toJSON = function() {
        return this.data;
      }, n.prototype.fromJSON = function(t4) {
        return this.data = t4, this;
      }, n.prototype._all = function(t4, e3) {
        for (var i3 = []; t4; )
          t4.leaf ? e3.push.apply(e3, t4.children) : i3.push.apply(i3, t4.children), t4 = i3.pop();
        return e3;
      }, n.prototype._build = function(t4, e3, i3, n2) {
        var r2, o2 = i3 - e3 + 1, s2 = this._maxEntries;
        if (o2 <= s2)
          return a(r2 = f(t4.slice(e3, i3 + 1)), this.toBBox), r2;
        n2 || (n2 = Math.ceil(Math.log(o2) / Math.log(s2)), s2 = Math.ceil(o2 / Math.pow(s2, n2 - 1))), (r2 = f([])).leaf = false, r2.height = n2;
        var l2 = Math.ceil(o2 / s2), h2 = l2 * Math.ceil(Math.sqrt(s2));
        g(t4, e3, i3, h2, this.compareMinX);
        for (var u2 = e3; u2 <= i3; u2 += h2) {
          var c2 = Math.min(u2 + h2 - 1, i3);
          g(t4, u2, c2, l2, this.compareMinY);
          for (var p2 = u2; p2 <= c2; p2 += l2) {
            var d2 = Math.min(p2 + l2 - 1, c2);
            r2.children.push(this._build(t4, p2, d2, n2 - 1));
          }
        }
        return a(r2, this.toBBox), r2;
      }, n.prototype._chooseSubtree = function(t4, e3, i3, n2) {
        for (; n2.push(e3), !e3.leaf && n2.length - 1 !== i3; ) {
          for (var r2 = 1 / 0, a2 = 1 / 0, o2 = void 0, s2 = 0; s2 < e3.children.length; s2++) {
            var l2 = e3.children[s2], h2 = u(l2), c2 = (p2 = t4, d2 = l2, (Math.max(d2.maxX, p2.maxX) - Math.min(d2.minX, p2.minX)) * (Math.max(d2.maxY, p2.maxY) - Math.min(d2.minY, p2.minY)) - h2);
            c2 < a2 ? (a2 = c2, r2 = h2 < r2 ? h2 : r2, o2 = l2) : c2 === a2 && h2 < r2 && (r2 = h2, o2 = l2);
          }
          e3 = o2 || e3.children[0];
        }
        var p2, d2;
        return e3;
      }, n.prototype._insert = function(t4, e3, i3) {
        var n2 = i3 ? t4 : this.toBBox(t4), r2 = [], a2 = this._chooseSubtree(n2, this.data, e3, r2);
        for (a2.children.push(t4), s(a2, n2); e3 >= 0 && r2[e3].children.length > this._maxEntries; )
          this._split(r2, e3), e3--;
        this._adjustParentBBoxes(n2, r2, e3);
      }, n.prototype._split = function(t4, e3) {
        var i3 = t4[e3], n2 = i3.children.length, r2 = this._minEntries;
        this._chooseSplitAxis(i3, r2, n2);
        var o2 = this._chooseSplitIndex(i3, r2, n2), s2 = f(i3.children.splice(o2, i3.children.length - o2));
        s2.height = i3.height, s2.leaf = i3.leaf, a(i3, this.toBBox), a(s2, this.toBBox), e3 ? t4[e3 - 1].children.push(s2) : this._splitRoot(i3, s2);
      }, n.prototype._splitRoot = function(t4, e3) {
        this.data = f([t4, e3]), this.data.height = t4.height + 1, this.data.leaf = false, a(this.data, this.toBBox);
      }, n.prototype._chooseSplitIndex = function(t4, e3, i3) {
        for (var n2, r2, a2, s2, l2, h2, c2, p2 = 1 / 0, d2 = 1 / 0, f2 = e3; f2 <= i3 - e3; f2++) {
          var g2 = o(t4, 0, f2, this.toBBox), _ = o(t4, f2, i3, this.toBBox), m = (r2 = g2, a2 = _, s2 = void 0, l2 = void 0, h2 = void 0, c2 = void 0, s2 = Math.max(r2.minX, a2.minX), l2 = Math.max(r2.minY, a2.minY), h2 = Math.min(r2.maxX, a2.maxX), c2 = Math.min(r2.maxY, a2.maxY), Math.max(0, h2 - s2) * Math.max(0, c2 - l2)), y = u(g2) + u(_);
          m < p2 ? (p2 = m, n2 = f2, d2 = y < d2 ? y : d2) : m === p2 && y < d2 && (d2 = y, n2 = f2);
        }
        return n2 || i3 - e3;
      }, n.prototype._chooseSplitAxis = function(t4, e3, i3) {
        var n2 = t4.leaf ? this.compareMinX : l, r2 = t4.leaf ? this.compareMinY : h;
        this._allDistMargin(t4, e3, i3, n2) < this._allDistMargin(t4, e3, i3, r2) && t4.children.sort(n2);
      }, n.prototype._allDistMargin = function(t4, e3, i3, n2) {
        t4.children.sort(n2);
        for (var r2 = this.toBBox, a2 = o(t4, 0, e3, r2), l2 = o(t4, i3 - e3, i3, r2), h2 = c(a2) + c(l2), u2 = e3; u2 < i3 - e3; u2++) {
          var p2 = t4.children[u2];
          s(a2, t4.leaf ? r2(p2) : p2), h2 += c(a2);
        }
        for (var d2 = i3 - e3 - 1; d2 >= e3; d2--) {
          var f2 = t4.children[d2];
          s(l2, t4.leaf ? r2(f2) : f2), h2 += c(l2);
        }
        return h2;
      }, n.prototype._adjustParentBBoxes = function(t4, e3, i3) {
        for (var n2 = i3; n2 >= 0; n2--)
          s(e3[n2], t4);
      }, n.prototype._condense = function(t4) {
        for (var e3 = t4.length - 1, i3 = void 0; e3 >= 0; e3--)
          0 === t4[e3].children.length ? e3 > 0 ? (i3 = t4[e3 - 1].children).splice(i3.indexOf(t4[e3]), 1) : this.clear() : a(t4[e3], this.toBBox);
      }, n;
    }();
  } }, e = {};
  function i(n) {
    var r = e[n];
    if (r !== void 0)
      return r.exports;
    var a = e[n] = { id: n, loaded: false, exports: {} };
    return t[n].call(a.exports, a, a.exports, i), a.loaded = true, a.exports;
  }
  i.n = (t2) => {
    var e2 = t2 && t2.__esModule ? () => t2["default"] : () => t2;
    return i.d(e2, { a: e2 }), e2;
  }, i.d = (t2, e2) => {
    for (var n in e2)
      i.o(e2, n) && !i.o(t2, n) && Object.defineProperty(t2, n, { enumerable: true, get: e2[n] });
  }, i.g = function() {
    if ("object" == typeof globalThis)
      return globalThis;
    try {
      return this || new Function("return this")();
    } catch (t2) {
      if ("object" == typeof window)
        return window;
    }
  }(), i.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), i.nmd = (t2) => (t2.paths = [], t2.children || (t2.children = []), t2);
  i(5975);
})();
var leafletGeoman = "";
!function() {
  L.Marker.Measurement = L[L.Layer ? "Layer" : "Class"].extend({
    options: {
      pane: "markerPane"
    },
    initialize: function(latlng, measurement, title, rotation, options) {
      L.setOptions(this, options);
      this._latlng = latlng;
      this._measurement = measurement;
      this._title = title;
      this._rotation = rotation;
    },
    addTo: function(map) {
      map.addLayer(this);
      return this;
    },
    onAdd: function(map) {
      this._map = map;
      var pane = this.getPane ? this.getPane() : map.getPanes().markerPane;
      var el = this._element = L.DomUtil.create("div", "leaflet-zoom-animated leaflet-measure-path-measurement", pane);
      var inner = L.DomUtil.create("div", "", el);
      inner.title = this._title;
      inner.innerHTML = this._measurement;
      map.on("zoomanim", this._animateZoom, this);
      this._setPosition();
    },
    onRemove: function(map) {
      map.off("zoomanim", this._animateZoom, this);
      var pane = this.getPane ? this.getPane() : map.getPanes().markerPane;
      pane.removeChild(this._element);
      this._map = null;
    },
    _setPosition: function() {
      L.DomUtil.setPosition(this._element, this._map.latLngToLayerPoint(this._latlng));
      this._element.style.transform += " rotate(" + this._rotation + "rad)";
    },
    _animateZoom: function(opt) {
      var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();
      L.DomUtil.setPosition(this._element, pos);
      this._element.style.transform += " rotate(" + this._rotation + "rad)";
    }
  });
  L.marker.measurement = function(latLng, measurement, title, rotation, options) {
    return new L.Marker.Measurement(latLng, measurement, title, rotation, options);
  };
  var formatDistance = function(d) {
    var unit, feet;
    if (this._measurementOptions.imperial) {
      feet = d / 0.3048;
      if (feet > 3e3) {
        d = d / 1609.344;
        unit = "mi";
      } else {
        d = feet;
        unit = "ft";
      }
    } else {
      if (d > 1e3) {
        d = d / 1e3;
        unit = "km";
      } else {
        unit = "m";
      }
    }
    if (d < 100) {
      return d.toFixed(1) + " " + unit;
    } else {
      return Math.round(d) + " " + unit;
    }
  };
  var formatArea = function(a) {
    var unit;
    if (this._measurementOptions.imperial) {
      if (a > 404.685642) {
        a = a / 4046.85642;
        unit = "ac";
      } else {
        a = a / 0.09290304;
        unit = "ft\xB2";
      }
    } else {
      if (a > 1e6) {
        a = a / 1e6;
        unit = "km\xB2";
      } else {
        unit = "m\xB2";
      }
    }
    if (a < 100) {
      return a.toFixed(1) + " " + unit;
    } else {
      return Math.round(a) + " " + unit;
    }
  };
  var RADIUS = 6378137;
  var ringArea = function ringArea2(coords) {
    var rad = function rad2(_) {
      return _ * Math.PI / 180;
    };
    var p1, p2, p3, lowerIndex, middleIndex, upperIndex, area = 0, coordsLength = coords.length;
    if (coordsLength > 2) {
      for (var i = 0; i < coordsLength; i++) {
        if (i === coordsLength - 2) {
          lowerIndex = coordsLength - 2;
          middleIndex = coordsLength - 1;
          upperIndex = 0;
        } else if (i === coordsLength - 1) {
          lowerIndex = coordsLength - 1;
          middleIndex = 0;
          upperIndex = 1;
        } else {
          lowerIndex = i;
          middleIndex = i + 1;
          upperIndex = i + 2;
        }
        p1 = coords[lowerIndex];
        p2 = coords[middleIndex];
        p3 = coords[upperIndex];
        area += (rad(p3.lng) - rad(p1.lng)) * Math.sin(rad(p2.lat));
      }
      area = area * RADIUS * RADIUS / 2;
    }
    return Math.abs(area);
  };
  var addInitHook = function() {
    var showOnHover = this.options.measurementOptions && this.options.measurementOptions.showOnHover;
    if (this.options.showMeasurements && !showOnHover) {
      this.showMeasurements();
    }
    if (this.options.showMeasurements && showOnHover) {
      this.on("mouseover", function() {
        this.showMeasurements();
      });
      this.on("mouseout", function() {
        this.hideMeasurements();
      });
    }
  };
  var circleArea = function circleArea2(d) {
    var rho = d / RADIUS;
    return 2 * Math.PI * RADIUS * RADIUS * (1 - Math.cos(rho));
  };
  var override = function(method, fn, hookAfter) {
    if (!hookAfter) {
      return function() {
        var originalReturnValue = method.apply(this, arguments);
        var args = Array.prototype.slice.call(arguments);
        args.push(originalReturnValue);
        return fn.apply(this, args);
      };
    } else {
      return function() {
        fn.apply(this, arguments);
        return method.apply(this, arguments);
      };
    }
  };
  L.Polyline.include({
    showMeasurements: function(options) {
      if (!this._map || this._measurementLayer)
        return this;
      this._measurementOptions = L.extend({
        showOnHover: options && options.showOnHover || false,
        minPixelDistance: 30,
        showDistances: true,
        showArea: true,
        showTotalDistance: true,
        lang: {
          totalLength: "Total length",
          totalArea: "Total area",
          segmentLength: "Segment length"
        }
      }, options || {});
      this._measurementLayer = L.layerGroup().addTo(this._map);
      this.updateMeasurements();
      this._map.on("zoomend", this.updateMeasurements, this);
      return this;
    },
    hideMeasurements: function() {
      if (!this._map)
        return this;
      this._map.off("zoomend", this.updateMeasurements, this);
      if (!this._measurementLayer)
        return this;
      this._map.removeLayer(this._measurementLayer);
      this._measurementLayer = null;
      return this;
    },
    onAdd: override(L.Polyline.prototype.onAdd, function(originalReturnValue) {
      var showOnHover = this.options.measurementOptions && this.options.measurementOptions.showOnHover;
      if (this.options.showMeasurements && !showOnHover) {
        this.showMeasurements(this.options.measurementOptions);
      }
      return originalReturnValue;
    }),
    onRemove: override(L.Polyline.prototype.onRemove, function(originalReturnValue) {
      this.hideMeasurements();
      return originalReturnValue;
    }, true),
    setLatLngs: override(L.Polyline.prototype.setLatLngs, function(originalReturnValue) {
      this.updateMeasurements();
      return originalReturnValue;
    }),
    spliceLatLngs: override(L.Polyline.prototype.spliceLatLngs, function(originalReturnValue) {
      this.updateMeasurements();
      return originalReturnValue;
    }),
    formatDistance,
    formatArea,
    updateMeasurements: function() {
      if (!this._measurementLayer)
        return this;
      var latLngs = this.getLatLngs(), isPolygon = this instanceof L.Polygon, options = this._measurementOptions, totalDist = 0, formatter, ll1, ll2, p1, p2, pixelDist, dist;
      if (latLngs && latLngs.length && L.Util.isArray(latLngs[0])) {
        latLngs = latLngs[0];
      }
      this._measurementLayer.clearLayers();
      if (this._measurementOptions.showDistances && latLngs.length > 1) {
        formatter = this._measurementOptions.formatDistance || L.bind(this.formatDistance, this);
        for (var i = 1, len = latLngs.length; isPolygon && i <= len || i < len; i++) {
          ll1 = latLngs[i - 1];
          ll2 = latLngs[i % len];
          dist = ll1.distanceTo(ll2);
          totalDist += dist;
          p1 = this._map.latLngToLayerPoint(ll1);
          p2 = this._map.latLngToLayerPoint(ll2);
          pixelDist = p1.distanceTo(p2);
          if (pixelDist >= options.minPixelDistance) {
            L.marker.measurement(
              this._map.layerPointToLatLng([(p1.x + p2.x) / 2, (p1.y + p2.y) / 2]),
              formatter(dist),
              options.lang.segmentLength,
              this._getRotation(ll1, ll2),
              options
            ).addTo(this._measurementLayer);
          }
        }
        if (!isPolygon && this._measurementOptions.showTotalDistance) {
          L.marker.measurement(ll2, formatter(totalDist), options.lang.totalLength, 0, options).addTo(this._measurementLayer);
        }
      }
      if (isPolygon && options.showArea && latLngs.length > 2) {
        formatter = options.formatArea || L.bind(this.formatArea, this);
        var area = ringArea(latLngs);
        L.marker.measurement(
          this.getBounds().getCenter(),
          formatter(area),
          options.lang.totalArea,
          0,
          options
        ).addTo(this._measurementLayer);
      }
      return this;
    },
    _getRotation: function(ll1, ll2) {
      var p1 = this._map.project(ll1), p2 = this._map.project(ll2);
      return Math.atan((p2.y - p1.y) / (p2.x - p1.x));
    }
  });
  L.Polyline.addInitHook(function() {
    addInitHook.call(this);
  });
  L.Circle.include({
    showMeasurements: function(options) {
      if (!this._map || this._measurementLayer)
        return this;
      this._measurementOptions = L.extend({
        showOnHover: false,
        showArea: true,
        lang: {
          totalArea: "Total area"
        }
      }, options || {});
      this._measurementLayer = L.layerGroup().addTo(this._map);
      this.updateMeasurements();
      this._map.on("zoomend", this.updateMeasurements, this);
      return this;
    },
    hideMeasurements: function() {
      if (!this._map)
        return this;
      this._map.on("zoomend", this.updateMeasurements, this);
      if (!this._measurementLayer)
        return this;
      this._map.removeLayer(this._measurementLayer);
      this._measurementLayer = null;
      return this;
    },
    onAdd: override(L.Circle.prototype.onAdd, function(originalReturnValue) {
      var showOnHover = this.options.measurementOptions && this.options.measurementOptions.showOnHover;
      if (this.options.showMeasurements && !showOnHover) {
        this.showMeasurements(this.options.measurementOptions);
      }
      return originalReturnValue;
    }),
    onRemove: override(L.Circle.prototype.onRemove, function(originalReturnValue) {
      this.hideMeasurements();
      return originalReturnValue;
    }, true),
    setLatLng: override(L.Circle.prototype.setLatLng, function(originalReturnValue) {
      this.updateMeasurements();
      return originalReturnValue;
    }),
    setRadius: override(L.Circle.prototype.setRadius, function(originalReturnValue) {
      this.updateMeasurements();
      return originalReturnValue;
    }),
    formatArea,
    updateMeasurements: function() {
      if (!this._measurementLayer)
        return;
      var latLng = this.getLatLng(), options = this._measurementOptions, formatter = options.formatArea || L.bind(this.formatArea, this);
      this._measurementLayer.clearLayers();
      if (options.showArea) {
        formatter = options.formatArea || L.bind(this.formatArea, this);
        var area = circleArea(this.getRadius());
        L.marker.measurement(
          latLng,
          formatter(area),
          options.lang.totalArea,
          0,
          options
        ).addTo(this._measurementLayer);
      }
    }
  });
  L.Circle.addInitHook(function() {
    addInitHook.call(this);
  });
}();
var leafletMeasurePath = "";
function createMap(elem, config = {}) {
  if (typeof elem === "string") {
    elem = document.querySelector(elem);
  }
  const center = { lat: 33.51361277047545, lng: 107.89657445624471 };
  return L.map(elem, {
    center,
    zoom: 7,
    zoomControl: false,
    minZoom: 3,
    maxZoom: 17,
    zoomOffset: 1,
    crs: L.CRS.EPSG4326,
    attributionControl: false,
    ...config
  });
}
const DRAW_TYPE = {
  Marker: "Marker",
  CircleMarker: "CircleMarker",
  Circle: "Circle",
  Line: "Line",
  Rectangle: "Rectangle",
  Polygon: "Polygon",
  Text: "Text"
};
class Draw {
  constructor(map) {
    this.map = map;
    this.map.pm.setLang("zh");
  }
  enableDraw(type, options = {}) {
    this.map.pm.enableDraw(type, {
      snappable: true,
      snapDistance: 20,
      ...options
    });
  }
  disableDraw() {
    this.map.pm.disableDraw();
  }
  clear() {
    const layerList = this.map.pm.getGeomanDrawLayers();
    layerList.map((layer) => layer.remove());
  }
}
class DrawMeasure {
  constructor(map) {
    this.map = map;
    this.layerGroup = L.layerGroup();
    this.layerGroup.addTo(this.map);
  }
  createCricle({ showMeasurements = true, onEnd }) {
    this.map.on("click", (e) => {
      this.map.doubleClickZoom.disable();
      const { latlng } = e;
      this.map.on("mousemove", (event) => {
        this._circleMousemove(event, latlng, showMeasurements, onEnd);
      });
    });
  }
  _circleMousemove(event, center, showMeasurements, onEnd) {
    if (this.circle)
      this.circle.remove();
    const { latlng } = event;
    const radius = center.distanceTo(latlng);
    this.circle = L.circle(center, {
      radius,
      showMeasurements
    });
    this.layerGroup.addLayer(this.circle);
    this._toolTip(latlng);
    this.current = this.circle;
    this.map.on("contextmenu", (e) => {
      if (e.type === "contextmenu") {
        onEnd && onEnd(this.circle);
      }
      this.contextmenu();
    });
  }
  contextmenu() {
    this.map.off("click mousemove contextmenu");
    if (this.markerTip) {
      this.markerTip.remove();
    }
    this.polyline = null;
    this.polygon = null;
    this.rectangle = null;
    this.circle = null;
  }
  _toolTip(latlng) {
    if (this.markerTip) {
      this.markerTip.remove();
    }
    if (latlng) {
      this.markerTip = L.marker(latlng, {
        opacity: 0
      }).addTo(this.layerGroup);
      this.markerTip.bindTooltip("\u53F3\u51FB\u7ED3\u675F", {
        className: "draw-leaflet-tip",
        offset: [0, 20]
      }).openTooltip();
    }
  }
  createLine({ showMeasurements = true, onEnd }) {
    this.contextmenu();
    const positionArr = [];
    this.map.on("click", (e) => {
      this.map.doubleClickZoom.disable();
      const { latlng } = e;
      const { lat, lng } = latlng;
      positionArr.push([lat, lng]);
      this.map.on("mousemove", (event) => {
        this._lineMousemove(event, positionArr, showMeasurements, onEnd);
      });
    });
  }
  _lineMousemove(event, positionArr, showMeasurements, onEnd) {
    const { latlng } = event;
    const length = positionArr.length;
    const { lat, lng } = latlng;
    if (length <= 1) {
      positionArr.push([lat, lng]);
    } else {
      positionArr[length - 1] = [lat, lng];
      this._toolTip(latlng);
      if (this.polyline) {
        this.polyline.setLatLngs(positionArr);
      } else {
        this.polyline = L.polyline(positionArr, {
          showMeasurements
        });
        this.layerGroup.addLayer(this.polyline);
      }
      this.current = this.polyline;
    }
    this.map.on("contextmenu", (e) => {
      if (e.type === "contextmenu") {
        onEnd && onEnd(this.polyline);
      }
      this.contextmenu();
    });
  }
  createRectangle({ showMeasurements = true, onEnd }) {
    this.contextmenu();
    const positionArr = [];
    this.map.on("click", (e) => {
      this.map.doubleClickZoom.disable();
      const { latlng } = e;
      const { lat, lng } = latlng;
      positionArr.push([lat, lng]);
      this.map.on("mousemove", (event) => {
        this._rectangleMousemove(event, positionArr, showMeasurements, onEnd);
      });
    });
  }
  _rectangleMousemove(event, positionArr, showMeasurements, onEnd) {
    const { latlng } = event;
    const length = positionArr.length;
    if (this.rectangle)
      this.rectangle.remove();
    const { lat, lng } = latlng;
    if (length <= 1) {
      positionArr.push([lat, lng]);
    } else {
      positionArr[length - 1] = [lat, lng];
      this._toolTip(latlng);
      this.rectangle = L.rectangle(positionArr, {
        showMeasurements
      });
      this.layerGroup.addLayer(this.rectangle);
      this.current = this.rectangle;
    }
    this.map.on("contextmenu", (e) => {
      if (e.type === "contextmenu") {
        onEnd && onEnd(this.rectangle);
      }
      this.contextmenu();
    });
  }
  createPolygon({ showMeasurements = true, onEnd }) {
    this.contextmenu();
    const positionArr = [];
    this.map.on("click", (e) => {
      this.map.doubleClickZoom.disable();
      const { latlng } = e;
      const { lat, lng } = latlng;
      positionArr.push([lat, lng]);
      this.map.on("mousemove", (event) => {
        this._polygonMousemove(event, positionArr, showMeasurements, onEnd);
      });
    });
  }
  _polygonMousemove(event, positionArr, showMeasurements, onEnd) {
    const { latlng } = event;
    const length = positionArr.length;
    const { lat, lng } = latlng;
    if (length <= 1) {
      positionArr.push([lat, lng]);
    } else {
      positionArr[length - 1] = [lat, lng];
      this._toolTip(latlng);
      if (this.polygon) {
        this.polygon.setLatLngs(positionArr);
      } else {
        this.polygon = L.polygon(positionArr, {
          showMeasurements
        });
        this.layerGroup.addLayer(this.polygon);
      }
      this.current = this.polygon;
    }
    this.map.on("contextmenu", (e) => {
      if (e.type === "contextmenu") {
        onEnd && onEnd(this.polygon);
      }
      this.contextmenu();
    });
  }
  disable() {
    if (this.current) {
      this.current.remove();
    }
    this.contextmenu();
  }
  clear() {
    this.layerGroup.clearLayers();
    if (this.markerTip) {
      this.markerTip.remove();
    }
    this.contextmenu();
  }
}
var tbMapUtils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createMap,
  DRAW_TYPE,
  Draw,
  DrawMeasure
}, Symbol.toStringTag, { value: "Module" }));
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { ref: "mapElem", staticClass: "mapWrapper" });
};
var staticRenderFns = [];
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render2) {
    options.render = render2;
    options.staticRenderFns = staticRenderFns2;
    options._compiled = true;
  }
  if (functionalTemplate) {
    options.functional = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(
        this,
        (options.functional ? this.parent : this).$root.$options.shadowRoot
      );
    } : injectStyles;
  }
  if (hook) {
    if (options.functional) {
      options._injectStyles = hook;
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options
  };
}
const __vue2_script = {
  name: "tb-leaflet",
  props: {
    showBaseLayer: {
      type: Boolean,
      default: true
    },
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {};
  },
  components: {},
  mounted() {
    const { showBaseLayer, config } = this;
    const layer = L.tileLayer(
      "http://t2.tianditu.gov.cn/img_c/wmts?layer=img&style=default&tilematrixset=c&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=64a7440068a2bbc276c11927b54458f4",
      {
        zoomOffset: 1
      }
    ).setZIndex(0);
    const map = createMap(this.$refs.mapElem, {
      layers: showBaseLayer ? [layer] : [],
      ...config
    });
    this.$emit("onReady", map);
  },
  methods: {}
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  __vue2_script,
  render,
  staticRenderFns,
  false,
  __vue2_injectStyles,
  "c593c0d0",
  null,
  null
);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
var TbLeaflet = /* @__PURE__ */ function() {
  return __component__.exports;
}();
TbLeaflet.install = (Vue) => Vue.component("tb-leaflet", TbLeaflet);
const getDefaultPagination = (pageSize = 10, config = {}) => ({
  total: 0,
  current: 1,
  pageSize,
  hideOnSinglePage: true,
  showTotal: (total, range) => {
    return range[0] + "-" + range[1] + " \u5171" + total + "\u6761";
  },
  ...config
});
function getTableScrollHeight({ extraHeight, id }) {
  if (typeof extraHeight === "undefined") {
    extraHeight = 88;
  }
  let tHeader = null;
  if (id) {
    tHeader = document.getElementById(id) ? document.getElementById(id).getElementsByClassName("ant-table-thead")[0] : null;
  } else {
    tHeader = document.getElementsByClassName("ant-table-thead")[0];
  }
  let tHeaderBottom = 0;
  if (tHeader) {
    tHeaderBottom = tHeader.getBoundingClientRect().bottom;
  }
  const height = `calc(100vh - ${tHeaderBottom + extraHeight}px)`;
  return height;
}
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
function getFileName(url) {
  const index = url.lastIndexOf("/");
  return url.substring(index + 1);
}
function downloadFile(url) {
  const a = document.createElement("a");
  a.href = url;
  a.download = url;
  a.click();
}
var utils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getDefaultPagination,
  getTableScrollHeight,
  getBase64,
  getFileName,
  downloadFile
}, Symbol.toStringTag, { value: "Module" }));
const components = [TbLeaflet];
const TbComp = {
  install(Vue) {
    components.map((item) => {
      Vue.component(item.name, item);
    });
    Vue.prototype.$tu = utils;
    Vue.prototype.$tmu = tbMapUtils;
  }
};
export { TbLeaflet, TbComp as default, tbMapUtils, utils };
