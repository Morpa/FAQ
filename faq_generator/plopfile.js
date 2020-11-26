module.exports = function (plop) {

  plop.setGenerator('component', {
      description: 'Create a faq',
      prompts: [{
          type: 'input',
          name: 'title',
          message: 'What is your faq title?'
      }],
    actions: [
      {
        type: 'add',
        path: '../_faqs/{{lowerCase title}}.md',
        templateFile: 'templates/faq.md.hbs'
      }
    ]
  });
};
