import api from '../api.json';
import { nomarlize, schema } from 'normalizr';
import { normalize } from 'path';


const media = new schemas.Entity(key, {}, {})
const media = new schemas.Entity('media', {}, {})

const category = new schema.Entity();

const categories = 

const normalizedData = normalize(api, categories);

export default normalizedData;