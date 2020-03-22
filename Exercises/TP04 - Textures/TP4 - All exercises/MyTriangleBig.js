/**
 * MyTriangleBig
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleBig extends CGFobject {
  constructor(scene) {
    super(scene)
    this.initBuffers();
  }
  initBuffers() {
		this.vertices = [
        -2, 0, 0,
        2, 0, 0,
        0, 2, 0
		];

		//Counter-clockwise reference of vertices
		this.indices = [
        0, 1, 2
		];

    this.normals = [];
    for (var i = 0; i <= 2; i++) {
        this.normals.push(0, 0, 1);
    }

    this.texCoords = [
      0.5, 0.5,
      1, 1,
      1, 0
    ];


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
    this.updateTexCoordsGLBuffers();
	}

  updateTexCoords(coords) {
    this.texCoords = [...coords];
    this.updateTexCoordsGLBuffers();
  }
}
