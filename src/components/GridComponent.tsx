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
    if ((node.type === NodeType.start || node.type === NodeType.target) && !draggedNode)
      setDraggedNode(node);
  };

  const handleMouseEnter = (node: Node) => {
    if (draggedNode && node.type === NodeType.empty) {
      grid.moveNode(draggedNode, node);
      setDraggedNode(node);
    }
  };

  const handleMouseUp = (node: Node) => {
    if (draggedNode && node.type === NodeType.empty) {
      grid.moveNode(draggedNode, node);
    }
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
                      : '')
                  }
                  key={nodeIndex}
                  onMouseDown={() => handleMouseDown(node)}
                  onMouseEnter={() => handleMouseEnter(node)}
                  onMouseUp={() => handleMouseUp(node)}
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
