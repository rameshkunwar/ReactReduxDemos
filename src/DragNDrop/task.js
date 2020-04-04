import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
const Container = styled.div`
padding:8px;
border:1px solid lightgrey;
border-radius:2px
margin-bottom:8px
`;
class Task extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}

export default Task;
