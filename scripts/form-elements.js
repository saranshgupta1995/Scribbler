const FORM_ELEMENTS = {
  text: elem => {
    return createElem("div", {
      class: "form-input text"
    }).addChildren([
      createElem(
        "label",
        {},
        {},
        {
          innerText: elem.label
        }
      ),
      createElem(
        "input",
        {
          required: elem.required
        },
        {},
        {
          type: elem.type,
          placeholder: elem.placeholder
        }
      )
    ]);
  },
  password: elem =>
    createElem("div", {
      class: "form-input password"
    }).addChildren([
      createElem(
        "label",
        {},
        {},
        {
          innerText: elem.label
        }
      ),
      createElem(
        "input",
        {
          required: elem.required
        },
        {},
        {
          type: elem.type,
          placeholder: elem.placeholder
        }
      )
    ]),
  title: elem => {
    return createElem("div", {
      class: "title"
    }).addChildren([
      createElem(
        "h2",
        {},
        {},
        {
          innerText: elem.title
        }
      ),
      createElem(
        "i",
        {
          class: "fa fa-times"
        },
        {
          onclick: () => {
            const form = document.getElementById(`${elem.parentForm}-modal`);
            form.parentElement.removeChild(form);
          }
        }
      )
    ]);
  },
  submit: elem =>
    createElem("button", {}, {}, { innerText: elem.text, type: "submit" }),
  footer: elem => createElem("footer").addChildren(elem.html())
};
