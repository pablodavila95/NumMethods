import { toConsole, printf } from "fable-library/String.js";
export function newton($epsilon$$1, $f$$2, $f$0027$$3, $guess$$4) {
    newton: while (true) {
        const epsilon = $epsilon$$1,
            f = $f$$2,
            f$0027 = $f$0027$$3,
            guess = $guess$$4;
        const newGuess = guess - f(guess) / f$0027(guess);
        const err = Math.abs(newGuess - guess);

        if (err < epsilon) {
            const arg10 = newGuess;
            const clo1 = toConsole(printf("the root is: %f"));
            clo1(arg10);
            return newGuess;
        } else {
            $epsilon$$1 = epsilon;
            $f$$2 = f;
            $f$0027$$3 = f$0027;
            $guess$$4 = guess;
            continue newton;
        }

        break;
    }
}
