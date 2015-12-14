# gen3-poke-data
Node.jsで作られた第三世代ポケモン情報クラスです。


## 特徴
asm.js対応。(ただし動作未確認)

## 導入
```bash
$ npm install @mizdra/gen3-poke-data
```

```js
// ES5 import
var PokeData = require('@mizdra/gen3-poke-data');

// ES6 import
import PokeData from '@mizdra/gen3-poke-data';

var pokedata = new PokeData({
    "id": 1 | 0,
    "national_id": 1 | 0,
    "name": "フシギダネ",
    "form_name": null,
    "height": 7 | 0,
    "weight": 69 | 0,
    "types": [
        "くさ",
        "どく"
    ],
    "base_stats": [
        45 | 0,
        49 | 0,
        49 | 0,
        45 | 0,
        65 | 0,
        65 | 0
    ],
    "gender_threshold": 31 | 0,
    "catch_rate": 45 | 0,
    "held_items": {
        "rse": {
            "rarely": null,
            "sometimes": null,
            "always": null
        },
        "frlg": {
            "rarely": null,
            "sometimes": null,
            "always": null
        }
    },
    "abilities": ["しんりょく"]
});

console.log(pokedata.name); // => 'フシギダネ'
```


## ビルド
```bash
$ git clone https://github.com/mizdra/gen3-poke-data.git
$ cd gen3-poke-data
$ npm install -g  mocha gulp
$ npm install
$ gulp
```

### テスト
```bash
$ npm test
```
