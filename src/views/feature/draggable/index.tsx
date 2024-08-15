import "./draggable.scss";
import React, { useState } from "react";
import { Card } from "antd";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  DropResult,
} from "react-beautiful-dnd";

// 定义拖拽项的数据类型
interface DraggableItemType {
  id: string;
  content: string;
}

const getItemStyle = (isDragging: boolean, draggableStyle?: React.CSSProperties) => ({
  padding: 16,
  margin: "8px",
  background: isDragging ? "#1677ff" : "#e3e3e3",
  color: isDragging ? "#ffffff" : "#001529",
  width: "100%",
  borderRadius: "8px",
  ...draggableStyle,
});

const DraggableFeature: React.FC = () => {
  const [items, setItems] = useState<DraggableItemType[]>([
    { id: "1", content: "Item 1" },
    { id: "2", content: "Item 2" },
    { id: "3", content: "Item 3" },
    { id: "4", content: "Item 4" },
    { id: "5", content: "Item 5" },
    { id: "6", content: "Item 6" },
  ]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const itemsArray = Array.from(items);
    const [reorderedItem] = itemsArray.splice(result.source.index, 1);
    itemsArray.splice(result.destination.index, 0, reorderedItem);

    setItems(itemsArray);
  };

  return (
    <div className="draggable-container">
      <Card className="card-container" title="拖拽功能示例">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} style={{ margin: "20px" }}>
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Card>
    </div>
  );
};

export default DraggableFeature;
