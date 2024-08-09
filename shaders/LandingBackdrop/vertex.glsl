uniform float uTime;
uniform float uMouseX;
uniform float uMouseY;

varying float vModelPosX;
varying float vModelPosY;
varying float vModelPosZ;

void main(){
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    float xSquare = (uMouseX - modelPosition.x) * (uMouseX - modelPosition.x);
    float ySquare = (uMouseY - modelPosition.y) * (uMouseY - modelPosition.y);

    float radiusSquare = xSquare + ySquare;

    float elevation = 1.0 / (radiusSquare + 0.15);
    elevation += 1.0 / (radiusSquare + 0.15);

    modelPosition.z -= elevation / 25.0;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    vModelPosX = modelPosition.x;
    vModelPosY = modelPosition.y;
    vModelPosZ = modelPosition.z;
}