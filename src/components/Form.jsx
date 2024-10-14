import { useState } from "react";

const FormStyles = () => (
  <style jsx>{`
    .input-width,
    .textarea-width {
      max-width: 400px;
      width: 100%;
    }
    @media (max-width: 576px) {
      .input-width,
      .textarea-width {
        max-width: 100%;
      }
    }
  `}</style>
);

function Form() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((name.length) < 1 || (email.length < 1) || (message.length < 1)) {
      alert("Os campos não podem ser vazios!")
      return;
    } else {
		console.log(name)
		console.log(email)
		console.log(message)
	}
    setEmail("")
    setName("")
    setMessage("")
  }

  return (
    <section className="bg-light py-5">
      <div className="container">
        <FormStyles />
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend className="mb-4 text-center">Feedbacks e Sugestões</legend>
                <div className="row mb-3">
                  <label htmlFor="name" className="col-sm-3 col-form-label text-sm-end">
                    Nome:
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control input-width"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="email" className="col-sm-3 col-form-label text-sm-end">
                    Email:
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="email"
                      className="form-control input-width"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="message" className="col-sm-3 col-form-label text-sm-end">
                    Mensagem:
                  </label>
                  <div className="col-sm-9">
                    <textarea
                      className="form-control textarea-width"
                      id="message"
                      rows="4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-9 offset-sm-3">
                    <button className="btn btn-primary btn-lg" type="submit">
                      Entre em Contato
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;