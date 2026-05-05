import { useState } from 'react'
import s from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', form)
    setSent(true)
  }

  return (
    <section id="contact" className={s.section}>
      <div className={s.inner}>
        <h2 className={s.title}>Contact Us</h2>
        <p className={s.sub}>Have a project in mind? Let's talk. Fill in the form and we'll get back to you shortly.</p>

        {sent ? (
          <div className={s.thanks}>
            <span className={s.thanksIcon}>✦</span>
            <p className={s.thanksTitle}>Message sent.</p>
            <p className={s.thanksSub}>Thank you — we'll be in touch soon.</p>
          </div>
        ) : (
          <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.field}>
              <label className={s.label}>Name</label>
              <input
                className={s.input}
                type="text"
                name="name"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={s.field}>
              <label className={s.label}>Phone</label>
              <input
                className={s.input}
                type="tel"
                name="phone"
                placeholder="+995 555 000 000"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className={s.field}>
              <label className={s.label}>Message</label>
              <textarea
                className={s.textarea}
                name="message"
                placeholder="Tell us about your project..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button className={s.btn} type="submit">Send Message</button>
          </form>
        )}
      </div>
    </section>
  )
}