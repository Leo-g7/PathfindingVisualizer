import { FunctionComponent, useState } from 'react';
import Grid from '../classes/Grid';
import { Node } from './../classes/Node';
import { NodeType } from '../enums';
import { StartNode, TargetNode } from '../classes/Node';
import './../css/Grid.css';

const GridComponent: FunctionComponent = () => {
  const [grid] = useState<Grid>(
    new Grid(21, 61, new StartNode({ x: 15, y: 10 }), new TargetNode({ x: 45, y: 10 }))
  );
  const [draggedNode, setDraggedNode] = useState<Node | null>(null);

  const handleMouseDown = (node: Node) => {
    if (!draggedNode) {
      if (node.type === NodeType.start || node.type === NodeType.target) {
        setDraggedNode(node);
      } else if (node.type === NodeType.empty || node.type === NodeType.wall) {
        grid.updateWall(node);
        setDraggedNode(node);
      }
    }
  };

  const handleMouseEnter = (node: Node) => {
    if (
      (draggedNode?.type === NodeType.start || draggedNode?.type === NodeType.target) &&
      node?.type === NodeType.empty
    ) {
      grid.moveNode(draggedNode, node);
      setDraggedNode(node);
    } else if (
      (draggedNode?.type === NodeType.empty || draggedNode?.type === NodeType.wall) &&
      (node?.type === NodeType.empty || node?.type === NodeType.wall)
    ) {
      grid.updateWall(node);
      setDraggedNode(node);
    }
  };

  const handleMouseUp = () => {
    setDraggedNode(null);
  };

  return (
    <div className='grid'>
      {grid.get().map((lines, index) => {
        return (
          <div className='line' key={index}>
            {lines.map((node, nodeIndex) => {
              return (
                <div
                  className={
                    'node ' +
                    (node.type === NodeType.start
                      ? 'startNode'
                      : node.type === NodeType.target
                      ? 'targetNode'
                      : node.type === NodeType.wall
                      ? 'wall'
                      : '')
                  }
                  key={nodeIndex}
                  onMouseDown={() => handleMouseDown(node)}
                  onMouseEnter={() => handleMouseEnter(node)}
                  onMouseUp={() => handleMouseUp()}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GridComponent;
