export interface IDefaultResponsePaginated<T> {
  data: {
    data: T;
    currentPage?: number;
    totalPages?: number;
    lastPage?: number;
  };
  status: number;
}

export interface IDefaultPaginated {
  page?: number;
  limit?: number;
  id?: string;
}

export interface IDefaultResponse<T> {
  data: T;
  status: number;
}
