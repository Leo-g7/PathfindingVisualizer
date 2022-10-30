import { NodeType } from '../enums'
import { Coordinates } from '../types'

export default class Node {
  private coordinates: Coordinates
  private type: NodeType

  constructor(coordinates: Coordinates, type: NodeType) {
    this.coordinates = coordinates
    this.type = type;
  }
}