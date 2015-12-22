'use strict';

import assert from 'power-assert';
import {sample1} from './sample-object';

describe('PokeData', () => {

    it('PokeData#id', () => {
        assert(sample1.id === 10);
    });

    it('PokeData#nationalId', () => {
        assert(sample1.nationalId === 20);
    });

    it('PokeData#name', () => {
        assert(sample1.name === 'Sample1');
    });

    it('PokeData#formName', () => {
        assert(sample1.formName === 'フォルム');
    });

    it('PokeData#height', () => {
        assert(sample1.height === 30);
    });

    it('PokeData#weight', () => {
        assert(sample1.weight === 40);
    });

    it('PokeData#types', () => {
        let actual = sample1.types;
        let except = ["みず", "ドラゴン"];
        assert.deepEqual(actual, except);
    });

    it('PokeData#baseStats', () => {
        let actual = sample1.baseStats;
        let except = [50, 60, 70, 80, 90, 100];
        assert.deepEqual(actual, except);
    });

    it('PokeData#genderThreshold', () => {
        assert(sample1.genderThreshold === 110);
    });

    it('PokeData#catchRate', () => {
        assert(sample1.catchRate === 120);
    });

    it('PokeData#heldItems', () => {
        let schema: {
            rse: {
                rarely: string,
                sometimes: string,
                always: string
            },
            frlg: {
                rarely: string,
                sometimes: string,
                always: string
            }
        };
        let actual = sample1.heldItems;
        let except: typeof schema = {
            "rse": {
                "rarely": "りゅうのウロコ",
                "sometimes": "りゅうのキバ",
                "always": null
            },
            "frlg": {
                "rarely": null,
                "sometimes": null,
                "always": "ドラゴンプレート"
            }
        };
        assert.deepEqual(actual, except);
    });

    it('PokeData#abilities', () => {
        let actual = sample1.abilities;
        let except = ["すいすい", "スナイパー"];
        assert.deepEqual(actual, except);
    });
});
