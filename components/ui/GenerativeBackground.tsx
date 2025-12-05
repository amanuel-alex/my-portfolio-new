// "use client";

// import dynamic from 'next/dynamic';

// // We will try to import the component, and if it fails, we'll show an error message.
// const Sketch = dynamic(
//   () =>
//     import('@p5-wrapper/react').then((mod) => {
//       // The library's main export is 'Sketch'. Let's grab it.
//       // If for some reason it's not there, the dynamic import will fail.
//       if (mod.Sketch) {
//         return mod.Sketch;
//       }
//       throw new Error("Could not find the 'Sketch' component in @p5-wrapper/react");
//     }),
//   {
//     ssr: false,
//     loading: () => <p>Loading generative art...</p>, // Show a loading message
//   }
// );

// export default function GenerativeBackground() {
//   // This is the simplest possible sketch: just a red background.
//   const sketch = (p: any) => {
//     p.setup = () => {
//       p.createCanvas(p.windowWidth, p.windowHeight);
//       p.background(255, 0, 0); // Red background so we know it's working
//     };
//     p.draw = () => {
//       // Nothing to draw here
//     };
//     p.windowResized = () => {
//       p.resizeCanvas(p.windowWidth, p.windowHeight);
//     };
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full h-full -z-10">
//       <Sketch sketch={sketch} />
//     </div>
//   );
// }