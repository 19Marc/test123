// @flow
import typeimport { Title } from "./styles";
 { Client as ClientProps } from 'modules/clients/types'

export type State = {
  id: *,
  title: *,
  icon: *,
  to: *,
}
export type Props = {
  client: Array<ClientProps>,
}
export type ItemProps = {
  name: string,
}
