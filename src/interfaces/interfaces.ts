

export interface PampeResponse {
  ok: boolean;
  pampe: Pampe[];
  page: number;
}

export interface Pampe {
  _id?: string;
  qtdd?: string;
  user?: User;
  verse?: Verse;
  created?: string;
  __v?: number;
}

export interface VerseUp {
  ok: boolean;
  verse: Verse[];
}

export interface Verse {
  _id ?: string;
  verse ?: string;
  text ?: string;
  comment ?: string;
  date ?: string;
  __v ?: number;
}

export interface User {
  apellido : string;
  _id ?: string;
  nombre : string;
  email : string;
  password ?: string;
}

export interface PostPampe {
  ok: boolean;
  pampe: Pampe[];
}