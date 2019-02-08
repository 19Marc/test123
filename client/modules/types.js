// @flow
import type { State as ClientState } from './clients/types'
import type { State as ModalState } from './modals/types'
import type { State as ProjectState } from './projects/types'
import type { State as TimelineState } from './timeline/types'
import type { State as TimelineitemsState } from './timelineitems/types'

export type State = {
  clients: ClientState,
  modal: ModalState,
  projects: ProjectState,
  timeline: TimelineState,
  timelineitems: TimelineitemsState,

  // router: *,
}

export type Action = {
  type: string,
  [key: string]: Object | string,
}
