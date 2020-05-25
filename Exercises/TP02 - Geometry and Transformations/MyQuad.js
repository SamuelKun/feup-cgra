/**
 * MyQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyQuad extends CGFobject {
  constructor(scene) {
    super(scene)
    this.initBuffers();
  }
  initBuffers() {
		this.vertices = [
      0.5, 0.5, 0.5,
      -0.5, 0.5, 0.5,
      -0.5, -0.5, 0.5,
			0.5, -0.5, 0.5,
		];

		//Counter-clockwise reference of vertices
		this.indices = [
        // Vista por cima
        0, 1, 2,
        2, 3, 0,
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
