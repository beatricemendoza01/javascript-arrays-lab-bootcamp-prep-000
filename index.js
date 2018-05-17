const app = "I don't do much."

function destructivelyAppendKitten(name) {
  window.kittens.push(name);
  return window.kittens;
}

function destructivelyPrependKitten(name) {
  window.kittens.unshift(name);
  return window.kittens;
}

function destructivelyRemoveLastKitten() {
  window.kittens.pop();
  return window.kittens;
}

function destructivelyRemoveFirstKitten() {
  window.kittens.shift();
  return window.kittens;
}

function appendKitten(name) {
  return [...window.kittens, name];
}

function prependKitten(name) {
  return [name, ...window.kittens];
}

function removeLastKitten() {
  window.kittens = window.kittens.slice(1);
  return window.kittens;
}