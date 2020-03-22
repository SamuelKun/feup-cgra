/**
 * MyTriangleSmall
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleSmall extends CGFobject {
  constructor(scene) {
    super(scene)
    this.initBuffers();
  }
  initBuffers() {
		this.vertices = [
        -1, 0, 0,
        1, 0, 0,
        0, 1, 0
		];

		//Counter-clockwise reference of vertices
		this.indices = [
        0, 1, 2
		];

    this.normals = [];
    for (var i = 0; i <= 2; i++) {
        this.normals.push(0, 0, 1);
    }

    this.texCoords = [];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
    this.updateTexCoordsGLBuffers();
	}

  updateTexCoords(coords) {
    this.texCoords = [...coords];
    this.updateTexCoordsGLBuffers();
  }
}
