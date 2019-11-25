import {sign} from "fable-library/Util.js";
import {toConsole, printf} from "fable-library/String.js";

export function sample_function(x) {
    return 2 * Math.pow(x, 2) - 11 * x + 5;
}

export function bisection_method($f$$2, $a$$3, $b$$4, $tol$$5, $iternum$$6) {
    bisection_method: while (true) {
        const f = $f$$2,
            a = $a$$3,
            b = $b$$4,
            tol = $tol$$5,
            iternum = $iternum$$6;

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
                    $f$$2 = f;
                    $a$$3 = m;
                    $b$$4 = b;
                    $tol$$5 = tol;
                    $iternum$$6 = iternum + 1;
                    continue bisection_method;
                } else {
                    $f$$2 = f;
                    $a$$3 = a;
                    $b$$4 = m;
                    $tol$$5 = tol;
                    $iternum$$6 = iternum + 1;
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

export const result = bisection_method(sample_function, 2, 7, 0.000001, 0);

(function () {
    const arg10$$2 = result;
    const clo1$$2 = toConsole(printf("%f"));
    clo1$$2(arg10$$2);
})();


/*
FROM FSHARP CODE Bisection.fs

open System

let sample_function x:float = 2.0*x**2.0 - 11.0*x + 5.0
let rec bisection_method (f: float -> float) (a: float) (b: float) (tol: float) (iternum: int): float =
    if (sign (f a) * sign (f b) > 0) then
        printf "No root inside the interval! Returning 0."
        0.0
    else
        let m = (a + b) / 2.0
        if (b - a >= tol) then
            printf "iternum: %d | midpoint: %f" iternum m
            if sign (f a) * sign (f m) > 0 then
                bisection_method f m b tol (iternum + 1)
            else
                bisection_method f a m tol (iternum + 1)
        else
            printf "\nfinal number of iterations: %d | root value: %f" iternum m
            m

let result = bisection_method sample_function 2.0 7.0 0.000001 0
printf("%f") result


 */
