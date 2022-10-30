import Node from './Node'
import { NodeType } from '../enums'

export default class Grid {
  private body: Node[][] = []
  private height: number = 0;
  private width: number = 0;

  constructor(height: number = 0, width: number = 0) {
    this.height = height
    this.width = width
    this.setGrid()
  }

  private setGrid(): void {
    for (let i = 0; i < this.height; i++) {
      const line: Node[] = []

      for (let j = 0; j < this.width; j++) {
        line.push(new Node({ x: j, y: i }, NodeType.empty))
      }
      this.body.push(line)
    }
  }

  public get(): Node[][] {
    return this.body
  }
}