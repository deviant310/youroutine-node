export interface NotesItemRequestParams {
  id: number
}

export interface NotesItemProperties extends NotesItemRequestParams {
  title: string,
  description: string
}

export interface NotesListFilter extends NotesItemProperties {}
//export type NotesListSelect = [K in keyof Params]?: string