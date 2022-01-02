# Listando arquivos com FS e Recursão mútua

> ## **Módulo FS**

### **Definição**

Módulo para manipular os arquivos do sistema (filesystem).

**OBS**: os nomes de métodos com sufixo `Sync` são bloqueantes (processos síncronos).

> ## **`readdir()`**

### **Definição**

Ler o conteúdo do diretório passado como argumento do método.

Esse método trabalho com processos assíncronos.

### **Exemplo**

```js
const fs = require("fs").promises;
const path = require("path");

fs.readdir(path.resolve(__dirname))
  .then(file => console.log(file))
  .catch(err => console.log(err));
```

```js
const fs = require("fs").promises;
const path = require("path");

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname)

  const files = await fs.readdir(rootDir);

  walk(files);
}

function walk(files) {
  for (let file of files) {
    console.log(file);
  }
}

readdir();
```

> ## `stat()`

### **Definição**

Obter as informações de um arquivo/diretório.

### **Exemplo**

```js
const fs = require('fs').promises;
const path = require('path');

fs.stat(__filename)
  .then(info => console.log(info))
  .catch(err => console.error(err));

/*
Stats {
  dev: 2519208228,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 562949953543413,
  size: 164,
  blocks: 0,
  atimeMs: 1641155104824.3376,
  mtimeMs: 1641155103491.0784,
  ctimeMs: 1641155103491.0784,
  birthtimeMs: 1641155013479.4893,
  atime: 2022-01-02T20:25:04.824Z,
  mtime: 2022-01-02T20:25:03.491Z,
  ctime: 2022-01-02T20:25:03.491Z,
  birthtime: 2022-01-02T20:23:33.479Z        
}
*/
```

> ## **Recursão mútua**

```js
const fs = require("fs").promises;
const path = require("path");

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);

  const files = await fs.readdir(rootDir);

  walk(files, rootDir);
}

async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);
    
  if (stats.isDirectory()) {
    readdir(fileFullPath);
    continue;
  }

    console.log(file, stats.isDirectory());
  }
}

readdir("./");
```


```js
const fs = require("fs").promises;
const path = require("path");

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);

  const files = await fs.readdir(rootDir);

  walk(files, rootDir);
}

async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);

  if(/\.git/g.test(fileFullPath)) continue;

  if(/node_modules/g.test(fileFullPath)) continue;

  if (stats.isDirectory()) {
    readdir(fileFullPath);
    continue;
  }

  if (!/\.js$/g.test(fileFullPath)) continue;

  console.log(file, stats.isDirectory());
  }
}

readdir("./");

```