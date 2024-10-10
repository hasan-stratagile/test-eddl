(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        "use strict";

        function _typeof(obj) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = void 0;
        require("./common-event-listener");
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(
              target,
              _toPropertyKey(descriptor.key),
              descriptor
            );
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        /**
         * Main Entry for Abstract data layer
         */
        var AbstractDataLayer = /*#__PURE__*/ _createClass(
          function AbstractDataLayer() {
            _classCallCheck(this, AbstractDataLayer);
          }
        );
        var instance = new AbstractDataLayer();
        var _default = instance;
        exports.default = _default;
      },
      { "./common-event-listener": 4 },
    ],
    2: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = void 0;
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(
              target,
              _toPropertyKey(descriptor.key),
              descriptor
            );
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }
        /**
         * Implement tracking using Adobe Analytics.
         */
        var AdobeMain = /*#__PURE__*/ (function () {
          function AdobeMain() {
            _classCallCheck(this, AdobeMain);
          }
          _createClass(AdobeMain, [
            {
              key: "handleDigitalDataPush",
              value:
                /**
                 * collect object from queue and push it in digitalData for Adobe Analytics
                 * @param {Object} dataObj - collections of events objects
                 * @example
                 * handleDigitalDataPush({event: 'ctaClick', title: document.title}, callback)
                 */
                function handleDigitalDataPush() {
                  var dataObj =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : null;
                  if (dataObj && window.digitalData) {
                    window.adobeDataLayer.push(dataObj);
                  }
                },
            },
          ]);
          return AdobeMain;
        })();
        var instance = new AdobeMain();
        var _default = instance;
        exports.default = _default;
      },
      {},
    ],
    3: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = void 0;
        var _adobeMain = _interopRequireDefault(require("./adobe-main"));
        var _googleMain = _interopRequireDefault(require("./google-main"));
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(
              target,
              _toPropertyKey(descriptor.key),
              descriptor
            );
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }
        /**
         * Event-Listener for Global Array scAnalyticsDataArray
         * Each events passed objects in AnalyticsEventHandler and call correspondent analytics
         */
        var AnalyticsEventHandler = /*#__PURE__*/ (function () {
          function AnalyticsEventHandler() {
            _classCallCheck(this, AnalyticsEventHandler);
          }
          _createClass(AnalyticsEventHandler, [
            {
              key: "init",
              value: function init() {
                if (typeof scAnalyticsDataArray !== "undefined") {
                  var pushEvents = function pushEvents(arr, callback) {
                    arr.push = function (e) {
                      Array.prototype.push.call(arr, e);
                      callback(arr);
                    };
                  };

                  /**
                   * queue of objects and pass it correspondent analytics
                   * @param {Object} scAnalyticsDataArray - collections of events objects
                   * @example
                   * pushEvents({event: 'ctaClick', title: document.title}, callback)
                   */

                  /* eslint-disable no-undef*/
                  //Disabled since scAnalyticsDataArray is Global Variable
                  pushEvents(
                    scAnalyticsDataArray,
                    function (newScAnalyticsDataArray) {
                      var cnt = document.querySelector(
                        'meta[name="sc:country"]'
                      )
                        ? document
                            .querySelector('meta[name="sc:country"]')
                            .getAttribute("content")
                        : null;
                      newScAnalyticsDataArray.filter(function (obj) {
                        if (window.adobeDataLayer) {
                          //ignore if digitalData is not present.
                          _adobeMain.default.handleDigitalDataPush(obj);
                        }
                        if (
                          window.dataLayer &&
                          (cnt == "tw" || cnt == "pk" || cnt == "pk-u")
                        ) {
                          //ignore if dataLayer is not present.
                          _googleMain.default.handleDataLayerPush("", obj);
                        }
                        newScAnalyticsDataArray.shift();
                      });
                    }
                  );
                  /* eslint-enable no-undef*/
                }
              },
            },
          ]);
          return AnalyticsEventHandler;
        })();
        var instance = new AnalyticsEventHandler();
        instance.init();
        var _default = instance;
        exports.default = _default;
      },
      { "./adobe-main": 2, "./google-main": 6 },
    ],
    4: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = void 0;
        require("./analytics-event-handler");
        var _commonFunctions = _interopRequireDefault(
          require("./common-functions")
        );
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly &&
              (symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              })),
              keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2
              ? ownKeys(Object(source), !0).forEach(function (key) {
                  _defineProperty(target, key, source[key]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
                )
              : ownKeys(Object(source)).forEach(function (key) {
                  Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key)
                  );
                });
          }
          return target;
        }
        function _defineProperty(obj, key, value) {
          key = _toPropertyKey(key);
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(
              target,
              _toPropertyKey(descriptor.key),
              descriptor
            );
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        } /* global scAnalyticsDataArray, digitalData, Utils */ /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                      common event handlers for all markets
                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
        var searchEvent = true;
        var CommonEventListener = /*#__PURE__*/ (function () {
          function CommonEventListener() {
            _classCallCheck(this, CommonEventListener);
          }
          _createClass(CommonEventListener, [
            {
              key: "init",
              value: function init() {
                var that = this;
                var linkName = "";
                var pageSlug = document.querySelector(
                  'meta[name="sc:page-slug"]'
                )
                  ? document
                      .querySelector('meta[name="sc:page-slug"]')
                      .getAttribute("content")
                  : null;
                var mktCountryCode = Utils.getCurrentCountry();
                this.productId = "";
                this.pfmId = "na";
                that.getProductIdPfm();
                window.digitalData = window.digitalData || {};
                if (window.digitalData) {
                  window.digitalData.page = window.digitalData.page || {};
                  window.digitalData.page.attributes =
                    window.digitalData.page.attributes || {};
                  window.digitalData.page.attributes.platform =
                    mktCountryCode == "hk" ? "web" : "desktop website";
                  window.digitalData.page.attributes.pfm = this.pfmId;
                }

                //Push form name and page name in digitalData
                if (
                  window.digitalData.page.pageInfo &&
                  window.digitalData.page.pageInfo.pageName
                ) {
                  //Set na if pageName are empty
                  var _pageName = window.digitalData.page.pageInfo.pageName;
                  _pageName = _pageName.split(":");
                  var pageNameList = [];
                  if (mktCountryCode == "hk") {
                    if (_pageName.length > 1) {
                      for (var i = 0; i < _pageName.length; i++) {
                        if (i == 7) {
                          pageNameList.push("na");
                        } else {
                          pageNameList.push(_pageName[i] ? _pageName[i] : "");
                        }
                      }
                    }
                  }

                  if (mktCountryCode == "sg") {
                    if (_pageName.length > 1) {
                      for (var i = 0; i < _pageName.length; i++) {
                        if (i == 3) {
                          pageNameList.splice(2, 1);
                        } else {
                          pageNameList.push(_pageName[i] ? _pageName[i] : "na");
                        }
                      }
                    }
                  }

                  if (_pageName.length <= 8) {
                    linkName =
                      document.querySelector("title") &&
                      document.querySelector("title").innerText
                        ? document
                            .querySelector("title")
                            .innerText.toLowerCase()
                        : "na";
                    if (mktCountryCode == "hk") {
                      //Screen Name field in CMS is used if filled, in HK.
                      pageNameList.push(
                        _pageName[_pageName.length - 1]
                          ? _pageName[_pageName.length - 1]
                          : "na"
                      );
                    } else {
                      pageNameList.push(pageSlug);
                    }
                  }

                  //Set na if category objects are empty
                  if (window.digitalData.page.category) {
                    var catName = window.digitalData.page.category;
                    // eslint-disable-next-line no-unused-vars
                    for (var index in catName) {
                      window.digitalData.page.category[index] = catName[index]
                        ? catName[index]
                        : "na";
                    }
                  }
                  var environment = Utils.getCurrentEnvironment();
                  window.digitalData.page.pageInfo.pageName =
                    pageNameList.join(":");
                  window.digitalData.page.pageInfo.buildDetails = "web3.0";
                  window.digitalData.page.pageInfo.libDetails =
                    environment === "staging" ? "stage" : environment;
                }

                if (mktCountryCode == "hk") {
                  var pageName =
                    window.digitalData.page.pageInfo.pageName.split(":");
                  window.digitalData.user = window.digitalData.user || {};
                  window.digitalData.user.userInfo = {
                    userType: "ntb",
                    segment: "personal",
                    pagetype: "product",
                    userID: "na",
                    loginStatus: "guest",
                  };
                } else if (mktCountryCode == "sg") {
                  var pageName =
                    window.digitalData.page.pageInfo.pageName.split(":");
                  window.digitalData.user = window.digitalData.user || {};
                  window.digitalData.user.userInfo = {
                    segment: "personal",
                    userID: "na",
                    userStatus: "guest",
                    userType: "ntb",
                    pagetype: "product",
                  };
                }

                if (mktCountryCode == "hk") {
                  //For HK adobe data layer
                  //Update page name
                  var _pageName2 =
                    window.digitalData.page.pageInfo.pageName.split(":");
                  _pageName2[3] =
                    window.digitalData.user.userInfo.segment +
                    ":" +
                    window.digitalData.user.userInfo.pagetype;
                  _pageName2[2] = window.digitalData.page.attributes.platform;
                  _pageName2[5] = window.digitalData.page.category.subCategory1;
                  window.digitalData.page.pageInfo.pageName =
                    _pageName2.join(":");
                  window.digitalData.page.category.subCategory2 = "na"
                    ? ""
                    : window.digitalData.page.category.subCategory2;
                  //Add user info
                  window.digitalData.userInfo =
                    window.digitalData.userInfo || {};
                  window.digitalData.userInfo =
                    window.digitalData.user.userInfo;
                  window.digitalData.userInfo.loginStatus;
                  delete window.digitalData.user;
                  //Add product info
                  if (
                    _pageName2[4] != "na" ||
                    _pageName2[5] != "na" ||
                    _pageName2[6] != "na"
                  ) {
                    window.digitalData.products =
                      window.digitalData.products || [];
                    window.digitalData.products = [
                      {
                        productName: _pageName2[6],
                        subProduct1: _pageName2[5],
                        subProduct2: _pageName2[5] == "na" ? "" : _pageName5[5],
                      },
                    ];
                  }
                }

                if (mktCountryCode == "sg") {
                  //For SG adobe data layer
                  //Update page name
                  var _pageName2 =
                    window.digitalData.page.pageInfo.pageName.split(":");
                  _pageName2[2] =
                    window.digitalData.user.userInfo.segment +
                    ":" +
                    window.digitalData.user.userInfo.pagetype;
                  _pageName2[3] =
                    window.digitalData.page.category.primaryCategory +
                    ":" +
                    window.digitalData.page.category.subCategory1;
                  window.digitalData.page.pageInfo.pageName =
                    _pageName2.join(":");
                  window.digitalData.page.category.subCategory2 = "na"
                    ? ""
                    : window.digitalData.page.category.subCategory2;
                }

                // 404 - Page not Found
                var metaTitle = document.querySelector("meta[name='title']");
                if (
                  metaTitle &&
                  (metaTitle.getAttribute("content") == "404-error-page" ||
                    metaTitle.getAttribute("content") == "404 Error Page")
                ) {
                  var errorInfo = {
                    errorCode: "404",
                    errorDescription: "page not found",
                  };
                  errorInfo = mktCountryCode == "hk" ? [errorInfo] : errorInfo;
                  var dataObject = _objectSpread(
                    _objectSpread({}, digitalData),
                    {},
                    {
                      error: errorInfo,
                      event: "errorPage",
                      title: document.title,
                      href: window.location.href,
                      context: "page not found",
                    }
                  );
                  if (mktCountryCode !== "hk") {
                    var _pageName3 =
                      window.digitalData.page.pageInfo.pageName.split(":");
                    if (
                      _pageName3[4] != "na" ||
                      _pageName3[5] != "na" ||
                      _pageName3[6] != "na"
                    ) {
                      dataObject.product = dataObject.product || {};
                      dataObject.product = {
                        productInfo: {
                          productCategory: _pageName3[4],
                          productSubcategory: _pageName3[5],
                          productName: _pageName3[6],
                          productId: this.productId,
                        },
                      };
                    }
                  }

                  /* eslint-disable no-undef */
                  scAnalyticsDataArray.push(dataObject);
                  /* eslint-disable no-undef */
                } else {
                  //Capture campaign
                  var allowableQueryString =
                    Utils.constants.ALLOWABLE_QUERYSTRING.scb;
                  var _pageName4 =
                    window.digitalData.page.pageInfo.pageName.split(":");
                  if (
                    (_pageName4[0] == "pk" && _pageName4[3] == "udp-form") ||
                    _pageName4[0] == "in" ||
                    _pageName4[0] == "hk"
                  ) {
                    var campaignData = Utils.getIntExtCampaignInfo(
                      _pageName4[0]
                    );
                    window.digitalData.campaign = {
                      internal: {
                        campaignName: campaignData["intName"],
                        campaignValue: campaignData["intVal"],
                      },
                      external: {
                        campaignName: campaignData["extName"],
                        campaignValue: campaignData["extVal"],
                      },
                    };
                  } else {
                    var _campaignData =
                      that.getCampaignInfo(allowableQueryString);
                    window.digitalData.campaign =
                      window.digitalData.campaign || {};
                    window.digitalData.campaign = {
                      internal: {
                        campaignName: _campaignData[0],
                        campaignValue: _campaignData[1],
                      },
                    };
                  }
                  var eventName =
                    mktCountryCode == "hk" ? "page-view" : "pageView";
                  var _dataObject = _objectSpread(
                    _objectSpread({}, digitalData),
                    {},
                    {
                      event: eventName,
                      title: document.title,
                      href: window.location.href,
                      context: "page view",
                    }
                  );
                  if (mktCountryCode !== "hk") {
                    if (window.digitalData.page.pageInfo) {
                      var _pageName5 =
                        window.digitalData.page.pageInfo.pageName.split(":");
                      if (
                        _pageName5[4] != "na" ||
                        _pageName5[5] != "na" ||
                        _pageName5[6] != "na"
                      ) {
                        _dataObject.product = _dataObject.product || {};
                        _dataObject.product = {
                          productInfo: {
                            productCategory: _pageName5[4],
                            productSubcategory:
                              _pageName5[5] == "na" ? "" : _pageName5[5],
                            productName: _pageName5[6],
                            productId: this.productId,
                          },
                        };
                      }
                    }
                  }
                  scAnalyticsDataArray.push(_dataObject);
                }
                var ignorePixel = 10;
                var startX;
                var startY;
                var diffX;
                var diffY;
                document.body.addEventListener("mousedown", function (event) {
                  startX = event.pageX;
                  startY = event.pageY;
                });
                document.body.addEventListener("mouseup", function (event) {
                  diffX = Math.abs(event.pageX - startX);
                  diffY = Math.abs(event.pageY - startY);
                });
                document.body.addEventListener("click", function (event) {
                  //true if it's a drag event
                  if (
                    (diffX > ignorePixel || diffY > ignorePixel) &&
                    pageSlug !== "search"
                  )
                    return;
                  var origin =
                    window.location.protocol +
                    "//" +
                    window.location.hostname +
                    (window.location.port ? ":" + window.location.port : "");
                  var closestAnchor = event.target.closest("a");
                  var isCloseModalButton =
                    event.target["dataset"].send === "close-modal"
                      ? true
                      : false;
                  var tglClick = event.target.previousElementSibling;
                  var tglId = false;
                  if (
                    tglClick &&
                    typeof tglClick.className === "string" &&
                    typeof tglClick.className.includes !== "undefined" &&
                    tglClick.className.indexOf("tgl-mod-pin") !== -1
                  ) {
                    tglId = true;
                    closestAnchor = tglClick.querySelector("a.tgl-mod-popup");
                  }
                  if (
                    typeof event.target.className === "string" &&
                    typeof event.target.className.includes !== "undefined" &&
                    event.target.className.indexOf("c2c_text_content") !== -1 &&
                    !document.getElementsByClassName("sc-offers").length
                  ) {
                    //set adobe analytics for Chat
                    var ctaType = closestAnchor
                      ? that.getCtaType(closestAnchor.className, event.target)
                      : "link";
                    var customLinkText = event.target.innerText
                      ? event.target.innerText.trim().toLowerCase()
                      : event.target.textContent.trim().toLowerCase();
                    var ctaName = event.target.getAttribute("title");
                    var _dataObject2 = _objectSpread(
                      _objectSpread({}, digitalData),
                      {},
                      {
                        customLinkClick: {
                          customLinkText: customLinkText,
                          customLinkRegion:
                            _commonFunctions.default.getHorizontalPosition(
                              event.clientX
                            ) +
                            " " +
                            Utils.calcElementLocation(event.target),
                          customLinkType: ctaType,
                          customLinkName: linkName,
                        },
                        event: "ctaClick",
                        title: document.title,
                        href: window.location.href,
                        context: customLinkText,
                      }
                    );
                    _dataObject2.ctaName = ctaName || customLinkText;
                    _dataObject2.ctaPosition = Utils.calcElementLocation(
                      event.target
                    );
                    _dataObject2.ctaType = ctaType;
                    if (mktCountryCode == "hk") {
                      delete _dataObject2.customLinkClick;
                    }
                    scAnalyticsDataArray.push(_dataObject2);
                  } else if (closestAnchor) {
                    //set adobe analytics for CTA
                    var url = closestAnchor.getAttribute("href");
                    if (
                      !url ||
                      url.substring(0, 10).toLowerCase() !== "javascript"
                    ) {
                      event.preventDefault(); //if href does not call js function, stop default action
                    }

                    if (url == "javascript:void(0)" && !tglId) {
                      return;
                    } else if (url) {
                      url = url.trim();
                    }
                    var _ctaType = that.getCtaType(
                      closestAnchor.className,
                      event.target
                    );
                    var targetAttr =
                      typeof closestAnchor.getAttribute("target") ===
                        "undefined" ||
                      closestAnchor.getAttribute("target") === null
                        ? ""
                        : closestAnchor.getAttribute("target");
                    var urlBreak = _commonFunctions.default.urlBreakdown(url);
                    var fileDownloadNewTab = false;
                    if (urlBreak.extension == "pdf" && targetAttr == "_blank") {
                      fileDownloadNewTab = true; //event.isTrusted is false for file download click in same tab. Hence, will use this variable to track those as cta clicks in HK.
                    }

                    var closeModal =
                      typeof event.target.getAttribute("data-send") ===
                        "undefined" ||
                      event.target.getAttribute("data-send") === null
                        ? ""
                        : event.target.getAttribute("data-send").toLowerCase();
                    var modalContent = event.target.closest(
                      ".modal-content .m-text-content"
                    );
                    if (
                      event.target.closest(".m-search-result ul.list") &&
                      pageSlug == "search" &&
                      !document.getElementsByClassName("sc-offers").length
                    ) {
                      //true if clicked search results
                      var $keyword = document
                        .querySelector(
                          ".sc-searchpage__form-search input[name='global-search']"
                        )
                        .value.trim();
                      var $clickedTitle = closestAnchor
                        .getAttribute("title")
                        .trim();
                      var $searchRank = event.target
                        .closest(".result-item")
                        .getAttribute("id")
                        .trim();
                      $searchRank = $searchRank.substr(12);
                      var numOfResults = parseInt(
                        document.querySelector("li:first-child span.counter")
                          .innerText
                      );
                      var searchDataObject = _objectSpread({}, digitalData);
                      setTimeout(function () {
                        searchDataObject.page.search = {
                          keyword: $keyword,
                          clickedTitle: $clickedTitle,
                          numberOfResults: numOfResults,
                          searchRank: Number($searchRank) + 1,
                        };
                        var dataObject = _objectSpread(
                          _objectSpread({}, searchDataObject),
                          {},
                          {
                            event: "searchResultClickThrough",
                            title: document.title,
                            href: window.location.href,
                            context: $keyword,
                          }
                        );
                        scAnalyticsDataArray.push(dataObject);
                      }, 500);
                    } else if (
                      (event.isTrusted ||
                        (mktCountryCode == "hk" && !fileDownloadNewTab)) &&
                      ((!event.target.closest(".is-external-link-button") &&
                        closeModal != "close-modal" &&
                        !event.target.closest(".modal-content")) ||
                        event.target.closest(".sc-external-link-button") ||
                        event.target.closest(".is-external-link-button") ||
                        modalContent) &&
                      !document.getElementsByClassName("sc-offers").length
                    ) {
                      //if modal is already open, then don't trigger 'Analytics'
                      var tglSelector = closestAnchor.querySelector(
                        ".tgl-mod-pin-mer-name"
                      );
                      var linkTitle = closestAnchor.querySelector(".title");
                      var ctaTitle = closestAnchor.getAttribute("title")
                        ? closestAnchor.getAttribute("title")
                        : event.target.innerText ||
                          event.target.textContent ||
                          closestAnchor.getAttribute("data-context") ||
                          closestAnchor.getAttribute("aria-label") ||
                          (tglSelector
                            ? tglSelector.innerText || tglSelector.textContent
                            : "") ||
                          (linkTitle
                            ? linkTitle.innerText || linkTitle.textContent
                            : "") ||
                          closestAnchor.getAttribute("href") ||
                          "";
                      ctaTitle = ctaTitle
                        ? ctaTitle.toLowerCase().trim()
                        : ctaTitle;

                      //For PDF title
                      ctaTitle = that.extractDownloadTitle(
                        pageSlug,
                        event.target.closest(".sc-page-list__item"),
                        ctaTitle
                      );
                      var _eventName =
                        _commonFunctions.default.urlBreakdown(url).extension ==
                        "pdf"
                          ? "fileDownload"
                          : "ctaClick";
                      if (mktCountryCode == "hk") {
                        _eventName = "ctaClick"; //Track file download link clicks as CTA clicks, in HK
                      }

                      var _dataObject3 = _objectSpread(
                        _objectSpread({}, digitalData),
                        {},
                        {
                          customLinkClick: {
                            customLinkText: ctaTitle,
                            customLinkRegion:
                              _commonFunctions.default.getHorizontalPosition(
                                event.clientX
                              ) +
                              " " +
                              Utils.calcElementLocation(event.target),
                            customLinkType: _ctaType,
                            customLinkName: linkName,
                          },
                          event: _eventName,
                          title: document.title,
                          href: window.location.href,
                          context: ctaTitle,
                        }
                      );
                      _dataObject3.ctaName = ctaTitle;
                      _dataObject3.ctaPosition = Utils.calcElementLocation(
                        event.target
                      );
                      _dataObject3.ctaType = _ctaType;
                      if (event.target.closest(".sc-products-tile-modal")) {
                        _dataObject3.form = {
                          formName:
                            window.digitalData.products.productName || "",
                          formStepName: "",
                          formType:
                            window.digitalData.user.userInfo.pagetype || "",
                          formPlatform:
                            window.digitalData.page.attributes.platform || "",
                          popupName: closestAnchor
                            .getAttribute("title")
                            .split("-")[1],
                        };
                      }
                      if (_eventName == "fileDownload") {
                        var fileName = url.split("/");
                        fileName = fileName.slice(-1).pop();
                        _dataObject3.page.attributes.fileName = fileName;
                      }
                      if (mktCountryCode == "hk") {
                        delete _dataObject3.customLinkClick;
                        delete _dataObject3.form;
                      }
                      scAnalyticsDataArray.push(_dataObject3);
                    }
                    var modalAttr =
                      closestAnchor.getAttribute("data-modal-source");
                    if (!url) {
                      return;
                    } else if (modalAttr) {
                      //if 'data-modal-source' is present in clicked content then open modal and don't redirecting to a new page
                      return;
                    } else if (
                      !that.isInternalDomain(urlBreak.domain) &&
                      urlBreak.domain !== "" &&
                      urlBreak.domain !== document.location.hostname &&
                      closeModal != "close-modal" &&
                      url.charAt(0) !== "/"
                    ) {
                      /**
                       * 1. urlBreak don't contain internal domains
                       * 2. urlBreak is not empty
                       * 3. urlBreak is not equal to the web host
                       * 4. currentTarget(a tag) not contain an attributes named data-send='close-modal'
                       * if conditions are true, return (we don't need to change page or open new tab)
                       */
                      return;
                    } else if (
                      targetAttr &&
                      targetAttr.toLowerCase() === "_blank"
                    ) {
                      //true if currentTarget(a tag) contain an attributes named target='_blank' and then open new tab
                      var modalTarget = event.target.closest(".m-text-content");
                      if (
                        !that.isInternalDomain(urlBreak.domain) &&
                        modalTarget &&
                        modalTarget.getAttribute("data-modal-id") !==
                          undefined &&
                        modalTarget.getAttribute("data-modal-id") !=
                          "external-links-disclaimer"
                      ) {
                        return;
                      }
                      if (url.substring(0, 2) == "//") {
                        /* //www.sc.com/ke/current-accounts/hifadhi/' */
                        url = url.substr(2);
                        url = origin + "/" + url;
                      } else if (url.charAt(0) === "/") {
                        // remove 1st char to avoid later issues for URL construction
                        /* /ke/current-accounts/hifadhi/ */
                        url = url.substr(1);
                        url = origin + "/" + url;
                      }
                      window.open(url, "_blank");
                    } else if (url && url.charAt(0) == "#") {
                      //true if currentTarget(a tag) href attributes start with '#'
                      /* #null */
                      location.href = url;
                    } else if (
                      url &&
                      (url.substring(0, 3).toLowerCase() == "tel" ||
                        url.substring(0, 6).toLowerCase() == "mailto")
                    ) {
                      /* tel:(852)2886-8888 or mailto:email@example.com */
                      window.open(url, "_self");
                    } else if (
                      url &&
                      url.substring(0, 10).toLowerCase() == "javascript"
                    ) {
                      /* JavaScript:void(0) */
                      return;
                    } else if (
                      url &&
                      that.isValidURL(url) &&
                      url.charAt(0) !== "/"
                    ) {
                      //true if currentTarget(a tag) is a regular url
                      /* https://www.sc.com/ke/current-accounts/hifadhi/ */
                      setTimeout(function () {
                        location.href = that.getValidUrl(url);
                      }, 200);
                    } else {
                      // url = /some-url
                      if (url.substring(0, 2) == "//") {
                        /* //www.sc.com/ke/current-accounts/hifadhi/' */
                        url = url.substr(2);
                      } else if (url.charAt(0) === "/") {
                        // remove 1st char to avoid later issues for URL construction
                        /* /ke/current-accounts/hifadhi/ */
                        url = url.substr(1);
                      }
                      url = origin + "/" + url;
                      setTimeout(function () {
                        location.href = url;
                      }, 200);
                    }
                  } else if (
                    isCloseModalButton &&
                    event.isTrusted &&
                    !document.getElementsByClassName("sc-offers").length &&
                    mktCountryCode !== "hk"
                  ) {
                    var _ctaType2 = closestAnchor
                      ? that.getCtaType(closestAnchor.className, event.target)
                      : "link";
                    var _dataObject4 = _objectSpread(
                      _objectSpread({}, digitalData),
                      {},
                      {
                        user: {
                          userInfo: {
                            userStatus: "guest",
                            userType: "ntb",
                          },
                        },
                        customLinkClick: {
                          customLinkText: "close",
                          customLinkRegion:
                            _commonFunctions.default.getHorizontalPosition(
                              event.clientX
                            ) +
                            " " +
                            _commonFunctions.default.calcElementLocation(
                              event.target
                            ),
                          customLinkType: _ctaType2,
                          customLinkName: linkName,
                        },
                        event: "ctaClick",
                        title: document.title,
                        href: window.location.href,
                        context: "close",
                      }
                    );
                    _dataObject4.ctaName = "close";
                    _dataObject4.ctaPosition =
                      _commonFunctions.default.calcElementLocation(
                        event.target
                      );
                    _dataObject4.ctaType = _ctaType2;
                    scAnalyticsDataArray.push(_dataObject4);
                  }
                });
                var search = document.querySelector(
                  ".sc-searchpage__form-search input[name='global-search']"
                );
                if (search) {
                  search.addEventListener("focus", function () {
                    searchEvent = true;
                  });
                  search.addEventListener(
                    "keyup",
                    that.delayFiveSeconds(function () {
                      if (searchEvent) {
                        var keyword = document
                          .querySelector(
                            ".sc-searchpage__form-search input[name='global-search']"
                          )
                          .value.trim();
                        if (!keyword) {
                          searchEvent = false;
                          return;
                        }
                        var numOfResults = parseInt(
                          document.querySelector("li:first-child span.counter")
                            .innerText
                        );
                        var _dataObject5 = _objectSpread(
                          _objectSpread({}, digitalData),
                          {},
                          {
                            event: "siteSearch",
                            title: document.title,
                            href: window.location.href,
                            context: keyword,
                          }
                        );
                        _dataObject5.page.search = {
                          keyword: keyword,
                          numberOfResults: numOfResults,
                        };
                        scAnalyticsDataArray.push(_dataObject5);
                        searchEvent = false;
                      }
                    })
                  );
                  search.addEventListener("blur", function () {
                    if (searchEvent) {
                      //check is it delay or blur event trigger
                      window.setTimeout(function () {
                        var keyword = document
                          .querySelector(
                            ".sc-searchpage__form-search input[name='global-search']"
                          )
                          .value.trim();
                        if (!keyword) {
                          searchEvent = false;
                          return;
                        }
                        var numOfResults = parseInt(
                          document.querySelector("li:first-child span.counter")
                            .innerText
                        );
                        var dataObject = _objectSpread(
                          _objectSpread({}, digitalData),
                          {},
                          {
                            event: "siteSearch",
                            title: document.title,
                            href: window.location.href,
                            context: keyword,
                          }
                        );
                        dataObject.page.search = {
                          keyword: keyword,
                          numberOfResults: numOfResults,
                        };
                        scAnalyticsDataArray.push(dataObject);
                      }, 300);
                      //Adding .5S delay so that the defocus is always captured
                    }

                    searchEvent = false;
                  });
                }

                //Needs module
                var itemInnerList = document.querySelectorAll(".sc-tab__item");
                if (itemInnerList.length) {
                  itemInnerList.forEach(function (el) {
                    el.addEventListener("keyup", function (event) {
                      if (event.key == "Enter" || event.key == "Spacebar") {
                        that.needsModuleTracking(event);
                      }
                    });
                    el.addEventListener("click", function (event) {
                      that.needsModuleTracking(event);
                    });
                  });
                }

                //privileges module
                var labels = document.querySelectorAll(
                  ".sc-privileges__step-item"
                );
                if (labels.length) {
                  labels.forEach(function (elem) {
                    elem.addEventListener("click", function (e) {
                      that.privilegesModuleTracking(e);
                    });
                  });
                }
              },

              /**
               * push data to adobe
               * @param event is passed as per eventlistener keyup
               * @example
               * privilegesModuleTracking(event)
               */
            },
            {
              key: "privilegesModuleTracking",
              value: function privilegesModuleTracking(event) {
                var ctaName = event.target.getAttribute("title");
                var ctaType = "link";
                var linkName =
                  document.querySelector("title") &&
                  document.querySelector("title").innerText
                    ? document.querySelector("title").innerText.toLowerCase()
                    : "na";
                var closest = e.target.closest(
                  ".sc-privileges__content-wrapper"
                );
                var customLinkText = closest.innerText
                  ? closest.innerText.trim().toLowerCase()
                  : closest.textContent.trim().toLowerCase();
                var dataObject = _objectSpread(
                  _objectSpread({}, digitalData),
                  {},
                  {
                    customLinkClick: {
                      customLinkText: customLinkText,
                      customLinkRegion:
                        _commonFunctions.default.getHorizontalPosition(
                          event.clientX
                        ) +
                        " " +
                        Utils.calcElementLocation(closest),
                      customLinkType: ctaType,
                      customLinkName: linkName,
                    },
                    event: "ctaClick",
                    title: document.title,
                    href: window.location.href,
                    context: customLinkText,
                  }
                );
                dataObject.ctaName = ctaName || customLinkText;
                dataObject.ctaPosition = Utils.calcElementLocation(closest);
                dataObject.ctaType = ctaType;
                if (Utils.getCurrentCountry() == "hk") {
                  delete dataObject.customLinkClick;
                }
                scAnalyticsDataArray.push(dataObject);
              },

              /**
               * push data to adobe
               * @param event is passed as per eventlistener keyup
               * @example
               * needsModuleTracking(event)
               */
            },
            {
              key: "needsModuleTracking",
              value: function needsModuleTracking(event) {
                var ctaName = event.target.getAttribute("title");
                var ctaType = document.querySelector(".sc-tab--bonus-saver")
                  ? event.currentTarget.classList.contains("splide__slide")
                    ? "persona"
                    : "link"
                  : "link";
                var linkName =
                  document.querySelector("title") &&
                  document.querySelector("title").innerText
                    ? document.querySelector("title").innerText.toLowerCase()
                    : "na";
                var closest = event.target.closest(".sc-tab__item");
                var selector = closest.querySelector(".sc-tab__item-title");
                var customLinkText = selector.innerText
                  ? selector.innerText.trim().toLowerCase()
                  : selector.textContent.trim().toLowerCase();
                var dataObject = _objectSpread(
                  _objectSpread({}, digitalData),
                  {},
                  {
                    customLinkClick: {
                      customLinkText: customLinkText,
                      customLinkRegion:
                        _commonFunctions.default.getHorizontalPosition(
                          event.clientX
                        ) +
                        " " +
                        Utils.calcElementLocation(closest),
                      customLinkType: ctaType,
                      customLinkName: linkName,
                    },
                    event: "ctaClick",
                    title: document.title,
                    href: window.location.href,
                    context: customLinkText,
                  }
                );
                dataObject.ctaName = ctaName || customLinkText;
                dataObject.ctaPosition = Utils.calcElementLocation(closest);
                dataObject.ctaType = ctaType;
                if (Utils.getCurrentCountry() == "hk") {
                  delete dataObject.customLinkClick;
                }
                scAnalyticsDataArray.push(dataObject);
              },

              /**
               * check class name and return link type
               * @param {String} className class name of the clicked element
               * @return {String} return link type like link, button, carousel etc
               * @example
               * getCtaType('sc-btn')
               */
            },
            {
              key: "getCtaType",
              value: function getCtaType(className, target) {
                if (target && target.closest(".sc-nav")) {
                  return "nav-link";
                } else if (
                  className == "" ||
                  typeof className !== "string" ||
                  typeof className.includes === "undefined"
                ) {
                  return "link";
                } else if (
                  className.indexOf("sc-btn") !== -1 ||
                  className.indexOf("c-button") !== -1
                ) {
                  return "button";
                } else if (
                  className.indexOf("sc-bnr__link") !== -1 ||
                  className.indexOf("slide-anchor-bg") !== -1
                ) {
                  return "banner";
                } else if (
                  className.indexOf("sc-carousel__pintiles-item") !== -1
                ) {
                  return "carousel";
                } else if (className.indexOf("sc-quick-links__link") !== -1) {
                  return "quick-links";
                } else if (className.indexOf("sc-tag") !== -1) {
                  return "tabs";
                } else {
                  return "link";
                }
              },

              /**
               * delay 5 seconds when stop typing on search field and trigger globalSearchAdobeAnalytics
               * @example
               * delayFiveSeconds()
               */
            },
            {
              key: "delayFiveSeconds",
              value: function delayFiveSeconds(f, delay) {
                var timer = null;
                return function () {
                  var context = this,
                    args = arguments;
                  clearTimeout(timer);
                  timer = window.setTimeout(function () {
                    f.apply(context, args);
                  }, delay || 5000);
                };
              },

              /**
               * Returns Bool if Valid URL
               * @param {String} url pass cta url
               * @return {Boolean} return true if URL is valid
               * @example
               * isValidUrl('https://sc.com/ke')
               */
            },
            {
              key: "isValidURL",
              value: function isValidURL(u) {
                if (!u) {
                  return false;
                }
                var res = u.match(
                  // eslint-disable-next-line no-useless-escape
                  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
                );
                return res !== null;
              },

              /**
               * added https if there is no http protocol
               * @param {String} url pass cta url
               * @example
               * getValidUrl('sc.com/ke')
               */
            },
            {
              key: "getValidUrl",
              value: function getValidUrl() {
                var url =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : "";
                if (!url) {
                  return;
                }
                var newUrl = "";
                if (url.indexOf("adobe_mc=") === -1) {
                  newUrl = window.decodeURIComponent(url);
                } else {
                  var urlList = url.split("adobe_mc=");
                  var paramList = urlList[1].split("&");
                  if (paramList.length > 1) {
                    //query string exist after adobe_mc
                    var adobeStr = paramList.shift(); //Cut query string of adobe_mc param from the array
                    newUrl =
                      window.decodeURIComponent(urlList[0]) +
                      "adobe_mc=".concat(adobeStr, "&") +
                      window.decodeURIComponent(paramList.join("&"));
                  } else {
                    //query string not exist after adobe_mc
                    newUrl =
                      window.decodeURIComponent(urlList[0]) +
                      "adobe_mc=".concat(urlList[1]);
                  }
                }
                newUrl = newUrl.trim().replace(/\s/g, "");
                if (/^(:\/\/)/.test(newUrl)) {
                  return "http".concat(newUrl);
                }
                if (!/^(f|ht)tps?:\/\//i.test(newUrl)) {
                  return "https://".concat(newUrl);
                }
                return newUrl;
              },

              /**
               * return true if it's an internal domain, else return false
               * @param {String} domain pass cta domain name
               * @example
               * isInternalDomain('sc.com/ke')
               */
            },
            {
              key: "isInternalDomain",
              value: function isInternalDomain(domain) {
                // List of all regular expession for internal domains
                var internal = [
                  /^myinfosg.api.gov.sg$/,
                  /^sc.com$/,
                  /^.*\.sc\.com$/,
                  /^standardchartered.com$/,
                  /^.*\.standardchartered\.com/,
                  /^.*\.standardchartered\.com\..*/,
                  /^standardchartered\.co\..*$/,
                  /^.*\.standardchartered\.co\..*$/,
                  /www.wowmanhattan.com.sg/,
                  /saml.singpass.gov.sg/,
                  /scb-sg.onelink.me/,
                  /#null/,
                ];
                for (var i = 0; i < internal.length; i++) {
                  if (internal[i].test(domain)) {
                    return true;
                  }
                }
                return false;
              },

              /**
               * based on white list parameters return campaignName and campaignValue
               * @param {Object} allowableQueryString are whitelist parameters
               * @return {Object} return collections of campaignName and campaignValue
               * @example
               * getCampaignInfo(['subChanCode', 'camp_id', 'promoCode'])
               */
            },
            {
              key: "getCampaignInfo",
              value: function getCampaignInfo(allowableQueryString) {
                if (!allowableQueryString.length) return "";
                var total = allowableQueryString.length;
                var campaignName = "";
                var campaignValue = "";
                for (var i = 0; i < total; i++) {
                  var cookieValue = _commonFunctions.default.getCookie(
                    allowableQueryString[i]
                  );
                  var localStorageValue = Utils.getLocalStorageWithExpiry(
                    allowableQueryString[i]
                  );
                  if (cookieValue || localStorageValue) {
                    if (campaignName) {
                      campaignName += ":";
                      campaignValue += ":";
                    }
                    campaignName += allowableQueryString[i];
                    campaignValue += cookieValue || localStorageValue;
                  }
                }
                if (!campaignName) campaignName = "na";
                if (!campaignValue) campaignValue = "na";
                return [campaignName, campaignValue];
              },

              /**
               * based on page slug, return ctaTitle
               * @param {String} pageSlug pass page slug attribute
               * @param {Event} event clicked element
               * @param {String} ctaTitle previous CTA title
               * @return {String} return previous title or download text title
               * @example
               * getValidUrl('download-centre', event, 'apply now')
               */
            },
            {
              key: "extractDownloadTitle",
              value: function extractDownloadTitle(pageSlug, event, ctaTitle) {
                if (
                  (pageSlug == "important-informations" ||
                    pageSlug == "download-centre" ||
                    pageSlug == "financials" ||
                    pageSlug == "news-media") &&
                  event
                ) {
                  var downloadTitle = event.querySelector(
                    ".sc-page-list__title"
                  );
                  if (downloadTitle) {
                    ctaTitle =
                      downloadTitle.innerText || downloadTitle.textContent;
                  }
                }
                return ctaTitle;
              },

              /**
               * get productId from URL
               * @example
               * getProductId()
               */
            },
            {
              key: "getProductIdPfm",
              value: function getProductIdPfm() {
                var queryStringList = [];
                var queryString = window.location.search;
                if (queryString) {
                  queryString = queryString.substring(1);
                  if (queryString) {
                    queryStringList = queryString.split("&");
                    if (queryStringList.length) {
                      for (var i = 0; i < queryStringList.length; i++) {
                        var result = queryStringList[i].split("=");
                        if (result[0].toLowerCase() == "productid") {
                          this.productId = result[1].toLowerCase();
                        } else if (result[0].toLowerCase() == "pfm") {
                          this.pfmId = result[1].toLowerCase();
                        }
                      }
                    }
                  }
                }
              },
            },
          ]);
          return CommonEventListener;
        })();
        var instance = new CommonEventListener();
        window.addEventListener("load", function () {
          if (typeof scAnalyticsDataArray !== "undefined") {
            instance.init();
          }
        });
        var _default = instance;
        exports.default = _default;
      },
      { "./analytics-event-handler": 3, "./common-functions": 5 },
    ],
    5: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = void 0;
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(
              target,
              _toPropertyKey(descriptor.key),
              descriptor
            );
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }
        function _defineProperty(obj, key, value) {
          key = _toPropertyKey(key);
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }
        var CommonFunctions = /*#__PURE__*/ (function () {
          function CommonFunctions() {
            _classCallCheck(this, CommonFunctions);
          }
          _createClass(CommonFunctions, [
            {
              key: "getHorizontalPosition",
              value:
                /**
                 * capture horizontal click position and return it's left or right
                 * @param {Number} xClick horizontal click position
                 * @return {String} return it's left or right
                 * @example
                 * getHorizontalPosition(1000)
                 */
                function getHorizontalPosition(xClick) {
                  var width = Math.max(
                    document.body.scrollWidth,
                    document.documentElement.scrollWidth,
                    document.body.offsetWidth,
                    document.documentElement.offsetWidth,
                    document.documentElement.clientWidth
                  );
                  var median = width / 2;
                  return xClick < median ? "left" : "right";
                },

              /**
               * calculate vertical position
               * @param {Event} target event of the selector
               * @return {String} return top, middle, bottom, persistent-bar, lightbox etc.
               * @example
               * calcElementLocation(event)
               */
            },
            {
              key: "calcElementLocation",
              value: function calcElementLocation(target) {
                if (!target) return "";
                if (target.closest(".c-modal") || target.closest(".sc-modal")) {
                  return "lightbox";
                }
                if (
                  typeof target.className === "string" &&
                  typeof target.className.includes !== "undefined" &&
                  (target.className.indexOf(
                    "sc-card-comparator__compare-btn"
                  ) !== -1 ||
                    target.className.indexOf(
                      "sc-card-comparator__card-remove"
                    ) !== -1)
                ) {
                  return "bottom";
                }
                if (
                  target.closest(".m-persistent-bar") ||
                  target.closest(".sc-persistent-bar") ||
                  target.closest(".m-persistent-bottom-bar")
                ) {
                  return "persistent-bar";
                }

                //Sorted array of positions
                var positions = [
                  {
                    name: "top",
                    depth: 30,
                  },
                  {
                    name: "middle",
                    depth: 70,
                  },
                  {
                    name: "bottom",
                    depth: 100,
                  },
                ];
                var maxHeight = Math.max(
                  document.body.clientHeight,
                  window.outerHeight
                );
                if (maxHeight <= 0) {
                  return "";
                }
                var scrollDepth =
                  (parseInt(this.getPosition(target)) * 100) / maxHeight;
                for (var i = 0; i < positions.length; i++) {
                  if (scrollDepth < positions[i].depth) {
                    return positions[i].name;
                  }
                }
                if (
                  typeof target.parentNode.parentNode.className === "string" &&
                  typeof target.parentNode.parentNode.className.includes !==
                    "undefined" &&
                  target.parentNode.parentNode.className.indexOf(
                    "sc-hdr__search"
                  ) !== -1
                ) {
                  return "top";
                }
                return "bottom";
              },

              /**
               * return absolute position of selected div in px
               * @param {String} element class elements name as an object
               * @return {Number} return horizontal position in px
               * @example
               * getPosition('.selector')
               */
            },
            {
              key: "getPosition",
              value: function getPosition(element) {
                if (!element) return "";
                var yPosition = 0;
                while (element) {
                  yPosition +=
                    element.offsetTop - element.scrollTop + element.clientTop;
                  element = element.offsetParent;
                }
                return yPosition;
              },

              /**
               * return URL attributes
               * @param {String} URL of the elements
               * @return {Object} return href, protocol, hostname etc base on URL
               * @example
               * parseUrl('https://www.sc.com/sg/save/current-accounts/bonussaver/')
               */
            },
            {
              key: "parseUrl",
              value: function parseUrl(url) {
                var parser = document.createElement("a");
                parser.href = url;
                if (parser.protocol != "mailto:") {
                  var link_path =
                    "/" === parser.pathname.charAt(0)
                      ? parser.pathname
                      : "/" + parser.pathname;
                } else {
                  link_path = parser.pathname;
                }
                return {
                  href: parser.href,
                  protocal: parser.protocol,
                  hostname: parser.hostname,
                  port: parser.port,
                  pathname:
                    parser.hash.indexOf("?") !== -1
                      ? link_path + parser.hash
                      : link_path,
                  rawpath: link_path,
                  query: parser.query || parser.search,
                  search: parser.query || parser.search,
                  hash: parser.hash,
                  host: parser.host,
                };
              },

              /**
               * return URL attributes
               * @param {String} URL of the elements
               * @return {Object} return href, protocol, hostname etc base on URL
               * @example
               * currentURL('https://www.sc.com/sg/save/current-accounts/bonussaver/')
               */
            },
            {
              key: "urlBreakdown",
              value: function urlBreakdown(currentURL) {
                var that = this;
                var parser = that.parseUrl(currentURL);
                var queryString = parser.search,
                  parts = parser.pathname.split("/"),
                  hash = parser.hash,
                  countryMapping = {
                    sgbeta: "sg",
                  };
                if (queryString && queryString.indexOf("?") === 0) {
                  queryString = queryString.slice(1);
                }
                var pageURL = {
                  domain: null,
                  country: null,
                  language: null,
                  category: null,
                  segment: "personal",
                  subcategory: null,
                  slug: null,
                  queryString: queryString,
                  hash: null,
                  pathname: document.location.pathname,
                };
                pageURL.domain = parser.hostname;
                pageURL.country = parts[1];
                pageURL.language = "en";
                if (pageURL.country === "cn" || pageURL.country === "tw") {
                  pageURL.language = "zh";
                }
                if (parts[2]) {
                  pageURL.category = parts[2];
                  if (parts[2].length === 2) {
                    pageURL.language = parts[2];
                    pageURL.category = parts[3];
                  }
                }
                if (
                  parts[parts.length - 1] !== "" &&
                  parts[parts.length - 1] !== "index.html"
                ) {
                  pageURL.slug = parts[parts.length - 1];
                } else {
                  pageURL.slug = parts[parts.length - 2];
                }
                if (pageURL.slug) {
                  if (pageURL.slug.indexOf(".") !== -1) {
                    var slugger = pageURL.slug.split(".");
                    pageURL.name = slugger[0];
                    pageURL.extension = slugger[1];
                  } else {
                    pageURL.name = pageURL.slug;
                    pageURL.extension = "";
                  }
                } else {
                  pageURL.slug = "";
                  pageURL.name = "";
                  pageURL.extension = "";
                }
                if (
                  parts.length <= 4 &&
                  CommonFunctions.constants.LANGUAGES.indexOf(pageURL.slug) !==
                    -1
                ) {
                  pageURL.slug = pageURL.country;
                }
                if (hash) {
                  pageURL.hash = hash;
                }
                if (parts.length >= 5) {
                  pageURL.subcategory = parts[3];
                }
                if (pageURL.pathname.indexOf("priority") !== -1) {
                  pageURL.segment = "priority";
                } else if (pageURL.pathname.indexOf("business") !== -1) {
                  pageURL.segment = "business";
                }
                if (countryMapping[pageURL.country]) {
                  pageURL.country = countryMapping[pageURL.country];
                }
                return pageURL;
              },

              /**
               * return cookie value
               * @param {String} key is the name of the cookie
               * @return {String} return selected cookie value
               * @example
               * getCookie('subChanCode')
               */
            },
            {
              key: "getCookie",
              value: function getCookie(key) {
                var name = key + "=";
                var decodedCookie = decodeURIComponent(document.cookie);
                var ca = decodedCookie.split(";");
                for (var i = 0; i < ca.length; i++) {
                  var c = ca[i];
                  while (c.charAt(0) == " ") {
                    c = c.substring(1);
                  }
                  if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                  }
                }
                return null;
              },
            },
            {
              key: "getPageContext",
              value: function getPageContext() {
                var that = this;
                var $title = document.title;
                var $country = document.querySelector(
                  'meta[name="sc:country"]'
                );
                var $language = document.querySelector(
                  'meta[name="sc:language"]'
                );
                var $segment = document.querySelector(
                  'meta[name="sc:segment"]'
                );
                var $category = document.querySelector(
                  'meta[name="sc:categories"]'
                );
                var $subcategory = document.querySelector(
                  'meta[name="sc:subcategories"]'
                );
                var $slug = document.querySelector('meta[name="sc:page-slug"]');
                var pageContext = {
                  title: null,
                  country: null,
                  language: null,
                  segment: null,
                  category: null,
                  subcategory: null,
                  slug: null,
                };
                if ($title) {
                  pageContext.title = $title.trim();
                }
                if ($country) {
                  pageContext.country = $country.getAttribute("content");
                }
                if ($language) {
                  pageContext.language = $language.getAttribute("content");
                }
                if (!pageContext.language) {
                  var docLang = document.documentElement.lang;
                  if (docLang) {
                    // Document language can be in languageCode-countryCode format, e.g en-US.
                    // In front-end context, we don't need countryCode part
                    pageContext.language = docLang.split("-")[0].toLowerCase();
                  }
                }
                if ($segment) {
                  pageContext.segment = $segment.getAttribute("content");
                }
                if ($category) {
                  pageContext.category = $category.getAttribute("content");
                }
                if ($subcategory) {
                  pageContext.subcategory =
                    $subcategory.getAttribute("content");
                }
                if ($slug) {
                  pageContext.slug = $slug.getAttribute("content");
                }
                return that.extend(
                  that.urlBreakdown(window.location.href),
                  pageContext
                );
              },
            },
            {
              key: "extend",
              value: function extend(obj, src) {
                Object.keys(src).forEach(function (key) {
                  obj[key] = src[key];
                });
                return obj;
              },
            },
            {
              key: "getPageUrl",
              value: function getPageUrl() {
                return this.getPageContext();
              },

              /**
               * Get the country code from the URL
               * @returns {*}
               */
            },
            {
              key: "getCountryNameFromURL",
              value: function getCountryNameFromURL() {
                var that = this;
                var url = window.location.href;
                var removeHTTP = url
                  .replace("http://", "")
                  .replace("https://", "");
                var splitURL = removeHTTP.split("/");
                var currentEnvironment = that.getCurrentEnvironment();
                return CommonFunctions.constants.DEVELOPMENT ===
                  currentEnvironment ||
                  CommonFunctions.constants.STAGING === currentEnvironment
                  ? splitURL[2]
                  : splitURL[1];
              },
            },
            {
              key: "getCurrentEnvironment",
              value: function getCurrentEnvironment() {
                var that = this;
                var urlObj = [
                  "cmsdev",
                  "preview",
                  "standardchartered",
                  "sc",
                  "com",
                  "av",
                  "assets",
                  "global",
                  "development",
                  "staging",
                  "digital",
                  "https",
                  "cmsstage",
                  "cms",
                  "dev",
                  "zoo",
                ];
                var domain = that.getPageUrl().domain;
                if (domain.indexOf(urlObj[3] + "." + urlObj[4]) !== -1) {
                  if (
                    domain ===
                    urlObj[0] + "." + urlObj[3] + "." + urlObj[4]
                  ) {
                    return CommonFunctions.constants.DEVELOPMENT;
                  } else if (
                    domain ===
                    urlObj[12] + "." + urlObj[3] + "." + urlObj[4]
                  ) {
                    return CommonFunctions.constants.STAGING;
                  } else if (
                    domain ===
                    urlObj[13] + "." + urlObj[3] + "." + urlObj[4]
                  ) {
                    return CommonFunctions.constants.PREVIEW;
                  } else {
                    return CommonFunctions.constants.PRODUCTION;
                  }
                } else if (
                  domain ===
                  urlObj[1] + "." + urlObj[2] + "." + urlObj[4]
                ) {
                  if (that.getPageUrl().pathname.match("^/staging")) {
                    return CommonFunctions.constants.STAGING;
                  } else if (
                    that.getPageUrl().pathname.match("^/development")
                  ) {
                    return CommonFunctions.constants.DEVELOPMENT;
                  } else {
                    return CommonFunctions.constants.PREVIEW;
                  }
                } else {
                  return CommonFunctions.constants.DEVELOPMENT;
                }
              },
            },
            {
              key: "previewLog",
              value: function previewLog(log) {
                var that = this;
                if (
                  that.getCurrentEnvironment() ===
                    CommonFunctions.constants.PREVIEW ||
                  that.getCurrentEnvironment() ===
                    CommonFunctions.constants.DEVELOPMENT
                ) {
                  /* eslint-disable no-console */
                  if (
                    typeof console !== "undefined" &&
                    typeof console.log !== "undefined"
                  ) {
                    console.log(log);
                  }
                  /* eslint-enable no-console */
                }
              },
            },
          ]);
          return CommonFunctions;
        })();
        _defineProperty(CommonFunctions, "constants", {
          DEVELOPMENT: "development",
          PREVIEW: "preview",
          PRODUCTION: "production",
          STAGING: "staging",
          PERSONAL: "personal",
          PRIORITY: "priority",
          BUSINESS: "business",
          CORPORATE: "corporate",
          PRIVATE: "private",
          COMMERCIAL: "commercial",
          LANGUAGES: ["en", "zh"],
          ALLOWABLE_QUERYSTRING: [
            "subChanCode",
            "camp_id",
            "pid",
            "promoCode",
            "promo",
            "referId",
            "instance",
            "state",
            "utm_source",
            "utm_medium",
            "utm_campaign",
            "utm_term",
            "utm_content",
            "GiPrm",
            "productName",
            "truspleBuyerId",
          ],
        });
        var instance = new CommonFunctions();
        var _default = instance;
        exports.default = _default;
      },
      {},
    ],
    6: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = void 0;
        var _commonFunctions = _interopRequireDefault(
          require("./common-functions")
        );
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(
              target,
              _toPropertyKey(descriptor.key),
              descriptor
            );
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }
        /**
         * Implement tracking using Google Analytics
         */
        var GoogleMain = /*#__PURE__*/ (function () {
          function GoogleMain() {
            _classCallCheck(this, GoogleMain);
          }
          _createClass(GoogleMain, [
            {
              key: "init",
              value: function init() {
                this.pageContext = _commonFunctions.default.getPageContext();
                this.pageUrl = _commonFunctions.default.getPageUrl();
              },
              /**
               * collect object from queue and push it in dataLayer for Google Analytics
               * @param {String} msg - pass custom message
               * @param {Object} dataObj - collections of events objects
               * @example
               * handleDataLayerPush('custom message', {event: 'ctaClick', title: document.title})
               */
            },
            {
              key: "handleDataLayerPush",
              value: function handleDataLayerPush(msg) {
                var dataObj =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : null;
                if (dataObj) {
                  var title = dataObj.title,
                    href = dataObj.href,
                    context = dataObj.context;
                  if (!context) {
                    return;
                  }
                  var country = this.pageContext.country;
                  if (!this.pageContext.country) {
                    country = this.pageUrl.country;
                  }
                  var dataSet = {
                    event: "trackElement",
                    eventCategory:
                      "~" + country + " : ^" + this.pageContext.title,
                    eventAction:
                      title.trim() +
                      (context !== "" ? "-" + context.trim() : ""),
                    eventLabel: href,
                  };
                  window.dataLayer.push(dataSet);
                }
              },
            },
          ]);
          return GoogleMain;
        })();
        var instance = new GoogleMain();
        instance.init();
        var _default = instance;
        exports.default = _default;
      },
      { "./common-functions": 5 },
    ],
  },
  {},
  [1]
);
