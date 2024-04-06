const monsters = [
  {
    name: 'blop dominant',
    slug: 'blop-dominant',
    family: 'blops musicaux',
    familySlug: 'blops-musicaux',
    img: 'https://static.ankama.com/wakfu/portal/game/monster/200/118800992.w200h.png',
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
    img: 'https://static.ankama.com/wakfu/portal/game/monster/200/195604778.w200h.png',
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
    img: 'https://static.ankama.com/wakfu/portal/game/monster/200/195604777.w200h.png',
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
    img: 'https://static.ankama.com/wakfu/portal/game/monster/200/195604779.w200h.png',
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
