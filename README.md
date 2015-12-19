# gen3-poke-data
第三世代ポケモン情報クラス。


## 特徴
TypeScriptによる型補完。

## インストール
```bash
$ npm install @mizdra/gen3-poke-data
```

```js
// ES5 import
var PokeData = require('@mizdra/gen3-poke-data').PokeData;

// ES6 import
import {PokeData} from '@mizdra/gen3-poke-data';

let pokedata = new PokeData({
    "id": 1,
    "national_id": 1,
    "name": "フシギダネ",
    "form_name": null,
    "height": 7,
    "weight": 69,
    "types": [
        "くさ",
        "どく"
    ],
    "base_stats": [
        45,
        49,
        49,
        45,
        65,
        65
    ],
    "gender_threshold": 31,
    "catch_rate": 45,
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
$ dtsm install
$ gulp
```

### テスト
```bash
$ npm test
```
