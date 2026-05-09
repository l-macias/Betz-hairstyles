import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';

// Crear un .wasm vacío válido (magic bytes de WebAssembly)
const emptyWasm = Buffer.from([0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00]);

// Encontrar las rutas del .wasm en el handler generado
const handlerPath = resolve('.open-next/server-functions/default/handler.mjs');

if (!existsSync(handlerPath)) {
  console.log('No handler.mjs found, skipping');
  process.exit(0);
}

const content = readFileSync(handlerPath, 'utf8');

// Extraer todas las rutas absolutas de .wasm del handler
const wasmPaths = [];
const regex = /import\("(C:[^"]+\.wasm)"\)/g;
let match;
while ((match = regex.exec(content)) !== null) {
  wasmPaths.push(match[1]);
}

console.log(`Found ${wasmPaths.length} wasm paths`);

for (const wasmPath of wasmPaths) {
  // Crear el archivo en la ruta absoluta que esbuild busca
  const dir = dirname(wasmPath);
  mkdirSync(dir, { recursive: true });
  writeFileSync(wasmPath, emptyWasm);
  console.log(`✓ Created stub wasm: ${wasmPath}`);
}
