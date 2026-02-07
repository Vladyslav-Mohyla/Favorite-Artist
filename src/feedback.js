import { Notify } from 'notiflix';

export function initFeedbackModal() {
  const openBtn = document.querySelector('.js-open-feedback');
  const backdrop = document.querySelector('.js-feedback-backdrop');

  if (!openBtn || !backdrop) return;

  const closeBtn = backdrop.querySelector('.js-close-feedback');
  const form = backdrop.querySelector('.js-feedback-form');
  const stars = backdrop.querySelector('.js-rating');
  const error = backdrop.querySelector('.js-feedback-error');
  const loader = backdrop.querySelector('.js-feedback-loader');

  let rating = 0;

  function openModal() {
    backdrop.classList.add('active');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    backdrop.classList.remove('active');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    form.reset();
    rating = 0;
    [...stars.children].forEach(s => s.classList.remove('active'));
    error.textContent = '';
  }

  async function sendFeedback(data) {
    const response = await fetch(
      'https://sound-wave.b.goit.study/api/feedbacks',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error('Request failed');
    }
  }

  stars.addEventListener('click', e => {
    if (!e.target.dataset.value) return;
    rating = Number(e.target.dataset.value);

    [...stars.children].forEach(star =>
      star.classList.toggle('active', star.dataset.value <= rating)
    );
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    error.textContent = '';

    if (!form.name.value || !form.message.value || !rating) {
      error.textContent = 'Please fill all fields and select a rating';
      return;
    }

    try {
      loader.classList.remove('hidden');

      await sendFeedback({
        name: form.name.value.trim(),
        message: form.message.value.trim(),
        rating,
      });

      closeModal();
      Notify.success('Thank you for your feedback!');
    } catch {
      Notify.failure('Something went wrong. Please try again.');
    } finally {
      loader.classList.add('hidden');
    }
  });

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);

  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && backdrop.classList.contains('active')) {
      closeModal();
    }
  });
}
