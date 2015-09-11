/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import MockAPI from './main';

// interface to allow us to bind library to window
interface WindowInterface extends Window {
  cuAPI: any;
  opener: WindowInterface;
}

// declare window implements WindowInterface
declare var window: WindowInterface;

if (!window.cuAPI || (window.opener && !window.opener.cuAPI)) {
  // bind library to window
  window.cuAPI = new MockAPI();
}
