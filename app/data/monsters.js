import dominant from '../../public/blop-dominant.png'
import dylan from '../../public/blop-dylan.png'
import trompettiste from '../../public/blop-trompettiste.png'
import tambourrin from '../../public/blop-tambourrin.png'

const monsters = [
  {
    name: 'blop dominant',
    slug: 'blop-dominant',
    family: 'blops musicaux',
    familySlug: 'blops-musicaux',
    img: dominant.src,
    pa: 6,
    pm: 3,
    pw: 6,
    isTameable: false,
    spells: [
      {
        name: 'enjoy the silence',
        pa: 2,
        po: {
          min: 1,
          max: 1
        },
        isEditableRange: false,
        area: {
          type: 'inline',
          size: 2
        },
        rangeType: 'inline'
      },
      {
        name: 'with or without blob',
        pa: 2,
        po: {
          min: 1,
          max: 5
        },
        isEditableRange: false,
        area: {
          type: 'cross',
          size: 2
        },
        rangeType: 'inline'
      },
    ]
  },
  {
    name: 'blop dylan',
    slug: 'blop-dylan',
    family: 'blops musicaux',
    familySlug: 'blops-musicaux',
    img: dylan.src,
    pa: 6,
    pm: 3,
    pw: 6,
    isTameable: false,
    spells: [
      {
        name: 'enjoy the silence',
        pa: 2,
        po: {
          min: 1,
          max: 1
        },
        isEditableRange: false,
        area: {
          type: 'inline',
          size: 2
        },
        rangeType: 'inline'
      },
      {
        name: 'with or without blob',
        pa: 2,
        po: {
          min: 1,
          max: 5
        },
        isEditableRange: false,
        area: {
          type: 'cross',
          size: 2
        },
        rangeType: 'inline'
      },
    ]
  },
  {
    name: 'blop trompettiste',
    slug: 'blop-trompettiste',
    family: 'blops musicaux',
    familySlug: 'blops-musicaux',
    img: trompettiste.src,
    pa: 12,
    pm: 5,
    pw: 0,
    isTameable: false,
    spells: [
      {
        name: 'blopie jean',
        pa: 6,
        po: {
          min: 1,
          max: 1
        },
        isEditableRange: false,
        area: {
          type: 'default',
          size: 0
        },
        rangeType: 'inline'
      },
      {
        name: 'the rolling blops',
        pa: 5,
        po: {
          min: 1,
          max: 1
        },
        isEditableRange: false,
        area: {
          type: 'default',
          size: 0
        },
        rangeType: 'inline'
      },
    ]
  },
  {
    name: 'blop tambourrin',
    slug: 'blop-tambourrin',
    family: 'blops musicaux',
    familySlug: 'blops-musicaux',
    img: tambourrin.src,
    pa: 6,
    pm: 3,
    pw: 6,
    isTameable: false,
    spells: [
      {
        name: 'all you need is blop',
        pa: 2,
        po: {
          min: 1,
          max: 2
        },
        isEditableRange: false,
        area: {
          type: 'default',
          size: 0
        },
        rangeType: 'default'
      },
      {
        name: 'blopway to hell',
        pa: 4,
        po: {
          min: 2,
          max: 3
        },
        isEditableRange: true,
        area: {
          type: 'default',
          size: 2
        },
        rangeType: 'default'
      },
      {
        name: 'riders on the blop',
        pa: 4,
        po: {
          min: 3,
          max: 9
        },
        isEditableRange: true,
        area: {
          type: 'default',
          size: 0
        },
        rangeType: 'default'
      },
    ]
  },
]

export default monsters;
