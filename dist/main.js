(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["_", "react"], factory);
	else if(typeof exports === 'object')
		exports["storm-react-diagrams"] = factory(require("lodash"), require("react"));
	else
		root["storm-react-diagrams"] = factory(root["_"], root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel_1 = __webpack_require__(3);
var _ = __webpack_require__(0);
var PointModel = /** @class */ (function (_super) {
    __extends(PointModel, _super);
    function PointModel(link, points) {
        var _this = _super.call(this) || this;
        _this.x = points.x;
        _this.y = points.y;
        _this.link = link;
        return _this;
    }
    PointModel.prototype.getSelectedEntities = function () {
        if (_super.prototype.isSelected.call(this) && !this.isConnectedToPort()) {
            return [this];
        }
        return [];
    };
    PointModel.prototype.isConnectedToPort = function () {
        return this.link.getPortForPoint(this) !== null;
    };
    PointModel.prototype.deSerialize = function (ob) {
        _super.prototype.deSerialize.call(this, ob);
        this.x = ob.x;
        this.y = ob.y;
    };
    PointModel.prototype.serialize = function () {
        return _.merge(_super.prototype.serialize.call(this), {
            x: this.x,
            y: this.y
        });
    };
    PointModel.prototype.remove = function () {
        //clear references
        if (this.link) {
            this.link.removePoint(this);
        }
        _super.prototype.remove.call(this);
    };
    PointModel.prototype.updateLocation = function (points) {
        this.x = points.x;
        this.y = points.y;
    };
    PointModel.prototype.getX = function () {
        return this.x;
    };
    PointModel.prototype.getY = function () {
        return this.y;
    };
    PointModel.prototype.getLink = function () {
        return this.link;
    };
    PointModel.prototype.isLocked = function () {
        return _super.prototype.isLocked.call(this) || this.getLink().isLocked();
    };
    return PointModel;
}(BaseModel_1.BaseModel));
exports.PointModel = PointModel;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseEntity_1 = __webpack_require__(5);
var _ = __webpack_require__(0);
/**
 * @author Dylan Vorster
 */
var BaseModel = /** @class */ (function (_super) {
    __extends(BaseModel, _super);
    function BaseModel(type, id) {
        var _this = _super.call(this, id) || this;
        _this.type = type;
        _this.selected = false;
        return _this;
    }
    BaseModel.prototype.getSelectedEntities = function () {
        if (this.isSelected()) {
            return [this];
        }
        return [];
    };
    BaseModel.prototype.deSerialize = function (ob) {
        _super.prototype.deSerialize.call(this, ob);
        this.type = ob.type;
        this.selected = ob.selected;
    };
    BaseModel.prototype.serialize = function () {
        return _.merge(_super.prototype.serialize.call(this), {
            type: this.type,
            selected: this.selected
        });
    };
    BaseModel.prototype.getType = function () {
        return this.type;
    };
    BaseModel.prototype.getID = function () {
        return this.id;
    };
    BaseModel.prototype.isSelected = function () {
        return this.selected;
    };
    BaseModel.prototype.setSelected = function (selected) {
        if (selected === void 0) { selected = true; }
        this.selected = selected;
        this.iterateListeners(function (listener, event) {
            if (listener.selectionChanged) {
                listener.selectionChanged(__assign({}, event, { isSelected: selected }));
            }
        });
    };
    BaseModel.prototype.remove = function () {
        this.iterateListeners(function (listener, event) {
            if (listener.entityRemoved) {
                listener.entityRemoved(event);
            }
        });
    };
    return BaseModel;
}(BaseEntity_1.BaseEntity));
exports.BaseModel = BaseModel;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel_1 = __webpack_require__(3);
var _ = __webpack_require__(0);
var NodeModel = /** @class */ (function (_super) {
    __extends(NodeModel, _super);
    function NodeModel(nodeType, id) {
        if (nodeType === void 0) { nodeType = "default"; }
        var _this = _super.call(this, nodeType, id) || this;
        _this.x = 0;
        _this.y = 0;
        _this.extras = {};
        _this.ports = {};
        return _this;
    }
    NodeModel.prototype.setPosition = function (x, y) {
        var _this = this;
        //store position
        var oldX = this.x;
        var oldY = this.y;
        var _loop_1 = function (port) {
            _.forEach(this_1.ports[port].getLinks(), function (link) {
                var point = link.getPointForPort(_this.ports[port]);
                point.x = point.x + x - oldX;
                point.y = point.y + y - oldY;
            });
        };
        var this_1 = this;
        for (var port in this.ports) {
            _loop_1(port);
        }
        this.x = x;
        this.y = y;
    };
    NodeModel.prototype.getSelectedEntities = function () {
        var _this = this;
        var entities = _super.prototype.getSelectedEntities.call(this);
        // add the points of each link that are selected here
        if (this.isSelected()) {
            var _loop_2 = function (portName) {
                entities = entities.concat(_.map(this_2.ports[portName].getLinks(), function (link) {
                    return link.getPointForPort(_this.ports[portName]);
                }));
            };
            var this_2 = this;
            for (var portName in this.ports) {
                _loop_2(portName);
            }
        }
        return entities;
    };
    NodeModel.prototype.deSerialize = function (ob) {
        _super.prototype.deSerialize.call(this, ob);
        this.x = ob.x;
        this.y = ob.y;
        this.extras = ob.extras;
    };
    NodeModel.prototype.serialize = function () {
        return _.merge(_super.prototype.serialize.call(this), {
            x: this.x,
            y: this.y,
            extras: this.extras,
            ports: _.map(this.ports, function (port) {
                return port.serialize();
            })
        });
    };
    NodeModel.prototype.doClone = function (lookupTable, clone) {
        if (lookupTable === void 0) { lookupTable = {}; }
        // also clone the ports
        clone.ports = {};
        _.values(this.ports).forEach(function (port) {
            clone.addPort(port.clone(lookupTable));
        });
    };
    NodeModel.prototype.remove = function () {
        _super.prototype.remove.call(this);
        for (var i in this.ports) {
            _.forEach(this.ports[i].getLinks(), function (link) {
                link.remove();
            });
        }
    };
    NodeModel.prototype.getPortFromID = function (id) {
        for (var i in this.ports) {
            if (this.ports[i].id === id) {
                return this.ports[i];
            }
        }
        return null;
    };
    NodeModel.prototype.getPort = function (name) {
        return this.ports[name];
    };
    NodeModel.prototype.getPorts = function () {
        return this.ports;
    };
    NodeModel.prototype.removePort = function (port) {
        //clear the parent node reference
        if (this.ports[port.name]) {
            this.ports[port.name].setParentNode(null);
            delete this.ports[port.name];
        }
    };
    NodeModel.prototype.addPort = function (port) {
        port.setParentNode(this);
        this.ports[port.name] = port;
        return port;
    };
    return NodeModel;
}(BaseModel_1.BaseModel));
exports.NodeModel = NodeModel;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Toolkit_1 = __webpack_require__(9);
var _ = __webpack_require__(0);
var BaseEntity = /** @class */ (function () {
    function BaseEntity(id) {
        this.listeners = {};
        this.id = id || Toolkit_1.Toolkit.UID();
        this.locked = false;
    }
    BaseEntity.prototype.getID = function () {
        return this.id;
    };
    BaseEntity.prototype.doClone = function (lookupTable, clone) {
        if (lookupTable === void 0) { lookupTable = {}; }
    };
    BaseEntity.prototype.clone = function (lookupTable) {
        if (lookupTable === void 0) { lookupTable = {}; }
        // try and use an existing clone first
        if (lookupTable[this.id]) {
            return lookupTable[this.id];
        }
        var clone = _.clone(this);
        clone.id = Toolkit_1.Toolkit.UID();
        clone.clearListeners();
        lookupTable[this.id] = clone;
        this.doClone(lookupTable, clone);
        return clone;
    };
    BaseEntity.prototype.clearListeners = function () {
        this.listeners = {};
    };
    BaseEntity.prototype.deSerialize = function (data) {
        this.id = data.id;
    };
    BaseEntity.prototype.serialize = function () {
        return {
            id: this.id
        };
    };
    BaseEntity.prototype.iterateListeners = function (cb) {
        var event = {
            id: Toolkit_1.Toolkit.UID(),
            firing: true,
            entity: this,
            stopPropagation: function () {
                event.firing = false;
            }
        };
        for (var i in this.listeners) {
            // propagation stopped
            if (!event.firing) {
                return;
            }
            cb(this.listeners[i], event);
        }
    };
    BaseEntity.prototype.removeListener = function (listener) {
        if (this.listeners[listener]) {
            delete this.listeners[listener];
            return true;
        }
        return false;
    };
    BaseEntity.prototype.addListener = function (listener) {
        var uid = Toolkit_1.Toolkit.UID();
        this.listeners[uid] = listener;
        return uid;
    };
    BaseEntity.prototype.isLocked = function () {
        return this.locked;
    };
    BaseEntity.prototype.setLocked = function (locked) {
        if (locked === void 0) { locked = true; }
        this.locked = locked;
        this.iterateListeners(function (listener, event) {
            if (listener.lockChanged) {
                listener.lockChanged(__assign({}, event, { locked: locked }));
            }
        });
    };
    return BaseEntity;
}());
exports.BaseEntity = BaseEntity;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel_1 = __webpack_require__(3);
var PointModel_1 = __webpack_require__(2);
var _ = __webpack_require__(0);
var LinkModel = /** @class */ (function (_super) {
    __extends(LinkModel, _super);
    function LinkModel(linkType, id) {
        if (linkType === void 0) { linkType = "default"; }
        var _this = _super.call(this, linkType, id) || this;
        _this.points = [new PointModel_1.PointModel(_this, { x: 0, y: 0 }), new PointModel_1.PointModel(_this, { x: 0, y: 0 })];
        _this.extras = {};
        _this.sourcePort = null;
        _this.targetPort = null;
        _this.label = null;
        return _this;
    }
    LinkModel.prototype.deSerialize = function (ob) {
        var _this = this;
        _super.prototype.deSerialize.call(this, ob);
        this.extras = ob.extras;
        this.points = _.map(ob.points, function (point) {
            var p = new PointModel_1.PointModel(_this, { x: point.x, y: point.y });
            p.deSerialize(point);
            return p;
        });
        this.label = ob.label || null;
    };
    LinkModel.prototype.serialize = function () {
        return _.merge(_super.prototype.serialize.call(this), {
            source: this.sourcePort ? this.sourcePort.getParent().id : null,
            sourcePort: this.sourcePort ? this.sourcePort.id : null,
            target: this.targetPort ? this.targetPort.getParent().id : null,
            targetPort: this.targetPort ? this.targetPort.id : null,
            points: _.map(this.points, function (point) {
                return point.serialize();
            }),
            extras: this.extras,
            label: this.label || undefined
        });
    };
    LinkModel.prototype.doClone = function (lookupTable, clone) {
        if (lookupTable === void 0) { lookupTable = {}; }
        clone.setPoints(_.map(this.getPoints(), function (point) {
            return point.clone(lookupTable);
        }));
        if (this.sourcePort) {
            clone.setSourcePort(this.sourcePort.clone(lookupTable));
        }
        if (this.targetPort) {
            clone.setTargetPort(this.targetPort.clone(lookupTable));
        }
    };
    LinkModel.prototype.remove = function () {
        if (this.sourcePort) {
            this.sourcePort.removeLink(this);
        }
        if (this.targetPort) {
            this.targetPort.removeLink(this);
        }
        _super.prototype.remove.call(this);
    };
    LinkModel.prototype.isLastPoint = function (point) {
        var index = this.getPointIndex(point);
        return index === this.points.length - 1;
    };
    LinkModel.prototype.getPointIndex = function (point) {
        return this.points.indexOf(point);
    };
    LinkModel.prototype.getPointModel = function (id) {
        for (var i = 0; i < this.points.length; i++) {
            if (this.points[i].id === id) {
                return this.points[i];
            }
        }
        return null;
    };
    LinkModel.prototype.getPortForPoint = function (point) {
        if (this.sourcePort !== null && this.getFirstPoint().getID() === point.getID()) {
            return this.sourcePort;
        }
        if (this.targetPort !== null && this.getLastPoint().getID() === point.getID()) {
            return this.targetPort;
        }
        return null;
    };
    LinkModel.prototype.getPointForPort = function (port) {
        if (this.sourcePort !== null && this.sourcePort.getID() === port.getID()) {
            return this.getFirstPoint();
        }
        if (this.targetPort !== null && this.targetPort.getID() === port.getID()) {
            return this.getLastPoint();
        }
        return null;
    };
    LinkModel.prototype.getFirstPoint = function () {
        return this.points[0];
    };
    LinkModel.prototype.getLastPoint = function () {
        return this.points[this.points.length - 1];
    };
    LinkModel.prototype.setSourcePort = function (port) {
        port.addLink(this);
        this.sourcePort = port;
        this.iterateListeners(function (listener, event) {
            listener.sourcePortChanged && listener.sourcePortChanged(__assign({}, event, { port: port }));
        });
    };
    LinkModel.prototype.getSourcePort = function () {
        return this.sourcePort;
    };
    LinkModel.prototype.getTargetPort = function () {
        return this.targetPort;
    };
    LinkModel.prototype.setTargetPort = function (port) {
        port.addLink(this);
        this.targetPort = port;
        this.iterateListeners(function (listener, event) {
            listener.targetPortChanged && listener.targetPortChanged(__assign({}, event, { port: port }));
        });
    };
    LinkModel.prototype.getLabel = function () {
        return this.label;
    };
    LinkModel.prototype.setLabel = function (label) {
        this.label = label;
    };
    LinkModel.prototype.getPoints = function () {
        return this.points;
    };
    LinkModel.prototype.setPoints = function (points) {
        var _this = this;
        _.forEach(points, function (point) {
            point.link = _this;
        });
        this.points = points;
    };
    LinkModel.prototype.removePoint = function (pointModel) {
        this.points.splice(this.getPointIndex(pointModel), 1);
    };
    LinkModel.prototype.removePointsBefore = function (pointModel) {
        this.points.splice(0, this.getPointIndex(pointModel));
    };
    LinkModel.prototype.removePointsAfter = function (pointModel) {
        this.points.splice(this.getPointIndex(pointModel) + 1);
    };
    LinkModel.prototype.addPoint = function (pointModel, index) {
        if (index === void 0) { index = 1; }
        pointModel.link = this;
        this.points.splice(index, 0, pointModel);
    };
    return LinkModel;
}(BaseModel_1.BaseModel));
exports.LinkModel = LinkModel;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractFactory = /** @class */ (function () {
    function AbstractFactory(name) {
        this.type = name;
    }
    AbstractFactory.prototype.getType = function () {
        return this.type;
    };
    return AbstractFactory;
}());
exports.AbstractFactory = AbstractFactory;
var NodeFactory = /** @class */ (function (_super) {
    __extends(NodeFactory, _super);
    function NodeFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NodeFactory;
}(AbstractFactory));
exports.NodeFactory = NodeFactory;
var LinkFactory = /** @class */ (function (_super) {
    __extends(LinkFactory, _super);
    function LinkFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LinkFactory;
}(AbstractFactory));
exports.LinkFactory = LinkFactory;
var PortFactory = /** @class */ (function (_super) {
    __extends(PortFactory, _super);
    function PortFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PortFactory;
}(AbstractFactory));
exports.PortFactory = PortFactory;
var SimplePortFactory = /** @class */ (function (_super) {
    __extends(SimplePortFactory, _super);
    function SimplePortFactory(type, cb) {
        var _this = _super.call(this, type) || this;
        _this.cb = cb;
        return _this;
    }
    SimplePortFactory.prototype.getNewInstance = function (initialConfig) {
        return this.cb(initialConfig);
    };
    return SimplePortFactory;
}(PortFactory));
exports.SimplePortFactory = SimplePortFactory;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel_1 = __webpack_require__(3);
var LinkModel_1 = __webpack_require__(6);
var _ = __webpack_require__(0);
var PortModel = /** @class */ (function (_super) {
    __extends(PortModel, _super);
    function PortModel(name, type, id) {
        var _this = _super.call(this, type, id) || this;
        _this.name = name;
        _this.links = {};
        _this.parentNode = null;
        return _this;
    }
    PortModel.prototype.deSerialize = function (ob) {
        _super.prototype.deSerialize.call(this, ob);
        this.name = ob.name;
    };
    PortModel.prototype.serialize = function () {
        return _.merge(_super.prototype.serialize.call(this), {
            name: this.name,
            parentNode: this.parentNode.id,
            links: _.map(this.links, function (link) {
                return link.id;
            })
        });
    };
    PortModel.prototype.doClone = function (lookupTable, clone) {
        if (lookupTable === void 0) { lookupTable = {}; }
        clone.links = {};
        clone.parentNode = this.parentNode.clone(lookupTable);
    };
    PortModel.prototype.getName = function () {
        return this.name;
    };
    PortModel.prototype.getParent = function () {
        return this.parentNode;
    };
    PortModel.prototype.setParentNode = function (node) {
        this.parentNode = node;
    };
    PortModel.prototype.removeLink = function (link) {
        delete this.links[link.getID()];
    };
    PortModel.prototype.addLink = function (link) {
        this.links[link.getID()] = link;
    };
    PortModel.prototype.getLinks = function () {
        return this.links;
    };
    PortModel.prototype.createLinkModel = function () {
        var linkModel = new LinkModel_1.LinkModel();
        linkModel.setSourcePort(this);
        return linkModel;
    };
    PortModel.prototype.isLocked = function () {
        return _super.prototype.isLocked.call(this) || this.getParent().isLocked();
    };
    return PortModel;
}(BaseModel_1.BaseModel));
exports.PortModel = PortModel;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var closest = __webpack_require__(24);
/**
 * @author Dylan Vorster
 */
var Toolkit = /** @class */ (function () {
    function Toolkit() {
    }
    /**
     * Generats a unique ID (thanks Stack overflow :3)
     * @returns {String}
     */
    Toolkit.UID = function () {
        if (Toolkit.TESTING_MODE) {
            Toolkit.TESTING_MODE_ID++;
            return "test-uid-" + Toolkit.TESTING_MODE_ID;
        }
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0, v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };
    /**
     * Finds the closest element as a polyfill
     *
     * @param  {Element} element  [description]
     * @param  {string}  selector [description]
     */
    Toolkit.closest = function (element, selector) {
        if (document.body.closest) {
            return element.closest(selector);
        }
        return closest(element, selector);
    };
    Toolkit.TESTING_MODE = false;
    Toolkit.TESTING_MODE_ID = 1;
    return Toolkit;
}());
exports.Toolkit = Toolkit;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseEntity_1 = __webpack_require__(5);
var _ = __webpack_require__(0);
var LinkModel_1 = __webpack_require__(6);
var NodeModel_1 = __webpack_require__(4);
var PortModel_1 = __webpack_require__(8);
var PointModel_1 = __webpack_require__(2);
/**
 *
 */
var DiagramModel = /** @class */ (function (_super) {
    __extends(DiagramModel, _super);
    function DiagramModel() {
        var _this = _super.call(this) || this;
        _this.links = {};
        _this.nodes = {};
        _this.offsetX = 0;
        _this.offsetY = 0;
        _this.zoom = 100;
        _this.rendered = false;
        _this.gridSize = 0;
        return _this;
    }
    DiagramModel.prototype.setGridSize = function (size) {
        if (size === void 0) { size = 0; }
        this.gridSize = size;
        this.iterateListeners(function (listener, event) {
            listener.gridUpdated && listener.gridUpdated(__assign({}, event, { size: size }));
        });
    };
    DiagramModel.prototype.getGridPosition = function (pos) {
        if (this.gridSize === 0) {
            return pos;
        }
        return this.gridSize * Math.floor((pos + this.gridSize / 2) / this.gridSize);
    };
    DiagramModel.prototype.deSerializeDiagram = function (object, diagramEngine) {
        var _this = this;
        this.deSerialize(object);
        this.offsetX = object.offsetX;
        this.offsetY = object.offsetY;
        this.zoom = object.zoom;
        this.gridSize = object.gridSize;
        //deserialize nodes
        _.forEach(object.nodes, function (node) {
            var nodeOb = diagramEngine.getNodeFactory(node.type).getNewInstance(node);
            nodeOb.deSerialize(node);
            //deserialize ports
            _.forEach(node.ports, function (port) {
                var portOb = diagramEngine.getPortFactory(port.type).getNewInstance();
                portOb.deSerialize(port);
                nodeOb.addPort(portOb);
            });
            _this.addNode(nodeOb);
        });
        _.forEach(object.links, function (link) {
            var linkOb = diagramEngine.getLinkFactory(link.type).getNewInstance();
            linkOb.deSerialize(link);
            if (link.target) {
                linkOb.setTargetPort(_this.getNode(link.target).getPortFromID(link.targetPort));
            }
            if (link.source) {
                linkOb.setSourcePort(_this.getNode(link.source).getPortFromID(link.sourcePort));
            }
            _this.addLink(linkOb);
        });
    };
    DiagramModel.prototype.serializeDiagram = function () {
        return _.merge(this.serialize(), {
            offsetX: this.offsetX,
            offsetY: this.offsetY,
            zoom: this.zoom,
            gridSize: this.gridSize,
            links: _.map(this.links, function (link) {
                return link.serialize();
            }),
            nodes: _.map(this.nodes, function (link) {
                return link.serialize();
            })
        });
    };
    DiagramModel.prototype.clearSelection = function (ignore) {
        if (ignore === void 0) { ignore = null; }
        _.forEach(this.getSelectedItems(), function (element) {
            if (ignore && ignore.getID() === element.getID()) {
                return;
            }
            element.setSelected(false); //TODO dont fire the listener
        });
    };
    DiagramModel.prototype.getSelectedItems = function () {
        var filters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            filters[_i] = arguments[_i];
        }
        if (!Array.isArray(filters)) {
            filters = [filters];
        }
        var items = [];
        // run through nodes
        items = items.concat(_.flatMap(this.nodes, function (node) {
            return node.getSelectedEntities();
        }));
        // find all the links
        items = items.concat(_.flatMap(this.links, function (link) {
            return link.getSelectedEntities();
        }));
        //find all points
        items = items.concat(_.flatMap(this.links, function (link) {
            return _.flatMap(link.points, function (point) {
                return point.getSelectedEntities();
            });
        }));
        items = _.uniq(items);
        if (filters.length > 0) {
            items = _.filter(_.uniq(items), function (item) {
                if (_.includes(filters, "node") && item instanceof NodeModel_1.NodeModel) {
                    return true;
                }
                if (_.includes(filters, "link") && item instanceof LinkModel_1.LinkModel) {
                    return true;
                }
                if (_.includes(filters, "port") && item instanceof PortModel_1.PortModel) {
                    return true;
                }
                if (_.includes(filters, "point") && item instanceof PointModel_1.PointModel) {
                    return true;
                }
                return false;
            });
        }
        return items;
    };
    DiagramModel.prototype.setZoomLevel = function (zoom) {
        this.zoom = zoom;
        this.iterateListeners(function (listener, event) {
            listener.zoomUpdated && listener.zoomUpdated(__assign({}, event, { zoom: zoom }));
        });
    };
    DiagramModel.prototype.setOffset = function (offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.iterateListeners(function (listener, event) {
            listener.offsetUpdated && listener.offsetUpdated(__assign({}, event, { offsetX: offsetX, offsetY: offsetY }));
        });
    };
    DiagramModel.prototype.setOffsetX = function (offsetX) {
        var _this = this;
        this.offsetX = offsetX;
        this.iterateListeners(function (listener, event) {
            listener.offsetUpdated && listener.offsetUpdated(__assign({}, event, { offsetX: offsetX, offsetY: _this.offsetY }));
        });
    };
    DiagramModel.prototype.setOffsetY = function (offsetY) {
        var _this = this;
        this.offsetY = offsetY;
        this.iterateListeners(function (listener, event) {
            listener.offsetUpdated &&
                listener.offsetUpdated(__assign({}, event, { offsetX: _this.offsetX, offsetY: _this.offsetY }));
        });
    };
    DiagramModel.prototype.getOffsetY = function () {
        return this.offsetY;
    };
    DiagramModel.prototype.getOffsetX = function () {
        return this.offsetX;
    };
    DiagramModel.prototype.getZoomLevel = function () {
        return this.zoom;
    };
    DiagramModel.prototype.getNode = function (node) {
        if (node instanceof NodeModel_1.NodeModel) {
            return node;
        }
        if (!this.nodes[node]) {
            return null;
        }
        return this.nodes[node];
    };
    DiagramModel.prototype.getLink = function (link) {
        if (link instanceof LinkModel_1.LinkModel) {
            return link;
        }
        if (!this.links[link]) {
            return null;
        }
        return this.links[link];
    };
    DiagramModel.prototype.addLink = function (link) {
        var _this = this;
        link.addListener({
            entityRemoved: function () {
                _this.removeLink(link);
            }
        });
        this.links[link.getID()] = link;
        this.iterateListeners(function (listener, event) {
            listener.linksUpdated && listener.linksUpdated(__assign({}, event, { link: link, isCreated: true }));
        });
        return link;
    };
    DiagramModel.prototype.addNode = function (node) {
        var _this = this;
        node.addListener({
            entityRemoved: function () {
                _this.removeNode(node);
            }
        });
        this.nodes[node.getID()] = node;
        this.iterateListeners(function (listener, event) {
            listener.nodesUpdated && listener.nodesUpdated(__assign({}, event, { node: node, isCreated: true }));
        });
        return node;
    };
    DiagramModel.prototype.removeLink = function (link) {
        link = this.getLink(link);
        delete this.links[link.getID()];
        this.iterateListeners(function (listener, event) {
            listener.linksUpdated && listener.linksUpdated(__assign({}, event, { link: link, isCreated: false }));
        });
    };
    DiagramModel.prototype.removeNode = function (node) {
        node = this.getNode(node);
        delete this.nodes[node.getID()];
        this.iterateListeners(function (listener, event) {
            listener.nodesUpdated && listener.nodesUpdated(__assign({}, event, { node: node, isCreated: false }));
        });
    };
    DiagramModel.prototype.getLinks = function () {
        return this.links;
    };
    DiagramModel.prototype.getNodes = function () {
        return this.nodes;
    };
    return DiagramModel;
}(BaseEntity_1.BaseEntity));
exports.DiagramModel = DiagramModel;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Dylan Vorster
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
//export defaults
__export(__webpack_require__(23));
__export(__webpack_require__(12));
__export(__webpack_require__(26));
__export(__webpack_require__(14));
__export(__webpack_require__(13));
__export(__webpack_require__(17));
__export(__webpack_require__(15));
__export(__webpack_require__(7));
__export(__webpack_require__(9));
__export(__webpack_require__(27));
__export(__webpack_require__(10));
__export(__webpack_require__(5));
__export(__webpack_require__(18));
__export(__webpack_require__(3));
__export(__webpack_require__(10));
__export(__webpack_require__(6));
__export(__webpack_require__(4));
__export(__webpack_require__(2));
__export(__webpack_require__(8));
__export(__webpack_require__(29));
__export(__webpack_require__(19));
__export(__webpack_require__(20));
__export(__webpack_require__(21));
__export(__webpack_require__(22));
__export(__webpack_require__(16));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var PointModel_1 = __webpack_require__(2);
/**
 * @author Dylan Vorster
 */
