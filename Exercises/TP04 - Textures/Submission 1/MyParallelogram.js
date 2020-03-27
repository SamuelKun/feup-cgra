/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject {
  constructor(scene) {
    super(scene)
    this.initBuffers();
  }
  initBuffers() {
		this.vertices = [
        0, 0, 0,
        2, 0, 0,
        1, 1, 0,
        3, 1, 0,
		];

		//Counter-clockwise reference of vertices
		this.indices = [
        2, 1, 0,
        1, 2, 3,
    ];

    this.normals = []
    for (var i = 0; i <= 3; i++) {
        this.normals.push(0, 0, 1);
    }

    this.texCoords = [
      0.5, 1,
      1, 1,
      0.25, 0.75,
      0.75, 0.75,
    ];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
