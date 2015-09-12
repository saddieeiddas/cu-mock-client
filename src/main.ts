/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/// <reference path="tsd/tsd.d.ts"/>

import {clientInterface, tags} from 'cu-core';
import {EventEmitter2 as EventEmitter} from 'eventemitter2';

class EventEmitterHash {
  id: number;
  c: Function;
  event: string;
  constructor(id: number, c: Function, event: string) {
    this.id = id;
    this.c = c;
    this.event = event;
  }
}

export default class MockAPI {
  private _mockEventEmitterInternal: EventEmitter;
  private _mockEventEmitter: EventEmitter;
  private _mockEventEmitterHash: EventEmitterHash[];
  private _mockEventEmitterCounter: number;

  private _mockInitialize() {
    this._mockEventEmitterCounter = 0;
    this._mockEventEmitterInternal = new EventEmitter({
      wildcard: true,
      maxListeners: 50
    });
    this._mockEventEmitter = new EventEmitter({
      wildcard: true,
      maxListeners: 50
    });
    this._mockEventEmitterHash = [];
  }

  private _mockAddEventListener(event: string, c: Function): number {
    this._mockEventEmitterCounter += 1;
    const eventHash = new EventEmitterHash(this._mockEventEmitterCounter, c, event);
    this._mockEventEmitterHash.push(eventHash);
    this._mockEventEmitter.on(eventHash.event, eventHash.c);
    return eventHash.id;
  }

  private _mockAddEventListenerVoid(event: string, c: Function): void {
    this._mockAddEventListener(event, c);
  }

  private _mockRemoveEventListener(id: number): void {
    this._mockEventEmitterHash = this._mockEventEmitterHash.filter((hash: EventEmitterHash) => {
      if (hash.id === id) {
        this._mockEventEmitter.off(hash.event, hash.c);
        return false;
      } else {
        return true;
      }
    })
  }

  constructor() {
    this._mockInitialize();
    setTimeout(() => {
      this.initialized = true;

      const loginToken = sessionStorage.getItem('mock_loginToken');
      if (loginToken) {
        this.loginToken = loginToken;
      }

      this._mockEventEmitter.emit('Initialized');
    }, 0);
  }

  characters: number = 1;
  downCollisionAngle: number = 1;
  facing: number = 1;
  fps: number = 1;
  frameTime: number = 1;
  horizontalSpeed: number = 1;
  initialized: boolean = false;
  locationX: number = 1;
  locationY: number = 1;
  locationZ: number = 1;
  _loginToken: string = '';
  get loginToken(): string {
    if (! this._loginToken)  {
      this._loginToken = window.prompt('Login Token?');
      sessionStorage.setItem('mock_loginToken', this._loginToken);
    }
    return this._loginToken;
  }
  set loginToken(loginToken: string) {
    this._loginToken = loginToken;
  }
  mainVolume: number = 1;
  muteVolume: boolean = true;
  netstats_lag: number = 1;
  netstats_players_newBits: number = 1;
  netstats_players_newCount: number = 1;
  netstats_players_updateBits: number = 1;
  netstats_players_updateCount: number = 1;
  netstats_tcpBytes: number = 1;
  netstats_tcpMessages: number = 1;
  netstats_udpBytes: number = 1;
  netstats_udpPackets: number = 1;
  particlesRenderedCount: number = 1;
  patchResourceChannel: number = 1;
  perfHUD: string = '';
  pktHash: string = '';
  serverLocationX: number = 1;
  serverLocationY: number = 1;
  serverLocationZ: number = 1;
  serverTime: number = 1;
  serverURL: string = '';
  speed: number = 1;
  terrain: number = 1;
  terrainCollisionAngle: number = 1;
  velFacing: number = 1;
  velocityX: number = 1;
  velocityY: number = 1;
  velocityZ: number = 1;
  vsync: number = 1;
  webAPIHost: string = '';

