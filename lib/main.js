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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _eventemitter3 = require('eventemitter3');

var _eventemitter32 = _interopRequireDefault(_eventemitter3);

var MockAPI = (function () {
    function MockAPI() {
        _classCallCheck(this, MockAPI);

        this.initialized = false;
        this.muteVolume = true;
        this.mainVolume = 1;
        this.patchResourceChannel = 1;
        this.loginToken = '';
        this.pktHash = '';
        this.webAPIHost = '';
        this.serverURL = '';
        this.serverTime = 1;
        this.vsync = 1;
        this.fps = 1;
        this.frameTime = 1;
        this.netstats_udpPackets = 1;
        this.netstats_udpBytes = 1;
        this.netstats_tcpMessages = 1;
        this.netstats_tcpBytes = 1;
        this.netstats_players_updateBits = 1;
        this.netstats_players_updateCount = 1;
        this.netstats_players_newCount = 1;
        this.netstats_players_newBits = 1;
        this.netstats_lag = 1;
        this.particlesRenderedCount = 1;
        this.characters = 1;
        this.terrain = 1;
        this.perfHUD = '';
        this.locationX = 1;
        this.locationY = 1;
        this.locationZ = 1;
        this.serverLocationX = 1;
        this.serverLocationY = 1;
        this.serverLocationZ = 1;
        this.facing = 1;
        this.velocityX = 1;
        this.velocityY = 1;
        this.velocityZ = 1;
        this.speed = 1;
        this.horizontalSpeed = 1;
        this.velFacing = 1;
        this.downCollisionAngle = 1;
        this.terrainCollisionAngle = 1;
        this.__ee = new _eventemitter32['default']();
    }

    _createClass(MockAPI, [{
        key: 'OnInitialized',
        value: function OnInitialized(c) {
            return 1;
        }
    }, {
        key: 'OnServerConnected',
        value: function OnServerConnected(c) {
            return 1;
        }
    }, {
        key: 'OnUpdateNameplate',
        value: function OnUpdateNameplate(c) {}
    }, {
        key: 'OnOpenUI',
        value: function OnOpenUI(callback) {}
    }, {
        key: 'OnCloseUI',
        value: function OnCloseUI(callback) {}
    }, {
        key: 'OnShowUI',
        value: function OnShowUI(callback) {}
    }, {
        key: 'OnHideUI',
        value: function OnHideUI(callback) {}
    }, {
        key: 'OnEvent',
        value: function OnEvent(callback) {}
    }, {
        key: 'OnAbilityNumbersChanged',
        value: function OnAbilityNumbersChanged(callback) {}
    }, {
        key: 'OnAbilityCooldown',
        value: function OnAbilityCooldown(c) {
            return 1;
        }
    }, {
        key: 'OnAbilityActive',
        value: function OnAbilityActive(c) {
            return 1;
        }
    }, {
        key: 'OnGetItem',
        value: function OnGetItem(callback) {}
    }, {
        key: 'OnItemEquipped',
        value: function OnItemEquipped(callback) {}
    }, {
        key: 'OnItemUnequipped',
        value: function OnItemUnequipped(callback) {}
    }, {
        key: 'OnEquippedGearItemIDsChanged',
        value: function OnEquippedGearItemIDsChanged(callback) {}
    }, {
        key: 'OnReceiveConfigVars',
        value: function OnReceiveConfigVars(c) {}
    }, {
        key: 'OnReceiveConfigVar',
        value: function OnReceiveConfigVar(c) {}
    }, {
        key: 'OnConfigVarChanged',
        value: function OnConfigVarChanged(c) {}
    }, {
        key: 'OnBuildingModeChanged',
        value: function OnBuildingModeChanged(c) {}
    }, {
        key: 'OnReceiveBlocks',
        value: function OnReceiveBlocks(c) {}
    }, {
        key: 'OnReceiveScreenShot',
        value: function OnReceiveScreenShot(c) {}
    }, {
        key: 'OnReceiveBlockTags',
        value: function OnReceiveBlockTags(c) {}
    }, {
        key: 'OnCopyBlueprint',
        value: function OnCopyBlueprint(c) {}
    }, {
        key: 'OnNewBlueprint',
        value: function OnNewBlueprint(c) {}
    }, {
        key: 'OnAnnouncement',
        value: function OnAnnouncement(c) {}
    }, {
        key: 'OnInventoryItemIDsChanged',
        value: function OnInventoryItemIDsChanged(callback) {}
    }, {
        key: 'OnCharacterIDChanged',
        value: function OnCharacterIDChanged(c) {}
    }, {
        key: 'OnCharacterFactionChanged',
        value: function OnCharacterFactionChanged(c) {}
    }, {
        key: 'OnCharacterRaceChanged',
        value: function OnCharacterRaceChanged(c) {}
    }, {
        key: 'OnCharacterNameChanged',
        value: function OnCharacterNameChanged(c) {}
    }, {
        key: 'OnCharacterHealthChanged',
        value: function OnCharacterHealthChanged(c) {}
    }, {
        key: 'OnCharacterStaminaChanged',
        value: function OnCharacterStaminaChanged(c) {}
    }, {
        key: 'OnCharacterEffectsChanged',
        value: function OnCharacterEffectsChanged(c) {}
    }, {
        key: 'OnEnemyTargetNameChanged',
        value: function OnEnemyTargetNameChanged(callback) {}
    }, {
        key: 'OnEnemyTargetHealthChanged',
        value: function OnEnemyTargetHealthChanged(callback) {}
    }, {
        key: 'OnEnemyTargetStaminaChanged',
        value: function OnEnemyTargetStaminaChanged(callback) {}
    }, {
        key: 'OnEnemyTargetEffectsChanged',
        value: function OnEnemyTargetEffectsChanged(callback) {}
    }, {
        key: 'OnFriendlyTargetNameChanged',
        value: function OnFriendlyTargetNameChanged(callback) {}
    }, {
        key: 'OnFriendlyTargetHealthChanged',
        value: function OnFriendlyTargetHealthChanged(callback) {}
    }, {
        key: 'OnFriendlyTargetStaminaChanged',
        value: function OnFriendlyTargetStaminaChanged(callback) {}
    }, {
        key: 'OnFriendlyTargetEffectsChanged',
        value: function OnFriendlyTargetEffectsChanged(callback) {}
    }, {
        key: 'OnBeginChat',
        value: function OnBeginChat(c) {}
    }, {
        key: 'OnChat',
        value: function OnChat(c) {}
    }, {
        key: 'OnShowAbility',
        value: function OnShowAbility(callback) {}
    }, {
        key: 'OnEditAbility',
        value: function OnEditAbility(callback) {}
    }, {
        key: 'OnAbilityCreated',
        value: function OnAbilityCreated(callback) {}
    }, {
        key: 'OnAbilityDeleted',
        value: function OnAbilityDeleted(callback) {}
    }, {
        key: 'OnAbilityRegistered',
        value: function OnAbilityRegistered(callback) {}
    }, {
        key: 'OnConsoleText',
        value: function OnConsoleText(c) {}
    }, {
        key: 'OnLogMessage',
        value: function OnLogMessage(c) {}
    }, {
        key: 'CancelOnAbilityCooldown',
        value: function CancelOnAbilityCooldown(c) {}
    }, {
        key: 'CancelOnAbilityActive',
        value: function CancelOnAbilityActive(c) {}
    }, {
        key: 'CancelChangeConfig',
        value: function CancelChangeConfig(variable) {}
    }, {
        key: 'CancelAllConfigChanges',
        value: function CancelAllConfigChanges(tag) {}
    }, {
        key: 'CancelBlockPlacement',
        value: function CancelBlockPlacement() {}
    }, {
        key: 'CancelOnServerConnected',
        value: function CancelOnServerConnected(c) {}
    }, {
        key: 'CancelOnInitialized',
        value: function CancelOnInitialized(c) {}
    }, {
        key: 'FOV',
        value: function FOV(degrees) {}
    }, {
        key: 'DropLight',
        value: function DropLight(intensity, radius, red, green, blue) {}
    }, {
        key: 'ResetLights',
        value: function ResetLights() {}
    }, {
        key: 'PlaySoundEvent',
        value: function PlaySoundEvent(id) {}
    }, {
        key: 'ToggleCamera',
        value: function ToggleCamera() {}
    }, {
        key: 'OpenUI',
        value: function OpenUI(name) {}
    }, {
        key: 'CloseUI',
        value: function CloseUI(name) {}
    }, {
        key: 'HideUI',
        value: function HideUI(name) {}
    }, {
        key: 'ShowUI',
        value: function ShowUI(name) {}
    }, {
        key: 'ToggleUIVisibility',
        value: function ToggleUIVisibility(name) {}
    }, {
        key: 'FocusUI',
        value: function FocusUI(name) {}
    }, {
        key: 'RequestInputOwnership',
        value: function RequestInputOwnership() {}
    }, {
        key: 'ReleaseInputOwnership',
        value: function ReleaseInputOwnership() {}
    }, {
        key: 'Quit',
        value: function Quit() {}
    }, {
        key: 'CrashTheGame',
        value: function CrashTheGame() {}
    }, {
        key: 'Listen',
        value: function Listen(event) {}
    }, {
        key: 'Ignore',
        value: function Ignore(event) {}
    }, {
        key: 'Fire',
        value: function Fire(event) {}
    }, {
        key: 'Respawn',
        value: function Respawn(id) {}
    }, {
        key: 'Attack',
        value: function Attack(abilityID) {}
    }, {
        key: 'OnAbilityError',
        value: function OnAbilityError(c) {}
    }, {
        key: 'GetItem',
        value: function GetItem(itemID) {}
    }, {
        key: 'UnequipItem',
        value: function UnequipItem(itemID) {}
    }, {
        key: 'EquipItem',
        value: function EquipItem(itemID) {}
    }, {
        key: 'SaveConfigChanges',
        value: function SaveConfigChanges() {}
    }, {
        key: 'OnSavedConfigChanges',
        value: function OnSavedConfigChanges(c) {}
    }, {
        key: 'RestoreConfigDefaults',
        value: function RestoreConfigDefaults(tag) {}
    }, {
        key: 'ChangeConfigVar',
        value: function ChangeConfigVar(variable, value) {}
    }, {
        key: 'GetConfigVars',
        value: function GetConfigVars(tag) {}
    }, {
        key: 'GetConfigVar',
        value: function GetConfigVar(variable) {}
    }, {
        key: 'ToggleBuildingMode',
        value: function ToggleBuildingMode() {}
    }, {
        key: 'SetBuildingMode',
        value: function SetBuildingMode(c) {}
    }, {
        key: 'RequestBlocks',
        value: function RequestBlocks() {}
    }, {
        key: 'RequestBlockTags',
        value: function RequestBlockTags(c) {}
    }, {
        key: 'ChangeBlockType',
        value: function ChangeBlockType(c) {}
    }, {
        key: 'SelectBlueprint',
        value: function SelectBlueprint(c) {}
    }, {
        key: 'SaveBlueprint',
        value: function SaveBlueprint(c) {}
    }, {
        key: 'RequestBlueprints',
        value: function RequestBlueprints() {}
    }, {
        key: 'CommitBlock',
        value: function CommitBlock() {}
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
        key: 'RemoveIslands',
        value: function RemoveIslands() {}
    }, {
        key: 'ApplyStability',
        value: function ApplyStability() {}
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
        key: 'CopyBlueprint',
        value: function CopyBlueprint() {}
    }, {
        key: 'PasteBlueprint',
        value: function PasteBlueprint() {}
    }, {
        key: 'OpenScreenshotShare',
        value: function OpenScreenshotShare() {}
    }, {
        key: 'TakeScreenshot',
        value: function TakeScreenshot() {}
    }, {
        key: 'Emote',
        value: function Emote(emote) {}
    }, {
        key: 'SendChat',
        value: function SendChat(type, to, body) {}
    }, {
        key: 'JoinMUC',
        value: function JoinMUC(room) {}
    }, {
        key: 'LeaveMUC',
        value: function LeaveMUC(room) {}
    }, {
        key: 'SendSlashCommand',
        value: function SendSlashCommand(command, parameters) {}
    }, {
        key: 'Stuck',
        value: function Stuck() {}
    }, {
        key: 'ChangeZone',
        value: function ChangeZone(zoneID) {}
    }, {
        key: 'ShowAbility',
        value: function ShowAbility(abilityID) {}
    }, {
        key: 'EditAbility',
        value: function EditAbility(abilityID) {}
    }, {
        key: 'AbilityCreated',
        value: function AbilityCreated(abilityID, primaryBaseComponentID, secondaryBaseComponentID, ability) {}
    }, {
        key: 'AbilityDeleted',
        value: function AbilityDeleted(abilityID) {}
    }, {
        key: 'RegisterAbility',
        value: function RegisterAbility(abilityID, primaryBaseComponentID, secondaryBaseComponentID) {}
    }, {
        key: 'ConsoleCommand',
        value: function ConsoleCommand(body) {}
    }, {
        key: 'Connect',
        value: function Connect(host, port, character, webAPIHost) {}
    }]);

    return MockAPI;
})();

