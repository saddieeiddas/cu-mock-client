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
        value: function EquipItem(itemID) {}
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
        value: function GetConfigVar(variable) {}
    }, {
        key: 'GetConfigVars',
        value: function GetConfigVars(tag) {}
    }, {
        key: 'GetItem',
        value: function GetItem(itemID) {}
    }, {
        key: 'HideUI',
        value: function HideUI(name) {}
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
        key: 'Listen',
        value: function Listen(event) {}
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
        value: function OpenUI(name) {}
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
        value: function RequestBlocks() {}
    }, {
        key: 'RequestBlockTags',
        value: function RequestBlockTags(c) {}
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
        value: function SaveBlueprint(c) {}
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
        value: function SetBuildingMode(c) {}
    }, {
        key: 'ShowAbility',
        value: function ShowAbility(abilityID) {}
    }, {
        key: 'ShowUI',
        value: function ShowUI(name) {}
    }, {
        key: 'Stuck',
        value: function Stuck() {}
    }, {
        key: 'TakeScreenshot',
        value: function TakeScreenshot() {}
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
        value: function UnequipItem(itemID) {}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL21haW4udHMiXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVySGFzaCIsIkV2ZW50RW1pdHRlckhhc2guY29uc3RydWN0b3IiLCJNb2NrQVBJIiwiTW9ja0FQSS5jb25zdHJ1Y3RvciIsIk1vY2tBUEkuX21vY2tJbml0aWFsaXplIiwiTW9ja0FQSS5fbW9ja0FkZEV2ZW50TGlzdGVuZXIiLCJNb2NrQVBJLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQiLCJNb2NrQVBJLl9tb2NrUmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk1vY2tBUEkuT25BYmlsaXR5QWN0aXZlIiwiTW9ja0FQSS5PbkFiaWxpdHlDb29sZG93biIsIk1vY2tBUEkuT25BYmlsaXR5Q3JlYXRlZCIsIk1vY2tBUEkuT25BYmlsaXR5RGVsZXRlZCIsIk1vY2tBUEkuT25BYmlsaXR5TnVtYmVyc0NoYW5nZWQiLCJNb2NrQVBJLk9uQWJpbGl0eVJlZ2lzdGVyZWQiLCJNb2NrQVBJLk9uQW5ub3VuY2VtZW50IiwiTW9ja0FQSS5PbkJlZ2luQ2hhdCIsIk1vY2tBUEkuT25CdWlsZGluZ01vZGVDaGFuZ2VkIiwiTW9ja0FQSS5PbkNoYXJhY3RlckVmZmVjdHNDaGFuZ2VkIiwiTW9ja0FQSS5PbkNoYXJhY3RlckZhY3Rpb25DaGFuZ2VkIiwiTW9ja0FQSS5PbkNoYXJhY3RlckhlYWx0aENoYW5nZWQiLCJNb2NrQVBJLk9uQ2hhcmFjdGVySURDaGFuZ2VkIiwiTW9ja0FQSS5PbkNoYXJhY3Rlck5hbWVDaGFuZ2VkIiwiTW9ja0FQSS5PbkNoYXJhY3RlclJhY2VDaGFuZ2VkIiwiTW9ja0FQSS5PbkNoYXJhY3RlclN0YW1pbmFDaGFuZ2VkIiwiTW9ja0FQSS5PbkNoYXQiLCJNb2NrQVBJLk9uQ2xvc2VVSSIsIk1vY2tBUEkuT25Db25maWdWYXJDaGFuZ2VkIiwiTW9ja0FQSS5PbkNvbnNvbGVUZXh0IiwiTW9ja0FQSS5PbkNvcHlCbHVlcHJpbnQiLCJNb2NrQVBJLk9uRWRpdEFiaWxpdHkiLCJNb2NrQVBJLk9uRW5lbXlUYXJnZXRFZmZlY3RzQ2hhbmdlZCIsIk1vY2tBUEkuT25FbmVteVRhcmdldEhlYWx0aENoYW5nZWQiLCJNb2NrQVBJLk9uRW5lbXlUYXJnZXROYW1lQ2hhbmdlZCIsIk1vY2tBUEkuT25FbmVteVRhcmdldFN0YW1pbmFDaGFuZ2VkIiwiTW9ja0FQSS5PbkVxdWlwcGVkR2Vhckl0ZW1JRHNDaGFuZ2VkIiwiTW9ja0FQSS5PbkV2ZW50IiwiTW9ja0FQSS5PbkZyaWVuZGx5VGFyZ2V0RWZmZWN0c0NoYW5nZWQiLCJNb2NrQVBJLk9uRnJpZW5kbHlUYXJnZXRIZWFsdGhDaGFuZ2VkIiwiTW9ja0FQSS5PbkZyaWVuZGx5VGFyZ2V0TmFtZUNoYW5nZWQiLCJNb2NrQVBJLk9uRnJpZW5kbHlUYXJnZXRTdGFtaW5hQ2hhbmdlZCIsIk1vY2tBUEkuT25HZXRJdGVtIiwiTW9ja0FQSS5PbkhpZGVVSSIsIk1vY2tBUEkuT25Jbml0aWFsaXplZCIsIk1vY2tBUEkuT25JbnZlbnRvcnlJdGVtSURzQ2hhbmdlZCIsIk1vY2tBUEkuT25JdGVtRXF1aXBwZWQiLCJNb2NrQVBJLk9uSXRlbVVuZXF1aXBwZWQiLCJNb2NrQVBJLk9uTG9nTWVzc2FnZSIsIk1vY2tBUEkuT25OZXdCbHVlcHJpbnQiLCJNb2NrQVBJLk9uT3BlblVJIiwiTW9ja0FQSS5PblJlY2VpdmVCbG9ja3MiLCJNb2NrQVBJLk9uUmVjZWl2ZUJsb2NrVGFncyIsIk1vY2tBUEkuT25SZWNlaXZlQ29uZmlnVmFyIiwiTW9ja0FQSS5PblJlY2VpdmVDb25maWdWYXJzIiwiTW9ja0FQSS5PblJlY2VpdmVTY3JlZW5TaG90IiwiTW9ja0FQSS5PblNlcnZlckNvbm5lY3RlZCIsIk1vY2tBUEkuT25TaG93QWJpbGl0eSIsIk1vY2tBUEkuT25TaG93VUkiLCJNb2NrQVBJLk9uVXBkYXRlTmFtZXBsYXRlIiwiTW9ja0FQSS5DYW5jZWxPbkFiaWxpdHlBY3RpdmUiLCJNb2NrQVBJLkNhbmNlbE9uQWJpbGl0eUNvb2xkb3duIiwiTW9ja0FQSS5DYW5jZWxPbkluaXRpYWxpemVkIiwiTW9ja0FQSS5DYW5jZWxPblNlcnZlckNvbm5lY3RlZCIsIk1vY2tBUEkuQWJpbGl0eUNyZWF0ZWQiLCJNb2NrQVBJLkFiaWxpdHlEZWxldGVkIiwiTW9ja0FQSS5BcHBseVN0YWJpbGl0eSIsIk1vY2tBUEkuQXR0YWNrIiwiTW9ja0FQSS5CbG9ja0ZsaXBYIiwiTW9ja0FQSS5CbG9ja0ZsaXBZIiwiTW9ja0FQSS5CbG9ja0ZsaXBaIiwiTW9ja0FQSS5CbG9ja1JvdGF0ZVgiLCJNb2NrQVBJLkJsb2NrUm90YXRlWSIsIk1vY2tBUEkuQmxvY2tSb3RhdGVaIiwiTW9ja0FQSS5DYW5jZWxBbGxDb25maWdDaGFuZ2VzIiwiTW9ja0FQSS5DYW5jZWxCbG9ja1BsYWNlbWVudCIsIk1vY2tBUEkuQ2FuY2VsQ2hhbmdlQ29uZmlnIiwiTW9ja0FQSS5DaGFuZ2VCbG9ja1R5cGUiLCJNb2NrQVBJLkNoYW5nZUNvbmZpZ1ZhciIsIk1vY2tBUEkuQ2hhbmdlWm9uZSIsIk1vY2tBUEkuQ2xvc2VVSSIsIk1vY2tBUEkuQ29tbWl0QmxvY2siLCJNb2NrQVBJLkNvbm5lY3QiLCJNb2NrQVBJLkNvbnNvbGVDb21tYW5kIiwiTW9ja0FQSS5Db3B5Qmx1ZXByaW50IiwiTW9ja0FQSS5DcmFzaFRoZUdhbWUiLCJNb2NrQVBJLkRyb3BMaWdodCIsIk1vY2tBUEkuRWRpdEFiaWxpdHkiLCJNb2NrQVBJLkVtb3RlIiwiTW9ja0FQSS5FcXVpcEl0ZW0iLCJNb2NrQVBJLkZpcmUiLCJNb2NrQVBJLkZvY3VzVUkiLCJNb2NrQVBJLkZPViIsIk1vY2tBUEkuR2V0Q29uZmlnVmFyIiwiTW9ja0FQSS5HZXRDb25maWdWYXJzIiwiTW9ja0FQSS5HZXRJdGVtIiwiTW9ja0FQSS5IaWRlVUkiLCJNb2NrQVBJLklnbm9yZSIsIk1vY2tBUEkuSm9pbk1VQyIsIk1vY2tBUEkuTGVhdmVNVUMiLCJNb2NrQVBJLkxpc3RlbiIsIk1vY2tBUEkuT25BYmlsaXR5RXJyb3IiLCJNb2NrQVBJLk9uU2F2ZWRDb25maWdDaGFuZ2VzIiwiTW9ja0FQSS5PcGVuU2NyZWVuc2hvdFNoYXJlIiwiTW9ja0FQSS5PcGVuVUkiLCJNb2NrQVBJLlBhc3RlQmx1ZXByaW50IiwiTW9ja0FQSS5QbGF5U291bmRFdmVudCIsIk1vY2tBUEkuUXVpdCIsIk1vY2tBUEkuUmVnaXN0ZXJBYmlsaXR5IiwiTW9ja0FQSS5SZWxlYXNlSW5wdXRPd25lcnNoaXAiLCJNb2NrQVBJLlJlbW92ZUlzbGFuZHMiLCJNb2NrQVBJLlJlcXVlc3RCbG9ja3MiLCJNb2NrQVBJLlJlcXVlc3RCbG9ja1RhZ3MiLCJNb2NrQVBJLlJlcXVlc3RCbHVlcHJpbnRzIiwiTW9ja0FQSS5SZXF1ZXN0SW5wdXRPd25lcnNoaXAiLCJNb2NrQVBJLlJlc2V0TGlnaHRzIiwiTW9ja0FQSS5SZXNwYXduIiwiTW9ja0FQSS5SZXN0b3JlQ29uZmlnRGVmYXVsdHMiLCJNb2NrQVBJLlNhdmVCbHVlcHJpbnQiLCJNb2NrQVBJLlNhdmVDb25maWdDaGFuZ2VzIiwiTW9ja0FQSS5TZWxlY3RCbHVlcHJpbnQiLCJNb2NrQVBJLlNlbmRDaGF0IiwiTW9ja0FQSS5TZW5kU2xhc2hDb21tYW5kIiwiTW9ja0FQSS5TZXRCdWlsZGluZ01vZGUiLCJNb2NrQVBJLlNob3dBYmlsaXR5IiwiTW9ja0FQSS5TaG93VUkiLCJNb2NrQVBJLlN0dWNrIiwiTW9ja0FQSS5UYWtlU2NyZWVuc2hvdCIsIk1vY2tBUEkuVG9nZ2xlQnVpbGRpbmdNb2RlIiwiTW9ja0FQSS5Ub2dnbGVDYW1lcmEiLCJNb2NrQVBJLlRvZ2dsZVVJVmlzaWJpbGl0eSIsIk1vY2tBUEkuVW5lcXVpcEl0ZW0iLCJNb2NrQVBJLmxvZ2luVG9rZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs2QkFTNEMsZUFBZTs7SUFFM0QsZ0JBQUEsR0FJRUEsU0FKRixnQkFBQSxDQUljQSxFQUFVQSxFQUFFQSxDQUFXQSxFQUFFQSxLQUFhQSxFQUFBQTswQkFKcEQsZ0JBQUE7O0FBS0lDLFFBQUlBLENBQUNBLEVBQUVBLEdBQUdBLEVBQUVBLENBQUNBO0FB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QSxFQUFFQSxFQUFVQSxFQUFFQSxJQUFZQSxFQUFBQSxFQUFXcUg7OztlQUMxQ3JILDBCQUFDQSxPQUFlQSxFQUFFQSxVQUFrQkEsRUFBQUEsRUFBV3NIOzs7ZUFDaER0SCx5QkFBQ0EsQ0FBNEJBLEVBQUFBLEVBQVd1SDs7O2VBQzVDdkgscUJBQUNBLFNBQWlCQSxFQUFBQSxFQUFXd0g7OztlQUNsQ3hILGdCQUFDQSxJQUFZQSxFQUFBQSxFQUFXeUg7OztlQUN6QnpILGlCQUFBQSxFQUFZMEg7OztlQUNIMUgsMEJBQUFBLEVBQVkySDs7O2VBQ1IzSCw4QkFBQUEsRUFBWTRIOzs7ZUFDbEI1SCx3QkFBQUEsRUFBWTZIOzs7ZUFDTjdILDRCQUFDQSxJQUFZQSxFQUFBQSxFQUFXOEg7OztlQUMvQjlILHFCQUFDQSxNQUFjQSxFQUFBQSxFQUFXK0g7OzthQTlMdkIvSCxlQUFBQTtBQUNaZ0ksZ0JBQUlBLENBQUVBLElBQUlBLENBQUNBLFdBQVdBLEVBQUdBO0FBQ3ZCQSxvQkFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0E7QUFDakRBLDhCQUFjQSxDQUFDQSxPQUFPQSxDQUFDQSxpQkFBaUJBLEVBQUVBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO2FBQzdEQTtBQUNEQSxtQkFBT0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7U0FDekJBO2FBQ2FoSSxhQUFDQSxVQUFrQkEsRUFBQUE7QUFDL0JnSSxnQkFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsVUFBVUEsQ0FBQ0E7U0FDL0JBOzs7V0E1RUgsT0FBQTs7O3FCQUFBLE9BQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwidHNkL3RzZC5kLnRzXCIvPlxuXG5pbXBvcnQge2NsaWVudEludGVyZmFjZSwgdGFnc30gZnJvbSAnY3UtY29yZSc7XG5pbXBvcnQge0V2ZW50RW1pdHRlcjIgYXMgRXZlbnRFbWl0dGVyfSBmcm9tICdldmVudGVtaXR0ZXIyJztcblxuY2xhc3MgRXZlbnRFbWl0dGVySGFzaCB7XG4gIGlkOiBudW1iZXI7XG4gIGM6IEZ1bmN0aW9uO1xuICBldmVudDogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBjOiBGdW5jdGlvbiwgZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmMgPSBjO1xuICAgIHRoaXMuZXZlbnQgPSBldmVudDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2NrQVBJIHtcbiAgcHJpdmF0ZSBfbW9ja0V2ZW50RW1pdHRlckludGVybmFsOiBFdmVudEVtaXR0ZXI7XG4gIHByaXZhdGUgX21vY2tFdmVudEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjtcbiAgcHJpdmF0ZSBfbW9ja0V2ZW50RW1pdHRlckhhc2g6IEV2ZW50RW1pdHRlckhhc2hbXTtcbiAgcHJpdmF0ZSBfbW9ja0V2ZW50RW1pdHRlckNvdW50ZXI6IG51bWJlcjtcblxuICBwcml2YXRlIF9tb2NrSW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLl9tb2NrRXZlbnRFbWl0dGVyQ291bnRlciA9IDA7XG4gICAgdGhpcy5fbW9ja0V2ZW50RW1pdHRlckludGVybmFsID0gbmV3IEV2ZW50RW1pdHRlcih7XG4gICAgICB3aWxkY2FyZDogdHJ1ZSxcbiAgICAgIG1heExpc3RlbmVyczogNTBcbiAgICB9KTtcbiAgICB0aGlzLl9tb2NrRXZlbnRFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcih7XG4gICAgICB3aWxkY2FyZDogdHJ1ZSxcbiAgICAgIG1heExpc3RlbmVyczogNTBcbiAgICB9KTtcbiAgICB0aGlzLl9tb2NrRXZlbnRFbWl0dGVySGFzaCA9IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBfbW9ja0FkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6IHN0cmluZywgYzogRnVuY3Rpb24pOiBudW1iZXIge1xuICAgIHRoaXMuX21vY2tFdmVudEVtaXR0ZXJDb3VudGVyICs9IDE7XG4gICAgY29uc3QgZXZlbnRIYXNoID0gbmV3IEV2ZW50RW1pdHRlckhhc2godGhpcy5fbW9ja0V2ZW50RW1pdHRlckNvdW50ZXIsIGMsIGV2ZW50KTtcbiAgICB0aGlzLl9tb2NrRXZlbnRFbWl0dGVySGFzaC5wdXNoKGV2ZW50SGFzaCk7XG4gICAgdGhpcy5fbW9ja0V2ZW50RW1pdHRlci5vbihldmVudEhhc2guZXZlbnQsIGV2ZW50SGFzaC5jKTtcbiAgICByZXR1cm4gZXZlbnRIYXNoLmlkO1xuICB9XG5cbiAgcHJpdmF0ZSBfbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKGV2ZW50OiBzdHJpbmcsIGM6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbW9ja1JlbW92ZUV2ZW50TGlzdGVuZXIoaWQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX21vY2tFdmVudEVtaXR0ZXJIYXNoID0gdGhpcy5fbW9ja0V2ZW50RW1pdHRlckhhc2guZmlsdGVyKChoYXNoOiBFdmVudEVtaXR0ZXJIYXNoKSA9PiB7XG4gICAgICBpZiAoaGFzaC5pZCA9PT0gaWQpIHtcbiAgICAgICAgdGhpcy5fbW9ja0V2ZW50RW1pdHRlci5vZmYoaGFzaC5ldmVudCwgaGFzaC5jKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX21vY2tJbml0aWFsaXplKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgICAgY29uc3QgbG9naW5Ub2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ21vY2tfbG9naW5Ub2tlbicpO1xuICAgICAgaWYgKGxvZ2luVG9rZW4pIHtcbiAgICAgICAgdGhpcy5sb2dpblRva2VuID0gbG9naW5Ub2tlbjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fbW9ja0V2ZW50RW1pdHRlci5lbWl0KCdJbml0aWFsaXplZCcpO1xuICAgIH0sIDApO1xuICB9XG5cbiAgY2hhcmFjdGVyczogbnVtYmVyID0gMTtcbiAgZG93bkNvbGxpc2lvbkFuZ2xlOiBudW1iZXIgPSAxO1xuICBmYWNpbmc6IG51bWJlciA9IDE7XG4gIGZwczogbnVtYmVyID0gMTtcbiAgZnJhbWVUaW1lOiBudW1iZXIgPSAxO1xuICBob3Jpem9udGFsU3BlZWQ6IG51bWJlciA9IDE7XG4gIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG4gIGxvY2F0aW9uWDogbnVtYmVyID0gMTtcbiAgbG9jYXRpb25ZOiBudW1iZXIgPSAxO1xuICBsb2NhdGlvblo6IG51bWJlciA9IDE7XG4gIF9sb2dpblRva2VuOiBzdHJpbmcgPSAnJztcbiAgZ2V0IGxvZ2luVG9rZW4oKTogc3RyaW5nIHtcbiAgICBpZiAoISB0aGlzLl9sb2dpblRva2VuKSAge1xuICAgICAgdGhpcy5fbG9naW5Ub2tlbiA9IHdpbmRvdy5wcm9tcHQoJ0xvZ2luIFRva2VuPycpO1xuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbW9ja19sb2dpblRva2VuJywgdGhpcy5fbG9naW5Ub2tlbik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9sb2dpblRva2VuO1xuICB9XG4gIHNldCBsb2dpblRva2VuKGxvZ2luVG9rZW46IHN0cmluZykge1xuICAgIHRoaXMuX2xvZ2luVG9rZW4gPSBsb2dpblRva2VuO1xuICB9XG4gIG1haW5Wb2x1bWU6IG51bWJlciA9IDE7XG4gIG11dGVWb2x1bWU6IGJvb2xlYW4gPSB0cnVlO1xuICBuZXRzdGF0c19sYWc6IG51bWJlciA9IDE7XG4gIG5ldHN0YXRzX3BsYXllcnNfbmV3Qml0czogbnVtYmVyID0gMTtcbiAgbmV0c3RhdHNfcGxheWVyc19uZXdDb3VudDogbnVtYmVyID0gMTtcbiAgbmV0c3RhdHNfcGxheWVyc191cGRhdGVCaXRzOiBudW1iZXIgPSAxO1xuICBuZXRzdGF0c19wbGF5ZXJzX3VwZGF0ZUNvdW50OiBudW1iZXIgPSAxO1xuICBuZXRzdGF0c190Y3BCeXRlczogbnVtYmVyID0gMTtcbiAgbmV0c3RhdHNfdGNwTWVzc2FnZXM6IG51bWJlciA9IDE7XG4gIG5ldHN0YXRzX3VkcEJ5dGVzOiBudW1iZXIgPSAxO1xuICBuZXRzdGF0c191ZHBQYWNrZXRzOiBudW1iZXIgPSAxO1xuICBwYXJ0aWNsZXNSZW5kZXJlZENvdW50OiBudW1iZXIgPSAxO1xuICBwYXRjaFJlc291cmNlQ2hhbm5lbDogbnVtYmVyID0gMTtcbiAgcGVyZkhVRDogc3RyaW5nID0gJyc7XG4gIHBrdEhhc2g6IHN0cmluZyA9ICcnO1xuICBzZXJ2ZXJMb2NhdGlvblg6IG51bWJlciA9IDE7XG4gIHNlcnZlckxvY2F0aW9uWTogbnVtYmVyID0gMTtcbiAgc2VydmVyTG9jYXRpb25aOiBudW1iZXIgPSAxO1xuICBzZXJ2ZXJUaW1lOiBudW1iZXIgPSAxO1xuICBzZXJ2ZXJVUkw6IHN0cmluZyA9ICcnO1xuICBzcGVlZDogbnVtYmVyID0gMTtcbiAgdGVycmFpbjogbnVtYmVyID0gMTtcbiAgdGVycmFpbkNvbGxpc2lvbkFuZ2xlOiBudW1iZXIgPSAxO1xuICB2ZWxGYWNpbmc6IG51bWJlciA9IDE7XG4gIHZlbG9jaXR5WDogbnVtYmVyID0gMTtcbiAgdmVsb2NpdHlZOiBudW1iZXIgPSAxO1xuICB2ZWxvY2l0eVo6IG51bWJlciA9IDE7XG4gIHZzeW5jOiBudW1iZXIgPSAxO1xuICB3ZWJBUElIb3N0OiBzdHJpbmcgPSAnJztcblxuICBPbkFiaWxpdHlBY3RpdmUoYzogKGN1cnJlbnRBYmlsaXR5OiBzdHJpbmcsIHRpbWVTdGFydGVkOiBudW1iZXIsIHRpbWVUcmlnZ2VyZWQ6IG51bWJlciwgcXVldWVkQWJpbGl0eTogc3RyaW5nKSA9PiBhbnkpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXIoJ0FiaWxpdHlBY3RpdmUnLCBjKTsgfTtcbiAgT25BYmlsaXR5Q29vbGRvd24oYzogKGNvb2xkb3duSUQ6IG51bWJlciwgdGltZVN0YXJ0ZWQ6IG51bWJlciwgZHVyYXRpb246IG51bWJlcikgPT4gdm9pZCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lcignQWJpbGl0eUNvb2xkb3duJywgYyk7IH07XG4gIE9uQWJpbGl0eUNyZWF0ZWQoY2FsbGJhY2s6IChhYmlsaXR5SUQ6IHN0cmluZywgYWJpbGl0eTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnQWJpbGl0eUNyZWF0ZWQnLCBjYWxsYmFjayk7IH07XG4gIE9uQWJpbGl0eURlbGV0ZWQoY2FsbGJhY2s6IChhYmlsaXR5SUQ6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ0FiaWxpdHlEZWxldGVkJywgY2FsbGJhY2spOyB9O1xuICBPbkFiaWxpdHlOdW1iZXJzQ2hhbmdlZChjYWxsYmFjazogKGFiaWxpdHlOdW1iZXJzOiBzdHJpbmdbXSkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ0FiaWxpdHlOdW1iZXJzQ2hhbmdlZCcsIGNhbGxiYWNrKTsgfTtcbiAgT25BYmlsaXR5UmVnaXN0ZXJlZChjYWxsYmFjazogKGFiaWxpdHlJRDogc3RyaW5nLCBjb29sZG93bnM6IHN0cmluZywgZHVyYXRpb246IG51bWJlciwgdHJpZ2dlclRpbWU6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ0FiaWxpdHlSZWdpc3RlcmVkJywgY2FsbGJhY2spOyB9O1xuICBPbkFubm91bmNlbWVudChjOiAobWVzc2FnZTogc3RyaW5nLCB0eXBlOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdBbm5vdW5jZW1lbnQnLCBjKTsgfTtcbiAgT25CZWdpbkNoYXQoYzogKGNvbW1hbmRNb2RlOiBudW1iZXIsIHRleHQ6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ0JlZ2luQ2hhdCcsIGMpOyB9O1xuICBPbkJ1aWxkaW5nTW9kZUNoYW5nZWQoYzogKGJ1aWxkaW5nTW9kZTogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ0J1aWxkaW5nTW9kZUNoYW5nZWQnLCBjKTsgfTtcbiAgT25DaGFyYWN0ZXJFZmZlY3RzQ2hhbmdlZChjOiAoZWZmZWN0czogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnQ2hhcmFjdGVyRWZmZWN0c0NoYW5nZWQnLCBjKTsgfTtcbiAgT25DaGFyYWN0ZXJGYWN0aW9uQ2hhbmdlZChjOiAoZmFjdGlvbjogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnQ2hhcmFjdGVyRmFjdGlvbkNoYW5nZWQnLCBjKTsgfTtcbiAgT25DaGFyYWN0ZXJIZWFsdGhDaGFuZ2VkKGM6IChoZWFsdGg6IG51bWJlciwgbWF4SGVhbHRoOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdDaGFyYWN0ZXJIZWFsdGhDaGFuZ2VkJywgYyk7IH07XG4gIE9uQ2hhcmFjdGVySURDaGFuZ2VkKGM6IChpZDogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnQ2hhcmFjdGVySURDaGFuZ2VkJywgYyk7IH07XG4gIE9uQ2hhcmFjdGVyTmFtZUNoYW5nZWQoYzogKG5hbWU6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ0NoYXJhY3Rlck5hbWVDaGFuZ2VkJywgYyk7IH07XG4gIE9uQ2hhcmFjdGVyUmFjZUNoYW5nZWQoYzogKHJhY2U6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ0NoYXJhY3RlclJhY2VDaGFuZ2VkJywgYyk7IH07XG4gIE9uQ2hhcmFjdGVyU3RhbWluYUNoYW5nZWQoYzogKHN0YW1pbmE6IG51bWJlciwgbWF4U3RhbWluYTogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnQ2hhcmFjdGVyU3RhbWluYUNoYW5nZWQnLCBjKTsgfTtcbiAgT25DaGF0KGM6ICh0eXBlOiBudW1iZXIsIGZyb206IHN0cmluZywgYm9keTogc3RyaW5nLCBuaWNrOiBzdHJpbmcsIGlzY3NlOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnQ2hhdCcsIGMpOyB9O1xuICBPbkNsb3NlVUkoY2FsbGJhY2s6IChuYW1lOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdDbG9zZVVJJywgY2FsbGJhY2spOyB9O1xuICBPbkNvbmZpZ1ZhckNoYW5nZWQoYzogKGlzQ2hhbmdlU3VjY2Vzc2Z1bDogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ0NvbmZpZ1ZhckNoYW5nZWQnLCBjKTsgfTtcbiAgT25Db25zb2xlVGV4dChjOiAodGV4dDogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnQ29uc29sZVRleHQnLCBjKTsgfTtcbiAgT25Db3B5Qmx1ZXByaW50KGM6ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdDb3B5Qmx1ZXByaW50JywgYyk7IH07XG4gIE9uRWRpdEFiaWxpdHkoY2FsbGJhY2s6IChhYmlsaXR5SUQ6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ0VkaXRBYmlsaXR5JywgY2FsbGJhY2spOyB9O1xuICBPbkVuZW15VGFyZ2V0RWZmZWN0c0NoYW5nZWQoY2FsbGJhY2s6IChlZmZlY3RzOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdFbmVteVRhcmdldEVmZmVjdHNDaGFuZ2VkJywgY2FsbGJhY2spOyB9O1xuICBPbkVuZW15VGFyZ2V0SGVhbHRoQ2hhbmdlZChjYWxsYmFjazogKGhlYWx0aDogbnVtYmVyLCBtYXhIZWFsdGg6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ0VuZW15VGFyZ2V0SGVhbHRoQ2hhbmdlZCcsIGNhbGxiYWNrKTsgfTtcbiAgT25FbmVteVRhcmdldE5hbWVDaGFuZ2VkKGNhbGxiYWNrOiAobmFtZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnRW5lbXlUYXJnZXROYW1lQ2hhbmdlZCcsIGNhbGxiYWNrKTsgfTtcbiAgT25FbmVteVRhcmdldFN0YW1pbmFDaGFuZ2VkKGNhbGxiYWNrOiAoc3RhbWluYTogbnVtYmVyLCBtYXhTdGFtaW5hOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdFbmVteVRhcmdldFN0YW1pbmFDaGFuZ2VkJywgY2FsbGJhY2spOyB9O1xuICBPbkVxdWlwcGVkR2Vhckl0ZW1JRHNDaGFuZ2VkKGNhbGxiYWNrOiAoZ2Vhckl0ZW1JRHM6IHN0cmluZ1tdKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnRXF1aXBwZWRHZWFySXRlbUlEc0NoYW5nZWQnLCBjYWxsYmFjayk7IH07XG4gIE9uRXZlbnQoY2FsbGJhY2s6IChldmVudDogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnKicsIGZ1bmN0aW9uKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBjYWxsYmFjayh0aGlzLmV2ZW50LCAuLi5hcmdzKTtcbiAgICB9KTtcbiAgfTtcbiAgT25GcmllbmRseVRhcmdldEVmZmVjdHNDaGFuZ2VkKGNhbGxiYWNrOiAoZWZmZWN0czogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnRnJpZW5kbHlUYXJnZXRFZmZlY3RzQ2hhbmdlZCcsIGNhbGxiYWNrKTsgfTtcbiAgT25GcmllbmRseVRhcmdldEhlYWx0aENoYW5nZWQoY2FsbGJhY2s6IChoZWFsdGg6IG51bWJlciwgbWF4SGVhbHRoOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdGcmllbmRseVRhcmdldEhlYWx0aENoYW5nZWQnLCBjYWxsYmFjayk7IH07XG4gIE9uRnJpZW5kbHlUYXJnZXROYW1lQ2hhbmdlZChjYWxsYmFjazogKG5hbWU6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ0ZyaWVuZGx5VGFyZ2V0TmFtZUNoYW5nZWQnLCBjYWxsYmFjayk7IH07XG4gIE9uRnJpZW5kbHlUYXJnZXRTdGFtaW5hQ2hhbmdlZChjYWxsYmFjazogKHN0YW1pbmE6IG51bWJlciwgbWF4U3RhbWluYTogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnRnJpZW5kbHlUYXJnZXRTdGFtaW5hQ2hhbmdlZCcsIGNhbGxiYWNrKTsgfTtcbiAgT25HZXRJdGVtKGNhbGxiYWNrOiAoaXRlbUlEOiBzdHJpbmcsIGRhdGE6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ0dldEl0ZW0nLCBjYWxsYmFjayk7IH07XG4gIE9uSGlkZVVJKGNhbGxiYWNrOiAobmFtZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnSGlkZVVJJywgY2FsbGJhY2spOyB9O1xuICBPbkluaXRpYWxpemVkKGM6ICgpID0+IHZvaWQpOiBudW1iZXIge1xuICAgIGNvbnN0IGlkID0gdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXIoJ0luaXRpYWxpemVkJywgYyk7XG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9tb2NrRXZlbnRFbWl0dGVyLmVtaXQoJ0luaXRpYWxpemVkJyk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gICAgcmV0dXJuIGlkO1xuICB9O1xuICBPbkludmVudG9yeUl0ZW1JRHNDaGFuZ2VkKGNhbGxiYWNrOiAoaW52ZW50b3J5SXRlbUlEczogc3RyaW5nW10pID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdJbnZlbnRvcnlJdGVtSURzQ2hhbmdlZCcsIGNhbGxiYWNrKTsgfTtcbiAgT25JdGVtRXF1aXBwZWQoY2FsbGJhY2s6IChpdGVtSUQ6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ0l0ZW1FcXVpcHBlZCcsIGNhbGxiYWNrKTsgfTtcbiAgT25JdGVtVW5lcXVpcHBlZChjYWxsYmFjazogKGl0ZW1JRDogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX21vY2tBZGRFdmVudExpc3RlbmVyVm9pZCgnSXRlbVVuZXF1aXBwZWQnLCBjYWxsYmFjayk7IH07XG4gIE9uTG9nTWVzc2FnZShjOiAoY2F0ZWdvcnk6IHN0cmluZywgbGV2ZWw6IG51bWJlciwgdGltZTogc3RyaW5nLCBwcm9jZXNzOiBudW1iZXIsIHRocmVhZDogbnVtYmVyLCBtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdMb2dNZXNzYWdlJywgYyk7IH07XG4gIE9uTmV3Qmx1ZXByaW50KGM6IChpbmRleDogbnVtYmVyLCBuYW1lOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdOZXdCbHVlcHJpbnQnLCBjKTsgfTtcbiAgT25PcGVuVUkoY2FsbGJhY2s6IChuYW1lOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdPcGVuVUknLCBjYWxsYmFjayk7IH07XG4gIE9uUmVjZWl2ZUJsb2NrcyhjOiAoYnVpbGRpbmdEaWN0OiBhbnkpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdSZWNlaXZlQmxvY2tzJywgYyk7IH07XG4gIE9uUmVjZWl2ZUJsb2NrVGFncyhjOiAoYmxvY2tJRDogbnVtYmVyLCB0YWdEaWN0OiBhbnkpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdSZWNlaXZlQmxvY2tUYWdzJywgYyk7IH07XG4gIE9uUmVjZWl2ZUNvbmZpZ1ZhcihjOiAoY29uZmlnOiBhbnkpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdSZWNlaXZlQ29uZmlnVmFyJywgYyk7IH07XG4gIE9uUmVjZWl2ZUNvbmZpZ1ZhcnMoYzogKGNvbmZpZ3M6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ1JlY2VpdmVDb25maWdWYXJzJywgYyk7IH07XG4gIE9uUmVjZWl2ZVNjcmVlblNob3QoYzogKHNjcmVlblNob3RTdHJpbmc6IGFueSkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ1JlY2VpdmVTY3JlZW5TaG90JywgYyk7IH07XG4gIE9uU2VydmVyQ29ubmVjdGVkKGM6IChpc0Nvbm5lY3RlZDogYm9vbGVhbikgPT4gdm9pZCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lcignU2VydmVyQ29ubmVjdGVkJywgYyk7IH07XG4gIE9uU2hvd0FiaWxpdHkoY2FsbGJhY2s6IChhYmlsaXR5SUQ6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ1Nob3dBYmlsaXR5JywgY2FsbGJhY2spOyB9O1xuICBPblNob3dVSShjYWxsYmFjazogKG5hbWU6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9tb2NrQWRkRXZlbnRMaXN0ZW5lclZvaWQoJ1Nob3dVSScsIGNhbGxiYWNrKTsgfTtcbiAgT25VcGRhdGVOYW1lcGxhdGUoYzogKGNlbGw6IG51bWJlciwgY29sb3JNb2Q6IG51bWJlciwgbmFtZTogc3RyaW5nLCBndGFnOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fbW9ja0FkZEV2ZW50TGlzdGVuZXJWb2lkKCdVcGRhdGVOYW1lcGxhdGUnLCBjKTsgfTtcblxuICBDYW5jZWxPbkFiaWxpdHlBY3RpdmUoYzogbnVtYmVyKTogdm9pZCB7IHRoaXMuX21vY2tSZW1vdmVFdmVudExpc3RlbmVyKGMpIH07XG4gIENhbmNlbE9uQWJpbGl0eUNvb2xkb3duKGM6IG51bWJlcik6IHZvaWQgeyB0aGlzLl9tb2NrUmVtb3ZlRXZlbnRMaXN0ZW5lcihjKSB9O1xuICBDYW5jZWxPbkluaXRpYWxpemVkKGM6IG51bWJlcik6IHZvaWQgeyB0aGlzLl9tb2NrUmVtb3ZlRXZlbnRMaXN0ZW5lcihjKSB9O1xuICBDYW5jZWxPblNlcnZlckNvbm5lY3RlZChjOiBudW1iZXIpOiB2b2lkIHsgdGhpcy5fbW9ja1JlbW92ZUV2ZW50TGlzdGVuZXIoYykgfTtcblxuICBBYmlsaXR5Q3JlYXRlZChhYmlsaXR5SUQ6IHN0cmluZywgcHJpbWFyeUJhc2VDb21wb25lbnRJRDogc3RyaW5nLCBzZWNvbmRhcnlCYXNlQ29tcG9uZW50SUQ6IHN0cmluZywgYWJpbGl0eTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fbW9ja0V2ZW50RW1pdHRlci5lbWl0KCdBYmlsaXR5Q3JlYXRlZCcsIGFiaWxpdHlJRCwgYWJpbGl0eSk7XG4gIH07XG4gIEFiaWxpdHlEZWxldGVkKGFiaWxpdHlJRDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fbW9ja0V2ZW50RW1pdHRlci5lbWl0KCdBYmlsaXR5RGVsZXRlZCcsIGFiaWxpdHlJRCk7XG4gIH07XG4gIEFwcGx5U3RhYmlsaXR5KCk6IHZvaWQgeyB9O1xuICBBdHRhY2soYWJpbGl0eUlEOiBzdHJpbmcpOiB2b2lkIHsgfTtcbiAgQmxvY2tGbGlwWCgpOiB2b2lkIHsgfTtcbiAgQmxvY2tGbGlwWSgpOiB2b2lkIHsgfTtcbiAgQmxvY2tGbGlwWigpOiB2b2lkIHsgfTtcbiAgQmxvY2tSb3RhdGVYKCk6IHZvaWQgeyB9O1xuICBCbG9ja1JvdGF0ZVkoKTogdm9pZCB7IH07XG4gIEJsb2NrUm90YXRlWigpOiB2b2lkIHsgfTtcbiAgQ2FuY2VsQWxsQ29uZmlnQ2hhbmdlcyh0YWc6IHRhZ3MpOiB2b2lkIHsgfTtcbiAgQ2FuY2VsQmxvY2tQbGFjZW1lbnQoKTogdm9pZCB7IH07XG4gIENhbmNlbENoYW5nZUNvbmZpZyh2YXJpYWJsZTogc3RyaW5nKTogdm9pZCB7IH07XG4gIENoYW5nZUJsb2NrVHlwZShjOiAobmV3VHlwZTogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7IH07XG4gIENoYW5nZUNvbmZpZ1Zhcih2YXJpYWJsZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7IH07XG4gIENoYW5nZVpvbmUoem9uZUlEOiBudW1iZXIpOiB2b2lkIHsgfTtcbiAgQ2xvc2VVSShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9tb2NrRXZlbnRFbWl0dGVyLmVtaXQoJ0Nsb3NlVUknLCBuYW1lKTtcbiAgfTtcbiAgQ29tbWl0QmxvY2soKTogdm9pZCB7IH07XG4gIENvbm5lY3QoaG9zdDogc3RyaW5nLCBwb3J0OiBzdHJpbmcsIGNoYXJhY3Rlcjogc3RyaW5nLCB3ZWJBUElIb3N0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyBUT0RPIGRvIHNvbWUgY29ubmVjdGlvbiBoZXJlXG4gICAgdGhpcy5fbW9ja0V2ZW50RW1pdHRlci5lbWl0KCdTZXJ2ZXJDb25uZWN0ZWQnLCB0cnVlKTtcbiAgfTtcbiAgQ29uc29sZUNvbW1hbmQoYm9keTogc3RyaW5nKTogdm9pZCB7fTtcbiAgQ29weUJsdWVwcmludCgpOiB2b2lkIHtcbiAgICB0aGlzLl9tb2NrRXZlbnRFbWl0dGVyLmVtaXQoJ0NvcHlCbHVlcHJpbnQnKTtcbiAgfTtcbiAgQ3Jhc2hUaGVHYW1lKCk6IHZvaWQgeyB9O1xuICBEcm9wTGlnaHQoaW50ZW5zaXR5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCByZWQ6IG51bWJlciwgZ3JlZW46IG51bWJlciwgYmx1ZTogbnVtYmVyKTogdm9pZCB7IH07XG4gIEVkaXRBYmlsaXR5KGFiaWxpdHlJRDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fbW9ja0V2ZW50RW1pdHRlci5lbWl0KCdFZGl0QWJpbGl0eScsIGFiaWxpdHlJRCk7XG4gIH07XG4gIEVtb3RlKGVtb3RlOiBudW1iZXIpOiB2b2lkIHsgfTtcbiAgRXF1aXBJdGVtKGl0ZW1JRDogc3RyaW5nKTogdm9pZCB7IH07XG4gIEZpcmUoZXZlbnQ6IHN0cmluZywgLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgICB0aGlzLl9tb2NrRXZlbnRFbWl0dGVyLmVtaXQoZXZlbnQsIC4uLmFyZ3MpO1xuICB9O1xuICBGb2N1c1VJKG5hbWU6IHN0cmluZyk6IHZvaWQgeyB9O1xuICBGT1YoZGVncmVlczogbnVtYmVyKTogdm9pZCB7IH07XG4gIEdldENvbmZpZ1Zhcih2YXJpYWJsZTogc3RyaW5nKTogdm9pZCB7IH07XG4gIEdldENvbmZpZ1ZhcnModGFnOiB0YWdzKTogdm9pZCB7IH07XG4gIEdldEl0ZW0oaXRlbUlEOiBzdHJpbmcpOiB2b2lkIHsgfTtcbiAgSGlkZVVJKG5hbWU6IHN0cmluZyk6IHZvaWQgeyB9O1xuICBJZ25vcmUoZXZlbnQ6IHN0cmluZyk6IHZvaWQgeyB9O1xuICBKb2luTVVDKHJvb206IHN0cmluZyk6IHZvaWQgeyB9O1xuICBMZWF2ZU1VQyhyb29tOiBzdHJpbmcpOiB2b2lkIHsgfTtcbiAgTGlzdGVuKGV2ZW50OiBzdHJpbmcpOiB2b2lkIHsgfTtcbiAgT25BYmlsaXR5RXJyb3IoYzogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQgeyB9O1xuICBPblNhdmVkQ29uZmlnQ2hhbmdlcyhjOiAoKSA9PiB2b2lkKTogdm9pZCB7IH07XG4gIE9wZW5TY3JlZW5zaG90U2hhcmUoKTogdm9pZCB7IH07XG4gIE9wZW5VSShuYW1lOiBzdHJpbmcpOiB2b2lkIHsgfTtcbiAgUGFzdGVCbHVlcHJpbnQoKTogdm9pZCB7IH07XG4gIFBsYXlTb3VuZEV2ZW50KGlkOiBudW1iZXIpOiB2b2lkIHsgfTtcbiAgUXVpdCgpOiB2b2lkIHsgfTtcbiAgUmVnaXN0ZXJBYmlsaXR5KGFiaWxpdHlJRDogc3RyaW5nLCBwcmltYXJ5QmFzZUNvbXBvbmVudElEOiBzdHJpbmcsIHNlY29uZGFyeUJhc2VDb21wb25lbnRJRDogc3RyaW5nKTogdm9pZCB7IH07XG4gIFJlbGVhc2VJbnB1dE93bmVyc2hpcCgpOiB2b2lkIHsgfTtcbiAgUmVtb3ZlSXNsYW5kcygpOiB2b2lkIHsgfTtcbiAgUmVxdWVzdEJsb2NrcygpOiB2b2lkIHsgfTtcbiAgUmVxdWVzdEJsb2NrVGFncyhjOiAoYmxvY2tJRDogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7IH07XG4gIFJlcXVlc3RCbHVlcHJpbnRzKCk6IHZvaWQgeyB9O1xuICBSZXF1ZXN0SW5wdXRPd25lcnNoaXAoKTogdm9pZCB7IH07XG4gIFJlc2V0TGlnaHRzKCk6IHZvaWQgeyB9O1xuICBSZXNwYXduKGlkOiBzdHJpbmcpOiB2b2lkIHsgfTtcbiAgUmVzdG9yZUNvbmZpZ0RlZmF1bHRzKHRhZzogdGFncyk6IHZvaWQgeyB9O1xuICBTYXZlQmx1ZXByaW50KGM6IChuYW1lOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHsgfTtcbiAgU2F2ZUNvbmZpZ0NoYW5nZXMoKTogdm9pZCB7IH07XG4gIFNlbGVjdEJsdWVwcmludChjOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQgeyB9O1xuICBTZW5kQ2hhdCh0eXBlOiBudW1iZXIsIHRvOiBzdHJpbmcsIGJvZHk6IHN0cmluZyk6IHZvaWQgeyB9O1xuICBTZW5kU2xhc2hDb21tYW5kKGNvbW1hbmQ6IHN0cmluZywgcGFyYW1ldGVyczogc3RyaW5nKTogdm9pZCB7IH07XG4gIFNldEJ1aWxkaW5nTW9kZShjOiAobmV3TW9kZTogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7IH07XG4gIFNob3dBYmlsaXR5KGFiaWxpdHlJRDogc3RyaW5nKTogdm9pZCB7IH07XG4gIFNob3dVSShuYW1lOiBzdHJpbmcpOiB2b2lkIHsgfTtcbiAgU3R1Y2soKTogdm9pZCB7IH07XG4gIFRha2VTY3JlZW5zaG90KCk6IHZvaWQgeyB9O1xuICBUb2dnbGVCdWlsZGluZ01vZGUoKTogdm9pZCB7IH07XG4gIFRvZ2dsZUNhbWVyYSgpOiB2b2lkIHsgfTtcbiAgVG9nZ2xlVUlWaXNpYmlsaXR5KG5hbWU6IHN0cmluZyk6IHZvaWQgeyB9O1xuICBVbmVxdWlwSXRlbShpdGVtSUQ6IHN0cmluZyk6IHZvaWQgeyB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==