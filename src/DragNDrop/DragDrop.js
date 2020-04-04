import React, { Component } from "react";
import ReactDOM from "react-dom";
import InitialData from "./initial-data";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./column";

class DragDrop extends Component {
  state = InitialData;

  onDragEnd = (result) => {};
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map((columnId) => {
          const column = this.state.columns[columnId];
          const task = column.taskIds.map((taskId) => this.state.tasks[taskId]);
          return <Column key={column.id} column={column} tasks={task} />;
        })}
      </DragDropContext>
    );
  }
}

export default DragDrop;
