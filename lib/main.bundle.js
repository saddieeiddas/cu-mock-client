/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _main = require('./main');

var _main2 = _interopRequireDefault(_main);

if (!window.cuAPI || window.opener && !window.opener.cuAPI) {
  // bind library to window
  window.cuAPI = new _main2['default']();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL21haW4uYnVuZGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztvQkFNb0IsUUFBUTs7OztBQVc1QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEFBQUMsRUFBRTs7QUFFNUQsUUFBTSxDQUFDLEtBQUssR0FBRyx1QkFBYSxDQUFDO0NBQzlCIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuaW1wb3J0IE1vY2tBUEkgZnJvbSAnLi9tYWluJztcblxuLy8gaW50ZXJmYWNlIHRvIGFsbG93IHVzIHRvIGJpbmQgbGlicmFyeSB0byB3aW5kb3dcbmludGVyZmFjZSBXaW5kb3dJbnRlcmZhY2UgZXh0ZW5kcyBXaW5kb3cge1xuICBjdUFQSTogYW55O1xuICBvcGVuZXI6IFdpbmRvd0ludGVyZmFjZTtcbn1cblxuLy8gZGVjbGFyZSB3aW5kb3cgaW1wbGVtZW50cyBXaW5kb3dJbnRlcmZhY2VcbmRlY2xhcmUgdmFyIHdpbmRvdzogV2luZG93SW50ZXJmYWNlO1xuXG5pZiAoIXdpbmRvdy5jdUFQSSB8fCAod2luZG93Lm9wZW5lciAmJiAhd2luZG93Lm9wZW5lci5jdUFQSSkpIHtcbiAgLy8gYmluZCBsaWJyYXJ5IHRvIHdpbmRvd1xuICB3aW5kb3cuY3VBUEkgPSBuZXcgTW9ja0FQSSgpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==