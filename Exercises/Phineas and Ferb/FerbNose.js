/**
 * FerbNose
 * @constructor
 * @param scene - Reference to MyScene object
 */
class FerbNose extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			10, 13, 0,	//0
			6, 13, 0,	//1
			10, 8, 0,	//2
			6, 8, 0		//3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			3, 2, 0,
			3, 0, 1
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
