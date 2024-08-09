varying float vModelPosX;
varying float vModelPosY;
varying float vModelPosZ;

void main(){
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    vModelPosX = modelPosition.x;
    vModelPosY = modelPosition.y;
    vModelPosZ = modelPosition.z;
}