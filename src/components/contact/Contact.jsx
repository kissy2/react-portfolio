import React, { useRef, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { config } from "../../config";
import "./Contact.scss";

export default function Contact() {
  const form = useRef(null);
  const status = useRef(null);
  const name = useRef(null);
  const [loading, setLoading] = useState(false);

  async function handleForm(e) {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.target);

    fetch(e.target.action, {
      method: form.current.method,
      body: data,
      headers: {
          'Accept': 'application/json',
      }
    }).then(response => {
      if (response.ok) {
        status.current.className = "status";
        status.current.innerHTML = `<h3>Email Sent Successfully.</h3><p>Thank you ${name.current.value}, your message has been submitted.</p>`;
        form.current.reset()
      } else {
        response.json().then(data => {
          status.current.className = "alert alert-warning error_message"; 
          if (Object.hasOwn(data, 'errors')) 
            status.current.innerHTML = data["errors"].map(error => error["message"]).join(", ");
          else
            status.current.innerHTML = "Oops! There was a problem submitting your form";
        })
      }
      setLoading(false);
    }).catch(error => {
      status.current.className = "status alert alert-warning error_message"; 
      status.current.innerHTML = "Oops! There was a problem submitting your form";
      setLoading(false);
    });
  }
  return (
    <section id="contact">
      <Container>
        <h2 className="heading-sec-mb">
          <span className="heading-sec-main">Contact</span>
          <span className="heading-sec-sub">
            {config.contact.titleDescription}
          </span>
        </h2>

        <Row>
          <div className="text-center col-md-4 mb-4">
            <FiPhone className="icon" />
            <div className="mt-4">
              <h5>Phone</h5>
              <p
                dangerouslySetInnerHTML={{
                  __html: config.contact.phoneDescription,
                }}
              />
              <a
                href={`tel:${config.contact.phoneNumber}`}
                className="text-primary"
              >
                {config.contact.phoneNumber}
              </a>
            </div>
          </div>

          <div className="text-center col-md-4 mb-4">
            <FiMail className="icon" />
            <div className="mt-4">
              <h5>Email</h5>
              <p
                dangerouslySetInnerHTML={{
                  __html: config.contact.emailDescription,
                }}
              />
              <a
                href={`mailto:${config.contact.email}`}
                className="text-primary"
              >
                {config.contact.email}
              </a>
            </div>
          </div>

          <div className="text-center col-md-4 mb-4">
            <FiMapPin className="icon" />
            <div className="mt-4">
              <h5>Location</h5>
              <p
                dangerouslySetInnerHTML={{
                  __html: config.contact.locationDescription,
                }}
              />
              <a href={`${config.contact.location}`} target="_blank" className="text-primary">
                View on Google map
              </a>
            </div>
          </div>
        </Row>
      </Container>

      <Container className="pt-5">
        <form
          ref={ form }
          method="POST"
          action={ config.contact.form }
          name="myForm"
          onSubmit={handleForm}
        >
          <div ref={ status } className="status"></div>

          <Row>
            <div className="col-lg-6">
              <Row>
                <div className="col-lg-12 col-md-6 form-sec-mb">
                  <input
                    ref={ name }
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Your Name :"
                    minLength="3"
                    required
                  />
                </div>
                <div className="col-lg-12 col-md-6 form-sec-mb">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Your email :"
                    required
                  />
                </div>
                <div className="col-lg-12 form-sec-mb">
                  <input
                    name="subject"
                    className="form-control"
                    placeholder="Your subject :"
                    required
                  />
                </div>
              </Row>
            </div>

            <div className="col-lg-6 form-sec-mb">
              <textarea
                name="comments"
                rows="4"
                className="form-control"
                placeholder="Your Message"
                minLength="5"
                required
              />
            </div>
          </Row>

          <Row>
            <div className="col-sm-12 text-end">
              <input
                type="submit"
                name="submit"
                className="btn btn-custom rounded"
                value="Send Message"
                disabled={ loading }
              />
            </div>
          </Row>
        </form>
      </Container>
    </section>
  );
}
