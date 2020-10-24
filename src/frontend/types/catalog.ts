import { RouteComponentProps } from "react-router";

export type CatalogItemRequest<Params> = RouteComponentProps<{ id: string }> & Params;
export type CatalogItemComponent<Properties> = {
  data: Properties
}

export type CatalogListRequest<Filter> = {
  filters: Filter[]
};
export type CatalogListComponent<Properties> = {
  data: Properties[]
};