  OnAbilityActive(c: (currentAbility: string, timeStarted: number, timeTriggered: number, queuedAbility: string) => any): number { return this._mockAddEventListener('AbilityActive', c); };
  OnAbilityCooldown(c: (cooldownID: number, timeStarted: number, duration: number) => void): number { return this._mockAddEventListener('AbilityCooldown', c); };
  OnAbilityCreated(callback: (abilityID: string, ability: string) => void): void { this._mockAddEventListenerVoid('AbilityCreated', callback); };
  OnAbilityDeleted(callback: (abilityID: string) => void): void { this._mockAddEventListenerVoid('AbilityDeleted', callback); };
  OnAbilityNumbersChanged(callback: (abilityNumbers: string[]) => void): void { this._mockAddEventListenerVoid('AbilityNumbersChanged', callback); };
  OnAbilityRegistered(callback: (abilityID: string, cooldowns: string, duration: number, triggerTime: number) => void): void { this._mockAddEventListenerVoid('AbilityRegistered', callback); };
  OnAnnouncement(c: (message: string, type: number) => void): void { this._mockAddEventListenerVoid('Announcement', c); };
  OnBeginChat(c: (commandMode: number, text: string) => void): void { this._mockAddEventListenerVoid('BeginChat', c); };
  OnBuildingModeChanged(c: (buildingMode: boolean) => void): void { this._mockAddEventListenerVoid('BuildingModeChanged', c); };
  OnCharacterEffectsChanged(c: (effects: string) => void): void { this._mockAddEventListenerVoid('CharacterEffectsChanged', c); };
  OnCharacterFactionChanged(c: (faction: number) => void): void { this._mockAddEventListenerVoid('CharacterFactionChanged', c); };
  OnCharacterHealthChanged(c: (health: number, maxHealth: number) => void): void { this._mockAddEventListenerVoid('CharacterHealthChanged', c); };
  OnCharacterIDChanged(c: (id: string) => void): void { this._mockAddEventListenerVoid('CharacterIDChanged', c); };
  OnCharacterNameChanged(c: (name: string) => void): void { this._mockAddEventListenerVoid('CharacterNameChanged', c); };
  OnCharacterRaceChanged(c: (race: number) => void): void { this._mockAddEventListenerVoid('CharacterRaceChanged', c); };
  OnCharacterStaminaChanged(c: (stamina: number, maxStamina: number) => void): void { this._mockAddEventListenerVoid('CharacterStaminaChanged', c); };
  OnChat(c: (type: number, from: string, body: string, nick: string, iscse: boolean) => void): void { this._mockAddEventListenerVoid('Chat', c); };
  OnCloseUI(callback: (name: string) => void): void { this._mockAddEventListenerVoid('CloseUI', callback); };
  OnConfigVarChanged(c: (isChangeSuccessful: boolean) => void): void { this._mockAddEventListenerVoid('ConfigVarChanged', c); };
  OnConsoleText(c: (text: string) => void): void { this._mockAddEventListenerVoid('ConsoleText', c); };
  OnCopyBlueprint(c: () => void): void { this._mockAddEventListenerVoid('CopyBlueprint', c); };
  OnEditAbility(callback: (abilityID: string) => void): void { this._mockAddEventListenerVoid('EditAbility', callback); };
  OnEnemyTargetEffectsChanged(callback: (effects: string) => void): void { this._mockAddEventListenerVoid('EnemyTargetEffectsChanged', callback); };
  OnEnemyTargetHealthChanged(callback: (health: number, maxHealth: number) => void): void { this._mockAddEventListenerVoid('EnemyTargetHealthChanged', callback); };
  OnEnemyTargetNameChanged(callback: (name: string) => void): void { this._mockAddEventListenerVoid('EnemyTargetNameChanged', callback); };
  OnEnemyTargetStaminaChanged(callback: (stamina: number, maxStamina: number) => void): void { this._mockAddEventListenerVoid('EnemyTargetStaminaChanged', callback); };
  OnEquippedGearItemIDsChanged(callback: (gearItemIDs: string[]) => void): void { this._mockAddEventListenerVoid('EquippedGearItemIDsChanged', callback); };
  OnEvent(callback: (event: string, ...args: any[]) => void): void {
    this._mockAddEventListenerVoid('*', function(...args: any[]) {
      callback(this.event, ...args);
    });
  };
  OnFriendlyTargetEffectsChanged(callback: (effects: string) => void): void { this._mockAddEventListenerVoid('FriendlyTargetEffectsChanged', callback); };
  OnFriendlyTargetHealthChanged(callback: (health: number, maxHealth: number) => void): void { this._mockAddEventListenerVoid('FriendlyTargetHealthChanged', callback); };
  OnFriendlyTargetNameChanged(callback: (name: string) => void): void { this._mockAddEventListenerVoid('FriendlyTargetNameChanged', callback); };
  OnFriendlyTargetStaminaChanged(callback: (stamina: number, maxStamina: number) => void): void { this._mockAddEventListenerVoid('FriendlyTargetStaminaChanged', callback); };
  OnGetItem(callback: (itemID: string, data: string) => void): void { this._mockAddEventListenerVoid('GetItem', callback); };
  OnHideUI(callback: (name: string) => void): void { this._mockAddEventListenerVoid('HideUI', callback); };
  OnInitialized(c: () => void): number {
    const id = this._mockAddEventListener('Initialized', c);
    if (this.initialized) {
      setTimeout(() => {
        this._mockEventEmitter.emit('Initialized');
      }, 0);
    }
    return id;
  };
  OnInventoryItemIDsChanged(callback: (inventoryItemIDs: string[]) => void): void { this._mockAddEventListenerVoid('InventoryItemIDsChanged', callback); };
  OnItemEquipped(callback: (itemID: string) => void): void { this._mockAddEventListenerVoid('ItemEquipped', callback); };
  OnItemUnequipped(callback: (itemID: string) => void): void { this._mockAddEventListenerVoid('ItemUnequipped', callback); };
  OnLogMessage(c: (category: string, level: number, time: string, process: number, thread: number, message: string) => void): void { this._mockAddEventListenerVoid('LogMessage', c); };
  OnNewBlueprint(c: (index: number, name: string) => void): void { this._mockAddEventListenerVoid('NewBlueprint', c); };
  OnOpenUI(callback: (name: string) => void): void { this._mockAddEventListenerVoid('OpenUI', callback); };
  OnReceiveBlocks(c: (buildingDict: any) => void): void { this._mockAddEventListenerVoid('ReceiveBlocks', c); };
  OnReceiveBlockTags(c: (blockID: number, tagDict: any) => void): void { this._mockAddEventListenerVoid('ReceiveBlockTags', c); };
  OnReceiveConfigVar(c: (config: any) => void): void { this._mockAddEventListenerVoid('ReceiveConfigVar', c); };
  OnReceiveConfigVars(c: (configs: string) => void): void { this._mockAddEventListenerVoid('ReceiveConfigVars', c); };
  OnReceiveScreenShot(c: (screenShotString: any) => void): void { this._mockAddEventListenerVoid('ReceiveScreenShot', c); };
  OnServerConnected(c: (isConnected: boolean) => void): number { return this._mockAddEventListener('ServerConnected', c); };
  OnShowAbility(callback: (abilityID: string) => void): void { this._mockAddEventListenerVoid('ShowAbility', callback); };
  OnShowUI(callback: (name: string) => void): void { this._mockAddEventListenerVoid('ShowUI', callback); };
  OnUpdateNameplate(c: (cell: number, colorMod: number, name: string, gtag: string, title: string) => void): void { this._mockAddEventListenerVoid('UpdateNameplate', c); };