var DefaultLinkWidget = /** @class */ (function (_super) {
    __extends(DefaultLinkWidget, _super);
    function DefaultLinkWidget(props) {
        var _this = _super.call(this, props) || this;
        _this.addPointToLink = function (event, index) {
            if (!event.shiftKey &&
                !_this.props.diagramEngine.isModelLocked(_this.props.link) &&
                _this.props.link.points.length - 1 <= _this.props.diagramEngine.getMaxNumberPointsPerLink()) {
                var point = new PointModel_1.PointModel(_this.props.link, _this.props.diagramEngine.getRelativeMousePoint(event));
                point.setSelected(true);
                _this.forceUpdate();
                _this.props.link.addPoint(point, index);
                _this.props.pointAdded(point, event);
            }
        };
        _this.findPathAndRelativePositionToRenderLabel = function () {
            // an array to hold all path lengths, making sure we hit the DOM only once to fetch this information
            var lengths = _this.refPaths.map(function (path) { return path.getTotalLength(); });
            // calculate the point where we want to display the label
            var labelPosition = lengths.reduce(function (previousValue, currentValue) { return previousValue + currentValue; }, 0) / 2;
            // find the path where the label will be rendered and calculate the relative position
            var pathIndex = 0;
            while (pathIndex < _this.refPaths.length) {
                if (labelPosition - lengths[pathIndex] < 0) {
                    return {
                        path: _this.refPaths[pathIndex],
                        position: labelPosition
                    };
                }
                // keep searching
                labelPosition -= lengths[pathIndex];
                pathIndex++;
            }
        };
        _this.calculateLabelPosition = function () {
            if (!_this.refLabel) {
                // no label? nothing to do here
                return;
            }
            var _a = _this.findPathAndRelativePositionToRenderLabel(), path = _a.path, position = _a.position;
            var labelDimensions = {
                width: _this.refLabel.offsetWidth,
                height: _this.refLabel.offsetHeight
            };
            var pathCentre = path.getPointAtLength(position);
            var labelCoordinates = {
                x: pathCentre.x - labelDimensions.width / 2,
                y: pathCentre.y - labelDimensions.height / 2
            };
            _this.refLabel.setAttribute("style", "transform: translate(" + labelCoordinates.x + "px, " + labelCoordinates.y + "px);");
        };
        _this.state = {
            selected: false
        };
        return _this;
    }
    DefaultLinkWidget.prototype.generatePoint = function (pointIndex) {
        var _this = this;
        var x = this.props.link.points[pointIndex].x;
        var y = this.props.link.points[pointIndex].y;
        return (React.createElement("g", { key: "point-" + this.props.link.points[pointIndex].id },
            React.createElement("circle", { cx: x, cy: y, r: 5, className: "point pointui" + (this.props.link.points[pointIndex].isSelected() ? " selected" : "") }),
            React.createElement("circle", { onMouseLeave: function () {
                    _this.setState({ selected: false });
                }, onMouseEnter: function () {
                    _this.setState({ selected: true });
                }, "data-id": this.props.link.points[pointIndex].id, "data-linkid": this.props.link.id, cx: x, cy: y, r: 15, opacity: 0, className: "point" })));
    };
    DefaultLinkWidget.prototype.generateLink = function (extraProps, id) {
        var _this = this;
        var props = this.props;
        var Bottom = (React.createElement("path", __assign({ className: this.state.selected || this.props.link.isSelected() ? "selected" : "", strokeWidth: props.width, stroke: props.color, ref: function (path) { return path && _this.refPaths.push(path); } }, extraProps)));
        var Top = (React.createElement("path", __assign({ strokeLinecap: "round", onMouseLeave: function () {
                _this.setState({ selected: false });
            }, onMouseEnter: function () {
                _this.setState({ selected: true });
            }, "data-linkid": this.props.link.getID(), stroke: props.color, strokeOpacity: this.state.selected ? 0.1 : 0, strokeWidth: 20, onContextMenu: function () {
                if (!_this.props.diagramEngine.isModelLocked(_this.props.link)) {
                    event.preventDefault();
                    _this.props.link.remove();
                }
            } }, extraProps)));
        return (React.createElement("g", { key: "link-" + id },
            Bottom,
            Top));
    };
    DefaultLinkWidget.prototype.generateLabel = function () {
        var _this = this;
        var canvas = this.props.diagramEngine.canvas;
        return (React.createElement("foreignObject", { className: "link-label", width: canvas.offsetWidth, height: canvas.offsetHeight },
            React.createElement("div", { ref: function (label) { return (_this.refLabel = label); } }, this.props.link.label)));
    };
    DefaultLinkWidget.prototype.componentDidUpdate = function () {
        window.requestAnimationFrame(this.calculateLabelPosition);
    };
    DefaultLinkWidget.prototype.componentDidMount = function () {
        window.requestAnimationFrame(this.calculateLabelPosition);
    };
    DefaultLinkWidget.prototype.generateLinePath = function (firstPoint, lastPoint) {
        return "M" + firstPoint.x + "," + firstPoint.y + " L " + lastPoint.x + "," + lastPoint.y;
    };
    DefaultLinkWidget.prototype.generateCurvePath = function (firstPoint, lastPoint, firstPointDelta, lastPointDelta) {
        if (firstPointDelta === void 0) { firstPointDelta = 0; }
        if (lastPointDelta === void 0) { lastPointDelta = 0; }
        return "M" + firstPoint.x + "," + firstPoint.y + " C " + (firstPoint.x + firstPointDelta) + "," + firstPoint.y + " " + (lastPoint.x +
            lastPointDelta) + "," + lastPoint.y + " " + lastPoint.x + "," + lastPoint.y;
    };
    DefaultLinkWidget.prototype.render = function () {
        var _this = this;
        //ensure id is present for all points on the path
        var points = this.props.link.points;
        var paths = [];
        var model = this.props.diagramEngine.getDiagramModel();
        //draw the smoothing
        if (points.length === 2) {
            //if the points are too close, just draw a straight line
            var margin = 50;
            if (Math.abs(points[0].x - points[1].x) < 50) {
                margin = 5;
            }
            var pointLeft = points[0];
            var pointRight = points[1];
            //some defensive programming to make sure the smoothing is
            //always in the right direction
            if (pointLeft.x > pointRight.x) {
                pointLeft = points[1];
                pointRight = points[0];
            }
            paths.push(this.generateLink({
                onMouseDown: function (event) {
                    _this.addPointToLink(event, 1);
                },
                d: this.generateCurvePath(pointLeft, pointRight, margin, -margin)
            }, "0"));
            if (this.props.link.targetPort === null) {
                paths.push(this.generatePoint(1));
            }
        }
        else {
            //draw the multiple anchors and complex line instead
            var ds = [];
            if (this.props.smooth) {
                ds.push(this.generateCurvePath(points[0], points[1], 50, 0));
                for (var i = 1; i < points.length - 2; i++) {
                    ds.push(this.generateLinePath(points[i], points[i + 1]));
                }
                ds.push(this.generateCurvePath(points[i], points[i + 1], 0, -50));
            }
            else {
                var ds = [];
                for (var i = 0; i < points.length - 1; i++) {
                    ds.push(this.generateLinePath(points[i], points[i + 1]));
                }
            }
            paths = ds.map(function (data, index) {
                return _this.generateLink({
                    "data-linkid": _this.props.link.id,
                    "data-point": index,
                    onMouseDown: function (event) {
                        _this.addPointToLink(event, index + 1);
                    },
                    d: data
                }, index);
            });
            //render the circles
            for (var i = 1; i < points.length - 1; i++) {
                paths.push(this.generatePoint(i));
            }
            if (this.props.link.targetPort === null) {
                paths.push(this.generatePoint(points.length - 1));
            }
        }
        // ensure we have the right references when a redraw occurs
        this.refLabel = null;
        this.refPaths = [];
        return (React.createElement("g", null,
            paths,
            this.props.link.label && this.generateLabel()));
    };
    DefaultLinkWidget.defaultProps = {
        color: "black",
        width: 3,
        link: null,
        engine: null,
        smooth: false,
        diagramEngine: null
    };
    return DefaultLinkWidget;
}(React.Component));
exports.DefaultLinkWidget = DefaultLinkWidget;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(0);
var NodeModel_1 = __webpack_require__(4);
/**
 * @author Dylan Vorster
 */
