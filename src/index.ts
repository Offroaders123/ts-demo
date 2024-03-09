import { Buffer } from "node:buffer";

const helloBuffer: Buffer = Buffer.from([104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 33]);
console.log(helloBuffer);

const helloWorld: string = helloBuffer.toString("utf-8");
console.log(helloWorld);
