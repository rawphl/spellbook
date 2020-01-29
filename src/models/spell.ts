export type ApiReference = {
    name: string,
    url: string
}

export type Spell = {
    _id: string,
    name: string,
    index: string,
    desc: Array<string>,
    higher_level: Array<string>,
    page: string,
    range:  string,
    components: Array<string>,
    material: string,
    ritual: boolean,
    duration: string,
    concentrating: boolean,
    casting_time: string,
    level: number,
    url: string,
    school: ApiReference,
    classes: ApiReference,
    subclasses: ApiReference
}