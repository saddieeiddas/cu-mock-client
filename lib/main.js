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

var _eventemitter2 = require('eventemitter2');

var EventEmitterHash = function EventEmitterHash(id, c, event) {
    _classCallCheck(this, EventEmitterHash);

    this.id = id;
    this.c = c;
    this.event = event;
};

var MockAPI = (function () {
    function MockAPI() {
        var _this = this;

        _classCallCheck(this, MockAPI);

        this.characters = 1;
        this.downCollisionAngle = 1;
        this.facing = 1;
        this.fps = 1;
        this.frameTime = 1;
        this.horizontalSpeed = 1;
        this.initialized = false;
        this.locationX = 1;
        this.locationY = 1;
        this.locationZ = 1;
        this._loginToken = '';
        this.mainVolume = 1;
        this.muteVolume = true;
        this.netstats_lag = 1;
        this.netstats_players_newBits = 1;
        this.netstats_players_newCount = 1;
        this.netstats_players_updateBits = 1;
        this.netstats_players_updateCount = 1;
        this.netstats_tcpBytes = 1;
        this.netstats_tcpMessages = 1;
        this.netstats_udpBytes = 1;
        this.netstats_udpPackets = 1;
        this.particlesRenderedCount = 1;
        this.patchResourceChannel = 1;
        this.perfHUD = '';
        this.pktHash = '';
        this.serverLocationX = 1;
        this.serverLocationY = 1;
        this.serverLocationZ = 1;
        this.serverTime = 1;
        this.serverURL = '';
        this.speed = 1;
        this.terrain = 1;
        this.terrainCollisionAngle = 1;
        this.velFacing = 1;
        this.velocityX = 1;
        this.velocityY = 1;
        this.velocityZ = 1;
        this.vsync = 1;
        this.webAPIHost = '';
        this._mockInitialize();
        setTimeout(function () {
            _this.initialized = true;
            var loginToken = sessionStorage.getItem('mock_loginToken');
            if (loginToken) {
                _this.loginToken = loginToken;
            }
            _this._mockEventEmitter.emit('Initialized');
        }, 0);
    }

    _createClass(MockAPI, [{
        key: '_mockInitialize',
        value: function _mockInitialize() {
            this._mockEventEmitterCounter = 0;
            this._mockEventEmitterInternal = new _eventemitter2.EventEmitter2({
                wildcard: true,
                maxListeners: 50
            });
            this._mockEventEmitter = new _eventemitter2.EventEmitter2({
                wildcard: true,
                maxListeners: 50
            });
            this._mockEventEmitterHash = [];
        }
    }, {
        key: '_mockAddEventListener',
        value: function _mockAddEventListener(event, c) {
            this._mockEventEmitterCounter += 1;
            var eventHash = new EventEmitterHash(this._mockEventEmitterCounter, c, event);
            this._mockEventEmitterHash.push(eventHash);
            this._mockEventEmitter.on(eventHash.event, eventHash.c);
            return eventHash.id;
        }
    }, {
        key: '_mockAddEventListenerVoid',
        value: function _mockAddEventListenerVoid(event, c) {
            this._mockAddEventListener(event, c);
        }
    }, {
        key: '_mockRemoveEventListener',
        value: function _mockRemoveEventListener(id) {
            var _this2 = this;

            this._mockEventEmitterHash = this._mockEventEmitterHash.filter(function (hash) {
                if (hash.id === id) {
                    _this2._mockEventEmitter.off(hash.event, hash.c);
                    return false;
                } else {
                    return true;
                }
            });
        }
    }, {
        key: 'OnAbilityActive',
        value: function OnAbilityActive(c) {
            return this._mockAddEventListener('AbilityActive', c);
        }
    }, {
        key: 'OnAbilityCooldown',
        value: function OnAbilityCooldown(c) {
            return this._mockAddEventListener('AbilityCooldown', c);
        }
    }, {
        key: 'OnAbilityCreated',
        value: function OnAbilityCreated(callback) {
            this._mockAddEventListenerVoid('AbilityCreated', callback);
        }
    }, {
        key: 'OnAbilityDeleted',
        value: function OnAbilityDeleted(callback) {
            this._mockAddEventListenerVoid('AbilityDeleted', callback);
        }
    }, {
        key: 'OnAbilityNumbersChanged',
        value: function OnAbilityNumbersChanged(callback) {
            this._mockAddEventListenerVoid('AbilityNumbersChanged', callback);
        }
    }, {
        key: 'OnAbilityRegistered',
        value: function OnAbilityRegistered(callback) {
            this._mockAddEventListenerVoid('AbilityRegistered', callback);
        }
    }, {
        key: 'OnAnnouncement',
        value: function OnAnnouncement(c) {
            this._mockAddEventListenerVoid('Announcement', c);
        }
    }, {
        key: 'OnBeginChat',
        value: function OnBeginChat(c) {
            this._mockAddEventListenerVoid('BeginChat', c);
        }
    }, {
        key: 'OnBuildingModeChanged',
        value: function OnBuildingModeChanged(c) {
            this._mockAddEventListenerVoid('BuildingModeChanged', c);
        }
    }, {
        key: 'OnCharacterEffectsChanged',
        value: function OnCharacterEffectsChanged(c) {
            this._mockAddEventListenerVoid('CharacterEffectsChanged', c);
        }
    }, {
        key: 'OnCharacterFactionChanged',
        value: function OnCharacterFactionChanged(c) {
            this._mockAddEventListenerVoid('CharacterFactionChanged', c);
        }
    }, {
        key: 'OnCharacterHealthChanged',
        value: function OnCharacterHealthChanged(c) {
            this._mockAddEventListenerVoid('CharacterHealthChanged', c);
        }
    }, {
        key: 'OnCharacterIDChanged',
        value: function OnCharacterIDChanged(c) {
            this._mockAddEventListenerVoid('CharacterIDChanged', c);
        }
    }, {
        key: 'OnCharacterNameChanged',
        value: function OnCharacterNameChanged(c) {
            this._mockAddEventListenerVoid('CharacterNameChanged', c);
        }
    }, {
        key: 'OnCharacterRaceChanged',
        value: function OnCharacterRaceChanged(c) {
            this._mockAddEventListenerVoid('CharacterRaceChanged', c);
        }
    }, {
        key: 'OnCharacterStaminaChanged',
        value: function OnCharacterStaminaChanged(c) {
            this._mockAddEventListenerVoid('CharacterStaminaChanged', c);
        }
    }, {
        key: 'OnChat',
        value: function OnChat(c) {
            this._mockAddEventListenerVoid('Chat', c);
        }
    }, {
        key: 'OnCloseUI',
        value: function OnCloseUI(callback) {
            this._mockAddEventListenerVoid('CloseUI', callback);
        }
    }, {
        key: 'OnConfigVarChanged',
        value: function OnConfigVarChanged(c) {
            this._mockAddEventListenerVoid('ConfigVarChanged', c);
        }
    }, {
        key: 'OnConsoleText',
        value: function OnConsoleText(c) {
            this._mockAddEventListenerVoid('ConsoleText', c);
        }
    }, {
        key: 'OnCopyBlueprint',
        value: function OnCopyBlueprint(c) {
            this._mockAddEventListenerVoid('CopyBlueprint', c);
        }
    }, {
        key: 'OnEditAbility',
        value: function OnEditAbility(callback) {
            this._mockAddEventListenerVoid('EditAbility', callback);
        }
    }, {
        key: 'OnEnemyTargetEffectsChanged',
        value: function OnEnemyTargetEffectsChanged(callback) {
            this._mockAddEventListenerVoid('EnemyTargetEffectsChanged', callback);
        }
    }, {
        key: 'OnEnemyTargetHealthChanged',
        value: function OnEnemyTargetHealthChanged(callback) {
            this._mockAddEventListenerVoid('EnemyTargetHealthChanged', callback);
        }
    }, {
        key: 'OnEnemyTargetNameChanged',
        value: function OnEnemyTargetNameChanged(callback) {
            this._mockAddEventListenerVoid('EnemyTargetNameChanged', callback);
        }
    }, {
        key: 'OnEnemyTargetStaminaChanged',
        value: function OnEnemyTargetStaminaChanged(callback) {
            this._mockAddEventListenerVoid('EnemyTargetStaminaChanged', callback);
        }
    }, {
        key: 'OnEquippedGearItemIDsChanged',
        value: function OnEquippedGearItemIDsChanged(callback) {
            this._mockAddEventListenerVoid('EquippedGearItemIDsChanged', callback);
        }
    }, {
        key: 'OnEvent',
        value: function OnEvent(callback) {
            this._mockAddEventListenerVoid('*', function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                callback.apply(undefined, [this.event].concat(args));
            });
        }
    }, {
        key: 'OnFriendlyTargetEffectsChanged',
        value: function OnFriendlyTargetEffectsChanged(callback) {
            this._mockAddEventListenerVoid('FriendlyTargetEffectsChanged', callback);
        }
    }, {
        key: 'OnFriendlyTargetHealthChanged',
        value: function OnFriendlyTargetHealthChanged(callback) {
            this._mockAddEventListenerVoid('FriendlyTargetHealthChanged', callback);
        }
    }, {
        key: 'OnFriendlyTargetNameChanged',
        value: function OnFriendlyTargetNameChanged(callback) {
            this._mockAddEventListenerVoid('FriendlyTargetNameChanged', callback);
        }
    }, {
        key: 'OnFriendlyTargetStaminaChanged',
        value: function OnFriendlyTargetStaminaChanged(callback) {
            this._mockAddEventListenerVoid('FriendlyTargetStaminaChanged', callback);
        }
    }, {
        key: 'OnGetItem',
        value: function OnGetItem(callback) {
            this._mockAddEventListenerVoid('GetItem', callback);
        }
    }, {
        key: 'OnHideUI',
        value: function OnHideUI(callback) {
            this._mockAddEventListenerVoid('HideUI', callback);
        }
    }, {
        key: 'OnInitialized',
        value: function OnInitialized(c) {
            var _this3 = this;

            var id = this._mockAddEventListener('Initialized', c);
            if (this.initialized) {
                setTimeout(function () {
                    _this3._mockEventEmitter.emit('Initialized');
                }, 0);
            }
            return id;
        }
    }, {
        key: 'OnInventoryItemIDsChanged',
        value: function OnInventoryItemIDsChanged(callback) {
            this._mockAddEventListenerVoid('InventoryItemIDsChanged', callback);
        }
    }, {
        key: 'OnItemEquipped',
        value: function OnItemEquipped(callback) {
            this._mockAddEventListenerVoid('ItemEquipped', callback);
        }
    }, {
        key: 'OnItemUnequipped',
        value: function OnItemUnequipped(callback) {
            this._mockAddEventListenerVoid('ItemUnequipped', callback);
        }
    }, {
        key: 'OnLogMessage',
        value: function OnLogMessage(c) {
            this._mockAddEventListenerVoid('LogMessage', c);
        }
    }, {
        key: 'OnNewBlueprint',
        value: function OnNewBlueprint(c) {
            this._mockAddEventListenerVoid('NewBlueprint', c);
        }
    }, {
        key: 'OnOpenUI',
        value: function OnOpenUI(callback) {
            this._mockAddEventListenerVoid('OpenUI', callback);
        }
    }, {
        key: 'OnReceiveBlocks',
        value: function OnReceiveBlocks(c) {
            this._mockAddEventListenerVoid('ReceiveBlocks', c);
        }
    }, {
        key: 'OnReceiveBlockTags',
        value: function OnReceiveBlockTags(c) {
            this._mockAddEventListenerVoid('ReceiveBlockTags', c);
        }
    }, {
        key: 'OnReceiveConfigVar',
        value: function OnReceiveConfigVar(c) {
            this._mockAddEventListenerVoid('ReceiveConfigVar', c);
        }
    }, {
        key: 'OnReceiveConfigVars',
        value: function OnReceiveConfigVars(c) {
            this._mockAddEventListenerVoid('ReceiveConfigVars', c);
        }
    }, {
        key: 'OnReceiveScreenShot',
        value: function OnReceiveScreenShot(c) {
            this._mockAddEventListenerVoid('ReceiveScreenShot', c);
        }
    }, {
        key: 'OnServerConnected',
        value: function OnServerConnected(c) {
            return this._mockAddEventListener('ServerConnected', c);
        }
    }, {
        key: 'OnShowAbility',
        value: function OnShowAbility(callback) {
            this._mockAddEventListenerVoid('ShowAbility', callback);
        }
    }, {
        key: 'OnShowUI',
        value: function OnShowUI(callback) {
            this._mockAddEventListenerVoid('ShowUI', callback);
        }
    }, {
        key: 'OnUpdateNameplate',
        value: function OnUpdateNameplate(c) {
            this._mockAddEventListenerVoid('UpdateNameplate', c);
        }
    }, {
        key: 'Listen',
        value: function Listen(event, callback) {
            this._mockAddEventListenerVoid(event, callback);
        }
    }, {
        key: 'CancelOnAbilityActive',
        value: function CancelOnAbilityActive(c) {
            this._mockRemoveEventListener(c);
        }
    }, {
        key: 'CancelOnAbilityCooldown',
        value: function CancelOnAbilityCooldown(c) {
            this._mockRemoveEventListener(c);
        }
    }, {
        key: 'CancelOnInitialized',
        value: function CancelOnInitialized(c) {
            this._mockRemoveEventListener(c);
        }
    }, {
        key: 'CancelOnServerConnected',
        value: function CancelOnServerConnected(c) {
            this._mockRemoveEventListener(c);
        }
    }, {
        key: 'AbilityCreated',
        value: function AbilityCreated(abilityID, primaryBaseComponentID, secondaryBaseComponentID, ability) {
            this._mockEventEmitter.emit('AbilityCreated', abilityID, ability);
        }
    }, {
        key: 'AbilityDeleted',
        value: function AbilityDeleted(abilityID) {
            this._mockEventEmitter.emit('AbilityDeleted', abilityID);
        }
    }, {
        key: 'ApplyStability',
        value: function ApplyStability() {}
    }, {
        key: 'Attack',
        value: function Attack(abilityID) {}
    }, {
        key: 'BlockFlipX',
        value: function BlockFlipX() {}
    }, {
        key: 'BlockFlipY',
        value: function BlockFlipY() {}
    }, {
        key: 'BlockFlipZ',
        value: function BlockFlipZ() {}
    }, {
        key: 'BlockRotateX',
        value: function BlockRotateX() {}
    }, {
        key: 'BlockRotateY',
        value: function BlockRotateY() {}
    }, {
        key: 'BlockRotateZ',
        value: function BlockRotateZ() {}
    }, {
        key: 'CancelAllConfigChanges',
        value: function CancelAllConfigChanges(tag) {}
    }, {
        key: 'CancelBlockPlacement',
        value: function CancelBlockPlacement() {}
    }, {
        key: 'CancelChangeConfig',
        value: function CancelChangeConfig(variable) {}
    }, {
        key: 'ChangeBlockType',
        value: function ChangeBlockType(c) {}
    }, {
        key: 'ChangeConfigVar',
        value: function ChangeConfigVar(variable, value) {}
    }, {
        key: 'ChangeZone',
        value: function ChangeZone(zoneID) {}
    }, {
        key: 'CloseUI',
        value: function CloseUI(name) {
            this._mockEventEmitter.emit('CloseUI', name);
        }
    }, {
        key: 'CommitBlock',
        value: function CommitBlock() {}
    }, {
        key: 'Connect',
        value: function Connect(host, port, character, webAPIHost) {
            // TODO do some connection here
            this._mockEventEmitter.emit('ServerConnected', true);
        }
    }, {
        key: 'ConsoleCommand',
        value: function ConsoleCommand(body) {}
    }, {
        key: 'CopyBlueprint',
        value: function CopyBlueprint() {
            this._mockEventEmitter.emit('CopyBlueprint');
        }
    }, {
        key: 'CrashTheGame',
        value: function CrashTheGame() {}
    }, {
        key: 'DropLight',
        value: function DropLight(intensity, radius, red, green, blue) {}
    }, {
        key: 'EditAbility',
        value: function EditAbility(abilityID) {
            this._mockEventEmitter.emit('EditAbility', abilityID);
        }
    }, {
        key: 'Emote',
        value: function Emote(emote) {}
    }, {
        key: 'EquipItem',
        value: function EquipItem(itemID) {
            this._mockEventEmitter.emit('ItemEquipped', itemID);
        }
    }, {
        key: 'Fire',
        value: function Fire(event) {
            var _mockEventEmitter;

            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
            }

            (_mockEventEmitter = this._mockEventEmitter).emit.apply(_mockEventEmitter, [event].concat(args));
        }
    }, {
        key: 'FocusUI',
        value: function FocusUI(name) {}
    }, {
        key: 'FOV',
        value: function FOV(degrees) {}
    }, {
        key: 'GetConfigVar',
        value: function GetConfigVar(variable) {
            this._mockEventEmitter.emit('ReceiveConfigVar', 'config value'); // TODO get this from data
        }
    }, {
        key: 'GetConfigVars',
        value: function GetConfigVars(tag) {
            this._mockEventEmitter.emit('ReceiveConfigVars', 'config value'); // TODO get this from data
        }
    }, {
        key: 'GetItem',
        value: function GetItem(itemID) {
            this._mockEventEmitter.emit('GetItem', 1, 'item-data'); // TODO get this from data
        }
    }, {
        key: 'HideUI',
        value: function HideUI(name) {
            this._mockEventEmitter.emit('HideUI', name);
        }
    }, {
        key: 'Ignore',
        value: function Ignore(event) {}
    }, {
        key: 'JoinMUC',
        value: function JoinMUC(room) {}
    }, {
        key: 'LeaveMUC',
        value: function LeaveMUC(room) {}
    }, {
        key: 'OnAbilityError',
        value: function OnAbilityError(c) {}
    }, {
        key: 'OnSavedConfigChanges',
        value: function OnSavedConfigChanges(c) {}
    }, {
        key: 'OpenScreenshotShare',
        value: function OpenScreenshotShare() {}
    }, {
        key: 'OpenUI',
        value: function OpenUI(name) {
            this._mockEventEmitter.emit('OpenUI', name);
        }
    }, {
        key: 'PasteBlueprint',
        value: function PasteBlueprint() {}
    }, {
        key: 'PlaySoundEvent',
        value: function PlaySoundEvent(id) {}
    }, {
        key: 'Quit',
        value: function Quit() {}
    }, {
        key: 'RegisterAbility',
        value: function RegisterAbility(abilityID, primaryBaseComponentID, secondaryBaseComponentID) {}
    }, {
        key: 'ReleaseInputOwnership',
        value: function ReleaseInputOwnership() {}
    }, {
        key: 'RemoveIslands',
        value: function RemoveIslands() {}
    }, {
        key: 'RequestBlocks',
        value: function RequestBlocks() {
            this._mockEventEmitter.emit('ReceiveBlocks', []); // TODO get this from data
        }
    }, {
        key: 'RequestBlockTags',
        value: function RequestBlockTags(c) {
            this._mockEventEmitter.emit('ReceiveBlockTags', 'tagDict'); // TODO get this from data
        }
    }, {
        key: 'RequestBlueprints',
        value: function RequestBlueprints() {}
    }, {
        key: 'RequestInputOwnership',
        value: function RequestInputOwnership() {}
    }, {
        key: 'ResetLights',
        value: function ResetLights() {}
    }, {
        key: 'Respawn',
        value: function Respawn(id) {}
    }, {
        key: 'RestoreConfigDefaults',
        value: function RestoreConfigDefaults(tag) {}
    }, {
        key: 'SaveBlueprint',
        value: function SaveBlueprint(c) {
            this._mockEventEmitter.emit('NewBlueprint', 0, name);
        }
    }, {
        key: 'SaveConfigChanges',
        value: function SaveConfigChanges() {}
    }, {
        key: 'SelectBlueprint',
        value: function SelectBlueprint(c) {}
    }, {
        key: 'SendChat',
        value: function SendChat(type, to, body) {}
    }, {
        key: 'SendSlashCommand',
        value: function SendSlashCommand(command, parameters) {}
    }, {
        key: 'SetBuildingMode',
        value: function SetBuildingMode(newMode) {
            this._mockEventEmitter.emit('BuildingModeChanged', newMode);
        }
    }, {
        key: 'ShowAbility',
        value: function ShowAbility(abilityID) {
            this._mockEventEmitter.emit('ShowAbility', abilityID);
        }
    }, {
        key: 'ShowUI',
        value: function ShowUI(name) {
            this._mockEventEmitter.emit('ShowUI', name);
        }
    }, {
        key: 'Stuck',
        value: function Stuck() {}
    }, {
        key: 'TakeScreenshot',
        value: function TakeScreenshot() {
            this._mockEventEmitter.emit('ReceiveScreenShot', 'screenShotString'); // TODO get this from data
        }
    }, {
        key: 'ToggleBuildingMode',
        value: function ToggleBuildingMode() {}
    }, {
        key: 'ToggleCamera',
        value: function ToggleCamera() {}
    }, {
        key: 'ToggleUIVisibility',
        value: function ToggleUIVisibility(name) {}
    }, {
        key: 'UnequipItem',
        value: function UnequipItem(itemID) {
            this._mockEventEmitter.emit('ItemUnequipped', itemID);
        }
    }, {
        key: 'loginToken',
        get: function get() {
            if (!this._loginToken) {
                this._loginToken = window.prompt('Login Token?');
                sessionStorage.setItem('mock_loginToken', this._loginToken);
            }
            return this._loginToken;
        },
        set: function set(loginToken) {
            this._loginToken = loginToken;
        }
    }]);

    return MockAPI;
})();

