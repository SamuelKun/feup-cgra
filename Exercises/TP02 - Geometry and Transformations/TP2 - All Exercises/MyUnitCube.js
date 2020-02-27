/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
      0.5, 0.5, 0.5,
      -0.5, 0.5, 0.5,
      -0.5, -0.5, 0.5,
			0.5, -0.5, 0.5,

      0.5, 0.5, -0.5,
      -0.5, 0.5, -0.5,
      -0.5, -0.5, -0.5,
			0.5, -0.5, -0.5,
		];

		//Counter-clockwise reference of vertices
		this.indices = [
      //Face 0
			0, 1, 2,
      2, 3, 0,

      //Face 2
      0, 4, 5,
      5, 1, 0,

      //Face 3
      5,6,1,
      6,2,1,

      //Face 4
      2,6,7,
      2,7,3,

      //Face 5
      0,3,7,
      4,0,7,

      //Face 6
      5,4,7,
      5,7,6
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
