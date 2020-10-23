export interface IAPIMethod {
  getItems: (endpoint: string, typeAction?: string, params?: any) => Promise<any>;
  getItemById: () => void;
  createItem: () => void;
  updateItem: () => void;
  deleteItem: () => void;
  login: (values: Object, calbackSuccess?: Function, callbackFailed?: Function) => any;
  verifyToken: (token: string, calbackSuccess?: Function, callbackFailed?: Function) => void;
  data: any;
}
