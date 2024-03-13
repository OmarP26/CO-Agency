import './styles.css'

const Sections = [
  {
    name: 'Section 1',
    href: '#'
  },
  {
    name: 'Section 2',
    href: '#'
  },
  {
    name: 'Section 3',
    href: '#'
  },
  {
    name: 'Section 4',
    href: '#'
  }
]

export function Navbar () {
  return (
    <nav>
      <ul>
        {
            Sections.map(section => {
              return (
                <li key={section.name}>{section.name.toUpperCase()}</li>
              )
            })
        }
      </ul>
    </nav>
  )
}
