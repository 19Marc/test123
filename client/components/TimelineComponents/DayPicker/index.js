// @flow
import React, { Component } from 'react'
import posed, { PoseGroup } from 'react-pose'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import './styles.css'
import { baseSpacing } from 'constants/spacing'

import type { Props, State } from './types'

import { Button } from './styles'

class DayPickerino extends Component<Props, State> {
  state = {
    datePickerVisible: false,
    selectedDay: null,
  }

  togglePickerVisible = () => {
    const { datePickerVisible } = this.state
    this.setState({ datePickerVisible: !datePickerVisible })
  }

  handleDayClick = (day: *, { selected }) => {
    const { selectedDay } = this.state
    this.setState({
      selectedDay: selected ? undefined : day,
    })
  }

  render(): React$Element<'div'> {
    const { datePickerVisible, selectedDay } = this.state

    const Calendar = posed.div({
      enter: {
        y: 9,
        opacity: 1,
        delay: 100,
        transition: { duration: 350 },
      },
      exit: {
        y: 20,
        opacity: 0,
        transition: { duration: 350 },
      },
    })
    return (
      <div style={{ marginTop: baseSpacing }}>
        <Button type="button" onClick={this.togglePickerVisible}>
          {selectedDay ? selectedDay.toLocaleDateString() : 'Please select a day 👻'}
        </Button>
        <div style={{ outline: 'none' }}>
          <PoseGroup>
            {datePickerVisible ? (
              <Calendar key="calendar">
                <DayPicker
                  selectedDays={selectedDay}
                  onDayClick={this.handleDayClick}
                  onChange={this.togglePickerVisible}
                />
              </Calendar>
            ) : (
              ''
            )}
          </PoseGroup>
        </div>
      </div>
    )
  }
}

export default DayPickerino
