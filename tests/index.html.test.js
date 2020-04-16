import {
  getByText,
  findAllByText,
  fireEvent,
} from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf8');

let dom
let container

describe('index.html', () => {
  beforeEach(() => {
    // Constructing a new JSDOM with this option is the key
    // to getting the code in the script tag to execute.
    // This is indeed dangerous and should only be done with trusted content.
    // https://github.com/jsdom/jsdom#executing-scripts
    dom = new JSDOM(html, { runScripts: 'dangerously' })
    container = dom.window.document.body
  })

  it('renders a heading element', () => {
    expect(container.querySelector('h1')).not.toBeNull()
    expect(getByText(container, 'Heroku CI Demo')).toBeInTheDocument()
  })

  it('renders a button element', () => {
    expect(container.querySelector('button')).not.toBeNull()
    expect(getByText(container, 'Click me')).toBeInTheDocument()
  })

  it('renders a new paragraph via JavaScript when the button is clicked', async () => {
    fireEvent.click(getByText(container, 'Click me'))
    let generatedParagraphs = await findAllByText(container, 'This is a new paragraph.')
    expect(generatedParagraphs.length).toBe(1)

    fireEvent.click(getByText(container, 'Click me'))
    generatedParagraphs = await findAllByText(container, 'This is a new paragraph.')
    expect(generatedParagraphs.length).toBe(2)

    fireEvent.click(getByText(container, 'Click me'))
    generatedParagraphs = await findAllByText(container, 'This is a new paragraph.')
    expect(generatedParagraphs.length).toBe(3)
  })
})
