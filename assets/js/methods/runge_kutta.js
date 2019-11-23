import {round} from "fable-library/Util.js";
import {iterate, filter, unfold} from "fable-library/Seq.js";
import {format} from "fable-library/String.js";

export function y$0027(t, y) {
    return t * Math.sqrt(y);
}

export function RungeKutta4(t0, y0, t_max, dt) {
    const dy1 = function dy1(tupledArg) {
        const t$$1 = tupledArg[0];
        const y$$1 = tupledArg[1];
        return dt * y$0027(t$$1, y$$1);
    };

    const dy2 = function dy2(tupledArg$$1) {
        const t$$2 = tupledArg$$1[0];
        const y$$2 = tupledArg$$1[1];
        return dt * y$0027(t$$2 + dt / 2, y$$2 + dy1([t$$2, y$$2]) / 2);
    };

    const dy3 = function dy3(tupledArg$$2) {
        const t$$3 = tupledArg$$2[0];
        const y$$3 = tupledArg$$2[1];
        return dt * y$0027(t$$3 + dt / 2, y$$3 + dy2([t$$3, y$$3]) / 2);
    };

    const dy4 = function dy4(tupledArg$$3) {
        const t$$4 = tupledArg$$3[0];
        const y$$4 = tupledArg$$3[1];
        return dt * y$0027(t$$4 + dt, y$$4 + dy3([t$$4, y$$4]));
    };

    const state = [t0, y0];
    return unfold(function generator(tupledArg$$4) {
        const t$$5 = tupledArg$$4[0];
        const y$$5 = tupledArg$$4[1];

        if (t$$5 <= t_max) {
            return [[t$$5, y$$5], [round(t$$5 + dt, 6), y$$5 + (dy1([t$$5, y$$5]) + 2 * dy2([t$$5, y$$5]) + 2 * dy3([t$$5, y$$5]) + dy4([t$$5, y$$5])) / 6]];
        } else {
            return null;
        }
    }, state);
}

export function y_exact(t$$6) {
    return Math.pow(Math.pow(t$$6, 2) + 4, 2) / 16;
}

(function () {
    let source$$1;
    const source = RungeKutta4(0, 1, 10, 0.1);
    source$$1 = filter(function predicate(tupledArg$$5) {
        const t$$7 = tupledArg$$5[0];
        const y$$6 = tupledArg$$5[1];
        return t$$7 % 1 === 0;
    }, source);
    iterate(function action(tupledArg$$6) {
        const t$$8 = tupledArg$$6[0];
        const y$$7 = tupledArg$$6[1];
        console.log(format("y({0})={1}\t(relative error:{2})", t$$8, y$$7, y$$7 / y_exact(t$$8) - 1));
    }, source$$1);
})();
