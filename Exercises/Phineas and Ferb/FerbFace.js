/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class FerbFace extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			10, 0, -0.5,	//0
			9, 20, -0.5,	//1
			16, 20, -0.5,	//2
			14, 0, -0.5		//3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 2, 1,
			0, 3, 2
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
