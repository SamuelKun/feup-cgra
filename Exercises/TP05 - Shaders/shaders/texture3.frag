#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;

void main() {
	vec2 timeTexCoords = vec2(vTextureCoord.s, vTextureCoord.t) ;

	vec4 color = texture2D(uSampler, timeTexCoords);

	gl_FragColor = color;
}
