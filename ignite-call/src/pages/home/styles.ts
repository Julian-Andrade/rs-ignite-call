import { styled, Heading, Text } from '@ignite-ui/react'

import bg from '../../assets/bg-mask.png'

export const Container = styled('main', {
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  height: '100vh',
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
  gap: '$20',

  backgroundImage: `url(${bg.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})

export const Hero = styled('div', {
  maxWidth: 480,
  padding: '0 $10',

  // '>' atribui a propriedade somente ao componente ao qual está inserido.

  [`> ${Heading}`]: {
    '@media(max-width: 600px)': {
      fontSize: '$6xl',
    },
  },

  [`> ${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
  },
})

export const Preview = styled('div', {
  paddingRight: '$8',
  overflow: 'hidden',

  '@media(max-width: 600px)': {
    display: 'none',
  },
})