var DefaultNodeModel = /** @class */ (function (_super) {
    __extends(DefaultNodeModel, _super);
    function DefaultNodeModel(name, color) {
        if (name === void 0) { name = "Untitled"; }
        if (color === void 0) { color = "rgb(0,192,255)"; }
        var _this = _super.call(this, "default") || this;
        _this.name = name;
        _this.color = color;
        return _this;
    }
    DefaultNodeModel.prototype.deSerialize = function (object) {
        _super.prototype.deSerialize.call(this, object);
        this.name = object.name;
        this.color = object.color;
    };
    DefaultNodeModel.prototype.serialize = function () {
        return _.merge(_super.prototype.serialize.call(this), {
            name: this.name,
            color: this.color
        });
    };
    DefaultNodeModel.prototype.getInPorts = function () {
        return _.filter(this.ports, function (portModel) {
            return portModel.in;
        });
    };
    DefaultNodeModel.prototype.getOutPorts = function () {
        return _.filter(this.ports, function (portModel) {
            return !portModel.in;
        });
    };
    return DefaultNodeModel;
}(NodeModel_1.NodeModel));
exports.DefaultNodeModel = DefaultNodeModel;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var _ = __webpack_require__(0);
var DefaultPortLabelWidget_1 = __webpack_require__(15);
/**
 * @author Dylan Vorster
 */
