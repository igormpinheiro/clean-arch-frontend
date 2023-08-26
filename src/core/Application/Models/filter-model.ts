export class FilterModel {
  page: number = 1
  pageSize: number = 10
  sort?: SortFilter[]
}

export class SortFilter {
  constructor(
    public sort: string,
    public sortDirection: string = 'asc'
  ) {}
}
