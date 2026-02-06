function initFeedbackModal() {
  const openBtn = document.querySelector('.js-open-feedback');
  const backdrop = document.querySelector('.js-feedback-backdrop');

  if (!openBtn || !backdrop) return;

  const closeBtn = backdrop.querySelector('.js-close-feedback');
  const form = backdrop.querySelector('.js-feedback-form');
  const stars = backdrop.querySelector('.js-rating');
  const error = backdrop.querySelector('.js-feedback-error');

  let rating = 0;

  openBtn.addEventListener('click', () => {
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  function closeModal() {
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);

  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && backdrop.classList.contains('active')) {
      closeModal();
    }
  });

  stars.addEventListener('click', e => {
    if (!e.target.dataset.value) return;
    rating = Number(e.target.dataset.value);

    [...stars.children].forEach(star =>
      star.classList.toggle('active', star.dataset.value <= rating)
    );
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    error.textContent = '';

    if (!form.name.value || !form.message.value || !rating) {
      error.textContent = 'Please fill all fields';
      return;
    }

    closeModal();
    form.reset();
    rating = 0;
    [...stars.children].forEach(s => s.classList.remove('active'));
  });
}

setTimeout(initFeedbackModal, 0);
