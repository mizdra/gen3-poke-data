'use asm';

export default class PokeData {
  constructor(json) {
    this.id = json.id | 0;
    this.nationalId = json.national_id | 0;
    this.name = json.name;
    this.formName = json.form_name;
    this.baseStats = [
      json.base_stats[0] | 0,
      json.base_stats[1] | 0,
      json.base_stats[2] | 0,
      json.base_stats[3] | 0,
      json.base_stats[4] | 0,
      json.base_stats[5] | 0
    ];
    this.genderThreshold = json.gender_threshold | 0;
    this.heldItems = json.held_items;
    this.abilities = json.abilities;
  }
}
