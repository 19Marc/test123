// @flow
export type Props = {
  handleSubmit: Function,
  hideModal: Function,
  createClient: Function,
}

export type SubmissionProps = {
  name: string,
  email: string,
  color: string,
  projects: Array<*>,
}
