import { QuestionInterface } from '@benjamincode/shared/interfaces'

export const questions: QuestionInterface[] = [
  {
    slug: 'tab-or-space',
    choiceLeft: {
      title: 'Tabs',
      img_path: '/assets/img/tab.jpeg',
    },
    choiceRight: {
      title: 'Spaces',
      img_path: '/assets/img/space.jpeg',
    },
  },
  {
    slug: 'notepad-or-emacs',
    choiceLeft: {
      title: 'Notepad',
      img_path: '/assets/img/2.jpeg',
    },
    choiceRight: {
      title: 'Emacs',
      img_path: '/assets/img/3.jpeg',
    },
  },
  {
    slug: 'svn-or-cvs',
    choiceLeft: {
      title: 'SVN',
      img_path: '/assets/img/4.jpeg',
    },
    choiceRight: {
      title: 'CVS',
      img_path: '/assets/img/5.jpeg',
    },
  },
  {
    slug: 'fortran-or-cobol',
    choiceLeft: {
      title: 'FORTRAN',
      img_path: '/assets/img/6.jpeg',
    },
    choiceRight: {
      title: 'COBOL',
      img_path: '/assets/img/7.jpeg',
    },
  },
  {
    slug: 'single-or-double-quotes',
    choiceLeft: {
      title: "'",
      img_path: '/assets/img/single-quote.jpeg',
    },
    choiceRight: {
      title: '"',
      img_path: '/assets/img/double-quotes.jpeg',
    },
  },
  {
    slug: 'camelCase-or-snake_case',
    choiceLeft: {
      title: 'camelCase',
      img_path: '/assets/img/camelCase.jpg',
    },
    choiceRight: {
      title: 'snake_case',
      img_path: '/assets/img/snake_case.jpg',
    },
  },
  {
    slug: 'front-or-back',
    choiceLeft: {
      title: 'Front-end',
      img_path: '/assets/img/front.png',
    },
    choiceRight: {
      title: 'Back-end',
      img_path: '/assets/img/back.jpg',
    },
  },
]