var DefaultNodeWidget = /** @class */ (function (_super) {
    __extends(DefaultNodeWidget, _super);
    function DefaultNodeWidget(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    DefaultNodeWidget.prototype.generatePort = function (port) {
        return React.createElement(DefaultPortLabelWidget_1.DefaultPortLabel, { model: port, key: port.id });
    };
    DefaultNodeWidget.prototype.render = function () {
        return (React.createElement("div", { className: "basic-node", style: { background: this.props.node.color } },
            React.createElement("div", { className: "title" },
                React.createElement("div", { className: "name" }, this.props.node.name)),
            React.createElement("div", { className: "ports" },
                React.createElement("div", { className: "in" }, _.map(this.props.node.getInPorts(), this.generatePort.bind(this))),
                React.createElement("div", { className: "out" }, _.map(this.props.node.getOutPorts(), this.generatePort.bind(this))))));
    };
    return DefaultNodeWidget;
}(React.Component));
exports.DefaultNodeWidget = DefaultNodeWidget;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var PortWidget_1 = __webpack_require__(16);
/**
 * @author Dylan Vorster
 */
var DefaultPortLabel = /** @class */ (function (_super) {
    __extends(DefaultPortLabel, _super);
    function DefaultPortLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultPortLabel.prototype.render = function () {
        var port = React.createElement(PortWidget_1.PortWidget, { node: this.props.model.getParent(), name: this.props.model.name });
        var label = React.createElement("div", { className: "name" }, this.props.model.label);
        return (React.createElement("div", { className: (this.props.model.in ? "in" : "out") + "-port" },
            this.props.model.in ? port : label,
            this.props.model.in ? label : port));
    };
    DefaultPortLabel.defaultProps = {
        in: true,
        label: "port"
    };
    return DefaultPortLabel;
}(React.Component));
exports.DefaultPortLabel = DefaultPortLabel;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
/**
 * @author Dylan Vorster
 */
var PortWidget = /** @class */ (function (_super) {
    __extends(PortWidget, _super);
    function PortWidget(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            selected: false
        };
        return _this;
    }
    PortWidget.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { onMouseEnter: function () {
                _this.setState({ selected: true });
            }, onMouseLeave: function () {
                _this.setState({ selected: false });
            }, className: "port" + (this.state.selected ? " selected" : ""), "data-name": this.props.name, "data-nodeid": this.props.node.getID() }));
    };
    return PortWidget;
}(React.Component));
exports.PortWidget = PortWidget;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(0);
var PortModel_1 = __webpack_require__(8);
/**
 * @author Dylan Vorster
 */
