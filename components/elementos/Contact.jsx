import './Contact.css'

function Contact() {
  return (
    <section id="contact">
      <h2>Contato</h2>
      <form>
        <label>Nome:</label>
        <input type="text" name="name" required />
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Mensagem:</label>
        <textarea name="message" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
