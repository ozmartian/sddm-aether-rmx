define(['exports', 'src/dist/js/inferno.min', 'src/dist/js/inferno-component.min'], function (exports, _inferno, _infernoComponent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.UserSwitcher = undefined;

  var _inferno2 = _interopRequireDefault(_inferno);

  var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var bp6 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'real-name',
    children: {
      arg: 0
    }
  });

  var bp5 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'username',
    children: {
      arg: 0
    }
  });

  var bp4 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'avatar-name',
    children: {
      arg: 0
    }
  });

  var bp3 = _inferno2.default.createBlueprint({
    tag: 'img',
    className: 'user-avatar',
    attrs: {
      arg: 0
    }
  });

  var bp2 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'avatar-mask',
    children: {
      arg: 0
    }
  });

  var bp1 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'avatar-background',
    children: {
      arg: 0
    }
  });

  var bp0 = _inferno2.default.createBlueprint({
    tag: 'li',
    className: {
      arg: 0
    },
    events: {
      arg: 1
    },
    children: {
      arg: 2
    }
  });

  var bp13 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'real-name',
    children: {
      arg: 0
    }
  });

  var bp12 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'username',
    children: {
      arg: 0
    }
  });

  var bp11 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'avatar-name',
    children: {
      arg: 0
    }
  });

  var bp10 = _inferno2.default.createBlueprint({
    tag: 'img',
    className: 'user-avatar',
    attrs: {
      arg: 0
    }
  });

  var bp9 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'avatar-mask',
    children: {
      arg: 0
    }
  });

  var bp8 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'avatar-background',
    children: {
      arg: 0
    }
  });

  var bp7 = _inferno2.default.createBlueprint({
    tag: 'li',
    className: 'avatar-container previous',
    events: {
      arg: 0
    },
    children: {
      arg: 1
    }
  });

  var bp20 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'real-name',
    children: {
      arg: 0
    }
  });

  var bp19 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'username',
    children: {
      arg: 0
    }
  });

  var bp18 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'avatar-name',
    children: {
      arg: 0
    }
  });

  var bp17 = _inferno2.default.createBlueprint({
    tag: 'img',
    className: 'user-avatar',
    attrs: {
      arg: 0
    }
  });

  var bp16 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'avatar-mask',
    children: {
      arg: 0
    }
  });

  var bp15 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'avatar-background',
    children: {
      arg: 0
    }
  });

  var bp14 = _inferno2.default.createBlueprint({
    tag: 'li',
    className: 'avatar-container next',
    events: {
      arg: 0
    },
    children: {
      arg: 1
    }
  });

  var bp21 = _inferno2.default.createBlueprint({
    tag: 'ul',
    className: 'avatar-slider',
    children: {
      arg: 0
    }
  });

  var bp26 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'bottom',
    events: {
      arg: 0
    },
    children: {
      arg: 1
    }
  });

  var bp25 = _inferno2.default.createBlueprint({
    tag: 'em',
    children: {
      arg: 0
    }
  });

  var bp24 = _inferno2.default.createBlueprint({
    tag: 'em',
    children: {
      arg: 0
    }
  });

  var bp23 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'header',
    children: {
      arg: 0
    }
  });

  var bp22 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: {
      arg: 0
    },
    children: {
      arg: 1
    }
  });

  var UserSwitcher = exports.UserSwitcher = function (_Component) {
    _inherits(UserSwitcher, _Component);

    function UserSwitcher(props) {
      _classCallCheck(this, UserSwitcher);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UserSwitcher).call(this, props));

      _this.state = {
        "selectedUser": _this.props.activeUser,
        "selectedUserIndex": window.lightdm.users.indexOf(_this.props.activeUser)
      };
      return _this;
    }

    _createClass(UserSwitcher, [{
      key: 'handleUserClick',
      value: function handleUserClick(index) {
        this.setState({
          "selectedUser": window.lightdm.users[index],
          "selectedUserIndex": index
        });
      }
    }, {
      key: 'generateUserList',
      value: function generateUserList() {
        var _this2 = this;

        var activeIndex = this.state.selectedUserIndex;

        var avatars = window.lightdm.users.map(function (user, index) {
          var classes = ['avatar-container'];

          if (index === activeIndex) {
            classes.push('active');
          }

          if (index === activeIndex - 1) {
            classes.push('previous');
          }

          if (index === activeIndex + 1) {
            classes.push('next');
          }

          return bp0(classes.join(' '), {
            onclick: _this2.handleUserClick.bind(_this2, index)
          }, [bp1(bp2(bp3({
            src: user.image
          }))), bp4([bp5(user.display_name), bp6(user.real_name)])]);
        });

        // Very hacky. Add an extra copy of the last element to the beginning of the list
        // if the first element in the list is currently selected.
        if (activeIndex === 0) {
          var user = window.lightdm.users[window.lightdm.users.length - 1];
          avatars.splice(0, 0, bp7({
            onclick: this.handleUserClick.bind(this, window.lightdm.users.length - 1)
          }, [bp8(bp9(bp10({
            src: user.image
          }))), bp11([bp12(user.display_name), bp13(user.real_name)])]));
        }

        // Very hacky. Add an extra copy of the first element to the end of the list
        // if the last element in the list is currently selected.
        if (activeIndex === window.lightdm.users.length - 1) {
          var _user = window.lightdm.users[0];
          avatars.push(bp14({
            onclick: this.handleUserClick.bind(this, 0)
          }, [bp15(bp16(bp17({
            src: _user.image
          }))), bp18([bp19(_user.display_name), bp20(_user.real_name)])]));
        }

        return bp21(avatars);
      }
    }, {
      key: 'render',
      value: function render() {
        var classes = ['login-panel-switcher'];
        var userList = this.generateUserList();
        var userCount = window.lightdm.users.length;

        if (this.props.active === true) {
          classes.push("active");
        }

        return bp22(classes.join(' '), [bp23(['User ', bp24(this.state.selectedUserIndex + 1), ' of ', bp25(userCount)]), userList, bp26({
          onclick: this.props.setActiveUser.bind(this, this.state.selectedUser)
        }, 'BACK')]);
      }
    }]);

    return UserSwitcher;
  }(_infernoComponent2.default);
});