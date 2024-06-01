/* eslint-disable @typescript-eslint/indent */
type Question = {
  text: string
  questionNumber: number
}

type TestConfig = Record<
  number,
  {
    question1: Question
    question2: Question
  }
>
export const TEST_CONFIG: TestConfig = {
  1: {
    question1: {
      text: '¿Descalifica tus opiniones, te humilla o ridiculiza, te trata con desprecio.?',
      questionNumber: 1
    },
    question2: {
      text: '¿Te miente.?',
      questionNumber: 2
    }
  },
  2: {
    question1: {
      text: '¿Responde con agresividad o desprecio a tus solicitudes de tomar medidas de higiene y protección (como lavar las manos o usar mascarilla).?',
      questionNumber: 3
    },
    question2: {
      text: '¿Te culpabiliza o responsabiliza por el estado de salud de los miembros del hogar.?',
      questionNumber: 4
    }
  },
  3: {
    question1: {
      text: '¿Insinúa que no eres lo suficientemente buena y que nadie más te podría querer.?',
      questionNumber: 5
    },
    question2: {
      text: '¿Se queda escuchando y controla tus conversaciones con amigos y familiares.?',
      questionNumber: 6
    }
  },
  4: {
    question1: {
      text: '¿Pide revisar tu celular, lee tus mensajes, revisa tu historial de llamadas.?',
      questionNumber: 7
    },
    question2: {
      text: '¿Te cela, te indica cómo vestir o maquillarte.?',
      questionNumber: 8
    }
  },
  5: {
    question1: {
      text: '¿Intenta anular tus decisiones.?',
      questionNumber: 9
    },
    question2: {
      text: '¿No te deja llamar por teléfono o usar el celular.?',
      questionNumber: 10
    }
  },
  6: {
    question1: {
      text: '¿No te permite salir los días y horarios que deseas o debes hacerlo.?',
      questionNumber: 11
    },
    question2: {
      text: '¿Maneja o dispone de tus documentos, dinero y bienes.?',
      questionNumber: 12
    }
  },
  7: {
    question1: {
      text: '¿No te permite tomar decisiones sobre tu propio dinero.?',
      questionNumber: 13
    },
    question2: {
      text: '¿Te intimida o amenaza.?',
      questionNumber: 14
    }
  },
  8: {
    question1: {
      text: '¿Te hace sentir que nadie te va a creer, dar atención o ayudar.?',
      questionNumber: 15
    },
    question2: {
      text: '¿Te ofende verbalmente, te insulta.?',
      questionNumber: 16
    }
  },
  9: {
    question1: {
      text: '¿Te golpea “jugando”, te acaricia agresivamente.?',
      questionNumber: 17
    },
    question2: {
      text: '¿Tiene actitudes agresivas y luego te culpa por “sacarlo del serio”.?',
      questionNumber: 18
    }
  },
  10: {
    question1: {
      text: '¿Te prohíbe usar métodos anticonceptivos.?',
      questionNumber: 19
    },
    question2: {
      text: '¿Tiene actitudes agresivas y luego te culpa por “sacarlo del serio”.?',
      questionNumber: 20
    }
  },
  11: {
    question1: {
      text: '¿Impide que te contactes con tus seres queridos y amigos.?',
      questionNumber: 21
    },
    question2: {
      text: '¿Te amenaza con objetos o armas.?',
      questionNumber: 22
    }
  },
  12: {
    question1: {
      text: '¿Te golpea o agrede físicamente.?',
      questionNumber: 23
    },
    question2: {
      text: '¿Te obliga a tener relaciones sexuales o a hacer cosas que te parecen degradantes o inapropiadas.?',
      questionNumber: 24
    }
  },
  13: {
    question1: {
      text: '¿Te amenaza de muerte.?',
      questionNumber: 25
    },
    question2: {
      text: '¿Te obliga a tener relaciones sexuales o a hacer cosas que te parecen degradantes o inapropiadas.?',
      questionNumber: 26
    }
  }
}

export const TEST_HEADING = {
  heading: 'El Primer Paso es Reconocer',
  subHeading:
    'Contesta con Honestidad: En un espacio seguro, responde a preguntas sobre tu relación. Tu privacidad  es nuestra prioridad.',
  btnText: 'Comenzar',
  btnCloseText: 'Quizas más tarde'
}
