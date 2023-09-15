const suffixes = ['label', 'text-field', 'textarea', 'checkbox', 'button', 'chip'] as const

type SelectorSuffix = (typeof suffixes)[number]
type SelectorWithSuffix = `${string}-${SelectorSuffix}`

const nameSuffixes = ['label', 'textField', 'textarea', 'checkbox', 'button', 'chip'] as const

type SelectorNameSuffix = (typeof nameSuffixes)[number]
type SelectorNameWithSuffix = `${string}${Capitalize<SelectorNameSuffix>}`

export type Selectors = Record<SelectorNameWithSuffix, SelectorWithSuffix>
