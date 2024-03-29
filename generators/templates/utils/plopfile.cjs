function plopFunction(plop) {
  plop.setGenerator('test', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome do arquivo?'
      }
    ],
    actions: function (data) {
      let actions = [];

      const path = '../../../src';

      actions.push({
        type: 'add',
        path: `${path}/{{camelCase name}}.util.ts`,
        templateFile: './utils.ts.hbs'
      });

      return actions;
    }
  });
}

module.exports = plopFunction;
