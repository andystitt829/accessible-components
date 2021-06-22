// Accordion
const accordionHeaders = document.querySelectorAll('button[data-accordion-header]');
Array.prototype.forEach.call(accordionHeaders, accordionHeader => {
  let target = accordionHeader.parentElement.nextElementSibling;
  accordionHeader.onclick = () => {
    let expanded = accordionHeader.getAttribute('aria-expanded') === 'true' || false;
    accordionHeader.setAttribute('aria-expanded', !expanded);
    target.hidden = expanded;
  }
})