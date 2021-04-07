/**
 * A function that is used to create HTML DOM elements in a cleaner fashion allowing increased readability
 * @param {String} elem HTML Tag for the element
 * @param {Object} attrs All additional attributes needed, passed as key value pairs
 * @param {Object} properties All additional properties needed, passed as key value pairs
 * @returns HTMLElement
 */
const createElem = (elem, attrs = {}, handlers = {}, properties = {}) => {
  const element = document.createElement(elem);
  for (let attr in attrs) {
    element.setAttribute(attr, attrs[attr]);
  }
  for (let handler in handlers) {
    element[handler] = handlers[handler];
  }
  for (let property in properties) {
    element[property] = properties[property];
  }
  return element;
};

/**
 * A method added to the prototype for increased code readability.
 * vs .appendChild, this returns parent instead of the child added
 * @param {HTMLElement} elem The target HTML Element || array of elements
 * @returns this
 */
HTMLElement.prototype.addChildren = function(children) {
  const elem = this;
  if (Object.prototype.toString.call(children) === "[object Array]")
    Array.prototype.forEach.call(children, child => {
      elem.appendChild(child);
    });
  else elem.appendChild(children);
  return elem;
};
