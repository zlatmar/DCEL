import { IHalfEdge, IVertex } from "../intefaces";

export default class Vertex implements IVertex {
    id: string;
    coordinates: number[];
    incidentEdge: IHalfEdge | null;

    constructor(id: string, coordinates: number[], incidentEdge: IHalfEdge | null) {
        this.id = id;
        this.coordinates = coordinates;
        this.incidentEdge = incidentEdge;
    }
}