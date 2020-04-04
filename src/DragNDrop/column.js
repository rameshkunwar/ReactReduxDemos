import React, { Component } from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Task from "./task";
import DragDrop from "./DragDrop";

const Container = styled.div`
  max-width: 375px;
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  background-color: ${(props) => (props.isDraggingOver ? "blue" : "white")};
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;
class Column extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    );
  }
}

export default Column;
