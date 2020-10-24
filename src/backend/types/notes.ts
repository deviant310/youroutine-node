namespace Notes {
  export interface RequestItem {
    id: number
  }
  
  export interface Item extends RequestItem {
    title: string
    description: string
  }
  
  export type List = Item[];
}

export = Notes;