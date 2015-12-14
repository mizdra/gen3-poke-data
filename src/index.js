'use asm';

export default class PokeData {
  constructor(json) {
    this.id = json.id | 0;
    this.nationalId = json.national_id | 0;
    this.name = json.name;
    this.formName = json.form_name;
    this.height = json.height | 0;
    this.weight = json.weight | 0;
    this.types = json.types;
    this.baseStats = [
      json.base_stats[0] | 0,
      json.base_stats[1] | 0,
      json.base_stats[2] | 0,
      json.base_stats[3] | 0,
      json.base_stats[4] | 0,
      json.base_stats[5] | 0
    ];
    this.genderThreshold = json.gender_threshold | 0;
    this.catchRate = json.catch_rate;
    this.heldItems = json.held_items;
    this.abilities = json.abilities;
  }
}
