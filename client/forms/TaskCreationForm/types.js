// @flow
export type Props = {
  handleSubmit: Function,
}

export type State = {
  datePickerVisible: boolean,
  selectedDay: *,
}

export type SubmissionProps = {
  name: string,
}
