import should from 'should';
import assert from 'assert';
import PokeData from '../dist';
import {sample1} from './test-object';

describe('PokeData', () => {

  it('PokeData#id', () => {
    sample1.id.should.equal(10);
  });

  it('PokeData#nationalId', () => {
    sample1.nationalId.should.equal(20);
  });

  it('PokeData#name', () => {
    sample1.name.should.equal('Sample1');
  });

  it('PokeData#formName', () => {
    sample1.formName.should.equal('フォルム');
  });

  it('PokeData#height', () => {
    sample1.height.should.equal(30);
  });

  it('PokeData#weight', () => {
    sample1.weight.should.equal(40);
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
    sample1.genderThreshold.should.equal(110);
  });

  it('PokeData#catchRate', () => {
    sample1.catchRate.should.equal(120);
  });

  it('PokeData#heldItems', () => {
    let actual = sample1.heldItems;
    let except = {
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
    let except = ["しぜんかいふく", "てんのめぐみ"];
    assert.deepEqual(actual, except);
  });
});