  CancelOnAbilityActive(c: number): void { this._mockRemoveEventListener(c) };
  CancelOnAbilityCooldown(c: number): void { this._mockRemoveEventListener(c) };
  CancelOnInitialized(c: number): void { this._mockRemoveEventListener(c) };
  CancelOnServerConnected(c: number): void { this._mockRemoveEventListener(c) };

  AbilityCreated(abilityID: string, primaryBaseComponentID: string, secondaryBaseComponentID: string, ability: string): void {
    this._mockEventEmitter.emit('AbilityCreated', abilityID, ability);
  };
  AbilityDeleted(abilityID: string): void {
    this._mockEventEmitter.emit('AbilityDeleted', abilityID);
  };
  ApplyStability(): void { };
  Attack(abilityID: string): void { };
  BlockFlipX(): void { };
  BlockFlipY(): void { };
  BlockFlipZ(): void { };
  BlockRotateX(): void { };
  BlockRotateY(): void { };
  BlockRotateZ(): void { };
  CancelAllConfigChanges(tag: tags): void { };
  CancelBlockPlacement(): void { };
  CancelChangeConfig(variable: string): void { };
  ChangeBlockType(c: (newType: number) => void): void { };
  ChangeConfigVar(variable: string, value: string): void { };
  ChangeZone(zoneID: number): void { };
  CloseUI(name: string): void {
    this._mockEventEmitter.emit('CloseUI', name);
  };
  CommitBlock(): void { };
  Connect(host: string, port: string, character: string, webAPIHost: string): void {
    // TODO do some connection here
    this._mockEventEmitter.emit('ServerConnected', true);
  };
  ConsoleCommand(body: string): void {};
  CopyBlueprint(): void {
    this._mockEventEmitter.emit('CopyBlueprint');
  };
  CrashTheGame(): void { };
  DropLight(intensity: number, radius: number, red: number, green: number, blue: number): void { };
  EditAbility(abilityID: string): void {
    this._mockEventEmitter.emit('EditAbility', abilityID);
  };
  Emote(emote: number): void { };
  EquipItem(itemID: string): void { };
  Fire(event: string, ...args: any[]): void {
    this._mockEventEmitter.emit(event, ...args);
  };
  FocusUI(name: string): void { };
  FOV(degrees: number): void { };
  GetConfigVar(variable: string): void { };
  GetConfigVars(tag: tags): void { };
  GetItem(itemID: string): void { };
  HideUI(name: string): void { };
  Ignore(event: string): void { };
  JoinMUC(room: string): void { };
  LeaveMUC(room: string): void { };
  Listen(event: string): void { };
  OnAbilityError(c: (message: string) => void): void { };
  OnSavedConfigChanges(c: () => void): void { };
  OpenScreenshotShare(): void { };
  OpenUI(name: string): void { };
  PasteBlueprint(): void { };
  PlaySoundEvent(id: number): void { };
  Quit(): void { };
  RegisterAbility(abilityID: string, primaryBaseComponentID: string, secondaryBaseComponentID: string): void { };
  ReleaseInputOwnership(): void { };
  RemoveIslands(): void { };
  RequestBlocks(): void { };
  RequestBlockTags(c: (blockID: number) => void): void { };
  RequestBlueprints(): void { };
  RequestInputOwnership(): void { };
  ResetLights(): void { };
  Respawn(id: string): void { };
  RestoreConfigDefaults(tag: tags): void { };
  SaveBlueprint(c: (name: string) => void): void { };
  SaveConfigChanges(): void { };
  SelectBlueprint(c: (index: number) => void): void { };
  SendChat(type: number, to: string, body: string): void { };
  SendSlashCommand(command: string, parameters: string): void { };
  SetBuildingMode(c: (newMode: number) => void): void { };
  ShowAbility(abilityID: string): void { };
  ShowUI(name: string): void { };
  Stuck(): void { };
  TakeScreenshot(): void { };
  ToggleBuildingMode(): void { };
  ToggleCamera(): void { };
  ToggleUIVisibility(name: string): void { };
  UnequipItem(itemID: string): void { };
}