var DefaultPortModel = /** @class */ (function (_super) {
    __extends(DefaultPortModel, _super);
    function DefaultPortModel(isInput, name, label, id) {
        if (label === void 0) { label = null; }
        var _this = _super.call(this, name, "default", id) || this;
        _this.in = isInput;
        _this.label = label || name;
        return _this;
    }
    DefaultPortModel.prototype.deSerialize = function (object) {
        _super.prototype.deSerialize.call(this, object);
        this.in = object.in;
        this.label = object.label;
    };
    DefaultPortModel.prototype.serialize = function () {
        return _.merge(_super.prototype.serialize.call(this), {
            in: this.in,
            label: this.label
        });
    };
    return DefaultPortModel;
}(PortModel_1.PortModel));
exports.DefaultPortModel = DefaultPortModel;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseAction = /** @class */ (function () {
    function BaseAction(mouseX, mouseY) {
        this.mouseX = mouseX;
        this.mouseY = mouseY;
        this.ms = new Date().getTime();
    }
    return BaseAction;
}());
exports.BaseAction = BaseAction;
var SelectingAction = /** @class */ (function (_super) {
    __extends(SelectingAction, _super);
    function SelectingAction(mouseX, mouseY) {
        var _this = _super.call(this, mouseX, mouseY) || this;
        _this.mouseX2 = mouseX;
        _this.mouseY2 = mouseY;
        return _this;
    }
    SelectingAction.prototype.getBoxDimensions = function () {
        return {
            left: this.mouseX2 > this.mouseX ? this.mouseX : this.mouseX2,
            top: this.mouseY2 > this.mouseY ? this.mouseY : this.mouseY2,
            width: Math.abs(this.mouseX2 - this.mouseX),
            height: Math.abs(this.mouseY2 - this.mouseY),
            right: this.mouseX2 < this.mouseX ? this.mouseX : this.mouseX2,
            bottom: this.mouseY2 < this.mouseY ? this.mouseY : this.mouseY2
        };
    };
    SelectingAction.prototype.containsElement = function (x, y, diagramModel) {
        var z = diagramModel.getZoomLevel() / 100.0;
        var dimensions = this.getBoxDimensions();
        return (x * z + diagramModel.getOffsetX() > dimensions.left &&
            x * z + diagramModel.getOffsetX() < dimensions.right &&
            y * z + diagramModel.getOffsetY() > dimensions.top &&
            y * z + diagramModel.getOffsetY() < dimensions.bottom);
    };
    return SelectingAction;
}(BaseAction));
exports.SelectingAction = SelectingAction;
var MoveCanvasAction = /** @class */ (function (_super) {
    __extends(MoveCanvasAction, _super);
    function MoveCanvasAction(mouseX, mouseY, diagramModel) {
        var _this = _super.call(this, mouseX, mouseY) || this;
        _this.initialOffsetX = diagramModel.getOffsetX();
        _this.initialOffsetY = diagramModel.getOffsetY();
        return _this;
    }
    return MoveCanvasAction;
}(BaseAction));
exports.MoveCanvasAction = MoveCanvasAction;
var MoveItemsAction = /** @class */ (function (_super) {
    __extends(MoveItemsAction, _super);
    function MoveItemsAction(mouseX, mouseY, diagramEngine) {
        var _this = _super.call(this, mouseX, mouseY) || this;
        _this.moved = false;
        diagramEngine.enableRepaintEntities(diagramEngine.getDiagramModel().getSelectedItems());
        var selectedItems = diagramEngine.getDiagramModel().getSelectedItems();
        //dont allow items which are locked to move
        selectedItems = selectedItems.filter(function (item) {
            return !diagramEngine.isModelLocked(item);
        });
        _this.selectionModels = selectedItems.map(function (item) {
            return {
                model: item,
                initialX: item.x,
                initialY: item.y
            };
        });
        return _this;
    }
    return MoveItemsAction;
}(BaseAction));
exports.MoveItemsAction = MoveItemsAction;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var LinkWidget_1 = __webpack_require__(20);
var _ = __webpack_require__(0);
/**
 * @author Dylan Vorster
 */
