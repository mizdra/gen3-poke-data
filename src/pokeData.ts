'use strict';

import jsonSchema from './jsonSchema';

export default class PokeData {
    id: number;
    nationalId: number;
    name: string;
    formName: string;
    height: number;
    weight: number;
    types: string[];
    baseStats: number[];
    genderThreshold: number;
    catchRate: number;
    heldItems: {
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
    abilities: string[];

    constructor(json: jsonSchema) {
        this.id = json.id;
        this.nationalId = json.national_id;
        this.name = json.name;
        this.formName = json.form_name;
        this.height = json.height;
        this.weight = json.weight;
        this.types = json.types;
        this.baseStats = json.base_stats;
        this.genderThreshold = json.gender_threshold;
        this.catchRate = json.catch_rate;
        this.heldItems = json.held_items;
        this.abilities = json.abilities;
    }
}
