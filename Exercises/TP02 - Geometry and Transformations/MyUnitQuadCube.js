/**
 * MyUnitQuadCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitQuadCube extends CGFobject {
	constructor(scene) {
		super(scene);
    this.cube = new MyQuad(scene);
	}
	display() {
    this.scene.pushMatrix();
    this.cube.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(-Math.PI/2, 1,0,0);
    this.cube.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(Math.PI/2, 1,0,0);
    this.cube.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(-Math.PI/2, 0,1,0);
    this.cube.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(Math.PI/2, 0,1,0);
    this.cube.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(Math.PI, 0,1,0);
    this.cube.display();
    this.scene.popMatrix();
	}
}
