import { IFace, IHalfEdge, IPoint, IVertex } from ".";

export default interface IDCEL {

    vertexes: { [vertexId: string]: IVertex }
    faces: { [faceId: string]: IFace }
    halfEdges: { [halfEdgeId: string]: IHalfEdge }

    createVertex(point: IPoint, pointId: string): IVertex;
    getVertex(point: IPoint, id: string): IVertex;
    getVertexById(id: string): IVertex;

    createFace(faceId: string): IFace;
    getFace(faceId: string): IFace;
    getFaceById(faceId: string): IFace;

    createHalfEdge(halfEdgeId: string, face: IFace): IHalfEdge;
    getHalfEdge(halfEdgeId: string, face: IFace | null): IHalfEdge;
    getHalfEdgeById(halfEdgeId: string): IHalfEdge | null;
}
