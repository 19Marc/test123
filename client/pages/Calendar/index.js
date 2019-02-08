// @flow
import React, { Component } from 'react'
import Timeline from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'

import { keys } from 'constants'

import { showModal } from 'modules/modals/actions'

import { getGroups } from 'modules/timeline/actions'
import { getItems } from 'modules/timelineitems/actions'

import { connect } from 'react-redux'

import type { Props, State } from './types'

class Calendar extends Component<Props, State> {
  state = {
    groups: [{ id: 1, title: 'group 1' }, { id: 2, title: 'group 2' }],
    items: [
      {
        id: 1,
        group: 1,
        title: 'item 1',
        start_time: moment(),
        end_time: moment().add(1, 'hour'),
      },
    ],
  }

  itemRenderer = ({
    item,
    timelineContext,
    itemContext,
    getItemProps,
    getResizeProps,
  }): React$Element<'div'> => {
    const { left: leftResizeProps, right: rightResizeProps } = getResizeProps()
    const backgroundColor = itemContext.selected
      ? itemContext.dragging
        ? 'red'
        : item.selectedBgColor
      : item.bgColor
    const borderColor = itemContext.resizing ? 'red' : item.color
    return (
      <div
        {...getItemProps({
          style: {
            backgroundColor,
            color: item.color,
            borderColor,
            borderStyle: 'solid',
            borderWidth: 1,
            borderRadius: 4,
            borderLeftWidth: itemContext.selected ? 3 : 1,
            borderRightWidth: itemContext.selected ? 3 : 1,
          },
          onMouseDown: () => {
            console.log('on item click', item)
          },
        })}
      >
        {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null}

        <div
          style={{
            height: itemContext.dimensions.height,
            overflow: 'hidden',
            paddingLeft: 3,
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {itemContext.title}
        </div>

        {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : null}
      </div>
    )
  }

  sdgsd = (groupId: number, time: *, e: *) => {
    console.log(groupId, time, e)
  }

  handleCanvasClick = () => {
    this.props.showModal(keys.modal.task.create, { title: 'Add new Task' })
  }

  render(): React$Element<'div'> {
    const { groups, items } = this.state
    const { timeline, timelineitems } = this.props
    console.log(timelineitems)
    return (
      <div>
        <Timeline
          groups={timeline}
          items={timelineitems}
          itemRenderer={this.itemRenderer}
          onCanvasClick={this.handleCanvasClick}
          defaultTimeStart={moment().add(-12, 'hour')}
          defaultTimeEnd={moment().add(12, 'hour')}
          sidebarWidth={150}
          sidebarContent="Left Sidebar"
          rightSidebarWidth={0}
          rightSidebarContent={null}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  timeline: state.timeline.list,
  timelineitems: state.timelineitems.list,
})

export default connect(
  mapStateToProps,
  { getGroups, getItems, showModal }
)(Calendar)
