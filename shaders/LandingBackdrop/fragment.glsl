varying float vModelPosX;
varying float vModelPosY;
varying float vModelPosZ;

void main(){
    float red = 0.0;

    // if(greaterThan(vModelPosX, 5) && lessThan(vModelPosX, 7)){
    //     red = 1.0;
    // }

    gl_FragColor = vec4(red, 1.0, 1.0, 1.0);
}