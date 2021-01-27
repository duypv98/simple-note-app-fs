export interface IAction {
  type: string,
  payload: any
}

export type Dispatcher = (...args: any[]) => IAction;
