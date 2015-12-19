import jsonSchema from './jsonSchema';

export default class PokeData {
    public id: number;
    public nationalId: number;
    public name: string;
    public formName: string;
    public height: number;
    public weight: number;
    public types: string[];
    public baseStats: number[];
    public genderThreshold: number;
    public catchRate: number;
    public heldItems: {
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
    public abilities: string[];

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
