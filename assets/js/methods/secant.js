import { toConsole, printf } from "fable-library/String.js";
export function secant($epsilon$$1, $f$$2, $guess1$$3, $guess0$$4) {
    secant: while (true) {
        const epsilon = $epsilon$$1,
            f = $f$$2,
            guess1 = $guess1$$3,
            guess0 = $guess0$$4;
        const newGuess = guess1 - f(guess1) * (guess1 - guess0) / (f(guess1) - f(guess0));
        const err = Math.abs(newGuess - guess1);

        if (err < epsilon) {
            const arg10 = newGuess;
            const clo1 = toConsole(printf("the root is: %f"));
            clo1(arg10);
            return newGuess;
        } else {
            $epsilon$$1 = epsilon;
            $f$$2 = f;
            $guess1$$3 = newGuess;
            $guess0$$4 = guess1;
            continue secant;
        }

        break;
    }
}