exports['default'] = MockAPI;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL21haW4udHMiXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVySGFzaCIsIkV2ZW50RW1pdHRlckhhc2guY29uc3RydWN0b3IiLCJNb2NrQVBJIiwiTW9ja0FQSS5jb25zdHJ1Y3RvciIsIk1vY2tBUEkuX21vY2tJbml0aWFsaXplIiwiTW9ja0FQSS5fbW9ja0FkZEV2ZW50TGlzdGVuZXIiLCJNb2NrQVBJLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQiLCJNb2NrQVBJLl9tb2NrUmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk1vY2tBUEkuT25BYmlsaXR5QWN0aXZlIiwiTW9ja0FQSS5PbkFiaWxpdHlDb29sZG93biIsIk1vY2tBUEkuT25BYmlsaXR5Q3JlYXRlZCIsIk1vY2tBUEkuT25BYmlsaXR5RGVsZXRlZCIsIk1vY2tBUEkuT25BYmlsaXR5TnVtYmVyc0NoYW5nZWQiLCJNb2NrQVBJLk9uQWJpbGl0eVJlZ2lzdGVyZWQiLCJNb2NrQVBJLk9uQW5ub3VuY2VtZW50IiwiTW9ja0FQSS5PbkJlZ2luQ2hhdCIsIk1vY2tBUEkuT25CdWlsZGluZ01vZGVDaGFuZ2VkIiwiTW9ja0FQSS5PbkNoYXJhY3RlckVmZmVjdHNDaGFuZ2VkIiwiTW9ja0FQSS5PbkNoYXJhY3RlckZhY3Rpb25DaGFuZ2VkIiwiTW9ja0FQSS5PbkNoYXJhY3RlckhlYWx0aENoYW5nZWQiLCJNb2NrQVBJLk9uQ2hhcmFjdGVySURDaGFuZ2VkIiwiTW9ja0FQSS5PbkNoYXJhY3Rlck5hbWVDaGFuZ2VkIiwiTW9ja0FQSS5PbkNoYXJhY3RlclJhY2VDaGFuZ2VkIiwiTW9ja0FQSS5PbkNoYXJhY3RlclN0YW1pbmFDaGFuZ2VkIiwiTW9ja0FQSS5PbkNoYXQiLCJNb2NrQVBJLk9uQ2xvc2VVSSIsIk1vY2tBUEkuT25Db25maWdWYXJDaGFuZ2VkIiwiTW9ja0FQSS5PbkNvbnNvbGVUZXh0IiwiTW9ja0FQSS5PbkNvcHlCbHVlcHJpbnQiLCJNb2NrQVBJLk9uRWRpdEFiaWxpdHkiLCJNb2NrQVBJLk9uRW5lbXlUYXJnZXRFZmZlY3RzQ2hhbmdlZCIsIk1vY2tBUEkuT25FbmVteVRhcmdldEhlYWx0aENoYW5nZWQiLCJNb2NrQVBJLk9uRW5lbXlUYXJnZXROYW1lQ2hhbmdlZCIsIk1vY2tBUEkuT25FbmVteVRhcmdldFN0YW1pbmFDaGFuZ2VkIiwiTW9ja0FQSS5PbkVxdWlwcGVkR2Vhckl0ZW1JRHNDaGFuZ2VkIiwiTW9ja0FQSS5PbkV2ZW50IiwiTW9ja0FQSS5PbkZyaWVuZGx5VGFyZ2V0RWZmZWN0c0NoYW5nZWQiLCJNb2NrQVBJLk9uRnJpZW5kbHlUYXJnZXRIZWFsdGhDaGFuZ2VkIiwiTW9ja0FQSS5PbkZyaWVuZGx5VGFyZ2V0TmFtZUNoYW5nZWQiLCJNb2NrQVBJLk9uRnJpZW5kbHlUYXJnZXRTdGFtaW5hQ2hhbmdlZCIsIk1vY2tBUEkuT25HZXRJdGVtIiwiTW9ja0FQSS5PbkhpZGVVSSIsIk1vY2tBUEkuT25Jbml0aWFsaXplZCIsIk1vY2tBUEkuT25JbnZlbnRvcnlJdGVtSURzQ2hhbmdlZCIsIk1vY2tBUEkuT25JdGVtRXF1aXBwZWQiLCJNb2NrQVBJLk9uSXRlbVVuZXF1aXBwZWQiLCJNb2NrQVBJLk9uTG9nTWVzc2FnZSIsIk1vY2tBUEkuT25OZXdCbHVlcHJpbnQiLCJNb2NrQVBJLk9uT3BlblVJIiwiTW9ja0FQSS5PblJlY2VpdmVCbG9ja3MiLCJNb2NrQVBJLk9uUmVjZWl2ZUJsb2NrVGFncyIsIk1vY2tBUEkuT25SZWNlaXZlQ29uZmlnVmFyIiwiTW9ja0FQSS5PblJlY2VpdmVDb25maWdWYXJzIiwiTW9ja0FQSS5PblJlY2VpdmVTY3JlZW5TaG90IiwiTW9ja0FQSS5PblNlcnZlckNvbm5lY3RlZCIsIk1vY2tBUEkuT25TaG93QWJpbGl0eSIsIk1vY2tBUEkuT25TaG93VUkiLCJNb2NrQVBJLk9uVXBkYXRlTmFtZXBsYXRlIiwiTW9ja0FQSS5MaXN0ZW4iLCJNb2NrQVBJLkNhbmNlbE9uQWJpbGl0eUFjdGl2ZSIsIk1vY2tBUEkuQ2FuY2VsT25BYmlsaXR5Q29vbGRvd24iLCJNb2NrQVBJLkNhbmNlbE9uSW5pdGlhbGl6ZWQiLCJNb2NrQVBJLkNhbmNlbE9uU2VydmVyQ29ubmVjdGVkIiwiTW9ja0FQSS5BYmlsaXR5Q3JlYXRlZCIsIk1vY2tBUEkuQWJpbGl0eURlbGV0ZWQiLCJNb2NrQVBJLkFwcGx5U3RhYmlsaXR5IiwiTW9ja0FQSS5BdHRhY2siLCJNb2NrQVBJLkJsb2NrRmxpcFgiLCJNb2NrQVBJLkJsb2NrRmxpcFkiLCJNb2NrQVBJLkJsb2NrRmxpcFoiLCJNb2NrQVBJLkJsb2NrUm90YXRlWCIsIk1vY2tBUEkuQmxvY2tSb3RhdGVZIiwiTW9ja0FQSS5CbG9ja1JvdGF0ZVoiLCJNb2NrQVBJLkNhbmNlbEFsbENvbmZpZ0NoYW5nZXMiLCJNb2NrQVBJLkNhbmNlbEJsb2NrUGxhY2VtZW50IiwiTW9ja0FQSS5DYW5jZWxDaGFuZ2VDb25maWciLCJNb2NrQVBJLkNoYW5nZUJsb2NrVHlwZSIsIk1vY2tBUEkuQ2hhbmdlQ29uZmlnVmFyIiwiTW9ja0FQSS5DaGFuZ2Vab25lIiwiTW9ja0FQSS5DbG9zZVVJIiwiTW9ja0FQSS5Db21taXRCbG9jayIsIk1vY2tBUEkuQ29ubmVjdCIsIk1vY2tBUEkuQ29uc29sZUNvbW1hbmQiLCJNb2NrQVBJLkNvcHlCbHVlcHJpbnQiLCJNb2NrQVBJLkNyYXNoVGhlR2FtZSIsIk1vY2tBUEkuRHJvcExpZ2h0IiwiTW9ja0FQSS5FZGl0QWJpbGl0eSIsIk1vY2tBUEkuRW1vdGUiLCJNb2NrQVBJLkVxdWlwSXRlbSIsIk1vY2tBUEkuRmlyZSIsIk1vY2tBUEkuRm9jdXNVSSIsIk1vY2tBUEkuRk9WIiwiTW9ja0FQSS5HZXRDb25maWdWYXIiLCJNb2NrQVBJLkdldENvbmZpZ1ZhcnMiLCJNb2NrQVBJLkdldEl0ZW0iLCJNb2NrQVBJLkhpZGVVSSIsIk1vY2tBUEkuSWdub3JlIiwiTW9ja0FQSS5Kb2luTVVDIiwiTW9ja0FQSS5MZWF2ZU1VQyIsIk1vY2tBUEkuT25BYmlsaXR5RXJyb3IiLCJNb2NrQVBJLk9uU2F2ZWRDb25maWdDaGFuZ2VzIiwiTW9ja0FQSS5PcGVuU2NyZWVuc2hvdFNoYXJlIiwiTW9ja0FQSS5PcGVuVUkiLCJNb2NrQVBJLlBhc3RlQmx1ZXByaW50IiwiTW9ja0FQSS5QbGF5U291bmRFdmVudCIsIk1vY2tBUEkuUXVpdCIsIk1vY2tBUEkuUmVnaXN0ZXJBYmlsaXR5IiwiTW9ja0FQSS5SZWxlYXNlSW5wdXRPd25lcnNoaXAiLCJNb2NrQVBJLlJlbW92ZUlzbGFuZHMiLCJNb2NrQVBJLlJlcXVlc3RCbG9ja3MiLCJNb2NrQVBJLlJlcXVlc3RCbG9ja1RhZ3MiLCJNb2NrQVBJLlJlcXVlc3RCbHVlcHJpbnRzIiwiTW9ja0FQSS5SZXF1ZXN0SW5wdXRPd25lcnNoaXAiLCJNb2NrQVBJLlJlc2V0TGlnaHRzIiwiTW9ja0FQSS5SZXNwYXduIiwiTW9ja0FQSS5SZXN0b3JlQ29uZmlnRGVmYXVsdHMiLCJNb2NrQVBJLlNhdmVCbHVlcHJpbnQiLCJNb2NrQVBJLlNhdmVDb25maWdDaGFuZ2VzIiwiTW9ja0FQSS5TZWxlY3RCbHVlcHJpbnQiLCJNb2NrQVBJLlNlbmRDaGF0IiwiTW9ja0FQSS5TZW5kU2xhc2hDb21tYW5kIiwiTW9ja0FQSS5TZXRCdWlsZGluZ01vZGUiLCJNb2NrQVBJLlNob3dBYmlsaXR5IiwiTW9ja0FQSS5TaG93VUkiLCJNb2NrQVBJLlN0dWNrIiwiTW9ja0FQSS5UYWtlU2NyZWVuc2hvdCIsIk1vY2tBUEkuVG9nZ2xlQnVpbGRpbmdNb2RlIiwiTW9ja0FQSS5Ub2dnbGVDYW1lcmEiLCJNb2NrQVBJLlRvZ2dsZVVJVmlzaWJpbGl0eSIsIk1vY2tBUEkuVW5lcXVpcEl0ZW0iLCJNb2NrQVBJLmxvZ2luVG9rZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs2QkFTNEMsZUFBZTs7SUFFM0QsZ0JBQUEsR0FJRUEsU0FKRixnQkFBQSxDQUljQSxFQUFVQSxFQUFFQSxDQUFXQSxFQUFFQSxLQUFhQSxFQUFBQTswQkFKcEQsZ0JBQUE7O0FBS0lDLFFBQUlBLENBQUNBLEVBQUVBLEdBQUdBLEVBQUVBLENBQUNBO0FB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Q3pCQTthQUNhaEksYUFBQ0EsVUFBa0JBLEVBQUFBO0FBQy9CZ0ksZ0JBQUlBLENBQUNBLFdBQVdBLEdBQUdBLFVBQVVBLENBQUNBO1NBQy9CQTs7O1dBNUVILE9BQUE7OztxQkFBQSxPQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cInRzZC90c2QuZC50c1wiLz5cblxuaW1wb3J0IHtjbGllbnRJbnRlcmZhY2UsIHRhZ3N9IGZyb20gJ2N1LWNvcmUnO1xuaW1wb3J0IHtFdmVudEVtaXR0ZXIyIGFzIEV2ZW50RW1pdHRlcn0gZnJvbSAnZXZlbnRlbWl0dGVyMic7XG5cbmNsYXNzIEV2ZW50RW1pdHRlckhhc2gge1xuICBpZDogbnVtYmVyO1xuICBjOiBGdW5jdGlvbjtcbiAgZXZlbnQ6IHN0cmluZztcbiAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgYzogRnVuY3Rpb24sIGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5jID0gYztcbiAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9ja0FQSSB7XG4gIHByaXZhdGUgX21vY2tFdmVudEVtaXR0ZXJJbnRlcm5hbDogRXZlbnRFbWl0dGVyO1xuICBwcml2YXRlIF9tb2NrRXZlbnRFbWl0dGVyOiBFdmVudEVtaXR0ZXI7XG4gIHByaXZhdGUgX21vY2tFdmVudEVtaXR0ZXJIYXNoOiBFdmVudEVtaXR0ZXJIYXNoW107XG4gIHByaXZhdGUgX21vY2tFdmVudEVtaXR0ZXJDb3VudGVyOiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBfbW9ja0luaXRpYWxpemUoKSB7XG4gICAgdGhpcy5fbW9ja0V2ZW50RW1pdHRlckNvdW50ZXIgPSAwO1xuICAgIHRoaXMuX21vY2tFdmVudEVtaXR0ZXJJbnRlcm5hbCA9IG5ldyBFdmVudEVtaXR0ZXIoe1xuICAgICAgd2lsZGNhcmQ6IHRydWUsXG4gICAgICBtYXhMaXN0ZW5lcnM6IDUwXG4gICAgfSk7XG4gICAgdGhpcy5fbW9ja0V2ZW50RW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoe1xuICAgICAgd2lsZGNhcmQ6IHRydWUsXG4gICAgICBtYXhMaXN0ZW5lcnM6IDUwXG4gICAgfSk7XG4gICAgdGhpcy5fbW9ja0V2ZW50RW1pdHRlckhhc2ggPSBbXTtcbiAgfVxuXG4gIHByaXZhdGUgX21vY2tBZGRFdmVudExpc3RlbmVyKGV2ZW50OiBzdHJpbmcsIGM6IEZ1bmN0aW9uKTogbnVtYmVyIHtcbiAgICB0aGlzLl9tb2NrRXZlbnRFbWl0dGVyQ291bnRlciArPSAxO1xuICAgIGNvbnN0IGV2ZW50SGFzaCA9IG5ldyBFdmVudEVtaXR0ZXJIYXNoKHRoaXMuX21vY2tFdmVudEVtaXR0ZXJDb3VudGVyLCBjLCBldmVudCk7XG4gICAgdGhpcy5fbW9ja0V2ZW50RW1pdHRlckhhc2gucHVzaChldmVudEhhc2gpO1xuICAgIHRoaXMuX21vY2tFdmVudEVtaXR0ZXIub24oZXZlbnRIYXNoLmV2ZW50LCBldmVudEhhc2guYyk7XG4gICAgcmV0dXJuIGV2ZW50SGFzaC5pZDtcbiAgfVxuXG4gIHByaXZhdGUgX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZChldmVudDogc3RyaW5nLCBjOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjKTtcbiAgfVxuXG4gIHByaXZhdGUgX21vY2tSZW1vdmVFdmVudExpc3RlbmVyKGlkOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9tb2NrRXZlbnRFbWl0dGVySGFzaCA9IHRoaXMuX21vY2tFdmVudEVtaXR0ZXJIYXNoLmZpbHRlcigoaGFzaDogRXZlbnRFbWl0dGVySGFzaCkgPT4ge1xuICAgICAgaWYgKGhhc2guaWQgPT09IGlkKSB7XG4gICAgICAgIHRoaXMuX21vY2tFdmVudEVtaXR0ZXIub2ZmKGhhc2guZXZlbnQsIGhhc2guYyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9tb2NrSW5pdGlhbGl6ZSgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgIGNvbnN0IGxvZ2luVG9rZW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdtb2NrX2xvZ2luVG9rZW4nKTtcbiAgICAgIGlmIChsb2dpblRva2VuKSB7XG4gICAgICAgIHRoaXMubG9naW5Ub2tlbiA9IGxvZ2luVG9rZW47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX21vY2tFdmVudEVtaXR0ZXIuZW1pdCgnSW5pdGlhbGl6ZWQnKTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIGNoYXJhY3RlcnM6IG51bWJlciA9IDE7XG4gIGRvd25Db2xsaXNpb25BbmdsZTogbnVtYmVyID0gMTtcbiAgZmFjaW5nOiBudW1iZXIgPSAxO1xuICBmcHM6IG51bWJlciA9IDE7XG4gIGZyYW1lVGltZTogbnVtYmVyID0gMTtcbiAgaG9yaXpvbnRhbFNwZWVkOiBudW1iZXIgPSAxO1xuICBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuICBsb2NhdGlvblg6IG51bWJlciA9IDE7XG4gIGxvY2F0aW9uWTogbnVtYmVyID0gMTtcbiAgbG9jYXRpb25aOiBudW1iZXIgPSAxO1xuICBfbG9naW5Ub2tlbjogc3RyaW5nID0gJyc7XG4gIGdldCBsb2dpblRva2VuKCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLl9sb2dpblRva2VuKSB7XG4gICAgICB0aGlzLl9sb2dpblRva2VuID0gd2luZG93LnByb21wdCgnTG9naW4gVG9rZW4/Jyk7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdtb2NrX2xvZ2luVG9rZW4nLCB0aGlzLl9sb2dpblRva2VuKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2xvZ2luVG9rZW47XG4gIH1cbiAgc2V0IGxvZ2luVG9rZW4obG9naW5Ub2tlbjogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9naW5Ub2tlbiA9IGxvZ2luVG9rZW47XG4gIH1cbiAgbWFpblZvbHVtZTogbnVtYmVyID0gMTtcbiAgbXV0ZVZvbHVtZTogYm9vbGVhbiA9IHRydWU7XG4gIG5ldHN0YXRzX2xhZzogbnVtYmVyID0gMTtcbiAgbmV0c3RhdHNfcGxheWVyc19uZXdCaXRzOiBudW1iZXIgPSAxO1xuICBuZXRzdGF0c19wbGF5ZXJzX25ld0NvdW50OiBudW1iZXIgPSAxO1xuICBuZXRzdGF0c19wbGF5ZXJzX3VwZGF0ZUJpdHM6IG51bWJlciA9IDE7XG4gIG5ldHN0YXRzX3BsYXllcnNfdXBkYXRlQ291bnQ6IG51bWJlciA9IDE7XG4gIG5ldHN0YXRzX3RjcEJ5dGVzOiBudW1iZXIgPSAxO1xuICBuZXRzdGF0c190Y3BNZXNzYWdlczogbnVtYmVyID0gMTtcbiAgbmV0c3RhdHNfdWRwQnl0ZXM6IG51bWJlciA9IDE7XG4gIG5ldHN0YXRzX3VkcFBhY2tldHM6IG51bWJlciA9IDE7XG4gIHBhcnRpY2xlc1JlbmRlcmVkQ291bnQ6IG51bWJlciA9IDE7XG4gIHBhdGNoUmVzb3VyY2VDaGFubmVsOiBudW1iZXIgPSAxO1xuICBwZXJmSFVEOiBzdHJpbmcgPSAnJztcbiAgcGt0SGFzaDogc3RyaW5nID0gJyc7XG4gIHNlcnZlckxvY2F0aW9uWDogbnVtYmVyID0gMTtcbiAgc2VydmVyTG9jYXRpb25ZOiBudW1iZXIgPSAxO1xuICBzZXJ2ZXJMb2NhdGlvblo6IG51bWJlciA9IDE7XG4gIHNlcnZlclRpbWU6IG51bWJlciA9IDE7XG4gIHNlcnZlclVSTDogc3RyaW5nID0gJyc7XG4gIHNwZWVkOiBudW1iZXIgPSAxO1xuICB0ZXJyYWluOiBudW1iZXIgPSAxO1xuICB0ZXJyYWluQ29sbGlzaW9uQW5nbGU6IG51bWJlciA9IDE7XG4gIHZlbEZhY2luZzogbnVtYmVyID0gMTtcbiAgdmVsb2NpdHlYOiBudW1iZXIgPSAxO1xuICB2ZWxvY2l0eVk6IG51bWJlciA9IDE7XG4gIHZlbG9jaXR5WjogbnVtYmVyID0gMTtcbiAgdnN5bmM6IG51bWJlciA9IDE7XG4gIHdlYkFQSUhvc3Q6IHN0cmluZyA9ICcnO1xuXG4gIE9uQWJpbGl0eUFjdGl2ZShjOiAoY3VycmVudEFiaWxpdHk6IHN0cmluZywgdGltZVN0YXJ0ZWQ6IG51bWJlciwgdGltZVRyaWdnZXJlZDogbnVtYmVyLCBxdWV1ZWRBYmlsaXR5OiBzdHJpbmcpID0+IGFueSk6IG51bWJlciB7IHJldHVybiB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lcignQWJpbGl0eUFjdGl2ZScsIGMpOyB9O1xuICBPbkFiaWxpdHlDb29sZG93bihjOiAoY29vbGRvd25JRDogbnVtYmVyLCB0aW1lU3RhcnRlZDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKSA9PiB2b2lkKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyKCdBYmlsaXR5Q29vbGRvd24nLCBjKTsgfTtcbiAgT25BYmlsaXR5Q3JlYXRlZChjYWxsYmFjazogKGFiaWxpdHlJRDogc3RyaW5nLCBhYmlsaXR5OiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdBYmlsaXR5Q3JlYXRlZCcsIGNhbGxiYWNrKTsgfTtcbiAgT25BYmlsaXR5RGVsZXRlZChjYWxsYmFjazogKGFiaWxpdHlJRDogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnQWJpbGl0eURlbGV0ZWQnLCBjYWxsYmFjayk7IH07XG4gIE9uQWJpbGl0eU51bWJlcnNDaGFuZ2VkKGNhbGxiYWNrOiAoYWJpbGl0eU51bWJlcnM6IHN0cmluZ1tdKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnQWJpbGl0eU51bWJlcnNDaGFuZ2VkJywgY2FsbGJhY2spOyB9O1xuICBPbkFiaWxpdHlSZWdpc3RlcmVkKGNhbGxiYWNrOiAoYWJpbGl0eUlEOiBzdHJpbmcsIGNvb2xkb3duczogc3RyaW5nLCBkdXJhdGlvbjogbnVtYmVyLCB0cmlnZ2VyVGltZTogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnQWJpbGl0eVJlZ2lzdGVyZWQnLCBjYWxsYmFjayk7IH07XG4gIE9uQW5ub3VuY2VtZW50KGM6IChtZXNzYWdlOiBzdHJpbmcsIHR5cGU6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ0Fubm91bmNlbWVudCcsIGMpOyB9O1xuICBPbkJlZ2luQ2hhdChjOiAoY29tbWFuZE1vZGU6IG51bWJlciwgdGV4dDogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnQmVnaW5DaGF0JywgYyk7IH07XG4gIE9uQnVpbGRpbmdNb2RlQ2hhbmdlZChjOiAoYnVpbGRpbmdNb2RlOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnQnVpbGRpbmdNb2RlQ2hhbmdlZCcsIGMpOyB9O1xuICBPbkNoYXJhY3RlckVmZmVjdHNDaGFuZ2VkKGM6IChlZmZlY3RzOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdDaGFyYWN0ZXJFZmZlY3RzQ2hhbmdlZCcsIGMpOyB9O1xuICBPbkNoYXJhY3RlckZhY3Rpb25DaGFuZ2VkKGM6IChmYWN0aW9uOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdDaGFyYWN0ZXJGYWN0aW9uQ2hhbmdlZCcsIGMpOyB9O1xuICBPbkNoYXJhY3RlckhlYWx0aENoYW5nZWQoYzogKGhlYWx0aDogbnVtYmVyLCBtYXhIZWFsdGg6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ0NoYXJhY3RlckhlYWx0aENoYW5nZWQnLCBjKTsgfTtcbiAgT25DaGFyYWN0ZXJJRENoYW5nZWQoYzogKGlkOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdDaGFyYWN0ZXJJRENoYW5nZWQnLCBjKTsgfTtcbiAgT25DaGFyYWN0ZXJOYW1lQ2hhbmdlZChjOiAobmFtZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnQ2hhcmFjdGVyTmFtZUNoYW5nZWQnLCBjKTsgfTtcbiAgT25DaGFyYWN0ZXJSYWNlQ2hhbmdlZChjOiAocmFjZTogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnQ2hhcmFjdGVyUmFjZUNoYW5nZWQnLCBjKTsgfTtcbiAgT25DaGFyYWN0ZXJTdGFtaW5hQ2hhbmdlZChjOiAoc3RhbWluYTogbnVtYmVyLCBtYXhTdGFtaW5hOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdDaGFyYWN0ZXJTdGFtaW5hQ2hhbmdlZCcsIGMpOyB9O1xuICBPbkNoYXQoYzogKHR5cGU6IG51bWJlciwgZnJvbTogc3RyaW5nLCBib2R5OiBzdHJpbmcsIG5pY2s6IHN0cmluZywgaXNjc2U6IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdDaGF0JywgYyk7IH07XG4gIE9uQ2xvc2VVSShjYWxsYmFjazogKG5hbWU6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ0Nsb3NlVUknLCBjYWxsYmFjayk7IH07XG4gIE9uQ29uZmlnVmFyQ2hhbmdlZChjOiAoaXNDaGFuZ2VTdWNjZXNzZnVsOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnQ29uZmlnVmFyQ2hhbmdlZCcsIGMpOyB9O1xuICBPbkNvbnNvbGVUZXh0KGM6ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdDb25zb2xlVGV4dCcsIGMpOyB9O1xuICBPbkNvcHlCbHVlcHJpbnQoYzogKCkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ0NvcHlCbHVlcHJpbnQnLCBjKTsgfTtcbiAgT25FZGl0QWJpbGl0eShjYWxsYmFjazogKGFiaWxpdHlJRDogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnRWRpdEFiaWxpdHknLCBjYWxsYmFjayk7IH07XG4gIE9uRW5lbXlUYXJnZXRFZmZlY3RzQ2hhbmdlZChjYWxsYmFjazogKGVmZmVjdHM6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ0VuZW15VGFyZ2V0RWZmZWN0c0NoYW5nZWQnLCBjYWxsYmFjayk7IH07XG4gIE9uRW5lbXlUYXJnZXRIZWFsdGhDaGFuZ2VkKGNhbGxiYWNrOiAoaGVhbHRoOiBudW1iZXIsIG1heEhlYWx0aDogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnRW5lbXlUYXJnZXRIZWFsdGhDaGFuZ2VkJywgY2FsbGJhY2spOyB9O1xuICBPbkVuZW15VGFyZ2V0TmFtZUNoYW5nZWQoY2FsbGJhY2s6IChuYW1lOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdFbmVteVRhcmdldE5hbWVDaGFuZ2VkJywgY2FsbGJhY2spOyB9O1xuICBPbkVuZW15VGFyZ2V0U3RhbWluYUNoYW5nZWQoY2FsbGJhY2s6IChzdGFtaW5hOiBudW1iZXIsIG1heFN0YW1pbmE6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ0VuZW15VGFyZ2V0U3RhbWluYUNoYW5nZWQnLCBjYWxsYmFjayk7IH07XG4gIE9uRXF1aXBwZWRHZWFySXRlbUlEc0NoYW5nZWQoY2FsbGJhY2s6IChnZWFySXRlbUlEczogc3RyaW5nW10pID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdFcXVpcHBlZEdlYXJJdGVtSURzQ2hhbmdlZCcsIGNhbGxiYWNrKTsgfTtcbiAgT25FdmVudChjYWxsYmFjazogKGV2ZW50OiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCcqJywgZnVuY3Rpb24oLi4uYXJnczogYW55W10pIHtcbiAgICAgIGNhbGxiYWNrKHRoaXMuZXZlbnQsIC4uLmFyZ3MpO1xuICAgIH0pO1xuICB9O1xuICBPbkZyaWVuZGx5VGFyZ2V0RWZmZWN0c0NoYW5nZWQoY2FsbGJhY2s6IChlZmZlY3RzOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdGcmllbmRseVRhcmdldEVmZmVjdHNDaGFuZ2VkJywgY2FsbGJhY2spOyB9O1xuICBPbkZyaWVuZGx5VGFyZ2V0SGVhbHRoQ2hhbmdlZChjYWxsYmFjazogKGhlYWx0aDogbnVtYmVyLCBtYXhIZWFsdGg6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ0ZyaWVuZGx5VGFyZ2V0SGVhbHRoQ2hhbmdlZCcsIGNhbGxiYWNrKTsgfTtcbiAgT25GcmllbmRseVRhcmdldE5hbWVDaGFuZ2VkKGNhbGxiYWNrOiAobmFtZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnRnJpZW5kbHlUYXJnZXROYW1lQ2hhbmdlZCcsIGNhbGxiYWNrKTsgfTtcbiAgT25GcmllbmRseVRhcmdldFN0YW1pbmFDaGFuZ2VkKGNhbGxiYWNrOiAoc3RhbWluYTogbnVtYmVyLCBtYXhTdGFtaW5hOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdGcmllbmRseVRhcmdldFN0YW1pbmFDaGFuZ2VkJywgY2FsbGJhY2spOyB9O1xuICBPbkdldEl0ZW0oY2FsbGJhY2s6IChpdGVtSUQ6IHN0cmluZywgZGF0YTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnR2V0SXRlbScsIGNhbGxiYWNrKTsgfTtcbiAgT25IaWRlVUkoY2FsbGJhY2s6IChuYW1lOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdIaWRlVUknLCBjYWxsYmFjayk7IH07XG4gIE9uSW5pdGlhbGl6ZWQoYzogKCkgPT4gdm9pZCk6IG51bWJlciB7XG4gICAgY29uc3QgaWQgPSB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lcignSW5pdGlhbGl6ZWQnLCBjKTtcbiAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX21vY2tFdmVudEVtaXR0ZXIuZW1pdCgnSW5pdGlhbGl6ZWQnKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgICByZXR1cm4gaWQ7XG4gIH07XG4gIE9uSW52ZW50b3J5SXRlbUlEc0NoYW5nZWQoY2FsbGJhY2s6IChpbnZlbnRvcnlJdGVtSURzOiBzdHJpbmdbXSkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ0ludmVudG9yeUl0ZW1JRHNDaGFuZ2VkJywgY2FsbGJhY2spOyB9O1xuICBPbkl0ZW1FcXVpcHBlZChjYWxsYmFjazogKGl0ZW1JRDogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnSXRlbUVxdWlwcGVkJywgY2FsbGJhY2spOyB9O1xuICBPbkl0ZW1VbmVxdWlwcGVkKGNhbGxiYWNrOiAoaXRlbUlEOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdJdGVtVW5lcXVpcHBlZCcsIGNhbGxiYWNrKTsgfTtcbiAgT25Mb2dNZXNzYWdlKGM6IChjYXRlZ29yeTogc3RyaW5nLCBsZXZlbDogbnVtYmVyLCB0aW1lOiBzdHJpbmcsIHByb2Nlc3M6IG51bWJlciwgdGhyZWFkOiBudW1iZXIsIG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ0xvZ01lc3NhZ2UnLCBjKTsgfTtcbiAgT25OZXdCbHVlcHJpbnQoYzogKGluZGV4OiBudW1iZXIsIG5hbWU6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ05ld0JsdWVwcmludCcsIGMpOyB9O1xuICBPbk9wZW5VSShjYWxsYmFjazogKG5hbWU6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ09wZW5VSScsIGNhbGxiYWNrKTsgfTtcbiAgT25SZWNlaXZlQmxvY2tzKGM6IChidWlsZGluZ0RpY3Q6IGFueSkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ1JlY2VpdmVCbG9ja3MnLCBjKTsgfTtcbiAgT25SZWNlaXZlQmxvY2tUYWdzKGM6IChibG9ja0lEOiBudW1iZXIsIHRhZ0RpY3Q6IGFueSkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ1JlY2VpdmVCbG9ja1RhZ3MnLCBjKTsgfTtcbiAgT25SZWNlaXZlQ29uZmlnVmFyKGM6IChjb25maWc6IGFueSkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ1JlY2VpdmVDb25maWdWYXInLCBjKTsgfTtcbiAgT25SZWNlaXZlQ29uZmlnVmFycyhjOiAoY29uZmlnczogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnUmVjZWl2ZUNvbmZpZ1ZhcnMnLCBjKTsgfTtcbiAgT25SZWNlaXZlU2NyZWVuU2hvdChjOiAoc2NyZWVuU2hvdFN0cmluZzogYW55KSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnUmVjZWl2ZVNjcmVlblNob3QnLCBjKTsgfTtcbiAgT25TZXJ2ZXJDb25uZWN0ZWQoYzogKGlzQ29ubmVjdGVkOiBib29sZWFuKSA9PiB2b2lkKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyKCdTZXJ2ZXJDb25uZWN0ZWQnLCBjKTsgfTtcbiAgT25TaG93QWJpbGl0eShjYWxsYmFjazogKGFiaWxpdHlJRDogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnU2hvd0FiaWxpdHknLCBjYWxsYmFjayk7IH07XG4gIE9uU2hvd1VJKGNhbGxiYWNrOiAobmFtZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnU2hvd1VJJywgY2FsbGJhY2spOyB9O1xuICBPblVwZGF0ZU5hbWVwbGF0ZShjOiAoY2VsbDogbnVtYmVyLCBjb2xvck1vZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGd0YWc6IHN0cmluZywgdGl0bGU6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ1VwZGF0ZU5hbWVwbGF0ZScsIGMpOyB9O1xuICBMaXN0ZW4oZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZChldmVudCwgY2FsbGJhY2spOyB9O1xuXG4gIENhbmNlbE9uQWJpbGl0eUFjdGl2ZShjOiBudW1iZXIpOiB2b2lkIHsgdGhpcy5fbW9ja1JlbW92ZUV2ZW50TGlzdGVuZXIoYykgfTtcbiAgQ2FuY2VsT25BYmlsaXR5Q29vbGRvd24oYzogbnVtYmVyKTogdm9pZCB7IHRoaXMuX21vY2tSZW1vdmVFdmVudExpc3RlbmVyKGMpIH07XG4gIENhbmNlbE9uSW5pdGlhbGl6ZWQoYzogbnVtYmVyKTogdm9pZCB7IHRoaXMuX21vY2tSZW1vdmVFdmVudExpc3RlbmVyKGMpIH07XG4gIENhbmNlbE9uU2VydmVyQ29ubmVjdGVkKGM6IG51bWJlcik6IHZvaWQgeyB0aGlzLl9tb2NrUmVtb3ZlRXZlbnRMaXN0ZW5lcihjKSB9O1xuXG4gIEFiaWxpdHlDcmVhdGVkKGFiaWxpdHlJRDogc3RyaW5nLCBwcmltYXJ5QmFzZUNvbXBvbmVudElEOiBzdHJpbmcsIHNlY29uZGFyeUJhc2VDb21wb25lbnRJRDogc3RyaW5nLCBhYmlsaXR5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9tb2NrRXZlbnRFbWl0dGVyLmVtaXQoJ0FiaWxpdHlDcmVhdGVkJywgYWJpbGl0eUlELCBhYmlsaXR5KTtcbiAgfTtcbiAgQWJpbGl0eURlbGV0ZWQoYWJpbGl0eUlEOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9tb2NrRXZlbnRFbWl0dGVyLmVtaXQoJ0FiaWxpdHlEZWxldGVkJywgYWJpbGl0eUlEKTtcbiAgfTtcbiAgQXBwbHlTdGFiaWxpdHkoKTogdm9pZCB7IH07XG4gIEF0dGFjayhhYmlsaXR5SUQ6IHN0cmluZyk6IHZvaWQgeyB9O1xuICBCbG9ja0ZsaXBYKCk6IHZvaWQgeyB9O1xuICBCbG9ja0ZsaXBZKCk6IHZvaWQgeyB9O1xuICBCbG9ja0ZsaXBaKCk6IHZvaWQgeyB9O1xuICBCbG9ja1JvdGF0ZVgoKTogdm9pZCB7IH07XG4gIEJsb2NrUm90YXRlWSgpOiB2b2lkIHsgfTtcbiAgQmxvY2tSb3RhdGVaKCk6IHZvaWQgeyB9O1xuICBDYW5jZWxBbGxDb25maWdDaGFuZ2VzKHRhZzogdGFncyk6IHZvaWQgeyB9O1xuICBDYW5jZWxCbG9ja1BsYWNlbWVudCgpOiB2b2lkIHsgfTtcbiAgQ2FuY2VsQ2hhbmdlQ29uZmlnKHZhcmlhYmxlOiBzdHJpbmcpOiB2b2lkIHsgfTtcbiAgQ2hhbmdlQmxvY2tUeXBlKGM6IChuZXdUeXBlOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHsgfTtcbiAgQ2hhbmdlQ29uZmlnVmFyKHZhcmlhYmxlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHsgfTtcbiAgQ2hhbmdlWm9uZSh6b25lSUQ6IG51bWJlcik6IHZvaWQgeyB9O1xuICBDbG9zZVVJKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX21vY2tFdmVudEVtaXR0ZXIuZW1pdCgnQ2xvc2VVSScsIG5hbWUpO1xuICB9O1xuICBDb21taXRCbG9jaygpOiB2b2lkIHsgfTtcbiAgQ29ubmVjdChob3N0OiBzdHJpbmcsIHBvcnQ6IHN0cmluZywgY2hhcmFjdGVyOiBzdHJpbmcsIHdlYkFQSUhvc3Q6IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIFRPRE8gZG8gc29tZSBjb25uZWN0aW9uIGhlcmVcbiAgICB0aGlzLl9tb2NrRXZlbnRFbWl0dGVyLmVtaXQoJ1NlcnZlckNvbm5lY3RlZCcsIHRydWUpO1xuICB9O1xuICBDb25zb2xlQ29tbWFuZChib2R5OiBzdHJpbmcpOiB2b2lkIHsgfTtcbiAgQ29weUJsdWVwcmludCgpOiB2b2lkIHtcbiAgICB0aGlzLl9tb2NrRXZlbnRFbWl0dGVyLmVtaXQoJ0NvcHlCbHVlcHJpbnQnKTtcbiAgfTtcbiAgQ3Jhc2hUaGVHYW1lKCk6IHZvaWQgeyB9O1xuICBEcm9wTGlnaHQoaW50ZW5zaXR5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCByZWQ6IG51bWJlciwgZ3JlZW46IG51bWJlciwgYmx1ZTogbnVtYmVyKTogdm9pZCB7IH07XG4gIEVkaXRBYmlsaXR5KGFiaWxpdHlJRDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fbW9ja0V2ZW50RW1pdHRlci5lbWl0KCdFZGl0QWJpbGl0eScsIGFiaWxpdHlJRCk7XG4gIH07XG4gIEVtb3RlKGVtb3RlOiBudW1iZXIpOiB2b2lkIHsgfTtcbiAgRXF1aXBJdGVtKGl0ZW1JRDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fbW9ja0V2ZW50RW1pdHRlci5lbWl0KCdJdGVtRXF1aXBwZWQnLCBpdGVtSUQpO1xuICB9O1xuICBGaXJlKGV2ZW50OiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy5fbW9ja0V2ZW50RW1pdHRlci5lbWl0KGV2ZW50LCAuLi5hcmdzKTtcbiAgfTtcbiAgRm9jdXNVSShuYW1lOiBzdHJpbmcpOiB2b2lkIHsgfTtcbiAgRk9WKGRlZ3JlZXM6IG51bWJlcik6IHZvaWQgeyB9O1xuICBHZXRDb25maWdWYXIodmFyaWFibGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX21vY2tFdmVudEVtaXR0ZXIuZW1pdCgnUmVjZWl2ZUNvbmZpZ1ZhcicsICdjb25maWcgdmFsdWUnKTsgLy8gVE9ETyBnZXQgdGhpcyBmcm9tIGRhdGFcbiAgfTtcbiAgR2V0Q29uZmlnVmFycyh0YWc6IHRhZ3MpOiB2b2lkIHtcbiAgICB0aGlzLl9tb2NrRXZlbnRFbWl0dGVyLmVtaXQoJ1JlY2VpdmVDb25maWdWYXJzJywgJ2NvbmZpZyB2YWx1ZScpOyAvLyBUT0RPIGdldCB0aGlzIGZyb20gZGF0YVxuICB9O1xuICBHZXRJdGVtKGl0ZW1JRDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fbW9ja0V2ZW50RW1pdHRlci5lbWl0KCdHZXRJdGVtJywgMSwgJ2l0ZW0tZGF0YScpOyAvLyBUT0RPIGdldCB0aGlzIGZyb20gZGF0YVxuICB9O1xuICBIaWRlVUkobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fbW9ja0V2ZW50RW1pdHRlci5lbWl0KCdIaWRlVUknLCBuYW1lKTtcbiAgfTtcbiAgSWdub3JlKGV2ZW50OiBzdHJpbmcpOiB2b2lkIHsgfTtcbiAgSm9pbk1VQyhyb29tOiBzdHJpbmcpOiB2b2lkIHsgfTtcbiAgTGVhdmVNVUMocm9vbTogc3RyaW5nKTogdm9pZCB7IH07XG4gIE9uQWJpbGl0eUVycm9yKGM6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHsgfTtcbiAgT25TYXZlZENvbmZpZ0NoYW5nZXMoYzogKCkgPT4gdm9pZCk6IHZvaWQgeyB9O1xuICBPcGVuU2NyZWVuc2hvdFNoYXJlKCk6IHZvaWQgeyB9O1xuICBPcGVuVUkobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fbW9ja0V2ZW50RW1pdHRlci5lbWl0KCdPcGVuVUknLCBuYW1lKTtcbiAgfTtcbiAgUGFzdGVCbHVlcHJpbnQoKTogdm9pZCB7IH07XG4gIFBsYXlTb3VuZEV2ZW50KGlkOiBudW1iZXIpOiB2b2lkIHsgfTtcbiAgUXVpdCgpOiB2b2lkIHsgfTtcbiAgUmVnaXN0ZXJBYmlsaXR5KGFiaWxpdHlJRDogc3RyaW5nLCBwcmltYXJ5QmFzZUNvbXBvbmVudElEOiBzdHJpbmcsIHNlY29uZGFyeUJhc2VDb21wb25lbnRJRDogc3RyaW5nKTogdm9pZCB7IH07XG4gIFJlbGVhc2VJbnB1dE93bmVyc2hpcCgpOiB2b2lkIHsgfTtcbiAgUmVtb3ZlSXNsYW5kcygpOiB2b2lkIHsgfTtcbiAgUmVxdWVzdEJsb2NrcygpOiB2b2lkIHtcbiAgICB0aGlzLl9tb2NrRXZlbnRFbWl0dGVyLmVtaXQoJ1JlY2VpdmVCbG9ja3MnLCBbXSk7IC8vIFRPRE8gZ2V0IHRoaXMgZnJvbSBkYXRhXG4gIH07XG4gIFJlcXVlc3RCbG9ja1RhZ3MoYzogKGJsb2NrSUQ6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX21vY2tFdmVudEVtaXR0ZXIuZW1pdCgnUmVjZWl2ZUJsb2NrVGFncycsICd0YWdEaWN0Jyk7IC8vIFRPRE8gZ2V0IHRoaXMgZnJvbSBkYXRhXG4gIH07XG4gIFJlcXVlc3RCbHVlcHJpbnRzKCk6IHZvaWQgeyB9O1xuICBSZXF1ZXN0SW5wdXRPd25lcnNoaXAoKTogdm9pZCB7IH07XG4gIFJlc2V0TGlnaHRzKCk6IHZvaWQgeyB9O1xuICBSZXNwYXduKGlkOiBzdHJpbmcpOiB2b2lkIHsgfTtcbiAgUmVzdG9yZUNvbmZpZ0RlZmF1bHRzKHRhZzogdGFncyk6IHZvaWQgeyB9O1xuICBTYXZlQmx1ZXByaW50KGM6IChuYW1lOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9tb2NrRXZlbnRFbWl0dGVyLmVtaXQoJ05ld0JsdWVwcmludCcsIDAsIG5hbWUpXG4gIH07XG4gIFNhdmVDb25maWdDaGFuZ2VzKCk6IHZvaWQgeyB9O1xuICBTZWxlY3RCbHVlcHJpbnQoYzogKGluZGV4OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHsgfTtcbiAgU2VuZENoYXQodHlwZTogbnVtYmVyLCB0bzogc3RyaW5nLCBib2R5OiBzdHJpbmcpOiB2b2lkIHsgfTtcbiAgU2VuZFNsYXNoQ29tbWFuZChjb21tYW5kOiBzdHJpbmcsIHBhcmFtZXRlcnM6IHN0cmluZyk6IHZvaWQgeyB9O1xuICBTZXRCdWlsZGluZ01vZGUobmV3TW9kZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fbW9ja0V2ZW50RW1pdHRlci5lbWl0KCdCdWlsZGluZ01vZGVDaGFuZ2VkJywgbmV3TW9kZSk7XG4gIH07XG4gIFNob3dBYmlsaXR5KGFiaWxpdHlJRDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fbW9ja0V2ZW50RW1pdHRlci5lbWl0KCdTaG93QWJpbGl0eScsIGFiaWxpdHlJRCk7XG4gIH07XG4gIFNob3dVSShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9tb2NrRXZlbnRFbWl0dGVyLmVtaXQoJ1Nob3dVSScsIG5hbWUpO1xuICB9O1xuICBTdHVjaygpOiB2b2lkIHsgfTtcbiAgVGFrZVNjcmVlbnNob3QoKTogdm9pZCB7XG4gICAgdGhpcy5fbW9ja0V2ZW50RW1pdHRlci5lbWl0KCdSZWNlaXZlU2NyZWVuU2hvdCcsICdzY3JlZW5TaG90U3RyaW5nJyk7IC8vIFRPRE8gZ2V0IHRoaXMgZnJvbSBkYXRhXG4gIH07XG4gIFRvZ2dsZUJ1aWxkaW5nTW9kZSgpOiB2b2lkIHt9O1xuICBUb2dnbGVDYW1lcmEoKTogdm9pZCB7IH07XG4gIFRvZ2dsZVVJVmlzaWJpbGl0eShuYW1lOiBzdHJpbmcpOiB2b2lkIHsgfTtcbiAgVW5lcXVpcEl0ZW0oaXRlbUlEOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9tb2NrRXZlbnRFbWl0dGVyLmVtaXQoJ0l0ZW1VbmVxdWlwcGVkJywgaXRlbUlEKTtcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=