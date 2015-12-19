
export default JSONSchema;

interface JSONSchema {
    id: number;
    national_id: number;
    name: string;
    form_name: string;
    height: number;
    weight: number;
    types: string[];
    base_stats: number[];
    gender_threshold: number;
    catch_rate: number;
    held_items: {
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
}