@FunctionalInterface
public interface OkapiFunction<P1, P2, P3> {
    int call(P1 p1, P2 p2, P3 p3);
}
