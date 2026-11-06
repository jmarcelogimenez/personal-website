// All entries remain readable when JavaScript is unavailable.
const form = document.getElementById('publication-filters');
if (form) {
  const search = document.getElementById('publication-search');
  const year = document.getElementById('publication-year');
  const type = document.getElementById('publication-type');
  const records = [...document.querySelectorAll('.publication-record')];
  const normalise = (text) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const index = records.map((element) => ({ element, text: normalise(element.textContent) }));
  const update = () => {
    const terms = normalise(search.value.trim()).split(/\s+/).filter(Boolean);
    let count = 0;
    for (const { element, text } of index) {
      const match = (!year.value || year.value === element.dataset.year)
        && (!type.value || type.value === element.dataset.type)
        && terms.every((term) => text.includes(term));
      element.hidden = !match;
      if (match) count++;
    }
    for (const group of document.querySelectorAll('.publication-year-group')) {
      group.hidden = ![...group.querySelectorAll('.publication-record')].some((record) => !record.hidden);
    }
    document.getElementById('publication-count').textContent = `${count} ${count === 1 ? 'publication' : 'publications'}`;
    document.getElementById('publication-empty').hidden = count !== 0;
  };
  form.hidden = false;
  form.addEventListener('submit', (event) => event.preventDefault());
  form.addEventListener('input', update);
  form.addEventListener('change', update);
  form.addEventListener('reset', () => setTimeout(update, 0));
}
