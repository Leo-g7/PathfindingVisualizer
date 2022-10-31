import { NodeType } from '../enums'
import { Coordinates } from '../types'

export class Node {
  public coordinates: Coordinates
  public type: NodeType

  constructor(coordinates: Coordinates, type: NodeType) {
    this.coordinates = coordinates
    this.type = type;
  }

  public get x(): number {
    return this.coordinates.x;
  }

  public get y(): number {
    return this.coordinates.y;
  }

  public setCoordinates(x: number, y: number): void {
    this.coordinates.x = x
    this.coordinates.y = y
  }
}

export class StartNode extends Node {
  constructor(coordinates: Coordinates) {
    super(coordinates, NodeType.start);
  }
}

export class TargetNode extends Node {
  constructor(coordinates: Coordinates) {
    super(coordinates, NodeType.target);
  }
}