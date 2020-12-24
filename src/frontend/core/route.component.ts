import { RouteComponentProps } from "react-router";

type RouteComponentRequest<Params> = RouteComponentProps<{ id: string }> & Params;

type RouteComponent<Data> = {
  data: Data | Redirectable
}

type Redirectable = {
  redirect: string
}

export { RouteComponentRequest, RouteComponent, Redirectable };