/**
 * FerbNose
 * @constructor
 * @param scene - Reference to MyScene object
 */
class FerbMouth extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			10, 4, 0,	//0
			9, 3, 0,	//1
			13, 3, 0,	//2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
