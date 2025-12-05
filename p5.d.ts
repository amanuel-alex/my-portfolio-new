// p5.d.ts
import type p5Types from 'p5';

declare module 'p5' {
  interface p5InstanceExtensions {
    particles?: {
      x: number;
      y: number;
      vx: number;
      vy: number;
    }[];
  }
}