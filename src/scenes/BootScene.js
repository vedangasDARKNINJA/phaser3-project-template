import constants from "../utils/constants.js";
import GameEventEmitter from "../classes/singletons/GameEventEmitter.js";
import { ResizeManager as RM } from "../utils/utils.js";

export default class BootScene extends Phaser.Scene {
	constructor() {
		super(constants.BOOT);
	}
	init() {
		this.scale.on("resize", RM.resize);
		RM.resize();

		GameEventEmitter.clearEvents();
	}

	preload() {}

	create() {
		this.scene.start(constants.LOAD);
	}
}