exports['default'] = MockAPI;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL21haW4udHMiXSwibmFtZXMiOlsiTW9ja0FQSSIsIk1vY2tBUEkuY29uc3RydWN0b3IiLCJNb2NrQVBJLk9uSW5pdGlhbGl6ZWQiLCJNb2NrQVBJLk9uU2VydmVyQ29ubmVjdGVkIiwiTW9ja0FQSS5PblVwZGF0ZU5hbWVwbGF0ZSIsIk1vY2tBUEkuT25PcGVuVUkiLCJNb2NrQVBJLk9uQ2xvc2VVSSIsIk1vY2tBUEkuT25TaG93VUkiLCJNb2NrQVBJLk9uSGlkZVVJIiwiTW9ja0FQSS5PbkV2ZW50IiwiTW9ja0FQSS5PbkFiaWxpdHlOdW1iZXJzQ2hhbmdlZCIsIk1vY2tBUEkuT25BYmlsaXR5Q29vbGRvd24iLCJNb2NrQVBJLk9uQWJpbGl0eUFjdGl2ZSIsIk1vY2tBUEkuT25HZXRJdGVtIiwiTW9ja0FQSS5Pbkl0ZW1FcXVpcHBlZCIsIk1vY2tBUEkuT25JdGVtVW5lcXVpcHBlZCIsIk1vY2tBUEkuT25FcXVpcHBlZEdlYXJJdGVtSURzQ2hhbmdlZCIsIk1vY2tBUEkuT25SZWNlaXZlQ29uZmlnVmFycyIsIk1vY2tBUEkuT25SZWNlaXZlQ29uZmlnVmFyIiwiTW9ja0FQSS5PbkNvbmZpZ1ZhckNoYW5nZWQiLCJNb2NrQVBJLk9uQnVpbGRpbmdNb2RlQ2hhbmdlZCIsIk1vY2tBUEkuT25SZWNlaXZlQmxvY2tzIiwiTW9ja0FQSS5PblJlY2VpdmVTY3JlZW5TaG90IiwiTW9ja0FQSS5PblJlY2VpdmVCbG9ja1RhZ3MiLCJNb2NrQVBJLk9uQ29weUJsdWVwcmludCIsIk1vY2tBUEkuT25OZXdCbHVlcHJpbnQiLCJNb2NrQVBJLk9uQW5ub3VuY2VtZW50IiwiTW9ja0FQSS5PbkludmVudG9yeUl0ZW1JRHNDaGFuZ2VkIiwiTW9ja0FQSS5PbkNoYXJhY3RlcklEQ2hhbmdlZCIsIk1vY2tBUEkuT25DaGFyYWN0ZXJGYWN0aW9uQ2hhbmdlZCIsIk1vY2tBUEkuT25DaGFyYWN0ZXJSYWNlQ2hhbmdlZCIsIk1vY2tBUEkuT25DaGFyYWN0ZXJOYW1lQ2hhbmdlZCIsIk1vY2tBUEkuT25DaGFyYWN0ZXJIZWFsdGhDaGFuZ2VkIiwiTW9ja0FQSS5PbkNoYXJhY3RlclN0YW1pbmFDaGFuZ2VkIiwiTW9ja0FQSS5PbkNoYXJhY3RlckVmZmVjdHNDaGFuZ2VkIiwiTW9ja0FQSS5PbkVuZW15VGFyZ2V0TmFtZUNoYW5nZWQiLCJNb2NrQVBJLk9uRW5lbXlUYXJnZXRIZWFsdGhDaGFuZ2VkIiwiTW9ja0FQSS5PbkVuZW15VGFyZ2V0U3RhbWluYUNoYW5nZWQiLCJNb2NrQVBJLk9uRW5lbXlUYXJnZXRFZmZlY3RzQ2hhbmdlZCIsIk1vY2tBUEkuT25GcmllbmRseVRhcmdldE5hbWVDaGFuZ2VkIiwiTW9ja0FQSS5PbkZyaWVuZGx5VGFyZ2V0SGVhbHRoQ2hhbmdlZCIsIk1vY2tBUEkuT25GcmllbmRseVRhcmdldFN0YW1pbmFDaGFuZ2VkIiwiTW9ja0FQSS5PbkZyaWVuZGx5VGFyZ2V0RWZmZWN0c0NoYW5nZWQiLCJNb2NrQVBJLk9uQmVnaW5DaGF0IiwiTW9ja0FQSS5PbkNoYXQiLCJNb2NrQVBJLk9uU2hvd0FiaWxpdHkiLCJNb2NrQVBJLk9uRWRpdEFiaWxpdHkiLCJNb2NrQVBJLk9uQWJpbGl0eUNyZWF0ZWQiLCJNb2NrQVBJLk9uQWJpbGl0eURlbGV0ZWQiLCJNb2NrQVBJLk9uQWJpbGl0eVJlZ2lzdGVyZWQiLCJNb2NrQVBJLk9uQ29uc29sZVRleHQiLCJNb2NrQVBJLk9uTG9nTWVzc2FnZSIsIk1vY2tBUEkuQ2FuY2VsT25BYmlsaXR5Q29vbGRvd24iLCJNb2NrQVBJLkNhbmNlbE9uQWJpbGl0eUFjdGl2ZSIsIk1vY2tBUEkuQ2FuY2VsQ2hhbmdlQ29uZmlnIiwiTW9ja0FQSS5DYW5jZWxBbGxDb25maWdDaGFuZ2VzIiwiTW9ja0FQSS5DYW5jZWxCbG9ja1BsYWNlbWVudCIsIk1vY2tBUEkuQ2FuY2VsT25TZXJ2ZXJDb25uZWN0ZWQiLCJNb2NrQVBJLkNhbmNlbE9uSW5pdGlhbGl6ZWQiLCJNb2NrQVBJLkZPViIsIk1vY2tBUEkuRHJvcExpZ2h0IiwiTW9ja0FQSS5SZXNldExpZ2h0cyIsIk1vY2tBUEkuUGxheVNvdW5kRXZlbnQiLCJNb2NrQVBJLlRvZ2dsZUNhbWVyYSIsIk1vY2tBUEkuT3BlblVJIiwiTW9ja0FQSS5DbG9zZVVJIiwiTW9ja0FQSS5IaWRlVUkiLCJNb2NrQVBJLlNob3dVSSIsIk1vY2tBUEkuVG9nZ2xlVUlWaXNpYmlsaXR5IiwiTW9ja0FQSS5Gb2N1c1VJIiwiTW9ja0FQSS5SZXF1ZXN0SW5wdXRPd25lcnNoaXAiLCJNb2NrQVBJLlJlbGVhc2VJbnB1dE93bmVyc2hpcCIsIk1vY2tBUEkuUXVpdCIsIk1vY2tBUEkuQ3Jhc2hUaGVHYW1lIiwiTW9ja0FQSS5MaXN0ZW4iLCJNb2NrQVBJLklnbm9yZSIsIk1vY2tBUEkuRmlyZSIsIk1vY2tBUEkuUmVzcGF3biIsIk1vY2tBUEkuQXR0YWNrIiwiTW9ja0FQSS5PbkFiaWxpdHlFcnJvciIsIk1vY2tBUEkuR2V0SXRlbSIsIk1vY2tBUEkuVW5lcXVpcEl0ZW0iLCJNb2NrQVBJLkVxdWlwSXRlbSIsIk1vY2tBUEkuU2F2ZUNvbmZpZ0NoYW5nZXMiLCJNb2NrQVBJLk9uU2F2ZWRDb25maWdDaGFuZ2VzIiwiTW9ja0FQSS5SZXN0b3JlQ29uZmlnRGVmYXVsdHMiLCJNb2NrQVBJLkNoYW5nZUNvbmZpZ1ZhciIsIk1vY2tBUEkuR2V0Q29uZmlnVmFycyIsIk1vY2tBUEkuR2V0Q29uZmlnVmFyIiwiTW9ja0FQSS5Ub2dnbGVCdWlsZGluZ01vZGUiLCJNb2NrQVBJLlNldEJ1aWxkaW5nTW9kZSIsIk1vY2tBUEkuUmVxdWVzdEJsb2NrcyIsIk1vY2tBUEkuUmVxdWVzdEJsb2NrVGFncyIsIk1vY2tBUEkuQ2hhbmdlQmxvY2tUeXBlIiwiTW9ja0FQSS5TZWxlY3RCbHVlcHJpbnQiLCJNb2NrQVBJLlNhdmVCbHVlcHJpbnQiLCJNb2NrQVBJLlJlcXVlc3RCbHVlcHJpbnRzIiwiTW9ja0FQSS5Db21taXRCbG9jayIsIk1vY2tBUEkuQmxvY2tSb3RhdGVYIiwiTW9ja0FQSS5CbG9ja1JvdGF0ZVkiLCJNb2NrQVBJLkJsb2NrUm90YXRlWiIsIk1vY2tBUEkuUmVtb3ZlSXNsYW5kcyIsIk1vY2tBUEkuQXBwbHlTdGFiaWxpdHkiLCJNb2NrQVBJLkJsb2NrRmxpcFgiLCJNb2NrQVBJLkJsb2NrRmxpcFkiLCJNb2NrQVBJLkJsb2NrRmxpcFoiLCJNb2NrQVBJLkNvcHlCbHVlcHJpbnQiLCJNb2NrQVBJLlBhc3RlQmx1ZXByaW50IiwiTW9ja0FQSS5PcGVuU2NyZWVuc2hvdFNoYXJlIiwiTW9ja0FQSS5UYWtlU2NyZWVuc2hvdCIsIk1vY2tBUEkuRW1vdGUiLCJNb2NrQVBJLlNlbmRDaGF0IiwiTW9ja0FQSS5Kb2luTVVDIiwiTW9ja0FQSS5MZWF2ZU1VQyIsIk1vY2tBUEkuU2VuZFNsYXNoQ29tbWFuZCIsIk1vY2tBUEkuU3R1Y2siLCJNb2NrQVBJLkNoYW5nZVpvbmUiLCJNb2NrQVBJLlNob3dBYmlsaXR5IiwiTW9ja0FQSS5FZGl0QWJpbGl0eSIsIk1vY2tBUEkuQWJpbGl0eUNyZWF0ZWQiLCJNb2NrQVBJLkFiaWxpdHlEZWxldGVkIiwiTW9ja0FQSS5SZWdpc3RlckFiaWxpdHkiLCJNb2NrQVBJLkNvbnNvbGVDb21tYW5kIiwiTW9ja0FQSS5Db25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFTeUIsZUFBZTs7OztJQUV4QyxPQUFBO0FBRUVBLGFBRkYsT0FBQSxHQUVFQTs4QkFGRixPQUFBOztBQU1FQyxZQUFBQSxDQUFBQSxXQUFXQSxHQUFZQSxLQUFLQSxDQUFDQTtBQUM3QkEsWUFBQUEsQ0FBQUEsVUFBVUEsR0FBWUEsSUFBSUEsQ0FBQ0E7QUFDM0JBLFlBQUFBLENBQUFBLFVBQVVBLEdBQVdBLENBQUNBLENBQUNBO0FBQ3ZCQSxZQUFBQSxDQUFBQSxvQkFBb0JBLEdBQVdBLENBQUNBLENBQUNBO0FBQ2pDQSxZQUFBQSxDQUFBQSxVQUFVQSxHQUFXQSxFQUFFQSxDQUFDQTtBQUN4QkEsWUFBQUEsQ0FBQUEsT0FBT0EsR0FBV0EsRUFBRUEsQ0FBQ0E7QUFDckJBLFlBQUFBLENBQUFBLFVBQVVBLEdBQVdBLEVBQUVBLENBQUNBO0FBQ3hCQSxZQUFBQSxDQUFBQSxTQUFTQSxHQUFXQSxFQUFFQSxDQUFDQTtBQUN2QkEsWUFBQUEsQ0FBQUEsVUFBVUEsR0FBV0EsQ0FBQ0EsQ0FBQ0E7QUFDdkJBLFlBQUFBLENBQUFBLEtBQUtBLEdBQVdBLENBQUNBLENBQUNBO0FBQ2xCQSxZQUFBQSxDQUFBQSxHQUFHQSxHQUFXQSxDQUFDQSxDQUFDQTtBQUNoQkEsWUFBQUEsQ0FBQUEsU0FBU0EsR0FBV0EsQ0FBQ0EsQ0FBQ0E7QUFDdEJBLFlBQUFBLENBQUFBLG1CQUFtQkEsR0FBV0EsQ0FBQ0EsQ0FBQ0E7QUFDaENBLFlBQUFBLENBQUFBLGlCQUFpQkEsR0FBV0EsQ0FBQ0EsQ0FBQ0E7QUFDOUJBLFlBQUFBLENBQUFBLG9CQUFvQkEsR0FBV0EsQ0FBQ0EsQ0FBQ0E7QUFDakNBLFlBQUFBLENBQUFBLGlCQUFpQkEsR0FBV0EsQ0FBQ0EsQ0FBQ0E7QUFDOUJBLFlBQUFBLENBQUFBLDJCQUEyQkEsR0FBV0EsQ0FBQ0EsQ0FBQ0E7QUFDeENBLFlBQUFBLENBQUFBLDRCQUE0QkEsR0FBV0EsQ0FBQ0EsQ0FBQ0E7QUFDekNBLFlBQUFBLENBQUFBLHlCQUF5QkEsR0FBV0EsQ0FBQ0EsQ0FBQ0E7QUFDdENBLFlBQUFBLENBQUFBLHdCQUF3QkEsR0FBV0EsQ0FBQ0EsQ0FBQ0E7QUFDckNBLFlBQUFBLENBQUFBLFlBQVlBLEdBQVdBLENBQUNBLENBQUNBO0FBQ3pCQSxZQUFBQSxDQUFBQSxzQkFBc0JBLEdBQVdBLENBQUNBLENBQUNBO0FBQ25DQSxZQUFBQSxDQUFBQSxVQUFVQSxHQUFXQSxDQUFDQSxDQUFDQTtBQUN2QkEsWUFBQUEsQ0FBQUEsT0FBT0EsR0FBV0EsQ0FBQ0EsQ0FBQ0E7QUFDcEJBLFlBQUFBLENBQUFBLE9BQU9BLEdBQVdBLEVBQUVBLENBQUNBO0FBQ3JCQSxZQUFBQSxDQUFBQSxTQUFTQSxHQUFXQSxDQUFDQSxDQUFDQTtBQUN0QkEsWUFBQUEsQ0FBQUEsU0FBU0EsR0FBV0EsQ0FBQ0EsQ0FBQ0E7QUFDdEJBLFlBQUFBLENBQUFBLFNBQVNBLEdBQVdBLENBQUNBLENBQUNBO0FBQ3RCQSxZQUFBQSxDQUFBQSxlQUFlQSxHQUFXQSxDQUFDQSxDQUFDQTtBQUM1QkEsWUFBQUEsQ0FBQUEsZUFBZUEsR0FBV0EsQ0FBQ0EsQ0FBQ0E7QUFDNUJBLFlBQUFBLENBQUFBLGVBQWVBLEdBQVdBLENBQUNBLENBQUNBO0FBQzVCQSxZQUFBQSxDQUFBQSxNQUFNQSxHQUFXQSxDQUFDQSxDQUFDQTtBQUNuQkEsWUFBQUEsQ0FBQUEsU0FBU0EsR0FBV0EsQ0FBQ0EsQ0FBQ0E7QUFDdEJBLFlBQUFBLENBQUFBLFNBQVNBLEdBQVdBLENBQUNBLENBQUNBO0FBQ3RCQSxZQUFBQSxDQUFBQSxTQUFTQSxHQUFXQSxDQUFDQSxDQUFDQTtBQUN0QkEsWUFBQUEsQ0FBQUEsS0FBS0EsR0FBV0EsQ0FBQ0EsQ0FBQ0E7QUFDbEJBLFlBQUFBLENBQUFBLGVBQWVBLEdBQVdBLENBQUNBLENBQUNBO0FBQzVCQSxZQUFBQSxDQUFBQSxTQUFTQSxHQUFXQSxDQUFDQSxDQUFDQTtBQUN0QkEsWUFBQUEsQ0FBQUEsa0JBQWtCQSxHQUFXQSxDQUFDQSxDQUFDQTtBQUMvQkEsWUFBQUEsQ0FBQUEscUJBQXFCQSxHQUFXQSxDQUFDQSxDQUFDQTtBQTFDaENBLFlBQUlBLENBQUNBLElBQUlBLEdBQUdBLGdDQUFrQkEsQ0FBQ0E7S0FDaENBOztpQkFKSCxPQUFBOztlQStDZUQsdUJBQUNBLENBQWFBLEVBQUFBO0FBQVlFLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUFFQTs7O2VBQ2pDRiwyQkFBQ0EsQ0FBaUNBLEVBQUFBO0FBQVlHLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUFFQTs7O2VBQ3pESCwyQkFBQ0EsQ0FBc0ZBLEVBQUFBLEVBQVVJOzs7ZUFDMUdKLGtCQUFDQSxRQUFnQ0EsRUFBQUEsRUFBVUs7OztlQUMxQ0wsbUJBQUNBLFFBQWdDQSxFQUFBQSxFQUFVTTs7O2VBQzVDTixrQkFBQ0EsUUFBZ0NBLEVBQUFBLEVBQVVPOzs7ZUFDM0NQLGtCQUFDQSxRQUFnQ0EsRUFBQUEsRUFBVVE7OztlQUM1Q1IsaUJBQUNBLFFBQWlEQSxFQUFBQSxFQUFVUzs7O2VBQzVDVCxpQ0FBQ0EsUUFBNENBLEVBQUFBLEVBQVVVOzs7ZUFDN0RWLDJCQUFDQSxDQUFzRUEsRUFBQUE7QUFBWVcsbUJBQU9BLENBQUNBLENBQUNBO1NBQUVBOzs7ZUFDaEdYLHlCQUFDQSxDQUFxR0EsRUFBQUE7QUFBWVksbUJBQU9BLENBQUNBLENBQUNBO1NBQUVBOzs7ZUFDbklaLG1CQUFDQSxRQUFnREEsRUFBQUEsRUFBVWE7OztlQUN0RGIsd0JBQUNBLFFBQWtDQSxFQUFBQSxFQUFVYzs7O2VBQzNDZCwwQkFBQ0EsUUFBa0NBLEVBQUFBLEVBQVVlOzs7ZUFDakNmLHNDQUFDQSxRQUF5Q0EsRUFBQUEsRUFBVWdCOzs7ZUFDN0RoQiw2QkFBQ0EsQ0FBNEJBLEVBQUFBLEVBQVVpQjs7O2VBQ3hDakIsNEJBQUNBLENBQXdCQSxFQUFBQSxFQUFVa0I7OztlQUNuQ2xCLDRCQUFDQSxDQUF3Q0EsRUFBQUEsRUFBVW1COzs7ZUFDaERuQiwrQkFBQ0EsQ0FBa0NBLEVBQUFBLEVBQVVvQjs7O2VBQ25EcEIseUJBQUNBLENBQThCQSxFQUFBQSxFQUFVcUI7OztlQUNyQ3JCLDZCQUFDQSxDQUFrQ0EsRUFBQUEsRUFBVXNCOzs7ZUFDOUN0Qiw0QkFBQ0EsQ0FBMENBLEVBQUFBLEVBQVV1Qjs7O2VBQ3hEdkIseUJBQUNBLENBQWFBLEVBQUFBLEVBQVV3Qjs7O2VBQ3pCeEIsd0JBQUNBLENBQXdDQSxFQUFBQSxFQUFVeUI7OztlQUNuRHpCLHdCQUFDQSxDQUEwQ0EsRUFBQUEsRUFBVTBCOzs7ZUFDMUMxQixtQ0FBQ0EsUUFBOENBLEVBQUFBLEVBQVUyQjs7O2VBQzlEM0IsOEJBQUNBLENBQXVCQSxFQUFBQSxFQUFVNEI7OztlQUM3QjVCLG1DQUFDQSxDQUE0QkEsRUFBQUEsRUFBVTZCOzs7ZUFDMUM3QixnQ0FBQ0EsQ0FBeUJBLEVBQUFBLEVBQVU4Qjs7O2VBQ3BDOUIsZ0NBQUNBLENBQXlCQSxFQUFBQSxFQUFVK0I7OztlQUNsQy9CLGtDQUFDQSxDQUE4Q0EsRUFBQUEsRUFBVWdDOzs7ZUFDeERoQyxtQ0FBQ0EsQ0FBZ0RBLEVBQUFBLEVBQVVpQzs7O2VBQzNEakMsbUNBQUNBLENBQTRCQSxFQUFBQSxFQUFVa0M7OztlQUN4Q2xDLGtDQUFDQSxRQUFnQ0EsRUFBQUEsRUFBVW1DOzs7ZUFDekNuQyxvQ0FBQ0EsUUFBcURBLEVBQUFBLEVBQVVvQzs7O2VBQy9EcEMscUNBQUNBLFFBQXVEQSxFQUFBQSxFQUFVcUM7OztlQUNsRXJDLHFDQUFDQSxRQUFtQ0EsRUFBQUEsRUFBVXNDOzs7ZUFDOUN0QyxxQ0FBQ0EsUUFBZ0NBLEVBQUFBLEVBQVV1Qzs7O2VBQ3pDdkMsdUNBQUNBLFFBQXFEQSxFQUFBQSxFQUFVd0M7OztlQUMvRHhDLHdDQUFDQSxRQUF1REEsRUFBQUEsRUFBVXlDOzs7ZUFDbEV6Qyx3Q0FBQ0EsUUFBbUNBLEVBQUFBLEVBQVUwQzs7O2VBQ2pFMUMscUJBQUNBLENBQThDQSxFQUFBQSxFQUFVMkM7OztlQUM5RDNDLGdCQUFDQSxDQUFtRkEsRUFBQUEsRUFBVTRDOzs7ZUFDdkY1Qyx1QkFBQ0EsUUFBcUNBLEVBQUFBLEVBQVU2Qzs7O2VBQ2hEN0MsdUJBQUNBLFFBQXFDQSxFQUFBQSxFQUFVOEM7OztlQUM3QzlDLDBCQUFDQSxRQUFzREEsRUFBQUEsRUFBVStDOzs7ZUFDakUvQywwQkFBQ0EsUUFBcUNBLEVBQUFBLEVBQVVnRDs7O2VBQzdDaEQsNkJBQUNBLFFBQStGQSxFQUFBQSxFQUFVaUQ7OztlQUNoSGpELHVCQUFDQSxDQUF5QkEsRUFBQUEsRUFBVWtEOzs7ZUFDckNsRCxzQkFBQ0EsQ0FBNEdBLEVBQUFBLEVBQVVtRDs7O2VBRTVHbkQsaUNBQUNBLENBQVNBLEVBQUFBLEVBQVVvRDs7O2VBQ3RCcEQsK0JBQUNBLENBQVNBLEVBQUFBLEVBQVVxRDs7O2VBQ3ZCckQsNEJBQUNBLFFBQWdCQSxFQUFBQSxFQUFVc0Q7OztlQUN2QnRELGdDQUFDQSxHQUFTQSxFQUFBQSxFQUFVdUQ7OztlQUN0QnZELGdDQUFBQSxFQUFXd0Q7OztlQUNSeEQsaUNBQUNBLENBQVNBLEVBQUFBLEVBQVV5RDs7O2VBQ3hCekQsNkJBQUNBLENBQVNBLEVBQUFBLEVBQVUwRDs7O2VBRXBDMUQsYUFBQ0EsT0FBZUEsRUFBQUEsRUFBVTJEOzs7ZUFDcEIzRCxtQkFBQ0EsU0FBaUJBLEVBQUVBLE1BQWNBLEVBQUVBLEdBQVdBLEVBQUVBLEtBQWFBLEVBQUVBLElBQVlBLEVBQUFBLEVBQVU0RDs7O2VBQ3BGNUQsdUJBQUFBLEVBQVc2RDs7O2VBQ1I3RCx3QkFBQ0EsRUFBVUEsRUFBQUEsRUFBVThEOzs7ZUFDdkI5RCx3QkFBQUEsRUFBVytEOzs7ZUFDakIvRCxnQkFBQ0EsSUFBWUEsRUFBQUEsRUFBVWdFOzs7ZUFDdEJoRSxpQkFBQ0EsSUFBWUEsRUFBQUEsRUFBVWlFOzs7ZUFDeEJqRSxnQkFBQ0EsSUFBWUEsRUFBQUEsRUFBVWtFOzs7ZUFDdkJsRSxnQkFBQ0EsSUFBWUEsRUFBQUEsRUFBVW1FOzs7ZUFDWG5FLDRCQUFDQSxJQUFZQSxFQUFBQSxFQUFVb0U7OztlQUNsQ3BFLGlCQUFDQSxJQUFZQSxFQUFBQSxFQUFVcUU7OztlQUNUckUsaUNBQUFBLEVBQVdzRTs7O2VBQ1h0RSxpQ0FBQUEsRUFBV3VFOzs7ZUFDNUJ2RSxnQkFBQUEsRUFBV3dFOzs7ZUFDSHhFLHdCQUFBQSxFQUFXeUU7OztlQUNqQnpFLGdCQUFDQSxLQUFhQSxFQUFBQSxFQUFVMEU7OztlQUN4QjFFLGdCQUFDQSxLQUFhQSxFQUFBQSxFQUFVMkU7OztlQUMxQjNFLGNBQUNBLEtBQWFBLEVBQWdCQSxFQUFVNEU7OztlQUNyQzVFLGlCQUFDQSxFQUFVQSxFQUFBQSxFQUFVNkU7OztlQUN0QjdFLGdCQUFDQSxTQUFpQkEsRUFBQUEsRUFBVThFOzs7ZUFDcEI5RSx3QkFBQ0EsQ0FBNEJBLEVBQUFBLEVBQVUrRTs7O2VBQzlDL0UsaUJBQUNBLE1BQWNBLEVBQUFBLEVBQVVnRjs7O2VBQ3JCaEYscUJBQUNBLE1BQWNBLEVBQUFBLEVBQVVpRjs7O2VBQzNCakYsbUJBQUNBLE1BQWNBLEVBQUFBLEVBQVVrRjs7O2VBQ2pCbEYsNkJBQUFBLEVBQVdtRjs7O2VBQ1JuRiw4QkFBQ0EsQ0FBYUEsRUFBQUEsRUFBVW9GOzs7ZUFDdkJwRiwrQkFBQ0EsR0FBU0EsRUFBQUEsRUFBVXFGOzs7ZUFDMUJyRix5QkFBQ0EsUUFBZ0JBLEVBQUVBLEtBQWFBLEVBQUFBLEVBQVVzRjs7O2VBQzVDdEYsdUJBQUNBLEdBQVNBLEVBQUFBLEVBQVV1Rjs7O2VBQ3JCdkYsc0JBQUNBLFFBQWdCQSxFQUFBQSxFQUFVd0Y7OztlQUNyQnhGLDhCQUFBQSxFQUFXeUY7OztlQUNkekYseUJBQUNBLENBQTRCQSxFQUFBQSxFQUFVMEY7OztlQUN6QzFGLHlCQUFBQSxFQUFXMkY7OztlQUNSM0YsMEJBQUNBLENBQTRCQSxFQUFBQSxFQUFVNEY7OztlQUN4QzVGLHlCQUFDQSxDQUE0QkEsRUFBQUEsRUFBVTZGOzs7ZUFDdkM3Rix5QkFBQ0EsQ0FBMEJBLEVBQUFBLEVBQVU4Rjs7O2VBQ3ZDOUYsdUJBQUNBLENBQXlCQSxFQUFBQSxFQUFVK0Y7OztlQUNoQy9GLDZCQUFBQSxFQUFXZ0c7OztlQUNqQmhHLHVCQUFBQSxFQUFXaUc7OztlQUNWakcsd0JBQUFBLEVBQVdrRzs7O2VBQ1hsRyx3QkFBQUEsRUFBV21HOzs7ZUFDWG5HLHdCQUFBQSxFQUFXb0c7OztlQUNWcEcseUJBQUFBLEVBQVdxRzs7O2VBQ1ZyRywwQkFBQUEsRUFBV3NHOzs7ZUFDZnRHLHNCQUFBQSxFQUFXdUc7OztlQUNYdkcsc0JBQUFBLEVBQVd3Rzs7O2VBQ1h4RyxzQkFBQUEsRUFBV3lHOzs7ZUFDUnpHLHlCQUFBQSxFQUFXMEc7OztlQUNWMUcsMEJBQUFBLEVBQVcyRzs7O2VBQ04zRywrQkFBQUEsRUFBVzRHOzs7ZUFDaEI1RywwQkFBQUEsRUFBVzZHOzs7ZUFDcEI3RyxlQUFDQSxLQUFhQSxFQUFBQSxFQUFVOEc7OztlQUNyQjlHLGtCQUFDQSxJQUFZQSxFQUFFQSxFQUFVQSxFQUFFQSxJQUFZQSxFQUFBQSxFQUFVK0c7OztlQUNsRC9HLGlCQUFDQSxJQUFZQSxFQUFBQSxFQUFVZ0g7OztlQUN0QmhILGtCQUFDQSxJQUFZQSxFQUFBQSxFQUFVaUg7OztlQUNmakgsMEJBQUNBLE9BQWVBLEVBQUVBLFVBQWtCQSxFQUFBQSxFQUFVa0g7OztlQUN6RGxILGlCQUFBQSxFQUFXbUg7OztlQUNObkgsb0JBQUNBLE1BQWNBLEVBQUFBLEVBQVVvSDs7O2VBQ3hCcEgscUJBQUNBLFNBQWlCQSxFQUFBQSxFQUFVcUg7OztlQUM1QnJILHFCQUFDQSxTQUFpQkEsRUFBQUEsRUFBVXNIOzs7ZUFDekJ0SCx3QkFBQ0EsU0FBaUJBLEVBQUVBLHNCQUE4QkEsRUFBRUEsd0JBQWdDQSxFQUFFQSxPQUFlQSxFQUFBQSxFQUFVdUg7OztlQUMvR3ZILHdCQUFDQSxTQUFpQkEsRUFBQUEsRUFBVXdIOzs7ZUFDM0J4SCx5QkFBQ0EsU0FBaUJBLEVBQUVBLHNCQUE4QkEsRUFBRUEsd0JBQWdDQSxFQUFBQSxFQUFVeUg7OztlQUMvRnpILHdCQUFDQSxJQUFZQSxFQUFBQSxFQUFVMEg7OztlQUM5QjFILGlCQUFDQSxJQUFZQSxFQUFFQSxJQUFZQSxFQUFFQSxTQUFpQkEsRUFBRUEsVUFBa0JBLEVBQUFBLEVBQVUySDs7O1dBMUtyRixPQUFBOzs7cUJBQUEsT0FBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ0c2QvdHNkLmQudHNcIi8+XG5cbmltcG9ydCB7Y2xpZW50SW50ZXJmYWNlLCB0YWdzfSBmcm9tICdjdS1jb3JlJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnRlbWl0dGVyMyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vY2tBUEkge1xuICBwcml2YXRlIF9fZWU6IEV2ZW50RW1pdHRlcjtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fX2VlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgbXV0ZVZvbHVtZTogYm9vbGVhbiA9IHRydWU7XG4gIG1haW5Wb2x1bWU6IG51bWJlciA9IDE7XG4gIHBhdGNoUmVzb3VyY2VDaGFubmVsOiBudW1iZXIgPSAxO1xuICBsb2dpblRva2VuOiBzdHJpbmcgPSAnJztcbiAgcGt0SGFzaDogc3RyaW5nID0gJyc7XG4gIHdlYkFQSUhvc3Q6IHN0cmluZyA9ICcnO1xuICBzZXJ2ZXJVUkw6IHN0cmluZyA9ICcnO1xuICBzZXJ2ZXJUaW1lOiBudW1iZXIgPSAxO1xuICB2c3luYzogbnVtYmVyID0gMTtcbiAgZnBzOiBudW1iZXIgPSAxO1xuICBmcmFtZVRpbWU6IG51bWJlciA9IDE7XG4gIG5ldHN0YXRzX3VkcFBhY2tldHM6IG51bWJlciA9IDE7XG4gIG5ldHN0YXRzX3VkcEJ5dGVzOiBudW1iZXIgPSAxO1xuICBuZXRzdGF0c190Y3BNZXNzYWdlczogbnVtYmVyID0gMTtcbiAgbmV0c3RhdHNfdGNwQnl0ZXM6IG51bWJlciA9IDE7XG4gIG5ldHN0YXRzX3BsYXllcnNfdXBkYXRlQml0czogbnVtYmVyID0gMTtcbiAgbmV0c3RhdHNfcGxheWVyc191cGRhdGVDb3VudDogbnVtYmVyID0gMTtcbiAgbmV0c3RhdHNfcGxheWVyc19uZXdDb3VudDogbnVtYmVyID0gMTtcbiAgbmV0c3RhdHNfcGxheWVyc19uZXdCaXRzOiBudW1iZXIgPSAxO1xuICBuZXRzdGF0c19sYWc6IG51bWJlciA9IDE7XG4gIHBhcnRpY2xlc1JlbmRlcmVkQ291bnQ6IG51bWJlciA9IDE7XG4gIGNoYXJhY3RlcnM6IG51bWJlciA9IDE7XG4gIHRlcnJhaW46IG51bWJlciA9IDE7XG4gIHBlcmZIVUQ6IHN0cmluZyA9ICcnO1xuICBsb2NhdGlvblg6IG51bWJlciA9IDE7XG4gIGxvY2F0aW9uWTogbnVtYmVyID0gMTtcbiAgbG9jYXRpb25aOiBudW1iZXIgPSAxO1xuICBzZXJ2ZXJMb2NhdGlvblg6IG51bWJlciA9IDE7XG4gIHNlcnZlckxvY2F0aW9uWTogbnVtYmVyID0gMTtcbiAgc2VydmVyTG9jYXRpb25aOiBudW1iZXIgPSAxO1xuICBmYWNpbmc6IG51bWJlciA9IDE7XG4gIHZlbG9jaXR5WDogbnVtYmVyID0gMTtcbiAgdmVsb2NpdHlZOiBudW1iZXIgPSAxO1xuICB2ZWxvY2l0eVo6IG51bWJlciA9IDE7XG4gIHNwZWVkOiBudW1iZXIgPSAxO1xuICBob3Jpem9udGFsU3BlZWQ6IG51bWJlciA9IDE7XG4gIHZlbEZhY2luZzogbnVtYmVyID0gMTtcbiAgZG93bkNvbGxpc2lvbkFuZ2xlOiBudW1iZXIgPSAxO1xuICB0ZXJyYWluQ29sbGlzaW9uQW5nbGU6IG51bWJlciA9IDE7XG5cbiAgT25Jbml0aWFsaXplZChjOiAoKSA9PiB2b2lkKTogbnVtYmVyIHsgcmV0dXJuIDE7IH07XG4gIE9uU2VydmVyQ29ubmVjdGVkKGM6IChpc0Nvbm5lY3RlZDogYm9vbGVhbikgPT4gdm9pZCk6IG51bWJlciB7IHJldHVybiAxOyB9O1xuICBPblVwZGF0ZU5hbWVwbGF0ZShjOiAoY2VsbDogbnVtYmVyLCBjb2xvck1vZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGd0YWc6IHN0cmluZywgdGl0bGU6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge307XG4gIE9uT3BlblVJKGNhbGxiYWNrOiAobmFtZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7fTtcbiAgT25DbG9zZVVJKGNhbGxiYWNrOiAobmFtZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7fTtcbiAgT25TaG93VUkoY2FsbGJhY2s6IChuYW1lOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHt9O1xuICBPbkhpZGVVSShjYWxsYmFjazogKG5hbWU6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge307XG4gIE9uRXZlbnQoY2FsbGJhY2s6IChldmVudDogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCk6IHZvaWQge307XG4gIE9uQWJpbGl0eU51bWJlcnNDaGFuZ2VkKGNhbGxiYWNrOiAoYWJpbGl0eU51bWJlcnM6IHN0cmluZ1tdKSA9PiB2b2lkKTogdm9pZCB7fTtcbiAgT25BYmlsaXR5Q29vbGRvd24oYzogKGNvb2xkb3duSUQ6IG51bWJlciwgdGltZVN0YXJ0ZWQ6IG51bWJlciwgZHVyYXRpb246IG51bWJlcikgPT4gdm9pZCk6IG51bWJlciB7IHJldHVybiAxOyB9O1xuICBPbkFiaWxpdHlBY3RpdmUoYzogKGN1cnJlbnRBYmlsaXR5OiBzdHJpbmcsIHRpbWVTdGFydGVkOiBudW1iZXIsIHRpbWVUcmlnZ2VyZWQ6IG51bWJlciwgcXVldWVkQWJpbGl0eTogc3RyaW5nKSA9PiBhbnkpOiBudW1iZXIgeyByZXR1cm4gMTsgfTtcbiAgT25HZXRJdGVtKGNhbGxiYWNrOiAoaXRlbUlEOiBzdHJpbmcsIGRhdGE6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge307XG4gIE9uSXRlbUVxdWlwcGVkKGNhbGxiYWNrOiAoaXRlbUlEOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHt9O1xuICBPbkl0ZW1VbmVxdWlwcGVkKGNhbGxiYWNrOiAoaXRlbUlEOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHt9O1xuICBPbkVxdWlwcGVkR2Vhckl0ZW1JRHNDaGFuZ2VkKGNhbGxiYWNrOiAoZ2Vhckl0ZW1JRHM6IHN0cmluZ1tdKSA9PiB2b2lkKTogdm9pZCB7fTtcbiAgT25SZWNlaXZlQ29uZmlnVmFycyhjOiAoY29uZmlnczogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7fTtcbiAgT25SZWNlaXZlQ29uZmlnVmFyKGM6IChjb25maWc6IGFueSkgPT4gdm9pZCk6IHZvaWQge307XG4gIE9uQ29uZmlnVmFyQ2hhbmdlZChjOiAoaXNDaGFuZ2VTdWNjZXNzZnVsOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7fTtcbiAgT25CdWlsZGluZ01vZGVDaGFuZ2VkKGM6IChidWlsZGluZ01vZGU6IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkIHt9O1xuICBPblJlY2VpdmVCbG9ja3MoYzogKGJ1aWxkaW5nRGljdDogYW55KSA9PiB2b2lkKTogdm9pZCB7fTtcbiAgT25SZWNlaXZlU2NyZWVuU2hvdChjOiAoc2NyZWVuU2hvdFN0cmluZzogYW55KSA9PiB2b2lkKTogdm9pZCB7fTtcbiAgT25SZWNlaXZlQmxvY2tUYWdzKGM6IChibG9ja0lEOiBudW1iZXIsIHRhZ0RpY3Q6IGFueSkgPT4gdm9pZCk6IHZvaWQge307XG4gIE9uQ29weUJsdWVwcmludChjOiAoKSA9PiB2b2lkKTogdm9pZCB7fTtcbiAgT25OZXdCbHVlcHJpbnQoYzogKGluZGV4OiBudW1iZXIsIG5hbWU6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge307XG4gIE9uQW5ub3VuY2VtZW50KGM6IChtZXNzYWdlOiBzdHJpbmcsIHR5cGU6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge307XG4gIE9uSW52ZW50b3J5SXRlbUlEc0NoYW5nZWQoY2FsbGJhY2s6IChpbnZlbnRvcnlJdGVtSURzOiBzdHJpbmdbXSkgPT4gdm9pZCk6IHZvaWQge307XG4gIE9uQ2hhcmFjdGVySURDaGFuZ2VkKGM6IChpZDogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7fTtcbiAgT25DaGFyYWN0ZXJGYWN0aW9uQ2hhbmdlZChjOiAoZmFjdGlvbjogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7fTtcbiAgT25DaGFyYWN0ZXJSYWNlQ2hhbmdlZChjOiAocmFjZTogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7fTtcbiAgT25DaGFyYWN0ZXJOYW1lQ2hhbmdlZChjOiAobmFtZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7fTtcbiAgT25DaGFyYWN0ZXJIZWFsdGhDaGFuZ2VkKGM6IChoZWFsdGg6IG51bWJlciwgbWF4SGVhbHRoOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHt9O1xuICBPbkNoYXJhY3RlclN0YW1pbmFDaGFuZ2VkKGM6IChzdGFtaW5hOiBudW1iZXIsIG1heFN0YW1pbmE6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge307XG4gIE9uQ2hhcmFjdGVyRWZmZWN0c0NoYW5nZWQoYzogKGVmZmVjdHM6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge307XG4gIE9uRW5lbXlUYXJnZXROYW1lQ2hhbmdlZChjYWxsYmFjazogKG5hbWU6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge307XG4gIE9uRW5lbXlUYXJnZXRIZWFsdGhDaGFuZ2VkKGNhbGxiYWNrOiAoaGVhbHRoOiBudW1iZXIsIG1heEhlYWx0aDogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7fTtcbiAgT25FbmVteVRhcmdldFN0YW1pbmFDaGFuZ2VkKGNhbGxiYWNrOiAoc3RhbWluYTogbnVtYmVyLCBtYXhTdGFtaW5hOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHt9O1xuICBPbkVuZW15VGFyZ2V0RWZmZWN0c0NoYW5nZWQoY2FsbGJhY2s6IChlZmZlY3RzOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHt9O1xuICBPbkZyaWVuZGx5VGFyZ2V0TmFtZUNoYW5nZWQoY2FsbGJhY2s6IChuYW1lOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHt9O1xuICBPbkZyaWVuZGx5VGFyZ2V0SGVhbHRoQ2hhbmdlZChjYWxsYmFjazogKGhlYWx0aDogbnVtYmVyLCBtYXhIZWFsdGg6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge307XG4gIE9uRnJpZW5kbHlUYXJnZXRTdGFtaW5hQ2hhbmdlZChjYWxsYmFjazogKHN0YW1pbmE6IG51bWJlciwgbWF4U3RhbWluYTogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7fTtcbiAgT25GcmllbmRseVRhcmdldEVmZmVjdHNDaGFuZ2VkKGNhbGxiYWNrOiAoZWZmZWN0czogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7fTtcbiAgT25CZWdpbkNoYXQoYzogKGNvbW1hbmRNb2RlOiBudW1iZXIsIHRleHQ6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge307XG4gIE9uQ2hhdChjOiAodHlwZTogbnVtYmVyLCBmcm9tOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgbmljazogc3RyaW5nLCBpc2NzZTogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge307XG4gIE9uU2hvd0FiaWxpdHkoY2FsbGJhY2s6IChhYmlsaXR5SUQ6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge307XG4gIE9uRWRpdEFiaWxpdHkoY2FsbGJhY2s6IChhYmlsaXR5SUQ6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge307XG4gIE9uQWJpbGl0eUNyZWF0ZWQoY2FsbGJhY2s6IChhYmlsaXR5SUQ6IHN0cmluZywgYWJpbGl0eTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7fTtcbiAgT25BYmlsaXR5RGVsZXRlZChjYWxsYmFjazogKGFiaWxpdHlJRDogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7fTtcbiAgT25BYmlsaXR5UmVnaXN0ZXJlZChjYWxsYmFjazogKGFiaWxpdHlJRDogc3RyaW5nLCBjb29sZG93bnM6IHN0cmluZywgZHVyYXRpb246IG51bWJlciwgdHJpZ2dlclRpbWU6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge307XG4gIE9uQ29uc29sZVRleHQoYzogKHRleHQ6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge307XG4gIE9uTG9nTWVzc2FnZShjOiAoY2F0ZWdvcnk6IHN0cmluZywgbGV2ZWw6IG51bWJlciwgdGltZTogc3RyaW5nLCBwcm9jZXNzOiBudW1iZXIsIHRocmVhZDogbnVtYmVyLCBtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHt9O1xuXG4gIENhbmNlbE9uQWJpbGl0eUNvb2xkb3duKGM6IG51bWJlcik6IHZvaWQge307XG4gIENhbmNlbE9uQWJpbGl0eUFjdGl2ZShjOiBudW1iZXIpOiB2b2lkIHt9O1xuICBDYW5jZWxDaGFuZ2VDb25maWcodmFyaWFibGU6IHN0cmluZyk6IHZvaWQge307XG4gIENhbmNlbEFsbENvbmZpZ0NoYW5nZXModGFnOiB0YWdzKTogdm9pZCB7fTtcbiAgQ2FuY2VsQmxvY2tQbGFjZW1lbnQoKTogdm9pZCB7fTtcbiAgQ2FuY2VsT25TZXJ2ZXJDb25uZWN0ZWQoYzogbnVtYmVyKTogdm9pZCB7fTtcbiAgQ2FuY2VsT25Jbml0aWFsaXplZChjOiBudW1iZXIpOiB2b2lkIHt9O1xuXG4gIEZPVihkZWdyZWVzOiBudW1iZXIpOiB2b2lkIHt9O1xuICBEcm9wTGlnaHQoaW50ZW5zaXR5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCByZWQ6IG51bWJlciwgZ3JlZW46IG51bWJlciwgYmx1ZTogbnVtYmVyKTogdm9pZCB7fTtcbiAgUmVzZXRMaWdodHMoKTogdm9pZCB7fTtcbiAgUGxheVNvdW5kRXZlbnQoaWQ6IG51bWJlcik6IHZvaWQge307XG4gIFRvZ2dsZUNhbWVyYSgpOiB2b2lkIHt9O1xuICBPcGVuVUkobmFtZTogc3RyaW5nKTogdm9pZCB7fTtcbiAgQ2xvc2VVSShuYW1lOiBzdHJpbmcpOiB2b2lkIHt9O1xuICBIaWRlVUkobmFtZTogc3RyaW5nKTogdm9pZCB7fTtcbiAgU2hvd1VJKG5hbWU6IHN0cmluZyk6IHZvaWQge307XG4gIFRvZ2dsZVVJVmlzaWJpbGl0eShuYW1lOiBzdHJpbmcpOiB2b2lkIHt9O1xuICBGb2N1c1VJKG5hbWU6IHN0cmluZyk6IHZvaWQge307XG4gIFJlcXVlc3RJbnB1dE93bmVyc2hpcCgpOiB2b2lkIHt9O1xuICBSZWxlYXNlSW5wdXRPd25lcnNoaXAoKTogdm9pZCB7fTtcbiAgUXVpdCgpOiB2b2lkIHt9O1xuICBDcmFzaFRoZUdhbWUoKTogdm9pZCB7fTtcbiAgTGlzdGVuKGV2ZW50OiBzdHJpbmcpOiB2b2lkIHt9O1xuICBJZ25vcmUoZXZlbnQ6IHN0cmluZyk6IHZvaWQge307XG4gIEZpcmUoZXZlbnQ6IHN0cmluZywgLi4uYXJnczogYW55W10pOiB2b2lkIHt9O1xuICBSZXNwYXduKGlkOiBzdHJpbmcpOiB2b2lkIHt9O1xuICBBdHRhY2soYWJpbGl0eUlEOiBzdHJpbmcpOiB2b2lkIHt9O1xuICBPbkFiaWxpdHlFcnJvcihjOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7fTtcbiAgR2V0SXRlbShpdGVtSUQ6IHN0cmluZyk6IHZvaWQge307XG4gIFVuZXF1aXBJdGVtKGl0ZW1JRDogc3RyaW5nKTogdm9pZCB7fTtcbiAgRXF1aXBJdGVtKGl0ZW1JRDogc3RyaW5nKTogdm9pZCB7fTtcbiAgU2F2ZUNvbmZpZ0NoYW5nZXMoKTogdm9pZCB7fTtcbiAgT25TYXZlZENvbmZpZ0NoYW5nZXMoYzogKCkgPT4gdm9pZCk6IHZvaWQge307XG4gIFJlc3RvcmVDb25maWdEZWZhdWx0cyh0YWc6IHRhZ3MpOiB2b2lkIHt9O1xuICBDaGFuZ2VDb25maWdWYXIodmFyaWFibGU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge307XG4gIEdldENvbmZpZ1ZhcnModGFnOiB0YWdzKTogdm9pZCB7fTtcbiAgR2V0Q29uZmlnVmFyKHZhcmlhYmxlOiBzdHJpbmcpOiB2b2lkIHt9O1xuICBUb2dnbGVCdWlsZGluZ01vZGUoKTogdm9pZCB7fTtcbiAgU2V0QnVpbGRpbmdNb2RlKGM6IChuZXdNb2RlOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHt9O1xuICBSZXF1ZXN0QmxvY2tzKCk6IHZvaWQge307XG4gIFJlcXVlc3RCbG9ja1RhZ3MoYzogKGJsb2NrSUQ6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge307XG4gIENoYW5nZUJsb2NrVHlwZShjOiAobmV3VHlwZTogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7fTtcbiAgU2VsZWN0Qmx1ZXByaW50KGM6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7fTtcbiAgU2F2ZUJsdWVwcmludChjOiAobmFtZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7fTtcbiAgUmVxdWVzdEJsdWVwcmludHMoKTogdm9pZCB7fTtcbiAgQ29tbWl0QmxvY2soKTogdm9pZCB7fTtcbiAgQmxvY2tSb3RhdGVYKCk6IHZvaWQge307XG4gIEJsb2NrUm90YXRlWSgpOiB2b2lkIHt9O1xuICBCbG9ja1JvdGF0ZVooKTogdm9pZCB7fTtcbiAgUmVtb3ZlSXNsYW5kcygpOiB2b2lkIHt9O1xuICBBcHBseVN0YWJpbGl0eSgpOiB2b2lkIHt9O1xuICBCbG9ja0ZsaXBYKCk6IHZvaWQge307XG4gIEJsb2NrRmxpcFkoKTogdm9pZCB7fTtcbiAgQmxvY2tGbGlwWigpOiB2b2lkIHt9O1xuICBDb3B5Qmx1ZXByaW50KCk6IHZvaWQge307XG4gIFBhc3RlQmx1ZXByaW50KCk6IHZvaWQge307XG4gIE9wZW5TY3JlZW5zaG90U2hhcmUoKTogdm9pZCB7fTtcbiAgVGFrZVNjcmVlbnNob3QoKTogdm9pZCB7fTtcbiAgRW1vdGUoZW1vdGU6IG51bWJlcik6IHZvaWQge307XG4gIFNlbmRDaGF0KHR5cGU6IG51bWJlciwgdG86IHN0cmluZywgYm9keTogc3RyaW5nKTogdm9pZCB7fTtcbiAgSm9pbk1VQyhyb29tOiBzdHJpbmcpOiB2b2lkIHt9O1xuICBMZWF2ZU1VQyhyb29tOiBzdHJpbmcpOiB2b2lkIHt9O1xuICBTZW5kU2xhc2hDb21tYW5kKGNvbW1hbmQ6IHN0cmluZywgcGFyYW1ldGVyczogc3RyaW5nKTogdm9pZCB7fTtcbiAgU3R1Y2soKTogdm9pZCB7fTtcbiAgQ2hhbmdlWm9uZSh6b25lSUQ6IG51bWJlcik6IHZvaWQge307XG4gIFNob3dBYmlsaXR5KGFiaWxpdHlJRDogc3RyaW5nKTogdm9pZCB7fTtcbiAgRWRpdEFiaWxpdHkoYWJpbGl0eUlEOiBzdHJpbmcpOiB2b2lkIHt9O1xuICBBYmlsaXR5Q3JlYXRlZChhYmlsaXR5SUQ6IHN0cmluZywgcHJpbWFyeUJhc2VDb21wb25lbnRJRDogc3RyaW5nLCBzZWNvbmRhcnlCYXNlQ29tcG9uZW50SUQ6IHN0cmluZywgYWJpbGl0eTogc3RyaW5nKTogdm9pZCB7fTtcbiAgQWJpbGl0eURlbGV0ZWQoYWJpbGl0eUlEOiBzdHJpbmcpOiB2b2lkIHt9O1xuICBSZWdpc3RlckFiaWxpdHkoYWJpbGl0eUlEOiBzdHJpbmcsIHByaW1hcnlCYXNlQ29tcG9uZW50SUQ6IHN0cmluZywgc2Vjb25kYXJ5QmFzZUNvbXBvbmVudElEOiBzdHJpbmcpOiB2b2lkIHt9O1xuICBDb25zb2xlQ29tbWFuZChib2R5OiBzdHJpbmcpOiB2b2lkIHt9O1xuICBDb25uZWN0KGhvc3Q6IHN0cmluZywgcG9ydDogc3RyaW5nLCBjaGFyYWN0ZXI6IHN0cmluZywgd2ViQVBJSG9zdDogc3RyaW5nKTogdm9pZCB7fTtcbn1cbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=