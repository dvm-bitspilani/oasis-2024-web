varying float vModelPosX;
varying float vModelPosY;
varying float vModelPosZ;

uniform vec3 uColor;

void main(){
    gl_FragColor = vec4(uColor, 1.0);
}