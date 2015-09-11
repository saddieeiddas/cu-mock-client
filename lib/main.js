/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MockAPI = (function () {
    function MockAPI() {
        _classCallCheck(this, MockAPI);
    }

    _createClass(MockAPI, [{
        key: 'test',
        value: function test() {
            console.log('test');
        }
    }], [{
        key: 'staticTest',
        value: function staticTest() {
            console.log('staticTest');
        }
    }]);

    return MockAPI;
})();

exports['default'] = MockAPI;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL21haW4udHMiXSwibmFtZXMiOlsiTW9ja0FQSSIsIk1vY2tBUEkudGVzdCIsIk1vY2tBUEkuc3RhdGljVGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBTUEsT0FBQTthQUFBLE9BQUE7OEJBQUEsT0FBQTs7O2lCQUFBLE9BQUE7O2VBSU1BLGdCQUFBQTtBQUNGQyxtQkFBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7U0FDckJBOzs7ZUFMZ0JELHNCQUFBQTtBQUNmRSxtQkFBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0E7U0FDM0JBOzs7V0FISCxPQUFBOzs7cUJBQUEsT0FBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vY2tBUEkge1xuICBzdGF0aWMgc3RhdGljVGVzdCgpIHtcbiAgICBjb25zb2xlLmxvZygnc3RhdGljVGVzdCcpO1xuICB9XG4gIHRlc3QoKSB7XG4gICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==