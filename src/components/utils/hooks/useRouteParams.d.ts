export interface IRouterParams {
  routeId: string;
  title?: string;
  parentsIds: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any;
}
