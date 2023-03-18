import Face from './classes/Face';
import Vertex from './classes/Vertex';
import HalfEdge from './classes/HalfEdge';
import { IPoint, IVertex, IFace, IHalfEdge } from './intefaces';
import IDCEL from './intefaces/IDCEL';

export default class DCEL implements IDCEL {
    vertexes: { [vertexId: string]: IVertex } = {};
    faces: { [faceId: string]: IFace } = {};
    halfEdges: { [halfEdgeId: string]: IHalfEdge } = {};

    constructor() { }

    createVertex(point: IPoint, pointId: string): IVertex {
        const vertex = new Vertex(pointId, [point.x, point.y, point.z], null);
        return vertex;
    }

    getVertex(point: IPoint, id: string): IVertex {
        const vertex = this.vertexes[id];
        if (vertex) {
            return vertex;
        } else {
            const newVertex = this.createVertex(point, id);
            this.vertexes[newVertex.id] = newVertex;
            return newVertex;
        }
    }

    getVertexById(id: string): IVertex {
        return this.vertexes[id];
    }

    createFace(faceId: string): IFace {
        return new Face(faceId);
    }

    getFace(faceId: string): IFace {
        throw new Error('Method not implemented.');
    }

    getFaceById(faceId: string): IFace {
        return this.faces[faceId];
    }

    createHalfEdge(halfEdgeId: string, face: IFace): IHalfEdge {
        return new HalfEdge(halfEdgeId, face);
    }

    getHalfEdge(halfEdgeId: string, face: Face | null): IHalfEdge {
        const halfEdge = this.halfEdges[halfEdgeId];
        if (halfEdge) {
            if (face && !halfEdge.incidentFace) halfEdge.incidentFace = face;
            return halfEdge;
        } else {
            const newHalfEdge = new HalfEdge(halfEdgeId, face);
            this.halfEdges[newHalfEdge.id] = newHalfEdge;
            return newHalfEdge;
        }
    }

    getHalfEdgeById(halfEdgeId: string): IHalfEdge | null {
        return this.halfEdges[halfEdgeId] || null;
    }
}
