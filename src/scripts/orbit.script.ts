interface props {
  angle: number;
  speed: number;
}
go.property('speed', 1);

export function init(this: props): void {
  this.angle = 0;
  print(vmath.vector3(1) + vmath.vector3(2));
}

export function update(this: props, dt: number): void {
  this.angle += this.speed * dt;
  go.set_rotation(vmath.quat_rotation_z(this.angle));
}
