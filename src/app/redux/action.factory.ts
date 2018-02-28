export interface Action {
  type: string;
  payload?: any;
}

export function createAction(type, payload?): Action {
  return { type, payload };
}
