const FORMS = {
  signup: [
    {
      title: "Get Started",
      type: "title"
    },
    {
      type: "text",
      label: "Username",
      placeholder: "Enter your username"
    },
    {
      type: "password",
      label: "Password",
      placeholder: "Enter your password"
    },
    {
      type: "password",
      label: "Confirm Password",
      placeholder: "Re-enter your password"
    },
    {
      type: "submit",
      text: "Signup"
    }
  ]
};

const removeModal = () => {};

const createModal = id => {
  const modalBg = createElem("div", {
    class: "modal-bg",
    id: `${id}-modal`
  });
  const modal = createElem("div", {
    class: "modal"
  });
  document.body.addChildren(modalBg.addChildren(modal));
  return modal;
};

const renderFormInModal = type => {
  const formElements = FORMS[type];

  const form = createElem("form").addChildren(
    formElements.map(elem => FORM_ELEMENTS[elem.type](elem)).filter(x => !!x)
  );

  createModal(type).addChildren(form);
};

renderFormInModal("signup");
