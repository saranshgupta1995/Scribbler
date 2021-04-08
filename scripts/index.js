let showForm = null;

const FORMS = {
  signup: [
    {
      title: "Get Started",
      type: "title",
      parentForm: "signup"
    },
    {
      type: "text",
      label: "Name",
      placeholder: "Enter your name",
      required: true
    },
    {
      type: "text",
      label: "Username",
      placeholder: "Enter your username",
      required: true
    },
    {
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
      required: true
    },
    {
      type: "password",
      label: "Confirm Password",
      placeholder: "Re-enter your password",
      required: true
    },
    {
      type: "submit",
      text: "Signup"
    }
  ],
  signin: [
    {
      title: "Welcome Back!",
      type: "title",
      parentForm: "signin"
    },
    {
      type: "text",
      label: "Username",
      placeholder: "Enter your username",
      required: true
    },
    {
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
      required: true
    },
    {
      type: "submit",
      text: "Signin"
    },
    {
      type: "footer",
      html: () =>
        createElem("p").addChildren([
          createElem(
            "span",
            {},
            {},
            {
              innerText: "Not a member? "
            }
          ),
          createElem(
            "span",
            {
              class: "link"
            },
            {
              onclick: () => {
                const signinForm = document.getElementById("signin-modal");
                signinForm.parentElement.removeChild(signinForm);
                showForm("signup");
              }
            },
            {
              innerText: "Sign Up"
            }
          )
        ])
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

showForm = formName => renderFormInModal(formName);
