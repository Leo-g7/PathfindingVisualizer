import { Node, StartNode, TargetNode } from './Node'
import { NodeType } from '../enums'

export default class Grid {
  private body: Node[][] = []
  private startNode: StartNode
  private targetNode: TargetNode
  private height: number = 0;
  private width: number = 0;

  constructor(height: number = 0, width: number = 0, startNode: Node, targetNode: Node) {
    this.height = height
    this.width = width
    this.startNode = startNode
    this.targetNode = targetNode
    this.setGrid()
  }

  private setGrid(): void {
    for (let i = 0; i < this.height; i++) {
      const line: Node[] = []

      for (let j = 0; j < this.width; j++) {
        if (this.startNode.x === j && this.startNode.y === i) line.push(this.startNode)
        else if (this.targetNode.x === j && this.targetNode.y === i) line.push(this.targetNode)
        else line.push(new Node({ x: j, y: i }, NodeType.empty))
      }
      this.body.push(line)
    }
  }

  public moveNode(movingNode: Node, arrivalNode: Node): void {
    this.body[arrivalNode.y][arrivalNode.x].type = movingNode.type
    this.body[movingNode.y][movingNode.x].type = NodeType.empty
  }

  public get(): Node[][] {
    return this.body
  }
}