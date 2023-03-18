import { IFace, IVertex } from ".";

export interface IHalfEdge {
    id: string,
    origin: IVertex;
    twin: IHalfEdge;
    incidentFace: IFace;
    next: IHalfEdge;
    prev: IHalfEdge;
}