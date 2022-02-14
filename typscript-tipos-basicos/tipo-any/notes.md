# Tipo any

> ## **Definição**

É o tipo genérico do TypeScript, ou seja, quando ele não conseguir inferir o tipo é definido como `any`.

> ## **Exemplo**

### **any implícito**:

```ts
function showMessage(msg: any) {
  return msg;
}
```

### **any explícito**:

```ts
function showMessage(msg) {
  return msg;
}
```

> `msg` é do tipo `any`.
