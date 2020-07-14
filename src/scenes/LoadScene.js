import constants from "../utils/constants";
import { images } from "../utils/images";
import { SOUNDS } from "./SFXScene.js";
import { sounds } from "../utils/sounds.js";

export default class LoadScene extends Phaser.Scene {
	constructor() {
		super(constants.LOAD);
	}

	init() {}

	preload() {
		console.log(sounds);
		this.load.audio(SOUNDS.BUTTON_CLICK, [
			sounds[`${SOUNDS.BUTTON_CLICK}.mp3`],
			sounds[`${SOUNDS.BUTTON_CLICK}.ogg`],
		]);
		this.load.image("background", images["background.png"]);
	}

	create() {
		this.add
			.image(0, 0, "background")
			.setOrigin(0)
			.setDisplaySize(this.game.canvas.width, this.game.canvas.height);
		this.scene.launch(constants.SFX);
	}
}
