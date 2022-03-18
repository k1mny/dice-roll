export default function Rot2Top(rotRadian, eps) {
  let rotIdx = 0;
  /**
   * +180 ~ -180
   *    x  y  z
   * 1: +-180 - +-180, 0 - 0
   * 2: -90 0 -
   * 3: 0 - 90, +-180 - -90
   * 4: +-180 - 90, 0 - -90
   * 5: 90 0 -
   * 6: 0 - +-180, +-180 - 0
   */
  const rotX = ((rotRadian[0] / Math.PI) * 180) % 180;
  const rotY = ((rotRadian[1] / Math.PI) * 180) % 180;
  const rotZ = ((rotRadian[2] / Math.PI) * 180) % 180;
  if (
    (Math.abs(rotX) < eps && Math.abs(rotZ) < eps) ||
    (Math.abs(Math.abs(rotX) - 180) < eps &&
      Math.abs(Math.abs(rotZ) - 180) < eps)
  ) {
    rotIdx = 1;
  } else if (Math.abs(rotX + 90) < eps && Math.abs(rotY) < eps) {
    rotIdx = 2;
  } else if (
    (Math.abs(rotX) < eps && Math.abs(rotZ - 90) < eps) ||
    (Math.abs(Math.abs(rotX) - 180) < eps && Math.abs(rotZ + 90) < eps)
  ) {
    rotIdx = 3;
  } else if (
    (Math.abs(Math.abs(rotX) - 180) < eps && Math.abs(rotZ - 90) < eps) ||
    (Math.abs(rotX) < eps && Math.abs(rotZ + 90) < eps)
  ) {
    rotIdx = 4;
  } else if (Math.abs(rotX - 90) < eps && Math.abs(rotY) < eps) {
    rotIdx = 5;
  } else if (
    (Math.abs(rotX) < eps && Math.abs(Math.abs(rotZ) - 180) < eps) ||
    (Math.abs(Math.abs(rotX) - 180) < eps && Math.abs(rotZ) < eps)
  ) {
    rotIdx = 6;
  }

  // if (rotIdx === 0) {
  //   console.log('x: %.3f, y: %.3f, z: %.3f', rotX, rotY, rotZ);
  // }
  return rotIdx;
}
