//Packages
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Pokemon schema
var PokemonSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: 'no name',
        index: {
            unique: true
        }
    },
    type: String,
    count: {
      type: Number,
      default: 0
    },
    owner:{
      type: Schema.ObjectId,
      ref: 'User'
    }

});

PokemonSchema.post('findOne', function(pokemon){
  console.log('entra con find?');
  console.log(pokemon.count);
  pokemon.count ++;
  pokemon.save();
  console.log(pokemon.count);

})

PokemonSchema.methods.sayHi = function(){
  var pokemon = this;

  return '¡Hola!, soy un ' + pokemon.name + ' de tipo ' + pokemon.type;
}


//
// PokemonSchema.methods.comparePassword = function(password){
//   var user = this;
//
//   return bcrypt.compareSync(password, user.password);
// }
//

module.exports = mongoose.model('Pokemon', PokemonSchema);
