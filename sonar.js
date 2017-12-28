var fs = require('fs');
var Handlebars = require('handlebars');

Handlebars.registerHelper('ifCond', function(v1, operator, v2, options) {
    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '!=':
            return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '!==':
            return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
});

var measureFile = process.argv[2]; // "./sonar_measure.json"

if (!(measureFile && outputFile)) {
  console.error('Usage: sonar.js <measure_json>');
  return process.exit(1);
}

var measure = require(measureFile);
var tplReliability = fs.readFileSync('./tpl_sonar.html', 'utf8');

var template = Handlebars.compile(tplReliability);
var html = template(measure);

console.log(html);

