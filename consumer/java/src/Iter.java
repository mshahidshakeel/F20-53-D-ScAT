import java.util.Set;

/**
 * data on a network of highways
 */
public class RoadMap {

    public Set<RoadSegment> getRoadsFrom(Place p) {
    }

    public double distanc(double from, double to){

    }
    public double distanc(RoadSegment[] roadSegmentsArray){

    }
    public void reachableWithin(Place p){

    }

}

/**
 * A one-way road stump that has a length and an end point
 */
public class RoadSegment {

    public double getLength() {
    }        //	always	>	0.0

    public Place getEndPoint() {
    }
}

/**
 * A class for places
 */
class Place {
    double from, to;

    public boolean equals(Object obj) {
        if (((Place) obj).from == from && ((Place) obj).to == to) {
            return true;
        }
        return false;
    }
}

public interface Set<E> {
    /**
     * Adds e to the quantity
     */
    public boolean add(E e);

    /**
     * Checks about the Object o is already in the set
     */
    public boolean contains(Object o);

    /**
     * Returns an Iterator that counts the elements of the set
     */
    public Iterator<E> iterator();
		...
}