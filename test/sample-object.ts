import PokeData from '../'; // import PokeData from '../lib/pokeData.js';

export const sample1: PokeData = new PokeData({
    "id": 10,
    "national_id": 20,
    "name": "Sample1",
    "form_name": "フォルム",
    "height": 30,
    "weight": 40,
    "types": [
        "みず",
        "ドラゴン"
    ],
    "base_stats": [
        50,
        60,
        70,
        80,
        90,
        100
    ],
    "gender_threshold": 110,
    "catch_rate": 120,
    "held_items": {
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
    },
    "abilities": ["すいすい", "スナイパー"]
});