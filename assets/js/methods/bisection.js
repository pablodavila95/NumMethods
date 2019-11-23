import { sign } from "fable-library/Util.js";
import { toConsole, printf } from "fable-library/String.js";
export function bisection_method($f$$1, $a$$2, $b$$3, $tol$$4, $iternum$$5) {
    bisection_method: while (true) {
        const f = $f$$1,
            a = $a$$2,
            b = $b$$3,
            tol = $tol$$4,
            iternum = $iternum$$5;

        if (sign(f(a)) * sign(f(b)) > 0) {
            toConsole(printf("No root inside the interval! Returning 0."));
            return 0;
        } else {
            const m = (a + b) / 2;

            if (b - a >= tol) {
                const arg10 = iternum | 0;
                const arg20 = m;
                const clo1 = toConsole(printf("iternum: %d | midpoint: %f"));
                const clo2 = clo1(arg10);
                clo2(arg20);

                if (sign(f(a)) * sign(f(m)) > 0) {
                    $f$$1 = f;
                    $a$$2 = m;
                    $b$$3 = b;
                    $tol$$4 = tol;
                    $iternum$$5 = iternum + 1;
                    continue bisection_method;
                } else {
                    $f$$1 = f;
                    $a$$2 = a;
                    $b$$3 = m;
                    $tol$$4 = tol;
                    $iternum$$5 = iternum + 1;
                    continue bisection_method;
                }
            } else {
                const arg10$$1 = iternum | 0;
                const arg20$$1 = m;
                const clo1$$1 = toConsole(printf("\nfinal number of iterations: %d | root value: %f"));
                const clo2$$1 = clo1$$1(arg10$$1);
                clo2$$1(arg20$$1);
                return m;
            }
        }

        break;
    }
}
