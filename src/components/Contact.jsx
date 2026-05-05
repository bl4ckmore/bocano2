import { useState } from 'react'
import s from './Contact.module.css'
import { useLang } from '../LangContext'
import { translations } from '../i18n'

export default function Contact() {
  const { lang } = useLang()
  const tr = translations[lang].contact
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
        <h2 className={s.title}>{tr.title}</h2>
        <p className={s.sub}>{tr.subtitle}</p>

        {sent ? (
          <div className={s.thanks}>
            <span className={s.thanksIcon}>✦</span>
            <p className={s.thanksTitle}>{tr.sentTitle}</p>
            <p className={s.thanksSub}>{tr.sentSub}</p>
          </div>
        ) : (
          <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.field}>
              <label className={s.label}>{tr.name}</label>
              <input
                className={s.input}
                type="text"
                name="name"
                placeholder={tr.namePlaceholder}
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={s.field}>
              <label className={s.label}>{tr.phone}</label>
              <input
                className={s.input}
                type="tel"
                name="phone"
                placeholder={tr.phonePlaceholder}
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className={s.field}>
              <label className={s.label}>{tr.message}</label>
              <textarea
                className={s.textarea}
                name="message"
                placeholder={tr.messagePlaceholder}
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button className={s.btn} type="submit">{tr.send}</button>
          </form>
        )}
      </div>
    </section>
  )
}
