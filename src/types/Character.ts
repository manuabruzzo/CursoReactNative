/* eslint-disable no-shadow */
// To parse this data:
//
//   import { Convert } from "./file";
//
//   const character = Convert.toCharacter(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Character {
  id: number;
  name: string;
  birth: null | string;
  death: null | string;
  species: null | string;
  ancestry: null | string;
  gender: Gender | null;
  hairColor: null | string;
  eyeColor: null | string;
  wand: null | string;
  patronus: null | string;
  house: null | string;
  associatedGroups: string[];
  booksFeaturedIn: number[];
}

export enum Gender {
  AtLeastOneBoy = 'At least one boy',
  Female = 'Female',
  FemaleLikely = 'Female (likely)',
  Females = 'Females',
  FemalesMales = 'Females, Males',
  Male = 'Male',
  MaleLikely = 'Male (likely)',
  MaleMostLikely = 'Male (most likely)',
  Males = 'Males',
  MalesAndFemales = 'Males and females',
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toCharacter(json: string): Character[] {
    return cast(JSON.parse(json), a(r('Character')));
  }

  public static characterToJson(value: Character[]): string {
    return JSON.stringify(uncast(value, a(r('Character'))), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
  if (key) {
    throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
  }
  throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) {
      return val;
    }
    return invalidValue(typ, val, key);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) {
      return val;
    }
    return invalidValue(cases, val);
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) {
      return invalidValue('array', val);
    }
    return val.map((el) => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue('Date', val);
    }
    return d;
  }

  function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
    if (val === null || typeof val !== 'object' || Array.isArray(val)) {
      return invalidValue('object', val);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, prop.key);
    });
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key);
      }
    });
    return result;
  }

  if (typ === 'any') {
    return val;
  }
  if (typ === null) {
    if (val === null) {
      return val;
    }
    return invalidValue(typ, val);
  }
  if (typ === false) {
    return invalidValue(typ, val);
  }
  while (typeof typ === 'object' && typ.ref !== undefined) {
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) {
    return transformEnum(typ, val);
  }
  if (typeof typ === 'object') {
    return typ.hasOwnProperty('unionMembers')
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty('arrayItems')
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty('props')
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== 'number') {
    return transformDate(val);
  }
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  Character: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'birth', js: 'birth', typ: u(null, '') },
      { json: 'death', js: 'death', typ: u(null, '') },
      { json: 'species', js: 'species', typ: u(null, '') },
      { json: 'ancestry', js: 'ancestry', typ: u(null, '') },
      { json: 'gender', js: 'gender', typ: u(r('Gender'), null) },
      { json: 'hair_color', js: 'hairColor', typ: u(null, '') },
      { json: 'eye_color', js: 'eyeColor', typ: u(null, '') },
      { json: 'wand', js: 'wand', typ: u(null, '') },
      { json: 'patronus', js: 'patronus', typ: u(null, '') },
      { json: 'house', js: 'house', typ: u(null, '') },
      { json: 'associated_groups', js: 'associatedGroups', typ: a('') },
      { json: 'books_featured_in', js: 'booksFeaturedIn', typ: a(0) },
    ],
    false,
  ),
  Gender: [
    'At least one boy',
    'Female',
    'Female (likely)',
    'Females',
    'Females, Males',
    'Male',
    'Male (likely)',
    'Male (most likely)',
    'Males',
    'Males and females',
  ],
};
