'use strict';

cuAPI.OnEvent(function(event) {
  console.log('OnEvent', event);
});

cuAPI.OnInitialized(function() {
  console.log('OnInitialized');

  cuAPI.OnHideUI(function(ui) {
    console.log('OnHideUI', ui);
  });

  console.log('HideUI', 'some-ui');
  cuAPI.Fire('HideUI', 'some-ui');

});
