'use asm';

import should from 'should';
import assert from 'assert';
import PokeData from '../dist';
import testObj from './test-object';

describe('PokeData', () => {

  it('PokeData#id', () => {
    testObj['デオキシス'].id.should.equal(416);
  });

  it('PokeData#nationalId', () => {
    testObj['デオキシス'].nationalId.should.equal(386);
  });

  it('PokeData#name', () => {
    testObj['フシギダネ'].name.should.equal('フシギダネ');
  });

  it('PokeData#formName', () => {
    testObj['デオキシス'].formName.should.equal('ノーマルフォルム');
  });

  it('PokeData#baseStats', () => {
    let actual = testObj['フシギダネ'].baseStats;
    let except = [45|0, 49|0, 49|0, 45|0, 65|0, 65|0];
    assert.deepEqual(actual, except);
  });

  it('PokeData#genderThreshold', () => {
    testObj['フシギダネ'].genderThreshold.should.equal(31|0);
  });

  it('PokeData#heldItems', () => {
    let actual = testObj['ピカチュウ'].heldItems;
    let except = {
        "rse": {
            "rarely": "でんきだま",
            "sometimes": "オレンのみ",
            "always": null
        },
        "frlg": {
            "rarely": null,
            "sometimes": null,
            "always": null
        }
    };
    assert.deepEqual(actual, except);
  });

  it('PokeData#abilities', () => {
    let actual = testObj['ハピナス'].abilities;
    let except = ["しぜんかいふく", "てんのめぐみ"];
    assert.deepEqual(actual, except);
  });
});
