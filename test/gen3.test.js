'use asm';

import should from 'should';
import assert from 'assert';
import PokeData from '../dist';
import {フシギダネ, ピカチュウ, ハピナス, デオキシス} from './test-object';

describe('PokeData', () => {

  it('PokeData#id', () => {
    デオキシス.id.should.equal(416);
  });

  it('PokeData#nationalId', () => {
    デオキシス.nationalId.should.equal(386);
  });

  it('PokeData#name', () => {
    フシギダネ.name.should.equal('フシギダネ');
  });

  it('PokeData#formName', () => {
    デオキシス.formName.should.equal('ノーマルフォルム');
  });

  it('PokeData#height', () => {
    フシギダネ.height.should.equal(7 | 0);
  });

  it('PokeData#weight', () => {
    フシギダネ.weight.should.equal(69 | 0);
  });

  it('PokeData#types', () => {
    let actual = フシギダネ.types;
    let except = ["くさ", "どく"];
    assert.deepEqual(actual, except);
  });

  it('PokeData#baseStats', () => {
    let actual = フシギダネ.baseStats;
    let except = [45|0, 49|0, 49|0, 45|0, 65|0, 65|0];
    assert.deepEqual(actual, except);
  });

  it('PokeData#genderThreshold', () => {
    フシギダネ.genderThreshold.should.equal(31|0);
  });

  it('PokeData#catchRate', () => {
    デオキシス.catchRate.should.equal(3|0);
  });

  it('PokeData#heldItems', () => {
    let actual = ピカチュウ.heldItems;
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
    let actual = ハピナス.abilities;
    let except = ["しぜんかいふく", "てんのめぐみ"];
    assert.deepEqual(actual, except);
  });
});
