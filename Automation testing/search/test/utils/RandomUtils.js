class RandomUtils {
    _createPart4Chars() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    randomizeString(config = { length: 9 }) {
        const length =
            config.length > 9 || config.length < 1 ? 9 : config.length;

        return `${this._createPart4Chars()}-${this._createPart4Chars()}`.slice(
            -length
        );
    }

    randomNumWithinRange(min, max) {
        return Math.floor(Math.random() * max + min);
    }
}

module.exports = new RandomUtils();