var LinkLayerWidget = /** @class */ (function (_super) {
    __extends(LinkLayerWidget, _super);
    function LinkLayerWidget(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    LinkLayerWidget.prototype.render = function () {
        var _this = this;
        var diagramModel = this.props.diagramEngine.getDiagramModel();
        return (React.createElement("svg", { style: {
                transform: "translate(" +
                    diagramModel.getOffsetX() +
                    "px," +
                    diagramModel.getOffsetY() +
                    "px) scale(" +
                    diagramModel.getZoomLevel() / 100.0 +
                    ")",
                width: "100%",
                height: "100%"
            } }, //only perform these actions when we have a diagram
        this.props.diagramEngine.canvas &&
            _.map(diagramModel.getLinks(), function (link) {
                if (_this.props.diagramEngine.nodesRendered &&
                    !_this.props.diagramEngine.linksThatHaveInitiallyRendered[link.id]) {
                    if (link.sourcePort !== null) {
                        try {
                            link.points[0].updateLocation(_this.props.diagramEngine.getPortCenter(link.sourcePort));
                            _this.props.diagramEngine.linksThatHaveInitiallyRendered[link.id] = true;
                        }
                        catch (ex) { }
                    }
                    if (link.targetPort !== null) {
                        try {
                            _.last(link.points).updateLocation(_this.props.diagramEngine.getPortCenter(link.targetPort));
                            _this.props.diagramEngine.linksThatHaveInitiallyRendered[link.id] = true;
                        }
                        catch (ex) { }
                    }
                }
                //generate links
                var generatedLink = _this.props.diagramEngine.generateWidgetForLink(link);
                if (!generatedLink) {
                    console.log("no link generated for type: " + link.getType());
                    return null;
                }
                return (React.createElement(LinkWidget_1.LinkWidget, { key: link.getID(), link: link, diagramEngine: _this.props.diagramEngine }, React.cloneElement(generatedLink, {
                    pointAdded: _this.props.pointAdded
                })));
            })));
    };
    return LinkLayerWidget;
}(React.Component));
exports.LinkLayerWidget = LinkLayerWidget;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
/**
 * @author Dylan Vorster
 */
var LinkWidget = /** @class */ (function (_super) {
    __extends(LinkWidget, _super);
    function LinkWidget(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    LinkWidget.prototype.shouldComponentUpdate = function () {
        return this.props.diagramEngine.canEntityRepaint(this.props.link);
    };
    LinkWidget.prototype.render = function () {
        return this.props.children;
    };
    return LinkWidget;
}(React.Component));
exports.LinkWidget = LinkWidget;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var _ = __webpack_require__(0);
var NodeWidget_1 = __webpack_require__(22);
/**
 * @author Dylan Vorster
 */
var NodeLayerWidget = /** @class */ (function (_super) {
    __extends(NodeLayerWidget, _super);
    function NodeLayerWidget(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    NodeLayerWidget.prototype.componentDidUpdate = function () {
        this.props.diagramEngine.nodesRendered = true;
    };
    NodeLayerWidget.prototype.render = function () {
        var _this = this;
        var diagramModel = this.props.diagramEngine.getDiagramModel();
        return (React.createElement("div", { className: "node-view", style: {
                transform: "translate(" +
                    diagramModel.getOffsetX() +
                    "px," +
                    diagramModel.getOffsetY() +
                    "px) scale(" +
                    diagramModel.getZoomLevel() / 100.0 +
                    ")",
                width: "100%",
                height: "100%"
            } }, _.map(diagramModel.getNodes(), function (node) {
            return React.createElement(NodeWidget_1.NodeWidget, {
                diagramEngine: _this.props.diagramEngine,
                key: node.id,
                node: node
            }, _this.props.diagramEngine.generateWidgetForNode(node));
        })));
    };
    return NodeLayerWidget;
}(React.Component));
exports.NodeLayerWidget = NodeLayerWidget;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
/**
 * @author Dylan Vorster
 */
var NodeWidget = /** @class */ (function (_super) {
    __extends(NodeWidget, _super);
    function NodeWidget(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    NodeWidget.prototype.shouldComponentUpdate = function () {
        return this.props.diagramEngine.canEntityRepaint(this.props.node);
    };
    NodeWidget.prototype.render = function () {
        return (React.createElement("div", { "data-nodeid": this.props.node.id, className: "node" + (this.props.node.isSelected() ? " selected" : ""), style: {
                top: this.props.node.y,
                left: this.props.node.x
            } }, this.props.children));
    };
    return NodeWidget;
}(React.Component));
exports.NodeWidget = NodeWidget;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var DefaultLinkWidget_1 = __webpack_require__(12);
var LinkModel_1 = __webpack_require__(6);
var AbstractFactory_1 = __webpack_require__(7);
/**
 * @author Dylan Vorster
 */
var DefaultLinkFactory = /** @class */ (function (_super) {
    __extends(DefaultLinkFactory, _super);
    function DefaultLinkFactory() {
        return _super.call(this, "default") || this;
    }
    DefaultLinkFactory.prototype.generateReactWidget = function (diagramEngine, link) {
        return React.createElement(DefaultLinkWidget_1.DefaultLinkWidget, {
            link: link,
            diagramEngine: diagramEngine
        });
    };
    DefaultLinkFactory.prototype.getNewInstance = function (initialConfig) {
        return new LinkModel_1.LinkModel();
    };
    return DefaultLinkFactory;
}(AbstractFactory_1.LinkFactory));
exports.DefaultLinkFactory = DefaultLinkFactory;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var matches = __webpack_require__(25)

module.exports = function (element, selector, checkYoSelf) {
  var parent = checkYoSelf ? element : element.parentNode

  while (parent && parent !== document) {
    if (matches(parent, selector)) return parent;
    parent = parent.parentNode
  }
}


/***/ }),
/* 25 */
/***/ (function(module, exports) {


/**
 * Element prototype.
 */

var proto = Element.prototype;

/**
 * Vendor function.
 */

var vendor = proto.matchesSelector
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

/**
 * Expose `match()`.
 */

module.exports = match;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {
  if (vendor) return vendor.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);
  for (var i = 0; i < nodes.length; ++i) {
    if (nodes[i] == el) return true;
  }
  return false;
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultNodeModel_1 = __webpack_require__(13);
var React = __webpack_require__(1);
var DefaultNodeWidget_1 = __webpack_require__(14);
var AbstractFactory_1 = __webpack_require__(7);
/**
 * @author Dylan Vorster
 */
var DefaultNodeFactory = /** @class */ (function (_super) {
    __extends(DefaultNodeFactory, _super);
    function DefaultNodeFactory() {
        return _super.call(this, "default") || this;
    }
    DefaultNodeFactory.prototype.generateReactWidget = function (diagramEngine, node) {
        return React.createElement(DefaultNodeWidget_1.DefaultNodeWidget, {
            node: node,
            diagramEngine: diagramEngine
        });
    };
    DefaultNodeFactory.prototype.getNewInstance = function (initialConfig) {
        return new DefaultNodeModel_1.DefaultNodeModel();
    };
    return DefaultNodeFactory;
}(AbstractFactory_1.NodeFactory));
exports.DefaultNodeFactory = DefaultNodeFactory;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseEntity_1 = __webpack_require__(5);
var DiagramModel_1 = __webpack_require__(10);
var _ = __webpack_require__(0);
var NodeModel_1 = __webpack_require__(4);
var PointModel_1 = __webpack_require__(2);
var main_1 = __webpack_require__(11);
var DefaultPortFactory_1 = __webpack_require__(28);
/**
 * Passed as a parameter to the DiagramWidget
 */
var DiagramEngine = /** @class */ (function (_super) {
    __extends(DiagramEngine, _super);
    function DiagramEngine() {
        var _this = _super.call(this) || this;
        _this.diagramModel = new DiagramModel_1.DiagramModel();
        _this.nodeFactories = {};
        _this.linkFactories = {};
        _this.portFactories = {};
        _this.canvas = null;
        _this.paintableWidgets = null;
        _this.linksThatHaveInitiallyRendered = {};
        return _this;
    }
    DiagramEngine.prototype.installDefaultFactories = function () {
        this.registerNodeFactory(new main_1.DefaultNodeFactory());
        this.registerLinkFactory(new main_1.DefaultLinkFactory());
        this.registerPortFactory(new DefaultPortFactory_1.DefaultPortFactory());
    };
    DiagramEngine.prototype.repaintCanvas = function () {
        this.iterateListeners(function (listener) {
            listener.repaintCanvas && listener.repaintCanvas();
        });
    };
    DiagramEngine.prototype.clearRepaintEntities = function () {
        this.paintableWidgets = null;
    };
    DiagramEngine.prototype.enableRepaintEntities = function (entities) {
        var _this = this;
        this.paintableWidgets = {};
        entities.forEach(function (entity) {
            //if a node is requested to repaint, add all of its links
            if (entity instanceof NodeModel_1.NodeModel) {
                _.forEach(entity.getPorts(), function (port) {
                    _.forEach(port.getLinks(), function (link) {
                        _this.paintableWidgets[link.getID()] = true;
                    });
                });
            }
            if (entity instanceof PointModel_1.PointModel) {
                _this.paintableWidgets[entity.getLink().getID()] = true;
            }
            _this.paintableWidgets[entity.getID()] = true;
        });
    };
    /**
     * Checks to see if a model is locked by running through
     * its parents to see if they are locked first
     */
    DiagramEngine.prototype.isModelLocked = function (model) {
        //always check the diagram model
        if (this.diagramModel.isLocked()) {
            return true;
        }
        return model.isLocked();
    };
    DiagramEngine.prototype.recalculatePortsVisually = function () {
        this.nodesRendered = false;
        this.linksThatHaveInitiallyRendered = {};
    };
    DiagramEngine.prototype.canEntityRepaint = function (baseModel) {
        //no rules applied, allow repaint
        if (this.paintableWidgets === null) {
            return true;
        }
        return this.paintableWidgets[baseModel.getID()] !== undefined;
    };
    DiagramEngine.prototype.setCanvas = function (canvas) {
        this.canvas = canvas;
    };
    DiagramEngine.prototype.setDiagramModel = function (model) {
        this.diagramModel = model;
        this.recalculatePortsVisually();
    };
    DiagramEngine.prototype.getDiagramModel = function () {
        return this.diagramModel;
    };
    DiagramEngine.prototype.getNodeFactories = function () {
        return this.nodeFactories;
    };
    DiagramEngine.prototype.getLinkFactories = function () {
        return this.linkFactories;
    };
    DiagramEngine.prototype.registerPortFactory = function (factory) {
        this.portFactories[factory.getType()] = factory;
        this.iterateListeners(function (listener) {
            if (listener.portFactoriesUpdated) {
                listener.portFactoriesUpdated();
            }
        });
    };
    DiagramEngine.prototype.registerNodeFactory = function (factory) {
        this.nodeFactories[factory.getType()] = factory;
        this.iterateListeners(function (listener) {
            if (listener.nodeFactoriesUpdated) {
                listener.nodeFactoriesUpdated();
            }
        });
    };
    DiagramEngine.prototype.registerLinkFactory = function (factory) {
        this.linkFactories[factory.getType()] = factory;
        this.iterateListeners(function (listener) {
            if (listener.linkFactoriesUpdated) {
                listener.linkFactoriesUpdated();
            }
        });
    };
    DiagramEngine.prototype.getPortFactory = function (type) {
        if (this.portFactories[type]) {
            return this.portFactories[type];
        }
        console.log("cannot find factory for port of type: [" + type + "]");
        return null;
    };
    DiagramEngine.prototype.getNodeFactory = function (type) {
        if (this.nodeFactories[type]) {
            return this.nodeFactories[type];
        }
        console.log("cannot find factory for node of type: [" + type + "]");
        return null;
    };
    DiagramEngine.prototype.getLinkFactory = function (type) {
        if (this.linkFactories[type]) {
            return this.linkFactories[type];
        }
        console.log("cannot find factory for link of type: [" + type + "]");
        return null;
    };
    DiagramEngine.prototype.getFactoryForNode = function (node) {
        return this.getNodeFactory(node.getType());
    };
    DiagramEngine.prototype.getFactoryForLink = function (link) {
        return this.getLinkFactory(link.getType());
    };
    DiagramEngine.prototype.generateWidgetForLink = function (link) {
        var linkFactory = this.getFactoryForLink(link);
        if (!linkFactory) {
            throw new Error("Cannot find link factory for link: " + link.getType());
        }
        return linkFactory.generateReactWidget(this, link);
    };
    DiagramEngine.prototype.generateWidgetForNode = function (node) {
        var nodeFactory = this.getFactoryForNode(node);
        if (!nodeFactory) {
            throw new Error("Cannot find widget factory for node: " + node.getType());
        }
        return nodeFactory.generateReactWidget(this, node);
    };
    DiagramEngine.prototype.getRelativeMousePoint = function (event) {
        var point = this.getRelativePoint(event.clientX, event.clientY);
        return {
            x: (point.x - this.diagramModel.getOffsetX()) / (this.diagramModel.getZoomLevel() / 100.0),
            y: (point.y - this.diagramModel.getOffsetY()) / (this.diagramModel.getZoomLevel() / 100.0)
        };
    };
    DiagramEngine.prototype.getRelativePoint = function (x, y) {
        var canvasRect = this.canvas.getBoundingClientRect();
        return { x: x - canvasRect.left, y: y - canvasRect.top };
    };
    DiagramEngine.prototype.getNodePortElement = function (port) {
        var selector = this.canvas.querySelector('.port[data-name="' + port.getName() + '"][data-nodeid="' + port.getParent().getID() + '"]');
        if (selector === null) {
            throw new Error("Cannot find Node Port element with nodeID: [" +
                port.getParent().getID() +
                "] and name: [" +
                port.getName() +
                "]");
        }
        return selector;
    };
    DiagramEngine.prototype.getPortCenter = function (port) {
        var sourceElement = this.getNodePortElement(port);
        var sourceRect = sourceElement.getBoundingClientRect();
        var rel = this.getRelativePoint(sourceRect.left, sourceRect.top);
        return {
            x: sourceElement.offsetWidth / 2 +
                (rel.x - this.diagramModel.getOffsetX()) / (this.diagramModel.getZoomLevel() / 100.0),
            y: sourceElement.offsetHeight / 2 +
                (rel.y - this.diagramModel.getOffsetY()) / (this.diagramModel.getZoomLevel() / 100.0)
        };
    };
    DiagramEngine.prototype.getMaxNumberPointsPerLink = function () {
        return this.maxNumberPointsPerLink;
    };
    DiagramEngine.prototype.setMaxNumberPointsPerLink = function (max) {
        this.maxNumberPointsPerLink = max;
    };
    DiagramEngine.prototype.zoomToFit = function () {
        var xFactor = this.canvas.clientWidth / this.canvas.scrollWidth;
        var yFactor = this.canvas.clientHeight / this.canvas.scrollHeight;
        var zoomFactor = xFactor < yFactor ? xFactor : yFactor;
        this.diagramModel.setZoomLevel(this.diagramModel.getZoomLevel() * zoomFactor);
        this.diagramModel.setOffset(0, 0);
        this.repaintCanvas();
    };
    return DiagramEngine;
}(BaseEntity_1.BaseEntity));
exports.DiagramEngine = DiagramEngine;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultPortModel_1 = __webpack_require__(17);
var AbstractFactory_1 = __webpack_require__(7);
var DefaultPortFactory = /** @class */ (function (_super) {
    __extends(DefaultPortFactory, _super);
    function DefaultPortFactory() {
        return _super.call(this, "default") || this;
    }
    DefaultPortFactory.prototype.getNewInstance = function (initialConfig) {
        return new DefaultPortModel_1.DefaultPortModel(true, "unknown");
    };
    return DefaultPortFactory;
}(AbstractFactory_1.PortFactory));
exports.DefaultPortFactory = DefaultPortFactory;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var _ = __webpack_require__(0);
var LinkLayerWidget_1 = __webpack_require__(19);
var NodeLayerWidget_1 = __webpack_require__(21);
var Toolkit_1 = __webpack_require__(9);
var CanvasActions_1 = __webpack_require__(18);
var NodeModel_1 = __webpack_require__(4);
var PointModel_1 = __webpack_require__(2);
var PortModel_1 = __webpack_require__(8);
/**
 * @author Dylan Vorster
 */
var DiagramWidget = /** @class */ (function (_super) {
    __extends(DiagramWidget, _super);
    function DiagramWidget(props) {
        var _this = _super.call(this, props) || this;
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);
        _this.state = {
            action: null,
            wasMoved: false,
            renderedNodes: false,
            windowListener: null,
            diagramEngineListener: null,
            document: null
        };
        return _this;
    }
    DiagramWidget.prototype.componentWillUnmount = function () {
        this.props.diagramEngine.removeListener(this.state.diagramEngineListener);
        this.props.diagramEngine.setCanvas(null);
        window.removeEventListener("keyup", this.onKeyUpPointer);
        window.removeEventListener("mouseUp", this.onMouseUp);
        window.removeEventListener("mouseMove", this.onMouseMove);
    };
    DiagramWidget.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if (this.props.diagramEngine !== nextProps.diagramEngine) {
            this.props.diagramEngine.removeListener(this.state.diagramEngineListener);
            var diagramEngineListener = nextProps.diagramEngine.addListener({
                repaintCanvas: function () { return _this.forceUpdate(); }
            });
            this.setState({ diagramEngineListener: diagramEngineListener });
        }
    };
    DiagramWidget.prototype.componentWillUpdate = function (nextProps) {
        if (this.props.diagramEngine.diagramModel.id !== nextProps.diagramEngine.diagramModel.id) {
            this.setState({ renderedNodes: false });
            nextProps.diagramEngine.diagramModel.rendered = true;
        }
        if (!nextProps.diagramEngine.diagramModel.rendered) {
            this.setState({ renderedNodes: false });
            nextProps.diagramEngine.diagramModel.rendered = true;
        }
    };
    DiagramWidget.prototype.componentDidUpdate = function () {
        if (!this.state.renderedNodes) {
            this.setState({
                renderedNodes: true
            });
        }
    };
    DiagramWidget.prototype.componentDidMount = function () {
        var _this = this;
        this.onKeyUpPointer = this.onKeyUp.bind(this);
        //add a keyboard listener
        this.setState({
            document: document,
            renderedNodes: true,
            diagramEngineListener: this.props.diagramEngine.addListener({
                repaintCanvas: function () {
                    _this.forceUpdate();
                }
            })
        });
        window.addEventListener("keyup", this.onKeyUpPointer, false);
        // dont focus the window when in test mode - jsdom fails
        if (process.env.NODE_ENV !== "test") {
            window.focus();
        }
    };
    /**
     * Gets a model and element under the mouse cursor
     */
    DiagramWidget.prototype.getMouseElement = function (event) {
        var target = event.target;
        var diagramModel = this.props.diagramEngine.diagramModel;
        //is it a port
        var element = Toolkit_1.Toolkit.closest(target, ".port[data-name]");
        if (element) {
            var nodeElement = Toolkit_1.Toolkit.closest(target, ".node[data-nodeid]");
            return {
                model: diagramModel
                    .getNode(nodeElement.getAttribute("data-nodeid"))
                    .getPort(element.getAttribute("data-name")),
                element: element
            };
        }
        //look for a point
        element = Toolkit_1.Toolkit.closest(target, ".point[data-id]");
        if (element) {
            return {
                model: diagramModel
                    .getLink(element.getAttribute("data-linkid"))
                    .getPointModel(element.getAttribute("data-id")),
                element: element
            };
        }
        //look for a link
        element = Toolkit_1.Toolkit.closest(target, "[data-linkid]");
        if (element) {
            return {
                model: diagramModel.getLink(element.getAttribute("data-linkid")),
                element: element
            };
        }
        //look for a node
        element = Toolkit_1.Toolkit.closest(target, ".node[data-nodeid]");
        if (element) {
            return {
                model: diagramModel.getNode(element.getAttribute("data-nodeid")),
                element: element
            };
        }
        return null;
    };
    DiagramWidget.prototype.fireAction = function () {
        if (this.state.action && this.props.actionStillFiring) {
            this.props.actionStillFiring(this.state.action);
        }
    };
    DiagramWidget.prototype.stopFiringAction = function (shouldSkipEvent) {
        if (this.props.actionStoppedFiring && !shouldSkipEvent) {
            this.props.actionStoppedFiring(this.state.action);
        }
        this.setState({ action: null });
    };
    DiagramWidget.prototype.startFiringAction = function (action) {
        var setState = true;
        if (this.props.actionStartedFiring) {
            setState = this.props.actionStartedFiring(action);
        }
        if (setState) {
            this.setState({ action: action });
        }
    };
    DiagramWidget.prototype.onMouseMove = function (event) {
        var _this = this;
        var diagramEngine = this.props.diagramEngine;
        var diagramModel = diagramEngine.getDiagramModel();
        //select items so draw a bounding box
        if (this.state.action instanceof CanvasActions_1.SelectingAction) {
            var relative = diagramEngine.getRelativePoint(event.clientX, event.clientY);
            _.forEach(diagramModel.getNodes(), function (node) {
                if (_this.state.action.containsElement(node.x, node.y, diagramModel)) {
                    node.setSelected(true);
                }
            });
            _.forEach(diagramModel.getLinks(), function (link) {
                var allSelected = true;
                _.forEach(link.points, function (point) {
                    if (_this.state.action.containsElement(point.x, point.y, diagramModel)) {
                        point.setSelected(true);
                    }
                    else {
                        allSelected = false;
                    }
                });
                if (allSelected) {
                    link.setSelected(true);
                }
            });
            this.state.action.mouseX2 = relative.x;
            this.state.action.mouseY2 = relative.y;
            this.fireAction();
            this.setState({ action: this.state.action });
            return;
        }
        else if (this.state.action instanceof CanvasActions_1.MoveItemsAction) {
            var amountX_1 = event.clientX - this.state.action.mouseX;
            var amountY_1 = event.clientY - this.state.action.mouseY;
            var amountZoom_1 = diagramModel.getZoomLevel() / 100;
            _.forEach(this.state.action.selectionModels, function (model) {
                // in this case we need to also work out the relative grid position
                if (model.model instanceof NodeModel_1.NodeModel ||
                    (model.model instanceof PointModel_1.PointModel && !model.model.isConnectedToPort())) {
                    model.model.x = diagramModel.getGridPosition(model.initialX + amountX_1 / amountZoom_1);
                    model.model.y = diagramModel.getGridPosition(model.initialY + amountY_1 / amountZoom_1);
                }
                else if (model.model instanceof PointModel_1.PointModel) {
                    // we want points that are connected to ports, to not neccesarilly snap to grid
                    // this stuff needs to be pixel perfect, dont touch it
                    model.model.x = model.initialX + diagramModel.getGridPosition(amountX_1 / amountZoom_1);
                    model.model.y = model.initialY + diagramModel.getGridPosition(amountY_1 / amountZoom_1);
                }
            });
            this.fireAction();
            if (!this.state.wasMoved) {
                this.setState({ wasMoved: true });
            }
            else {
                this.forceUpdate();
            }
        }
        else if (this.state.action instanceof CanvasActions_1.MoveCanvasAction) {
            //translate the actual canvas
            if (this.props.allowCanvasTranslation) {
                diagramModel.setOffset(this.state.action.initialOffsetX + (event.clientX - this.state.action.mouseX), this.state.action.initialOffsetY + (event.clientY - this.state.action.mouseY));
                this.fireAction();
                this.forceUpdate();
            }
        }
    };
    DiagramWidget.prototype.onKeyUp = function (event) {
        var _this = this;
        //delete all selected
        if (this.props.deleteKeys.indexOf(event.keyCode) !== -1) {
            _.forEach(this.props.diagramEngine.getDiagramModel().getSelectedItems(), function (element) {
                //only delete items which are not locked
                if (!_this.props.diagramEngine.isModelLocked(element)) {
                    element.remove();
                }
            });
            this.forceUpdate();
        }
    };
    DiagramWidget.prototype.onMouseUp = function (event) {
        var _this = this;
        var diagramEngine = this.props.diagramEngine;
        //are we going to connect a link to something?
        if (this.state.action instanceof CanvasActions_1.MoveItemsAction) {
            var element = this.getMouseElement(event);
            var linkConnected = false;
            _.forEach(this.state.action.selectionModels, function (model) {
                //only care about points connecting to things
                if (!(model.model instanceof PointModel_1.PointModel)) {
                    return;
                }
                if (element && element.model instanceof PortModel_1.PortModel && !diagramEngine.isModelLocked(element.model)) {
                    linkConnected = true;
                    var link = model.model.getLink();
                    if (link.getTargetPort() !== null) {
                        //if this was a valid link already and we are adding a node in the middle, create 2 links from the original
                        if (link.getTargetPort() !== element.model && link.getSourcePort() !== element.model) {
                            var targetPort = link.getTargetPort();
                            var newLink = link.clone({});
                            newLink.setSourcePort(element.model);
                            newLink.setTargetPort(targetPort);
                            link.setTargetPort(element.model);
                            targetPort.removeLink(link);
                            newLink.removePointsBefore(newLink.getPoints()[link.getPointIndex(model.model)]);
                            link.removePointsAfter(model.model);
                            diagramEngine.getDiagramModel().addLink(newLink);
                            //if we are connecting to the same target or source, remove tweener points
                        }
                        else if (link.getTargetPort() === element.model) {
                            link.removePointsAfter(model.model);
                        }
                        else if (link.getSourcePort() === element.model) {
                            link.removePointsBefore(model.model);
                        }
                    }
                    else {
                        link.setTargetPort(element.model);
                    }
                    delete _this.props.diagramEngine.linksThatHaveInitiallyRendered[link.getID()];
                }
                //if we moved a NodeModel and allowLooseLinks is false, we know that any links involved were valid
                if ((!_this.props.allowLooseLinks && element.model instanceof NodeModel_1.NodeModel) || !_this.state.wasMoved) {
                    linkConnected = true;
                }
            });
            //do we want to allow loose links on the diagram model or not
            if (!linkConnected && !this.props.allowLooseLinks) {
                _.forEach(this.state.action.selectionModels, function (model) {
                    //only care about points connecting to things
                    if (!(model.model instanceof PointModel_1.PointModel)) {
                        return;
                    }
                    var link = model.model.getLink();
                    if (link.isLastPoint(model.model)) {
                        link.remove();
                    }
                });
            }
            diagramEngine.clearRepaintEntities();
            this.stopFiringAction(!this.state.wasMoved);
        }
        else {
            diagramEngine.clearRepaintEntities();
            this.stopFiringAction();
        }
        this.state.document.removeEventListener("mousemove", this.onMouseMove);
        this.state.document.removeEventListener("mouseup", this.onMouseUp);
    };
    DiagramWidget.prototype.drawSelectionBox = function () {
        var dimensions = this.state.action.getBoxDimensions();
        return (React.createElement("div", { className: "selector", style: {
                top: dimensions.top,
                left: dimensions.left,
                width: dimensions.width,
                height: dimensions.height
            } }));
    };
    DiagramWidget.prototype.render = function () {
        var _this = this;
        var diagramEngine = this.props.diagramEngine;
        diagramEngine.setMaxNumberPointsPerLink(this.props.maxNumberPointsPerLink);
        var diagramModel = diagramEngine.getDiagramModel();
        return (React.createElement("div", { ref: function (ref) {
                if (ref) {
                    _this.props.diagramEngine.setCanvas(ref);
                }
            }, className: "storm-diagrams-canvas", onWheel: function (event) {
                if (_this.props.allowCanvasZoom) {
                    event.preventDefault();
                    event.stopPropagation();
                    var oldZoomFactor = diagramModel.getZoomLevel() / 100;
                    var scrollDelta = _this.props.inverseZoom ? -event.deltaY : event.deltaY;
                    //check if it is pinch gesture
                    if (event.ctrlKey && scrollDelta % 1 !== 0) {
                        /*Chrome and Firefox sends wheel event with deltaY that
                            have fractional part, also `ctrlKey` prop of the event is true
                            though ctrl isn't pressed
                        */
                        scrollDelta /= 3;
                    }
                    else {
                        scrollDelta /= 60;
                    }
                    if (diagramModel.getZoomLevel() + scrollDelta > 10) {
                        diagramModel.setZoomLevel(diagramModel.getZoomLevel() + scrollDelta);
                    }
                    var zoomFactor = diagramModel.getZoomLevel() / 100;
                    var boundingRect = event.currentTarget.getBoundingClientRect();
                    var clientWidth = boundingRect.width;
                    var clientHeight = boundingRect.height;
                    // compute difference between rect before and after scroll
                    var widthDiff = clientWidth * zoomFactor - clientWidth * oldZoomFactor;
                    var heightDiff = clientHeight * zoomFactor - clientHeight * oldZoomFactor;
                    // compute mouse coords relative to canvas
                    var clientX = event.clientX - boundingRect.left;
                    var clientY = event.clientY - boundingRect.top;
                    // compute width and height increment factor
                    var xFactor = (clientX - diagramModel.getOffsetX()) / oldZoomFactor / clientWidth;
                    var yFactor = (clientY - diagramModel.getOffsetY()) / oldZoomFactor / clientHeight;
                    diagramModel.setOffset(diagramModel.getOffsetX() - widthDiff * xFactor, diagramModel.getOffsetY() - heightDiff * yFactor);
                    diagramEngine.enableRepaintEntities([]);
                    _this.forceUpdate();
                }
            }, onMouseDown: function (event) {
                _this.setState(__assign({}, _this.state, { wasMoved: false }));
                diagramEngine.clearRepaintEntities();
                var model = _this.getMouseElement(event);
                //the canvas was selected
                if (model === null) {
                    //is it a multiple selection
                    if (event.shiftKey) {
                        var relative = diagramEngine.getRelativePoint(event.clientX, event.clientY);
                        _this.startFiringAction(new CanvasActions_1.SelectingAction(relative.x, relative.y));
                    }
                    else {
                        //its a drag the canvas event
                        diagramModel.clearSelection();
                        _this.startFiringAction(new CanvasActions_1.MoveCanvasAction(event.clientX, event.clientY, diagramModel));
                    }
                }
                else if (model.model instanceof PortModel_1.PortModel) {
                    //its a port element, we want to drag a link
                    if (!_this.props.diagramEngine.isModelLocked(model.model)) {
                        var relative = diagramEngine.getRelativeMousePoint(event);
                        var sourcePort = model.model;
                        var link = sourcePort.createLinkModel();
                        link.getFirstPoint().updateLocation(relative);
                        link.getLastPoint().updateLocation(relative);
                        diagramModel.clearSelection();
                        link.getLastPoint().setSelected(true);
                        diagramModel.addLink(link);
                        _this.startFiringAction(new CanvasActions_1.MoveItemsAction(event.clientX, event.clientY, diagramEngine));
                    }
                    else {
                        diagramModel.clearSelection();
                    }
                }
                else {
                    //its some or other element, probably want to move it
                    if (!event.shiftKey && !model.model.isSelected()) {
                        diagramModel.clearSelection();
                    }
                    model.model.setSelected(true);
                    _this.startFiringAction(new CanvasActions_1.MoveItemsAction(event.clientX, event.clientY, diagramEngine));
                }
                _this.state.document.addEventListener("mousemove", _this.onMouseMove);
                _this.state.document.addEventListener("mouseup", _this.onMouseUp);
            } },
            this.state.renderedNodes && (React.createElement(LinkLayerWidget_1.LinkLayerWidget, { diagramEngine: diagramEngine, pointAdded: function (point, event) {
                    _this.state.document.addEventListener("mousemove", _this.onMouseMove);
                    _this.state.document.addEventListener("mouseup", _this.onMouseUp);
                    event.stopPropagation();
                    diagramModel.clearSelection(point);
                    _this.setState({
                        action: new CanvasActions_1.MoveItemsAction(event.clientX, event.clientY, diagramEngine)
                    });
                } })),
            React.createElement(NodeLayerWidget_1.NodeLayerWidget, { diagramEngine: diagramEngine }),
            this.state.action instanceof CanvasActions_1.SelectingAction && this.drawSelectionBox()));
    };
    DiagramWidget.defaultProps = {
        diagramEngine: null,
        allowLooseLinks: true,
        allowCanvasTranslation: true,
        allowCanvasZoom: true,
        inverseZoom: false,
        maxNumberPointsPerLink: Infinity,
        deleteKeys: [46, 8]
    };
    return DiagramWidget;
}(React.Component));
exports.DiagramWidget = DiagramWidget;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)))

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })
/******/ ]);
});
//# sourceMappingURL=main.js.map