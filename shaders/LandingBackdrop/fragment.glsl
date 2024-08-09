varying float vModelPosX;
varying float vModelPosY;
varying float vModelPosZ;
varying float vRandom;

uniform vec3 uColor;

void main(){
    gl_FragColor = vec4(uColor, 0.2);
}