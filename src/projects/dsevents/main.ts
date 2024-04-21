export class Logger {
  constructor(private readonly rootElement: HTMLElement) {
    appendListToElement(rootElement, makeList())
  }

  l = (m: string) => {}

  i = (m: string) => {}

  e = (m: string) => {}
}

function appendListToElement(e: HTMLElement, list: HTMLElement) {
  e.appendChild(list)
}

function makeList(root = document): HTMLElement {
  let e = root.createElement('div')
  let l = root.createElement('ul')
  e.appendChild(l)
  return e
}