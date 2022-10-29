import { Linkedin, Github, Mailbox, PersonFill } from 'react-bootstrap-icons'


export const socialLinks = [
  {
    id: 1,
    child: (
      <>
        <Linkedin size={25} />
      </>
    ),
    href: 'https://www.linkedin.com/in/giancarlo-s%C3%A1nchez-rodriguez/',
  },
  {
    id: 2,
    child: (
      <>
        <Github size={25} />
      </>
    ),
    href: 'https://github.com/GiancarloSanchez-c',
  },
  {
    id: 3,
    child: (
      <>
        <Mailbox size={25} />
      </>
    ),
    href: "mailto:gian_23080@gmail.com",
  },
  {
    id: 4,
    child: (
      <>
        <PersonFill size={25} />
      </>
    ),
    href: '../CV.pdf',
    style: 'rouded-tr-md',
    download: true,
  }
]