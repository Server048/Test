import { Schema, model } from 'mongoose'

export let test = new Schema({
	Content: String
})

export default model('TestI47ni', test)
